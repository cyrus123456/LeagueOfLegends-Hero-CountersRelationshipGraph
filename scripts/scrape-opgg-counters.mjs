/**
 * OP.GG 英雄克制数据爬取脚本（合并版）
 * 从 https://op.gg/zh-cn/lol/champions 全英雄页面依次点击每个英雄，
 * 在详情页的 section.w-full.bg-gray-0 中提取：
 *   - "对线劣势的英雄" → 被克制（hardToDealWith / weak_against）
 *   - "强烈对抗"       → 克制（easyToDealWith / strong_against）
 *
 * 使用方法: node scripts/scrape-opgg-counters.mjs
 * 可选参数:
 *   --limit=N    仅爬取前 N 个英雄（调试用）
 *   --resume     从已有进度继续
 *   --headless   无头模式（默认有头，方便调试观察）
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const HARD_OUTPUT_PATH = path.join(PROJECT_ROOT, 'src', 'data', 'opgg-hard-counters.json');
const EASY_OUTPUT_PATH = path.join(PROJECT_ROOT, 'src', 'data', 'opgg-easy-counters.json');
const PROGRESS_PATH = path.join(__dirname, 'opgg-counters-progress.json');

const BASE_URL = 'https://op.gg/zh-cn/lol/champions';
const DELAY_MS = 2000;

const args = process.argv.slice(2);
const limitArg = args.find((a) => a.startsWith('--limit='));
const limit = limitArg ? Number.parseInt(limitArg.split('=')[1], 10) : undefined;
const resume = args.includes('--resume');
const headless = args.includes('--headless');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getChampionList(page) {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);

  return page.evaluate(() => {
    const container = document.querySelector('.champion-list-container');
    if (!container) {
      console.warn('champion-list-container not found, fallback to all links');
    }
    const root = container || document;
    const links = root.querySelectorAll('a[href*="/lol/champions/"]');
    const seen = new Set();
    const champions = [];

    for (const a of links) {
      const href = a.getAttribute('href') || '';
      const match = href.match(/\/lol\/champions\/([a-z0-9_]+)\/build(?:\/([a-z]+))?/);
      if (!match) continue;

      const id = match[1];
      const position = match[2] || 'all';
      const key = `${id}:${position}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const img = a.querySelector('img');
      const name = img?.alt || a.textContent?.trim() || id;

      champions.push({
        id,
        name,
        position,
        href,
      });
    }

    const byId = new Map();
    for (const champ of champions) {
      if (!byId.has(champ.id)) {
        byId.set(champ.id, champ);
      }
    }

    return Array.from(byId.values()).sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
  });
}

async function extractCounters(page) {
  return page.evaluate(() => {
    const result = {
      championName: '',
      championId: '',
      position: '',
      hardToDealWith: [],
      easyToDealWith: [],
    };

    const titleMatch = document.title.match(/^(.+?)\s/);
    result.championName = titleMatch?.[1] || '';

    const urlMatch = location.pathname.match(/\/champions\/([a-z0-9_]+)\/build(?:\/([a-z]+))?/);
    if (urlMatch) {
      result.championId = urlMatch[1];
      result.position = urlMatch[2] || 'all';
    }

    const sections = document.querySelectorAll('section.w-full.bg-gray-0');
    let counterSection = null;
    for (const section of sections) {
      const text = section.textContent || '';
      if (text.includes('对线劣势') || text.includes('强烈对抗')) {
        counterSection = section;
        break;
      }
    }

    if (!counterSection) {
      return result;
    }

    const directChildren = Array.from(counterSection.children);
    let currentType = null;

    for (const child of directChildren) {
      const text = child.textContent?.trim() || '';

      if (text.includes('对线劣势')) {
        currentType = 'weak';
        continue;
      }
      if (text.includes('强烈对抗')) {
        currentType = 'strong';
        continue;
      }

      if (currentType === 'weak' || currentType === 'strong') {
        const links = child.querySelectorAll('a[href*="target_champion"]');
        if (links.length === 0) continue;

        for (const a of links) {
          const href = a.getAttribute('href') || '';
          let targetId = '';
          try {
            const url = new URL(href, location.origin);
            targetId = url.searchParams.get('target_champion') || '';
          } catch {
            const match = href.match(/target_champion=([a-z0-9_]+)/);
            targetId = match?.[1] || '';
          }

          const img = a.querySelector('img');
          const targetName = img?.alt || '';

          const fullText = a.textContent?.trim()?.replace(/\s+/g, ' ') || '';
          const winrateMatch = fullText.match(/([\d.]+)%/);
          const gamesMatch = fullText.match(/([\d,]+)\s*场/);

          const entry = {
            targetId,
            targetName,
            winrate: winrateMatch ? Number.parseFloat(winrateMatch[1]) : null,
            games: gamesMatch ? Number.parseInt(gamesMatch[1].replace(/,/g, ''), 10) : null,
            url: new URL(href, location.origin).href,
          };

          if (currentType === 'weak') {
            result.hardToDealWith.push(entry);
          } else {
            result.easyToDealWith.push(entry);
          }
        }

        currentType = null;
      }
    }

    return result;
  });
}

async function scrapeChampion(page, champion) {
  const fullUrl = new URL(champion.href, BASE_URL).href;
  await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(DELAY_MS);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  const data = await extractCounters(page);
  data.scrapedAt = new Date().toISOString();
  data.sourceUrl = fullUrl;

  if (!data.championName) {
    data.championName = champion.name;
  }
  if (!data.championId) {
    data.championId = champion.id;
  }

  return data;
}

function loadProgress() {
  if (!resume || !fs.existsSync(PROGRESS_PATH)) {
    return { completed: [], results: [] };
  }
  return JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf-8'));
}

function saveProgress(completed, results) {
  fs.writeFileSync(
    PROGRESS_PATH,
    JSON.stringify({ completed, results, updatedAt: new Date().toISOString() }, null, 2),
    'utf-8',
  );
}

function saveFinalOutput(results) {
  const hardChampions = results.map((r) => ({
    championName: r.championName,
    championId: r.championId,
    position: r.position,
    hardToDealWith: r.hardToDealWith,
    scrapedAt: r.scrapedAt,
    sourceUrl: r.sourceUrl,
    ...(r.error ? { error: r.error } : {}),
  }));

  const easyChampions = results.map((r) => ({
    championName: r.championName,
    championId: r.championId,
    position: r.position,
    easyToDealWith: r.easyToDealWith,
    scrapedAt: r.scrapedAt,
    sourceUrl: r.sourceUrl,
    ...(r.error ? { error: r.error } : {}),
  }));

  const hardOutput = {
    source: BASE_URL,
    description: 'OP.GG 英雄详情页"对线劣势的英雄"（weak_against / 被克制）数据',
    generatedAt: new Date().toISOString(),
    totalChampions: hardChampions.length,
    champions: hardChampions,
  };

  const easyOutput = {
    source: BASE_URL,
    description: 'OP.GG 英雄详情页"强烈对抗"（strong_against / 克制）数据',
    generatedAt: new Date().toISOString(),
    totalChampions: easyChampions.length,
    champions: easyChampions,
  };

  fs.writeFileSync(HARD_OUTPUT_PATH, JSON.stringify(hardOutput, null, 2), 'utf-8');
  fs.writeFileSync(EASY_OUTPUT_PATH, JSON.stringify(easyOutput, null, 2), 'utf-8');
}

async function main() {
  console.log('=== OP.GG 英雄克制数据爬取（合并版）===\n');
  console.log(`模式: ${headless ? '无头' : '有头'}\n`);

  const browser = await chromium.launch({ headless });
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    locale: 'zh-CN',
  });
  const page = await context.newPage();

  try {
    console.log('Step 1: 获取英雄列表...');
    let champions = await getChampionList(page);
    console.log(`找到 ${champions.length} 个英雄\n`);

    if (limit) {
      champions = champions.slice(0, limit);
      console.log(`调试模式: 仅爬取前 ${limit} 个英雄\n`);
    }

    const progress = loadProgress();
    const completedSet = new Set(progress.completed);
    const results = [...progress.results];

    console.log('Step 2: 依次访问英雄详情页，提取"对线劣势"和"强烈对抗"数据...\n');

    for (let i = 0; i < champions.length; i++) {
      const champion = champions[i];

      if (completedSet.has(champion.id)) {
        console.log(`  [${i + 1}/${champions.length}] 跳过 ${champion.name} (${champion.id}) - 已完成`);
        continue;
      }

      try {
        const data = await scrapeChampion(page, champion);
        results.push(data);
        completedSet.add(champion.id);

        const weakNames = data.hardToDealWith.map((c) => c.targetName || c.targetId).join(', ');
        const strongNames = data.easyToDealWith.map((c) => c.targetName || c.targetId).join(', ');
        console.log(
          `  [${i + 1}/${champions.length}] ${data.championName} (${data.championId})`,
        );
        console.log(`    被克制 ${data.hardToDealWith.length} 个: ${weakNames || '无'}`);
        console.log(`    克制   ${data.easyToDealWith.length} 个: ${strongNames || '无'}`);

        if ((i + 1) % 10 === 0) {
          saveProgress([...completedSet], results);
          console.log(`  --- 进度已保存 ---`);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.warn(`  [${i + 1}/${champions.length}] ${champion.name} (${champion.id}) 失败: ${message}`);
        results.push({
          championId: champion.id,
          championName: champion.name,
          position: champion.position,
          sourceUrl: champion.href,
          hardToDealWith: [],
          easyToDealWith: [],
          error: message,
          scrapedAt: new Date().toISOString(),
        });
        completedSet.add(champion.id);
      }

      await sleep(500);
    }

    saveProgress([...completedSet], results);
    saveFinalOutput(results);

    const successHard = results.filter((r) => r.hardToDealWith?.length > 0).length;
    const successEasy = results.filter((r) => r.easyToDealWith?.length > 0).length;

    console.log(`\n数据已保存:`);
    console.log(`  被克制: ${HARD_OUTPUT_PATH} (${successHard} 个英雄有数据)`);
    console.log(`  克制:   ${EASY_OUTPUT_PATH} (${successEasy} 个英雄有数据)`);
    console.log(`  共 ${results.length} 个英雄\n`);
    console.log('=== 爬取完成 ===');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('爬取失败:', err);
  process.exit(1);
});
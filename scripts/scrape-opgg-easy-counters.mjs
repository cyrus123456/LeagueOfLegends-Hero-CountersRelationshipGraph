/**
 * OP.GG 英雄"好对付"数据爬取脚本
 * 从 https://op.gg/zh-cn/lol/champions 获取所有英雄详情页的"好对付"克制关系
 *
 * 使用方法: node scripts/scrape-opgg-easy-counters.mjs
 * 可选参数:
 *   --limit=N    仅爬取前 N 个英雄（调试用）
 *   --resume     从已有进度继续
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'src', 'data', 'opgg-easy-counters.json');
const PROGRESS_PATH = path.join(__dirname, 'opgg-easy-counters-progress.json');

const BASE_URL = 'https://op.gg/zh-cn/lol/champions';
const DELAY_MS = 1500;

const args = process.argv.slice(2);
const limitArg = args.find((a) => a.startsWith('--limit='));
const limit = limitArg ? Number.parseInt(limitArg.split('=')[1], 10) : undefined;
const resume = args.includes('--resume');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getChampionList(page) {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);

  return page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href*="/lol/champions/"]'));
    const seen = new Set();
    const champions = [];

    for (const a of links) {
      const href = a.getAttribute('href') || '';
      const match = href.match(/\/lol\/champions\/([a-z0-9]+)\/build(?:\/([a-z]+))?/);
      if (!match) continue;

      const id = match[1];
      const position = match[2] || 'all';
      const key = `${id}:${position}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const img = a.querySelector('img');
      const name = a.textContent?.trim() || img?.alt || id;

      champions.push({
        id,
        name,
        position,
        url: a.href,
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

async function extractEasyCounters(page) {
  return page.evaluate(() => {
    const result = {
      championName: '',
      championId: '',
      position: '',
      easyToDealWith: [],
    };

    const titleMatch = document.title.match(/^(.+?)\s/);
    result.championName = titleMatch?.[1] || '';

    const urlMatch = location.pathname.match(/\/champions\/([a-z0-9]+)\/build(?:\/([a-z]+))?/);
    if (urlMatch) {
      result.championId = urlMatch[1];
      result.position = urlMatch[2] || 'all';
    }

    const labels = Array.from(document.querySelectorAll('.text-xs.text-gray-400'));
    const easyLabel = labels.find((el) => el.textContent?.trim() === '好对付');
    if (!easyLabel) {
      return result;
    }

    const easyContainer = easyLabel.parentElement?.nextElementSibling;
    if (!easyContainer) {
      return result;
    }

    const links = easyContainer.querySelectorAll('a[href*="target_champion"]');
    for (const a of links) {
      const href = a.href;
      const url = new URL(href);
      const targetId = url.searchParams.get('target_champion') || '';
      const text = a.textContent?.trim()?.replace(/\s+/g, ' ') || '';
      const winrateMatch = text.match(/([\d.]+)%/);
      const gamesMatch = text.match(/([\d,]+)\s*场次/);

      const img = a.querySelector('img');
      const targetName = img?.alt || '';

      result.easyToDealWith.push({
        targetId,
        targetName,
        winrate: winrateMatch ? Number.parseFloat(winrateMatch[1]) : null,
        games: gamesMatch ? Number.parseInt(gamesMatch[1].replace(/,/g, ''), 10) : null,
        url: href,
      });
    }

    return result;
  });
}

async function scrapeChampion(page, champion) {
  await page.goto(champion.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(DELAY_MS);

  await page.waitForSelector('.text-xs.text-gray-400', { timeout: 15000 }).catch(() => null);

  const data = await extractEasyCounters(page);
  data.scrapedAt = new Date().toISOString();
  data.sourceUrl = champion.url;

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
  const output = {
    source: BASE_URL,
    description: 'OP.GG 英雄详情页"好对付"（strong_against）数据',
    generatedAt: new Date().toISOString(),
    totalChampions: results.length,
    champions: results,
  };
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
}

async function main() {
  console.log('=== OP.GG 英雄"好对付"数据爬取 ===\n');

  const browser = await chromium.launch({ headless: true });
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

    console.log('Step 2: 依次访问英雄详情页，提取"好对付"数据...\n');

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

        const counterNames = data.easyToDealWith.map((c) => c.targetName || c.targetId).join(', ');
        console.log(
          `  [${i + 1}/${champions.length}] ${data.championName} (${data.championId}) - 好对付 ${data.easyToDealWith.length} 个: ${counterNames || '无'}`,
        );

        if ((i + 1) % 10 === 0) {
          saveProgress([...completedSet], results);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.warn(`  [${i + 1}/${champions.length}] ${champion.name} (${champion.id}) 失败: ${message}`);
        results.push({
          championId: champion.id,
          championName: champion.name,
          position: champion.position,
          sourceUrl: champion.url,
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

    console.log(`\n数据已保存到: ${OUTPUT_PATH}`);
    console.log(`共 ${results.length} 个英雄，成功提取 ${results.filter((r) => r.easyToDealWith?.length > 0).length} 个有"好对付"数据\n`);
    console.log('=== 爬取完成 ===');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('爬取失败:', err);
  process.exit(1);
});

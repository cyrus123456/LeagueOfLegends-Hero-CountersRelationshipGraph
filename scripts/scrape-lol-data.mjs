/**
 * 英雄联盟攻略中心数据爬取脚本
 * 从 https://101.qq.com 爬取英雄克制关系数据
 * 
 * 使用方法: node scripts/scrape-lol-data.mjs
 * 
 * 策略: 在浏览器中通过 script 标签注入加载 champDetail JS 文件，
 * 避免 CORS 限制，直接获取英雄对战数据。
 * 注意: champDetail中的championFight只有championid2，没有hero2_info，
 * 需要通过英雄列表映射championid → hero info。
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

function calculateCounterStrength(winrate) {
  if (winrate >= 5300) return 3;
  if (winrate >= 5100) return 2;
  if (winrate > 5000) return 1;
  return 0;
}

function calculateCounteredByStrength(winrate) {
  if (winrate <= 4700) return 3;
  if (winrate <= 4900) return 2;
  if (winrate < 5000) return 1;
  return 0;
}

async function main() {
  console.log('=== 英雄联盟攻略中心数据爬取 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    console.log('Step 1: 访问攻略中心...');
    await page.goto('https://101.qq.com/#/hero', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    console.log('Step 2: 获取英雄列表...');
    const heroes = await page.evaluate(async () => {
      const response = await fetch('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=' + (Date.now() / 600000 >> 0));
      const data = await response.json();
      return data.hero || [];
    });
    console.log(`获取到 ${heroes.length} 个英雄\n`);

    // 构建映射: championid → hero info
    const heroIdToInfo = {};
    for (const hero of heroes) {
      heroIdToInfo[hero.heroId] = hero;
    }

    // 构建映射: championid → alias (用于生成heroId)
    const heroIdToAlias = {};
    for (const hero of heroes) {
      heroIdToAlias[hero.heroId] = hero.alias.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    console.log('Step 3: 爬取英雄克制关系数据...');
    const allHeroData = [];
    const allCounterRelations = [];
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < heroes.length; i++) {
      const hero = heroes[i];
      const heroId = hero.heroId;

      try {
        // 通过 script 标签注入加载 champDetail 数据
        const detailData = await page.evaluate(async (id) => {
          const ts = (Date.now() / 600000 >> 0);
          const url = `https://lol.qq.com/act/lbp/common/guides/champDetail/champDetail_${id}.js?ts=${ts}`;
          const varName = `CHAMPION_DETAIL_${id}`;

          return new Promise((resolve) => {
            // 清除缓存重新加载
            if (window[varName]) delete window[varName];

            const script = document.createElement('script');
            script.src = url;
            script.onload = () => {
              const data = window[varName];
              script.remove();
              resolve(data || null);
            };
            script.onerror = () => {
              script.remove();
              resolve(null);
            };
            document.head.appendChild(script);
          });
        }, heroId);

        if (!detailData || !detailData.list || !detailData.list.championFight) {
          console.warn(`  [${i + 1}/${heroes.length}] 英雄 ${hero.name}(${heroId}) 无克制数据`);
          failCount++;
          continue;
        }

        const championFight = detailData.list.championFight;
        const alias = hero.alias.toLowerCase().replace(/[^a-z0-9]/g, '');

        // 收集英雄基本信息
        allHeroData.push({
          heroId: heroId,
          alias: hero.alias,
          id: alias,
          name: hero.name,
          title: hero.title,
          nameEn: hero.alias,
          roles: hero.roles || [],
          image: `https://game.gtimg.cn/images/lol/act/img/champion/${hero.alias}.png`,
        });

        // 提取克制关系 - 合并不同分路的数据
        const mergedCounters = {};
        for (const [lane, fights] of Object.entries(championFight)) {
          if (!Array.isArray(fights)) continue;
          for (const fight of fights) {
            const opponentId = fight.championid2;
            const winrate = fight.winrate;
            if (!mergedCounters[opponentId] || winrate > mergedCounters[opponentId].winrate) {
              mergedCounters[opponentId] = {
                opponentId,
                winrate,
                lane,
              };
            }
          }
        }

        // 按胜率排序（从高到低）
        const sortedCounters = Object.values(mergedCounters).sort((a, b) => b.winrate - a.winrate);

        // 提取克制关系（胜率 > 50%的英雄）
        const counters = [];
        for (const item of sortedCounters) {
          if (item.winrate > 5000) {
            const strength = calculateCounterStrength(item.winrate);
            if (strength > 0) {
              const oppAlias = heroIdToAlias[item.opponentId] || '';
              const oppInfo = heroIdToInfo[item.opponentId];
              counters.push({
                heroId: oppAlias,
                name: oppInfo?.name || '',
                alias: oppInfo?.alias || '',
                winrate: item.winrate,
                strength,
              });
            }
          }
        }

        // 提取被克制关系（胜率 < 50%的英雄）- 从列表末尾开始
        const counteredBy = [];
        const reversedCounters = [...sortedCounters].reverse();
        for (const item of reversedCounters) {
          if (item.winrate < 5000) {
            const strength = calculateCounteredByStrength(item.winrate);
            if (strength > 0) {
              const oppAlias = heroIdToAlias[item.opponentId] || '';
              const oppInfo = heroIdToInfo[item.opponentId];
              counteredBy.push({
                heroId: oppAlias,
                name: oppInfo?.name || '',
                alias: oppInfo?.alias || '',
                winrate: item.winrate,
                strength,
              });
            }
          }
        }

        allCounterRelations.push({
          heroId: alias,
          heroName: `${hero.name} ${hero.title}`,
          heroUrl: `https://101.qq.com/#/hero-detail?heroid=${heroId}`,
          counters: counters.slice(0, 10),
          counteredBy: counteredBy.slice(0, 10),
        });

        successCount++;

        if ((i + 1) % 10 === 0 || i === heroes.length - 1) {
          console.log(`  [${i + 1}/${heroes.length}] 已处理 ${successCount} 成功, ${failCount} 失败`);
        }
      } catch (err) {
        console.warn(`  [${i + 1}/${heroes.length}] 英雄 ${hero.name}(${heroId}) 处理失败: ${err.message}`);
        failCount++;
      }
    }

    console.log(`\n共获取 ${allHeroData.length} 个英雄数据`);
    console.log(`共获取 ${allCounterRelations.length} 个英雄克制关系\n`);

    console.log('Step 4: 保存数据...');
    const rawDataPath = path.join(PROJECT_ROOT, 'scripts', 'lol-raw-data.json');
    fs.writeFileSync(rawDataPath, JSON.stringify({
      heroes: allHeroData,
      counterRelations: allCounterRelations,
      generatedAt: new Date().toISOString(),
    }, null, 2), 'utf-8');
    console.log(`原始数据已保存到: ${rawDataPath}`);

    generateHeroDataFile(allHeroData);
    generateHeroRelationsFile(allCounterRelations);

    console.log('\n=== 爬取完成 ===');
  } catch (error) {
    console.error('爬取失败:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

function generateHeroDataFile(heroes) {
  const filePath = path.join(PROJECT_ROOT, 'src', 'data', 'heroData.ts');

  const heroIds = heroes.map(h => `  | '${h.id}'`).join('\n');

  const heroImages = heroes.map(h =>
    `  ${h.id}: \`https://game.gtimg.cn/images/lol/act/img/champion/${h.alias}.png\`,  // ${h.name} ${h.title}`
  ).join('\n');

  const heroesArray = heroes.map(h => {
    const roles = h.roles.map(r => `'${r}'`).join(', ');
    const colorObj = h.roles.map(r => `${r}: roleColors['${r}']`).join(', ');
    return `  {
    id: '${h.id}' as HeroId,
    name: '${h.name}',
    nameEn: '${h.alias}',
    role: [${roles}] as HeroRole[],
    color: { ${colorObj} } as Record<HeroRole, string>,
    image: \`https://game.gtimg.cn/images/lol/act/img/champion/${h.alias}.png\`,
  }`;
  }).join(',\n');

  const content = `// 英雄联盟英雄数据 - 从攻略中心 https://101.qq.com 爬取
// 生成时间: ${new Date().toISOString()}

/** 英雄联盟英雄职业类型 */
export type HeroRole = 'tank' | 'fighter' | 'assassin' | 'mage' | 'marksman' | 'support';

/** 克制强度等级 */
export type CounterStrength = 1 | 2 | 3;

/** 协同强度等级 */
export type SynergyStrength = 1 | 2 | 3;

/** 职业颜色映射 */
export const roleColors: Record<HeroRole, string> = {
  tank: '#eab308',
  fighter: '#ef4444',
  assassin: '#f97316',
  mage: '#a855f7',
  marksman: '#3b82f6',
  support: '#22c55e',
};

/** 英雄联盟英雄ID */
export type HeroId =
${heroIds};

export interface Hero {
  id: HeroId;
  name: string;
  nameEn: string;
  nickname?: string;
  role: HeroRole[];
  color: Record<HeroRole, string>;
  image: string;
}

export interface CounterRelation {
  source: HeroId;
  target: HeroId;
  strength?: CounterStrength;
}

// 英雄图片URL - 使用英雄联盟官方CDN资源
// 来源: https://101.qq.com/#/hero
// 格式: https://game.gtimg.cn/images/lol/act/img/champion/{英雄英文名}.png
const heroImages: Record<HeroId, string> = {
${heroImages}
};

/** 英雄联盟英雄列表 */
export const heroes: Hero[] = [
${heroesArray}
];
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`heroData.ts 已生成: ${filePath}`);
}

function generateHeroRelationsFile(relations) {
  const filePath = path.join(PROJECT_ROOT, 'src', 'data', 'heroRelationsComplete.ts');

  const relationsArray = relations.map(r => {
    const countersHeroes = r.counters.map(c => `'${c.heroId}'`).join(', ');
    const counteredByHeroes = r.counteredBy.map(c => `'${c.heroId}'`).join(', ');
    const counterReasons = r.counters.map(c => `对线胜率 ${(c.winrate / 100).toFixed(2)}%`).join('", "');
    const counteredByReasons = r.counteredBy.map(c => `对线胜率 ${(c.winrate / 100).toFixed(2)}%`).join('", "');

    return `  {
    "heroName": "${r.heroName}",
    "heroUrl": "${r.heroUrl}",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": [${counteredByHeroes}],
      "reasons": ["${counteredByReasons}"]
    },
    "counters": {
      "heroes": [${countersHeroes}],
      "reasons": ["${counterReasons}"]
    }
  }`;
  }).join(',\n');

  const content = `// 从英雄联盟攻略中心抓取的英雄克制关系数据
// 生成时间: ${new Date().toISOString()}
// 数据来源: https://101.qq.com/#/hero
// 收集英雄数: ${relations.length}

export interface HeroRelation {
  heroName: string;
  heroUrl: string;
  bestPartners: {
    heroes: string[];
    reasons: string[];
  };
  counteredBy: {
    heroes: string[];
    reasons: string[];
  };
  counters: {
    heroes: string[];
    reasons: string[];
  };
}

export const heroRelations: HeroRelation[] = [
${relationsArray}
];
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`heroRelationsComplete.ts 已生成: ${filePath}`);
}

main().catch(console.error);

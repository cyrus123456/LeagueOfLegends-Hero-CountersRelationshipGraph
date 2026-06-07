/**
 * 合并 OP.GG "好对付"数据到 heroData.ts 的 counterRelations
 * 1. 将现有 counterRelations 的 scope 全部改为 'counteredBy'
 * 2. 从 opgg-easy-counters.json 追加新条目，scope 设为 'counters'
 *
 * 使用方法: node scripts/merge-opgg-easy-counters.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const HERO_DATA_PATH = path.join(PROJECT_ROOT, 'src', 'data', 'heroData.ts');
const EASY_COUNTERS_PATH = path.join(PROJECT_ROOT, 'src', 'data', 'opgg-easy-counters.json');

// 胜率 -> strength 映射
function winrateToStrength(winrate) {
  if (winrate >= 55) return 3;
  if (winrate >= 52) return 2;
  return 1;
}

function main() {
  console.log('=== 合并 OP.GG "好对付"数据到 heroData.ts ===\n');

  // 1. 读取 heroData.ts
  console.log('Step 1: 读取 heroData.ts...');
  let heroDataContent = fs.readFileSync(HERO_DATA_PATH, 'utf-8');

  // 2. 读取 opgg-easy-counters.json
  console.log('Step 2: 读取 opgg-easy-counters.json...');
  const easyCountersData = JSON.parse(fs.readFileSync(EASY_COUNTERS_PATH, 'utf-8'));

  // 3. 将现有 counterRelations 中所有 scope: 'counters' 改为 scope: 'counteredBy'
  console.log('Step 3: 将所有现有 scope 改为 counteredBy...');
  let replacedCount = 0;
  heroDataContent = heroDataContent.replace(/scope: 'counters' as CounterRelationScope/g, () => {
    replacedCount++;
    return "scope: 'counteredBy' as CounterRelationScope";
  });
  console.log(`  修改了 ${replacedCount} 条现有记录的 scope`);

  // 4. 从 opgg-easy-counters.json 生成新条目
  console.log('Step 4: 从 opgg-easy-counters.json 生成新条目...');
  const newEntries = [];
  const seenPairs = new Set();

  for (const champion of easyCountersData.champions) {
    const sourceId = champion.championId;
    for (const target of champion.easyToDealWith) {
      const targetId = target.targetId;
      if (!targetId) continue;
      const pairKey = `${sourceId}:${targetId}`;
      if (seenPairs.has(pairKey)) continue;
      seenPairs.add(pairKey);

      const strength = winrateToStrength(target.winrate);
      newEntries.push(
        `  { source: '${sourceId}' as HeroId, target: '${targetId}' as HeroId, strength: ${strength} as CounterStrength, scope: 'counters' as CounterRelationScope },`,
      );
    }
  }

  console.log(`  生成了 ${newEntries.length} 条新"好对付"克制关系`);

  // 5. 插入新条目到 counterRelations 数组的结束 ] 之前
  console.log('Step 5: 插入新条目到 heroData.ts...');

  // 找到 counterRelations 数组的结束位置
  const closingBracket = '\n];';
  const insertPosition = heroDataContent.lastIndexOf('];');
  if (insertPosition === -1) {
    console.error('错误: 找不到 counterRelations 数组的结束位置');
    process.exit(1);
  }

  const before = heroDataContent.slice(0, insertPosition);
  const after = heroDataContent.slice(insertPosition);

  // 确保新条目前面有换行
  const newContent = before + '\n' + newEntries.join('\n') + '\n' + after;

  console.log('Step 6: 写入文件...');
  fs.writeFileSync(HERO_DATA_PATH, newContent, 'utf-8');

  console.log(`\n=== 完成 ===`);
  console.log(`共修改 ${replacedCount} 条现有记录 scope`);
  console.log(`共新增 ${newEntries.length} 条"好对付"克制关系`);
  console.log(`输出文件: ${HERO_DATA_PATH}`);
}

main().catch((err) => {
  console.error('合并失败:', err);
  process.exit(1);
});
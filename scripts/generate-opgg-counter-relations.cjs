/**
 * 从 opgg-hard-counters.json / opgg-easy-counters.json 生成 heroData.ts 中的 counterRelations
 * 使用方法: node scripts/generate-opgg-counter-relations.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const HARD_PATH = path.join(ROOT, 'src', 'data', 'opgg-hard-counters.json');
const EASY_PATH = path.join(ROOT, 'src', 'data', 'opgg-easy-counters.json');
const HERO_DATA_PATH = path.join(ROOT, 'src', 'data', 'heroData.ts');
const COUNTER_REASONS_PATH = path.join(ROOT, 'src', 'data', 'counterReasons.ts');

function calculateCounteredByStrength(winrate) {
  const reverseWinrate = 100 - winrate;
  const advantage = reverseWinrate - 50;
  if (advantage >= 3) return 3;
  if (advantage >= 1) return 2;
  return 1;
}

function calculateCountersStrength(winrate) {
  const advantage = winrate - 50;
  if (advantage >= 3) return 3;
  if (advantage >= 1) return 2;
  return 1;
}

function extractHeroIds(heroDataContent) {
  const match = heroDataContent.match(/export type HeroId =\s*([\s\S]*?);/);
  if (!match) throw new Error('HeroId type not found');
  return new Set([...match[1].matchAll(/'([a-z0-9]+)'/g)].map((m) => m[1]));
}

function escapeStr(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const hardData = JSON.parse(fs.readFileSync(HARD_PATH, 'utf-8'));
const easyData = JSON.parse(fs.readFileSync(EASY_PATH, 'utf-8'));
const heroDataContent = fs.readFileSync(HERO_DATA_PATH, 'utf-8');
const validHeroIds = extractHeroIds(heroDataContent);

const relationsMap = new Map();
const reasonsMap = {};
const skipped = [];

for (const champion of hardData.champions) {
  const targetId = champion.championId;
  if (!validHeroIds.has(targetId)) {
    skipped.push({ type: 'champion', id: targetId, name: champion.championName });
    continue;
  }

  for (const counter of champion.hardToDealWith) {
    const sourceId = counter.targetId;
    if (!validHeroIds.has(sourceId)) {
      skipped.push({ type: 'counter', id: sourceId, name: counter.targetName, for: targetId });
      continue;
    }

    const winrate = counter.winrate;
    if (winrate == null) continue;

    const strength = calculateCounteredByStrength(winrate);
    const key = `${sourceId}-${targetId}`;
    const reverseWinrate = 100 - winrate;

    if (!relationsMap.has(key)) {
      relationsMap.set(key, { source: sourceId, target: targetId, strength, scope: 'counteredBy' });
      reasonsMap[key] = {
        reasonZh: `对线胜率 ${reverseWinrate.toFixed(2)}%`,
        reasonEn: `Win rate ${reverseWinrate.toFixed(2)}%`,
        games: counter.games ?? null,
      };
    }
  }
}

for (const champion of easyData.champions) {
  const sourceId = champion.championId;
  if (!validHeroIds.has(sourceId)) {
    skipped.push({ type: 'champion', id: sourceId, name: champion.championName });
    continue;
  }

  for (const counter of champion.easyToDealWith) {
    const targetId = counter.targetId;
    if (!validHeroIds.has(targetId)) {
      skipped.push({ type: 'counter', id: targetId, name: counter.targetName, for: sourceId });
      continue;
    }

    const winrate = counter.winrate;
    if (winrate == null) continue;

    const strength = calculateCountersStrength(winrate);
    const key = `${sourceId}-${targetId}`;

    if (!relationsMap.has(key)) {
      relationsMap.set(key, { source: sourceId, target: targetId, strength, scope: 'counters' });
      reasonsMap[key] = {
        reasonZh: `对线胜率 ${winrate.toFixed(2)}%`,
        reasonEn: `Win rate ${winrate.toFixed(2)}%`,
        games: counter.games ?? null,
      };
    }
  }
}

const relations = [...relationsMap.values()].sort((a, b) => {
  if (a.source !== b.source) return a.source.localeCompare(b.source);
  return a.target.localeCompare(b.target);
});

console.log(`生成 ${relations.length} 条克制关系`);
console.log(`  被克制(counteredBy): ${relations.filter((r) => r.scope === 'counteredBy').length}`);
console.log(`  克制(counters): ${relations.filter((r) => r.scope === 'counters').length}`);
if (skipped.length > 0) {
  console.log(`跳过 ${skipped.length} 条无效英雄 ID:`, skipped.slice(0, 10));
}

let counterRelationsTs = `/** 克制关系列表 - 由 generate-opgg-counter-relations.cjs 从 OP.GG 数据生成 */
export const counterRelations: CounterRelation[] = [
`;
for (const r of relations) {
  counterRelationsTs += `  { source: '${r.source}' as HeroId, target: '${r.target}' as HeroId, strength: ${r.strength} as CounterStrength, scope: '${r.scope}' as CounterRelationScope },\n`;
}
counterRelationsTs += `];
`;

const startMarker = '/** 克制关系列表';
const startIdx = heroDataContent.indexOf(startMarker);
if (startIdx === -1) throw new Error('counterRelations marker not found');

const afterStart = heroDataContent.substring(startIdx);
const arrayEndMatch = afterStart.match(/\n\];/);
if (!arrayEndMatch) throw new Error('counterRelations end not found');

const endOffset = arrayEndMatch.index + '\n];'.length;
const updatedHeroData =
  heroDataContent.substring(0, startIdx) + counterRelationsTs + heroDataContent.substring(startIdx + endOffset);

fs.writeFileSync(HERO_DATA_PATH, updatedHeroData, 'utf-8');
console.log('✅ heroData.ts counterRelations 已更新');

let counterReasonsTs = `// 克制理由数据 - 基于 OP.GG 难对付/好对付数据生成
// 数据来源: https://op.gg/zh-cn/lol/champions
// key 格式: "source-target" (source克制target)
import type { Language } from '@/i18n';

export interface CounterReasonData {
  reasonZh: string;
  reasonEn: string;
  games: number | null;
}

export const counterReasons: Record<string, CounterReasonData> = {
`;
for (const key of Object.keys(reasonsMap).sort()) {
  const data = reasonsMap[key];
  const gamesStr = data.games !== null ? data.games : 'null';
  counterReasonsTs += `  '${key}': {\n    reasonZh: '${escapeStr(data.reasonZh)}',\n    reasonEn: '${escapeStr(data.reasonEn)}',\n    games: ${gamesStr}\n  },\n`;
}
counterReasonsTs += `};

export function getCounterReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = \`\${sourceId}-\${targetId}\`;
  const data = counterReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}
`;

fs.writeFileSync(COUNTER_REASONS_PATH, counterReasonsTs, 'utf-8');
console.log('✅ counterReasons.ts 已更新');

const strengthDist = { 1: 0, 2: 0, 3: 0 };
relations.forEach((r) => { strengthDist[r.strength]++; });
console.log(`强度分布: 1=${strengthDist[1]}, 2=${strengthDist[2]}, 3=${strengthDist[3]}`);
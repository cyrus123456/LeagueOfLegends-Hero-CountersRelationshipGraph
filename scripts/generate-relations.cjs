/**
 * 从 heroRelationsComplete.ts 生成以下文件：
 * 1. counterReasons.ts   - 克制理由 (key: "source-target", source克制target)
 * 2. synergyReasons.ts   - 协同理由 (key: "source-target")
 * 3. synergyRelations.ts - 协同关系列表
 * 4. heroData.ts 中的 counterRelations - 静态数组（含strength）
 */
const fs = require('fs');
const path = require('path');

// ============================================================
// 1. 解析 heroRelationsComplete.ts
// ============================================================
const relationsPath = path.join(__dirname, '..', 'src', 'data', 'heroRelationsComplete.ts');
const relationsContent = fs.readFileSync(relationsPath, 'utf-8');

function parseHeroRelations(content) {
  const results = [];
  const heroBlocks = content.split(/\{\s*"heroId":\s*"/).slice(1);
  for (const block of heroBlocks) {
    const heroIdMatch = block.match(/^([^"]+)"/);
    if (!heroIdMatch) continue;
    const heroId = heroIdMatch[1];
    const heroNameMatch = block.match(/"heroName":\s*"([^"]+)"/);
    const heroName = heroNameMatch ? heroNameMatch[1] : '';
    const counteredByHeroesMatch = block.match(/"counteredBy":\s*\{\s*"heroes":\s*\[([^\]]*)\]/);
    const counteredByHeroes = counteredByHeroesMatch
      ? counteredByHeroesMatch[1].split(',').map(s => s.trim().replace(/'/g, '').replace(/"/g, '')).filter(Boolean)
      : [];
    const counteredByReasonsMatch = block.match(/"counteredBy":\s*\{[^}]*"reasons":\s*\[([^\]]*)\]/s);
    const counteredByReasons = counteredByReasonsMatch ? extractStrings(counteredByReasonsMatch[1]) : [];
    const countersHeroesMatch = block.match(/"counters":\s*\{\s*"heroes":\s*\[([^\]]*)\]/);
    const countersHeroes = countersHeroesMatch
      ? countersHeroesMatch[1].split(',').map(s => s.trim().replace(/'/g, '').replace(/"/g, '')).filter(Boolean)
      : [];
    const countersReasonsMatch = block.match(/"counters":\s*\{[^}]*"reasons":\s*\[([^\]]*)\]/s);
    const countersReasons = countersReasonsMatch ? extractStrings(countersReasonsMatch[1]) : [];
    const bestPartnersHeroesMatch = block.match(/"bestPartners":\s*\{\s*"heroes":\s*\[([^\]]*)\]/);
    const bestPartnersHeroes = bestPartnersHeroesMatch
      ? bestPartnersHeroesMatch[1].split(',').map(s => s.trim().replace(/'/g, '').replace(/"/g, '')).filter(Boolean)
      : [];
    const bestPartnersReasonsMatch = block.match(/"bestPartners":\s*\{[^}]*"reasons":\s*\[([^\]]*)\]/s);
    const bestPartnersReasons = bestPartnersReasonsMatch ? extractStrings(bestPartnersReasonsMatch[1]) : [];
    results.push({
      heroId, heroName,
      counteredBy: { heroes: counteredByHeroes, reasons: counteredByReasons },
      counters: { heroes: countersHeroes, reasons: countersReasons },
      bestPartners: { heroes: bestPartnersHeroes, reasons: bestPartnersReasons },
    });
  }
  return results;
}

function extractStrings(str) {
  const results = [];
  const regex = /["']([^"']*)["']/g;
  let match;
  while ((match = regex.exec(str)) !== null) results.push(match[1]);
  return results;
}

function extractWinrate(reason) {
  const match = reason.match(/对线胜率\s+([\d.]+)%/);
  return match ? parseFloat(match[1]) : 50;
}

function escapeStr(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

const heroRelations = parseHeroRelations(relationsContent);
console.log(`解析到 ${heroRelations.length} 个英雄关系数据`);

// ============================================================
// 2. 构建 counterRelations + counterReasons
// ============================================================
const counterRelationsSet = new Map();
const counterReasonsMap = {};

for (const relation of heroRelations) {
  const heroId = relation.heroId;
  // A.counters 包含 B → A克制B
  for (let i = 0; i < relation.counters.heroes.length; i++) {
    const targetId = relation.counters.heroes[i];
    const reason = relation.counters.reasons[i] || '';
    if (!targetId) continue;
    const winrate = extractWinrate(reason);
    const advantage = winrate - 50;
    const strength = advantage >= 3 ? 3 : advantage >= 1 ? 2 : 1;
    const key = `${heroId}-${targetId}`;
    if (!counterRelationsSet.has(key)) {
      counterRelationsSet.set(key, { source: heroId, target: targetId, strength });
      counterReasonsMap[key] = { reasonZh: reason, reasonEn: `Win rate ${winrate.toFixed(2)}%` };
    }
  }
  // A.counteredBy 包含 B → B克制A
  for (let i = 0; i < relation.counteredBy.heroes.length; i++) {
    const sourceId = relation.counteredBy.heroes[i];
    const reason = relation.counteredBy.reasons[i] || '';
    if (!sourceId) continue;
    const winrate = extractWinrate(reason);
    const reverseWinrate = 100 - winrate;
    const advantage = reverseWinrate - 50;
    const strength = advantage >= 3 ? 3 : advantage >= 1 ? 2 : 1;
    const key = `${sourceId}-${heroId}`;
    if (!counterRelationsSet.has(key)) {
      counterRelationsSet.set(key, { source: sourceId, target: heroId, strength });
      counterReasonsMap[key] = { reasonZh: `对线胜率 ${reverseWinrate.toFixed(2)}%`, reasonEn: `Win rate ${reverseWinrate.toFixed(2)}%` };
    }
  }
}

const counterRelationsList = [...counterRelationsSet.values()];
console.log(`克制关系: ${counterRelationsList.length} 条`);
console.log(`克制理由: ${Object.keys(counterReasonsMap).length} 条`);
const strengthDist = { 1: 0, 2: 0, 3: 0 };
counterRelationsList.forEach(r => { strengthDist[r.strength]++; });
console.log(`强度分布: 1=${strengthDist[1]}, 2=${strengthDist[2]}, 3=${strengthDist[3]}`);

// ============================================================
// 3. 构建 synergyRelations + synergyReasons
// ============================================================
const synergyRelations = [];
const synergyReasonsMap = {};
for (const relation of heroRelations) {
  for (let i = 0; i < relation.bestPartners.heroes.length; i++) {
    const targetId = relation.bestPartners.heroes[i];
    const reason = relation.bestPartners.reasons[i] || '';
    if (!targetId) continue;
    const key = `${relation.heroId}-${targetId}`;
    if (!synergyReasonsMap[key]) {
      synergyRelations.push({ source: relation.heroId, target: targetId, strength: 3 });
      synergyReasonsMap[key] = { reasonZh: reason, reasonEn: reason };
    }
  }
}
console.log(`协同关系: ${synergyRelations.length} 条`);

// ============================================================
// 4. 生成 counterReasons.ts
// ============================================================
let counterReasonsTs = `// 克制理由数据 - 基于英雄联盟攻略中心数据生成
// 数据来源: https://101.qq.com/#/hero
// key 格式: "source-target" (source克制target)
import type { Language } from '@/i18n';

// 克制原因数据
export interface CounterReasonData {
  reasonZh: string;
  reasonEn: string;
}

// 克制理由数据 - 从heroRelationsComplete逆向推理生成
export const counterReasons: Record<string, CounterReasonData> = {
`;
for (const key of Object.keys(counterReasonsMap).sort()) {
  const data = counterReasonsMap[key];
  counterReasonsTs += `  '${key}': {\n    reasonZh: '${escapeStr(data.reasonZh)}',\n    reasonEn: '${escapeStr(data.reasonEn)}'\n  },\n`;
}
counterReasonsTs += `};

// 获取克制理由的辅助函数
export function getCounterReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = \`\${sourceId}-\${targetId}\`;
  const data = counterReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}
`;
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'counterReasons.ts'), counterReasonsTs, 'utf-8');
console.log('✅ counterReasons.ts 已生成');

// ============================================================
// 5. 生成 synergyReasons.ts
// ============================================================
let synergyReasonsTs = `// 最佳拍档理由数据 - 基于英雄联盟攻略中心数据生成
// 数据来源: https://101.qq.com/#/hero
// key 格式: "source-target"
import type { Language } from '@/i18n';

// 拍档原因数据
export interface SynergyReasonData {
  reasonZh: string;
  reasonEn: string;
}

// 最佳拍档理由数据 - 从heroRelationsComplete生成
export const synergyReasons: Record<string, SynergyReasonData> = {
`;
for (const key of Object.keys(synergyReasonsMap).sort()) {
  const data = synergyReasonsMap[key];
  synergyReasonsTs += `  '${key}': {\n    reasonZh: '${escapeStr(data.reasonZh)}',\n    reasonEn: '${escapeStr(data.reasonEn)}'\n  },\n`;
}
synergyReasonsTs += `};

// 获取最佳拍档理由的辅助函数
export function getSynergyReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = \`\${sourceId}-\${targetId}\`;
  const data = synergyReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}
`;
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'synergyReasons.ts'), synergyReasonsTs, 'utf-8');
console.log('✅ synergyReasons.ts 已生成');

// ============================================================
// 6. 生成 synergyRelations.ts
// ============================================================
let synergyRelationsTs = `// 最佳拍档关系数据 - 基于英雄联盟攻略中心数据生成
// 配合强度: strength = 3 (核心搭档/Must Pick), 2 (优秀配合/Good Synergy), 1 (良好配合/Decent)
// 数据来源: https://101.qq.com/#/hero

import type { CounterStrength, OwHeroId } from './heroData';

export interface SynergyRelation {
  source: OwHeroId;
  target: OwHeroId;
  strength?: CounterStrength;
}

// 最佳拍档关系数据 - 从heroRelationsComplete生成
export const synergyRelations: SynergyRelation[] = [
`;
for (const r of synergyRelations) {
  synergyRelationsTs += `  { source: '${r.source}', target: '${r.target}', strength: ${r.strength} },\n`;
}
synergyRelationsTs += `];
`;
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'synergyRelations.ts'), synergyRelationsTs, 'utf-8');
console.log('✅ synergyRelations.ts 已生成');

// ============================================================
// 7. 更新 heroData.ts 中的 counterRelations（静态数组）
// ============================================================
const heroDataPath = path.join(__dirname, '..', 'src', 'data', 'heroData.ts');
let heroDataContent = fs.readFileSync(heroDataPath, 'utf-8');

// 排序
counterRelationsList.sort((a, b) => {
  if (a.source !== b.source) return a.source.localeCompare(b.source);
  return a.target.localeCompare(b.target);
});

// 生成静态数组文本
let staticArrayTs = `/** 克制关系列表 - 由 generate-relations.cjs 从 heroRelationsComplete 生成 */
export const counterRelations: CounterRelation[] = [
`;
for (const r of counterRelationsList) {
  staticArrayTs += `  { source: '${r.source}' as HeroId, target: '${r.target}' as HeroId, strength: ${r.strength} as CounterStrength },\n`;
}
staticArrayTs += `];
`;

// 替换策略：找到标记行开始，然后找到最后一个独占一行的 '];' 或 '});' 作为结束
const startMarker = '/** 克制关系列表';
const startIdx = heroDataContent.indexOf(startMarker);

if (startIdx !== -1) {
  // 从 startIdx 开始向后搜索，找到正确的结束位置
  // 静态数组结尾: 独占一行的 "];"
  // flatMap结尾: "});"
  const afterStart = heroDataContent.substring(startIdx);
  
  // 匹配独占一行的 ]; （静态数组结尾）
  const arrayEndMatch = afterStart.match(/\n\];/);
  // 匹配 }); （flatMap 结尾）
  const flatMapEndMatch = afterStart.match(/\}\);/);
  
  let endOffset;
  if (arrayEndMatch && (!flatMapEndMatch || arrayEndMatch.index < flatMapEndMatch.index)) {
    endOffset = arrayEndMatch.index + '\n];'.length;
  } else if (flatMapEndMatch) {
    endOffset = flatMapEndMatch.index + '});'.length;
  } else {
    endOffset = afterStart.length;
  }
  
  heroDataContent = heroDataContent.substring(0, startIdx) + staticArrayTs + heroDataContent.substring(startIdx + endOffset);
  fs.writeFileSync(heroDataPath, heroDataContent, 'utf-8');
  console.log('✅ heroData.ts counterRelations 已更新（静态数组）');
  
  // 移除不再需要的 import
  if (heroDataContent.includes("import { heroRelations } from './heroRelationsComplete';")) {
    heroDataContent = heroDataContent.replace("import { heroRelations } from './heroRelationsComplete';\n", '');
    fs.writeFileSync(heroDataPath, heroDataContent, 'utf-8');
    console.log('✅ 已移除 heroRelationsComplete 的 import');
  }
} else {
  console.log('⚠️ 未找到 counterRelations 标记');
}

console.log('\n🎉 所有文件生成完成！');

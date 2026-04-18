// 最佳拍档关系数据 - 基于英雄联盟攻略中心数据生成
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
];

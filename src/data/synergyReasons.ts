// 最佳拍档理由数据 - 基于英雄联盟攻略中心数据生成
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
};

// 获取最佳拍档理由的辅助函数
export function getSynergyReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = `${sourceId}-${targetId}`;
  const data = synergyReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}

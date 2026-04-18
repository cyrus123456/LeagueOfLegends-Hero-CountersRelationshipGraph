// 克制理由数据 - 基于英雄联盟攻略中心数据生成
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
  'aatrox-amumu': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'aatrox-aurora': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'aatrox-drmundo': {
    reasonZh: '对线胜率 54.99%',
    reasonEn: 'Win rate 54.99%'
  },
  'aatrox-jhin': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'aatrox-pantheon': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'aatrox-rengar': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'aatrox-shen': {
    reasonZh: '对线胜率 60.67%',
    reasonEn: 'Win rate 60.67%'
  },
  'aatrox-smolder': {
    reasonZh: '对线胜率 56.75%',
    reasonEn: 'Win rate 56.75%'
  },
  'aatrox-tahmkench': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'aatrox-zed': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'ahri-aatrox': {
    reasonZh: '对线胜率 61.92%',
    reasonEn: 'Win rate 61.92%'
  },
  'ahri-akshan': {
    reasonZh: '对线胜率 51.68%',
    reasonEn: 'Win rate 51.68%'
  },
  'ahri-ambessa': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'ahri-aurora': {
    reasonZh: '对线胜率 52.88%',
    reasonEn: 'Win rate 52.88%'
  },
  'ahri-chogath': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'ahri-darius': {
    reasonZh: '对线胜率 59.48%',
    reasonEn: 'Win rate 59.48%'
  },
  'ahri-drmundo': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%'
  },
  'ahri-ekko': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%'
  },
  'ahri-fiora': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'ahri-galio': {
    reasonZh: '对线胜率 52.49%',
    reasonEn: 'Win rate 52.49%'
  },
  'ahri-garen': {
    reasonZh: '对线胜率 66.27%',
    reasonEn: 'Win rate 66.27%'
  },
  'ahri-hwei': {
    reasonZh: '对线胜率 51.99%',
    reasonEn: 'Win rate 51.99%'
  },
  'ahri-jax': {
    reasonZh: '对线胜率 55.78%',
    reasonEn: 'Win rate 55.78%'
  },
  'ahri-jayce': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'ahri-ksante': {
    reasonZh: '对线胜率 62.34%',
    reasonEn: 'Win rate 62.34%'
  },
  'ahri-nasus': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'ahri-renekton': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'ahri-riven': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'ahri-rumble': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%'
  },
  'ahri-ryze': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'ahri-sett': {
    reasonZh: '对线胜率 62.38%',
    reasonEn: 'Win rate 62.38%'
  },
  'ahri-sion': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'ahri-velkoz': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%'
  },
  'ahri-yone': {
    reasonZh: '对线胜率 61.39%',
    reasonEn: 'Win rate 61.39%'
  },
  'ahri-yorick': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'ahri-ziggs': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'akali-ambessa': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'akali-gragas': {
    reasonZh: '对线胜率 62.96%',
    reasonEn: 'Win rate 62.96%'
  },
  'akali-jhin': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%'
  },
  'akali-ornn': {
    reasonZh: '对线胜率 52.13%',
    reasonEn: 'Win rate 52.13%'
  },
  'akali-pantheon': {
    reasonZh: '对线胜率 60.49%',
    reasonEn: 'Win rate 60.49%'
  },
  'akali-rumble': {
    reasonZh: '对线胜率 62.07%',
    reasonEn: 'Win rate 62.07%'
  },
  'akali-sion': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'akali-tristana': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'akali-vayne': {
    reasonZh: '对线胜率 59.04%',
    reasonEn: 'Win rate 59.04%'
  },
  'akali-velkoz': {
    reasonZh: '对线胜率 54.38%',
    reasonEn: 'Win rate 54.38%'
  },
  'akali-viktor': {
    reasonZh: '对线胜率 52.01%',
    reasonEn: 'Win rate 52.01%'
  },
  'akali-zaahen': {
    reasonZh: '对线胜率 62.75%',
    reasonEn: 'Win rate 62.75%'
  },
  'akali-zed': {
    reasonZh: '对线胜率 60.23%',
    reasonEn: 'Win rate 60.23%'
  },
  'akshan-akali': {
    reasonZh: '对线胜率 56.99%',
    reasonEn: 'Win rate 56.99%'
  },
  'akshan-aurelionsol': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%'
  },
  'akshan-aurora': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'akshan-ekko': {
    reasonZh: '对线胜率 57.21%',
    reasonEn: 'Win rate 57.21%'
  },
  'akshan-hwei': {
    reasonZh: '对线胜率 55.27%',
    reasonEn: 'Win rate 55.27%'
  },
  'akshan-kassadin': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'akshan-morgana': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'akshan-sion': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'akshan-syndra': {
    reasonZh: '对线胜率 53.55%',
    reasonEn: 'Win rate 53.55%'
  },
  'akshan-tristana': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'akshan-velkoz': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%'
  },
  'akshan-viktor': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'akshan-vladimir': {
    reasonZh: '对线胜率 54.85%',
    reasonEn: 'Win rate 54.85%'
  },
  'akshan-yone': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'akshan-zed': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'alistar-amumu': {
    reasonZh: '对线胜率 61.21%',
    reasonEn: 'Win rate 61.21%'
  },
  'alistar-anivia': {
    reasonZh: '对线胜率 55.82%',
    reasonEn: 'Win rate 55.82%'
  },
  'alistar-ashe': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'alistar-camille': {
    reasonZh: '对线胜率 61.08%',
    reasonEn: 'Win rate 61.08%'
  },
  'alistar-malphite': {
    reasonZh: '对线胜率 56.95%',
    reasonEn: 'Win rate 56.95%'
  },
  'alistar-maokai': {
    reasonZh: '对线胜率 52.97%',
    reasonEn: 'Win rate 52.97%'
  },
  'alistar-mel': {
    reasonZh: '对线胜率 53.55%',
    reasonEn: 'Win rate 53.55%'
  },
  'alistar-pyke': {
    reasonZh: '对线胜率 53.37%',
    reasonEn: 'Win rate 53.37%'
  },
  'alistar-rell': {
    reasonZh: '对线胜率 51.03%',
    reasonEn: 'Win rate 51.03%'
  },
  'alistar-sylas': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'alistar-teemo': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'alistar-veigar': {
    reasonZh: '对线胜率 56.77%',
    reasonEn: 'Win rate 56.77%'
  },
  'ambessa-brand': {
    reasonZh: '对线胜率 52.79%',
    reasonEn: 'Win rate 52.79%'
  },
  'ambessa-galio': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'ambessa-kayle': {
    reasonZh: '对线胜率 55.95%',
    reasonEn: 'Win rate 55.95%'
  },
  'ambessa-ksante': {
    reasonZh: '对线胜率 59.49%',
    reasonEn: 'Win rate 59.49%'
  },
  'ambessa-lissandra': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'ambessa-ornn': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'ambessa-shaco': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'ambessa-varus': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'ambessa-vladimir': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'ambessa-yasuo': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%'
  },
  'ambessa-yone': {
    reasonZh: '对线胜率 58.03%',
    reasonEn: 'Win rate 58.03%'
  },
  'ambessa-zed': {
    reasonZh: '对线胜率 57.29%',
    reasonEn: 'Win rate 57.29%'
  },
  'amumu-bard': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%'
  },
  'amumu-belveth': {
    reasonZh: '对线胜率 51.68%',
    reasonEn: 'Win rate 51.68%'
  },
  'amumu-blitzcrank': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'amumu-elise': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%'
  },
  'amumu-jhin': {
    reasonZh: '对线胜率 57.79%',
    reasonEn: 'Win rate 57.79%'
  },
  'amumu-karma': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'amumu-kindred': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'amumu-lulu': {
    reasonZh: '对线胜率 54.97%',
    reasonEn: 'Win rate 54.97%'
  },
  'amumu-mel': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'amumu-missfortune': {
    reasonZh: '对线胜率 62.26%',
    reasonEn: 'Win rate 62.26%'
  },
  'amumu-monkeyking': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'amumu-neeko': {
    reasonZh: '对线胜率 64.29%',
    reasonEn: 'Win rate 64.29%'
  },
  'amumu-nunu': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'amumu-reksai': {
    reasonZh: '对线胜率 57.35%',
    reasonEn: 'Win rate 57.35%'
  },
  'amumu-sona': {
    reasonZh: '对线胜率 56.84%',
    reasonEn: 'Win rate 56.84%'
  },
  'amumu-veigar': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'amumu-velkoz': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%'
  },
  'amumu-volibear': {
    reasonZh: '对线胜率 56.29%',
    reasonEn: 'Win rate 56.29%'
  },
  'anivia-akali': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'anivia-chogath': {
    reasonZh: '对线胜率 54.43%',
    reasonEn: 'Win rate 54.43%'
  },
  'anivia-darius': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%'
  },
  'anivia-ekko': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'anivia-irelia': {
    reasonZh: '对线胜率 58.12%',
    reasonEn: 'Win rate 58.12%'
  },
  'anivia-jayce': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%'
  },
  'anivia-kassadin': {
    reasonZh: '对线胜率 54.36%',
    reasonEn: 'Win rate 54.36%'
  },
  'anivia-katarina': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'anivia-leona': {
    reasonZh: '对线胜率 52.25%',
    reasonEn: 'Win rate 52.25%'
  },
  'anivia-mordekaiser': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'anivia-nasus': {
    reasonZh: '对线胜率 63.08%',
    reasonEn: 'Win rate 63.08%'
  },
  'anivia-orianna': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%'
  },
  'anivia-poppy': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%'
  },
  'anivia-rakan': {
    reasonZh: '对线胜率 51.87%',
    reasonEn: 'Win rate 51.87%'
  },
  'anivia-sion': {
    reasonZh: '对线胜率 54.75%',
    reasonEn: 'Win rate 54.75%'
  },
  'anivia-taliyah': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'anivia-tristana': {
    reasonZh: '对线胜率 68.42%',
    reasonEn: 'Win rate 68.42%'
  },
  'anivia-tryndamere': {
    reasonZh: '对线胜率 62.67%',
    reasonEn: 'Win rate 62.67%'
  },
  'anivia-twistedfate': {
    reasonZh: '对线胜率 53.15%',
    reasonEn: 'Win rate 53.15%'
  },
  'anivia-veigar': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'anivia-vladimir': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%'
  },
  'anivia-yasuo': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%'
  },
  'anivia-zed': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'anivia-ziggs': {
    reasonZh: '对线胜率 53.20%',
    reasonEn: 'Win rate 53.20%'
  },
  'annie-ahri': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'annie-akshan': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'annie-aurelionsol': {
    reasonZh: '对线胜率 51.03%',
    reasonEn: 'Win rate 51.03%'
  },
  'annie-cassiopeia': {
    reasonZh: '对线胜率 61.18%',
    reasonEn: 'Win rate 61.18%'
  },
  'annie-ekko': {
    reasonZh: '对线胜率 53.51%',
    reasonEn: 'Win rate 53.51%'
  },
  'annie-garen': {
    reasonZh: '对线胜率 65.09%',
    reasonEn: 'Win rate 65.09%'
  },
  'annie-graves': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'annie-hwei': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'annie-jayce': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'annie-katarina': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'annie-leblanc': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'annie-lissandra': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'annie-mel': {
    reasonZh: '对线胜率 59.04%',
    reasonEn: 'Win rate 59.04%'
  },
  'annie-morgana': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'annie-nasus': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'annie-orianna': {
    reasonZh: '对线胜率 55.94%',
    reasonEn: 'Win rate 55.94%'
  },
  'annie-sion': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'annie-swain': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%'
  },
  'annie-talon': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'annie-tristana': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'annie-velkoz': {
    reasonZh: '对线胜率 59.34%',
    reasonEn: 'Win rate 59.34%'
  },
  'annie-vex': {
    reasonZh: '对线胜率 53.87%',
    reasonEn: 'Win rate 53.87%'
  },
  'annie-yasuo': {
    reasonZh: '对线胜率 58.35%',
    reasonEn: 'Win rate 58.35%'
  },
  'annie-yone': {
    reasonZh: '对线胜率 59.30%',
    reasonEn: 'Win rate 59.30%'
  },
  'annie-ziggs': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%'
  },
  'annie-zoe': {
    reasonZh: '对线胜率 53.41%',
    reasonEn: 'Win rate 53.41%'
  },
  'aphelios-caitlyn': {
    reasonZh: '对线胜率 50.92%',
    reasonEn: 'Win rate 50.92%'
  },
  'aphelios-draven': {
    reasonZh: '对线胜率 50.33%',
    reasonEn: 'Win rate 50.33%'
  },
  'aphelios-ezreal': {
    reasonZh: '对线胜率 50.76%',
    reasonEn: 'Win rate 50.76%'
  },
  'aphelios-kaisa': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'aphelios-kalista': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'aphelios-lucian': {
    reasonZh: '对线胜率 51.52%',
    reasonEn: 'Win rate 51.52%'
  },
  'aphelios-tristana': {
    reasonZh: '对线胜率 50.57%',
    reasonEn: 'Win rate 50.57%'
  },
  'aphelios-vayne': {
    reasonZh: '对线胜率 51.71%',
    reasonEn: 'Win rate 51.71%'
  },
  'aphelios-yunara': {
    reasonZh: '对线胜率 50.35%',
    reasonEn: 'Win rate 50.35%'
  },
  'ashe-anivia': {
    reasonZh: '对线胜率 64.15%',
    reasonEn: 'Win rate 64.15%'
  },
  'ashe-aphelios': {
    reasonZh: '对线胜率 52.09%',
    reasonEn: 'Win rate 52.09%'
  },
  'ashe-caitlyn': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'ashe-jinx': {
    reasonZh: '对线胜率 51.17%',
    reasonEn: 'Win rate 51.17%'
  },
  'ashe-kaisa': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'ashe-kalista': {
    reasonZh: '对线胜率 53.42%',
    reasonEn: 'Win rate 53.42%'
  },
  'ashe-leblanc': {
    reasonZh: '对线胜率 52.86%',
    reasonEn: 'Win rate 52.86%'
  },
  'ashe-lucian': {
    reasonZh: '对线胜率 53.12%',
    reasonEn: 'Win rate 53.12%'
  },
  'ashe-malphite': {
    reasonZh: '对线胜率 58.56%',
    reasonEn: 'Win rate 58.56%'
  },
  'ashe-mel': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'ashe-missfortune': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'ashe-samira': {
    reasonZh: '对线胜率 51.69%',
    reasonEn: 'Win rate 51.69%'
  },
  'ashe-sivir': {
    reasonZh: '对线胜率 51.30%',
    reasonEn: 'Win rate 51.30%'
  },
  'ashe-twitch': {
    reasonZh: '对线胜率 50.73%',
    reasonEn: 'Win rate 50.73%'
  },
  'ashe-varus': {
    reasonZh: '对线胜率 55.06%',
    reasonEn: 'Win rate 55.06%'
  },
  'ashe-xayah': {
    reasonZh: '对线胜率 50.96%',
    reasonEn: 'Win rate 50.96%'
  },
  'ashe-yunara': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'aurelionsol-aphelios': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'aurelionsol-ashe': {
    reasonZh: '对线胜率 58.99%',
    reasonEn: 'Win rate 58.99%'
  },
  'aurelionsol-aurora': {
    reasonZh: '对线胜率 52.81%',
    reasonEn: 'Win rate 52.81%'
  },
  'aurelionsol-azir': {
    reasonZh: '对线胜率 58.85%',
    reasonEn: 'Win rate 58.85%'
  },
  'aurelionsol-brand': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'aurelionsol-caitlyn': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'aurelionsol-cassiopeia': {
    reasonZh: '对线胜率 58.17%',
    reasonEn: 'Win rate 58.17%'
  },
  'aurelionsol-chogath': {
    reasonZh: '对线胜率 61.73%',
    reasonEn: 'Win rate 61.73%'
  },
  'aurelionsol-darius': {
    reasonZh: '对线胜率 62.04%',
    reasonEn: 'Win rate 62.04%'
  },
  'aurelionsol-draven': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%'
  },
  'aurelionsol-drmundo': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'aurelionsol-ezreal': {
    reasonZh: '对线胜率 59.17%',
    reasonEn: 'Win rate 59.17%'
  },
  'aurelionsol-fiora': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'aurelionsol-gangplank': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'aurelionsol-graves': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%'
  },
  'aurelionsol-jayce': {
    reasonZh: '对线胜率 57.56%',
    reasonEn: 'Win rate 57.56%'
  },
  'aurelionsol-jhin': {
    reasonZh: '对线胜率 57.84%',
    reasonEn: 'Win rate 57.84%'
  },
  'aurelionsol-jinx': {
    reasonZh: '对线胜率 53.31%',
    reasonEn: 'Win rate 53.31%'
  },
  'aurelionsol-katarina': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'aurelionsol-lissandra': {
    reasonZh: '对线胜率 51.92%',
    reasonEn: 'Win rate 51.92%'
  },
  'aurelionsol-lucian': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'aurelionsol-malphite': {
    reasonZh: '对线胜率 59.17%',
    reasonEn: 'Win rate 59.17%'
  },
  'aurelionsol-malzahar': {
    reasonZh: '对线胜率 52.90%',
    reasonEn: 'Win rate 52.90%'
  },
  'aurelionsol-mel': {
    reasonZh: '对线胜率 59.23%',
    reasonEn: 'Win rate 59.23%'
  },
  'aurelionsol-mordekaiser': {
    reasonZh: '对线胜率 69.09%',
    reasonEn: 'Win rate 69.09%'
  },
  'aurelionsol-nasus': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'aurelionsol-orianna': {
    reasonZh: '对线胜率 58.22%',
    reasonEn: 'Win rate 58.22%'
  },
  'aurelionsol-renekton': {
    reasonZh: '对线胜率 58.23%',
    reasonEn: 'Win rate 58.23%'
  },
  'aurelionsol-ryze': {
    reasonZh: '对线胜率 56.42%',
    reasonEn: 'Win rate 56.42%'
  },
  'aurelionsol-sion': {
    reasonZh: '对线胜率 60.71%',
    reasonEn: 'Win rate 60.71%'
  },
  'aurelionsol-sivir': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'aurelionsol-smolder': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%'
  },
  'aurelionsol-swain': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'aurelionsol-syndra': {
    reasonZh: '对线胜率 57.13%',
    reasonEn: 'Win rate 57.13%'
  },
  'aurelionsol-teemo': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%'
  },
  'aurelionsol-tristana': {
    reasonZh: '对线胜率 62.61%',
    reasonEn: 'Win rate 62.61%'
  },
  'aurelionsol-tryndamere': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%'
  },
  'aurelionsol-twistedfate': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'aurelionsol-twitch': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'aurelionsol-vayne': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'aurelionsol-viktor': {
    reasonZh: '对线胜率 53.65%',
    reasonEn: 'Win rate 53.65%'
  },
  'aurelionsol-vladimir': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'aurelionsol-xayah': {
    reasonZh: '对线胜率 58.04%',
    reasonEn: 'Win rate 58.04%'
  },
  'aurelionsol-yunara': {
    reasonZh: '对线胜率 58.19%',
    reasonEn: 'Win rate 58.19%'
  },
  'aurelionsol-zoe': {
    reasonZh: '对线胜率 53.24%',
    reasonEn: 'Win rate 53.24%'
  },
  'aurora-chogath': {
    reasonZh: '对线胜率 57.76%',
    reasonEn: 'Win rate 57.76%'
  },
  'aurora-darius': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'aurora-fiora': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%'
  },
  'aurora-garen': {
    reasonZh: '对线胜率 58.42%',
    reasonEn: 'Win rate 58.42%'
  },
  'aurora-graves': {
    reasonZh: '对线胜率 56.21%',
    reasonEn: 'Win rate 56.21%'
  },
  'aurora-malphite': {
    reasonZh: '对线胜率 60.44%',
    reasonEn: 'Win rate 60.44%'
  },
  'aurora-nasus': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%'
  },
  'aurora-renekton': {
    reasonZh: '对线胜率 69.23%',
    reasonEn: 'Win rate 69.23%'
  },
  'aurora-smolder': {
    reasonZh: '对线胜率 57.06%',
    reasonEn: 'Win rate 57.06%'
  },
  'aurora-tryndamere': {
    reasonZh: '对线胜率 63.54%',
    reasonEn: 'Win rate 63.54%'
  },
  'aurora-vladimir': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'aurora-yorick': {
    reasonZh: '对线胜率 59.62%',
    reasonEn: 'Win rate 59.62%'
  },
  'azir-graves': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'azir-irelia': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'azir-malphite': {
    reasonZh: '对线胜率 50.33%',
    reasonEn: 'Win rate 50.33%'
  },
  'azir-mel': {
    reasonZh: '对线胜率 50.26%',
    reasonEn: 'Win rate 50.26%'
  },
  'azir-morgana': {
    reasonZh: '对线胜率 50.86%',
    reasonEn: 'Win rate 50.86%'
  },
  'azir-sion': {
    reasonZh: '对线胜率 55.62%',
    reasonEn: 'Win rate 55.62%'
  },
  'azir-smolder': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'azir-yasuo': {
    reasonZh: '对线胜率 54.82%',
    reasonEn: 'Win rate 54.82%'
  },
  'bard-ashe': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%'
  },
  'bard-braum': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'bard-janna': {
    reasonZh: '对线胜率 51.43%',
    reasonEn: 'Win rate 51.43%'
  },
  'bard-malphite': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%'
  },
  'bard-mel': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%'
  },
  'bard-missfortune': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'bard-pantheon': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'bard-pyke': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'bard-renata': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%'
  },
  'bard-seraphine': {
    reasonZh: '对线胜率 51.12%',
    reasonEn: 'Win rate 51.12%'
  },
  'bard-shen': {
    reasonZh: '对线胜率 60.22%',
    reasonEn: 'Win rate 60.22%'
  },
  'bard-taric': {
    reasonZh: '对线胜率 52.46%',
    reasonEn: 'Win rate 52.46%'
  },
  'bard-veigar': {
    reasonZh: '对线胜率 53.13%',
    reasonEn: 'Win rate 53.13%'
  },
  'bard-xerath': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%'
  },
  'bard-zilean': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'belveth-akali': {
    reasonZh: '对线胜率 56.04%',
    reasonEn: 'Win rate 56.04%'
  },
  'belveth-brand': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'belveth-briar': {
    reasonZh: '对线胜率 51.60%',
    reasonEn: 'Win rate 51.60%'
  },
  'belveth-evelynn': {
    reasonZh: '对线胜率 51.84%',
    reasonEn: 'Win rate 51.84%'
  },
  'belveth-gnar': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'belveth-hecarim': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'belveth-jhin': {
    reasonZh: '对线胜率 61.82%',
    reasonEn: 'Win rate 61.82%'
  },
  'belveth-karthus': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'belveth-kayle': {
    reasonZh: '对线胜率 51.80%',
    reasonEn: 'Win rate 51.80%'
  },
  'belveth-khazix': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'belveth-naafiri': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'belveth-ornn': {
    reasonZh: '对线胜率 52.03%',
    reasonEn: 'Win rate 52.03%'
  },
  'belveth-reksai': {
    reasonZh: '对线胜率 50.86%',
    reasonEn: 'Win rate 50.86%'
  },
  'belveth-rengar': {
    reasonZh: '对线胜率 57.10%',
    reasonEn: 'Win rate 57.10%'
  },
  'belveth-shyvana': {
    reasonZh: '对线胜率 56.48%',
    reasonEn: 'Win rate 56.48%'
  },
  'belveth-singed': {
    reasonZh: '对线胜率 53.82%',
    reasonEn: 'Win rate 53.82%'
  },
  'belveth-sion': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'belveth-sylas': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%'
  },
  'belveth-tahmkench': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'belveth-tryndamere': {
    reasonZh: '对线胜率 56.29%',
    reasonEn: 'Win rate 56.29%'
  },
  'belveth-viego': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'belveth-volibear': {
    reasonZh: '对线胜率 54.79%',
    reasonEn: 'Win rate 54.79%'
  },
  'belveth-zed': {
    reasonZh: '对线胜率 55.37%',
    reasonEn: 'Win rate 55.37%'
  },
  'belveth-zyra': {
    reasonZh: '对线胜率 53.40%',
    reasonEn: 'Win rate 53.40%'
  },
  'blitzcrank-anivia': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'blitzcrank-ashe': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'blitzcrank-camille': {
    reasonZh: '对线胜率 59.63%',
    reasonEn: 'Win rate 59.63%'
  },
  'blitzcrank-karma': {
    reasonZh: '对线胜率 52.49%',
    reasonEn: 'Win rate 52.49%'
  },
  'blitzcrank-malphite': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%'
  },
  'blitzcrank-mel': {
    reasonZh: '对线胜率 54.71%',
    reasonEn: 'Win rate 54.71%'
  },
  'blitzcrank-missfortune': {
    reasonZh: '对线胜率 59.66%',
    reasonEn: 'Win rate 59.66%'
  },
  'blitzcrank-nami': {
    reasonZh: '对线胜率 50.80%',
    reasonEn: 'Win rate 50.80%'
  },
  'blitzcrank-renata': {
    reasonZh: '对线胜率 54.45%',
    reasonEn: 'Win rate 54.45%'
  },
  'blitzcrank-sett': {
    reasonZh: '对线胜率 54.43%',
    reasonEn: 'Win rate 54.43%'
  },
  'blitzcrank-sona': {
    reasonZh: '对线胜率 51.35%',
    reasonEn: 'Win rate 51.35%'
  },
  'blitzcrank-sylas': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'blitzcrank-veigar': {
    reasonZh: '对线胜率 57.17%',
    reasonEn: 'Win rate 57.17%'
  },
  'brand-ahri': {
    reasonZh: '对线胜率 51.96%',
    reasonEn: 'Win rate 51.96%'
  },
  'brand-alistar': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'brand-azir': {
    reasonZh: '对线胜率 58.77%',
    reasonEn: 'Win rate 58.77%'
  },
  'brand-blitzcrank': {
    reasonZh: '对线胜率 52.73%',
    reasonEn: 'Win rate 52.73%'
  },
  'brand-braum': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'brand-briar': {
    reasonZh: '对线胜率 50.72%',
    reasonEn: 'Win rate 50.72%'
  },
  'brand-cassiopeia': {
    reasonZh: '对线胜率 60.80%',
    reasonEn: 'Win rate 60.80%'
  },
  'brand-chogath': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'brand-darius': {
    reasonZh: '对线胜率 63.13%',
    reasonEn: 'Win rate 63.13%'
  },
  'brand-galio': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'brand-gangplank': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'brand-gnar': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'brand-graves': {
    reasonZh: '对线胜率 60.17%',
    reasonEn: 'Win rate 60.17%'
  },
  'brand-hecarim': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'brand-hwei': {
    reasonZh: '对线胜率 51.84%',
    reasonEn: 'Win rate 51.84%'
  },
  'brand-illaoi': {
    reasonZh: '对线胜率 55.78%',
    reasonEn: 'Win rate 55.78%'
  },
  'brand-janna': {
    reasonZh: '对线胜率 52.32%',
    reasonEn: 'Win rate 52.32%'
  },
  'brand-jayce': {
    reasonZh: '对线胜率 60.68%',
    reasonEn: 'Win rate 60.68%'
  },
  'brand-kaisa': {
    reasonZh: '对线胜率 58.29%',
    reasonEn: 'Win rate 58.29%'
  },
  'brand-kindred': {
    reasonZh: '对线胜率 57.88%',
    reasonEn: 'Win rate 57.88%'
  },
  'brand-leona': {
    reasonZh: '对线胜率 52.99%',
    reasonEn: 'Win rate 52.99%'
  },
  'brand-lillia': {
    reasonZh: '对线胜率 52.10%',
    reasonEn: 'Win rate 52.10%'
  },
  'brand-lissandra': {
    reasonZh: '对线胜率 52.54%',
    reasonEn: 'Win rate 52.54%'
  },
  'brand-lulu': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'brand-missfortune': {
    reasonZh: '对线胜率 60.77%',
    reasonEn: 'Win rate 60.77%'
  },
  'brand-nautilus': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'brand-neeko': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%'
  },
  'brand-nunu': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'brand-orianna': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'brand-qiyana': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%'
  },
  'brand-rakan': {
    reasonZh: '对线胜率 51.20%',
    reasonEn: 'Win rate 51.20%'
  },
  'brand-reksai': {
    reasonZh: '对线胜率 52.13%',
    reasonEn: 'Win rate 52.13%'
  },
  'brand-renata': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%'
  },
  'brand-rumble': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'brand-ryze': {
    reasonZh: '对线胜率 56.27%',
    reasonEn: 'Win rate 56.27%'
  },
  'brand-sejuani': {
    reasonZh: '对线胜率 57.49%',
    reasonEn: 'Win rate 57.49%'
  },
  'brand-seraphine': {
    reasonZh: '对线胜率 50.94%',
    reasonEn: 'Win rate 50.94%'
  },
  'brand-shyvana': {
    reasonZh: '对线胜率 56.05%',
    reasonEn: 'Win rate 56.05%'
  },
  'brand-smolder': {
    reasonZh: '对线胜率 59.85%',
    reasonEn: 'Win rate 59.85%'
  },
  'brand-soraka': {
    reasonZh: '对线胜率 52.49%',
    reasonEn: 'Win rate 52.49%'
  },
  'brand-taric': {
    reasonZh: '对线胜率 52.28%',
    reasonEn: 'Win rate 52.28%'
  },
  'brand-thresh': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%'
  },
  'brand-tristana': {
    reasonZh: '对线胜率 65.71%',
    reasonEn: 'Win rate 65.71%'
  },
  'brand-tryndamere': {
    reasonZh: '对线胜率 59.48%',
    reasonEn: 'Win rate 59.48%'
  },
  'brand-urgot': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'brand-vi': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'brand-viktor': {
    reasonZh: '对线胜率 52.41%',
    reasonEn: 'Win rate 52.41%'
  },
  'brand-zaahen': {
    reasonZh: '对线胜率 57.66%',
    reasonEn: 'Win rate 57.66%'
  },
  'brand-ziggs': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'braum-anivia': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'braum-blitzcrank': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'braum-camille': {
    reasonZh: '对线胜率 61.82%',
    reasonEn: 'Win rate 61.82%'
  },
  'braum-leblanc': {
    reasonZh: '对线胜率 56.83%',
    reasonEn: 'Win rate 56.83%'
  },
  'braum-mel': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%'
  },
  'braum-missfortune': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%'
  },
  'braum-nami': {
    reasonZh: '对线胜率 50.92%',
    reasonEn: 'Win rate 50.92%'
  },
  'braum-nautilus': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'braum-pantheon': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'braum-sett': {
    reasonZh: '对线胜率 60.26%',
    reasonEn: 'Win rate 60.26%'
  },
  'braum-sona': {
    reasonZh: '对线胜率 50.45%',
    reasonEn: 'Win rate 50.45%'
  },
  'braum-sylas': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'braum-thresh': {
    reasonZh: '对线胜率 51.90%',
    reasonEn: 'Win rate 51.90%'
  },
  'braum-yuumi': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'briar-diana': {
    reasonZh: '对线胜率 55.76%',
    reasonEn: 'Win rate 55.76%'
  },
  'briar-hecarim': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'briar-heimerdinger': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'briar-kaisa': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'briar-kennen': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%'
  },
  'briar-lillia': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'briar-naafiri': {
    reasonZh: '对线胜率 52.86%',
    reasonEn: 'Win rate 52.86%'
  },
  'briar-rengar': {
    reasonZh: '对线胜率 58.29%',
    reasonEn: 'Win rate 58.29%'
  },
  'briar-shaco': {
    reasonZh: '对线胜率 56.46%',
    reasonEn: 'Win rate 56.46%'
  },
  'briar-smolder': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'briar-tahmkench': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%'
  },
  'briar-tryndamere': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'briar-vi': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'briar-warwick': {
    reasonZh: '对线胜率 54.09%',
    reasonEn: 'Win rate 54.09%'
  },
  'briar-xinzhao': {
    reasonZh: '对线胜率 52.88%',
    reasonEn: 'Win rate 52.88%'
  },
  'briar-yasuo': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'briar-zac': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'briar-zed': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'caitlyn-aatrox': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'caitlyn-corki': {
    reasonZh: '对线胜率 51.95%',
    reasonEn: 'Win rate 51.95%'
  },
  'caitlyn-ezreal': {
    reasonZh: '对线胜率 50.66%',
    reasonEn: 'Win rate 50.66%'
  },
  'caitlyn-kaisa': {
    reasonZh: '对线胜率 50.17%',
    reasonEn: 'Win rate 50.17%'
  },
  'caitlyn-lucian': {
    reasonZh: '对线胜率 50.94%',
    reasonEn: 'Win rate 50.94%'
  },
  'caitlyn-mordekaiser': {
    reasonZh: '对线胜率 50.88%',
    reasonEn: 'Win rate 50.88%'
  },
  'caitlyn-tristana': {
    reasonZh: '对线胜率 50.79%',
    reasonEn: 'Win rate 50.79%'
  },
  'caitlyn-varus': {
    reasonZh: '对线胜率 50.80%',
    reasonEn: 'Win rate 50.80%'
  },
  'caitlyn-yunara': {
    reasonZh: '对线胜率 51.15%',
    reasonEn: 'Win rate 51.15%'
  },
  'camille-ambessa': {
    reasonZh: '对线胜率 55.06%',
    reasonEn: 'Win rate 55.06%'
  },
  'camille-drmundo': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'camille-gnar': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'camille-jayce': {
    reasonZh: '对线胜率 55.92%',
    reasonEn: 'Win rate 55.92%'
  },
  'camille-jhin': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'camille-ksante': {
    reasonZh: '对线胜率 61.25%',
    reasonEn: 'Win rate 61.25%'
  },
  'camille-rell': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'camille-smolder': {
    reasonZh: '对线胜率 60.71%',
    reasonEn: 'Win rate 60.71%'
  },
  'camille-tryndamere': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'camille-volibear': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'camille-yorick': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%'
  },
  'cassiopeia-akshan': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%'
  },
  'cassiopeia-azir': {
    reasonZh: '对线胜率 56.49%',
    reasonEn: 'Win rate 56.49%'
  },
  'cassiopeia-irelia': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%'
  },
  'cassiopeia-jayce': {
    reasonZh: '对线胜率 55.21%',
    reasonEn: 'Win rate 55.21%'
  },
  'cassiopeia-mel': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'cassiopeia-pantheon': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'cassiopeia-qiyana': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'cassiopeia-sion': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'cassiopeia-smolder': {
    reasonZh: '对线胜率 57.48%',
    reasonEn: 'Win rate 57.48%'
  },
  'cassiopeia-yasuo': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'chogath-azir': {
    reasonZh: '对线胜率 59.79%',
    reasonEn: 'Win rate 59.79%'
  },
  'chogath-belveth': {
    reasonZh: '对线胜率 51.61%',
    reasonEn: 'Win rate 51.61%'
  },
  'chogath-diana': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'chogath-galio': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%'
  },
  'chogath-jax': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%'
  },
  'chogath-kayle': {
    reasonZh: '对线胜率 61.02%',
    reasonEn: 'Win rate 61.02%'
  },
  'chogath-lissandra': {
    reasonZh: '对线胜率 52.15%',
    reasonEn: 'Win rate 52.15%'
  },
  'chogath-naafiri': {
    reasonZh: '对线胜率 59.77%',
    reasonEn: 'Win rate 59.77%'
  },
  'chogath-nasus': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'chogath-nunu': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'chogath-pantheon': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'chogath-rengar': {
    reasonZh: '对线胜率 57.04%',
    reasonEn: 'Win rate 57.04%'
  },
  'chogath-shaco': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'chogath-vex': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'chogath-zac': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'chogath-zed': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'chogath-zoe': {
    reasonZh: '对线胜率 53.97%',
    reasonEn: 'Win rate 53.97%'
  },
  'corki-aphelios': {
    reasonZh: '对线胜率 50.99%',
    reasonEn: 'Win rate 50.99%'
  },
  'corki-aurelionsol': {
    reasonZh: '对线胜率 52.04%',
    reasonEn: 'Win rate 52.04%'
  },
  'corki-ezreal': {
    reasonZh: '对线胜率 50.63%',
    reasonEn: 'Win rate 50.63%'
  },
  'corki-kalista': {
    reasonZh: '对线胜率 53.05%',
    reasonEn: 'Win rate 53.05%'
  },
  'corki-nilah': {
    reasonZh: '对线胜率 50.94%',
    reasonEn: 'Win rate 50.94%'
  },
  'corki-samira': {
    reasonZh: '对线胜率 51.19%',
    reasonEn: 'Win rate 51.19%'
  },
  'corki-senna': {
    reasonZh: '对线胜率 50.55%',
    reasonEn: 'Win rate 50.55%'
  },
  'corki-tristana': {
    reasonZh: '对线胜率 52.14%',
    reasonEn: 'Win rate 52.14%'
  },
  'corki-varus': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%'
  },
  'corki-yunara': {
    reasonZh: '对线胜率 51.15%',
    reasonEn: 'Win rate 51.15%'
  },
  'darius-caitlyn': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'darius-ezreal': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%'
  },
  'darius-gnar': {
    reasonZh: '对线胜率 57.21%',
    reasonEn: 'Win rate 57.21%'
  },
  'darius-gragas': {
    reasonZh: '对线胜率 61.84%',
    reasonEn: 'Win rate 61.84%'
  },
  'darius-lucian': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'darius-mordekaiser': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%'
  },
  'darius-qiyana': {
    reasonZh: '对线胜率 52.93%',
    reasonEn: 'Win rate 52.93%'
  },
  'darius-tahmkench': {
    reasonZh: '对线胜率 52.89%',
    reasonEn: 'Win rate 52.89%'
  },
  'darius-yasuo': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'darius-zed': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'diana-ambessa': {
    reasonZh: '对线胜率 70.37%',
    reasonEn: 'Win rate 70.37%'
  },
  'diana-camille': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'diana-darius': {
    reasonZh: '对线胜率 68.53%',
    reasonEn: 'Win rate 68.53%'
  },
  'diana-fiora': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'diana-gangplank': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'diana-jayce': {
    reasonZh: '对线胜率 63.29%',
    reasonEn: 'Win rate 63.29%'
  },
  'diana-jhin': {
    reasonZh: '对线胜率 57.72%',
    reasonEn: 'Win rate 57.72%'
  },
  'diana-ksante': {
    reasonZh: '对线胜率 67.74%',
    reasonEn: 'Win rate 67.74%'
  },
  'diana-smolder': {
    reasonZh: '对线胜率 59.64%',
    reasonEn: 'Win rate 59.64%'
  },
  'diana-tryndamere': {
    reasonZh: '对线胜率 64.38%',
    reasonEn: 'Win rate 64.38%'
  },
  'diana-ziggs': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%'
  },
  'draven-aatrox': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'draven-corki': {
    reasonZh: '对线胜率 51.35%',
    reasonEn: 'Win rate 51.35%'
  },
  'draven-garen': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'draven-jax': {
    reasonZh: '对线胜率 51.67%',
    reasonEn: 'Win rate 51.67%'
  },
  'draven-kaisa': {
    reasonZh: '对线胜率 52.93%',
    reasonEn: 'Win rate 52.93%'
  },
  'draven-kalista': {
    reasonZh: '对线胜率 53.60%',
    reasonEn: 'Win rate 53.60%'
  },
  'draven-lucian': {
    reasonZh: '对线胜率 51.46%',
    reasonEn: 'Win rate 51.46%'
  },
  'draven-mordekaiser': {
    reasonZh: '对线胜率 63.46%',
    reasonEn: 'Win rate 63.46%'
  },
  'draven-tristana': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'draven-twitch': {
    reasonZh: '对线胜率 50.73%',
    reasonEn: 'Win rate 50.73%'
  },
  'draven-vayne': {
    reasonZh: '对线胜率 50.87%',
    reasonEn: 'Win rate 50.87%'
  },
  'drmundo-akali': {
    reasonZh: '对线胜率 57.03%',
    reasonEn: 'Win rate 57.03%'
  },
  'drmundo-chogath': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%'
  },
  'drmundo-darius': {
    reasonZh: '对线胜率 55.62%',
    reasonEn: 'Win rate 55.62%'
  },
  'drmundo-gangplank': {
    reasonZh: '对线胜率 59.34%',
    reasonEn: 'Win rate 59.34%'
  },
  'drmundo-jax': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'drmundo-karthus': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'drmundo-khazix': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'drmundo-malphite': {
    reasonZh: '对线胜率 56.95%',
    reasonEn: 'Win rate 56.95%'
  },
  'drmundo-poppy': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'drmundo-smolder': {
    reasonZh: '对线胜率 56.62%',
    reasonEn: 'Win rate 56.62%'
  },
  'drmundo-trundle': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%'
  },
  'drmundo-zed': {
    reasonZh: '对线胜率 56.40%',
    reasonEn: 'Win rate 56.40%'
  },
  'ekko-aatrox': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%'
  },
  'ekko-darius': {
    reasonZh: '对线胜率 60.64%',
    reasonEn: 'Win rate 60.64%'
  },
  'ekko-drmundo': {
    reasonZh: '对线胜率 53.97%',
    reasonEn: 'Win rate 53.97%'
  },
  'ekko-garen': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'ekko-jax': {
    reasonZh: '对线胜率 58.67%',
    reasonEn: 'Win rate 58.67%'
  },
  'ekko-ksante': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'ekko-morgana': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'ekko-olaf': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'ekko-syndra': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'ekko-yorick': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'ekko-zed': {
    reasonZh: '对线胜率 56.58%',
    reasonEn: 'Win rate 56.58%'
  },
  'ekko-ziggs': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'elise-ambessa': {
    reasonZh: '对线胜率 52.21%',
    reasonEn: 'Win rate 52.21%'
  },
  'elise-anivia': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'elise-bard': {
    reasonZh: '对线胜率 59.86%',
    reasonEn: 'Win rate 59.86%'
  },
  'elise-brand': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'elise-camille': {
    reasonZh: '对线胜率 59.32%',
    reasonEn: 'Win rate 59.32%'
  },
  'elise-chogath': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'elise-illaoi': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'elise-kindred': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'elise-ksante': {
    reasonZh: '对线胜率 56.70%',
    reasonEn: 'Win rate 56.70%'
  },
  'elise-leblanc': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%'
  },
  'elise-lillia': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'elise-lulu': {
    reasonZh: '对线胜率 53.05%',
    reasonEn: 'Win rate 53.05%'
  },
  'elise-lux': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'elise-malphite': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%'
  },
  'elise-masteryi': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'elise-milio': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'elise-nami': {
    reasonZh: '对线胜率 51.65%',
    reasonEn: 'Win rate 51.65%'
  },
  'elise-neeko': {
    reasonZh: '对线胜率 54.38%',
    reasonEn: 'Win rate 54.38%'
  },
  'elise-nidalee': {
    reasonZh: '对线胜率 52.48%',
    reasonEn: 'Win rate 52.48%'
  },
  'elise-poppy': {
    reasonZh: '对线胜率 59.55%',
    reasonEn: 'Win rate 59.55%'
  },
  'elise-pyke': {
    reasonZh: '对线胜率 60.27%',
    reasonEn: 'Win rate 60.27%'
  },
  'elise-senna': {
    reasonZh: '对线胜率 55.84%',
    reasonEn: 'Win rate 55.84%'
  },
  'elise-seraphine': {
    reasonZh: '对线胜率 52.74%',
    reasonEn: 'Win rate 52.74%'
  },
  'elise-swain': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'elise-viego': {
    reasonZh: '对线胜率 55.62%',
    reasonEn: 'Win rate 55.62%'
  },
  'elise-volibear': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'elise-xerath': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%'
  },
  'elise-zilean': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'evelynn-akali': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'evelynn-brand': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'evelynn-darius': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'evelynn-gragas': {
    reasonZh: '对线胜率 58.25%',
    reasonEn: 'Win rate 58.25%'
  },
  'evelynn-hecarim': {
    reasonZh: '对线胜率 55.23%',
    reasonEn: 'Win rate 55.23%'
  },
  'evelynn-jhin': {
    reasonZh: '对线胜率 60.63%',
    reasonEn: 'Win rate 60.63%'
  },
  'evelynn-karthus': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'evelynn-kayle': {
    reasonZh: '对线胜率 54.23%',
    reasonEn: 'Win rate 54.23%'
  },
  'evelynn-kayn': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%'
  },
  'evelynn-kennen': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'evelynn-masteryi': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'evelynn-monkeyking': {
    reasonZh: '对线胜率 55.18%',
    reasonEn: 'Win rate 55.18%'
  },
  'evelynn-nocturne': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'evelynn-pantheon': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'evelynn-rumble': {
    reasonZh: '对线胜率 52.67%',
    reasonEn: 'Win rate 52.67%'
  },
  'evelynn-sejuani': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%'
  },
  'evelynn-shyvana': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'evelynn-yasuo': {
    reasonZh: '对线胜率 58.09%',
    reasonEn: 'Win rate 58.09%'
  },
  'evelynn-zaahen': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'evelynn-zed': {
    reasonZh: '对线胜率 58.92%',
    reasonEn: 'Win rate 58.92%'
  },
  'ezreal-garen': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'ezreal-malphite': {
    reasonZh: '对线胜率 61.67%',
    reasonEn: 'Win rate 61.67%'
  },
  'ezreal-varus': {
    reasonZh: '对线胜率 51.90%',
    reasonEn: 'Win rate 51.90%'
  },
  'fiddlesticks-ambessa': {
    reasonZh: '对线胜率 51.82%',
    reasonEn: 'Win rate 51.82%'
  },
  'fiddlesticks-bard': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'fiddlesticks-belveth': {
    reasonZh: '对线胜率 52.20%',
    reasonEn: 'Win rate 52.20%'
  },
  'fiddlesticks-blitzcrank': {
    reasonZh: '对线胜率 54.64%',
    reasonEn: 'Win rate 54.64%'
  },
  'fiddlesticks-diana': {
    reasonZh: '对线胜率 54.31%',
    reasonEn: 'Win rate 54.31%'
  },
  'fiddlesticks-elise': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'fiddlesticks-fizz': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'fiddlesticks-janna': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'fiddlesticks-jhin': {
    reasonZh: '对线胜率 56.09%',
    reasonEn: 'Win rate 56.09%'
  },
  'fiddlesticks-karma': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'fiddlesticks-kayle': {
    reasonZh: '对线胜率 52.13%',
    reasonEn: 'Win rate 52.13%'
  },
  'fiddlesticks-kayn': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'fiddlesticks-kennen': {
    reasonZh: '对线胜率 51.99%',
    reasonEn: 'Win rate 51.99%'
  },
  'fiddlesticks-khazix': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'fiddlesticks-lulu': {
    reasonZh: '对线胜率 52.37%',
    reasonEn: 'Win rate 52.37%'
  },
  'fiddlesticks-lux': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'fiddlesticks-malphite': {
    reasonZh: '对线胜率 63.79%',
    reasonEn: 'Win rate 63.79%'
  },
  'fiddlesticks-monkeyking': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'fiddlesticks-nautilus': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'fiddlesticks-nidalee': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'fiddlesticks-nunu': {
    reasonZh: '对线胜率 54.70%',
    reasonEn: 'Win rate 54.70%'
  },
  'fiddlesticks-pantheon': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'fiddlesticks-pyke': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'fiddlesticks-rakan': {
    reasonZh: '对线胜率 51.82%',
    reasonEn: 'Win rate 51.82%'
  },
  'fiddlesticks-rumble': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'fiddlesticks-senna': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'fiddlesticks-vayne': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'fiddlesticks-veigar': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'fiddlesticks-vi': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'fiddlesticks-viego': {
    reasonZh: '对线胜率 54.73%',
    reasonEn: 'Win rate 54.73%'
  },
  'fiddlesticks-yasuo': {
    reasonZh: '对线胜率 57.68%',
    reasonEn: 'Win rate 57.68%'
  },
  'fiddlesticks-yorick': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'fiddlesticks-yuumi': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'fiddlesticks-zaahen': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'fiddlesticks-zed': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%'
  },
  'fiddlesticks-zyra': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%'
  },
  'fiora-brand': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'fiora-karthus': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'fiora-ksante': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'fiora-mordekaiser': {
    reasonZh: '对线胜率 58.52%',
    reasonEn: 'Win rate 58.52%'
  },
  'fiora-nunu': {
    reasonZh: '对线胜率 53.69%',
    reasonEn: 'Win rate 53.69%'
  },
  'fiora-qiyana': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'fiora-shen': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'fiora-smolder': {
    reasonZh: '对线胜率 59.76%',
    reasonEn: 'Win rate 59.76%'
  },
  'fiora-sylas': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'fiora-twistedfate': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'fiora-varus': {
    reasonZh: '对线胜率 56.80%',
    reasonEn: 'Win rate 56.80%'
  },
  'fiora-veigar': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'fiora-volibear': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'fiora-zed': {
    reasonZh: '对线胜率 58.52%',
    reasonEn: 'Win rate 58.52%'
  },
  'fizz-ambessa': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'fizz-aurelionsol': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'fizz-aurora': {
    reasonZh: '对线胜率 52.21%',
    reasonEn: 'Win rate 52.21%'
  },
  'fizz-gangplank': {
    reasonZh: '对线胜率 65.08%',
    reasonEn: 'Win rate 65.08%'
  },
  'fizz-garen': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%'
  },
  'fizz-jayce': {
    reasonZh: '对线胜率 64.37%',
    reasonEn: 'Win rate 64.37%'
  },
  'fizz-katarina': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'fizz-ksante': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%'
  },
  'fizz-malphite': {
    reasonZh: '对线胜率 60.67%',
    reasonEn: 'Win rate 60.67%'
  },
  'fizz-mel': {
    reasonZh: '对线胜率 57.47%',
    reasonEn: 'Win rate 57.47%'
  },
  'fizz-renekton': {
    reasonZh: '对线胜率 65.43%',
    reasonEn: 'Win rate 65.43%'
  },
  'fizz-sion': {
    reasonZh: '对线胜率 60.94%',
    reasonEn: 'Win rate 60.94%'
  },
  'fizz-syndra': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'fizz-tristana': {
    reasonZh: '对线胜率 57.59%',
    reasonEn: 'Win rate 57.59%'
  },
  'fizz-tryndamere': {
    reasonZh: '对线胜率 60.87%',
    reasonEn: 'Win rate 60.87%'
  },
  'fizz-twistedfate': {
    reasonZh: '对线胜率 52.84%',
    reasonEn: 'Win rate 52.84%'
  },
  'fizz-velkoz': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'fizz-zed': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%'
  },
  'fizz-ziggs': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'galio-akshan': {
    reasonZh: '对线胜率 52.97%',
    reasonEn: 'Win rate 52.97%'
  },
  'galio-darius': {
    reasonZh: '对线胜率 58.38%',
    reasonEn: 'Win rate 58.38%'
  },
  'galio-gangplank': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'galio-irelia': {
    reasonZh: '对线胜率 56.01%',
    reasonEn: 'Win rate 56.01%'
  },
  'galio-jax': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'galio-jayce': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'galio-katarina': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'galio-kayle': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'galio-malphite': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'galio-ornn': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'galio-riven': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'galio-sion': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%'
  },
  'gangplank-elise': {
    reasonZh: '对线胜率 54.71%',
    reasonEn: 'Win rate 54.71%'
  },
  'gangplank-heimerdinger': {
    reasonZh: '对线胜率 58.60%',
    reasonEn: 'Win rate 58.60%'
  },
  'gangplank-lillia': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'gangplank-mordekaiser': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'gangplank-pantheon': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'gangplank-rammus': {
    reasonZh: '对线胜率 56.05%',
    reasonEn: 'Win rate 56.05%'
  },
  'gangplank-shaco': {
    reasonZh: '对线胜率 56.61%',
    reasonEn: 'Win rate 56.61%'
  },
  'gangplank-smolder': {
    reasonZh: '对线胜率 60.27%',
    reasonEn: 'Win rate 60.27%'
  },
  'gangplank-teemo': {
    reasonZh: '对线胜率 56.04%',
    reasonEn: 'Win rate 56.04%'
  },
  'gangplank-volibear': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%'
  },
  'gangplank-zac': {
    reasonZh: '对线胜率 56.49%',
    reasonEn: 'Win rate 56.49%'
  },
  'gangplank-zed': {
    reasonZh: '对线胜率 58.53%',
    reasonEn: 'Win rate 58.53%'
  },
  'garen-gragas': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'garen-jax': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'garen-ksante': {
    reasonZh: '对线胜率 60.98%',
    reasonEn: 'Win rate 60.98%'
  },
  'garen-lucian': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'garen-poppy': {
    reasonZh: '对线胜率 56.47%',
    reasonEn: 'Win rate 56.47%'
  },
  'garen-qiyana': {
    reasonZh: '对线胜率 57.93%',
    reasonEn: 'Win rate 57.93%'
  },
  'garen-shen': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'garen-sylas': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'garen-vladimir': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'garen-zed': {
    reasonZh: '对线胜率 58.81%',
    reasonEn: 'Win rate 58.81%'
  },
  'gnar-ambessa': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%'
  },
  'gnar-amumu': {
    reasonZh: '对线胜率 55.37%',
    reasonEn: 'Win rate 55.37%'
  },
  'gnar-darius': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'gnar-fiora': {
    reasonZh: '对线胜率 54.53%',
    reasonEn: 'Win rate 54.53%'
  },
  'gnar-galio': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'gnar-gangplank': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'gnar-kindred': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'gnar-ksante': {
    reasonZh: '对线胜率 55.30%',
    reasonEn: 'Win rate 55.30%'
  },
  'gnar-leesin': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%'
  },
  'gnar-shaco': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'gnar-shen': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%'
  },
  'gragas-aatrox': {
    reasonZh: '对线胜率 60.27%',
    reasonEn: 'Win rate 60.27%'
  },
  'gragas-gwen': {
    reasonZh: '对线胜率 52.89%',
    reasonEn: 'Win rate 52.89%'
  },
  'gragas-nidalee': {
    reasonZh: '对线胜率 53.30%',
    reasonEn: 'Win rate 53.30%'
  },
  'gragas-olaf': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'gragas-reksai': {
    reasonZh: '对线胜率 51.00%',
    reasonEn: 'Win rate 51.00%'
  },
  'gragas-rengar': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'gragas-riven': {
    reasonZh: '对线胜率 55.28%',
    reasonEn: 'Win rate 55.28%'
  },
  'gragas-sejuani': {
    reasonZh: '对线胜率 55.20%',
    reasonEn: 'Win rate 55.20%'
  },
  'gragas-shaco': {
    reasonZh: '对线胜率 52.36%',
    reasonEn: 'Win rate 52.36%'
  },
  'gragas-volibear': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%'
  },
  'gragas-zed': {
    reasonZh: '对线胜率 52.63%',
    reasonEn: 'Win rate 52.63%'
  },
  'graves-galio': {
    reasonZh: '对线胜率 52.49%',
    reasonEn: 'Win rate 52.49%'
  },
  'graves-garen': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'graves-jayce': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'graves-nasus': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'graves-pantheon': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'graves-qiyana': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%'
  },
  'graves-ryze': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'graves-sett': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%'
  },
  'graves-shaco': {
    reasonZh: '对线胜率 54.45%',
    reasonEn: 'Win rate 54.45%'
  },
  'graves-tryndamere': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'graves-zed': {
    reasonZh: '对线胜率 56.05%',
    reasonEn: 'Win rate 56.05%'
  },
  'gwen-brand': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'gwen-diana': {
    reasonZh: '对线胜率 59.76%',
    reasonEn: 'Win rate 59.76%'
  },
  'gwen-drmundo': {
    reasonZh: '对线胜率 55.96%',
    reasonEn: 'Win rate 55.96%'
  },
  'gwen-mordekaiser': {
    reasonZh: '对线胜率 59.62%',
    reasonEn: 'Win rate 59.62%'
  },
  'gwen-poppy': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'gwen-sejuani': {
    reasonZh: '对线胜率 55.33%',
    reasonEn: 'Win rate 55.33%'
  },
  'gwen-smolder': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'gwen-sylas': {
    reasonZh: '对线胜率 55.09%',
    reasonEn: 'Win rate 55.09%'
  },
  'gwen-tahmkench': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'gwen-tryndamere': {
    reasonZh: '对线胜率 56.14%',
    reasonEn: 'Win rate 56.14%'
  },
  'gwen-urgot': {
    reasonZh: '对线胜率 55.75%',
    reasonEn: 'Win rate 55.75%'
  },
  'gwen-xinzhao': {
    reasonZh: '对线胜率 53.25%',
    reasonEn: 'Win rate 53.25%'
  },
  'gwen-zed': {
    reasonZh: '对线胜率 57.24%',
    reasonEn: 'Win rate 57.24%'
  },
  'hecarim-gragas': {
    reasonZh: '对线胜率 50.72%',
    reasonEn: 'Win rate 50.72%'
  },
  'hecarim-kindred': {
    reasonZh: '对线胜率 51.68%',
    reasonEn: 'Win rate 51.68%'
  },
  'hecarim-malphite': {
    reasonZh: '对线胜率 50.07%',
    reasonEn: 'Win rate 50.07%'
  },
  'hecarim-rammus': {
    reasonZh: '对线胜率 51.74%',
    reasonEn: 'Win rate 51.74%'
  },
  'hecarim-shaco': {
    reasonZh: '对线胜率 52.15%',
    reasonEn: 'Win rate 52.15%'
  },
  'hecarim-talon': {
    reasonZh: '对线胜率 51.42%',
    reasonEn: 'Win rate 51.42%'
  },
  'hecarim-yasuo': {
    reasonZh: '对线胜率 51.02%',
    reasonEn: 'Win rate 51.02%'
  },
  'heimerdinger-brand': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'heimerdinger-gragas': {
    reasonZh: '对线胜率 58.56%',
    reasonEn: 'Win rate 58.56%'
  },
  'heimerdinger-jarvaniv': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'heimerdinger-kaisa': {
    reasonZh: '对线胜率 57.66%',
    reasonEn: 'Win rate 57.66%'
  },
  'heimerdinger-karthus': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'heimerdinger-pantheon': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'heimerdinger-poppy': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'heimerdinger-qiyana': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%'
  },
  'heimerdinger-rengar': {
    reasonZh: '对线胜率 54.22%',
    reasonEn: 'Win rate 54.22%'
  },
  'heimerdinger-warwick': {
    reasonZh: '对线胜率 56.99%',
    reasonEn: 'Win rate 56.99%'
  },
  'hwei-aatrox': {
    reasonZh: '对线胜率 59.81%',
    reasonEn: 'Win rate 59.81%'
  },
  'hwei-azir': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'hwei-chogath': {
    reasonZh: '对线胜率 54.88%',
    reasonEn: 'Win rate 54.88%'
  },
  'hwei-drmundo': {
    reasonZh: '对线胜率 63.93%',
    reasonEn: 'Win rate 63.93%'
  },
  'hwei-galio': {
    reasonZh: '对线胜率 55.50%',
    reasonEn: 'Win rate 55.50%'
  },
  'hwei-garen': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'hwei-graves': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'hwei-jax': {
    reasonZh: '对线胜率 65.38%',
    reasonEn: 'Win rate 65.38%'
  },
  'hwei-lissandra': {
    reasonZh: '对线胜率 52.83%',
    reasonEn: 'Win rate 52.83%'
  },
  'hwei-malphite': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%'
  },
  'hwei-malzahar': {
    reasonZh: '对线胜率 53.31%',
    reasonEn: 'Win rate 53.31%'
  },
  'hwei-orianna': {
    reasonZh: '对线胜率 55.27%',
    reasonEn: 'Win rate 55.27%'
  },
  'hwei-ryze': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'hwei-sion': {
    reasonZh: '对线胜率 55.04%',
    reasonEn: 'Win rate 55.04%'
  },
  'hwei-smolder': {
    reasonZh: '对线胜率 57.56%',
    reasonEn: 'Win rate 57.56%'
  },
  'hwei-swain': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%'
  },
  'hwei-tristana': {
    reasonZh: '对线胜率 57.23%',
    reasonEn: 'Win rate 57.23%'
  },
  'hwei-vex': {
    reasonZh: '对线胜率 51.80%',
    reasonEn: 'Win rate 51.80%'
  },
  'hwei-viktor': {
    reasonZh: '对线胜率 51.83%',
    reasonEn: 'Win rate 51.83%'
  },
  'hwei-vladimir': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'illaoi-amumu': {
    reasonZh: '对线胜率 56.04%',
    reasonEn: 'Win rate 56.04%'
  },
  'illaoi-drmundo': {
    reasonZh: '对线胜率 58.67%',
    reasonEn: 'Win rate 58.67%'
  },
  'illaoi-fiora': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'illaoi-irelia': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'illaoi-jax': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%'
  },
  'illaoi-renekton': {
    reasonZh: '对线胜率 56.78%',
    reasonEn: 'Win rate 56.78%'
  },
  'illaoi-singed': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'illaoi-sylas': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'illaoi-volibear': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'illaoi-zyra': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%'
  },
  'irelia-akali': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'irelia-darius': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'irelia-hecarim': {
    reasonZh: '对线胜率 56.48%',
    reasonEn: 'Win rate 56.48%'
  },
  'irelia-kayn': {
    reasonZh: '对线胜率 53.60%',
    reasonEn: 'Win rate 53.60%'
  },
  'irelia-ksante': {
    reasonZh: '对线胜率 56.04%',
    reasonEn: 'Win rate 56.04%'
  },
  'irelia-nunu': {
    reasonZh: '对线胜率 53.54%',
    reasonEn: 'Win rate 53.54%'
  },
  'irelia-olaf': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'irelia-orianna': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'irelia-rengar': {
    reasonZh: '对线胜率 60.29%',
    reasonEn: 'Win rate 60.29%'
  },
  'irelia-rumble': {
    reasonZh: '对线胜率 58.24%',
    reasonEn: 'Win rate 58.24%'
  },
  'irelia-smolder': {
    reasonZh: '对线胜率 69.49%',
    reasonEn: 'Win rate 69.49%'
  },
  'irelia-syndra': {
    reasonZh: '对线胜率 53.47%',
    reasonEn: 'Win rate 53.47%'
  },
  'irelia-tahmkench': {
    reasonZh: '对线胜率 55.73%',
    reasonEn: 'Win rate 55.73%'
  },
  'janna-alistar': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'janna-anivia': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'janna-camille': {
    reasonZh: '对线胜率 58.59%',
    reasonEn: 'Win rate 58.59%'
  },
  'janna-leblanc': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'janna-leona': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'janna-malphite': {
    reasonZh: '对线胜率 57.79%',
    reasonEn: 'Win rate 57.79%'
  },
  'janna-mel': {
    reasonZh: '对线胜率 56.48%',
    reasonEn: 'Win rate 56.48%'
  },
  'janna-missfortune': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'janna-rell': {
    reasonZh: '对线胜率 52.78%',
    reasonEn: 'Win rate 52.78%'
  },
  'janna-sett': {
    reasonZh: '对线胜率 59.68%',
    reasonEn: 'Win rate 59.68%'
  },
  'janna-soraka': {
    reasonZh: '对线胜率 50.99%',
    reasonEn: 'Win rate 50.99%'
  },
  'janna-swain': {
    reasonZh: '对线胜率 55.51%',
    reasonEn: 'Win rate 55.51%'
  },
  'janna-sylas': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'janna-veigar': {
    reasonZh: '对线胜率 57.24%',
    reasonEn: 'Win rate 57.24%'
  },
  'jarvaniv-anivia': {
    reasonZh: '对线胜率 59.42%',
    reasonEn: 'Win rate 59.42%'
  },
  'jarvaniv-camille': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%'
  },
  'jarvaniv-elise': {
    reasonZh: '对线胜率 60.27%',
    reasonEn: 'Win rate 60.27%'
  },
  'jarvaniv-malphite': {
    reasonZh: '对线胜率 59.04%',
    reasonEn: 'Win rate 59.04%'
  },
  'jarvaniv-mel': {
    reasonZh: '对线胜率 56.73%',
    reasonEn: 'Win rate 56.73%'
  },
  'jarvaniv-missfortune': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'jarvaniv-senna': {
    reasonZh: '对线胜率 54.36%',
    reasonEn: 'Win rate 54.36%'
  },
  'jarvaniv-sylas': {
    reasonZh: '对线胜率 55.75%',
    reasonEn: 'Win rate 55.75%'
  },
  'jarvaniv-teemo': {
    reasonZh: '对线胜率 58.16%',
    reasonEn: 'Win rate 58.16%'
  },
  'jarvaniv-veigar': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'jax-aurelionsol': {
    reasonZh: '对线胜率 52.78%',
    reasonEn: 'Win rate 52.78%'
  },
  'jax-caitlyn': {
    reasonZh: '对线胜率 52.83%',
    reasonEn: 'Win rate 52.83%'
  },
  'jax-ezreal': {
    reasonZh: '对线胜率 59.70%',
    reasonEn: 'Win rate 59.70%'
  },
  'jax-gragas': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'jax-graves': {
    reasonZh: '对线胜率 60.71%',
    reasonEn: 'Win rate 60.71%'
  },
  'jax-jhin': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'jax-ksante': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'jax-lux': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%'
  },
  'jax-malzahar': {
    reasonZh: '对线胜率 50.79%',
    reasonEn: 'Win rate 50.79%'
  },
  'jax-missfortune': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'jax-olaf': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'jax-pantheon': {
    reasonZh: '对线胜率 55.84%',
    reasonEn: 'Win rate 55.84%'
  },
  'jax-tahmkench': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'jax-trundle': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'jax-volibear': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'jayce-akshan': {
    reasonZh: '对线胜率 52.49%',
    reasonEn: 'Win rate 52.49%'
  },
  'jayce-garen': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'jayce-gragas': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'jayce-kled': {
    reasonZh: '对线胜率 51.06%',
    reasonEn: 'Win rate 51.06%'
  },
  'jayce-lucian': {
    reasonZh: '对线胜率 54.10%',
    reasonEn: 'Win rate 54.10%'
  },
  'jayce-mel': {
    reasonZh: '对线胜率 53.46%',
    reasonEn: 'Win rate 53.46%'
  },
  'jayce-smolder': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'jayce-sylas': {
    reasonZh: '对线胜率 54.60%',
    reasonEn: 'Win rate 54.60%'
  },
  'jayce-syndra': {
    reasonZh: '对线胜率 53.40%',
    reasonEn: 'Win rate 53.40%'
  },
  'jayce-tristana': {
    reasonZh: '对线胜率 56.47%',
    reasonEn: 'Win rate 56.47%'
  },
  'jayce-twistedfate': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'jayce-volibear': {
    reasonZh: '对线胜率 53.40%',
    reasonEn: 'Win rate 53.40%'
  },
  'jayce-yasuo': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%'
  },
  'jayce-ziggs': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'jhin-corki': {
    reasonZh: '对线胜率 51.97%',
    reasonEn: 'Win rate 51.97%'
  },
  'jhin-darius': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%'
  },
  'jhin-gragas': {
    reasonZh: '对线胜率 53.47%',
    reasonEn: 'Win rate 53.47%'
  },
  'jhin-heimerdinger': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'jhin-kogmaw': {
    reasonZh: '对线胜率 50.28%',
    reasonEn: 'Win rate 50.28%'
  },
  'jhin-malphite': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%'
  },
  'jhin-nasus': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%'
  },
  'jhin-rammus': {
    reasonZh: '对线胜率 63.03%',
    reasonEn: 'Win rate 63.03%'
  },
  'jhin-rengar': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'jhin-sejuani': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%'
  },
  'jhin-taliyah': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'jhin-zyra': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'jinx-aphelios': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%'
  },
  'jinx-caitlyn': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'jinx-corki': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'jinx-draven': {
    reasonZh: '对线胜率 51.42%',
    reasonEn: 'Win rate 51.42%'
  },
  'jinx-ezreal': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'jinx-kaisa': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'jinx-kalista': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'jinx-kogmaw': {
    reasonZh: '对线胜率 50.12%',
    reasonEn: 'Win rate 50.12%'
  },
  'jinx-lucian': {
    reasonZh: '对线胜率 53.35%',
    reasonEn: 'Win rate 53.35%'
  },
  'jinx-nilah': {
    reasonZh: '对线胜率 51.12%',
    reasonEn: 'Win rate 51.12%'
  },
  'jinx-samira': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%'
  },
  'jinx-tristana': {
    reasonZh: '对线胜率 52.53%',
    reasonEn: 'Win rate 52.53%'
  },
  'jinx-varus': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'jinx-xayah': {
    reasonZh: '对线胜率 51.13%',
    reasonEn: 'Win rate 51.13%'
  },
  'jinx-yunara': {
    reasonZh: '对线胜率 52.47%',
    reasonEn: 'Win rate 52.47%'
  },
  'kaisa-darius': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'kaisa-fiora': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'kaisa-gnar': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%'
  },
  'kaisa-gragas': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%'
  },
  'kaisa-hecarim': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'kaisa-ksante': {
    reasonZh: '对线胜率 59.19%',
    reasonEn: 'Win rate 59.19%'
  },
  'kaisa-nunu': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'kaisa-rumble': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'kaisa-sion': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%'
  },
  'kaisa-warwick': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%'
  },
  'kaisa-zac': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'kaisa-zed': {
    reasonZh: '对线胜率 56.22%',
    reasonEn: 'Win rate 56.22%'
  },
  'kaisa-zyra': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%'
  },
  'kalista-caitlyn': {
    reasonZh: '对线胜率 50.91%',
    reasonEn: 'Win rate 50.91%'
  },
  'kalista-ezreal': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'kalista-kaisa': {
    reasonZh: '对线胜率 50.63%',
    reasonEn: 'Win rate 50.63%'
  },
  'kalista-nilah': {
    reasonZh: '对线胜率 52.03%',
    reasonEn: 'Win rate 52.03%'
  },
  'kalista-tristana': {
    reasonZh: '对线胜率 50.31%',
    reasonEn: 'Win rate 50.31%'
  },
  'karma-ashe': {
    reasonZh: '对线胜率 57.47%',
    reasonEn: 'Win rate 57.47%'
  },
  'karma-jarvaniv': {
    reasonZh: '对线胜率 52.64%',
    reasonEn: 'Win rate 52.64%'
  },
  'karma-leblanc': {
    reasonZh: '对线胜率 53.15%',
    reasonEn: 'Win rate 53.15%'
  },
  'karma-leesin': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'karma-lux': {
    reasonZh: '对线胜率 53.31%',
    reasonEn: 'Win rate 53.31%'
  },
  'karma-malphite': {
    reasonZh: '对线胜率 54.33%',
    reasonEn: 'Win rate 54.33%'
  },
  'karma-mel': {
    reasonZh: '对线胜率 56.47%',
    reasonEn: 'Win rate 56.47%'
  },
  'karma-missfortune': {
    reasonZh: '对线胜率 60.53%',
    reasonEn: 'Win rate 60.53%'
  },
  'karma-sett': {
    reasonZh: '对线胜率 58.45%',
    reasonEn: 'Win rate 58.45%'
  },
  'karma-veigar': {
    reasonZh: '对线胜率 54.68%',
    reasonEn: 'Win rate 54.68%'
  },
  'karthus-akali': {
    reasonZh: '对线胜率 55.78%',
    reasonEn: 'Win rate 55.78%'
  },
  'karthus-illaoi': {
    reasonZh: '对线胜率 56.27%',
    reasonEn: 'Win rate 56.27%'
  },
  'karthus-malphite': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'karthus-olaf': {
    reasonZh: '对线胜率 54.37%',
    reasonEn: 'Win rate 54.37%'
  },
  'karthus-poppy': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'karthus-qiyana': {
    reasonZh: '对线胜率 58.30%',
    reasonEn: 'Win rate 58.30%'
  },
  'karthus-sejuani': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'karthus-smolder': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%'
  },
  'karthus-viego': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'karthus-zed': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'karthus-zyra': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'kassadin-ahri': {
    reasonZh: '对线胜率 50.05%',
    reasonEn: 'Win rate 50.05%'
  },
  'kassadin-azir': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'kassadin-ekko': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'kassadin-irelia': {
    reasonZh: '对线胜率 58.87%',
    reasonEn: 'Win rate 58.87%'
  },
  'kassadin-mel': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'kassadin-morgana': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'kassadin-orianna': {
    reasonZh: '对线胜率 54.62%',
    reasonEn: 'Win rate 54.62%'
  },
  'kassadin-syndra': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'kassadin-taliyah': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'kassadin-tristana': {
    reasonZh: '对线胜率 56.14%',
    reasonEn: 'Win rate 56.14%'
  },
  'kassadin-tryndamere': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%'
  },
  'katarina-aatrox': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'katarina-aurora': {
    reasonZh: '对线胜率 54.51%',
    reasonEn: 'Win rate 54.51%'
  },
  'katarina-darius': {
    reasonZh: '对线胜率 60.19%',
    reasonEn: 'Win rate 60.19%'
  },
  'katarina-drmundo': {
    reasonZh: '对线胜率 64.95%',
    reasonEn: 'Win rate 64.95%'
  },
  'katarina-gangplank': {
    reasonZh: '对线胜率 69.23%',
    reasonEn: 'Win rate 69.23%'
  },
  'katarina-garen': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'katarina-jax': {
    reasonZh: '对线胜率 68.09%',
    reasonEn: 'Win rate 68.09%'
  },
  'katarina-jayce': {
    reasonZh: '对线胜率 65.22%',
    reasonEn: 'Win rate 65.22%'
  },
  'katarina-mordekaiser': {
    reasonZh: '对线胜率 61.45%',
    reasonEn: 'Win rate 61.45%'
  },
  'katarina-nasus': {
    reasonZh: '对线胜率 60.42%',
    reasonEn: 'Win rate 60.42%'
  },
  'katarina-renekton': {
    reasonZh: '对线胜率 60.26%',
    reasonEn: 'Win rate 60.26%'
  },
  'katarina-syndra': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'katarina-taliyah': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'katarina-tryndamere': {
    reasonZh: '对线胜率 67.31%',
    reasonEn: 'Win rate 67.31%'
  },
  'katarina-yone': {
    reasonZh: '对线胜率 60.81%',
    reasonEn: 'Win rate 60.81%'
  },
  'katarina-yorick': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'kayle-brand': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'kayle-briar': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'kayle-darius': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'kayle-diana': {
    reasonZh: '对线胜率 54.38%',
    reasonEn: 'Win rate 54.38%'
  },
  'kayle-ekko': {
    reasonZh: '对线胜率 55.11%',
    reasonEn: 'Win rate 55.11%'
  },
  'kayle-elise': {
    reasonZh: '对线胜率 57.49%',
    reasonEn: 'Win rate 57.49%'
  },
  'kayle-garen': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'kayle-gwen': {
    reasonZh: '对线胜率 56.85%',
    reasonEn: 'Win rate 56.85%'
  },
  'kayle-heimerdinger': {
    reasonZh: '对线胜率 57.86%',
    reasonEn: 'Win rate 57.86%'
  },
  'kayle-illaoi': {
    reasonZh: '对线胜率 57.44%',
    reasonEn: 'Win rate 57.44%'
  },
  'kayle-kaisa': {
    reasonZh: '对线胜率 58.38%',
    reasonEn: 'Win rate 58.38%'
  },
  'kayle-kayn': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'kayle-kindred': {
    reasonZh: '对线胜率 55.06%',
    reasonEn: 'Win rate 55.06%'
  },
  'kayle-leesin': {
    reasonZh: '对线胜率 55.96%',
    reasonEn: 'Win rate 55.96%'
  },
  'kayle-lillia': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'kayle-monkeyking': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'kayle-mordekaiser': {
    reasonZh: '对线胜率 58.25%',
    reasonEn: 'Win rate 58.25%'
  },
  'kayle-naafiri': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'kayle-rammus': {
    reasonZh: '对线胜率 55.83%',
    reasonEn: 'Win rate 55.83%'
  },
  'kayle-reksai': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%'
  },
  'kayle-renekton': {
    reasonZh: '对线胜率 59.00%',
    reasonEn: 'Win rate 59.00%'
  },
  'kayle-shaco': {
    reasonZh: '对线胜率 57.96%',
    reasonEn: 'Win rate 57.96%'
  },
  'kayle-singed': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'kayle-varus': {
    reasonZh: '对线胜率 66.04%',
    reasonEn: 'Win rate 66.04%'
  },
  'kayle-vi': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'kayle-viego': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'kayle-volibear': {
    reasonZh: '对线胜率 58.89%',
    reasonEn: 'Win rate 58.89%'
  },
  'kayle-yone': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%'
  },
  'kayn-amumu': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'kayn-diana': {
    reasonZh: '对线胜率 52.89%',
    reasonEn: 'Win rate 52.89%'
  },
  'kayn-fizz': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'kayn-jhin': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'kayn-kaisa': {
    reasonZh: '对线胜率 52.73%',
    reasonEn: 'Win rate 52.73%'
  },
  'kayn-ksante': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'kayn-shyvana': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'kayn-smolder': {
    reasonZh: '对线胜率 53.36%',
    reasonEn: 'Win rate 53.36%'
  },
  'kayn-tryndamere': {
    reasonZh: '对线胜率 52.78%',
    reasonEn: 'Win rate 52.78%'
  },
  'kayn-zed': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%'
  },
  'kennen-akali': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'kennen-belveth': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'kennen-diana': {
    reasonZh: '对线胜率 54.98%',
    reasonEn: 'Win rate 54.98%'
  },
  'kennen-gwen': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'kennen-kayle': {
    reasonZh: '对线胜率 58.42%',
    reasonEn: 'Win rate 58.42%'
  },
  'kennen-kayn': {
    reasonZh: '对线胜率 53.02%',
    reasonEn: 'Win rate 53.02%'
  },
  'kennen-kindred': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%'
  },
  'kennen-nocturne': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'kennen-ornn': {
    reasonZh: '对线胜率 52.79%',
    reasonEn: 'Win rate 52.79%'
  },
  'kennen-riven': {
    reasonZh: '对线胜率 55.31%',
    reasonEn: 'Win rate 55.31%'
  },
  'kennen-sejuani': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%'
  },
  'kennen-shyvana': {
    reasonZh: '对线胜率 59.06%',
    reasonEn: 'Win rate 59.06%'
  },
  'kennen-taliyah': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'kennen-talon': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'kennen-varus': {
    reasonZh: '对线胜率 55.14%',
    reasonEn: 'Win rate 55.14%'
  },
  'kennen-vayne': {
    reasonZh: '对线胜率 53.28%',
    reasonEn: 'Win rate 53.28%'
  },
  'kennen-vi': {
    reasonZh: '对线胜率 56.09%',
    reasonEn: 'Win rate 56.09%'
  },
  'kennen-warwick': {
    reasonZh: '对线胜率 54.32%',
    reasonEn: 'Win rate 54.32%'
  },
  'kennen-yasuo': {
    reasonZh: '对线胜率 64.65%',
    reasonEn: 'Win rate 64.65%'
  },
  'kennen-yone': {
    reasonZh: '对线胜率 58.50%',
    reasonEn: 'Win rate 58.50%'
  },
  'kennen-zaahen': {
    reasonZh: '对线胜率 58.40%',
    reasonEn: 'Win rate 58.40%'
  },
  'khazix-diana': {
    reasonZh: '对线胜率 51.31%',
    reasonEn: 'Win rate 51.31%'
  },
  'khazix-fizz': {
    reasonZh: '对线胜率 52.53%',
    reasonEn: 'Win rate 52.53%'
  },
  'khazix-hecarim': {
    reasonZh: '对线胜率 50.64%',
    reasonEn: 'Win rate 50.64%'
  },
  'khazix-jayce': {
    reasonZh: '对线胜率 50.73%',
    reasonEn: 'Win rate 50.73%'
  },
  'khazix-kaisa': {
    reasonZh: '对线胜率 50.93%',
    reasonEn: 'Win rate 50.93%'
  },
  'khazix-sylas': {
    reasonZh: '对线胜率 50.68%',
    reasonEn: 'Win rate 50.68%'
  },
  'khazix-varus': {
    reasonZh: '对线胜率 50.69%',
    reasonEn: 'Win rate 50.69%'
  },
  'khazix-vi': {
    reasonZh: '对线胜率 50.66%',
    reasonEn: 'Win rate 50.66%'
  },
  'khazix-yasuo': {
    reasonZh: '对线胜率 52.11%',
    reasonEn: 'Win rate 52.11%'
  },
  'khazix-zed': {
    reasonZh: '对线胜率 52.15%',
    reasonEn: 'Win rate 52.15%'
  },
  'kindred-fizz': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'kindred-jayce': {
    reasonZh: '对线胜率 53.00%',
    reasonEn: 'Win rate 53.00%'
  },
  'kindred-kaisa': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'kindred-olaf': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'kindred-rengar': {
    reasonZh: '对线胜率 57.94%',
    reasonEn: 'Win rate 57.94%'
  },
  'kindred-smolder': {
    reasonZh: '对线胜率 57.19%',
    reasonEn: 'Win rate 57.19%'
  },
  'kindred-sylas': {
    reasonZh: '对线胜率 52.98%',
    reasonEn: 'Win rate 52.98%'
  },
  'kindred-tahmkench': {
    reasonZh: '对线胜率 54.09%',
    reasonEn: 'Win rate 54.09%'
  },
  'kindred-urgot': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'kindred-yasuo': {
    reasonZh: '对线胜率 55.80%',
    reasonEn: 'Win rate 55.80%'
  },
  'kindred-zed': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'kled-aatrox': {
    reasonZh: '对线胜率 58.76%',
    reasonEn: 'Win rate 58.76%'
  },
  'kled-darius': {
    reasonZh: '对线胜率 50.56%',
    reasonEn: 'Win rate 50.56%'
  },
  'kled-drmundo': {
    reasonZh: '对线胜率 56.47%',
    reasonEn: 'Win rate 56.47%'
  },
  'kled-gangplank': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'kled-garen': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%'
  },
  'kled-jax': {
    reasonZh: '对线胜率 55.20%',
    reasonEn: 'Win rate 55.20%'
  },
  'kled-nasus': {
    reasonZh: '对线胜率 50.91%',
    reasonEn: 'Win rate 50.91%'
  },
  'kled-renekton': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'kled-yone': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'kogmaw-aphelios': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'kogmaw-ashe': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'kogmaw-corki': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'kogmaw-draven': {
    reasonZh: '对线胜率 55.85%',
    reasonEn: 'Win rate 55.85%'
  },
  'kogmaw-ezreal': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'kogmaw-kaisa': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'kogmaw-lucian': {
    reasonZh: '对线胜率 52.83%',
    reasonEn: 'Win rate 52.83%'
  },
  'kogmaw-nilah': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'kogmaw-sivir': {
    reasonZh: '对线胜率 52.54%',
    reasonEn: 'Win rate 52.54%'
  },
  'kogmaw-tristana': {
    reasonZh: '对线胜率 54.88%',
    reasonEn: 'Win rate 54.88%'
  },
  'kogmaw-twitch': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'kogmaw-xayah': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'kogmaw-zeri': {
    reasonZh: '对线胜率 51.89%',
    reasonEn: 'Win rate 51.89%'
  },
  'ksante-aatrox': {
    reasonZh: '对线胜率 51.92%',
    reasonEn: 'Win rate 51.92%'
  },
  'ksante-drmundo': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'ksante-gragas': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'ksante-lissandra': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'ksante-malphite': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'ksante-olaf': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'ksante-ornn': {
    reasonZh: '对线胜率 51.92%',
    reasonEn: 'Win rate 51.92%'
  },
  'ksante-pantheon': {
    reasonZh: '对线胜率 52.00%',
    reasonEn: 'Win rate 52.00%'
  },
  'ksante-rammus': {
    reasonZh: '对线胜率 55.76%',
    reasonEn: 'Win rate 55.76%'
  },
  'ksante-sylas': {
    reasonZh: '对线胜率 51.49%',
    reasonEn: 'Win rate 51.49%'
  },
  'leblanc-aatrox': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'leblanc-azir': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%'
  },
  'leblanc-darius': {
    reasonZh: '对线胜率 58.10%',
    reasonEn: 'Win rate 58.10%'
  },
  'leblanc-ekko': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%'
  },
  'leblanc-fiora': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'leblanc-jarvaniv': {
    reasonZh: '对线胜率 58.59%',
    reasonEn: 'Win rate 58.59%'
  },
  'leblanc-jayce': {
    reasonZh: '对线胜率 58.21%',
    reasonEn: 'Win rate 58.21%'
  },
  'leblanc-missfortune': {
    reasonZh: '对线胜率 67.02%',
    reasonEn: 'Win rate 67.02%'
  },
  'leblanc-mordekaiser': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'leblanc-senna': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%'
  },
  'leblanc-sett': {
    reasonZh: '对线胜率 66.04%',
    reasonEn: 'Win rate 66.04%'
  },
  'leblanc-taliyah': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'leblanc-taric': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'leblanc-tryndamere': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'leblanc-yone': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%'
  },
  'leblanc-zilean': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'leesin-bard': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'leesin-janna': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'leesin-jarvaniv': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'leesin-lulu': {
    reasonZh: '对线胜率 51.72%',
    reasonEn: 'Win rate 51.72%'
  },
  'leesin-malphite': {
    reasonZh: '对线胜率 50.70%',
    reasonEn: 'Win rate 50.70%'
  },
  'leesin-missfortune': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%'
  },
  'leesin-neeko': {
    reasonZh: '对线胜率 50.51%',
    reasonEn: 'Win rate 50.51%'
  },
  'leesin-rengar': {
    reasonZh: '对线胜率 51.24%',
    reasonEn: 'Win rate 51.24%'
  },
  'leesin-senna': {
    reasonZh: '对线胜率 51.82%',
    reasonEn: 'Win rate 51.82%'
  },
  'leesin-zed': {
    reasonZh: '对线胜率 51.64%',
    reasonEn: 'Win rate 51.64%'
  },
  'leona-blitzcrank': {
    reasonZh: '对线胜率 52.46%',
    reasonEn: 'Win rate 52.46%'
  },
  'leona-camille': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'leona-elise': {
    reasonZh: '对线胜率 52.82%',
    reasonEn: 'Win rate 52.82%'
  },
  'leona-jarvaniv': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%'
  },
  'leona-leesin': {
    reasonZh: '对线胜率 54.03%',
    reasonEn: 'Win rate 54.03%'
  },
  'leona-lulu': {
    reasonZh: '对线胜率 52.53%',
    reasonEn: 'Win rate 52.53%'
  },
  'leona-malphite': {
    reasonZh: '对线胜率 57.40%',
    reasonEn: 'Win rate 57.40%'
  },
  'leona-mel': {
    reasonZh: '对线胜率 55.92%',
    reasonEn: 'Win rate 55.92%'
  },
  'leona-missfortune': {
    reasonZh: '对线胜率 55.92%',
    reasonEn: 'Win rate 55.92%'
  },
  'leona-nautilus': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'leona-pantheon': {
    reasonZh: '对线胜率 53.76%',
    reasonEn: 'Win rate 53.76%'
  },
  'leona-pyke': {
    reasonZh: '对线胜率 53.84%',
    reasonEn: 'Win rate 53.84%'
  },
  'leona-senna': {
    reasonZh: '对线胜率 52.95%',
    reasonEn: 'Win rate 52.95%'
  },
  'leona-sett': {
    reasonZh: '对线胜率 54.58%',
    reasonEn: 'Win rate 54.58%'
  },
  'leona-yuumi': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'lillia-amumu': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'lillia-chogath': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'lillia-kaisa': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%'
  },
  'lillia-leesin': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'lillia-malphite': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'lillia-monkeyking': {
    reasonZh: '对线胜率 53.88%',
    reasonEn: 'Win rate 53.88%'
  },
  'lillia-nocturne': {
    reasonZh: '对线胜率 52.35%',
    reasonEn: 'Win rate 52.35%'
  },
  'lillia-olaf': {
    reasonZh: '对线胜率 52.04%',
    reasonEn: 'Win rate 52.04%'
  },
  'lillia-rammus': {
    reasonZh: '对线胜率 58.27%',
    reasonEn: 'Win rate 58.27%'
  },
  'lillia-sejuani': {
    reasonZh: '对线胜率 56.87%',
    reasonEn: 'Win rate 56.87%'
  },
  'lillia-shaco': {
    reasonZh: '对线胜率 55.37%',
    reasonEn: 'Win rate 55.37%'
  },
  'lillia-shyvana': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'lillia-sylas': {
    reasonZh: '对线胜率 55.09%',
    reasonEn: 'Win rate 55.09%'
  },
  'lillia-warwick': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%'
  },
  'lillia-zed': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'lissandra-camille': {
    reasonZh: '对线胜率 69.86%',
    reasonEn: 'Win rate 69.86%'
  },
  'lissandra-darius': {
    reasonZh: '对线胜率 58.02%',
    reasonEn: 'Win rate 58.02%'
  },
  'lissandra-ekko': {
    reasonZh: '对线胜率 55.44%',
    reasonEn: 'Win rate 55.44%'
  },
  'lissandra-fiora': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'lissandra-fizz': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%'
  },
  'lissandra-gangplank': {
    reasonZh: '对线胜率 68.42%',
    reasonEn: 'Win rate 68.42%'
  },
  'lissandra-garen': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'lissandra-jax': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'lissandra-jayce': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'lissandra-malphite': {
    reasonZh: '对线胜率 61.95%',
    reasonEn: 'Win rate 61.95%'
  },
  'lissandra-naafiri': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%'
  },
  'lissandra-nasus': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%'
  },
  'lissandra-ornn': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'lissandra-renekton': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'lissandra-riven': {
    reasonZh: '对线胜率 56.14%',
    reasonEn: 'Win rate 56.14%'
  },
  'lissandra-syndra': {
    reasonZh: '对线胜率 53.53%',
    reasonEn: 'Win rate 53.53%'
  },
  'lissandra-teemo': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'lissandra-tryndamere': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'lissandra-yasuo': {
    reasonZh: '对线胜率 58.08%',
    reasonEn: 'Win rate 58.08%'
  },
  'lissandra-yone': {
    reasonZh: '对线胜率 56.15%',
    reasonEn: 'Win rate 56.15%'
  },
  'lissandra-yorick': {
    reasonZh: '对线胜率 61.40%',
    reasonEn: 'Win rate 61.40%'
  },
  'lucian-aatrox': {
    reasonZh: '对线胜率 61.48%',
    reasonEn: 'Win rate 61.48%'
  },
  'lucian-ezreal': {
    reasonZh: '对线胜率 51.28%',
    reasonEn: 'Win rate 51.28%'
  },
  'lucian-jax': {
    reasonZh: '对线胜率 53.68%',
    reasonEn: 'Win rate 53.68%'
  },
  'lucian-malphite': {
    reasonZh: '对线胜率 50.62%',
    reasonEn: 'Win rate 50.62%'
  },
  'lucian-renekton': {
    reasonZh: '对线胜率 54.79%',
    reasonEn: 'Win rate 54.79%'
  },
  'lucian-tristana': {
    reasonZh: '对线胜率 50.39%',
    reasonEn: 'Win rate 50.39%'
  },
  'lucian-varus': {
    reasonZh: '对线胜率 52.12%',
    reasonEn: 'Win rate 52.12%'
  },
  'lucian-yorick': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%'
  },
  'lulu-anivia': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'lulu-ashe': {
    reasonZh: '对线胜率 53.14%',
    reasonEn: 'Win rate 53.14%'
  },
  'lulu-camille': {
    reasonZh: '对线胜率 53.21%',
    reasonEn: 'Win rate 53.21%'
  },
  'lulu-leblanc': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%'
  },
  'lulu-malphite': {
    reasonZh: '对线胜率 52.85%',
    reasonEn: 'Win rate 52.85%'
  },
  'lulu-mel': {
    reasonZh: '对线胜率 55.57%',
    reasonEn: 'Win rate 55.57%'
  },
  'lulu-missfortune': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%'
  },
  'lulu-sett': {
    reasonZh: '对线胜率 57.10%',
    reasonEn: 'Win rate 57.10%'
  },
  'lulu-shaco': {
    reasonZh: '对线胜率 53.53%',
    reasonEn: 'Win rate 53.53%'
  },
  'lulu-shen': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'lulu-zilean': {
    reasonZh: '对线胜率 50.45%',
    reasonEn: 'Win rate 50.45%'
  },
  'lux-cassiopeia': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%'
  },
  'lux-darius': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%'
  },
  'lux-garen': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%'
  },
  'lux-hwei': {
    reasonZh: '对线胜率 51.14%',
    reasonEn: 'Win rate 51.14%'
  },
  'lux-kassadin': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'lux-malphite': {
    reasonZh: '对线胜率 56.07%',
    reasonEn: 'Win rate 56.07%'
  },
  'lux-missfortune': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'lux-mordekaiser': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%'
  },
  'lux-nasus': {
    reasonZh: '对线胜率 59.77%',
    reasonEn: 'Win rate 59.77%'
  },
  'lux-neeko': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'lux-tristana': {
    reasonZh: '对线胜率 58.43%',
    reasonEn: 'Win rate 58.43%'
  },
  'lux-veigar': {
    reasonZh: '对线胜率 55.64%',
    reasonEn: 'Win rate 55.64%'
  },
  'lux-velkoz': {
    reasonZh: '对线胜率 57.10%',
    reasonEn: 'Win rate 57.10%'
  },
  'lux-viktor': {
    reasonZh: '对线胜率 52.18%',
    reasonEn: 'Win rate 52.18%'
  },
  'malphite-annie': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%'
  },
  'malphite-camille': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'malphite-cassiopeia': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%'
  },
  'malphite-graves': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'malphite-irelia': {
    reasonZh: '对线胜率 62.22%',
    reasonEn: 'Win rate 62.22%'
  },
  'malphite-kennen': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%'
  },
  'malphite-kled': {
    reasonZh: '对线胜率 51.14%',
    reasonEn: 'Win rate 51.14%'
  },
  'malphite-pantheon': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%'
  },
  'malphite-qiyana': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'malphite-smolder': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'malphite-vayne': {
    reasonZh: '对线胜率 55.82%',
    reasonEn: 'Win rate 55.82%'
  },
  'malzahar-aatrox': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'malzahar-ahri': {
    reasonZh: '对线胜率 50.04%',
    reasonEn: 'Win rate 50.04%'
  },
  'malzahar-akshan': {
    reasonZh: '对线胜率 51.89%',
    reasonEn: 'Win rate 51.89%'
  },
  'malzahar-ambessa': {
    reasonZh: '对线胜率 54.79%',
    reasonEn: 'Win rate 54.79%'
  },
  'malzahar-annie': {
    reasonZh: '对线胜率 50.05%',
    reasonEn: 'Win rate 50.05%'
  },
  'malzahar-cassiopeia': {
    reasonZh: '对线胜率 54.68%',
    reasonEn: 'Win rate 54.68%'
  },
  'malzahar-chogath': {
    reasonZh: '对线胜率 60.71%',
    reasonEn: 'Win rate 60.71%'
  },
  'malzahar-fiora': {
    reasonZh: '对线胜率 57.95%',
    reasonEn: 'Win rate 57.95%'
  },
  'malzahar-gangplank': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%'
  },
  'malzahar-graves': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'malzahar-irelia': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%'
  },
  'malzahar-jayce': {
    reasonZh: '对线胜率 56.07%',
    reasonEn: 'Win rate 56.07%'
  },
  'malzahar-katarina': {
    reasonZh: '对线胜率 52.99%',
    reasonEn: 'Win rate 52.99%'
  },
  'malzahar-kayle': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%'
  },
  'malzahar-ksante': {
    reasonZh: '对线胜率 56.79%',
    reasonEn: 'Win rate 56.79%'
  },
  'malzahar-leblanc': {
    reasonZh: '对线胜率 57.21%',
    reasonEn: 'Win rate 57.21%'
  },
  'malzahar-mordekaiser': {
    reasonZh: '对线胜率 60.82%',
    reasonEn: 'Win rate 60.82%'
  },
  'malzahar-morgana': {
    reasonZh: '对线胜率 54.08%',
    reasonEn: 'Win rate 54.08%'
  },
  'malzahar-nasus': {
    reasonZh: '对线胜率 53.55%',
    reasonEn: 'Win rate 53.55%'
  },
  'malzahar-qiyana': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'malzahar-rumble': {
    reasonZh: '对线胜率 71.87%',
    reasonEn: 'Win rate 71.87%'
  },
  'malzahar-ryze': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'malzahar-tahmkench': {
    reasonZh: '对线胜率 60.94%',
    reasonEn: 'Win rate 60.94%'
  },
  'malzahar-teemo': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'malzahar-vladimir': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%'
  },
  'malzahar-yasuo': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'malzahar-yorick': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'malzahar-zoe': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'maokai-anivia': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%'
  },
  'maokai-ashe': {
    reasonZh: '对线胜率 59.32%',
    reasonEn: 'Win rate 59.32%'
  },
  'maokai-bard': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'maokai-blitzcrank': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'maokai-camille': {
    reasonZh: '对线胜率 65.67%',
    reasonEn: 'Win rate 65.67%'
  },
  'maokai-fiddlesticks': {
    reasonZh: '对线胜率 52.58%',
    reasonEn: 'Win rate 52.58%'
  },
  'maokai-jarvaniv': {
    reasonZh: '对线胜率 59.21%',
    reasonEn: 'Win rate 59.21%'
  },
  'maokai-karma': {
    reasonZh: '对线胜率 53.56%',
    reasonEn: 'Win rate 53.56%'
  },
  'maokai-leblanc': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'maokai-leesin': {
    reasonZh: '对线胜率 59.70%',
    reasonEn: 'Win rate 59.70%'
  },
  'maokai-lulu': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'maokai-malphite': {
    reasonZh: '对线胜率 62.62%',
    reasonEn: 'Win rate 62.62%'
  },
  'maokai-mel': {
    reasonZh: '对线胜率 55.73%',
    reasonEn: 'Win rate 55.73%'
  },
  'maokai-pyke': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'maokai-sett': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%'
  },
  'maokai-shaco': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'maokai-sona': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'maokai-xerath': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'masteryi-diana': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'masteryi-gragas': {
    reasonZh: '对线胜率 52.68%',
    reasonEn: 'Win rate 52.68%'
  },
  'masteryi-jarvaniv': {
    reasonZh: '对线胜率 52.18%',
    reasonEn: 'Win rate 52.18%'
  },
  'masteryi-jhin': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%'
  },
  'masteryi-malphite': {
    reasonZh: '对线胜率 52.31%',
    reasonEn: 'Win rate 52.31%'
  },
  'masteryi-rengar': {
    reasonZh: '对线胜率 53.63%',
    reasonEn: 'Win rate 53.63%'
  },
  'masteryi-shyvana': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'masteryi-smolder': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'masteryi-yasuo': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'masteryi-zed': {
    reasonZh: '对线胜率 58.63%',
    reasonEn: 'Win rate 58.63%'
  },
  'mel-aatrox': {
    reasonZh: '对线胜率 55.09%',
    reasonEn: 'Win rate 55.09%'
  },
  'mel-darius': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'mel-drmundo': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'mel-fiora': {
    reasonZh: '对线胜率 64.71%',
    reasonEn: 'Win rate 64.71%'
  },
  'mel-gangplank': {
    reasonZh: '对线胜率 61.67%',
    reasonEn: 'Win rate 61.67%'
  },
  'mel-jayce': {
    reasonZh: '对线胜率 54.10%',
    reasonEn: 'Win rate 54.10%'
  },
  'mel-leesin': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'mel-malphite': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'mel-smolder': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%'
  },
  'mel-tryndamere': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%'
  },
  'milio-anivia': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%'
  },
  'milio-ashe': {
    reasonZh: '对线胜率 56.63%',
    reasonEn: 'Win rate 56.63%'
  },
  'milio-fiddlesticks': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'milio-karma': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'milio-leblanc': {
    reasonZh: '对线胜率 58.40%',
    reasonEn: 'Win rate 58.40%'
  },
  'milio-lux': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'milio-malphite': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'milio-mel': {
    reasonZh: '对线胜率 57.94%',
    reasonEn: 'Win rate 57.94%'
  },
  'milio-missfortune': {
    reasonZh: '对线胜率 65.52%',
    reasonEn: 'Win rate 65.52%'
  },
  'milio-morgana': {
    reasonZh: '对线胜率 54.32%',
    reasonEn: 'Win rate 54.32%'
  },
  'milio-poppy': {
    reasonZh: '对线胜率 57.08%',
    reasonEn: 'Win rate 57.08%'
  },
  'milio-seraphine': {
    reasonZh: '对线胜率 52.59%',
    reasonEn: 'Win rate 52.59%'
  },
  'milio-sett': {
    reasonZh: '对线胜率 60.24%',
    reasonEn: 'Win rate 60.24%'
  },
  'milio-shen': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'milio-sona': {
    reasonZh: '对线胜率 51.12%',
    reasonEn: 'Win rate 51.12%'
  },
  'milio-soraka': {
    reasonZh: '对线胜率 51.10%',
    reasonEn: 'Win rate 51.10%'
  },
  'milio-taric': {
    reasonZh: '对线胜率 54.75%',
    reasonEn: 'Win rate 54.75%'
  },
  'milio-teemo': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'milio-veigar': {
    reasonZh: '对线胜率 61.51%',
    reasonEn: 'Win rate 61.51%'
  },
  'milio-xerath': {
    reasonZh: '对线胜率 53.97%',
    reasonEn: 'Win rate 53.97%'
  },
  'milio-zilean': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'missfortune-anivia': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'missfortune-aphelios': {
    reasonZh: '对线胜率 52.48%',
    reasonEn: 'Win rate 52.48%'
  },
  'missfortune-corki': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'missfortune-draven': {
    reasonZh: '对线胜率 52.50%',
    reasonEn: 'Win rate 52.50%'
  },
  'missfortune-kaisa': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'missfortune-kalista': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%'
  },
  'missfortune-kogmaw': {
    reasonZh: '对线胜率 51.91%',
    reasonEn: 'Win rate 51.91%'
  },
  'missfortune-malphite': {
    reasonZh: '对线胜率 65.57%',
    reasonEn: 'Win rate 65.57%'
  },
  'missfortune-samira': {
    reasonZh: '对线胜率 51.64%',
    reasonEn: 'Win rate 51.64%'
  },
  'missfortune-tristana': {
    reasonZh: '对线胜率 53.32%',
    reasonEn: 'Win rate 53.32%'
  },
  'missfortune-twitch': {
    reasonZh: '对线胜率 50.19%',
    reasonEn: 'Win rate 50.19%'
  },
  'missfortune-varus': {
    reasonZh: '对线胜率 54.52%',
    reasonEn: 'Win rate 54.52%'
  },
  'missfortune-yunara': {
    reasonZh: '对线胜率 52.82%',
    reasonEn: 'Win rate 52.82%'
  },
  'monkeyking-darius': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'monkeyking-fiora': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'monkeyking-jayce': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'monkeyking-kennen': {
    reasonZh: '对线胜率 53.38%',
    reasonEn: 'Win rate 53.38%'
  },
  'monkeyking-pantheon': {
    reasonZh: '对线胜率 54.71%',
    reasonEn: 'Win rate 54.71%'
  },
  'monkeyking-qiyana': {
    reasonZh: '对线胜率 54.08%',
    reasonEn: 'Win rate 54.08%'
  },
  'monkeyking-renekton': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'monkeyking-sylas': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%'
  },
  'monkeyking-tryndamere': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'monkeyking-yasuo': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%'
  },
  'monkeyking-zed': {
    reasonZh: '对线胜率 57.47%',
    reasonEn: 'Win rate 57.47%'
  },
  'mordekaiser-chogath': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'mordekaiser-ekko': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%'
  },
  'mordekaiser-ezreal': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'mordekaiser-hecarim': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'mordekaiser-jhin': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'mordekaiser-kled': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'mordekaiser-ksante': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'mordekaiser-poppy': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'mordekaiser-smolder': {
    reasonZh: '对线胜率 54.80%',
    reasonEn: 'Win rate 54.80%'
  },
  'mordekaiser-varus': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%'
  },
  'mordekaiser-zed': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'morgana-camille': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%'
  },
  'morgana-cassiopeia': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'morgana-graves': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'morgana-irelia': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'morgana-leesin': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'morgana-leona': {
    reasonZh: '对线胜率 52.12%',
    reasonEn: 'Win rate 52.12%'
  },
  'morgana-malphite': {
    reasonZh: '对线胜率 57.18%',
    reasonEn: 'Win rate 57.18%'
  },
  'morgana-missfortune': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'morgana-nasus': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%'
  },
  'morgana-taliyah': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'morgana-taric': {
    reasonZh: '对线胜率 51.17%',
    reasonEn: 'Win rate 51.17%'
  },
  'morgana-veigar': {
    reasonZh: '对线胜率 56.07%',
    reasonEn: 'Win rate 56.07%'
  },
  'morgana-velkoz': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'naafiri-aatrox': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%'
  },
  'naafiri-ahri': {
    reasonZh: '对线胜率 50.41%',
    reasonEn: 'Win rate 50.41%'
  },
  'naafiri-amumu': {
    reasonZh: '对线胜率 55.54%',
    reasonEn: 'Win rate 55.54%'
  },
  'naafiri-aurelionsol': {
    reasonZh: '对线胜率 52.40%',
    reasonEn: 'Win rate 52.40%'
  },
  'naafiri-darius': {
    reasonZh: '对线胜率 62.34%',
    reasonEn: 'Win rate 62.34%'
  },
  'naafiri-gragas': {
    reasonZh: '对线胜率 57.03%',
    reasonEn: 'Win rate 57.03%'
  },
  'naafiri-hwei': {
    reasonZh: '对线胜率 50.85%',
    reasonEn: 'Win rate 50.85%'
  },
  'naafiri-jhin': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'naafiri-khazix': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'naafiri-leblanc': {
    reasonZh: '对线胜率 57.21%',
    reasonEn: 'Win rate 57.21%'
  },
  'naafiri-leesin': {
    reasonZh: '对线胜率 56.13%',
    reasonEn: 'Win rate 56.13%'
  },
  'naafiri-lux': {
    reasonZh: '对线胜率 55.03%',
    reasonEn: 'Win rate 55.03%'
  },
  'naafiri-morgana': {
    reasonZh: '对线胜率 58.09%',
    reasonEn: 'Win rate 58.09%'
  },
  'naafiri-nasus': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'naafiri-nidalee': {
    reasonZh: '对线胜率 52.24%',
    reasonEn: 'Win rate 52.24%'
  },
  'naafiri-rengar': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'naafiri-smolder': {
    reasonZh: '对线胜率 57.27%',
    reasonEn: 'Win rate 57.27%'
  },
  'naafiri-sylas': {
    reasonZh: '对线胜率 70.18%',
    reasonEn: 'Win rate 70.18%'
  },
  'naafiri-tahmkench': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%'
  },
  'naafiri-velkoz': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'naafiri-yasuo': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'naafiri-yone': {
    reasonZh: '对线胜率 62.34%',
    reasonEn: 'Win rate 62.34%'
  },
  'naafiri-yorick': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'naafiri-zoe': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'nami-anivia': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'nami-ashe': {
    reasonZh: '对线胜率 59.14%',
    reasonEn: 'Win rate 59.14%'
  },
  'nami-camille': {
    reasonZh: '对线胜率 58.69%',
    reasonEn: 'Win rate 58.69%'
  },
  'nami-jarvaniv': {
    reasonZh: '对线胜率 54.73%',
    reasonEn: 'Win rate 54.73%'
  },
  'nami-leesin': {
    reasonZh: '对线胜率 55.76%',
    reasonEn: 'Win rate 55.76%'
  },
  'nami-malphite': {
    reasonZh: '对线胜率 56.48%',
    reasonEn: 'Win rate 56.48%'
  },
  'nami-mel': {
    reasonZh: '对线胜率 56.23%',
    reasonEn: 'Win rate 56.23%'
  },
  'nami-missfortune': {
    reasonZh: '对线胜率 61.02%',
    reasonEn: 'Win rate 61.02%'
  },
  'nami-morgana': {
    reasonZh: '对线胜率 53.69%',
    reasonEn: 'Win rate 53.69%'
  },
  'nami-poppy': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'nami-senna': {
    reasonZh: '对线胜率 53.54%',
    reasonEn: 'Win rate 53.54%'
  },
  'nami-seraphine': {
    reasonZh: '对线胜率 51.69%',
    reasonEn: 'Win rate 51.69%'
  },
  'nami-sett': {
    reasonZh: '对线胜率 65.24%',
    reasonEn: 'Win rate 65.24%'
  },
  'nami-soraka': {
    reasonZh: '对线胜率 52.36%',
    reasonEn: 'Win rate 52.36%'
  },
  'nami-xerath': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'nasus-akshan': {
    reasonZh: '对线胜率 61.67%',
    reasonEn: 'Win rate 61.67%'
  },
  'nasus-briar': {
    reasonZh: '对线胜率 50.90%',
    reasonEn: 'Win rate 50.90%'
  },
  'nasus-gnar': {
    reasonZh: '对线胜率 54.43%',
    reasonEn: 'Win rate 54.43%'
  },
  'nasus-gragas': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'nasus-irelia': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'nasus-kassadin': {
    reasonZh: '对线胜率 54.10%',
    reasonEn: 'Win rate 54.10%'
  },
  'nasus-monkeyking': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'nasus-orianna': {
    reasonZh: '对线胜率 55.71%',
    reasonEn: 'Win rate 55.71%'
  },
  'nasus-poppy': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'nasus-qiyana': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'nasus-smolder': {
    reasonZh: '对线胜率 57.23%',
    reasonEn: 'Win rate 57.23%'
  },
  'nasus-swain': {
    reasonZh: '对线胜率 60.38%',
    reasonEn: 'Win rate 60.38%'
  },
  'nasus-trundle': {
    reasonZh: '对线胜率 54.10%',
    reasonEn: 'Win rate 54.10%'
  },
  'nasus-varus': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%'
  },
  'nasus-xinzhao': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'nasus-zed': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'nasus-zoe': {
    reasonZh: '对线胜率 53.37%',
    reasonEn: 'Win rate 53.37%'
  },
  'nautilus-ashe': {
    reasonZh: '对线胜率 55.11%',
    reasonEn: 'Win rate 55.11%'
  },
  'nautilus-camille': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'nautilus-leblanc': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'nautilus-leesin': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'nautilus-malphite': {
    reasonZh: '对线胜率 54.79%',
    reasonEn: 'Win rate 54.79%'
  },
  'nautilus-mel': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%'
  },
  'nautilus-missfortune': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'nautilus-nami': {
    reasonZh: '对线胜率 50.73%',
    reasonEn: 'Win rate 50.73%'
  },
  'nautilus-pyke': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'nautilus-sylas': {
    reasonZh: '对线胜率 52.88%',
    reasonEn: 'Win rate 52.88%'
  },
  'nautilus-yuumi': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'neeko-alistar': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'neeko-anivia': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'neeko-ashe': {
    reasonZh: '对线胜率 57.24%',
    reasonEn: 'Win rate 57.24%'
  },
  'neeko-blitzcrank': {
    reasonZh: '对线胜率 53.32%',
    reasonEn: 'Win rate 53.32%'
  },
  'neeko-braum': {
    reasonZh: '对线胜率 51.29%',
    reasonEn: 'Win rate 51.29%'
  },
  'neeko-camille': {
    reasonZh: '对线胜率 54.37%',
    reasonEn: 'Win rate 54.37%'
  },
  'neeko-mel': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'neeko-missfortune': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%'
  },
  'neeko-poppy': {
    reasonZh: '对线胜率 55.65%',
    reasonEn: 'Win rate 55.65%'
  },
  'neeko-sett': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'neeko-shaco': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'neeko-teemo': {
    reasonZh: '对线胜率 53.42%',
    reasonEn: 'Win rate 53.42%'
  },
  'nidalee-darius': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%'
  },
  'nidalee-graves': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'nidalee-irelia': {
    reasonZh: '对线胜率 53.88%',
    reasonEn: 'Win rate 53.88%'
  },
  'nidalee-karthus': {
    reasonZh: '对线胜率 53.54%',
    reasonEn: 'Win rate 53.54%'
  },
  'nidalee-khazix': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'nidalee-ksante': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'nidalee-olaf': {
    reasonZh: '对线胜率 51.87%',
    reasonEn: 'Win rate 51.87%'
  },
  'nidalee-qiyana': {
    reasonZh: '对线胜率 54.97%',
    reasonEn: 'Win rate 54.97%'
  },
  'nidalee-rumble': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'nidalee-sejuani': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'nidalee-tryndamere': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'nidalee-vi': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'nidalee-viego': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'nilah-aphelios': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'nilah-aurelionsol': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'nilah-caitlyn': {
    reasonZh: '对线胜率 54.10%',
    reasonEn: 'Win rate 54.10%'
  },
  'nilah-draven': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'nilah-ezreal': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'nilah-kaisa': {
    reasonZh: '对线胜率 58.35%',
    reasonEn: 'Win rate 58.35%'
  },
  'nilah-missfortune': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'nilah-samira': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'nilah-sivir': {
    reasonZh: '对线胜率 51.69%',
    reasonEn: 'Win rate 51.69%'
  },
  'nilah-twitch': {
    reasonZh: '对线胜率 56.26%',
    reasonEn: 'Win rate 56.26%'
  },
  'nilah-varus': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%'
  },
  'nilah-vayne': {
    reasonZh: '对线胜率 52.91%',
    reasonEn: 'Win rate 52.91%'
  },
  'nilah-yunara': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'nilah-zeri': {
    reasonZh: '对线胜率 54.34%',
    reasonEn: 'Win rate 54.34%'
  },
  'nocturne-hecarim': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'nocturne-heimerdinger': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'nocturne-khazix': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'nocturne-leesin': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'nocturne-malphite': {
    reasonZh: '对线胜率 53.69%',
    reasonEn: 'Win rate 53.69%'
  },
  'nocturne-naafiri': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'nocturne-rengar': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'nocturne-shaco': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'nocturne-yasuo': {
    reasonZh: '对线胜率 53.90%',
    reasonEn: 'Win rate 53.90%'
  },
  'nocturne-zed': {
    reasonZh: '对线胜率 55.97%',
    reasonEn: 'Win rate 55.97%'
  },
  'nunu-hecarim': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%'
  },
  'nunu-heimerdinger': {
    reasonZh: '对线胜率 56.43%',
    reasonEn: 'Win rate 56.43%'
  },
  'nunu-jayce': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'nunu-karthus': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'nunu-nidalee': {
    reasonZh: '对线胜率 51.96%',
    reasonEn: 'Win rate 51.96%'
  },
  'nunu-nocturne': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'nunu-qiyana': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'nunu-rammus': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'nunu-shen': {
    reasonZh: '对线胜率 62.09%',
    reasonEn: 'Win rate 62.09%'
  },
  'nunu-singed': {
    reasonZh: '对线胜率 52.67%',
    reasonEn: 'Win rate 52.67%'
  },
  'nunu-urgot': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'nunu-viego': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%'
  },
  'nunu-zed': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'olaf-ambessa': {
    reasonZh: '对线胜率 74.58%',
    reasonEn: 'Win rate 74.58%'
  },
  'olaf-drmundo': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'olaf-fiddlesticks': {
    reasonZh: '对线胜率 58.22%',
    reasonEn: 'Win rate 58.22%'
  },
  'olaf-gnar': {
    reasonZh: '对线胜率 56.33%',
    reasonEn: 'Win rate 56.33%'
  },
  'olaf-heimerdinger': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'olaf-jayce': {
    reasonZh: '对线胜率 61.00%',
    reasonEn: 'Win rate 61.00%'
  },
  'olaf-kaisa': {
    reasonZh: '对线胜率 60.12%',
    reasonEn: 'Win rate 60.12%'
  },
  'olaf-mordekaiser': {
    reasonZh: '对线胜率 61.78%',
    reasonEn: 'Win rate 61.78%'
  },
  'olaf-nocturne': {
    reasonZh: '对线胜率 53.76%',
    reasonEn: 'Win rate 53.76%'
  },
  'olaf-ornn': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'olaf-rammus': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'olaf-rumble': {
    reasonZh: '对线胜率 59.68%',
    reasonEn: 'Win rate 59.68%'
  },
  'olaf-sejuani': {
    reasonZh: '对线胜率 57.46%',
    reasonEn: 'Win rate 57.46%'
  },
  'olaf-shyvana': {
    reasonZh: '对线胜率 55.82%',
    reasonEn: 'Win rate 55.82%'
  },
  'olaf-urgot': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%'
  },
  'olaf-xinzhao': {
    reasonZh: '对线胜率 56.65%',
    reasonEn: 'Win rate 56.65%'
  },
  'olaf-zed': {
    reasonZh: '对线胜率 59.43%',
    reasonEn: 'Win rate 59.43%'
  },
  'orianna-darius': {
    reasonZh: '对线胜率 62.75%',
    reasonEn: 'Win rate 62.75%'
  },
  'orianna-garen': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'orianna-graves': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'orianna-jax': {
    reasonZh: '对线胜率 61.67%',
    reasonEn: 'Win rate 61.67%'
  },
  'orianna-mel': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%'
  },
  'orianna-ryze': {
    reasonZh: '对线胜率 52.25%',
    reasonEn: 'Win rate 52.25%'
  },
  'orianna-smolder': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'orianna-swain': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'orianna-tryndamere': {
    reasonZh: '对线胜率 52.00%',
    reasonEn: 'Win rate 52.00%'
  },
  'orianna-zed': {
    reasonZh: '对线胜率 52.79%',
    reasonEn: 'Win rate 52.79%'
  },
  'ornn-amumu': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'ornn-brand': {
    reasonZh: '对线胜率 53.87%',
    reasonEn: 'Win rate 53.87%'
  },
  'ornn-briar': {
    reasonZh: '对线胜率 50.85%',
    reasonEn: 'Win rate 50.85%'
  },
  'ornn-elise': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%'
  },
  'ornn-fizz': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'ornn-gragas': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'ornn-gwen': {
    reasonZh: '对线胜率 53.18%',
    reasonEn: 'Win rate 53.18%'
  },
  'ornn-illaoi': {
    reasonZh: '对线胜率 54.80%',
    reasonEn: 'Win rate 54.80%'
  },
  'ornn-jarvaniv': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'ornn-jayce': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'ornn-khazix': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'ornn-leesin': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'ornn-malphite': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%'
  },
  'ornn-malzahar': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%'
  },
  'ornn-masteryi': {
    reasonZh: '对线胜率 53.20%',
    reasonEn: 'Win rate 53.20%'
  },
  'ornn-monkeyking': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'ornn-naafiri': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'ornn-nasus': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%'
  },
  'ornn-nidalee': {
    reasonZh: '对线胜率 52.10%',
    reasonEn: 'Win rate 52.10%'
  },
  'ornn-pantheon': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'ornn-shyvana': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'ornn-sion': {
    reasonZh: '对线胜率 54.36%',
    reasonEn: 'Win rate 54.36%'
  },
  'ornn-tahmkench': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'ornn-talon': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%'
  },
  'ornn-teemo': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'ornn-tryndamere': {
    reasonZh: '对线胜率 57.75%',
    reasonEn: 'Win rate 57.75%'
  },
  'ornn-xinzhao': {
    reasonZh: '对线胜率 52.98%',
    reasonEn: 'Win rate 52.98%'
  },
  'ornn-yasuo': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%'
  },
  'ornn-zac': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'ornn-zed': {
    reasonZh: '对线胜率 58.28%',
    reasonEn: 'Win rate 58.28%'
  },
  'ornn-zyra': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'pantheon-annie': {
    reasonZh: '对线胜率 58.04%',
    reasonEn: 'Win rate 58.04%'
  },
  'pantheon-aurelionsol': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'pantheon-azir': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%'
  },
  'pantheon-belveth': {
    reasonZh: '对线胜率 51.79%',
    reasonEn: 'Win rate 51.79%'
  },
  'pantheon-brand': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%'
  },
  'pantheon-gwen': {
    reasonZh: '对线胜率 52.99%',
    reasonEn: 'Win rate 52.99%'
  },
  'pantheon-jayce': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%'
  },
  'pantheon-kassadin': {
    reasonZh: '对线胜率 54.50%',
    reasonEn: 'Win rate 54.50%'
  },
  'pantheon-katarina': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'pantheon-lillia': {
    reasonZh: '对线胜率 52.07%',
    reasonEn: 'Win rate 52.07%'
  },
  'pantheon-malphite': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%'
  },
  'pantheon-morgana': {
    reasonZh: '对线胜率 60.98%',
    reasonEn: 'Win rate 60.98%'
  },
  'pantheon-nasus': {
    reasonZh: '对线胜率 60.76%',
    reasonEn: 'Win rate 60.76%'
  },
  'pantheon-ryze': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%'
  },
  'pantheon-tristana': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%'
  },
  'pantheon-tryndamere': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'pantheon-twistedfate': {
    reasonZh: '对线胜率 51.61%',
    reasonEn: 'Win rate 51.61%'
  },
  'pantheon-vex': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'pantheon-viktor': {
    reasonZh: '对线胜率 51.33%',
    reasonEn: 'Win rate 51.33%'
  },
  'pantheon-yone': {
    reasonZh: '对线胜率 59.74%',
    reasonEn: 'Win rate 59.74%'
  },
  'pantheon-ziggs': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'pantheon-zoe': {
    reasonZh: '对线胜率 53.16%',
    reasonEn: 'Win rate 53.16%'
  },
  'poppy-ashe': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'poppy-bard': {
    reasonZh: '对线胜率 53.68%',
    reasonEn: 'Win rate 53.68%'
  },
  'poppy-camille': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%'
  },
  'poppy-darius': {
    reasonZh: '对线胜率 59.42%',
    reasonEn: 'Win rate 59.42%'
  },
  'poppy-fizz': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'poppy-gragas': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'poppy-janna': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'poppy-jarvaniv': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%'
  },
  'poppy-kayn': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'poppy-ksante': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'poppy-leblanc': {
    reasonZh: '对线胜率 58.27%',
    reasonEn: 'Win rate 58.27%'
  },
  'poppy-leesin': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'poppy-lux': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'poppy-olaf': {
    reasonZh: '对线胜率 55.80%',
    reasonEn: 'Win rate 55.80%'
  },
  'poppy-pyke': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'poppy-renata': {
    reasonZh: '对线胜率 50.88%',
    reasonEn: 'Win rate 50.88%'
  },
  'poppy-singed': {
    reasonZh: '对线胜率 58.76%',
    reasonEn: 'Win rate 58.76%'
  },
  'poppy-talon': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'poppy-urgot': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'poppy-vayne': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'poppy-xerath': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'pyke-ashe': {
    reasonZh: '对线胜率 51.05%',
    reasonEn: 'Win rate 51.05%'
  },
  'pyke-camille': {
    reasonZh: '对线胜率 50.26%',
    reasonEn: 'Win rate 50.26%'
  },
  'pyke-leesin': {
    reasonZh: '对线胜率 50.28%',
    reasonEn: 'Win rate 50.28%'
  },
  'pyke-mel': {
    reasonZh: '对线胜率 50.04%',
    reasonEn: 'Win rate 50.04%'
  },
  'pyke-missfortune': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%'
  },
  'pyke-pantheon': {
    reasonZh: '对线胜率 50.20%',
    reasonEn: 'Win rate 50.20%'
  },
  'pyke-senna': {
    reasonZh: '对线胜率 51.61%',
    reasonEn: 'Win rate 51.61%'
  },
  'pyke-seraphine': {
    reasonZh: '对线胜率 51.19%',
    reasonEn: 'Win rate 51.19%'
  },
  'pyke-veigar': {
    reasonZh: '对线胜率 51.12%',
    reasonEn: 'Win rate 51.12%'
  },
  'pyke-velkoz': {
    reasonZh: '对线胜率 52.60%',
    reasonEn: 'Win rate 52.60%'
  },
  'qiyana-akali': {
    reasonZh: '对线胜率 60.83%',
    reasonEn: 'Win rate 60.83%'
  },
  'qiyana-amumu': {
    reasonZh: '对线胜率 60.26%',
    reasonEn: 'Win rate 60.26%'
  },
  'qiyana-elise': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%'
  },
  'qiyana-gnar': {
    reasonZh: '对线胜率 58.50%',
    reasonEn: 'Win rate 58.50%'
  },
  'qiyana-hwei': {
    reasonZh: '对线胜率 50.92%',
    reasonEn: 'Win rate 50.92%'
  },
  'qiyana-illaoi': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'qiyana-jhin': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'qiyana-kaisa': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'qiyana-kindred': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'qiyana-poppy': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'qiyana-reksai': {
    reasonZh: '对线胜率 51.21%',
    reasonEn: 'Win rate 51.21%'
  },
  'qiyana-smolder': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'qiyana-tristana': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'qiyana-viego': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'rakan-ashe': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'rakan-blitzcrank': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'rakan-braum': {
    reasonZh: '对线胜率 51.77%',
    reasonEn: 'Win rate 51.77%'
  },
  'rakan-jarvaniv': {
    reasonZh: '对线胜率 59.07%',
    reasonEn: 'Win rate 59.07%'
  },
  'rakan-karma': {
    reasonZh: '对线胜率 54.88%',
    reasonEn: 'Win rate 54.88%'
  },
  'rakan-leblanc': {
    reasonZh: '对线胜率 57.29%',
    reasonEn: 'Win rate 57.29%'
  },
  'rakan-leesin': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'rakan-leona': {
    reasonZh: '对线胜率 51.91%',
    reasonEn: 'Win rate 51.91%'
  },
  'rakan-malphite': {
    reasonZh: '对线胜率 58.65%',
    reasonEn: 'Win rate 58.65%'
  },
  'rakan-mel': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'rakan-milio': {
    reasonZh: '对线胜率 51.17%',
    reasonEn: 'Win rate 51.17%'
  },
  'rakan-missfortune': {
    reasonZh: '对线胜率 59.50%',
    reasonEn: 'Win rate 59.50%'
  },
  'rakan-nami': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'rakan-nautilus': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'rakan-neeko': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'rakan-pantheon': {
    reasonZh: '对线胜率 55.95%',
    reasonEn: 'Win rate 55.95%'
  },
  'rakan-pyke': {
    reasonZh: '对线胜率 55.71%',
    reasonEn: 'Win rate 55.71%'
  },
  'rakan-soraka': {
    reasonZh: '对线胜率 51.15%',
    reasonEn: 'Win rate 51.15%'
  },
  'rakan-sylas': {
    reasonZh: '对线胜率 61.44%',
    reasonEn: 'Win rate 61.44%'
  },
  'rakan-taric': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'rakan-thresh': {
    reasonZh: '对线胜率 52.27%',
    reasonEn: 'Win rate 52.27%'
  },
  'rakan-yuumi': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'rammus-belveth': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'rammus-evelynn': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'rammus-heimerdinger': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'rammus-karthus': {
    reasonZh: '对线胜率 54.32%',
    reasonEn: 'Win rate 54.32%'
  },
  'rammus-kennen': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%'
  },
  'rammus-nidalee': {
    reasonZh: '对线胜率 53.42%',
    reasonEn: 'Win rate 53.42%'
  },
  'rammus-pantheon': {
    reasonZh: '对线胜率 55.14%',
    reasonEn: 'Win rate 55.14%'
  },
  'rammus-qiyana': {
    reasonZh: '对线胜率 54.79%',
    reasonEn: 'Win rate 54.79%'
  },
  'rammus-rengar': {
    reasonZh: '对线胜率 57.54%',
    reasonEn: 'Win rate 57.54%'
  },
  'rammus-sion': {
    reasonZh: '对线胜率 53.63%',
    reasonEn: 'Win rate 53.63%'
  },
  'rammus-talon': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'rammus-varus': {
    reasonZh: '对线胜率 54.97%',
    reasonEn: 'Win rate 54.97%'
  },
  'rammus-yasuo': {
    reasonZh: '对线胜率 58.13%',
    reasonEn: 'Win rate 58.13%'
  },
  'rammus-yone': {
    reasonZh: '对线胜率 54.88%',
    reasonEn: 'Win rate 54.88%'
  },
  'rammus-zed': {
    reasonZh: '对线胜率 58.43%',
    reasonEn: 'Win rate 58.43%'
  },
  'reksai-ambessa': {
    reasonZh: '对线胜率 53.84%',
    reasonEn: 'Win rate 53.84%'
  },
  'reksai-briar': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'reksai-chogath': {
    reasonZh: '对线胜率 54.97%',
    reasonEn: 'Win rate 54.97%'
  },
  'reksai-evelynn': {
    reasonZh: '对线胜率 52.36%',
    reasonEn: 'Win rate 52.36%'
  },
  'reksai-fizz': {
    reasonZh: '对线胜率 57.12%',
    reasonEn: 'Win rate 57.12%'
  },
  'reksai-garen': {
    reasonZh: '对线胜率 55.64%',
    reasonEn: 'Win rate 55.64%'
  },
  'reksai-gnar': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'reksai-gwen': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%'
  },
  'reksai-jayce': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'reksai-kaisa': {
    reasonZh: '对线胜率 59.24%',
    reasonEn: 'Win rate 59.24%'
  },
  'reksai-kayn': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'reksai-kennen': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'reksai-lillia': {
    reasonZh: '对线胜率 55.58%',
    reasonEn: 'Win rate 55.58%'
  },
  'reksai-masteryi': {
    reasonZh: '对线胜率 59.90%',
    reasonEn: 'Win rate 59.90%'
  },
  'reksai-naafiri': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'reksai-nasus': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'reksai-nidalee': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'reksai-nunu': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'reksai-ornn': {
    reasonZh: '对线胜率 51.75%',
    reasonEn: 'Win rate 51.75%'
  },
  'reksai-poppy': {
    reasonZh: '对线胜率 57.93%',
    reasonEn: 'Win rate 57.93%'
  },
  'reksai-riven': {
    reasonZh: '对线胜率 56.47%',
    reasonEn: 'Win rate 56.47%'
  },
  'reksai-sejuani': {
    reasonZh: '对线胜率 64.33%',
    reasonEn: 'Win rate 64.33%'
  },
  'reksai-shen': {
    reasonZh: '对线胜率 55.04%',
    reasonEn: 'Win rate 55.04%'
  },
  'reksai-singed': {
    reasonZh: '对线胜率 52.56%',
    reasonEn: 'Win rate 52.56%'
  },
  'reksai-smolder': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%'
  },
  'reksai-sylas': {
    reasonZh: '对线胜率 56.62%',
    reasonEn: 'Win rate 56.62%'
  },
  'reksai-taliyah': {
    reasonZh: '对线胜率 53.73%',
    reasonEn: 'Win rate 53.73%'
  },
  'reksai-talon': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'reksai-tryndamere': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'reksai-viego': {
    reasonZh: '对线胜率 55.20%',
    reasonEn: 'Win rate 55.20%'
  },
  'reksai-warwick': {
    reasonZh: '对线胜率 54.03%',
    reasonEn: 'Win rate 54.03%'
  },
  'reksai-xinzhao': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'reksai-yasuo': {
    reasonZh: '对线胜率 59.79%',
    reasonEn: 'Win rate 59.79%'
  },
  'reksai-zaahen': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'reksai-zed': {
    reasonZh: '对线胜率 56.73%',
    reasonEn: 'Win rate 56.73%'
  },
  'rell-ashe': {
    reasonZh: '对线胜率 57.85%',
    reasonEn: 'Win rate 57.85%'
  },
  'rell-bard': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'rell-blitzcrank': {
    reasonZh: '对线胜率 52.40%',
    reasonEn: 'Win rate 52.40%'
  },
  'rell-elise': {
    reasonZh: '对线胜率 57.66%',
    reasonEn: 'Win rate 57.66%'
  },
  'rell-fiddlesticks': {
    reasonZh: '对线胜率 56.83%',
    reasonEn: 'Win rate 56.83%'
  },
  'rell-leesin': {
    reasonZh: '对线胜率 59.50%',
    reasonEn: 'Win rate 59.50%'
  },
  'rell-lulu': {
    reasonZh: '对线胜率 52.21%',
    reasonEn: 'Win rate 52.21%'
  },
  'rell-malphite': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'rell-maokai': {
    reasonZh: '对线胜率 53.73%',
    reasonEn: 'Win rate 53.73%'
  },
  'rell-mel': {
    reasonZh: '对线胜率 57.18%',
    reasonEn: 'Win rate 57.18%'
  },
  'rell-milio': {
    reasonZh: '对线胜率 51.78%',
    reasonEn: 'Win rate 51.78%'
  },
  'rell-missfortune': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'rell-nami': {
    reasonZh: '对线胜率 51.69%',
    reasonEn: 'Win rate 51.69%'
  },
  'rell-nautilus': {
    reasonZh: '对线胜率 55.34%',
    reasonEn: 'Win rate 55.34%'
  },
  'rell-pyke': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'rell-rakan': {
    reasonZh: '对线胜率 51.44%',
    reasonEn: 'Win rate 51.44%'
  },
  'rell-renata': {
    reasonZh: '对线胜率 56.08%',
    reasonEn: 'Win rate 56.08%'
  },
  'rell-seraphine': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'rell-sona': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%'
  },
  'rell-soraka': {
    reasonZh: '对线胜率 52.45%',
    reasonEn: 'Win rate 52.45%'
  },
  'rell-sylas': {
    reasonZh: '对线胜率 54.51%',
    reasonEn: 'Win rate 54.51%'
  },
  'rell-thresh': {
    reasonZh: '对线胜率 51.51%',
    reasonEn: 'Win rate 51.51%'
  },
  'rell-yuumi': {
    reasonZh: '对线胜率 54.70%',
    reasonEn: 'Win rate 54.70%'
  },
  'rell-zyra': {
    reasonZh: '对线胜率 53.86%',
    reasonEn: 'Win rate 53.86%'
  },
  'renata-alistar': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'renata-braum': {
    reasonZh: '对线胜率 52.43%',
    reasonEn: 'Win rate 52.43%'
  },
  'renata-jarvaniv': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'renata-karma': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%'
  },
  'renata-leona': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'renata-malphite': {
    reasonZh: '对线胜率 63.49%',
    reasonEn: 'Win rate 63.49%'
  },
  'renata-maokai': {
    reasonZh: '对线胜率 51.11%',
    reasonEn: 'Win rate 51.11%'
  },
  'renata-milio': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'renata-nami': {
    reasonZh: '对线胜率 52.09%',
    reasonEn: 'Win rate 52.09%'
  },
  'renata-nautilus': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%'
  },
  'renata-neeko': {
    reasonZh: '对线胜率 52.10%',
    reasonEn: 'Win rate 52.10%'
  },
  'renata-seraphine': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'renata-sona': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'renata-swain': {
    reasonZh: '对线胜率 54.60%',
    reasonEn: 'Win rate 54.60%'
  },
  'renata-tahmkench': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'renata-thresh': {
    reasonZh: '对线胜率 51.52%',
    reasonEn: 'Win rate 51.52%'
  },
  'renata-yuumi': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'renekton-drmundo': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'renekton-kaisa': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'renekton-kennen': {
    reasonZh: '对线胜率 67.80%',
    reasonEn: 'Win rate 67.80%'
  },
  'renekton-leblanc': {
    reasonZh: '对线胜率 57.33%',
    reasonEn: 'Win rate 57.33%'
  },
  'renekton-olaf': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'renekton-sejuani': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'renekton-singed': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'renekton-sion': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'renekton-twistedfate': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'renekton-volibear': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'renekton-zed': {
    reasonZh: '对线胜率 57.28%',
    reasonEn: 'Win rate 57.28%'
  },
  'rengar-hecarim': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'rengar-kaisa': {
    reasonZh: '对线胜率 53.18%',
    reasonEn: 'Win rate 53.18%'
  },
  'rengar-ksante': {
    reasonZh: '对线胜率 53.90%',
    reasonEn: 'Win rate 53.90%'
  },
  'rengar-lillia': {
    reasonZh: '对线胜率 52.16%',
    reasonEn: 'Win rate 52.16%'
  },
  'rengar-nunu': {
    reasonZh: '对线胜率 51.90%',
    reasonEn: 'Win rate 51.90%'
  },
  'rengar-smolder': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'rengar-sylas': {
    reasonZh: '对线胜率 52.12%',
    reasonEn: 'Win rate 52.12%'
  },
  'rengar-talon': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'rengar-zed': {
    reasonZh: '对线胜率 55.09%',
    reasonEn: 'Win rate 55.09%'
  },
  'rengar-zyra': {
    reasonZh: '对线胜率 51.28%',
    reasonEn: 'Win rate 51.28%'
  },
  'riven-akali': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%'
  },
  'riven-evelynn': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'riven-heimerdinger': {
    reasonZh: '对线胜率 56.07%',
    reasonEn: 'Win rate 56.07%'
  },
  'riven-illaoi': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%'
  },
  'riven-ksante': {
    reasonZh: '对线胜率 56.40%',
    reasonEn: 'Win rate 56.40%'
  },
  'riven-sion': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'riven-smolder': {
    reasonZh: '对线胜率 58.95%',
    reasonEn: 'Win rate 58.95%'
  },
  'riven-teemo': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%'
  },
  'riven-varus': {
    reasonZh: '对线胜率 57.49%',
    reasonEn: 'Win rate 57.49%'
  },
  'riven-yasuo': {
    reasonZh: '对线胜率 56.46%',
    reasonEn: 'Win rate 56.46%'
  },
  'rumble-akali': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'rumble-fiora': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'rumble-hecarim': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'rumble-malphite': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'rumble-talon': {
    reasonZh: '对线胜率 53.94%',
    reasonEn: 'Win rate 53.94%'
  },
  'rumble-twistedfate': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'rumble-vayne': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'rumble-yasuo': {
    reasonZh: '对线胜率 56.56%',
    reasonEn: 'Win rate 56.56%'
  },
  'rumble-yorick': {
    reasonZh: '对线胜率 54.43%',
    reasonEn: 'Win rate 54.43%'
  },
  'rumble-zed': {
    reasonZh: '对线胜率 57.01%',
    reasonEn: 'Win rate 57.01%'
  },
  'ryze-ambessa': {
    reasonZh: '对线胜率 52.63%',
    reasonEn: 'Win rate 52.63%'
  },
  'ryze-darius': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%'
  },
  'ryze-fiora': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'ryze-ksante': {
    reasonZh: '对线胜率 64.71%',
    reasonEn: 'Win rate 64.71%'
  },
  'ryze-malphite': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%'
  },
  'ryze-nasus': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'ryze-riven': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'ryze-sett': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'ryze-smolder': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'ryze-tryndamere': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'ryze-vayne': {
    reasonZh: '对线胜率 57.97%',
    reasonEn: 'Win rate 57.97%'
  },
  'samira-aurelionsol': {
    reasonZh: '对线胜率 52.26%',
    reasonEn: 'Win rate 52.26%'
  },
  'samira-caitlyn': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'samira-ezreal': {
    reasonZh: '对线胜率 52.40%',
    reasonEn: 'Win rate 52.40%'
  },
  'samira-kaisa': {
    reasonZh: '对线胜率 54.16%',
    reasonEn: 'Win rate 54.16%'
  },
  'samira-kalista': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'samira-kogmaw': {
    reasonZh: '对线胜率 50.97%',
    reasonEn: 'Win rate 50.97%'
  },
  'samira-lucian': {
    reasonZh: '对线胜率 51.68%',
    reasonEn: 'Win rate 51.68%'
  },
  'samira-tristana': {
    reasonZh: '对线胜率 51.64%',
    reasonEn: 'Win rate 51.64%'
  },
  'samira-twitch': {
    reasonZh: '对线胜率 51.62%',
    reasonEn: 'Win rate 51.62%'
  },
  'samira-varus': {
    reasonZh: '对线胜率 51.25%',
    reasonEn: 'Win rate 51.25%'
  },
  'samira-yunara': {
    reasonZh: '对线胜率 51.54%',
    reasonEn: 'Win rate 51.54%'
  },
  'sejuani-hecarim': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'sejuani-irelia': {
    reasonZh: '对线胜率 51.93%',
    reasonEn: 'Win rate 51.93%'
  },
  'sejuani-jayce': {
    reasonZh: '对线胜率 54.63%',
    reasonEn: 'Win rate 54.63%'
  },
  'sejuani-khazix': {
    reasonZh: '对线胜率 53.15%',
    reasonEn: 'Win rate 53.15%'
  },
  'sejuani-qiyana': {
    reasonZh: '对线胜率 57.95%',
    reasonEn: 'Win rate 57.95%'
  },
  'sejuani-rengar': {
    reasonZh: '对线胜率 52.63%',
    reasonEn: 'Win rate 52.63%'
  },
  'sejuani-tryndamere': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'sejuani-yasuo': {
    reasonZh: '对线胜率 53.37%',
    reasonEn: 'Win rate 53.37%'
  },
  'sejuani-zac': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'sejuani-zed': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'senna-alistar': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'senna-aphelios': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'senna-draven': {
    reasonZh: '对线胜率 51.67%',
    reasonEn: 'Win rate 51.67%'
  },
  'senna-ezreal': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'senna-jhin': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%'
  },
  'senna-jinx': {
    reasonZh: '对线胜率 51.04%',
    reasonEn: 'Win rate 51.04%'
  },
  'senna-lucian': {
    reasonZh: '对线胜率 53.21%',
    reasonEn: 'Win rate 53.21%'
  },
  'senna-malphite': {
    reasonZh: '对线胜率 62.19%',
    reasonEn: 'Win rate 62.19%'
  },
  'senna-maokai': {
    reasonZh: '对线胜率 51.69%',
    reasonEn: 'Win rate 51.69%'
  },
  'senna-mel': {
    reasonZh: '对线胜率 55.80%',
    reasonEn: 'Win rate 55.80%'
  },
  'senna-milio': {
    reasonZh: '对线胜率 52.74%',
    reasonEn: 'Win rate 52.74%'
  },
  'senna-missfortune': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'senna-samira': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'senna-sett': {
    reasonZh: '对线胜率 56.73%',
    reasonEn: 'Win rate 56.73%'
  },
  'senna-shen': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'senna-sivir': {
    reasonZh: '对线胜率 57.47%',
    reasonEn: 'Win rate 57.47%'
  },
  'senna-xayah': {
    reasonZh: '对线胜率 57.20%',
    reasonEn: 'Win rate 57.20%'
  },
  'senna-yunara': {
    reasonZh: '对线胜率 52.59%',
    reasonEn: 'Win rate 52.59%'
  },
  'seraphine-alistar': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%'
  },
  'seraphine-amumu': {
    reasonZh: '对线胜率 54.33%',
    reasonEn: 'Win rate 54.33%'
  },
  'seraphine-anivia': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'seraphine-fiddlesticks': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'seraphine-leblanc': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'seraphine-malphite': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%'
  },
  'seraphine-mel': {
    reasonZh: '对线胜率 54.77%',
    reasonEn: 'Win rate 54.77%'
  },
  'seraphine-missfortune': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'seraphine-nautilus': {
    reasonZh: '对线胜率 53.21%',
    reasonEn: 'Win rate 53.21%'
  },
  'seraphine-poppy': {
    reasonZh: '对线胜率 54.23%',
    reasonEn: 'Win rate 54.23%'
  },
  'seraphine-rakan': {
    reasonZh: '对线胜率 51.86%',
    reasonEn: 'Win rate 51.86%'
  },
  'seraphine-sett': {
    reasonZh: '对线胜率 58.29%',
    reasonEn: 'Win rate 58.29%'
  },
  'seraphine-veigar': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'sett-bard': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'sett-chogath': {
    reasonZh: '对线胜率 57.49%',
    reasonEn: 'Win rate 57.49%'
  },
  'sett-diana': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'sett-gragas': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'sett-hecarim': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'sett-karthus': {
    reasonZh: '对线胜率 53.97%',
    reasonEn: 'Win rate 53.97%'
  },
  'sett-ksante': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%'
  },
  'sett-mel': {
    reasonZh: '对线胜率 58.29%',
    reasonEn: 'Win rate 58.29%'
  },
  'sett-monkeyking': {
    reasonZh: '对线胜率 59.79%',
    reasonEn: 'Win rate 59.79%'
  },
  'sett-nocturne': {
    reasonZh: '对线胜率 52.07%',
    reasonEn: 'Win rate 52.07%'
  },
  'sett-pantheon': {
    reasonZh: '对线胜率 62.32%',
    reasonEn: 'Win rate 62.32%'
  },
  'sett-shen': {
    reasonZh: '对线胜率 60.26%',
    reasonEn: 'Win rate 60.26%'
  },
  'sett-velkoz': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'sett-yasuo': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%'
  },
  'sett-yorick': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'sett-zilean': {
    reasonZh: '对线胜率 50.91%',
    reasonEn: 'Win rate 50.91%'
  },
  'shaco-amumu': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'shaco-anivia': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%'
  },
  'shaco-janna': {
    reasonZh: '对线胜率 51.55%',
    reasonEn: 'Win rate 51.55%'
  },
  'shaco-leblanc': {
    reasonZh: '对线胜率 55.75%',
    reasonEn: 'Win rate 55.75%'
  },
  'shaco-mel': {
    reasonZh: '对线胜率 55.98%',
    reasonEn: 'Win rate 55.98%'
  },
  'shaco-missfortune': {
    reasonZh: '对线胜率 58.24%',
    reasonEn: 'Win rate 58.24%'
  },
  'shaco-pantheon': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'shaco-poppy': {
    reasonZh: '对线胜率 57.29%',
    reasonEn: 'Win rate 57.29%'
  },
  'shaco-rammus': {
    reasonZh: '对线胜率 55.99%',
    reasonEn: 'Win rate 55.99%'
  },
  'shaco-rell': {
    reasonZh: '对线胜率 51.79%',
    reasonEn: 'Win rate 51.79%'
  },
  'shaco-renata': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'shaco-taric': {
    reasonZh: '对线胜率 51.79%',
    reasonEn: 'Win rate 51.79%'
  },
  'shaco-teemo': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'shen-briar': {
    reasonZh: '对线胜率 51.57%',
    reasonEn: 'Win rate 51.57%'
  },
  'shen-fizz': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'shen-gangplank': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'shen-irelia': {
    reasonZh: '对线胜率 60.25%',
    reasonEn: 'Win rate 60.25%'
  },
  'shen-karma': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'shen-kayle': {
    reasonZh: '对线胜率 58.08%',
    reasonEn: 'Win rate 58.08%'
  },
  'shen-kennen': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%'
  },
  'shen-leona': {
    reasonZh: '对线胜率 52.41%',
    reasonEn: 'Win rate 52.41%'
  },
  'shen-malphite': {
    reasonZh: '对线胜率 62.35%',
    reasonEn: 'Win rate 62.35%'
  },
  'shen-monkeyking': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'shen-mordekaiser': {
    reasonZh: '对线胜率 60.29%',
    reasonEn: 'Win rate 60.29%'
  },
  'shen-neeko': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'shen-nidalee': {
    reasonZh: '对线胜率 53.35%',
    reasonEn: 'Win rate 53.35%'
  },
  'shen-rammus': {
    reasonZh: '对线胜率 58.28%',
    reasonEn: 'Win rate 58.28%'
  },
  'shen-renekton': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'shen-soraka': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%'
  },
  'shen-vi': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'shen-zac': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%'
  },
  'shen-zilean': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'shyvana-amumu': {
    reasonZh: '对线胜率 50.90%',
    reasonEn: 'Win rate 50.90%'
  },
  'shyvana-hecarim': {
    reasonZh: '对线胜率 51.34%',
    reasonEn: 'Win rate 51.34%'
  },
  'shyvana-kindred': {
    reasonZh: '对线胜率 50.65%',
    reasonEn: 'Win rate 50.65%'
  },
  'shyvana-ksante': {
    reasonZh: '对线胜率 50.45%',
    reasonEn: 'Win rate 50.45%'
  },
  'shyvana-malphite': {
    reasonZh: '对线胜率 51.47%',
    reasonEn: 'Win rate 51.47%'
  },
  'shyvana-monkeyking': {
    reasonZh: '对线胜率 50.47%',
    reasonEn: 'Win rate 50.47%'
  },
  'shyvana-poppy': {
    reasonZh: '对线胜率 50.48%',
    reasonEn: 'Win rate 50.48%'
  },
  'shyvana-rengar': {
    reasonZh: '对线胜率 51.39%',
    reasonEn: 'Win rate 51.39%'
  },
  'shyvana-yasuo': {
    reasonZh: '对线胜率 51.35%',
    reasonEn: 'Win rate 51.35%'
  },
  'shyvana-zed': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'singed-aatrox': {
    reasonZh: '对线胜率 57.85%',
    reasonEn: 'Win rate 57.85%'
  },
  'singed-ambessa': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'singed-amumu': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'singed-brand': {
    reasonZh: '对线胜率 52.31%',
    reasonEn: 'Win rate 52.31%'
  },
  'singed-diana': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'singed-ekko': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'singed-evelynn': {
    reasonZh: '对线胜率 55.37%',
    reasonEn: 'Win rate 55.37%'
  },
  'singed-fiddlesticks': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'singed-fizz': {
    reasonZh: '对线胜率 54.50%',
    reasonEn: 'Win rate 54.50%'
  },
  'singed-heimerdinger': {
    reasonZh: '对线胜率 55.14%',
    reasonEn: 'Win rate 55.14%'
  },
  'singed-jax': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'singed-jhin': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'singed-kaisa': {
    reasonZh: '对线胜率 57.76%',
    reasonEn: 'Win rate 57.76%'
  },
  'singed-kayn': {
    reasonZh: '对线胜率 53.56%',
    reasonEn: 'Win rate 53.56%'
  },
  'singed-kennen': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'singed-khazix': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'singed-kindred': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'singed-ksante': {
    reasonZh: '对线胜率 56.09%',
    reasonEn: 'Win rate 56.09%'
  },
  'singed-masteryi': {
    reasonZh: '对线胜率 57.44%',
    reasonEn: 'Win rate 57.44%'
  },
  'singed-monkeyking': {
    reasonZh: '对线胜率 58.37%',
    reasonEn: 'Win rate 58.37%'
  },
  'singed-naafiri': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%'
  },
  'singed-nocturne': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'singed-olaf': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'singed-sejuani': {
    reasonZh: '对线胜率 58.40%',
    reasonEn: 'Win rate 58.40%'
  },
  'singed-shaco': {
    reasonZh: '对线胜率 60.07%',
    reasonEn: 'Win rate 60.07%'
  },
  'singed-shyvana': {
    reasonZh: '对线胜率 57.85%',
    reasonEn: 'Win rate 57.85%'
  },
  'singed-viego': {
    reasonZh: '对线胜率 57.77%',
    reasonEn: 'Win rate 57.77%'
  },
  'singed-warwick': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'singed-yone': {
    reasonZh: '对线胜率 62.28%',
    reasonEn: 'Win rate 62.28%'
  },
  'singed-zac': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%'
  },
  'singed-zed': {
    reasonZh: '对线胜率 57.99%',
    reasonEn: 'Win rate 57.99%'
  },
  'sion-aurora': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'sion-briar': {
    reasonZh: '对线胜率 52.52%',
    reasonEn: 'Win rate 52.52%'
  },
  'sion-chogath': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'sion-gnar': {
    reasonZh: '对线胜率 54.88%',
    reasonEn: 'Win rate 54.88%'
  },
  'sion-graves': {
    reasonZh: '对线胜率 62.12%',
    reasonEn: 'Win rate 62.12%'
  },
  'sion-heimerdinger': {
    reasonZh: '对线胜率 57.62%',
    reasonEn: 'Win rate 57.62%'
  },
  'sion-illaoi': {
    reasonZh: '对线胜率 54.53%',
    reasonEn: 'Win rate 54.53%'
  },
  'sion-irelia': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%'
  },
  'sion-karthus': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'sion-kassadin': {
    reasonZh: '对线胜率 62.24%',
    reasonEn: 'Win rate 62.24%'
  },
  'sion-katarina': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%'
  },
  'sion-ksante': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'sion-malphite': {
    reasonZh: '对线胜率 62.89%',
    reasonEn: 'Win rate 62.89%'
  },
  'sion-mel': {
    reasonZh: '对线胜率 58.12%',
    reasonEn: 'Win rate 58.12%'
  },
  'sion-naafiri': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'sion-orianna': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%'
  },
  'sion-shaco': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'sion-talon': {
    reasonZh: '对线胜率 60.63%',
    reasonEn: 'Win rate 60.63%'
  },
  'sion-teemo': {
    reasonZh: '对线胜率 64.41%',
    reasonEn: 'Win rate 64.41%'
  },
  'sion-urgot': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'sion-vex': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'sion-vladimir': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'sion-zoe': {
    reasonZh: '对线胜率 55.98%',
    reasonEn: 'Win rate 55.98%'
  },
  'sivir-caitlyn': {
    reasonZh: '对线胜率 53.77%',
    reasonEn: 'Win rate 53.77%'
  },
  'sivir-corki': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'sivir-draven': {
    reasonZh: '对线胜率 52.40%',
    reasonEn: 'Win rate 52.40%'
  },
  'sivir-ezreal': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'sivir-jhin': {
    reasonZh: '对线胜率 52.67%',
    reasonEn: 'Win rate 52.67%'
  },
  'sivir-jinx': {
    reasonZh: '对线胜率 50.39%',
    reasonEn: 'Win rate 50.39%'
  },
  'sivir-kaisa': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'sivir-kalista': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'sivir-lucian': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'sivir-samira': {
    reasonZh: '对线胜率 51.27%',
    reasonEn: 'Win rate 51.27%'
  },
  'sivir-tristana': {
    reasonZh: '对线胜率 53.26%',
    reasonEn: 'Win rate 53.26%'
  },
  'sivir-varus': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'sivir-xayah': {
    reasonZh: '对线胜率 50.88%',
    reasonEn: 'Win rate 50.88%'
  },
  'smolder-caitlyn': {
    reasonZh: '对线胜率 52.28%',
    reasonEn: 'Win rate 52.28%'
  },
  'smolder-corki': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'smolder-darius': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'smolder-graves': {
    reasonZh: '对线胜率 55.20%',
    reasonEn: 'Win rate 55.20%'
  },
  'smolder-jayce': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'smolder-kalista': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'smolder-ksante': {
    reasonZh: '对线胜率 57.88%',
    reasonEn: 'Win rate 57.88%'
  },
  'smolder-rumble': {
    reasonZh: '对线胜率 53.69%',
    reasonEn: 'Win rate 53.69%'
  },
  'smolder-shaco': {
    reasonZh: '对线胜率 56.51%',
    reasonEn: 'Win rate 56.51%'
  },
  'smolder-singed': {
    reasonZh: '对线胜率 53.30%',
    reasonEn: 'Win rate 53.30%'
  },
  'smolder-sion': {
    reasonZh: '对线胜率 57.86%',
    reasonEn: 'Win rate 57.86%'
  },
  'smolder-varus': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'smolder-xayah': {
    reasonZh: '对线胜率 50.11%',
    reasonEn: 'Win rate 50.11%'
  },
  'smolder-yunara': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%'
  },
  'sona-alistar': {
    reasonZh: '对线胜率 52.92%',
    reasonEn: 'Win rate 52.92%'
  },
  'sona-bard': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'sona-elise': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'sona-fiddlesticks': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'sona-janna': {
    reasonZh: '对线胜率 51.97%',
    reasonEn: 'Win rate 51.97%'
  },
  'sona-jarvaniv': {
    reasonZh: '对线胜率 55.84%',
    reasonEn: 'Win rate 55.84%'
  },
  'sona-karma': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'sona-leblanc': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%'
  },
  'sona-leesin': {
    reasonZh: '对线胜率 60.23%',
    reasonEn: 'Win rate 60.23%'
  },
  'sona-lulu': {
    reasonZh: '对线胜率 52.47%',
    reasonEn: 'Win rate 52.47%'
  },
  'sona-malphite': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%'
  },
  'sona-mel': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'sona-missfortune': {
    reasonZh: '对线胜率 59.48%',
    reasonEn: 'Win rate 59.48%'
  },
  'sona-nami': {
    reasonZh: '对线胜率 51.53%',
    reasonEn: 'Win rate 51.53%'
  },
  'sona-poppy': {
    reasonZh: '对线胜率 58.78%',
    reasonEn: 'Win rate 58.78%'
  },
  'sona-pyke': {
    reasonZh: '对线胜率 54.56%',
    reasonEn: 'Win rate 54.56%'
  },
  'sona-rakan': {
    reasonZh: '对线胜率 53.88%',
    reasonEn: 'Win rate 53.88%'
  },
  'sona-senna': {
    reasonZh: '对线胜率 55.62%',
    reasonEn: 'Win rate 55.62%'
  },
  'sona-shen': {
    reasonZh: '对线胜率 58.89%',
    reasonEn: 'Win rate 58.89%'
  },
  'sona-soraka': {
    reasonZh: '对线胜率 52.20%',
    reasonEn: 'Win rate 52.20%'
  },
  'sona-taric': {
    reasonZh: '对线胜率 51.89%',
    reasonEn: 'Win rate 51.89%'
  },
  'sona-teemo': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'sona-xerath': {
    reasonZh: '对线胜率 57.30%',
    reasonEn: 'Win rate 57.30%'
  },
  'sona-zilean': {
    reasonZh: '对线胜率 51.21%',
    reasonEn: 'Win rate 51.21%'
  },
  'soraka-ashe': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'soraka-braum': {
    reasonZh: '对线胜率 51.47%',
    reasonEn: 'Win rate 51.47%'
  },
  'soraka-camille': {
    reasonZh: '对线胜率 59.64%',
    reasonEn: 'Win rate 59.64%'
  },
  'soraka-leblanc': {
    reasonZh: '对线胜率 55.71%',
    reasonEn: 'Win rate 55.71%'
  },
  'soraka-leesin': {
    reasonZh: '对线胜率 53.74%',
    reasonEn: 'Win rate 53.74%'
  },
  'soraka-malphite': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%'
  },
  'soraka-maokai': {
    reasonZh: '对线胜率 51.26%',
    reasonEn: 'Win rate 51.26%'
  },
  'soraka-mel': {
    reasonZh: '对线胜率 57.82%',
    reasonEn: 'Win rate 57.82%'
  },
  'soraka-missfortune': {
    reasonZh: '对线胜率 57.54%',
    reasonEn: 'Win rate 57.54%'
  },
  'soraka-pantheon': {
    reasonZh: '对线胜率 53.55%',
    reasonEn: 'Win rate 53.55%'
  },
  'soraka-poppy': {
    reasonZh: '对线胜率 54.45%',
    reasonEn: 'Win rate 54.45%'
  },
  'soraka-renata': {
    reasonZh: '对线胜率 52.54%',
    reasonEn: 'Win rate 52.54%'
  },
  'soraka-taric': {
    reasonZh: '对线胜率 51.06%',
    reasonEn: 'Win rate 51.06%'
  },
  'soraka-veigar': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%'
  },
  'swain-aatrox': {
    reasonZh: '对线胜率 57.35%',
    reasonEn: 'Win rate 57.35%'
  },
  'swain-alistar': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%'
  },
  'swain-braum': {
    reasonZh: '对线胜率 51.46%',
    reasonEn: 'Win rate 51.46%'
  },
  'swain-diana': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'swain-drmundo': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'swain-ekko': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'swain-galio': {
    reasonZh: '对线胜率 56.12%',
    reasonEn: 'Win rate 56.12%'
  },
  'swain-irelia': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'swain-leona': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'swain-malphite': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%'
  },
  'swain-naafiri': {
    reasonZh: '对线胜率 57.36%',
    reasonEn: 'Win rate 57.36%'
  },
  'swain-nasus': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%'
  },
  'swain-nautilus': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'swain-poppy': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'swain-qiyana': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%'
  },
  'swain-rell': {
    reasonZh: '对线胜率 50.72%',
    reasonEn: 'Win rate 50.72%'
  },
  'swain-ryze': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'swain-smolder': {
    reasonZh: '对线胜率 66.97%',
    reasonEn: 'Win rate 66.97%'
  },
  'swain-sylas': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%'
  },
  'swain-taric': {
    reasonZh: '对线胜率 51.94%',
    reasonEn: 'Win rate 51.94%'
  },
  'swain-thresh': {
    reasonZh: '对线胜率 51.06%',
    reasonEn: 'Win rate 51.06%'
  },
  'swain-tryndamere': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'swain-twistedfate': {
    reasonZh: '对线胜率 53.40%',
    reasonEn: 'Win rate 53.40%'
  },
  'swain-vex': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'swain-viktor': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'swain-yone': {
    reasonZh: '对线胜率 57.40%',
    reasonEn: 'Win rate 57.40%'
  },
  'sylas-ashe': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%'
  },
  'sylas-drmundo': {
    reasonZh: '对线胜率 60.36%',
    reasonEn: 'Win rate 60.36%'
  },
  'sylas-fiora': {
    reasonZh: '对线胜率 66.20%',
    reasonEn: 'Win rate 66.20%'
  },
  'sylas-galio': {
    reasonZh: '对线胜率 60.94%',
    reasonEn: 'Win rate 60.94%'
  },
  'sylas-gnar': {
    reasonZh: '对线胜率 58.43%',
    reasonEn: 'Win rate 58.43%'
  },
  'sylas-irelia': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'sylas-kayle': {
    reasonZh: '对线胜率 58.59%',
    reasonEn: 'Win rate 58.59%'
  },
  'sylas-malphite': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%'
  },
  'sylas-maokai': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%'
  },
  'sylas-renata': {
    reasonZh: '对线胜率 50.67%',
    reasonEn: 'Win rate 50.67%'
  },
  'sylas-shyvana': {
    reasonZh: '对线胜率 57.05%',
    reasonEn: 'Win rate 57.05%'
  },
  'sylas-smolder': {
    reasonZh: '对线胜率 56.99%',
    reasonEn: 'Win rate 56.99%'
  },
  'sylas-zilean': {
    reasonZh: '对线胜率 51.55%',
    reasonEn: 'Win rate 51.55%'
  },
  'syndra-cassiopeia': {
    reasonZh: '对线胜率 54.30%',
    reasonEn: 'Win rate 54.30%'
  },
  'syndra-darius': {
    reasonZh: '对线胜率 64.15%',
    reasonEn: 'Win rate 64.15%'
  },
  'syndra-graves': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'syndra-mordekaiser': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'syndra-nasus': {
    reasonZh: '对线胜率 60.38%',
    reasonEn: 'Win rate 60.38%'
  },
  'syndra-orianna': {
    reasonZh: '对线胜率 54.16%',
    reasonEn: 'Win rate 54.16%'
  },
  'syndra-smolder': {
    reasonZh: '对线胜率 57.04%',
    reasonEn: 'Win rate 57.04%'
  },
  'syndra-swain': {
    reasonZh: '对线胜率 56.57%',
    reasonEn: 'Win rate 56.57%'
  },
  'syndra-taliyah': {
    reasonZh: '对线胜率 53.38%',
    reasonEn: 'Win rate 53.38%'
  },
  'syndra-tristana': {
    reasonZh: '对线胜率 54.38%',
    reasonEn: 'Win rate 54.38%'
  },
  'tahmkench-ashe': {
    reasonZh: '对线胜率 59.89%',
    reasonEn: 'Win rate 59.89%'
  },
  'tahmkench-jayce': {
    reasonZh: '对线胜率 58.72%',
    reasonEn: 'Win rate 58.72%'
  },
  'tahmkench-leesin': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'tahmkench-malphite': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'tahmkench-maokai': {
    reasonZh: '对线胜率 51.32%',
    reasonEn: 'Win rate 51.32%'
  },
  'tahmkench-missfortune': {
    reasonZh: '对线胜率 58.21%',
    reasonEn: 'Win rate 58.21%'
  },
  'tahmkench-poppy': {
    reasonZh: '对线胜率 57.34%',
    reasonEn: 'Win rate 57.34%'
  },
  'tahmkench-renekton': {
    reasonZh: '对线胜率 56.57%',
    reasonEn: 'Win rate 56.57%'
  },
  'tahmkench-sett': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'tahmkench-tryndamere': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'tahmkench-urgot': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'tahmkench-veigar': {
    reasonZh: '对线胜率 55.71%',
    reasonEn: 'Win rate 55.71%'
  },
  'taliyah-ahri': {
    reasonZh: '对线胜率 50.08%',
    reasonEn: 'Win rate 50.08%'
  },
  'taliyah-akshan': {
    reasonZh: '对线胜率 57.97%',
    reasonEn: 'Win rate 57.97%'
  },
  'taliyah-ambessa': {
    reasonZh: '对线胜率 53.36%',
    reasonEn: 'Win rate 53.36%'
  },
  'taliyah-amumu': {
    reasonZh: '对线胜率 62.63%',
    reasonEn: 'Win rate 62.63%'
  },
  'taliyah-annie': {
    reasonZh: '对线胜率 52.04%',
    reasonEn: 'Win rate 52.04%'
  },
  'taliyah-briar': {
    reasonZh: '对线胜率 56.26%',
    reasonEn: 'Win rate 56.26%'
  },
  'taliyah-elise': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'taliyah-evelynn': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%'
  },
  'taliyah-fiora': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'taliyah-fizz': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'taliyah-galio': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%'
  },
  'taliyah-gnar': {
    reasonZh: '对线胜率 55.69%',
    reasonEn: 'Win rate 55.69%'
  },
  'taliyah-illaoi': {
    reasonZh: '对线胜率 59.47%',
    reasonEn: 'Win rate 59.47%'
  },
  'taliyah-jarvaniv': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'taliyah-kaisa': {
    reasonZh: '对线胜率 59.86%',
    reasonEn: 'Win rate 59.86%'
  },
  'taliyah-kayle': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'taliyah-kindred': {
    reasonZh: '对线胜率 53.68%',
    reasonEn: 'Win rate 53.68%'
  },
  'taliyah-ksante': {
    reasonZh: '对线胜率 57.94%',
    reasonEn: 'Win rate 57.94%'
  },
  'taliyah-leesin': {
    reasonZh: '对线胜率 57.64%',
    reasonEn: 'Win rate 57.64%'
  },
  'taliyah-lillia': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%'
  },
  'taliyah-masteryi': {
    reasonZh: '对线胜率 56.77%',
    reasonEn: 'Win rate 56.77%'
  },
  'taliyah-monkeyking': {
    reasonZh: '对线胜率 60.16%',
    reasonEn: 'Win rate 60.16%'
  },
  'taliyah-mordekaiser': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'taliyah-naafiri': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'taliyah-nidalee': {
    reasonZh: '对线胜率 52.27%',
    reasonEn: 'Win rate 52.27%'
  },
  'taliyah-nocturne': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'taliyah-nunu': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'taliyah-ornn': {
    reasonZh: '对线胜率 51.29%',
    reasonEn: 'Win rate 51.29%'
  },
  'taliyah-poppy': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'taliyah-qiyana': {
    reasonZh: '对线胜率 60.73%',
    reasonEn: 'Win rate 60.73%'
  },
  'taliyah-renekton': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'taliyah-rengar': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'taliyah-riven': {
    reasonZh: '对线胜率 55.18%',
    reasonEn: 'Win rate 55.18%'
  },
  'taliyah-rumble': {
    reasonZh: '对线胜率 54.79%',
    reasonEn: 'Win rate 54.79%'
  },
  'taliyah-shaco': {
    reasonZh: '对线胜率 59.43%',
    reasonEn: 'Win rate 59.43%'
  },
  'taliyah-shen': {
    reasonZh: '对线胜率 56.15%',
    reasonEn: 'Win rate 56.15%'
  },
  'taliyah-singed': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'taliyah-tryndamere': {
    reasonZh: '对线胜率 57.08%',
    reasonEn: 'Win rate 57.08%'
  },
  'taliyah-urgot': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%'
  },
  'taliyah-vi': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'taliyah-viego': {
    reasonZh: '对线胜率 57.80%',
    reasonEn: 'Win rate 57.80%'
  },
  'taliyah-volibear': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%'
  },
  'taliyah-warwick': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'taliyah-xinzhao': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'taliyah-zac': {
    reasonZh: '对线胜率 57.67%',
    reasonEn: 'Win rate 57.67%'
  },
  'talon-akshan': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'talon-darius': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'talon-drmundo': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'talon-garen': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'talon-kassadin': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%'
  },
  'talon-malzahar': {
    reasonZh: '对线胜率 52.25%',
    reasonEn: 'Win rate 52.25%'
  },
  'talon-smolder': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'talon-sylas': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'talon-syndra': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'talon-tahmkench': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'talon-tristana': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%'
  },
  'talon-velkoz': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'talon-zed': {
    reasonZh: '对线胜率 53.88%',
    reasonEn: 'Win rate 53.88%'
  },
  'taric-alistar': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'taric-blitzcrank': {
    reasonZh: '对线胜率 58.63%',
    reasonEn: 'Win rate 58.63%'
  },
  'taric-braum': {
    reasonZh: '对线胜率 53.49%',
    reasonEn: 'Win rate 53.49%'
  },
  'taric-janna': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%'
  },
  'taric-karma': {
    reasonZh: '对线胜率 54.60%',
    reasonEn: 'Win rate 54.60%'
  },
  'taric-lulu': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'taric-lux': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'taric-mel': {
    reasonZh: '对线胜率 58.22%',
    reasonEn: 'Win rate 58.22%'
  },
  'taric-nami': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'taric-nautilus': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%'
  },
  'taric-neeko': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'taric-pantheon': {
    reasonZh: '对线胜率 60.17%',
    reasonEn: 'Win rate 60.17%'
  },
  'taric-pyke': {
    reasonZh: '对线胜率 59.33%',
    reasonEn: 'Win rate 59.33%'
  },
  'taric-rell': {
    reasonZh: '对线胜率 51.57%',
    reasonEn: 'Win rate 51.57%'
  },
  'taric-sylas': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'taric-tahmkench': {
    reasonZh: '对线胜率 55.95%',
    reasonEn: 'Win rate 55.95%'
  },
  'taric-thresh': {
    reasonZh: '对线胜率 53.47%',
    reasonEn: 'Win rate 53.47%'
  },
  'taric-velkoz': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%'
  },
  'taric-xerath': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'taric-yuumi': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'taric-zyra': {
    reasonZh: '对线胜率 56.49%',
    reasonEn: 'Win rate 56.49%'
  },
  'teemo-belveth': {
    reasonZh: '对线胜率 52.42%',
    reasonEn: 'Win rate 52.42%'
  },
  'teemo-briar': {
    reasonZh: '对线胜率 51.34%',
    reasonEn: 'Win rate 51.34%'
  },
  'teemo-fiora': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'teemo-gwen': {
    reasonZh: '对线胜率 53.24%',
    reasonEn: 'Win rate 53.24%'
  },
  'teemo-illaoi': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%'
  },
  'teemo-jax': {
    reasonZh: '对线胜率 57.95%',
    reasonEn: 'Win rate 57.95%'
  },
  'teemo-leblanc': {
    reasonZh: '对线胜率 59.72%',
    reasonEn: 'Win rate 59.72%'
  },
  'teemo-leona': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'teemo-lulu': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'teemo-maokai': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'teemo-masteryi': {
    reasonZh: '对线胜率 53.94%',
    reasonEn: 'Win rate 53.94%'
  },
  'teemo-missfortune': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%'
  },
  'teemo-pyke': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'teemo-rakan': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'teemo-rell': {
    reasonZh: '对线胜率 51.01%',
    reasonEn: 'Win rate 51.01%'
  },
  'teemo-shaco': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'teemo-soraka': {
    reasonZh: '对线胜率 53.21%',
    reasonEn: 'Win rate 53.21%'
  },
  'teemo-talon': {
    reasonZh: '对线胜率 56.01%',
    reasonEn: 'Win rate 56.01%'
  },
  'teemo-tryndamere': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'teemo-veigar': {
    reasonZh: '对线胜率 62.79%',
    reasonEn: 'Win rate 62.79%'
  },
  'teemo-vi': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%'
  },
  'teemo-volibear': {
    reasonZh: '对线胜率 62.26%',
    reasonEn: 'Win rate 62.26%'
  },
  'teemo-warwick': {
    reasonZh: '对线胜率 56.46%',
    reasonEn: 'Win rate 56.46%'
  },
  'teemo-xerath': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'teemo-xinzhao': {
    reasonZh: '对线胜率 52.39%',
    reasonEn: 'Win rate 52.39%'
  },
  'teemo-zaahen': {
    reasonZh: '对线胜率 72.41%',
    reasonEn: 'Win rate 72.41%'
  },
  'teemo-zilean': {
    reasonZh: '对线胜率 52.58%',
    reasonEn: 'Win rate 52.58%'
  },
  'thresh-anivia': {
    reasonZh: '对线胜率 55.09%',
    reasonEn: 'Win rate 55.09%'
  },
  'thresh-ashe': {
    reasonZh: '对线胜率 55.85%',
    reasonEn: 'Win rate 55.85%'
  },
  'thresh-camille': {
    reasonZh: '对线胜率 54.94%',
    reasonEn: 'Win rate 54.94%'
  },
  'thresh-fiddlesticks': {
    reasonZh: '对线胜率 53.13%',
    reasonEn: 'Win rate 53.13%'
  },
  'thresh-malphite': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'thresh-mel': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'thresh-milio': {
    reasonZh: '对线胜率 50.77%',
    reasonEn: 'Win rate 50.77%'
  },
  'thresh-missfortune': {
    reasonZh: '对线胜率 55.82%',
    reasonEn: 'Win rate 55.82%'
  },
  'thresh-pantheon': {
    reasonZh: '对线胜率 53.63%',
    reasonEn: 'Win rate 53.63%'
  },
  'thresh-pyke': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%'
  },
  'thresh-senna': {
    reasonZh: '对线胜率 53.63%',
    reasonEn: 'Win rate 53.63%'
  },
  'thresh-sona': {
    reasonZh: '对线胜率 50.22%',
    reasonEn: 'Win rate 50.22%'
  },
  'thresh-sylas': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'thresh-yuumi': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'tristana-ahri': {
    reasonZh: '对线胜率 51.18%',
    reasonEn: 'Win rate 51.18%'
  },
  'tristana-azir': {
    reasonZh: '对线胜率 53.49%',
    reasonEn: 'Win rate 53.49%'
  },
  'tristana-ezreal': {
    reasonZh: '对线胜率 52.25%',
    reasonEn: 'Win rate 52.25%'
  },
  'tristana-leblanc': {
    reasonZh: '对线胜率 53.51%',
    reasonEn: 'Win rate 53.51%'
  },
  'tristana-senna': {
    reasonZh: '对线胜率 51.23%',
    reasonEn: 'Win rate 51.23%'
  },
  'tristana-smolder': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'tristana-varus': {
    reasonZh: '对线胜率 53.11%',
    reasonEn: 'Win rate 53.11%'
  },
  'tristana-vladimir': {
    reasonZh: '对线胜率 51.52%',
    reasonEn: 'Win rate 51.52%'
  },
  'tristana-yasuo': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'tristana-yunara': {
    reasonZh: '对线胜率 51.05%',
    reasonEn: 'Win rate 51.05%'
  },
  'trundle-aatrox': {
    reasonZh: '对线胜率 53.68%',
    reasonEn: 'Win rate 53.68%'
  },
  'trundle-garen': {
    reasonZh: '对线胜率 50.36%',
    reasonEn: 'Win rate 50.36%'
  },
  'trundle-malphite': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'trundle-mordekaiser': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'trundle-sett': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%'
  },
  'tryndamere-brand': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'tryndamere-drmundo': {
    reasonZh: '对线胜率 57.74%',
    reasonEn: 'Win rate 57.74%'
  },
  'tryndamere-galio': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'tryndamere-jayce': {
    reasonZh: '对线胜率 59.62%',
    reasonEn: 'Win rate 59.62%'
  },
  'tryndamere-kaisa': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'tryndamere-kled': {
    reasonZh: '对线胜率 55.84%',
    reasonEn: 'Win rate 55.84%'
  },
  'tryndamere-lucian': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'tryndamere-malzahar': {
    reasonZh: '对线胜率 50.78%',
    reasonEn: 'Win rate 50.78%'
  },
  'tryndamere-mel': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'tryndamere-rumble': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'tryndamere-urgot': {
    reasonZh: '对线胜率 59.49%',
    reasonEn: 'Win rate 59.49%'
  },
  'twistedfate-akali': {
    reasonZh: '对线胜率 54.64%',
    reasonEn: 'Win rate 54.64%'
  },
  'twistedfate-annie': {
    reasonZh: '对线胜率 50.39%',
    reasonEn: 'Win rate 50.39%'
  },
  'twistedfate-camille': {
    reasonZh: '对线胜率 63.46%',
    reasonEn: 'Win rate 63.46%'
  },
  'twistedfate-gangplank': {
    reasonZh: '对线胜率 64.29%',
    reasonEn: 'Win rate 64.29%'
  },
  'twistedfate-jax': {
    reasonZh: '对线胜率 60.48%',
    reasonEn: 'Win rate 60.48%'
  },
  'twistedfate-malphite': {
    reasonZh: '对线胜率 58.28%',
    reasonEn: 'Win rate 58.28%'
  },
  'twistedfate-mordekaiser': {
    reasonZh: '对线胜率 60.44%',
    reasonEn: 'Win rate 60.44%'
  },
  'twistedfate-ornn': {
    reasonZh: '对线胜率 51.85%',
    reasonEn: 'Win rate 51.85%'
  },
  'twistedfate-smolder': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%'
  },
  'twistedfate-taliyah': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'twistedfate-tristana': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%'
  },
  'twistedfate-tryndamere': {
    reasonZh: '对线胜率 65.00%',
    reasonEn: 'Win rate 65.00%'
  },
  'twistedfate-vayne': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%'
  },
  'twistedfate-yone': {
    reasonZh: '对线胜率 59.30%',
    reasonEn: 'Win rate 59.30%'
  },
  'twistedfate-zoe': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'twitch-aphelios': {
    reasonZh: '对线胜率 52.19%',
    reasonEn: 'Win rate 52.19%'
  },
  'twitch-caitlyn': {
    reasonZh: '对线胜率 51.71%',
    reasonEn: 'Win rate 51.71%'
  },
  'twitch-corki': {
    reasonZh: '对线胜率 51.93%',
    reasonEn: 'Win rate 51.93%'
  },
  'twitch-ezreal': {
    reasonZh: '对线胜率 51.82%',
    reasonEn: 'Win rate 51.82%'
  },
  'twitch-jhin': {
    reasonZh: '对线胜率 52.52%',
    reasonEn: 'Win rate 52.52%'
  },
  'twitch-jinx': {
    reasonZh: '对线胜率 50.90%',
    reasonEn: 'Win rate 50.90%'
  },
  'twitch-sivir': {
    reasonZh: '对线胜率 52.67%',
    reasonEn: 'Win rate 52.67%'
  },
  'twitch-smolder': {
    reasonZh: '对线胜率 52.01%',
    reasonEn: 'Win rate 52.01%'
  },
  'twitch-varus': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'twitch-yunara': {
    reasonZh: '对线胜率 51.70%',
    reasonEn: 'Win rate 51.70%'
  },
  'twitch-ziggs': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'urgot-akali': {
    reasonZh: '对线胜率 64.13%',
    reasonEn: 'Win rate 64.13%'
  },
  'urgot-belveth': {
    reasonZh: '对线胜率 51.78%',
    reasonEn: 'Win rate 51.78%'
  },
  'urgot-darius': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'urgot-drmundo': {
    reasonZh: '对线胜率 64.41%',
    reasonEn: 'Win rate 64.41%'
  },
  'urgot-hecarim': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'urgot-jayce': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'urgot-kaisa': {
    reasonZh: '对线胜率 60.90%',
    reasonEn: 'Win rate 60.90%'
  },
  'urgot-kennen': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'urgot-khazix': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'urgot-ksante': {
    reasonZh: '对线胜率 58.23%',
    reasonEn: 'Win rate 58.23%'
  },
  'urgot-masteryi': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'urgot-nasus': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'urgot-reksai': {
    reasonZh: '对线胜率 52.24%',
    reasonEn: 'Win rate 52.24%'
  },
  'urgot-rengar': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%'
  },
  'urgot-rumble': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'urgot-singed': {
    reasonZh: '对线胜率 63.74%',
    reasonEn: 'Win rate 63.74%'
  },
  'urgot-teemo': {
    reasonZh: '对线胜率 58.00%',
    reasonEn: 'Win rate 58.00%'
  },
  'urgot-volibear': {
    reasonZh: '对线胜率 55.73%',
    reasonEn: 'Win rate 55.73%'
  },
  'urgot-xinzhao': {
    reasonZh: '对线胜率 52.58%',
    reasonEn: 'Win rate 52.58%'
  },
  'urgot-yasuo': {
    reasonZh: '对线胜率 58.94%',
    reasonEn: 'Win rate 58.94%'
  },
  'urgot-zaahen': {
    reasonZh: '对线胜率 54.77%',
    reasonEn: 'Win rate 54.77%'
  },
  'urgot-zed': {
    reasonZh: '对线胜率 63.25%',
    reasonEn: 'Win rate 63.25%'
  },
  'varus-aatrox': {
    reasonZh: '对线胜率 56.23%',
    reasonEn: 'Win rate 56.23%'
  },
  'varus-evelynn': {
    reasonZh: '对线胜率 52.67%',
    reasonEn: 'Win rate 52.67%'
  },
  'varus-fiora': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%'
  },
  'varus-gragas': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%'
  },
  'varus-hecarim': {
    reasonZh: '对线胜率 57.70%',
    reasonEn: 'Win rate 57.70%'
  },
  'varus-illaoi': {
    reasonZh: '对线胜率 56.22%',
    reasonEn: 'Win rate 56.22%'
  },
  'varus-jarvaniv': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'varus-jhin': {
    reasonZh: '对线胜率 59.87%',
    reasonEn: 'Win rate 59.87%'
  },
  'varus-kaisa': {
    reasonZh: '对线胜率 62.42%',
    reasonEn: 'Win rate 62.42%'
  },
  'varus-lillia': {
    reasonZh: '对线胜率 52.74%',
    reasonEn: 'Win rate 52.74%'
  },
  'varus-rengar': {
    reasonZh: '对线胜率 57.95%',
    reasonEn: 'Win rate 57.95%'
  },
  'varus-shen': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'varus-tahmkench': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'varus-urgot': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'varus-warwick': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'varus-zaahen': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'vayne-aatrox': {
    reasonZh: '对线胜率 59.70%',
    reasonEn: 'Win rate 59.70%'
  },
  'vayne-amumu': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'vayne-belveth': {
    reasonZh: '对线胜率 50.63%',
    reasonEn: 'Win rate 50.63%'
  },
  'vayne-camille': {
    reasonZh: '对线胜率 60.33%',
    reasonEn: 'Win rate 60.33%'
  },
  'vayne-chogath': {
    reasonZh: '对线胜率 58.65%',
    reasonEn: 'Win rate 58.65%'
  },
  'vayne-evelynn': {
    reasonZh: '对线胜率 54.23%',
    reasonEn: 'Win rate 54.23%'
  },
  'vayne-garen': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%'
  },
  'vayne-gwen': {
    reasonZh: '对线胜率 58.84%',
    reasonEn: 'Win rate 58.84%'
  },
  'vayne-khazix': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'vayne-malzahar': {
    reasonZh: '对线胜率 51.22%',
    reasonEn: 'Win rate 51.22%'
  },
  'vayne-masteryi': {
    reasonZh: '对线胜率 54.30%',
    reasonEn: 'Win rate 54.30%'
  },
  'vayne-mordekaiser': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'vayne-nocturne': {
    reasonZh: '对线胜率 52.08%',
    reasonEn: 'Win rate 52.08%'
  },
  'vayne-olaf': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%'
  },
  'vayne-shyvana': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'vayne-sivir': {
    reasonZh: '对线胜率 51.98%',
    reasonEn: 'Win rate 51.98%'
  },
  'vayne-smolder': {
    reasonZh: '对线胜率 58.59%',
    reasonEn: 'Win rate 58.59%'
  },
  'vayne-talon': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'vayne-tryndamere': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'vayne-twitch': {
    reasonZh: '对线胜率 51.19%',
    reasonEn: 'Win rate 51.19%'
  },
  'vayne-volibear': {
    reasonZh: '对线胜率 60.63%',
    reasonEn: 'Win rate 60.63%'
  },
  'vayne-zaahen': {
    reasonZh: '对线胜率 53.54%',
    reasonEn: 'Win rate 53.54%'
  },
  'veigar-jax': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%'
  },
  'veigar-jayce': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%'
  },
  'veigar-lissandra': {
    reasonZh: '对线胜率 50.61%',
    reasonEn: 'Win rate 50.61%'
  },
  'veigar-malphite': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%'
  },
  'veigar-nasus': {
    reasonZh: '对线胜率 56.69%',
    reasonEn: 'Win rate 56.69%'
  },
  'veigar-rakan': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%'
  },
  'veigar-rell': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'veigar-renekton': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'veigar-ryze': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'veigar-sett': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%'
  },
  'veigar-smolder': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'veigar-taliyah': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'veigar-tristana': {
    reasonZh: '对线胜率 55.71%',
    reasonEn: 'Win rate 55.71%'
  },
  'veigar-vex': {
    reasonZh: '对线胜率 51.61%',
    reasonEn: 'Win rate 51.61%'
  },
  'veigar-yasuo': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'veigar-yorick': {
    reasonZh: '对线胜率 61.84%',
    reasonEn: 'Win rate 61.84%'
  },
  'velkoz-aurora': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'velkoz-bard': {
    reasonZh: '对线胜率 54.33%',
    reasonEn: 'Win rate 54.33%'
  },
  'velkoz-braum': {
    reasonZh: '对线胜率 52.74%',
    reasonEn: 'Win rate 52.74%'
  },
  'velkoz-cassiopeia': {
    reasonZh: '对线胜率 60.94%',
    reasonEn: 'Win rate 60.94%'
  },
  'velkoz-fiddlesticks': {
    reasonZh: '对线胜率 55.83%',
    reasonEn: 'Win rate 55.83%'
  },
  'velkoz-hwei': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'velkoz-jayce': {
    reasonZh: '对线胜率 54.63%',
    reasonEn: 'Win rate 54.63%'
  },
  'velkoz-kassadin': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'velkoz-leesin': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%'
  },
  'velkoz-malphite': {
    reasonZh: '对线胜率 55.82%',
    reasonEn: 'Win rate 55.82%'
  },
  'velkoz-malzahar': {
    reasonZh: '对线胜率 51.05%',
    reasonEn: 'Win rate 51.05%'
  },
  'velkoz-maokai': {
    reasonZh: '对线胜率 51.24%',
    reasonEn: 'Win rate 51.24%'
  },
  'velkoz-milio': {
    reasonZh: '对线胜率 50.66%',
    reasonEn: 'Win rate 50.66%'
  },
  'velkoz-neeko': {
    reasonZh: '对线胜率 51.89%',
    reasonEn: 'Win rate 51.89%'
  },
  'velkoz-orianna': {
    reasonZh: '对线胜率 57.29%',
    reasonEn: 'Win rate 57.29%'
  },
  'velkoz-poppy': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'velkoz-qiyana': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'velkoz-rakan': {
    reasonZh: '对线胜率 51.08%',
    reasonEn: 'Win rate 51.08%'
  },
  'velkoz-rell': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'velkoz-renata': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'velkoz-senna': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'velkoz-seraphine': {
    reasonZh: '对线胜率 51.59%',
    reasonEn: 'Win rate 51.59%'
  },
  'velkoz-shen': {
    reasonZh: '对线胜率 57.25%',
    reasonEn: 'Win rate 57.25%'
  },
  'velkoz-taliyah': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'velkoz-thresh': {
    reasonZh: '对线胜率 52.17%',
    reasonEn: 'Win rate 52.17%'
  },
  'velkoz-twistedfate': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'velkoz-veigar': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%'
  },
  'velkoz-viktor': {
    reasonZh: '对线胜率 52.50%',
    reasonEn: 'Win rate 52.50%'
  },
  'velkoz-vladimir': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'vex-aatrox': {
    reasonZh: '对线胜率 58.51%',
    reasonEn: 'Win rate 58.51%'
  },
  'vex-ahri': {
    reasonZh: '对线胜率 50.38%',
    reasonEn: 'Win rate 50.38%'
  },
  'vex-akali': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'vex-aurelionsol': {
    reasonZh: '对线胜率 51.72%',
    reasonEn: 'Win rate 51.72%'
  },
  'vex-aurora': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'vex-azir': {
    reasonZh: '对线胜率 59.35%',
    reasonEn: 'Win rate 59.35%'
  },
  'vex-darius': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'vex-drmundo': {
    reasonZh: '对线胜率 56.58%',
    reasonEn: 'Win rate 56.58%'
  },
  'vex-garen': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%'
  },
  'vex-graves': {
    reasonZh: '对线胜率 62.32%',
    reasonEn: 'Win rate 62.32%'
  },
  'vex-irelia': {
    reasonZh: '对线胜率 55.75%',
    reasonEn: 'Win rate 55.75%'
  },
  'vex-jax': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'vex-jayce': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'vex-kassadin': {
    reasonZh: '对线胜率 54.52%',
    reasonEn: 'Win rate 54.52%'
  },
  'vex-katarina': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'vex-lissandra': {
    reasonZh: '对线胜率 50.87%',
    reasonEn: 'Win rate 50.87%'
  },
  'vex-malzahar': {
    reasonZh: '对线胜率 50.93%',
    reasonEn: 'Win rate 50.93%'
  },
  'vex-qiyana': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%'
  },
  'vex-smolder': {
    reasonZh: '对线胜率 60.10%',
    reasonEn: 'Win rate 60.10%'
  },
  'vex-sylas': {
    reasonZh: '对线胜率 59.88%',
    reasonEn: 'Win rate 59.88%'
  },
  'vex-tristana': {
    reasonZh: '对线胜率 59.13%',
    reasonEn: 'Win rate 59.13%'
  },
  'vex-yasuo': {
    reasonZh: '对线胜率 57.39%',
    reasonEn: 'Win rate 57.39%'
  },
  'vex-yone': {
    reasonZh: '对线胜率 58.77%',
    reasonEn: 'Win rate 58.77%'
  },
  'vi-amumu': {
    reasonZh: '对线胜率 57.01%',
    reasonEn: 'Win rate 57.01%'
  },
  'vi-chogath': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'vi-diana': {
    reasonZh: '对线胜率 52.40%',
    reasonEn: 'Win rate 52.40%'
  },
  'vi-evelynn': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'vi-karthus': {
    reasonZh: '对线胜率 52.62%',
    reasonEn: 'Win rate 52.62%'
  },
  'vi-rengar': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%'
  },
  'vi-sejuani': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'vi-singed': {
    reasonZh: '对线胜率 51.92%',
    reasonEn: 'Win rate 51.92%'
  },
  'vi-varus': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'vi-zac': {
    reasonZh: '对线胜率 54.70%',
    reasonEn: 'Win rate 54.70%'
  },
  'vi-zed': {
    reasonZh: '对线胜率 55.25%',
    reasonEn: 'Win rate 55.25%'
  },
  'viego-diana': {
    reasonZh: '对线胜率 52.24%',
    reasonEn: 'Win rate 52.24%'
  },
  'viego-hecarim': {
    reasonZh: '对线胜率 52.29%',
    reasonEn: 'Win rate 52.29%'
  },
  'viego-jarvaniv': {
    reasonZh: '对线胜率 51.38%',
    reasonEn: 'Win rate 51.38%'
  },
  'viego-monkeyking': {
    reasonZh: '对线胜率 51.43%',
    reasonEn: 'Win rate 51.43%'
  },
  'viego-shyvana': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'viego-smolder': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'viego-sylas': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'viego-vi': {
    reasonZh: '对线胜率 51.44%',
    reasonEn: 'Win rate 51.44%'
  },
  'viego-yasuo': {
    reasonZh: '对线胜率 52.45%',
    reasonEn: 'Win rate 52.45%'
  },
  'viego-zed': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'viktor-aatrox': {
    reasonZh: '对线胜率 59.11%',
    reasonEn: 'Win rate 59.11%'
  },
  'viktor-ambessa': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'viktor-camille': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%'
  },
  'viktor-drmundo': {
    reasonZh: '对线胜率 57.80%',
    reasonEn: 'Win rate 57.80%'
  },
  'viktor-fiora': {
    reasonZh: '对线胜率 62.69%',
    reasonEn: 'Win rate 62.69%'
  },
  'viktor-garen': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%'
  },
  'viktor-graves': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'viktor-malphite': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%'
  },
  'viktor-malzahar': {
    reasonZh: '对线胜率 51.80%',
    reasonEn: 'Win rate 51.80%'
  },
  'viktor-nasus': {
    reasonZh: '对线胜率 53.30%',
    reasonEn: 'Win rate 53.30%'
  },
  'viktor-sion': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'viktor-smolder': {
    reasonZh: '对线胜率 59.28%',
    reasonEn: 'Win rate 59.28%'
  },
  'viktor-vayne': {
    reasonZh: '对线胜率 62.07%',
    reasonEn: 'Win rate 62.07%'
  },
  'viktor-vex': {
    reasonZh: '对线胜率 50.16%',
    reasonEn: 'Win rate 50.16%'
  },
  'viktor-yasuo': {
    reasonZh: '对线胜率 61.82%',
    reasonEn: 'Win rate 61.82%'
  },
  'viktor-yorick': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'vladimir-annie': {
    reasonZh: '对线胜率 50.87%',
    reasonEn: 'Win rate 50.87%'
  },
  'vladimir-camille': {
    reasonZh: '对线胜率 56.84%',
    reasonEn: 'Win rate 56.84%'
  },
  'vladimir-darius': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'vladimir-drmundo': {
    reasonZh: '对线胜率 58.89%',
    reasonEn: 'Win rate 58.89%'
  },
  'vladimir-gangplank': {
    reasonZh: '对线胜率 60.71%',
    reasonEn: 'Win rate 60.71%'
  },
  'vladimir-irelia': {
    reasonZh: '对线胜率 57.26%',
    reasonEn: 'Win rate 57.26%'
  },
  'vladimir-jax': {
    reasonZh: '对线胜率 60.07%',
    reasonEn: 'Win rate 60.07%'
  },
  'vladimir-katarina': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'vladimir-kayle': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'vladimir-renekton': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'vladimir-smolder': {
    reasonZh: '对线胜率 61.61%',
    reasonEn: 'Win rate 61.61%'
  },
  'vladimir-teemo': {
    reasonZh: '对线胜率 60.29%',
    reasonEn: 'Win rate 60.29%'
  },
  'vladimir-tryndamere': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'volibear-ambessa': {
    reasonZh: '对线胜率 63.08%',
    reasonEn: 'Win rate 63.08%'
  },
  'volibear-irelia': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'volibear-nunu': {
    reasonZh: '对线胜率 56.22%',
    reasonEn: 'Win rate 56.22%'
  },
  'volibear-rammus': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%'
  },
  'volibear-riven': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'volibear-shaco': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'volibear-tryndamere': {
    reasonZh: '对线胜率 55.11%',
    reasonEn: 'Win rate 55.11%'
  },
  'volibear-vi': {
    reasonZh: '对线胜率 54.77%',
    reasonEn: 'Win rate 54.77%'
  },
  'volibear-yasuo': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'volibear-yorick': {
    reasonZh: '对线胜率 58.42%',
    reasonEn: 'Win rate 58.42%'
  },
  'warwick-akali': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'warwick-gnar': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%'
  },
  'warwick-gragas': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%'
  },
  'warwick-mordekaiser': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'warwick-ornn': {
    reasonZh: '对线胜率 51.72%',
    reasonEn: 'Win rate 51.72%'
  },
  'warwick-pantheon': {
    reasonZh: '对线胜率 57.04%',
    reasonEn: 'Win rate 57.04%'
  },
  'warwick-poppy': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'warwick-rammus': {
    reasonZh: '对线胜率 58.74%',
    reasonEn: 'Win rate 58.74%'
  },
  'warwick-shaco': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'warwick-talon': {
    reasonZh: '对线胜率 54.66%',
    reasonEn: 'Win rate 54.66%'
  },
  'warwick-tryndamere': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'warwick-zyra': {
    reasonZh: '对线胜率 53.12%',
    reasonEn: 'Win rate 53.12%'
  },
  'xayah-corki': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'xayah-draven': {
    reasonZh: '对线胜率 52.82%',
    reasonEn: 'Win rate 52.82%'
  },
  'xayah-ezreal': {
    reasonZh: '对线胜率 52.42%',
    reasonEn: 'Win rate 52.42%'
  },
  'xayah-kaisa': {
    reasonZh: '对线胜率 55.04%',
    reasonEn: 'Win rate 55.04%'
  },
  'xayah-kalista': {
    reasonZh: '对线胜率 55.25%',
    reasonEn: 'Win rate 55.25%'
  },
  'xayah-lucian': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'xayah-nilah': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'xayah-samira': {
    reasonZh: '对线胜率 51.79%',
    reasonEn: 'Win rate 51.79%'
  },
  'xayah-tristana': {
    reasonZh: '对线胜率 52.16%',
    reasonEn: 'Win rate 52.16%'
  },
  'xayah-twitch': {
    reasonZh: '对线胜率 50.30%',
    reasonEn: 'Win rate 50.30%'
  },
  'xayah-varus': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'xayah-yunara': {
    reasonZh: '对线胜率 51.95%',
    reasonEn: 'Win rate 51.95%'
  },
  'xerath-azir': {
    reasonZh: '对线胜率 59.86%',
    reasonEn: 'Win rate 59.86%'
  },
  'xerath-camille': {
    reasonZh: '对线胜率 57.54%',
    reasonEn: 'Win rate 57.54%'
  },
  'xerath-drmundo': {
    reasonZh: '对线胜率 60.32%',
    reasonEn: 'Win rate 60.32%'
  },
  'xerath-graves': {
    reasonZh: '对线胜率 57.33%',
    reasonEn: 'Win rate 57.33%'
  },
  'xerath-hwei': {
    reasonZh: '对线胜率 52.37%',
    reasonEn: 'Win rate 52.37%'
  },
  'xerath-jax': {
    reasonZh: '对线胜率 64.56%',
    reasonEn: 'Win rate 64.56%'
  },
  'xerath-lissandra': {
    reasonZh: '对线胜率 51.91%',
    reasonEn: 'Win rate 51.91%'
  },
  'xerath-malphite': {
    reasonZh: '对线胜率 57.94%',
    reasonEn: 'Win rate 57.94%'
  },
  'xerath-mel': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%'
  },
  'xerath-missfortune': {
    reasonZh: '对线胜率 58.05%',
    reasonEn: 'Win rate 58.05%'
  },
  'xerath-mordekaiser': {
    reasonZh: '对线胜率 68.33%',
    reasonEn: 'Win rate 68.33%'
  },
  'xerath-morgana': {
    reasonZh: '对线胜率 53.37%',
    reasonEn: 'Win rate 53.37%'
  },
  'xerath-nasus': {
    reasonZh: '对线胜率 70.15%',
    reasonEn: 'Win rate 70.15%'
  },
  'xerath-orianna': {
    reasonZh: '对线胜率 56.58%',
    reasonEn: 'Win rate 56.58%'
  },
  'xerath-senna': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'xerath-shen': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'xerath-smolder': {
    reasonZh: '对线胜率 57.52%',
    reasonEn: 'Win rate 57.52%'
  },
  'xerath-syndra': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'xerath-tristana': {
    reasonZh: '对线胜率 59.11%',
    reasonEn: 'Win rate 59.11%'
  },
  'xerath-twistedfate': {
    reasonZh: '对线胜率 52.20%',
    reasonEn: 'Win rate 52.20%'
  },
  'xerath-viktor': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'xerath-ziggs': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'xinzhao-amumu': {
    reasonZh: '对线胜率 53.25%',
    reasonEn: 'Win rate 53.25%'
  },
  'xinzhao-darius': {
    reasonZh: '对线胜率 52.97%',
    reasonEn: 'Win rate 52.97%'
  },
  'xinzhao-diana': {
    reasonZh: '对线胜率 55.27%',
    reasonEn: 'Win rate 55.27%'
  },
  'xinzhao-jayce': {
    reasonZh: '对线胜率 53.46%',
    reasonEn: 'Win rate 53.46%'
  },
  'xinzhao-ksante': {
    reasonZh: '对线胜率 53.48%',
    reasonEn: 'Win rate 53.48%'
  },
  'xinzhao-leesin': {
    reasonZh: '对线胜率 53.28%',
    reasonEn: 'Win rate 53.28%'
  },
  'xinzhao-rengar': {
    reasonZh: '对线胜率 54.77%',
    reasonEn: 'Win rate 54.77%'
  },
  'xinzhao-smolder': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'xinzhao-sylas': {
    reasonZh: '对线胜率 53.15%',
    reasonEn: 'Win rate 53.15%'
  },
  'xinzhao-zed': {
    reasonZh: '对线胜率 54.68%',
    reasonEn: 'Win rate 54.68%'
  },
  'yasuo-akali': {
    reasonZh: '对线胜率 62.73%',
    reasonEn: 'Win rate 62.73%'
  },
  'yasuo-akshan': {
    reasonZh: '对线胜率 53.60%',
    reasonEn: 'Win rate 53.60%'
  },
  'yasuo-brand': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'yasuo-heimerdinger': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%'
  },
  'yasuo-lucian': {
    reasonZh: '对线胜率 64.15%',
    reasonEn: 'Win rate 64.15%'
  },
  'yasuo-mel': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'yasuo-mordekaiser': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'yasuo-ryze': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%'
  },
  'yasuo-smolder': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'yasuo-sylas': {
    reasonZh: '对线胜率 56.33%',
    reasonEn: 'Win rate 56.33%'
  },
  'yasuo-twistedfate': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'yasuo-velkoz': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'yasuo-zed': {
    reasonZh: '对线胜率 56.57%',
    reasonEn: 'Win rate 56.57%'
  },
  'yone-drmundo': {
    reasonZh: '对线胜率 57.73%',
    reasonEn: 'Win rate 57.73%'
  },
  'yone-gwen': {
    reasonZh: '对线胜率 63.46%',
    reasonEn: 'Win rate 63.46%'
  },
  'yone-ksante': {
    reasonZh: '对线胜率 60.77%',
    reasonEn: 'Win rate 60.77%'
  },
  'yone-lucian': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'yone-lux': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'yone-monkeyking': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'yone-rumble': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'yone-sylas': {
    reasonZh: '对线胜率 55.51%',
    reasonEn: 'Win rate 55.51%'
  },
  'yone-tahmkench': {
    reasonZh: '对线胜率 56.30%',
    reasonEn: 'Win rate 56.30%'
  },
  'yone-teemo': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'yone-yorick': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'yorick-ambessa': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'yorick-drmundo': {
    reasonZh: '对线胜率 56.69%',
    reasonEn: 'Win rate 56.69%'
  },
  'yorick-gragas': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%'
  },
  'yorick-jayce': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%'
  },
  'yorick-ksante': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%'
  },
  'yorick-mel': {
    reasonZh: '对线胜率 56.58%',
    reasonEn: 'Win rate 56.58%'
  },
  'yorick-smolder': {
    reasonZh: '对线胜率 56.69%',
    reasonEn: 'Win rate 56.69%'
  },
  'yorick-swain': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%'
  },
  'yorick-urgot': {
    reasonZh: '对线胜率 63.24%',
    reasonEn: 'Win rate 63.24%'
  },
  'yorick-zed': {
    reasonZh: '对线胜率 59.39%',
    reasonEn: 'Win rate 59.39%'
  },
  'yunara-ezreal': {
    reasonZh: '对线胜率 50.23%',
    reasonEn: 'Win rate 50.23%'
  },
  'yunara-jhin': {
    reasonZh: '对线胜率 50.35%',
    reasonEn: 'Win rate 50.35%'
  },
  'yunara-kaisa': {
    reasonZh: '对线胜率 51.13%',
    reasonEn: 'Win rate 51.13%'
  },
  'yunara-kalista': {
    reasonZh: '对线胜率 51.34%',
    reasonEn: 'Win rate 51.34%'
  },
  'yunara-kogmaw': {
    reasonZh: '对线胜率 50.07%',
    reasonEn: 'Win rate 50.07%'
  },
  'yunara-lucian': {
    reasonZh: '对线胜率 50.54%',
    reasonEn: 'Win rate 50.54%'
  },
  'yunara-varus': {
    reasonZh: '对线胜率 50.27%',
    reasonEn: 'Win rate 50.27%'
  },
  'yuumi-ashe': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'yuumi-jarvaniv': {
    reasonZh: '对线胜率 52.82%',
    reasonEn: 'Win rate 52.82%'
  },
  'yuumi-leblanc': {
    reasonZh: '对线胜率 53.53%',
    reasonEn: 'Win rate 53.53%'
  },
  'yuumi-mel': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'yuumi-missfortune': {
    reasonZh: '对线胜率 62.26%',
    reasonEn: 'Win rate 62.26%'
  },
  'yuumi-morgana': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%'
  },
  'yuumi-seraphine': {
    reasonZh: '对线胜率 51.24%',
    reasonEn: 'Win rate 51.24%'
  },
  'yuumi-shaco': {
    reasonZh: '对线胜率 53.22%',
    reasonEn: 'Win rate 53.22%'
  },
  'yuumi-soraka': {
    reasonZh: '对线胜率 52.44%',
    reasonEn: 'Win rate 52.44%'
  },
  'yuumi-swain': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'yuumi-veigar': {
    reasonZh: '对线胜率 54.80%',
    reasonEn: 'Win rate 54.80%'
  },
  'yuumi-xerath': {
    reasonZh: '对线胜率 54.06%',
    reasonEn: 'Win rate 54.06%'
  },
  'zaahen-ambessa': {
    reasonZh: '对线胜率 51.67%',
    reasonEn: 'Win rate 51.67%'
  },
  'zaahen-darius': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'zaahen-diana': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'zaahen-galio': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'zaahen-gwen': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%'
  },
  'zaahen-jarvaniv': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%'
  },
  'zaahen-jayce': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'zaahen-jhin': {
    reasonZh: '对线胜率 62.40%',
    reasonEn: 'Win rate 62.40%'
  },
  'zaahen-kaisa': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'zaahen-kayn': {
    reasonZh: '对线胜率 53.37%',
    reasonEn: 'Win rate 53.37%'
  },
  'zaahen-ksante': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%'
  },
  'zaahen-nocturne': {
    reasonZh: '对线胜率 52.35%',
    reasonEn: 'Win rate 52.35%'
  },
  'zaahen-riven': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'zaahen-rumble': {
    reasonZh: '对线胜率 53.73%',
    reasonEn: 'Win rate 53.73%'
  },
  'zaahen-ryze': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%'
  },
  'zaahen-sylas': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%'
  },
  'zaahen-tahmkench': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'zaahen-xinzhao': {
    reasonZh: '对线胜率 53.40%',
    reasonEn: 'Win rate 53.40%'
  },
  'zaahen-yasuo': {
    reasonZh: '对线胜率 57.61%',
    reasonEn: 'Win rate 57.61%'
  },
  'zac-belveth': {
    reasonZh: '对线胜率 50.84%',
    reasonEn: 'Win rate 50.84%'
  },
  'zac-evelynn': {
    reasonZh: '对线胜率 51.67%',
    reasonEn: 'Win rate 51.67%'
  },
  'zac-gnar': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'zac-illaoi': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'zac-kayle': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'zac-kennen': {
    reasonZh: '对线胜率 52.29%',
    reasonEn: 'Win rate 52.29%'
  },
  'zac-kindred': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'zac-ksante': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'zac-monkeyking': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'zac-rengar': {
    reasonZh: '对线胜率 53.18%',
    reasonEn: 'Win rate 53.18%'
  },
  'zac-smolder': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%'
  },
  'zac-tahmkench': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%'
  },
  'zac-tryndamere': {
    reasonZh: '对线胜率 53.56%',
    reasonEn: 'Win rate 53.56%'
  },
  'zed-aatrox': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'zed-fiora': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'zed-mordekaiser': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%'
  },
  'zed-poppy': {
    reasonZh: '对线胜率 55.75%',
    reasonEn: 'Win rate 55.75%'
  },
  'zed-sion': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'zed-tryndamere': {
    reasonZh: '对线胜率 55.95%',
    reasonEn: 'Win rate 55.95%'
  },
  'zed-varus': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'zed-yasuo': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%'
  },
  'zed-yone': {
    reasonZh: '对线胜率 64.33%',
    reasonEn: 'Win rate 64.33%'
  },
  'zed-yorick': {
    reasonZh: '对线胜率 58.21%',
    reasonEn: 'Win rate 58.21%'
  },
  'zeri-aphelios': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'zeri-corki': {
    reasonZh: '对线胜率 56.11%',
    reasonEn: 'Win rate 56.11%'
  },
  'zeri-draven': {
    reasonZh: '对线胜率 52.36%',
    reasonEn: 'Win rate 52.36%'
  },
  'zeri-ezreal': {
    reasonZh: '对线胜率 56.62%',
    reasonEn: 'Win rate 56.62%'
  },
  'zeri-jhin': {
    reasonZh: '对线胜率 55.27%',
    reasonEn: 'Win rate 55.27%'
  },
  'zeri-jinx': {
    reasonZh: '对线胜率 50.24%',
    reasonEn: 'Win rate 50.24%'
  },
  'zeri-kaisa': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'zeri-kalista': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%'
  },
  'zeri-lucian': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'zeri-samira': {
    reasonZh: '对线胜率 53.38%',
    reasonEn: 'Win rate 53.38%'
  },
  'zeri-sivir': {
    reasonZh: '对线胜率 51.65%',
    reasonEn: 'Win rate 51.65%'
  },
  'zeri-tristana': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%'
  },
  'zeri-twitch': {
    reasonZh: '对线胜率 52.05%',
    reasonEn: 'Win rate 52.05%'
  },
  'zeri-varus': {
    reasonZh: '对线胜率 61.75%',
    reasonEn: 'Win rate 61.75%'
  },
  'zeri-xayah': {
    reasonZh: '对线胜率 53.05%',
    reasonEn: 'Win rate 53.05%'
  },
  'zeri-yunara': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%'
  },
  'ziggs-aphelios': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'ziggs-caitlyn': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'ziggs-cassiopeia': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%'
  },
  'ziggs-corki': {
    reasonZh: '对线胜率 55.80%',
    reasonEn: 'Win rate 55.80%'
  },
  'ziggs-draven': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'ziggs-jinx': {
    reasonZh: '对线胜率 50.67%',
    reasonEn: 'Win rate 50.67%'
  },
  'ziggs-kalista': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'ziggs-kassadin': {
    reasonZh: '对线胜率 53.69%',
    reasonEn: 'Win rate 53.69%'
  },
  'ziggs-kogmaw': {
    reasonZh: '对线胜率 52.46%',
    reasonEn: 'Win rate 52.46%'
  },
  'ziggs-missfortune': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'ziggs-nilah': {
    reasonZh: '对线胜率 51.01%',
    reasonEn: 'Win rate 51.01%'
  },
  'ziggs-samira': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'ziggs-smolder': {
    reasonZh: '对线胜率 60.46%',
    reasonEn: 'Win rate 60.46%'
  },
  'ziggs-tristana': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%'
  },
  'ziggs-varus': {
    reasonZh: '对线胜率 62.14%',
    reasonEn: 'Win rate 62.14%'
  },
  'ziggs-veigar': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%'
  },
  'ziggs-vex': {
    reasonZh: '对线胜率 52.02%',
    reasonEn: 'Win rate 52.02%'
  },
  'ziggs-xayah': {
    reasonZh: '对线胜率 50.76%',
    reasonEn: 'Win rate 50.76%'
  },
  'ziggs-yone': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%'
  },
  'ziggs-zeri': {
    reasonZh: '对线胜率 50.88%',
    reasonEn: 'Win rate 50.88%'
  },
  'ziggs-zoe': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'zilean-amumu': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%'
  },
  'zilean-anivia': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%'
  },
  'zilean-braum': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'zilean-fiddlesticks': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%'
  },
  'zilean-janna': {
    reasonZh: '对线胜率 52.98%',
    reasonEn: 'Win rate 52.98%'
  },
  'zilean-leona': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'zilean-lux': {
    reasonZh: '对线胜率 53.02%',
    reasonEn: 'Win rate 53.02%'
  },
  'zilean-maokai': {
    reasonZh: '对线胜率 52.15%',
    reasonEn: 'Win rate 52.15%'
  },
  'zilean-mel': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%'
  },
  'zilean-missfortune': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%'
  },
  'zilean-morgana': {
    reasonZh: '对线胜率 53.38%',
    reasonEn: 'Win rate 53.38%'
  },
  'zilean-nami': {
    reasonZh: '对线胜率 50.92%',
    reasonEn: 'Win rate 50.92%'
  },
  'zilean-pantheon': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%'
  },
  'zilean-poppy': {
    reasonZh: '对线胜率 59.55%',
    reasonEn: 'Win rate 59.55%'
  },
  'zilean-rakan': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'zilean-rell': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'zilean-renata': {
    reasonZh: '对线胜率 50.67%',
    reasonEn: 'Win rate 50.67%'
  },
  'zilean-senna': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%'
  },
  'zilean-swain': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%'
  },
  'zilean-tahmkench': {
    reasonZh: '对线胜率 54.30%',
    reasonEn: 'Win rate 54.30%'
  },
  'zilean-thresh': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'zilean-veigar': {
    reasonZh: '对线胜率 56.30%',
    reasonEn: 'Win rate 56.30%'
  },
  'zilean-yuumi': {
    reasonZh: '对线胜率 53.82%',
    reasonEn: 'Win rate 53.82%'
  },
  'zilean-zyra': {
    reasonZh: '对线胜率 53.43%',
    reasonEn: 'Win rate 53.43%'
  },
  'zoe-ahri': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%'
  },
  'zoe-aurora': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'zoe-cassiopeia': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'zoe-galio': {
    reasonZh: '对线胜率 52.48%',
    reasonEn: 'Win rate 52.48%'
  },
  'zoe-garen': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%'
  },
  'zoe-hwei': {
    reasonZh: '对线胜率 53.15%',
    reasonEn: 'Win rate 53.15%'
  },
  'zoe-irelia': {
    reasonZh: '对线胜率 58.15%',
    reasonEn: 'Win rate 58.15%'
  },
  'zoe-lux': {
    reasonZh: '对线胜率 56.89%',
    reasonEn: 'Win rate 56.89%'
  },
  'zoe-qiyana': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'zoe-smolder': {
    reasonZh: '对线胜率 59.06%',
    reasonEn: 'Win rate 59.06%'
  },
  'zoe-taliyah': {
    reasonZh: '对线胜率 57.36%',
    reasonEn: 'Win rate 57.36%'
  },
  'zoe-talon': {
    reasonZh: '对线胜率 56.04%',
    reasonEn: 'Win rate 56.04%'
  },
  'zoe-tryndamere': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'zoe-vex': {
    reasonZh: '对线胜率 52.05%',
    reasonEn: 'Win rate 52.05%'
  },
  'zoe-vladimir': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'zyra-alistar': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'zyra-ashe': {
    reasonZh: '对线胜率 58.65%',
    reasonEn: 'Win rate 58.65%'
  },
  'zyra-camille': {
    reasonZh: '对线胜率 60.15%',
    reasonEn: 'Win rate 60.15%'
  },
  'zyra-darius': {
    reasonZh: '对线胜率 59.56%',
    reasonEn: 'Win rate 59.56%'
  },
  'zyra-fizz': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'zyra-gragas': {
    reasonZh: '对线胜率 58.91%',
    reasonEn: 'Win rate 58.91%'
  },
  'zyra-graves': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'zyra-gwen': {
    reasonZh: '对线胜率 54.18%',
    reasonEn: 'Win rate 54.18%'
  },
  'zyra-hecarim': {
    reasonZh: '对线胜率 57.74%',
    reasonEn: 'Win rate 57.74%'
  },
  'zyra-janna': {
    reasonZh: '对线胜率 51.45%',
    reasonEn: 'Win rate 51.45%'
  },
  'zyra-kayn': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%'
  },
  'zyra-khazix': {
    reasonZh: '对线胜率 57.70%',
    reasonEn: 'Win rate 57.70%'
  },
  'zyra-ksante': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%'
  },
  'zyra-masteryi': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'zyra-nasus': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%'
  },
  'zyra-neeko': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%'
  },
  'zyra-reksai': {
    reasonZh: '对线胜率 51.52%',
    reasonEn: 'Win rate 51.52%'
  },
  'zyra-riven': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%'
  },
  'zyra-sett': {
    reasonZh: '对线胜率 59.83%',
    reasonEn: 'Win rate 59.83%'
  },
  'zyra-shyvana': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%'
  },
  'zyra-teemo': {
    reasonZh: '对线胜率 58.95%',
    reasonEn: 'Win rate 58.95%'
  },
  'zyra-thresh': {
    reasonZh: '对线胜率 51.71%',
    reasonEn: 'Win rate 51.71%'
  },
  'zyra-urgot': {
    reasonZh: '对线胜率 54.31%',
    reasonEn: 'Win rate 54.31%'
  },
  'zyra-vayne': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'zyra-veigar': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'zyra-viego': {
    reasonZh: '对线胜率 57.57%',
    reasonEn: 'Win rate 57.57%'
  },
  'zyra-yorick': {
    reasonZh: '对线胜率 55.06%',
    reasonEn: 'Win rate 55.06%'
  },
  'zyra-zaahen': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%'
  },
};

// 获取克制理由的辅助函数
export function getCounterReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = `${sourceId}-${targetId}`;
  const data = counterReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}

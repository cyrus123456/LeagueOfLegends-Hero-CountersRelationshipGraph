// 克制理由数据 - 基于 OP.GG 难对付/好对付数据生成
// 数据来源: https://op.gg/zh-cn/lol/champions
// key 格式: "source-target" (source克制target)
import type { Language } from '@/i18n';

export interface CounterReasonData {
  reasonZh: string;
  reasonEn: string;
}

export const counterReasons: Record<string, CounterReasonData> = {
  'aatrox-fiddlesticks': {
    reasonZh: '对线胜率 53.25%',
    reasonEn: 'Win rate 53.25%'
  },
  'aatrox-jarvaniv': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%'
  },
  'aatrox-malzahar': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'aatrox-nasus': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%'
  },
  'aatrox-rammus': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'aatrox-shaco': {
    reasonZh: '对线胜率 51.48%',
    reasonEn: 'Win rate 51.48%'
  },
  'aatrox-swain': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'aatrox-sylas': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%'
  },
  'aatrox-trundle': {
    reasonZh: '对线胜率 62.75%',
    reasonEn: 'Win rate 62.75%'
  },
  'aatrox-twistedfate': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'aatrox-vi': {
    reasonZh: '对线胜率 52.77%',
    reasonEn: 'Win rate 52.77%'
  },
  'aatrox-vladimir': {
    reasonZh: '对线胜率 55.31%',
    reasonEn: 'Win rate 55.31%'
  },
  'aatrox-zyra': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%'
  },
  'ahri-gragas': {
    reasonZh: '对线胜率 54.62%',
    reasonEn: 'Win rate 54.62%'
  },
  'ahri-riven': {
    reasonZh: '对线胜率 55.30%',
    reasonEn: 'Win rate 55.30%'
  },
  'ahri-sion': {
    reasonZh: '对线胜率 54.99%',
    reasonEn: 'Win rate 54.99%'
  },
  'ahri-smolder': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%'
  },
  'ahri-yone': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'akali-azir': {
    reasonZh: '对线胜率 53.76%',
    reasonEn: 'Win rate 53.76%'
  },
  'akali-cassiopeia': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'akali-gwen': {
    reasonZh: '对线胜率 54.82%',
    reasonEn: 'Win rate 54.82%'
  },
  'akali-heimerdinger': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'akali-mel': {
    reasonZh: '对线胜率 55.50%',
    reasonEn: 'Win rate 55.50%'
  },
  'akali-mordekaiser': {
    reasonZh: '对线胜率 58.28%',
    reasonEn: 'Win rate 58.28%'
  },
  'akali-smolder': {
    reasonZh: '对线胜率 58.61%',
    reasonEn: 'Win rate 58.61%'
  },
  'akshan-hwei': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'akshan-jayce': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'akshan-orianna': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'akshan-smolder': {
    reasonZh: '对线胜率 65.74%',
    reasonEn: 'Win rate 65.74%'
  },
  'akshan-yone': {
    reasonZh: '对线胜率 56.29%',
    reasonEn: 'Win rate 56.29%'
  },
  'alistar-mel': {
    reasonZh: '对线胜率 59.00%',
    reasonEn: 'Win rate 59.00%'
  },
  'alistar-shen': {
    reasonZh: '对线胜率 53.73%',
    reasonEn: 'Win rate 53.73%'
  },
  'alistar-skarner': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%'
  },
  'alistar-xerath': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'alistar-yuumi': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%'
  },
  'ambessa-chogath': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'ambessa-drmundo': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'ambessa-rammus': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'ambessa-sylas': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'ambessa-udyr': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%'
  },
  'ambessa-vayne': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%'
  },
  'amumu-bard': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'amumu-blitzcrank': {
    reasonZh: '对线胜率 53.41%',
    reasonEn: 'Win rate 53.41%'
  },
  'amumu-ivern': {
    reasonZh: '对线胜率 55.23%',
    reasonEn: 'Win rate 55.23%'
  },
  'amumu-lulu': {
    reasonZh: '对线胜率 54.45%',
    reasonEn: 'Win rate 54.45%'
  },
  'amumu-mel': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'amumu-monkeyking': {
    reasonZh: '对线胜率 54.37%',
    reasonEn: 'Win rate 54.37%'
  },
  'amumu-nami': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'amumu-pyke': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'amumu-renata': {
    reasonZh: '对线胜率 61.22%',
    reasonEn: 'Win rate 61.22%'
  },
  'amumu-seraphine': {
    reasonZh: '对线胜率 54.64%',
    reasonEn: 'Win rate 54.64%'
  },
  'amumu-sylas': {
    reasonZh: '对线胜率 56.14%',
    reasonEn: 'Win rate 56.14%'
  },
  'amumu-yuumi': {
    reasonZh: '对线胜率 65.05%',
    reasonEn: 'Win rate 65.05%'
  },
  'anivia-darius': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'anivia-fiora': {
    reasonZh: '对线胜率 57.30%',
    reasonEn: 'Win rate 57.30%'
  },
  'anivia-illaoi': {
    reasonZh: '对线胜率 55.71%',
    reasonEn: 'Win rate 55.71%'
  },
  'anivia-leona': {
    reasonZh: '对线胜率 51.60%',
    reasonEn: 'Win rate 51.60%'
  },
  'anivia-masteryi': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'anivia-morgana': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'anivia-sett': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'anivia-sion': {
    reasonZh: '对线胜率 55.99%',
    reasonEn: 'Win rate 55.99%'
  },
  'anivia-swain': {
    reasonZh: '对线胜率 61.36%',
    reasonEn: 'Win rate 61.36%'
  },
  'anivia-trundle': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'anivia-vladimir': {
    reasonZh: '对线胜率 51.30%',
    reasonEn: 'Win rate 51.30%'
  },
  'anivia-volibear': {
    reasonZh: '对线胜率 59.87%',
    reasonEn: 'Win rate 59.87%'
  },
  'anivia-yorick': {
    reasonZh: '对线胜率 57.01%',
    reasonEn: 'Win rate 57.01%'
  },
  'annie-ahri': {
    reasonZh: '对线胜率 51.81%',
    reasonEn: 'Win rate 51.81%'
  },
  'annie-chogath': {
    reasonZh: '对线胜率 55.83%',
    reasonEn: 'Win rate 55.83%'
  },
  'annie-gwen': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'annie-smolder': {
    reasonZh: '对线胜率 57.03%',
    reasonEn: 'Win rate 57.03%'
  },
  'annie-yasuo': {
    reasonZh: '对线胜率 55.34%',
    reasonEn: 'Win rate 55.34%'
  },
  'annie-yone': {
    reasonZh: '对线胜率 56.33%',
    reasonEn: 'Win rate 56.33%'
  },
  'aphelios-kaisa': {
    reasonZh: '对线胜率 53.40%',
    reasonEn: 'Win rate 53.40%'
  },
  'aphelios-kalista': {
    reasonZh: '对线胜率 52.58%',
    reasonEn: 'Win rate 52.58%'
  },
  'aphelios-lucian': {
    reasonZh: '对线胜率 53.02%',
    reasonEn: 'Win rate 53.02%'
  },
  'aphelios-sivir': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'aphelios-vayne': {
    reasonZh: '对线胜率 53.14%',
    reasonEn: 'Win rate 53.14%'
  },
  'ashe-aphelios': {
    reasonZh: '对线胜率 53.51%',
    reasonEn: 'Win rate 53.51%'
  },
  'ashe-corki': {
    reasonZh: '对线胜率 53.24%',
    reasonEn: 'Win rate 53.24%'
  },
  'ashe-kaisa': {
    reasonZh: '对线胜率 52.96%',
    reasonEn: 'Win rate 52.96%'
  },
  'ashe-sivir': {
    reasonZh: '对线胜率 53.30%',
    reasonEn: 'Win rate 53.30%'
  },
  'ashe-vayne': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'aurelionsol-aphelios': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%'
  },
  'aurelionsol-caitlyn': {
    reasonZh: '对线胜率 57.16%',
    reasonEn: 'Win rate 57.16%'
  },
  'aurelionsol-kogmaw': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'aurelionsol-lux': {
    reasonZh: '对线胜率 65.15%',
    reasonEn: 'Win rate 65.15%'
  },
  'aurelionsol-mel': {
    reasonZh: '对线胜率 60.27%',
    reasonEn: 'Win rate 60.27%'
  },
  'aurelionsol-orianna': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'aurelionsol-samira': {
    reasonZh: '对线胜率 55.98%',
    reasonEn: 'Win rate 55.98%'
  },
  'aurelionsol-twitch': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%'
  },
  'aurelionsol-veigar': {
    reasonZh: '对线胜率 68.52%',
    reasonEn: 'Win rate 68.52%'
  },
  'aurelionsol-velkoz': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%'
  },
  'aurora-azir': {
    reasonZh: '对线胜率 55.28%',
    reasonEn: 'Win rate 55.28%'
  },
  'aurora-malphite': {
    reasonZh: '对线胜率 60.42%',
    reasonEn: 'Win rate 60.42%'
  },
  'aurora-mel': {
    reasonZh: '对线胜率 55.78%',
    reasonEn: 'Win rate 55.78%'
  },
  'aurora-olaf': {
    reasonZh: '对线胜率 55.04%',
    reasonEn: 'Win rate 55.04%'
  },
  'aurora-pantheon': {
    reasonZh: '对线胜率 54.68%',
    reasonEn: 'Win rate 54.68%'
  },
  'aurora-riven': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%'
  },
  'aurora-rumble': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'aurora-smolder': {
    reasonZh: '对线胜率 58.04%',
    reasonEn: 'Win rate 58.04%'
  },
  'aurora-urgot': {
    reasonZh: '对线胜率 56.93%',
    reasonEn: 'Win rate 56.93%'
  },
  'azir-gwen': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%'
  },
  'azir-irelia': {
    reasonZh: '对线胜率 52.05%',
    reasonEn: 'Win rate 52.05%'
  },
  'azir-mel': {
    reasonZh: '对线胜率 54.94%',
    reasonEn: 'Win rate 54.94%'
  },
  'azir-smolder': {
    reasonZh: '对线胜率 51.95%',
    reasonEn: 'Win rate 51.95%'
  },
  'azir-yasuo': {
    reasonZh: '对线胜率 51.69%',
    reasonEn: 'Win rate 51.69%'
  },
  'bard-janna': {
    reasonZh: '对线胜率 51.61%',
    reasonEn: 'Win rate 51.61%'
  },
  'bard-leblanc': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'bard-mel': {
    reasonZh: '对线胜率 59.86%',
    reasonEn: 'Win rate 59.86%'
  },
  'bard-renata': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'bard-shen': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%'
  },
  'bard-yuumi': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%'
  },
  'bard-zilean': {
    reasonZh: '对线胜率 52.28%',
    reasonEn: 'Win rate 52.28%'
  },
  'belveth-ambessa': {
    reasonZh: '对线胜率 60.36%',
    reasonEn: 'Win rate 60.36%'
  },
  'belveth-evelynn': {
    reasonZh: '对线胜率 53.68%',
    reasonEn: 'Win rate 53.68%'
  },
  'belveth-gwen': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%'
  },
  'belveth-jarvaniv': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'belveth-jayce': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'belveth-shaco': {
    reasonZh: '对线胜率 52.37%',
    reasonEn: 'Win rate 52.37%'
  },
  'belveth-taliyah': {
    reasonZh: '对线胜率 56.69%',
    reasonEn: 'Win rate 56.69%'
  },
  'belveth-volibear': {
    reasonZh: '对线胜率 56.21%',
    reasonEn: 'Win rate 56.21%'
  },
  'blitzcrank-anivia': {
    reasonZh: '对线胜率 58.80%',
    reasonEn: 'Win rate 58.80%'
  },
  'blitzcrank-hwei': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%'
  },
  'blitzcrank-karma': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'blitzcrank-leblanc': {
    reasonZh: '对线胜率 60.64%',
    reasonEn: 'Win rate 60.64%'
  },
  'blitzcrank-lulu': {
    reasonZh: '对线胜率 52.36%',
    reasonEn: 'Win rate 52.36%'
  },
  'blitzcrank-mel': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%'
  },
  'blitzcrank-nami': {
    reasonZh: '对线胜率 53.05%',
    reasonEn: 'Win rate 53.05%'
  },
  'blitzcrank-soraka': {
    reasonZh: '对线胜率 52.24%',
    reasonEn: 'Win rate 52.24%'
  },
  'blitzcrank-zoe': {
    reasonZh: '对线胜率 58.38%',
    reasonEn: 'Win rate 58.38%'
  },
  'brand-braum': {
    reasonZh: '对线胜率 52.39%',
    reasonEn: 'Win rate 52.39%'
  },
  'brand-corki': {
    reasonZh: '对线胜率 56.30%',
    reasonEn: 'Win rate 56.30%'
  },
  'brand-draven': {
    reasonZh: '对线胜率 55.51%',
    reasonEn: 'Win rate 55.51%'
  },
  'brand-ezreal': {
    reasonZh: '对线胜率 55.37%',
    reasonEn: 'Win rate 55.37%'
  },
  'brand-kalista': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%'
  },
  'brand-rell': {
    reasonZh: '对线胜率 52.06%',
    reasonEn: 'Win rate 52.06%'
  },
  'brand-ryze': {
    reasonZh: '对线胜率 56.26%',
    reasonEn: 'Win rate 56.26%'
  },
  'brand-senna': {
    reasonZh: '对线胜率 50.88%',
    reasonEn: 'Win rate 50.88%'
  },
  'brand-swain': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'brand-tahmkench': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'brand-thresh': {
    reasonZh: '对线胜率 50.87%',
    reasonEn: 'Win rate 50.87%'
  },
  'brand-twistedfate': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'brand-yunara': {
    reasonZh: '对线胜率 57.44%',
    reasonEn: 'Win rate 57.44%'
  },
  'brand-zeri': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'braum-amumu': {
    reasonZh: '对线胜率 57.56%',
    reasonEn: 'Win rate 57.56%'
  },
  'braum-blitzcrank': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'braum-camille': {
    reasonZh: '对线胜率 56.13%',
    reasonEn: 'Win rate 56.13%'
  },
  'braum-maokai': {
    reasonZh: '对线胜率 54.38%',
    reasonEn: 'Win rate 54.38%'
  },
  'braum-mel': {
    reasonZh: '对线胜率 61.14%',
    reasonEn: 'Win rate 61.14%'
  },
  'braum-milio': {
    reasonZh: '对线胜率 52.52%',
    reasonEn: 'Win rate 52.52%'
  },
  'braum-nautilus': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'braum-renata': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'braum-yuumi': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'briar-ambessa': {
    reasonZh: '对线胜率 56.37%',
    reasonEn: 'Win rate 56.37%'
  },
  'briar-jarvaniv': {
    reasonZh: '对线胜率 52.85%',
    reasonEn: 'Win rate 52.85%'
  },
  'briar-jayce': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'briar-leesin': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'briar-qiyana': {
    reasonZh: '对线胜率 57.72%',
    reasonEn: 'Win rate 57.72%'
  },
  'briar-rengar': {
    reasonZh: '对线胜率 54.09%',
    reasonEn: 'Win rate 54.09%'
  },
  'briar-shaco': {
    reasonZh: '对线胜率 52.00%',
    reasonEn: 'Win rate 52.00%'
  },
  'briar-zed': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%'
  },
  'caitlyn-aphelios': {
    reasonZh: '对线胜率 52.09%',
    reasonEn: 'Win rate 52.09%'
  },
  'caitlyn-corki': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'caitlyn-draven': {
    reasonZh: '对线胜率 51.48%',
    reasonEn: 'Win rate 51.48%'
  },
  'caitlyn-lucian': {
    reasonZh: '对线胜率 51.04%',
    reasonEn: 'Win rate 51.04%'
  },
  'caitlyn-yunara': {
    reasonZh: '对线胜率 51.83%',
    reasonEn: 'Win rate 51.83%'
  },
  'camille-ambessa': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'camille-aurora': {
    reasonZh: '对线胜率 54.03%',
    reasonEn: 'Win rate 54.03%'
  },
  'camille-jayce': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%'
  },
  'camille-trundle': {
    reasonZh: '对线胜率 53.87%',
    reasonEn: 'Win rate 53.87%'
  },
  'camille-udyr': {
    reasonZh: '对线胜率 53.60%',
    reasonEn: 'Win rate 53.60%'
  },
  'cassiopeia-aatrox': {
    reasonZh: '对线胜率 57.28%',
    reasonEn: 'Win rate 57.28%'
  },
  'cassiopeia-ambessa': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%'
  },
  'cassiopeia-azir': {
    reasonZh: '对线胜率 56.84%',
    reasonEn: 'Win rate 56.84%'
  },
  'cassiopeia-camille': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'cassiopeia-chogath': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'cassiopeia-diana': {
    reasonZh: '对线胜率 53.05%',
    reasonEn: 'Win rate 53.05%'
  },
  'cassiopeia-fiora': {
    reasonZh: '对线胜率 57.66%',
    reasonEn: 'Win rate 57.66%'
  },
  'cassiopeia-garen': {
    reasonZh: '对线胜率 56.68%',
    reasonEn: 'Win rate 56.68%'
  },
  'cassiopeia-gnar': {
    reasonZh: '对线胜率 54.85%',
    reasonEn: 'Win rate 54.85%'
  },
  'cassiopeia-illaoi': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%'
  },
  'cassiopeia-kassadin': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'cassiopeia-kayle': {
    reasonZh: '对线胜率 56.84%',
    reasonEn: 'Win rate 56.84%'
  },
  'cassiopeia-kled': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%'
  },
  'cassiopeia-malphite': {
    reasonZh: '对线胜率 57.60%',
    reasonEn: 'Win rate 57.60%'
  },
  'cassiopeia-mordekaiser': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'cassiopeia-ornn': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'cassiopeia-pantheon': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'cassiopeia-poppy': {
    reasonZh: '对线胜率 65.52%',
    reasonEn: 'Win rate 65.52%'
  },
  'cassiopeia-sett': {
    reasonZh: '对线胜率 55.97%',
    reasonEn: 'Win rate 55.97%'
  },
  'cassiopeia-singed': {
    reasonZh: '对线胜率 52.07%',
    reasonEn: 'Win rate 52.07%'
  },
  'cassiopeia-smolder': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'cassiopeia-tryndamere': {
    reasonZh: '对线胜率 60.40%',
    reasonEn: 'Win rate 60.40%'
  },
  'cassiopeia-vladimir': {
    reasonZh: '对线胜率 51.48%',
    reasonEn: 'Win rate 51.48%'
  },
  'chogath-aurora': {
    reasonZh: '对线胜率 58.65%',
    reasonEn: 'Win rate 58.65%'
  },
  'chogath-gangplank': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%'
  },
  'chogath-garen': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'chogath-heimerdinger': {
    reasonZh: '对线胜率 55.89%',
    reasonEn: 'Win rate 55.89%'
  },
  'chogath-lissandra': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%'
  },
  'chogath-malzahar': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'chogath-ryze': {
    reasonZh: '对线胜率 61.39%',
    reasonEn: 'Win rate 61.39%'
  },
  'chogath-swain': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%'
  },
  'chogath-veigar': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%'
  },
  'chogath-zed': {
    reasonZh: '对线胜率 54.80%',
    reasonEn: 'Win rate 54.80%'
  },
  'corki-aurelionsol': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%'
  },
  'corki-missfortune': {
    reasonZh: '对线胜率 53.25%',
    reasonEn: 'Win rate 53.25%'
  },
  'corki-swain': {
    reasonZh: '对线胜率 52.20%',
    reasonEn: 'Win rate 52.20%'
  },
  'corki-yunara': {
    reasonZh: '对线胜率 51.60%',
    reasonEn: 'Win rate 51.60%'
  },
  'corki-ziggs': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'darius-fiddlesticks': {
    reasonZh: '对线胜率 56.57%',
    reasonEn: 'Win rate 56.57%'
  },
  'darius-hecarim': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'darius-illaoi': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'darius-nasus': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%'
  },
  'darius-rengar': {
    reasonZh: '对线胜率 57.09%',
    reasonEn: 'Win rate 57.09%'
  },
  'darius-sejuani': {
    reasonZh: '对线胜率 56.63%',
    reasonEn: 'Win rate 56.63%'
  },
  'darius-shyvana': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%'
  },
  'darius-sion': {
    reasonZh: '对线胜率 53.32%',
    reasonEn: 'Win rate 53.32%'
  },
  'darius-sylas': {
    reasonZh: '对线胜率 56.23%',
    reasonEn: 'Win rate 56.23%'
  },
  'darius-udyr': {
    reasonZh: '对线胜率 54.77%',
    reasonEn: 'Win rate 54.77%'
  },
  'darius-vi': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'darius-viego': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%'
  },
  'darius-yasuo': {
    reasonZh: '对线胜率 56.87%',
    reasonEn: 'Win rate 56.87%'
  },
  'darius-zac': {
    reasonZh: '对线胜率 59.82%',
    reasonEn: 'Win rate 59.82%'
  },
  'diana-akshan': {
    reasonZh: '对线胜率 56.13%',
    reasonEn: 'Win rate 56.13%'
  },
  'diana-aurora': {
    reasonZh: '对线胜率 54.53%',
    reasonEn: 'Win rate 54.53%'
  },
  'diana-fizz': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'diana-malphite': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'diana-malzahar': {
    reasonZh: '对线胜率 54.40%',
    reasonEn: 'Win rate 54.40%'
  },
  'diana-naafiri': {
    reasonZh: '对线胜率 55.28%',
    reasonEn: 'Win rate 55.28%'
  },
  'diana-nidalee': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%'
  },
  'diana-pantheon': {
    reasonZh: '对线胜率 56.21%',
    reasonEn: 'Win rate 56.21%'
  },
  'diana-qiyana': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'diana-smolder': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'diana-twistedfate': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%'
  },
  'draven-aphelios': {
    reasonZh: '对线胜率 52.27%',
    reasonEn: 'Win rate 52.27%'
  },
  'draven-aurelionsol': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'draven-kaisa': {
    reasonZh: '对线胜率 52.89%',
    reasonEn: 'Win rate 52.89%'
  },
  'draven-kalista': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'draven-lucian': {
    reasonZh: '对线胜率 51.64%',
    reasonEn: 'Win rate 51.64%'
  },
  'drmundo-darius': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'drmundo-jax': {
    reasonZh: '对线胜率 57.55%',
    reasonEn: 'Win rate 57.55%'
  },
  'drmundo-kennen': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%'
  },
  'drmundo-malphite': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%'
  },
  'drmundo-pantheon': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%'
  },
  'drmundo-renekton': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%'
  },
  'drmundo-twistedfate': {
    reasonZh: '对线胜率 59.64%',
    reasonEn: 'Win rate 59.64%'
  },
  'drmundo-urgot': {
    reasonZh: '对线胜率 56.85%',
    reasonEn: 'Win rate 56.85%'
  },
  'ekko-azir': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%'
  },
  'ekko-gwen': {
    reasonZh: '对线胜率 56.21%',
    reasonEn: 'Win rate 56.21%'
  },
  'ekko-mel': {
    reasonZh: '对线胜率 58.47%',
    reasonEn: 'Win rate 58.47%'
  },
  'ekko-smolder': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%'
  },
  'ekko-syndra': {
    reasonZh: '对线胜率 55.34%',
    reasonEn: 'Win rate 55.34%'
  },
  'elise-hwei': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'elise-leblanc': {
    reasonZh: '对线胜率 60.47%',
    reasonEn: 'Win rate 60.47%'
  },
  'elise-lillia': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'elise-masteryi': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'elise-mel': {
    reasonZh: '对线胜率 65.56%',
    reasonEn: 'Win rate 65.56%'
  },
  'elise-soraka': {
    reasonZh: '对线胜率 52.04%',
    reasonEn: 'Win rate 52.04%'
  },
  'elise-swain': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%'
  },
  'elise-thresh': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'elise-xerath': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'evelynn-ambessa': {
    reasonZh: '对线胜率 56.66%',
    reasonEn: 'Win rate 56.66%'
  },
  'evelynn-gragas': {
    reasonZh: '对线胜率 56.62%',
    reasonEn: 'Win rate 56.62%'
  },
  'evelynn-gwen': {
    reasonZh: '对线胜率 63.25%',
    reasonEn: 'Win rate 63.25%'
  },
  'evelynn-lillia': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'evelynn-nunu': {
    reasonZh: '对线胜率 52.93%',
    reasonEn: 'Win rate 52.93%'
  },
  'evelynn-trundle': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'evelynn-zed': {
    reasonZh: '对线胜率 58.10%',
    reasonEn: 'Win rate 58.10%'
  },
  'ezreal-corki': {
    reasonZh: '对线胜率 50.84%',
    reasonEn: 'Win rate 50.84%'
  },
  'ezreal-mel': {
    reasonZh: '对线胜率 50.14%',
    reasonEn: 'Win rate 50.14%'
  },
  'ezreal-yunara': {
    reasonZh: '对线胜率 50.62%',
    reasonEn: 'Win rate 50.62%'
  },
  'fiddlesticks-ambessa': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'fiddlesticks-evelynn': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'fiddlesticks-graves': {
    reasonZh: '对线胜率 54.43%',
    reasonEn: 'Win rate 54.43%'
  },
  'fiddlesticks-ivern': {
    reasonZh: '对线胜率 52.44%',
    reasonEn: 'Win rate 52.44%'
  },
  'fiddlesticks-janna': {
    reasonZh: '对线胜率 52.66%',
    reasonEn: 'Win rate 52.66%'
  },
  'fiddlesticks-jax': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'fiddlesticks-lillia': {
    reasonZh: '对线胜率 53.59%',
    reasonEn: 'Win rate 53.59%'
  },
  'fiddlesticks-morgana': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'fiddlesticks-pyke': {
    reasonZh: '对线胜率 54.65%',
    reasonEn: 'Win rate 54.65%'
  },
  'fiddlesticks-renata': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%'
  },
  'fiddlesticks-taric': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'fiddlesticks-teemo': {
    reasonZh: '对线胜率 56.47%',
    reasonEn: 'Win rate 56.47%'
  },
  'fiora-kled': {
    reasonZh: '对线胜率 55.53%',
    reasonEn: 'Win rate 55.53%'
  },
  'fiora-ksante': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'fiora-masteryi': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'fiora-ornn': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'fiora-sylas': {
    reasonZh: '对线胜率 57.82%',
    reasonEn: 'Win rate 57.82%'
  },
  'fiora-zaahen': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'fizz-aurelionsol': {
    reasonZh: '对线胜率 57.76%',
    reasonEn: 'Win rate 57.76%'
  },
  'fizz-briar': {
    reasonZh: '对线胜率 55.28%',
    reasonEn: 'Win rate 55.28%'
  },
  'fizz-graves': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'fizz-gwen': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%'
  },
  'fizz-malphite': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'fizz-malzahar': {
    reasonZh: '对线胜率 53.82%',
    reasonEn: 'Win rate 53.82%'
  },
  'fizz-mel': {
    reasonZh: '对线胜率 60.07%',
    reasonEn: 'Win rate 60.07%'
  },
  'fizz-monkeyking': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'fizz-smolder': {
    reasonZh: '对线胜率 57.54%',
    reasonEn: 'Win rate 57.54%'
  },
  'fizz-syndra': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'fizz-udyr': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'fizz-xerath': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'galio-azir': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'galio-bard': {
    reasonZh: '对线胜率 52.10%',
    reasonEn: 'Win rate 52.10%'
  },
  'galio-cassiopeia': {
    reasonZh: '对线胜率 54.50%',
    reasonEn: 'Win rate 54.50%'
  },
  'galio-elise': {
    reasonZh: '对线胜率 62.14%',
    reasonEn: 'Win rate 62.14%'
  },
  'galio-irelia': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'galio-katarina': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'galio-sylas': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'galio-taliyah': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'gangplank-heimerdinger': {
    reasonZh: '对线胜率 57.62%',
    reasonEn: 'Win rate 57.62%'
  },
  'gangplank-jax': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'gangplank-renekton': {
    reasonZh: '对线胜率 55.53%',
    reasonEn: 'Win rate 55.53%'
  },
  'gangplank-singed': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'gangplank-twistedfate': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%'
  },
  'gangplank-yone': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'garen-drmundo': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'garen-gwen': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%'
  },
  'garen-irelia': {
    reasonZh: '对线胜率 54.62%',
    reasonEn: 'Win rate 54.62%'
  },
  'garen-jax': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'garen-ksante': {
    reasonZh: '对线胜率 55.31%',
    reasonEn: 'Win rate 55.31%'
  },
  'garen-malzahar': {
    reasonZh: '对线胜率 56.77%',
    reasonEn: 'Win rate 56.77%'
  },
  'garen-nasus': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'garen-poppy': {
    reasonZh: '对线胜率 54.70%',
    reasonEn: 'Win rate 54.70%'
  },
  'garen-sylas': {
    reasonZh: '对线胜率 59.10%',
    reasonEn: 'Win rate 59.10%'
  },
  'garen-twistedfate': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%'
  },
  'gnar-malzahar': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'gnar-ryze': {
    reasonZh: '对线胜率 53.04%',
    reasonEn: 'Win rate 53.04%'
  },
  'gnar-swain': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%'
  },
  'gnar-trundle': {
    reasonZh: '对线胜率 55.30%',
    reasonEn: 'Win rate 55.30%'
  },
  'gnar-volibear': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'gragas-akali': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'gragas-anivia': {
    reasonZh: '对线胜率 53.73%',
    reasonEn: 'Win rate 53.73%'
  },
  'gragas-azir': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%'
  },
  'gragas-belveth': {
    reasonZh: '对线胜率 58.25%',
    reasonEn: 'Win rate 58.25%'
  },
  'gragas-brand': {
    reasonZh: '对线胜率 65.38%',
    reasonEn: 'Win rate 65.38%'
  },
  'gragas-cassiopeia': {
    reasonZh: '对线胜率 64.79%',
    reasonEn: 'Win rate 64.79%'
  },
  'gragas-chogath': {
    reasonZh: '对线胜率 69.44%',
    reasonEn: 'Win rate 69.44%'
  },
  'gragas-ekko': {
    reasonZh: '对线胜率 60.14%',
    reasonEn: 'Win rate 60.14%'
  },
  'gragas-katarina': {
    reasonZh: '对线胜率 57.11%',
    reasonEn: 'Win rate 57.11%'
  },
  'gragas-kindred': {
    reasonZh: '对线胜率 54.37%',
    reasonEn: 'Win rate 54.37%'
  },
  'gragas-lissandra': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%'
  },
  'gragas-mel': {
    reasonZh: '对线胜率 60.22%',
    reasonEn: 'Win rate 60.22%'
  },
  'gragas-monkeyking': {
    reasonZh: '对线胜率 53.24%',
    reasonEn: 'Win rate 53.24%'
  },
  'gragas-naafiri': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'gragas-nunu': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'gragas-qiyana': {
    reasonZh: '对线胜率 59.81%',
    reasonEn: 'Win rate 59.81%'
  },
  'gragas-syndra': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'gragas-urgot': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'gragas-xinzhao': {
    reasonZh: '对线胜率 62.03%',
    reasonEn: 'Win rate 62.03%'
  },
  'gragas-yasuo': {
    reasonZh: '对线胜率 58.48%',
    reasonEn: 'Win rate 58.48%'
  },
  'gragas-zoe': {
    reasonZh: '对线胜率 57.27%',
    reasonEn: 'Win rate 57.27%'
  },
  'graves-ambessa': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'graves-jax': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'graves-qiyana': {
    reasonZh: '对线胜率 53.05%',
    reasonEn: 'Win rate 53.05%'
  },
  'graves-quinn': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'graves-volibear': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'gwen-akshan': {
    reasonZh: '对线胜率 59.63%',
    reasonEn: 'Win rate 59.63%'
  },
  'gwen-brand': {
    reasonZh: '对线胜率 69.39%',
    reasonEn: 'Win rate 69.39%'
  },
  'gwen-drmundo': {
    reasonZh: '对线胜率 54.56%',
    reasonEn: 'Win rate 54.56%'
  },
  'gwen-graves': {
    reasonZh: '对线胜率 53.77%',
    reasonEn: 'Win rate 53.77%'
  },
  'gwen-hwei': {
    reasonZh: '对线胜率 61.90%',
    reasonEn: 'Win rate 61.90%'
  },
  'gwen-leblanc': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'gwen-lux': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'gwen-mel': {
    reasonZh: '对线胜率 60.23%',
    reasonEn: 'Win rate 60.23%'
  },
  'gwen-nidalee': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'gwen-ryze': {
    reasonZh: '对线胜率 66.17%',
    reasonEn: 'Win rate 66.17%'
  },
  'gwen-skarner': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%'
  },
  'gwen-sylas': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'gwen-taliyah': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%'
  },
  'gwen-trundle': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%'
  },
  'gwen-velkoz': {
    reasonZh: '对线胜率 63.29%',
    reasonEn: 'Win rate 63.29%'
  },
  'gwen-vex': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'gwen-viktor': {
    reasonZh: '对线胜率 56.62%',
    reasonEn: 'Win rate 56.62%'
  },
  'gwen-volibear': {
    reasonZh: '对线胜率 63.79%',
    reasonEn: 'Win rate 63.79%'
  },
  'gwen-xerath': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%'
  },
  'gwen-zoe': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%'
  },
  'hecarim-ambessa': {
    reasonZh: '对线胜率 55.23%',
    reasonEn: 'Win rate 55.23%'
  },
  'hecarim-naafiri': {
    reasonZh: '对线胜率 55.21%',
    reasonEn: 'Win rate 55.21%'
  },
  'hecarim-quinn': {
    reasonZh: '对线胜率 54.10%',
    reasonEn: 'Win rate 54.10%'
  },
  'hecarim-teemo': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%'
  },
  'hecarim-zed': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'heimerdinger-aatrox': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'heimerdinger-darius': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'heimerdinger-fiora': {
    reasonZh: '对线胜率 55.21%',
    reasonEn: 'Win rate 55.21%'
  },
  'heimerdinger-gnar': {
    reasonZh: '对线胜率 54.18%',
    reasonEn: 'Win rate 54.18%'
  },
  'heimerdinger-kled': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'heimerdinger-masteryi': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%'
  },
  'heimerdinger-rumble': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'heimerdinger-swain': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%'
  },
  'heimerdinger-udyr': {
    reasonZh: '对线胜率 62.75%',
    reasonEn: 'Win rate 62.75%'
  },
  'heimerdinger-urgot': {
    reasonZh: '对线胜率 57.30%',
    reasonEn: 'Win rate 57.30%'
  },
  'heimerdinger-volibear': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%'
  },
  'hwei-aphelios': {
    reasonZh: '对线胜率 58.19%',
    reasonEn: 'Win rate 58.19%'
  },
  'hwei-aurelionsol': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'hwei-braum': {
    reasonZh: '对线胜率 52.47%',
    reasonEn: 'Win rate 52.47%'
  },
  'hwei-lucian': {
    reasonZh: '对线胜率 55.23%',
    reasonEn: 'Win rate 55.23%'
  },
  'hwei-mel': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%'
  },
  'hwei-missfortune': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'hwei-samira': {
    reasonZh: '对线胜率 57.08%',
    reasonEn: 'Win rate 57.08%'
  },
  'hwei-senna': {
    reasonZh: '对线胜率 51.10%',
    reasonEn: 'Win rate 51.10%'
  },
  'hwei-sivir': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'hwei-taric': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%'
  },
  'hwei-zeri': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'illaoi-camille': {
    reasonZh: '对线胜率 54.61%',
    reasonEn: 'Win rate 54.61%'
  },
  'illaoi-jax': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'illaoi-sylas': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'illaoi-tahmkench': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%'
  },
  'illaoi-xinzhao': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'irelia-anivia': {
    reasonZh: '对线胜率 56.59%',
    reasonEn: 'Win rate 56.59%'
  },
  'irelia-aurora': {
    reasonZh: '对线胜率 57.03%',
    reasonEn: 'Win rate 57.03%'
  },
  'irelia-kayle': {
    reasonZh: '对线胜率 54.99%',
    reasonEn: 'Win rate 54.99%'
  },
  'irelia-malzahar': {
    reasonZh: '对线胜率 57.59%',
    reasonEn: 'Win rate 57.59%'
  },
  'irelia-ryze': {
    reasonZh: '对线胜率 54.08%',
    reasonEn: 'Win rate 54.08%'
  },
  'irelia-varus': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'irelia-zed': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%'
  },
  'ivern-hecarim': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%'
  },
  'ivern-karthus': {
    reasonZh: '对线胜率 58.75%',
    reasonEn: 'Win rate 58.75%'
  },
  'ivern-leesin': {
    reasonZh: '对线胜率 53.14%',
    reasonEn: 'Win rate 53.14%'
  },
  'ivern-qiyana': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'ivern-quinn': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%'
  },
  'ivern-reksai': {
    reasonZh: '对线胜率 53.43%',
    reasonEn: 'Win rate 53.43%'
  },
  'ivern-sejuani': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'ivern-trundle': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'ivern-udyr': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'ivern-zyra': {
    reasonZh: '对线胜率 62.63%',
    reasonEn: 'Win rate 62.63%'
  },
  'janna-alistar': {
    reasonZh: '对线胜率 53.86%',
    reasonEn: 'Win rate 53.86%'
  },
  'janna-anivia': {
    reasonZh: '对线胜率 57.55%',
    reasonEn: 'Win rate 57.55%'
  },
  'janna-galio': {
    reasonZh: '对线胜率 55.69%',
    reasonEn: 'Win rate 55.69%'
  },
  'janna-hwei': {
    reasonZh: '对线胜率 62.83%',
    reasonEn: 'Win rate 62.83%'
  },
  'janna-morgana': {
    reasonZh: '对线胜率 53.65%',
    reasonEn: 'Win rate 53.65%'
  },
  'janna-pantheon': {
    reasonZh: '对线胜率 55.98%',
    reasonEn: 'Win rate 55.98%'
  },
  'janna-zoe': {
    reasonZh: '对线胜率 55.82%',
    reasonEn: 'Win rate 55.82%'
  },
  'jarvaniv-ambessa': {
    reasonZh: '对线胜率 53.46%',
    reasonEn: 'Win rate 53.46%'
  },
  'jarvaniv-gragas': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%'
  },
  'jarvaniv-gwen': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'jarvaniv-quinn': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'jarvaniv-zac': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'jax-irelia': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'jax-ivern': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%'
  },
  'jax-masteryi': {
    reasonZh: '对线胜率 61.27%',
    reasonEn: 'Win rate 61.27%'
  },
  'jax-ryze': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'jax-trundle': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'jax-xinzhao': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'jayce-ahri': {
    reasonZh: '对线胜率 52.60%',
    reasonEn: 'Win rate 52.60%'
  },
  'jayce-aurelionsol': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%'
  },
  'jayce-aurora': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%'
  },
  'jayce-azir': {
    reasonZh: '对线胜率 56.84%',
    reasonEn: 'Win rate 56.84%'
  },
  'jayce-diana': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%'
  },
  'jayce-gragas': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'jayce-smolder': {
    reasonZh: '对线胜率 62.75%',
    reasonEn: 'Win rate 62.75%'
  },
  'jayce-volibear': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%'
  },
  'jayce-warwick': {
    reasonZh: '对线胜率 54.68%',
    reasonEn: 'Win rate 54.68%'
  },
  'jayce-yone': {
    reasonZh: '对线胜率 57.70%',
    reasonEn: 'Win rate 57.70%'
  },
  'jhin-caitlyn': {
    reasonZh: '对线胜率 51.62%',
    reasonEn: 'Win rate 51.62%'
  },
  'jhin-corki': {
    reasonZh: '对线胜率 52.26%',
    reasonEn: 'Win rate 52.26%'
  },
  'jhin-ezreal': {
    reasonZh: '对线胜率 51.99%',
    reasonEn: 'Win rate 51.99%'
  },
  'jhin-mel': {
    reasonZh: '对线胜率 52.68%',
    reasonEn: 'Win rate 52.68%'
  },
  'jhin-smolder': {
    reasonZh: '对线胜率 50.68%',
    reasonEn: 'Win rate 50.68%'
  },
  'jinx-corki': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'jinx-kaisa': {
    reasonZh: '对线胜率 54.36%',
    reasonEn: 'Win rate 54.36%'
  },
  'jinx-lucian': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'jinx-mel': {
    reasonZh: '对线胜率 53.48%',
    reasonEn: 'Win rate 53.48%'
  },
  'jinx-samira': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'kaisa-ezreal': {
    reasonZh: '对线胜率 51.72%',
    reasonEn: 'Win rate 51.72%'
  },
  'kaisa-hwei': {
    reasonZh: '对线胜率 50.28%',
    reasonEn: 'Win rate 50.28%'
  },
  'kaisa-jhin': {
    reasonZh: '对线胜率 51.87%',
    reasonEn: 'Win rate 51.87%'
  },
  'kaisa-mel': {
    reasonZh: '对线胜率 50.27%',
    reasonEn: 'Win rate 50.27%'
  },
  'kaisa-ziggs': {
    reasonZh: '对线胜率 51.55%',
    reasonEn: 'Win rate 51.55%'
  },
  'kalista-corki': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'kalista-ezreal': {
    reasonZh: '对线胜率 51.28%',
    reasonEn: 'Win rate 51.28%'
  },
  'kalista-jhin': {
    reasonZh: '对线胜率 51.99%',
    reasonEn: 'Win rate 51.99%'
  },
  'kalista-katarina': {
    reasonZh: '对线胜率 52.38%',
    reasonEn: 'Win rate 52.38%'
  },
  'kalista-lux': {
    reasonZh: '对线胜率 60.50%',
    reasonEn: 'Win rate 60.50%'
  },
  'karma-mel': {
    reasonZh: '对线胜率 60.86%',
    reasonEn: 'Win rate 60.86%'
  },
  'karma-morgana': {
    reasonZh: '对线胜率 52.50%',
    reasonEn: 'Win rate 52.50%'
  },
  'karma-shen': {
    reasonZh: '对线胜率 53.63%',
    reasonEn: 'Win rate 53.63%'
  },
  'karma-swain': {
    reasonZh: '对线胜率 52.52%',
    reasonEn: 'Win rate 52.52%'
  },
  'karma-xerath': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'karthus-ashe': {
    reasonZh: '对线胜率 57.55%',
    reasonEn: 'Win rate 57.55%'
  },
  'karthus-ezreal': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'karthus-jhin': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'karthus-kaisa': {
    reasonZh: '对线胜率 56.40%',
    reasonEn: 'Win rate 56.40%'
  },
  'karthus-kogmaw': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'karthus-mel': {
    reasonZh: '对线胜率 63.81%',
    reasonEn: 'Win rate 63.81%'
  },
  'karthus-missfortune': {
    reasonZh: '对线胜率 54.50%',
    reasonEn: 'Win rate 54.50%'
  },
  'karthus-smolder': {
    reasonZh: '对线胜率 54.18%',
    reasonEn: 'Win rate 54.18%'
  },
  'karthus-xayah': {
    reasonZh: '对线胜率 57.39%',
    reasonEn: 'Win rate 57.39%'
  },
  'karthus-yasuo': {
    reasonZh: '对线胜率 64.89%',
    reasonEn: 'Win rate 64.89%'
  },
  'karthus-yunara': {
    reasonZh: '对线胜率 58.56%',
    reasonEn: 'Win rate 58.56%'
  },
  'karthus-ziggs': {
    reasonZh: '对线胜率 58.21%',
    reasonEn: 'Win rate 58.21%'
  },
  'karthus-zyra': {
    reasonZh: '对线胜率 58.14%',
    reasonEn: 'Win rate 58.14%'
  },
  'kassadin-azir': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'kassadin-leblanc': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%'
  },
  'kassadin-mel': {
    reasonZh: '对线胜率 59.23%',
    reasonEn: 'Win rate 59.23%'
  },
  'kassadin-orianna': {
    reasonZh: '对线胜率 55.73%',
    reasonEn: 'Win rate 55.73%'
  },
  'kassadin-smolder': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'katarina-aurelionsol': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%'
  },
  'katarina-aurora': {
    reasonZh: '对线胜率 53.42%',
    reasonEn: 'Win rate 53.42%'
  },
  'katarina-hwei': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'katarina-jhin': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'katarina-jinx': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'katarina-karthus': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'katarina-kogmaw': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'katarina-missfortune': {
    reasonZh: '对线胜率 54.51%',
    reasonEn: 'Win rate 54.51%'
  },
  'katarina-nunu': {
    reasonZh: '对线胜率 57.33%',
    reasonEn: 'Win rate 57.33%'
  },
  'katarina-sivir': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%'
  },
  'katarina-smolder': {
    reasonZh: '对线胜率 59.56%',
    reasonEn: 'Win rate 59.56%'
  },
  'katarina-swain': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%'
  },
  'katarina-syndra': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%'
  },
  'katarina-twitch': {
    reasonZh: '对线胜率 60.24%',
    reasonEn: 'Win rate 60.24%'
  },
  'katarina-veigar': {
    reasonZh: '对线胜率 53.46%',
    reasonEn: 'Win rate 53.46%'
  },
  'katarina-velkoz': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'kayle-akali': {
    reasonZh: '对线胜率 53.77%',
    reasonEn: 'Win rate 53.77%'
  },
  'kayle-chogath': {
    reasonZh: '对线胜率 54.66%',
    reasonEn: 'Win rate 54.66%'
  },
  'kayle-darius': {
    reasonZh: '对线胜率 53.28%',
    reasonEn: 'Win rate 53.28%'
  },
  'kayle-fizz': {
    reasonZh: '对线胜率 55.14%',
    reasonEn: 'Win rate 55.14%'
  },
  'kayle-galio': {
    reasonZh: '对线胜率 57.61%',
    reasonEn: 'Win rate 57.61%'
  },
  'kayle-garen': {
    reasonZh: '对线胜率 54.98%',
    reasonEn: 'Win rate 54.98%'
  },
  'kayle-heimerdinger': {
    reasonZh: '对线胜率 56.87%',
    reasonEn: 'Win rate 56.87%'
  },
  'kayle-katarina': {
    reasonZh: '对线胜率 54.71%',
    reasonEn: 'Win rate 54.71%'
  },
  'kayle-ksante': {
    reasonZh: '对线胜率 58.96%',
    reasonEn: 'Win rate 58.96%'
  },
  'kayle-leblanc': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'kayle-lissandra': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'kayle-malzahar': {
    reasonZh: '对线胜率 65.05%',
    reasonEn: 'Win rate 65.05%'
  },
  'kayle-mel': {
    reasonZh: '对线胜率 64.60%',
    reasonEn: 'Win rate 64.60%'
  },
  'kayle-naafiri': {
    reasonZh: '对线胜率 62.20%',
    reasonEn: 'Win rate 62.20%'
  },
  'kayle-shen': {
    reasonZh: '对线胜率 53.43%',
    reasonEn: 'Win rate 53.43%'
  },
  'kayle-singed': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'kayle-udyr': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'kayle-vex': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'kayle-yorick': {
    reasonZh: '对线胜率 57.20%',
    reasonEn: 'Win rate 57.20%'
  },
  'kayn-jayce': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'kayn-malphite': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'kayn-naafiri': {
    reasonZh: '对线胜率 53.11%',
    reasonEn: 'Win rate 53.11%'
  },
  'kayn-pantheon': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%'
  },
  'kayn-zed': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%'
  },
  'kennen-aatrox': {
    reasonZh: '对线胜率 57.42%',
    reasonEn: 'Win rate 57.42%'
  },
  'kennen-gwen': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%'
  },
  'kennen-malzahar': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%'
  },
  'kennen-trundle': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'kennen-twistedfate': {
    reasonZh: '对线胜率 57.47%',
    reasonEn: 'Win rate 57.47%'
  },
  'kennen-urgot': {
    reasonZh: '对线胜率 54.37%',
    reasonEn: 'Win rate 54.37%'
  },
  'khazix-gwen': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'khazix-jayce': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%'
  },
  'khazix-skarner': {
    reasonZh: '对线胜率 53.74%',
    reasonEn: 'Win rate 53.74%'
  },
  'khazix-teemo': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%'
  },
  'khazix-zed': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%'
  },
  'kindred-ambessa': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'kindred-darius': {
    reasonZh: '对线胜率 57.84%',
    reasonEn: 'Win rate 57.84%'
  },
  'kindred-fizz': {
    reasonZh: '对线胜率 62.75%',
    reasonEn: 'Win rate 62.75%'
  },
  'kindred-malphite': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%'
  },
  'kindred-vi': {
    reasonZh: '对线胜率 52.97%',
    reasonEn: 'Win rate 52.97%'
  },
  'kindred-zed': {
    reasonZh: '对线胜率 56.57%',
    reasonEn: 'Win rate 56.57%'
  },
  'kled-akali': {
    reasonZh: '对线胜率 56.81%',
    reasonEn: 'Win rate 56.81%'
  },
  'kled-drmundo': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'kled-malzahar': {
    reasonZh: '对线胜率 62.00%',
    reasonEn: 'Win rate 62.00%'
  },
  'kled-olaf': {
    reasonZh: '对线胜率 53.39%',
    reasonEn: 'Win rate 53.39%'
  },
  'kled-quinn': {
    reasonZh: '对线胜率 54.03%',
    reasonEn: 'Win rate 54.03%'
  },
  'kled-shen': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'kled-tryndamere': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%'
  },
  'kled-varus': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%'
  },
  'kled-xinzhao': {
    reasonZh: '对线胜率 56.70%',
    reasonEn: 'Win rate 56.70%'
  },
  'kled-yasuo': {
    reasonZh: '对线胜率 61.89%',
    reasonEn: 'Win rate 61.89%'
  },
  'kogmaw-draven': {
    reasonZh: '对线胜率 56.89%',
    reasonEn: 'Win rate 56.89%'
  },
  'kogmaw-hwei': {
    reasonZh: '对线胜率 56.14%',
    reasonEn: 'Win rate 56.14%'
  },
  'kogmaw-kaisa': {
    reasonZh: '对线胜率 54.56%',
    reasonEn: 'Win rate 54.56%'
  },
  'kogmaw-kalista': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'kogmaw-sivir': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'kogmaw-swain': {
    reasonZh: '对线胜率 60.33%',
    reasonEn: 'Win rate 60.33%'
  },
  'kogmaw-teemo': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'ksante-chogath': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%'
  },
  'ksante-mordekaiser': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'ksante-nasus': {
    reasonZh: '对线胜率 58.31%',
    reasonEn: 'Win rate 58.31%'
  },
  'ksante-sylas': {
    reasonZh: '对线胜率 53.36%',
    reasonEn: 'Win rate 53.36%'
  },
  'ksante-tahmkench': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'leblanc-brand': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'leblanc-malphite': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'leblanc-neeko': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'leblanc-pyke': {
    reasonZh: '对线胜率 53.55%',
    reasonEn: 'Win rate 53.55%'
  },
  'leblanc-smolder': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'leblanc-swain': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'leblanc-ziggs': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%'
  },
  'leblanc-zilean': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'leesin-ambessa': {
    reasonZh: '对线胜率 54.63%',
    reasonEn: 'Win rate 54.63%'
  },
  'leesin-fizz': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'leesin-malphite': {
    reasonZh: '对线胜率 56.73%',
    reasonEn: 'Win rate 56.73%'
  },
  'leesin-teemo': {
    reasonZh: '对线胜率 53.43%',
    reasonEn: 'Win rate 53.43%'
  },
  'leesin-zed': {
    reasonZh: '对线胜率 56.21%',
    reasonEn: 'Win rate 56.21%'
  },
  'leona-hwei': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%'
  },
  'leona-mel': {
    reasonZh: '对线胜率 60.52%',
    reasonEn: 'Win rate 60.52%'
  },
  'leona-nautilus': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'leona-sona': {
    reasonZh: '对线胜率 52.21%',
    reasonEn: 'Win rate 52.21%'
  },
  'leona-sylas': {
    reasonZh: '对线胜率 57.61%',
    reasonEn: 'Win rate 57.61%'
  },
  'leona-thresh': {
    reasonZh: '对线胜率 50.65%',
    reasonEn: 'Win rate 50.65%'
  },
  'leona-yuumi': {
    reasonZh: '对线胜率 56.24%',
    reasonEn: 'Win rate 56.24%'
  },
  'leona-zoe': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'lillia-ambessa': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%'
  },
  'lillia-amumu': {
    reasonZh: '对线胜率 56.20%',
    reasonEn: 'Win rate 56.20%'
  },
  'lillia-pantheon': {
    reasonZh: '对线胜率 59.67%',
    reasonEn: 'Win rate 59.67%'
  },
  'lillia-reksai': {
    reasonZh: '对线胜率 51.09%',
    reasonEn: 'Win rate 51.09%'
  },
  'lillia-skarner': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'lillia-teemo': {
    reasonZh: '对线胜率 56.12%',
    reasonEn: 'Win rate 56.12%'
  },
  'lillia-zaahen': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%'
  },
  'lissandra-akali': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%'
  },
  'lissandra-jayce': {
    reasonZh: '对线胜率 57.94%',
    reasonEn: 'Win rate 57.94%'
  },
  'lissandra-naafiri': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'lissandra-riven': {
    reasonZh: '对线胜率 57.27%',
    reasonEn: 'Win rate 57.27%'
  },
  'lissandra-smolder': {
    reasonZh: '对线胜率 57.08%',
    reasonEn: 'Win rate 57.08%'
  },
  'lissandra-yone': {
    reasonZh: '对线胜率 56.11%',
    reasonEn: 'Win rate 56.11%'
  },
  'lucian-corki': {
    reasonZh: '对线胜率 50.56%',
    reasonEn: 'Win rate 50.56%'
  },
  'lucian-ezreal': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'lucian-kalista': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'lucian-katarina': {
    reasonZh: '对线胜率 50.30%',
    reasonEn: 'Win rate 50.30%'
  },
  'lucian-zeri': {
    reasonZh: '对线胜率 50.48%',
    reasonEn: 'Win rate 50.48%'
  },
  'lulu-leblanc': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%'
  },
  'lulu-mel': {
    reasonZh: '对线胜率 60.07%',
    reasonEn: 'Win rate 60.07%'
  },
  'lulu-shaco': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'lulu-swain': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'lulu-sylas': {
    reasonZh: '对线胜率 53.47%',
    reasonEn: 'Win rate 53.47%'
  },
  'lux-brand': {
    reasonZh: '对线胜率 58.73%',
    reasonEn: 'Win rate 58.73%'
  },
  'lux-caitlyn': {
    reasonZh: '对线胜率 57.34%',
    reasonEn: 'Win rate 57.34%'
  },
  'lux-corki': {
    reasonZh: '对线胜率 60.68%',
    reasonEn: 'Win rate 60.68%'
  },
  'lux-karthus': {
    reasonZh: '对线胜率 58.12%',
    reasonEn: 'Win rate 58.12%'
  },
  'lux-mel': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%'
  },
  'lux-nilah': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'lux-nunu': {
    reasonZh: '对线胜率 61.05%',
    reasonEn: 'Win rate 61.05%'
  },
  'lux-samira': {
    reasonZh: '对线胜率 55.76%',
    reasonEn: 'Win rate 55.76%'
  },
  'lux-senna': {
    reasonZh: '对线胜率 51.33%',
    reasonEn: 'Win rate 51.33%'
  },
  'lux-smolder': {
    reasonZh: '对线胜率 63.32%',
    reasonEn: 'Win rate 63.32%'
  },
  'lux-taliyah': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'lux-varus': {
    reasonZh: '对线胜率 58.01%',
    reasonEn: 'Win rate 58.01%'
  },
  'lux-velkoz': {
    reasonZh: '对线胜率 56.79%',
    reasonEn: 'Win rate 56.79%'
  },
  'lux-xayah': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'lux-ziggs': {
    reasonZh: '对线胜率 54.89%',
    reasonEn: 'Win rate 54.89%'
  },
  'malphite-aatrox': {
    reasonZh: '对线胜率 54.62%',
    reasonEn: 'Win rate 54.62%'
  },
  'malphite-gnar': {
    reasonZh: '对线胜率 55.96%',
    reasonEn: 'Win rate 55.96%'
  },
  'malphite-irelia': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'malphite-jayce': {
    reasonZh: '对线胜率 61.43%',
    reasonEn: 'Win rate 61.43%'
  },
  'malphite-kayle': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'malphite-khazix': {
    reasonZh: '对线胜率 54.82%',
    reasonEn: 'Win rate 54.82%'
  },
  'malphite-naafiri': {
    reasonZh: '对线胜率 61.46%',
    reasonEn: 'Win rate 61.46%'
  },
  'malphite-pantheon': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%'
  },
  'malphite-qiyana': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'malphite-quinn': {
    reasonZh: '对线胜率 58.92%',
    reasonEn: 'Win rate 58.92%'
  },
  'malphite-teemo': {
    reasonZh: '对线胜率 53.32%',
    reasonEn: 'Win rate 53.32%'
  },
  'malphite-tryndamere': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%'
  },
  'malphite-twistedfate': {
    reasonZh: '对线胜率 57.05%',
    reasonEn: 'Win rate 57.05%'
  },
  'malphite-varus': {
    reasonZh: '对线胜率 55.99%',
    reasonEn: 'Win rate 55.99%'
  },
  'malphite-vayne': {
    reasonZh: '对线胜率 61.25%',
    reasonEn: 'Win rate 61.25%'
  },
  'malzahar-anivia': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%'
  },
  'malzahar-leblanc': {
    reasonZh: '对线胜率 54.51%',
    reasonEn: 'Win rate 54.51%'
  },
  'malzahar-mel': {
    reasonZh: '对线胜率 56.43%',
    reasonEn: 'Win rate 56.43%'
  },
  'malzahar-nunu': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%'
  },
  'malzahar-shen': {
    reasonZh: '对线胜率 52.60%',
    reasonEn: 'Win rate 52.60%'
  },
  'malzahar-vladimir': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'malzahar-yasuo': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'malzahar-zoe': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'maokai-amumu': {
    reasonZh: '对线胜率 62.12%',
    reasonEn: 'Win rate 62.12%'
  },
  'maokai-anivia': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'maokai-bard': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%'
  },
  'maokai-karma': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'maokai-leblanc': {
    reasonZh: '对线胜率 65.00%',
    reasonEn: 'Win rate 65.00%'
  },
  'maokai-lulu': {
    reasonZh: '对线胜率 52.37%',
    reasonEn: 'Win rate 52.37%'
  },
  'maokai-pyke': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'maokai-rakan': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%'
  },
  'maokai-rell': {
    reasonZh: '对线胜率 51.46%',
    reasonEn: 'Win rate 51.46%'
  },
  'maokai-soraka': {
    reasonZh: '对线胜率 54.23%',
    reasonEn: 'Win rate 54.23%'
  },
  'maokai-xerath': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'maokai-zoe': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%'
  },
  'masteryi-gwen': {
    reasonZh: '对线胜率 62.34%',
    reasonEn: 'Win rate 62.34%'
  },
  'masteryi-jarvaniv': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'masteryi-karthus': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'masteryi-kennen': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%'
  },
  'masteryi-nocturne': {
    reasonZh: '对线胜率 51.35%',
    reasonEn: 'Win rate 51.35%'
  },
  'masteryi-quinn': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'masteryi-rengar': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'masteryi-rumble': {
    reasonZh: '对线胜率 54.63%',
    reasonEn: 'Win rate 54.63%'
  },
  'masteryi-yone': {
    reasonZh: '对线胜率 54.85%',
    reasonEn: 'Win rate 54.85%'
  },
  'masteryi-zed': {
    reasonZh: '对线胜率 56.78%',
    reasonEn: 'Win rate 56.78%'
  },
  'mel-smolder': {
    reasonZh: '对线胜率 63.44%',
    reasonEn: 'Win rate 63.44%'
  },
  'milio-leblanc': {
    reasonZh: '对线胜率 58.15%',
    reasonEn: 'Win rate 58.15%'
  },
  'milio-mel': {
    reasonZh: '对线胜率 62.60%',
    reasonEn: 'Win rate 62.60%'
  },
  'milio-morgana': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%'
  },
  'milio-neeko': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'milio-swain': {
    reasonZh: '对线胜率 56.80%',
    reasonEn: 'Win rate 56.80%'
  },
  'milio-sylas': {
    reasonZh: '对线胜率 57.18%',
    reasonEn: 'Win rate 57.18%'
  },
  'missfortune-ezreal': {
    reasonZh: '对线胜率 51.67%',
    reasonEn: 'Win rate 51.67%'
  },
  'missfortune-kaisa': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'missfortune-kalista': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'missfortune-mel': {
    reasonZh: '对线胜率 52.84%',
    reasonEn: 'Win rate 52.84%'
  },
  'missfortune-varus': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'monkeyking-anivia': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'monkeyking-belveth': {
    reasonZh: '对线胜率 52.60%',
    reasonEn: 'Win rate 52.60%'
  },
  'monkeyking-briar': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'monkeyking-camille': {
    reasonZh: '对线胜率 55.20%',
    reasonEn: 'Win rate 55.20%'
  },
  'monkeyking-darius': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%'
  },
  'monkeyking-kayn': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%'
  },
  'monkeyking-masteryi': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'monkeyking-olaf': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'monkeyking-qiyana': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'monkeyking-quinn': {
    reasonZh: '对线胜率 57.21%',
    reasonEn: 'Win rate 57.21%'
  },
  'monkeyking-talon': {
    reasonZh: '对线胜率 52.67%',
    reasonEn: 'Win rate 52.67%'
  },
  'monkeyking-tryndamere': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%'
  },
  'monkeyking-yone': {
    reasonZh: '对线胜率 56.22%',
    reasonEn: 'Win rate 56.22%'
  },
  'monkeyking-zed': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'mordekaiser-chogath': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%'
  },
  'mordekaiser-malphite': {
    reasonZh: '对线胜率 53.64%',
    reasonEn: 'Win rate 53.64%'
  },
  'mordekaiser-twistedfate': {
    reasonZh: '对线胜率 54.14%',
    reasonEn: 'Win rate 54.14%'
  },
  'mordekaiser-udyr': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'mordekaiser-xinzhao': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%'
  },
  'morgana-alistar': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%'
  },
  'morgana-hwei': {
    reasonZh: '对线胜率 57.04%',
    reasonEn: 'Win rate 57.04%'
  },
  'morgana-leblanc': {
    reasonZh: '对线胜率 60.56%',
    reasonEn: 'Win rate 60.56%'
  },
  'morgana-leona': {
    reasonZh: '对线胜率 51.66%',
    reasonEn: 'Win rate 51.66%'
  },
  'morgana-maokai': {
    reasonZh: '对线胜率 55.40%',
    reasonEn: 'Win rate 55.40%'
  },
  'morgana-mel': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'morgana-renata': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%'
  },
  'morgana-taric': {
    reasonZh: '对线胜率 52.51%',
    reasonEn: 'Win rate 52.51%'
  },
  'naafiri-aurora': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'naafiri-cassiopeia': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'naafiri-ivern': {
    reasonZh: '对线胜率 57.36%',
    reasonEn: 'Win rate 57.36%'
  },
  'naafiri-khazix': {
    reasonZh: '对线胜率 56.07%',
    reasonEn: 'Win rate 56.07%'
  },
  'naafiri-leblanc': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%'
  },
  'naafiri-lux': {
    reasonZh: '对线胜率 56.01%',
    reasonEn: 'Win rate 56.01%'
  },
  'naafiri-ryze': {
    reasonZh: '对线胜率 53.74%',
    reasonEn: 'Win rate 53.74%'
  },
  'naafiri-shaco': {
    reasonZh: '对线胜率 51.53%',
    reasonEn: 'Win rate 51.53%'
  },
  'naafiri-smolder': {
    reasonZh: '对线胜率 62.61%',
    reasonEn: 'Win rate 62.61%'
  },
  'naafiri-sylas': {
    reasonZh: '对线胜率 57.67%',
    reasonEn: 'Win rate 57.67%'
  },
  'naafiri-twistedfate': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'naafiri-veigar': {
    reasonZh: '对线胜率 52.97%',
    reasonEn: 'Win rate 52.97%'
  },
  'naafiri-velkoz': {
    reasonZh: '对线胜率 57.20%',
    reasonEn: 'Win rate 57.20%'
  },
  'naafiri-zoe': {
    reasonZh: '对线胜率 57.40%',
    reasonEn: 'Win rate 57.40%'
  },
  'nami-fiddlesticks': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%'
  },
  'nami-mel': {
    reasonZh: '对线胜率 57.17%',
    reasonEn: 'Win rate 57.17%'
  },
  'nami-pantheon': {
    reasonZh: '对线胜率 53.00%',
    reasonEn: 'Win rate 53.00%'
  },
  'nami-poppy': {
    reasonZh: '对线胜率 53.11%',
    reasonEn: 'Win rate 53.11%'
  },
  'nami-zoe': {
    reasonZh: '对线胜率 55.51%',
    reasonEn: 'Win rate 55.51%'
  },
  'nasus-ambessa': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'nasus-briar': {
    reasonZh: '对线胜率 57.91%',
    reasonEn: 'Win rate 57.91%'
  },
  'nasus-evelynn': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%'
  },
  'nasus-fiddlesticks': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%'
  },
  'nasus-graves': {
    reasonZh: '对线胜率 53.45%',
    reasonEn: 'Win rate 53.45%'
  },
  'nasus-hecarim': {
    reasonZh: '对线胜率 58.05%',
    reasonEn: 'Win rate 58.05%'
  },
  'nasus-irelia': {
    reasonZh: '对线胜率 54.77%',
    reasonEn: 'Win rate 54.77%'
  },
  'nasus-khazix': {
    reasonZh: '对线胜率 53.26%',
    reasonEn: 'Win rate 53.26%'
  },
  'nasus-kindred': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%'
  },
  'nasus-lillia': {
    reasonZh: '对线胜率 60.28%',
    reasonEn: 'Win rate 60.28%'
  },
  'nasus-nocturne': {
    reasonZh: '对线胜率 54.18%',
    reasonEn: 'Win rate 54.18%'
  },
  'nasus-nunu': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'nasus-poppy': {
    reasonZh: '对线胜率 56.73%',
    reasonEn: 'Win rate 56.73%'
  },
  'nasus-quinn': {
    reasonZh: '对线胜率 54.58%',
    reasonEn: 'Win rate 54.58%'
  },
  'nasus-rengar': {
    reasonZh: '对线胜率 57.59%',
    reasonEn: 'Win rate 57.59%'
  },
  'nasus-shyvana': {
    reasonZh: '对线胜率 58.39%',
    reasonEn: 'Win rate 58.39%'
  },
  'nasus-taliyah': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%'
  },
  'nasus-teemo': {
    reasonZh: '对线胜率 60.98%',
    reasonEn: 'Win rate 60.98%'
  },
  'nasus-vi': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'nasus-viego': {
    reasonZh: '对线胜率 56.56%',
    reasonEn: 'Win rate 56.56%'
  },
  'nasus-warwick': {
    reasonZh: '对线胜率 59.62%',
    reasonEn: 'Win rate 59.62%'
  },
  'nautilus-anivia': {
    reasonZh: '对线胜率 54.94%',
    reasonEn: 'Win rate 54.94%'
  },
  'nautilus-karma': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'nautilus-mel': {
    reasonZh: '对线胜率 60.57%',
    reasonEn: 'Win rate 60.57%'
  },
  'nautilus-nami': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%'
  },
  'nautilus-yuumi': {
    reasonZh: '对线胜率 55.20%',
    reasonEn: 'Win rate 55.20%'
  },
  'nautilus-zoe': {
    reasonZh: '对线胜率 56.13%',
    reasonEn: 'Win rate 56.13%'
  },
  'neeko-hwei': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'neeko-lux': {
    reasonZh: '对线胜率 52.58%',
    reasonEn: 'Win rate 52.58%'
  },
  'neeko-nami': {
    reasonZh: '对线胜率 52.95%',
    reasonEn: 'Win rate 52.95%'
  },
  'neeko-rell': {
    reasonZh: '对线胜率 52.44%',
    reasonEn: 'Win rate 52.44%'
  },
  'neeko-shaco': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%'
  },
  'neeko-swain': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%'
  },
  'nidalee-graves': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'nidalee-kayn': {
    reasonZh: '对线胜率 52.37%',
    reasonEn: 'Win rate 52.37%'
  },
  'nidalee-khazix': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%'
  },
  'nidalee-kindred': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'nidalee-malphite': {
    reasonZh: '对线胜率 58.23%',
    reasonEn: 'Win rate 58.23%'
  },
  'nidalee-pantheon': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'nidalee-qiyana': {
    reasonZh: '对线胜率 58.19%',
    reasonEn: 'Win rate 58.19%'
  },
  'nidalee-skarner': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%'
  },
  'nidalee-talon': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%'
  },
  'nidalee-zed': {
    reasonZh: '对线胜率 57.62%',
    reasonEn: 'Win rate 57.62%'
  },
  'nilah-aphelios': {
    reasonZh: '对线胜率 57.62%',
    reasonEn: 'Win rate 57.62%'
  },
  'nilah-kaisa': {
    reasonZh: '对线胜率 57.62%',
    reasonEn: 'Win rate 57.62%'
  },
  'nilah-karthus': {
    reasonZh: '对线胜率 53.76%',
    reasonEn: 'Win rate 53.76%'
  },
  'nilah-teemo': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'nilah-twitch': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'nilah-veigar': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%'
  },
  'nilah-yasuo': {
    reasonZh: '对线胜率 58.13%',
    reasonEn: 'Win rate 58.13%'
  },
  'nilah-zeri': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'nocturne-belveth': {
    reasonZh: '对线胜率 52.57%',
    reasonEn: 'Win rate 52.57%'
  },
  'nocturne-kayn': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'nocturne-naafiri': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%'
  },
  'nocturne-qiyana': {
    reasonZh: '对线胜率 57.34%',
    reasonEn: 'Win rate 57.34%'
  },
  'nocturne-quinn': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'nocturne-reksai': {
    reasonZh: '对线胜率 50.99%',
    reasonEn: 'Win rate 50.99%'
  },
  'nocturne-shaco': {
    reasonZh: '对线胜率 53.26%',
    reasonEn: 'Win rate 53.26%'
  },
  'nocturne-teemo': {
    reasonZh: '对线胜率 55.78%',
    reasonEn: 'Win rate 55.78%'
  },
  'nocturne-zed': {
    reasonZh: '对线胜率 54.34%',
    reasonEn: 'Win rate 54.34%'
  },
  'nunu-aatrox': {
    reasonZh: '对线胜率 56.08%',
    reasonEn: 'Win rate 56.08%'
  },
  'nunu-ambessa': {
    reasonZh: '对线胜率 59.84%',
    reasonEn: 'Win rate 59.84%'
  },
  'nunu-azir': {
    reasonZh: '对线胜率 68.75%',
    reasonEn: 'Win rate 68.75%'
  },
  'nunu-ekko': {
    reasonZh: '对线胜率 52.69%',
    reasonEn: 'Win rate 52.69%'
  },
  'nunu-gwen': {
    reasonZh: '对线胜率 58.65%',
    reasonEn: 'Win rate 58.65%'
  },
  'nunu-malphite': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'nunu-nidalee': {
    reasonZh: '对线胜率 54.87%',
    reasonEn: 'Win rate 54.87%'
  },
  'nunu-nocturne': {
    reasonZh: '对线胜率 52.09%',
    reasonEn: 'Win rate 52.09%'
  },
  'nunu-teemo': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'nunu-viktor': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'nunu-zac': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'olaf-cassiopeia': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%'
  },
  'olaf-gangplank': {
    reasonZh: '对线胜率 52.87%',
    reasonEn: 'Win rate 52.87%'
  },
  'olaf-malzahar': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'olaf-sion': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'olaf-teemo': {
    reasonZh: '对线胜率 55.06%',
    reasonEn: 'Win rate 55.06%'
  },
  'olaf-twistedfate': {
    reasonZh: '对线胜率 59.68%',
    reasonEn: 'Win rate 59.68%'
  },
  'olaf-varus': {
    reasonZh: '对线胜率 57.25%',
    reasonEn: 'Win rate 57.25%'
  },
  'olaf-xinzhao': {
    reasonZh: '对线胜率 60.50%',
    reasonEn: 'Win rate 60.50%'
  },
  'orianna-azir': {
    reasonZh: '对线胜率 54.97%',
    reasonEn: 'Win rate 54.97%'
  },
  'orianna-ryze': {
    reasonZh: '对线胜率 51.98%',
    reasonEn: 'Win rate 51.98%'
  },
  'orianna-smolder': {
    reasonZh: '对线胜率 56.77%',
    reasonEn: 'Win rate 56.77%'
  },
  'orianna-yone': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'orianna-ziggs': {
    reasonZh: '对线胜率 52.78%',
    reasonEn: 'Win rate 52.78%'
  },
  'ornn-aurora': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%'
  },
  'ornn-chogath': {
    reasonZh: '对线胜率 54.30%',
    reasonEn: 'Win rate 54.30%'
  },
  'ornn-kennen': {
    reasonZh: '对线胜率 57.48%',
    reasonEn: 'Win rate 57.48%'
  },
  'ornn-renekton': {
    reasonZh: '对线胜率 54.88%',
    reasonEn: 'Win rate 54.88%'
  },
  'ornn-ryze': {
    reasonZh: '对线胜率 57.48%',
    reasonEn: 'Win rate 57.48%'
  },
  'ornn-yorick': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%'
  },
  'pantheon-fizz': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'pantheon-leblanc': {
    reasonZh: '对线胜率 58.60%',
    reasonEn: 'Win rate 58.60%'
  },
  'pantheon-malzahar': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%'
  },
  'pantheon-poppy': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%'
  },
  'pantheon-qiyana': {
    reasonZh: '对线胜率 58.15%',
    reasonEn: 'Win rate 58.15%'
  },
  'pantheon-sejuani': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'pantheon-shyvana': {
    reasonZh: '对线胜率 53.88%',
    reasonEn: 'Win rate 53.88%'
  },
  'pantheon-sylas': {
    reasonZh: '对线胜率 55.92%',
    reasonEn: 'Win rate 55.92%'
  },
  'pantheon-udyr': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%'
  },
  'pantheon-vladimir': {
    reasonZh: '对线胜率 52.63%',
    reasonEn: 'Win rate 52.63%'
  },
  'pantheon-xinzhao': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%'
  },
  'poppy-akali': {
    reasonZh: '对线胜率 59.51%',
    reasonEn: 'Win rate 59.51%'
  },
  'poppy-alistar': {
    reasonZh: '对线胜率 53.82%',
    reasonEn: 'Win rate 53.82%'
  },
  'poppy-anivia': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'poppy-aurora': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'poppy-bard': {
    reasonZh: '对线胜率 52.89%',
    reasonEn: 'Win rate 52.89%'
  },
  'poppy-elise': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%'
  },
  'poppy-illaoi': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%'
  },
  'poppy-jax': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'poppy-malzahar': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'poppy-sona': {
    reasonZh: '对线胜率 52.21%',
    reasonEn: 'Win rate 52.21%'
  },
  'poppy-sylas': {
    reasonZh: '对线胜率 59.72%',
    reasonEn: 'Win rate 59.72%'
  },
  'poppy-yasuo': {
    reasonZh: '对线胜率 59.41%',
    reasonEn: 'Win rate 59.41%'
  },
  'poppy-zilean': {
    reasonZh: '对线胜率 52.84%',
    reasonEn: 'Win rate 52.84%'
  },
  'pyke-galio': {
    reasonZh: '对线胜率 54.52%',
    reasonEn: 'Win rate 54.52%'
  },
  'pyke-hwei': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'pyke-mel': {
    reasonZh: '对线胜率 54.64%',
    reasonEn: 'Win rate 54.64%'
  },
  'pyke-seraphine': {
    reasonZh: '对线胜率 50.74%',
    reasonEn: 'Win rate 50.74%'
  },
  'pyke-tahmkench': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'pyke-yuumi': {
    reasonZh: '对线胜率 53.80%',
    reasonEn: 'Win rate 53.80%'
  },
  'qiyana-kayle': {
    reasonZh: '对线胜率 57.55%',
    reasonEn: 'Win rate 57.55%'
  },
  'qiyana-naafiri': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'qiyana-rammus': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%'
  },
  'qiyana-smolder': {
    reasonZh: '对线胜率 59.34%',
    reasonEn: 'Win rate 59.34%'
  },
  'qiyana-veigar': {
    reasonZh: '对线胜率 52.50%',
    reasonEn: 'Win rate 52.50%'
  },
  'qiyana-zaahen': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'qiyana-zed': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%'
  },
  'qiyana-ziggs': {
    reasonZh: '对线胜率 57.76%',
    reasonEn: 'Win rate 57.76%'
  },
  'quinn-ambessa': {
    reasonZh: '对线胜率 56.40%',
    reasonEn: 'Win rate 56.40%'
  },
  'quinn-aurora': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%'
  },
  'quinn-chogath': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'quinn-fiora': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%'
  },
  'quinn-gangplank': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%'
  },
  'quinn-garen': {
    reasonZh: '对线胜率 53.47%',
    reasonEn: 'Win rate 53.47%'
  },
  'quinn-gragas': {
    reasonZh: '对线胜率 59.01%',
    reasonEn: 'Win rate 59.01%'
  },
  'quinn-illaoi': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'quinn-jayce': {
    reasonZh: '对线胜率 57.37%',
    reasonEn: 'Win rate 57.37%'
  },
  'quinn-pantheon': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'quinn-trundle': {
    reasonZh: '对线胜率 64.75%',
    reasonEn: 'Win rate 64.75%'
  },
  'quinn-udyr': {
    reasonZh: '对线胜率 61.36%',
    reasonEn: 'Win rate 61.36%'
  },
  'quinn-yorick': {
    reasonZh: '对线胜率 57.10%',
    reasonEn: 'Win rate 57.10%'
  },
  'rakan-blitzcrank': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%'
  },
  'rakan-camille': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'rakan-galio': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'rakan-mel': {
    reasonZh: '对线胜率 58.81%',
    reasonEn: 'Win rate 58.81%'
  },
  'rakan-milio': {
    reasonZh: '对线胜率 52.31%',
    reasonEn: 'Win rate 52.31%'
  },
  'rakan-nautilus': {
    reasonZh: '对线胜率 52.58%',
    reasonEn: 'Win rate 52.58%'
  },
  'rakan-yuumi': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%'
  },
  'rakan-zoe': {
    reasonZh: '对线胜率 58.30%',
    reasonEn: 'Win rate 58.30%'
  },
  'rammus-evelynn': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%'
  },
  'rammus-fiddlesticks': {
    reasonZh: '对线胜率 53.48%',
    reasonEn: 'Win rate 53.48%'
  },
  'rammus-fizz': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'rammus-gragas': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'rammus-hecarim': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%'
  },
  'rammus-leesin': {
    reasonZh: '对线胜率 53.74%',
    reasonEn: 'Win rate 53.74%'
  },
  'rammus-masteryi': {
    reasonZh: '对线胜率 55.02%',
    reasonEn: 'Win rate 55.02%'
  },
  'rammus-quinn': {
    reasonZh: '对线胜率 60.63%',
    reasonEn: 'Win rate 60.63%'
  },
  'rammus-rengar': {
    reasonZh: '对线胜率 56.33%',
    reasonEn: 'Win rate 56.33%'
  },
  'rammus-taliyah': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%'
  },
  'rammus-talon': {
    reasonZh: '对线胜率 56.09%',
    reasonEn: 'Win rate 56.09%'
  },
  'rammus-volibear': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'rammus-zyra': {
    reasonZh: '对线胜率 61.04%',
    reasonEn: 'Win rate 61.04%'
  },
  'reksai-elise': {
    reasonZh: '对线胜率 56.15%',
    reasonEn: 'Win rate 56.15%'
  },
  'reksai-evelynn': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'reksai-gragas': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%'
  },
  'reksai-jarvaniv': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%'
  },
  'reksai-kayn': {
    reasonZh: '对线胜率 52.15%',
    reasonEn: 'Win rate 52.15%'
  },
  'reksai-khazix': {
    reasonZh: '对线胜率 53.43%',
    reasonEn: 'Win rate 53.43%'
  },
  'reksai-malphite': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'reksai-masteryi': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'reksai-nasus': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'reksai-pantheon': {
    reasonZh: '对线胜率 57.71%',
    reasonEn: 'Win rate 57.71%'
  },
  'reksai-qiyana': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'reksai-taliyah': {
    reasonZh: '对线胜率 55.28%',
    reasonEn: 'Win rate 55.28%'
  },
  'rell-camille': {
    reasonZh: '对线胜率 60.20%',
    reasonEn: 'Win rate 60.20%'
  },
  'rell-karma': {
    reasonZh: '对线胜率 53.87%',
    reasonEn: 'Win rate 53.87%'
  },
  'rell-milio': {
    reasonZh: '对线胜率 52.64%',
    reasonEn: 'Win rate 52.64%'
  },
  'rell-nautilus': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'rell-shen': {
    reasonZh: '对线胜率 59.60%',
    reasonEn: 'Win rate 59.60%'
  },
  'rell-skarner': {
    reasonZh: '对线胜率 58.80%',
    reasonEn: 'Win rate 58.80%'
  },
  'rell-sona': {
    reasonZh: '对线胜率 52.17%',
    reasonEn: 'Win rate 52.17%'
  },
  'rell-sylas': {
    reasonZh: '对线胜率 58.80%',
    reasonEn: 'Win rate 58.80%'
  },
  'rell-yuumi': {
    reasonZh: '对线胜率 57.95%',
    reasonEn: 'Win rate 57.95%'
  },
  'renata-maokai': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'renata-mel': {
    reasonZh: '对线胜率 60.31%',
    reasonEn: 'Win rate 60.31%'
  },
  'renata-neeko': {
    reasonZh: '对线胜率 58.85%',
    reasonEn: 'Win rate 58.85%'
  },
  'renata-pantheon': {
    reasonZh: '对线胜率 63.41%',
    reasonEn: 'Win rate 63.41%'
  },
  'renata-shaco': {
    reasonZh: '对线胜率 58.88%',
    reasonEn: 'Win rate 58.88%'
  },
  'renata-sylas': {
    reasonZh: '对线胜率 59.32%',
    reasonEn: 'Win rate 59.32%'
  },
  'renekton-ambessa': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%'
  },
  'renekton-cassiopeia': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'renekton-malzahar': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'renekton-masteryi': {
    reasonZh: '对线胜率 60.63%',
    reasonEn: 'Win rate 60.63%'
  },
  'renekton-yasuo': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'rengar-jayce': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'rengar-karthus': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%'
  },
  'rengar-qiyana': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'rengar-taliyah': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%'
  },
  'rengar-talon': {
    reasonZh: '对线胜率 52.95%',
    reasonEn: 'Win rate 52.95%'
  },
  'rengar-teemo': {
    reasonZh: '对线胜率 57.24%',
    reasonEn: 'Win rate 57.24%'
  },
  'rengar-zaahen': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%'
  },
  'riven-akshan': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'riven-annie': {
    reasonZh: '对线胜率 53.04%',
    reasonEn: 'Win rate 53.04%'
  },
  'riven-aurelionsol': {
    reasonZh: '对线胜率 62.11%',
    reasonEn: 'Win rate 62.11%'
  },
  'riven-diana': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'riven-ekko': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%'
  },
  'riven-galio': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%'
  },
  'riven-gragas': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'riven-gwen': {
    reasonZh: '对线胜率 60.44%',
    reasonEn: 'Win rate 60.44%'
  },
  'riven-irelia': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'riven-jayce': {
    reasonZh: '对线胜率 62.96%',
    reasonEn: 'Win rate 62.96%'
  },
  'riven-kassadin': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%'
  },
  'riven-lux': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'riven-sion': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'riven-sylas': {
    reasonZh: '对线胜率 56.99%',
    reasonEn: 'Win rate 56.99%'
  },
  'riven-twistedfate': {
    reasonZh: '对线胜率 54.36%',
    reasonEn: 'Win rate 54.36%'
  },
  'riven-xerath': {
    reasonZh: '对线胜率 54.60%',
    reasonEn: 'Win rate 54.60%'
  },
  'riven-xinzhao': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%'
  },
  'riven-yasuo': {
    reasonZh: '对线胜率 58.23%',
    reasonEn: 'Win rate 58.23%'
  },
  'riven-yone': {
    reasonZh: '对线胜率 53.90%',
    reasonEn: 'Win rate 53.90%'
  },
  'riven-zed': {
    reasonZh: '对线胜率 54.98%',
    reasonEn: 'Win rate 54.98%'
  },
  'rumble-poppy': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'rumble-quinn': {
    reasonZh: '对线胜率 53.74%',
    reasonEn: 'Win rate 53.74%'
  },
  'rumble-trundle': {
    reasonZh: '对线胜率 54.70%',
    reasonEn: 'Win rate 54.70%'
  },
  'rumble-udyr': {
    reasonZh: '对线胜率 54.62%',
    reasonEn: 'Win rate 54.62%'
  },
  'rumble-yasuo': {
    reasonZh: '对线胜率 53.54%',
    reasonEn: 'Win rate 53.54%'
  },
  'ryze-azir': {
    reasonZh: '对线胜率 52.64%',
    reasonEn: 'Win rate 52.64%'
  },
  'ryze-camille': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%'
  },
  'ryze-ekko': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'ryze-mel': {
    reasonZh: '对线胜率 56.71%',
    reasonEn: 'Win rate 56.71%'
  },
  'ryze-poppy': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%'
  },
  'ryze-smolder': {
    reasonZh: '对线胜率 64.42%',
    reasonEn: 'Win rate 64.42%'
  },
  'ryze-sylas': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'ryze-vex': {
    reasonZh: '对线胜率 52.52%',
    reasonEn: 'Win rate 52.52%'
  },
  'samira-ezreal': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'samira-katarina': {
    reasonZh: '对线胜率 56.33%',
    reasonEn: 'Win rate 56.33%'
  },
  'samira-mel': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'samira-teemo': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%'
  },
  'samira-vayne': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%'
  },
  'sejuani-briar': {
    reasonZh: '对线胜率 53.48%',
    reasonEn: 'Win rate 53.48%'
  },
  'sejuani-jayce': {
    reasonZh: '对线胜率 59.91%',
    reasonEn: 'Win rate 59.91%'
  },
  'sejuani-karthus': {
    reasonZh: '对线胜率 66.27%',
    reasonEn: 'Win rate 66.27%'
  },
  'sejuani-malphite': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%'
  },
  'sejuani-qiyana': {
    reasonZh: '对线胜率 57.55%',
    reasonEn: 'Win rate 57.55%'
  },
  'sejuani-quinn': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'sejuani-warwick': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'senna-alistar': {
    reasonZh: '对线胜率 54.56%',
    reasonEn: 'Win rate 54.56%'
  },
  'senna-braum': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'senna-corki': {
    reasonZh: '对线胜率 55.72%',
    reasonEn: 'Win rate 55.72%'
  },
  'senna-draven': {
    reasonZh: '对线胜率 55.51%',
    reasonEn: 'Win rate 55.51%'
  },
  'senna-ezreal': {
    reasonZh: '对线胜率 55.31%',
    reasonEn: 'Win rate 55.31%'
  },
  'senna-janna': {
    reasonZh: '对线胜率 51.68%',
    reasonEn: 'Win rate 51.68%'
  },
  'senna-kogmaw': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%'
  },
  'senna-lulu': {
    reasonZh: '对线胜率 52.39%',
    reasonEn: 'Win rate 52.39%'
  },
  'senna-maokai': {
    reasonZh: '对线胜率 54.08%',
    reasonEn: 'Win rate 54.08%'
  },
  'senna-mel': {
    reasonZh: '对线胜率 57.37%',
    reasonEn: 'Win rate 57.37%'
  },
  'senna-milio': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%'
  },
  'senna-rakan': {
    reasonZh: '对线胜率 56.26%',
    reasonEn: 'Win rate 56.26%'
  },
  'senna-rell': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'senna-sivir': {
    reasonZh: '对线胜率 54.97%',
    reasonEn: 'Win rate 54.97%'
  },
  'senna-smolder': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'senna-soraka': {
    reasonZh: '对线胜率 52.39%',
    reasonEn: 'Win rate 52.39%'
  },
  'senna-vayne': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'senna-vladimir': {
    reasonZh: '对线胜率 58.63%',
    reasonEn: 'Win rate 58.63%'
  },
  'seraphine-ashe': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%'
  },
  'seraphine-caitlyn': {
    reasonZh: '对线胜率 57.80%',
    reasonEn: 'Win rate 57.80%'
  },
  'seraphine-camille': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'seraphine-jhin': {
    reasonZh: '对线胜率 53.77%',
    reasonEn: 'Win rate 53.77%'
  },
  'seraphine-jinx': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'seraphine-kogmaw': {
    reasonZh: '对线胜率 53.39%',
    reasonEn: 'Win rate 53.39%'
  },
  'seraphine-leona': {
    reasonZh: '对线胜率 51.52%',
    reasonEn: 'Win rate 51.52%'
  },
  'seraphine-lucian': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%'
  },
  'seraphine-mel': {
    reasonZh: '对线胜率 56.48%',
    reasonEn: 'Win rate 56.48%'
  },
  'seraphine-neeko': {
    reasonZh: '对线胜率 53.63%',
    reasonEn: 'Win rate 53.63%'
  },
  'seraphine-rakan': {
    reasonZh: '对线胜率 53.76%',
    reasonEn: 'Win rate 53.76%'
  },
  'seraphine-senna': {
    reasonZh: '对线胜率 51.16%',
    reasonEn: 'Win rate 51.16%'
  },
  'seraphine-shen': {
    reasonZh: '对线胜率 55.64%',
    reasonEn: 'Win rate 55.64%'
  },
  'seraphine-smolder': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'seraphine-thresh': {
    reasonZh: '对线胜率 50.85%',
    reasonEn: 'Win rate 50.85%'
  },
  'seraphine-tristana': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'seraphine-varus': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'seraphine-vayne': {
    reasonZh: '对线胜率 53.15%',
    reasonEn: 'Win rate 53.15%'
  },
  'seraphine-velkoz': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'seraphine-xayah': {
    reasonZh: '对线胜率 60.93%',
    reasonEn: 'Win rate 60.93%'
  },
  'seraphine-yunara': {
    reasonZh: '对线胜率 57.55%',
    reasonEn: 'Win rate 57.55%'
  },
  'seraphine-zeri': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%'
  },
  'sett-chogath': {
    reasonZh: '对线胜率 55.66%',
    reasonEn: 'Win rate 55.66%'
  },
  'sett-masteryi': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'sett-sylas': {
    reasonZh: '对线胜率 55.25%',
    reasonEn: 'Win rate 55.25%'
  },
  'sett-xinzhao': {
    reasonZh: '对线胜率 55.57%',
    reasonEn: 'Win rate 55.57%'
  },
  'sett-yasuo': {
    reasonZh: '对线胜率 55.03%',
    reasonEn: 'Win rate 55.03%'
  },
  'shaco-amumu': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%'
  },
  'shaco-blitzcrank': {
    reasonZh: '对线胜率 52.90%',
    reasonEn: 'Win rate 52.90%'
  },
  'shaco-elise': {
    reasonZh: '对线胜率 55.84%',
    reasonEn: 'Win rate 55.84%'
  },
  'shaco-gwen': {
    reasonZh: '对线胜率 57.48%',
    reasonEn: 'Win rate 57.48%'
  },
  'shaco-jax': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%'
  },
  'shaco-kindred': {
    reasonZh: '对线胜率 53.94%',
    reasonEn: 'Win rate 53.94%'
  },
  'shaco-morgana': {
    reasonZh: '对线胜率 53.94%',
    reasonEn: 'Win rate 53.94%'
  },
  'shaco-viego': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'shen-camille': {
    reasonZh: '对线胜率 56.51%',
    reasonEn: 'Win rate 56.51%'
  },
  'shen-irelia': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%'
  },
  'shen-masteryi': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%'
  },
  'shen-milio': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'shen-ornn': {
    reasonZh: '对线胜率 51.62%',
    reasonEn: 'Win rate 51.62%'
  },
  'shen-sylas': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'shen-twistedfate': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'shyvana-ambessa': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'shyvana-leesin': {
    reasonZh: '对线胜率 52.91%',
    reasonEn: 'Win rate 52.91%'
  },
  'shyvana-malphite': {
    reasonZh: '对线胜率 57.64%',
    reasonEn: 'Win rate 57.64%'
  },
  'shyvana-nocturne': {
    reasonZh: '对线胜率 51.02%',
    reasonEn: 'Win rate 51.02%'
  },
  'shyvana-qiyana': {
    reasonZh: '对线胜率 57.40%',
    reasonEn: 'Win rate 57.40%'
  },
  'shyvana-rengar': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%'
  },
  'shyvana-teemo': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'singed-aatrox': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'singed-aurora': {
    reasonZh: '对线胜率 62.26%',
    reasonEn: 'Win rate 62.26%'
  },
  'singed-gwen': {
    reasonZh: '对线胜率 61.18%',
    reasonEn: 'Win rate 61.18%'
  },
  'singed-jax': {
    reasonZh: '对线胜率 58.58%',
    reasonEn: 'Win rate 58.58%'
  },
  'singed-kled': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'singed-malzahar': {
    reasonZh: '对线胜率 59.04%',
    reasonEn: 'Win rate 59.04%'
  },
  'singed-mordekaiser': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'singed-ornn': {
    reasonZh: '对线胜率 54.16%',
    reasonEn: 'Win rate 54.16%'
  },
  'singed-sett': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%'
  },
  'singed-shen': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'singed-zaahen': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%'
  },
  'sion-annie': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'sion-diana': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'sion-fizz': {
    reasonZh: '对线胜率 55.23%',
    reasonEn: 'Win rate 55.23%'
  },
  'sion-jayce': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%'
  },
  'sion-kennen': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%'
  },
  'sion-lissandra': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'sion-malphite': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%'
  },
  'sion-malzahar': {
    reasonZh: '对线胜率 60.22%',
    reasonEn: 'Win rate 60.22%'
  },
  'sion-masteryi': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%'
  },
  'sion-mel': {
    reasonZh: '对线胜率 60.93%',
    reasonEn: 'Win rate 60.93%'
  },
  'sion-orianna': {
    reasonZh: '对线胜率 58.30%',
    reasonEn: 'Win rate 58.30%'
  },
  'sion-quinn': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%'
  },
  'sion-ryze': {
    reasonZh: '对线胜率 56.75%',
    reasonEn: 'Win rate 56.75%'
  },
  'sion-sylas': {
    reasonZh: '对线胜率 55.01%',
    reasonEn: 'Win rate 55.01%'
  },
  'sion-teemo': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%'
  },
  'sion-vex': {
    reasonZh: '对线胜率 64.95%',
    reasonEn: 'Win rate 64.95%'
  },
  'sivir-corki': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'sivir-ezreal': {
    reasonZh: '对线胜率 53.13%',
    reasonEn: 'Win rate 53.13%'
  },
  'sivir-kalista': {
    reasonZh: '对线胜率 57.35%',
    reasonEn: 'Win rate 57.35%'
  },
  'sivir-mel': {
    reasonZh: '对线胜率 54.18%',
    reasonEn: 'Win rate 54.18%'
  },
  'sivir-swain': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'skarner-darius': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%'
  },
  'skarner-elise': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'skarner-gragas': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'skarner-nunu': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'skarner-quinn': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'skarner-rammus': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%'
  },
  'skarner-seraphine': {
    reasonZh: '对线胜率 50.97%',
    reasonEn: 'Win rate 50.97%'
  },
  'skarner-talon': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'skarner-udyr': {
    reasonZh: '对线胜率 56.99%',
    reasonEn: 'Win rate 56.99%'
  },
  'skarner-zilean': {
    reasonZh: '对线胜率 63.95%',
    reasonEn: 'Win rate 63.95%'
  },
  'smolder-corki': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'smolder-ezreal': {
    reasonZh: '对线胜率 52.75%',
    reasonEn: 'Win rate 52.75%'
  },
  'smolder-teemo': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%'
  },
  'smolder-varus': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%'
  },
  'smolder-vayne': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%'
  },
  'sona-galio': {
    reasonZh: '对线胜率 58.87%',
    reasonEn: 'Win rate 58.87%'
  },
  'sona-leblanc': {
    reasonZh: '对线胜率 65.52%',
    reasonEn: 'Win rate 65.52%'
  },
  'sona-mel': {
    reasonZh: '对线胜率 61.69%',
    reasonEn: 'Win rate 61.69%'
  },
  'sona-nami': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%'
  },
  'sona-shaco': {
    reasonZh: '对线胜率 62.18%',
    reasonEn: 'Win rate 62.18%'
  },
  'sona-tahmkench': {
    reasonZh: '对线胜率 52.83%',
    reasonEn: 'Win rate 52.83%'
  },
  'sona-xerath': {
    reasonZh: '对线胜率 57.36%',
    reasonEn: 'Win rate 57.36%'
  },
  'sona-yuumi': {
    reasonZh: '对线胜率 57.22%',
    reasonEn: 'Win rate 57.22%'
  },
  'soraka-anivia': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'soraka-fiddlesticks': {
    reasonZh: '对线胜率 58.38%',
    reasonEn: 'Win rate 58.38%'
  },
  'soraka-hwei': {
    reasonZh: '对线胜率 56.80%',
    reasonEn: 'Win rate 56.80%'
  },
  'soraka-mel': {
    reasonZh: '对线胜率 60.09%',
    reasonEn: 'Win rate 60.09%'
  },
  'soraka-pantheon': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%'
  },
  'swain-amumu': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%'
  },
  'swain-annie': {
    reasonZh: '对线胜率 57.25%',
    reasonEn: 'Win rate 57.25%'
  },
  'swain-aphelios': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'swain-ashe': {
    reasonZh: '对线胜率 53.59%',
    reasonEn: 'Win rate 53.59%'
  },
  'swain-caitlyn': {
    reasonZh: '对线胜率 56.57%',
    reasonEn: 'Win rate 56.57%'
  },
  'swain-galio': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'swain-hwei': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%'
  },
  'swain-jax': {
    reasonZh: '对线胜率 56.11%',
    reasonEn: 'Win rate 56.11%'
  },
  'swain-jhin': {
    reasonZh: '对线胜率 54.36%',
    reasonEn: 'Win rate 54.36%'
  },
  'swain-jinx': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'swain-kaisa': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%'
  },
  'swain-kalista': {
    reasonZh: '对线胜率 57.06%',
    reasonEn: 'Win rate 57.06%'
  },
  'swain-kassadin': {
    reasonZh: '对线胜率 57.59%',
    reasonEn: 'Win rate 57.59%'
  },
  'swain-lucian': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'swain-malphite': {
    reasonZh: '对线胜率 56.23%',
    reasonEn: 'Win rate 56.23%'
  },
  'swain-maokai': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'swain-mel': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%'
  },
  'swain-missfortune': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%'
  },
  'swain-nilah': {
    reasonZh: '对线胜率 56.49%',
    reasonEn: 'Win rate 56.49%'
  },
  'swain-qiyana': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'swain-quinn': {
    reasonZh: '对线胜率 67.44%',
    reasonEn: 'Win rate 67.44%'
  },
  'swain-rumble': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'swain-sett': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'swain-shen': {
    reasonZh: '对线胜率 52.53%',
    reasonEn: 'Win rate 52.53%'
  },
  'swain-taric': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'swain-twistedfate': {
    reasonZh: '对线胜率 52.98%',
    reasonEn: 'Win rate 52.98%'
  },
  'swain-xayah': {
    reasonZh: '对线胜率 54.66%',
    reasonEn: 'Win rate 54.66%'
  },
  'swain-xinzhao': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%'
  },
  'sylas-azir': {
    reasonZh: '对线胜率 53.67%',
    reasonEn: 'Win rate 53.67%'
  },
  'sylas-hecarim': {
    reasonZh: '对线胜率 54.09%',
    reasonEn: 'Win rate 54.09%'
  },
  'sylas-irelia': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%'
  },
  'sylas-kayle': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'sylas-malphite': {
    reasonZh: '对线胜率 54.28%',
    reasonEn: 'Win rate 54.28%'
  },
  'sylas-mel': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%'
  },
  'sylas-shyvana': {
    reasonZh: '对线胜率 56.79%',
    reasonEn: 'Win rate 56.79%'
  },
  'sylas-smolder': {
    reasonZh: '对线胜率 58.41%',
    reasonEn: 'Win rate 58.41%'
  },
  'syndra-annie': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'syndra-azir': {
    reasonZh: '对线胜率 58.91%',
    reasonEn: 'Win rate 58.91%'
  },
  'syndra-malphite': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%'
  },
  'syndra-mel': {
    reasonZh: '对线胜率 55.97%',
    reasonEn: 'Win rate 55.97%'
  },
  'syndra-sion': {
    reasonZh: '对线胜率 54.38%',
    reasonEn: 'Win rate 54.38%'
  },
  'syndra-smolder': {
    reasonZh: '对线胜率 62.12%',
    reasonEn: 'Win rate 62.12%'
  },
  'tahmkench-camille': {
    reasonZh: '对线胜率 57.29%',
    reasonEn: 'Win rate 57.29%'
  },
  'tahmkench-darius': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'tahmkench-fiddlesticks': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'tahmkench-kayle': {
    reasonZh: '对线胜率 55.92%',
    reasonEn: 'Win rate 55.92%'
  },
  'tahmkench-kennen': {
    reasonZh: '对线胜率 56.07%',
    reasonEn: 'Win rate 56.07%'
  },
  'tahmkench-mel': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%'
  },
  'tahmkench-neeko': {
    reasonZh: '对线胜率 58.87%',
    reasonEn: 'Win rate 58.87%'
  },
  'tahmkench-swain': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'tahmkench-zilean': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'taliyah-akshan': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'taliyah-ambessa': {
    reasonZh: '对线胜率 59.22%',
    reasonEn: 'Win rate 59.22%'
  },
  'taliyah-gragas': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%'
  },
  'taliyah-leesin': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%'
  },
  'taliyah-nidalee': {
    reasonZh: '对线胜率 54.08%',
    reasonEn: 'Win rate 54.08%'
  },
  'taliyah-quinn': {
    reasonZh: '对线胜率 56.56%',
    reasonEn: 'Win rate 56.56%'
  },
  'taliyah-riven': {
    reasonZh: '对线胜率 60.50%',
    reasonEn: 'Win rate 60.50%'
  },
  'taliyah-udyr': {
    reasonZh: '对线胜率 53.54%',
    reasonEn: 'Win rate 53.54%'
  },
  'taliyah-volibear': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'taliyah-yasuo': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%'
  },
  'taliyah-zac': {
    reasonZh: '对线胜率 55.65%',
    reasonEn: 'Win rate 55.65%'
  },
  'taliyah-zyra': {
    reasonZh: '对线胜率 64.06%',
    reasonEn: 'Win rate 64.06%'
  },
  'talon-gwen': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%'
  },
  'talon-jax': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'talon-lillia': {
    reasonZh: '对线胜率 53.86%',
    reasonEn: 'Win rate 53.86%'
  },
  'talon-malzahar': {
    reasonZh: '对线胜率 53.47%',
    reasonEn: 'Win rate 53.47%'
  },
  'talon-quinn': {
    reasonZh: '对线胜率 54.46%',
    reasonEn: 'Win rate 54.46%'
  },
  'talon-xerath': {
    reasonZh: '对线胜率 55.37%',
    reasonEn: 'Win rate 55.37%'
  },
  'talon-zed': {
    reasonZh: '对线胜率 53.53%',
    reasonEn: 'Win rate 53.53%'
  },
  'taric-alistar': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'taric-blitzcrank': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%'
  },
  'taric-braum': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'taric-elise': {
    reasonZh: '对线胜率 57.97%',
    reasonEn: 'Win rate 57.97%'
  },
  'taric-janna': {
    reasonZh: '对线胜率 54.52%',
    reasonEn: 'Win rate 54.52%'
  },
  'taric-leona': {
    reasonZh: '对线胜率 51.55%',
    reasonEn: 'Win rate 51.55%'
  },
  'taric-mel': {
    reasonZh: '对线胜率 65.48%',
    reasonEn: 'Win rate 65.48%'
  },
  'taric-nautilus': {
    reasonZh: '对线胜率 55.35%',
    reasonEn: 'Win rate 55.35%'
  },
  'taric-neeko': {
    reasonZh: '对线胜率 59.12%',
    reasonEn: 'Win rate 59.12%'
  },
  'taric-pyke': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%'
  },
  'taric-rakan': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%'
  },
  'taric-rell': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%'
  },
  'taric-seraphine': {
    reasonZh: '对线胜率 51.05%',
    reasonEn: 'Win rate 51.05%'
  },
  'taric-soraka': {
    reasonZh: '对线胜率 52.35%',
    reasonEn: 'Win rate 52.35%'
  },
  'taric-tahmkench': {
    reasonZh: '对线胜率 54.06%',
    reasonEn: 'Win rate 54.06%'
  },
  'taric-thresh': {
    reasonZh: '对线胜率 51.41%',
    reasonEn: 'Win rate 51.41%'
  },
  'taric-yuumi': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%'
  },
  'taric-zoe': {
    reasonZh: '对线胜率 58.95%',
    reasonEn: 'Win rate 58.95%'
  },
  'teemo-brand': {
    reasonZh: '对线胜率 51.26%',
    reasonEn: 'Win rate 51.26%'
  },
  'teemo-camille': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'teemo-corki': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'teemo-draven': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%'
  },
  'teemo-illaoi': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%'
  },
  'teemo-kalista': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%'
  },
  'teemo-singed': {
    reasonZh: '对线胜率 52.32%',
    reasonEn: 'Win rate 52.32%'
  },
  'teemo-skarner': {
    reasonZh: '对线胜率 65.12%',
    reasonEn: 'Win rate 65.12%'
  },
  'teemo-swain': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%'
  },
  'teemo-twistedfate': {
    reasonZh: '对线胜率 62.42%',
    reasonEn: 'Win rate 62.42%'
  },
  'teemo-vayne': {
    reasonZh: '对线胜率 62.37%',
    reasonEn: 'Win rate 62.37%'
  },
  'teemo-volibear': {
    reasonZh: '对线胜率 65.00%',
    reasonEn: 'Win rate 65.00%'
  },
  'teemo-zaahen': {
    reasonZh: '对线胜率 55.33%',
    reasonEn: 'Win rate 55.33%'
  },
  'thresh-bard': {
    reasonZh: '对线胜率 52.09%',
    reasonEn: 'Win rate 52.09%'
  },
  'thresh-karma': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'thresh-leblanc': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%'
  },
  'thresh-lulu': {
    reasonZh: '对线胜率 53.53%',
    reasonEn: 'Win rate 53.53%'
  },
  'thresh-mel': {
    reasonZh: '对线胜率 58.29%',
    reasonEn: 'Win rate 58.29%'
  },
  'thresh-nami': {
    reasonZh: '对线胜率 53.38%',
    reasonEn: 'Win rate 53.38%'
  },
  'thresh-pantheon': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'thresh-sona': {
    reasonZh: '对线胜率 52.28%',
    reasonEn: 'Win rate 52.28%'
  },
  'thresh-sylas': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%'
  },
  'thresh-yuumi': {
    reasonZh: '对线胜率 57.23%',
    reasonEn: 'Win rate 57.23%'
  },
  'tristana-aurelionsol': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
  'tristana-jhin': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%'
  },
  'tristana-kalista': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%'
  },
  'tristana-mel': {
    reasonZh: '对线胜率 54.02%',
    reasonEn: 'Win rate 54.02%'
  },
  'tristana-yunara': {
    reasonZh: '对线胜率 51.80%',
    reasonEn: 'Win rate 51.80%'
  },
  'trundle-belveth': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%'
  },
  'trundle-briar': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%'
  },
  'trundle-gangplank': {
    reasonZh: '对线胜率 53.26%',
    reasonEn: 'Win rate 53.26%'
  },
  'trundle-olaf': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%'
  },
  'trundle-pantheon': {
    reasonZh: '对线胜率 62.71%',
    reasonEn: 'Win rate 62.71%'
  },
  'trundle-qiyana': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%'
  },
  'trundle-quinn': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%'
  },
  'trundle-rengar': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%'
  },
  'trundle-shyvana': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%'
  },
  'trundle-tryndamere': {
    reasonZh: '对线胜率 54.58%',
    reasonEn: 'Win rate 54.58%'
  },
  'trundle-viego': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'trundle-warwick': {
    reasonZh: '对线胜率 54.30%',
    reasonEn: 'Win rate 54.30%'
  },
  'trundle-zed': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'tryndamere-ambessa': {
    reasonZh: '对线胜率 55.50%',
    reasonEn: 'Win rate 55.50%'
  },
  'tryndamere-garen': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'tryndamere-gwen': {
    reasonZh: '对线胜率 58.63%',
    reasonEn: 'Win rate 58.63%'
  },
  'tryndamere-malzahar': {
    reasonZh: '对线胜率 61.76%',
    reasonEn: 'Win rate 61.76%'
  },
  'tryndamere-mordekaiser': {
    reasonZh: '对线胜率 55.53%',
    reasonEn: 'Win rate 55.53%'
  },
  'tryndamere-olaf': {
    reasonZh: '对线胜率 54.63%',
    reasonEn: 'Win rate 54.63%'
  },
  'tryndamere-xinzhao': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%'
  },
  'tryndamere-yone': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%'
  },
  'twistedfate-azir': {
    reasonZh: '对线胜率 55.14%',
    reasonEn: 'Win rate 55.14%'
  },
  'twistedfate-jayce': {
    reasonZh: '对线胜率 56.66%',
    reasonEn: 'Win rate 56.66%'
  },
  'twistedfate-mel': {
    reasonZh: '对线胜率 54.62%',
    reasonEn: 'Win rate 54.62%'
  },
  'twistedfate-renekton': {
    reasonZh: '对线胜率 56.59%',
    reasonEn: 'Win rate 56.59%'
  },
  'twistedfate-smolder': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%'
  },
  'twistedfate-yone': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%'
  },
  'twitch-aphelios': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%'
  },
  'twitch-hwei': {
    reasonZh: '对线胜率 51.34%',
    reasonEn: 'Win rate 51.34%'
  },
  'twitch-jhin': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'twitch-sivir': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%'
  },
  'twitch-smolder': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%'
  },
  'twitch-yunara': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%'
  },
  'udyr-ambessa': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'udyr-gnar': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%'
  },
  'udyr-karthus': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'udyr-ksante': {
    reasonZh: '对线胜率 59.66%',
    reasonEn: 'Win rate 59.66%'
  },
  'udyr-monkeyking': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'udyr-nocturne': {
    reasonZh: '对线胜率 51.29%',
    reasonEn: 'Win rate 51.29%'
  },
  'udyr-qiyana': {
    reasonZh: '对线胜率 57.93%',
    reasonEn: 'Win rate 57.93%'
  },
  'udyr-rammus': {
    reasonZh: '对线胜率 54.51%',
    reasonEn: 'Win rate 54.51%'
  },
  'udyr-sejuani': {
    reasonZh: '对线胜率 56.59%',
    reasonEn: 'Win rate 56.59%'
  },
  'udyr-sion': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'udyr-trundle': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%'
  },
  'udyr-zaahen': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'urgot-masteryi': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%'
  },
  'urgot-ryze': {
    reasonZh: '对线胜率 55.48%',
    reasonEn: 'Win rate 55.48%'
  },
  'urgot-singed': {
    reasonZh: '对线胜率 53.02%',
    reasonEn: 'Win rate 53.02%'
  },
  'urgot-sylas': {
    reasonZh: '对线胜率 60.36%',
    reasonEn: 'Win rate 60.36%'
  },
  'urgot-twistedfate': {
    reasonZh: '对线胜率 56.12%',
    reasonEn: 'Win rate 56.12%'
  },
  'urgot-zaahen': {
    reasonZh: '对线胜率 56.51%',
    reasonEn: 'Win rate 56.51%'
  },
  'varus-corki': {
    reasonZh: '对线胜率 53.18%',
    reasonEn: 'Win rate 53.18%'
  },
  'varus-illaoi': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'varus-kalista': {
    reasonZh: '对线胜率 51.98%',
    reasonEn: 'Win rate 51.98%'
  },
  'varus-mel': {
    reasonZh: '对线胜率 54.34%',
    reasonEn: 'Win rate 54.34%'
  },
  'varus-pantheon': {
    reasonZh: '对线胜率 56.46%',
    reasonEn: 'Win rate 56.46%'
  },
  'varus-renekton': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%'
  },
  'varus-yunara': {
    reasonZh: '对线胜率 52.29%',
    reasonEn: 'Win rate 52.29%'
  },
  'varus-zeri': {
    reasonZh: '对线胜率 52.07%',
    reasonEn: 'Win rate 52.07%'
  },
  'vayne-ezreal': {
    reasonZh: '对线胜率 52.70%',
    reasonEn: 'Win rate 52.70%'
  },
  'vayne-karthus': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%'
  },
  'vayne-katarina': {
    reasonZh: '对线胜率 56.95%',
    reasonEn: 'Win rate 56.95%'
  },
  'vayne-kled': {
    reasonZh: '对线胜率 54.01%',
    reasonEn: 'Win rate 54.01%'
  },
  'vayne-ksante': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%'
  },
  'vayne-mel': {
    reasonZh: '对线胜率 53.41%',
    reasonEn: 'Win rate 53.41%'
  },
  'vayne-ziggs': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'veigar-ashe': {
    reasonZh: '对线胜率 53.74%',
    reasonEn: 'Win rate 53.74%'
  },
  'veigar-aurora': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%'
  },
  'veigar-brand': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%'
  },
  'veigar-cassiopeia': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%'
  },
  'veigar-corki': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'veigar-diana': {
    reasonZh: '对线胜率 53.48%',
    reasonEn: 'Win rate 53.48%'
  },
  'veigar-galio': {
    reasonZh: '对线胜率 57.47%',
    reasonEn: 'Win rate 57.47%'
  },
  'veigar-gragas': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%'
  },
  'veigar-kaisa': {
    reasonZh: '对线胜率 57.83%',
    reasonEn: 'Win rate 57.83%'
  },
  'veigar-lucian': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%'
  },
  'veigar-malphite': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'veigar-mel': {
    reasonZh: '对线胜率 57.48%',
    reasonEn: 'Win rate 57.48%'
  },
  'veigar-samira': {
    reasonZh: '对线胜率 60.33%',
    reasonEn: 'Win rate 60.33%'
  },
  'veigar-senna': {
    reasonZh: '对线胜率 54.23%',
    reasonEn: 'Win rate 54.23%'
  },
  'veigar-tristana': {
    reasonZh: '对线胜率 55.50%',
    reasonEn: 'Win rate 55.50%'
  },
  'veigar-xayah': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%'
  },
  'veigar-yunara': {
    reasonZh: '对线胜率 58.67%',
    reasonEn: 'Win rate 58.67%'
  },
  'velkoz-annie': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'velkoz-azir': {
    reasonZh: '对线胜率 59.89%',
    reasonEn: 'Win rate 59.89%'
  },
  'velkoz-brand': {
    reasonZh: '对线胜率 52.45%',
    reasonEn: 'Win rate 52.45%'
  },
  'velkoz-caitlyn': {
    reasonZh: '对线胜率 58.09%',
    reasonEn: 'Win rate 58.09%'
  },
  'velkoz-draven': {
    reasonZh: '对线胜率 61.19%',
    reasonEn: 'Win rate 61.19%'
  },
  'velkoz-ezreal': {
    reasonZh: '对线胜率 57.08%',
    reasonEn: 'Win rate 57.08%'
  },
  'velkoz-galio': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'velkoz-jayce': {
    reasonZh: '对线胜率 58.02%',
    reasonEn: 'Win rate 58.02%'
  },
  'velkoz-jinx': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%'
  },
  'velkoz-lissandra': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%'
  },
  'velkoz-lucian': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'velkoz-lux': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'velkoz-syndra': {
    reasonZh: '对线胜率 55.11%',
    reasonEn: 'Win rate 55.11%'
  },
  'velkoz-tristana': {
    reasonZh: '对线胜率 55.92%',
    reasonEn: 'Win rate 55.92%'
  },
  'velkoz-varus': {
    reasonZh: '对线胜率 58.53%',
    reasonEn: 'Win rate 58.53%'
  },
  'velkoz-veigar': {
    reasonZh: '对线胜率 58.02%',
    reasonEn: 'Win rate 58.02%'
  },
  'velkoz-viktor': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'velkoz-zeri': {
    reasonZh: '对线胜率 53.90%',
    reasonEn: 'Win rate 53.90%'
  },
  'vex-akali': {
    reasonZh: '对线胜率 55.96%',
    reasonEn: 'Win rate 55.96%'
  },
  'vex-jayce': {
    reasonZh: '对线胜率 58.04%',
    reasonEn: 'Win rate 58.04%'
  },
  'vex-leblanc': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%'
  },
  'vex-nunu': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%'
  },
  'vex-riven': {
    reasonZh: '对线胜率 54.34%',
    reasonEn: 'Win rate 54.34%'
  },
  'vex-smolder': {
    reasonZh: '对线胜率 65.52%',
    reasonEn: 'Win rate 65.52%'
  },
  'vex-xinzhao': {
    reasonZh: '对线胜率 54.45%',
    reasonEn: 'Win rate 54.45%'
  },
  'vex-yone': {
    reasonZh: '对线胜率 59.64%',
    reasonEn: 'Win rate 59.64%'
  },
  'vi-fizz': {
    reasonZh: '对线胜率 55.65%',
    reasonEn: 'Win rate 55.65%'
  },
  'vi-gwen': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%'
  },
  'vi-rammus': {
    reasonZh: '对线胜率 54.41%',
    reasonEn: 'Win rate 54.41%'
  },
  'vi-skarner': {
    reasonZh: '对线胜率 54.32%',
    reasonEn: 'Win rate 54.32%'
  },
  'vi-zed': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%'
  },
  'viego-ambessa': {
    reasonZh: '对线胜率 54.20%',
    reasonEn: 'Win rate 54.20%'
  },
  'viego-fizz': {
    reasonZh: '对线胜率 53.76%',
    reasonEn: 'Win rate 53.76%'
  },
  'viego-gwen': {
    reasonZh: '对线胜率 54.27%',
    reasonEn: 'Win rate 54.27%'
  },
  'viego-sylas': {
    reasonZh: '对线胜率 52.68%',
    reasonEn: 'Win rate 52.68%'
  },
  'viego-zed': {
    reasonZh: '对线胜率 53.64%',
    reasonEn: 'Win rate 53.64%'
  },
  'viktor-azir': {
    reasonZh: '对线胜率 56.29%',
    reasonEn: 'Win rate 56.29%'
  },
  'viktor-mel': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%'
  },
  'viktor-ryze': {
    reasonZh: '对线胜率 52.71%',
    reasonEn: 'Win rate 52.71%'
  },
  'viktor-smolder': {
    reasonZh: '对线胜率 63.12%',
    reasonEn: 'Win rate 63.12%'
  },
  'viktor-yasuo': {
    reasonZh: '对线胜率 53.42%',
    reasonEn: 'Win rate 53.42%'
  },
  'vladimir-ahri': {
    reasonZh: '对线胜率 52.17%',
    reasonEn: 'Win rate 52.17%'
  },
  'vladimir-akshan': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%'
  },
  'vladimir-azir': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%'
  },
  'vladimir-ezreal': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%'
  },
  'vladimir-karthus': {
    reasonZh: '对线胜率 53.64%',
    reasonEn: 'Win rate 53.64%'
  },
  'vladimir-katarina': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%'
  },
  'vladimir-mel': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%'
  },
  'vladimir-nilah': {
    reasonZh: '对线胜率 58.90%',
    reasonEn: 'Win rate 58.90%'
  },
  'vladimir-smolder': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%'
  },
  'vladimir-teemo': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%'
  },
  'vladimir-tristana': {
    reasonZh: '对线胜率 56.87%',
    reasonEn: 'Win rate 56.87%'
  },
  'vladimir-twitch': {
    reasonZh: '对线胜率 60.19%',
    reasonEn: 'Win rate 60.19%'
  },
  'vladimir-vex': {
    reasonZh: '对线胜率 54.98%',
    reasonEn: 'Win rate 54.98%'
  },
  'vladimir-yasuo': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'volibear-aatrox': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'volibear-fiddlesticks': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%'
  },
  'volibear-gragas': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%'
  },
  'volibear-nunu': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%'
  },
  'volibear-pantheon': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%'
  },
  'volibear-qiyana': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%'
  },
  'volibear-sett': {
    reasonZh: '对线胜率 53.82%',
    reasonEn: 'Win rate 53.82%'
  },
  'volibear-trundle': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'volibear-vi': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%'
  },
  'warwick-ambessa': {
    reasonZh: '对线胜率 58.58%',
    reasonEn: 'Win rate 58.58%'
  },
  'warwick-fiora': {
    reasonZh: '对线胜率 58.22%',
    reasonEn: 'Win rate 58.22%'
  },
  'warwick-gwen': {
    reasonZh: '对线胜率 62.89%',
    reasonEn: 'Win rate 62.89%'
  },
  'warwick-irelia': {
    reasonZh: '对线胜率 56.24%',
    reasonEn: 'Win rate 56.24%'
  },
  'warwick-kayn': {
    reasonZh: '对线胜率 52.11%',
    reasonEn: 'Win rate 52.11%'
  },
  'warwick-malphite': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%'
  },
  'warwick-masteryi': {
    reasonZh: '对线胜率 52.53%',
    reasonEn: 'Win rate 52.53%'
  },
  'warwick-mordekaiser': {
    reasonZh: '对线胜率 57.33%',
    reasonEn: 'Win rate 57.33%'
  },
  'warwick-ornn': {
    reasonZh: '对线胜率 50.95%',
    reasonEn: 'Win rate 50.95%'
  },
  'warwick-poppy': {
    reasonZh: '对线胜率 56.62%',
    reasonEn: 'Win rate 56.62%'
  },
  'warwick-rengar': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%'
  },
  'warwick-yorick': {
    reasonZh: '对线胜率 55.33%',
    reasonEn: 'Win rate 55.33%'
  },
  'warwick-zaahen': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'warwick-zed': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%'
  },
  'xayah-aphelios': {
    reasonZh: '对线胜率 54.75%',
    reasonEn: 'Win rate 54.75%'
  },
  'xayah-kalista': {
    reasonZh: '对线胜率 55.14%',
    reasonEn: 'Win rate 55.14%'
  },
  'xayah-katarina': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%'
  },
  'xayah-mel': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%'
  },
  'xayah-nilah': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'xayah-vayne': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%'
  },
  'xerath-ashe': {
    reasonZh: '对线胜率 55.53%',
    reasonEn: 'Win rate 55.53%'
  },
  'xerath-aurelionsol': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%'
  },
  'xerath-azir': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'xerath-caitlyn': {
    reasonZh: '对线胜率 58.80%',
    reasonEn: 'Win rate 58.80%'
  },
  'xerath-ezreal': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%'
  },
  'xerath-gragas': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%'
  },
  'xerath-jinx': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%'
  },
  'xerath-lux': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'xerath-malzahar': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%'
  },
  'xerath-mel': {
    reasonZh: '对线胜率 58.59%',
    reasonEn: 'Win rate 58.59%'
  },
  'xerath-missfortune': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%'
  },
  'xerath-nilah': {
    reasonZh: '对线胜率 58.73%',
    reasonEn: 'Win rate 58.73%'
  },
  'xerath-orianna': {
    reasonZh: '对线胜率 58.34%',
    reasonEn: 'Win rate 58.34%'
  },
  'xerath-samira': {
    reasonZh: '对线胜率 59.49%',
    reasonEn: 'Win rate 59.49%'
  },
  'xerath-smolder': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%'
  },
  'xerath-taliyah': {
    reasonZh: '对线胜率 56.01%',
    reasonEn: 'Win rate 56.01%'
  },
  'xerath-tristana': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%'
  },
  'xerath-twitch': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%'
  },
  'xerath-varus': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%'
  },
  'xerath-veigar': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%'
  },
  'xerath-velkoz': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%'
  },
  'xerath-vex': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%'
  },
  'xerath-viktor': {
    reasonZh: '对线胜率 52.65%',
    reasonEn: 'Win rate 52.65%'
  },
  'xerath-yunara': {
    reasonZh: '对线胜率 59.06%',
    reasonEn: 'Win rate 59.06%'
  },
  'xerath-ziggs': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%'
  },
  'xinzhao-akshan': {
    reasonZh: '对线胜率 59.17%',
    reasonEn: 'Win rate 59.17%'
  },
  'xinzhao-azir': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%'
  },
  'xinzhao-ekko': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%'
  },
  'xinzhao-gangplank': {
    reasonZh: '对线胜率 55.96%',
    reasonEn: 'Win rate 55.96%'
  },
  'xinzhao-kassadin': {
    reasonZh: '对线胜率 56.42%',
    reasonEn: 'Win rate 56.42%'
  },
  'xinzhao-katarina': {
    reasonZh: '对线胜率 53.41%',
    reasonEn: 'Win rate 53.41%'
  },
  'xinzhao-kayle': {
    reasonZh: '对线胜率 53.20%',
    reasonEn: 'Win rate 53.20%'
  },
  'xinzhao-naafiri': {
    reasonZh: '对线胜率 57.79%',
    reasonEn: 'Win rate 57.79%'
  },
  'xinzhao-nunu': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%'
  },
  'xinzhao-teemo': {
    reasonZh: '对线胜率 53.00%',
    reasonEn: 'Win rate 53.00%'
  },
  'xinzhao-vladimir': {
    reasonZh: '对线胜率 52.80%',
    reasonEn: 'Win rate 52.80%'
  },
  'xinzhao-xerath': {
    reasonZh: '对线胜率 53.81%',
    reasonEn: 'Win rate 53.81%'
  },
  'xinzhao-zed': {
    reasonZh: '对线胜率 55.60%',
    reasonEn: 'Win rate 55.60%'
  },
  'xinzhao-ziggs': {
    reasonZh: '对线胜率 60.44%',
    reasonEn: 'Win rate 60.44%'
  },
  'xinzhao-zoe': {
    reasonZh: '对线胜率 56.43%',
    reasonEn: 'Win rate 56.43%'
  },
  'yasuo-akshan': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%'
  },
  'yasuo-aphelios': {
    reasonZh: '对线胜率 56.20%',
    reasonEn: 'Win rate 56.20%'
  },
  'yasuo-aurora': {
    reasonZh: '对线胜率 51.95%',
    reasonEn: 'Win rate 51.95%'
  },
  'yasuo-ezreal': {
    reasonZh: '对线胜率 58.66%',
    reasonEn: 'Win rate 58.66%'
  },
  'yasuo-heimerdinger': {
    reasonZh: '对线胜率 55.94%',
    reasonEn: 'Win rate 55.94%'
  },
  'yasuo-jhin': {
    reasonZh: '对线胜率 54.09%',
    reasonEn: 'Win rate 54.09%'
  },
  'yasuo-mel': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%'
  },
  'yasuo-ryze': {
    reasonZh: '对线胜率 53.26%',
    reasonEn: 'Win rate 53.26%'
  },
  'yasuo-smolder': {
    reasonZh: '对线胜率 60.33%',
    reasonEn: 'Win rate 60.33%'
  },
  'yasuo-velkoz': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%'
  },
  'yasuo-ziggs': {
    reasonZh: '对线胜率 57.06%',
    reasonEn: 'Win rate 57.06%'
  },
  'yone-drmundo': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%'
  },
  'yone-gwen': {
    reasonZh: '对线胜率 56.09%',
    reasonEn: 'Win rate 56.09%'
  },
  'yone-nasus': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%'
  },
  'yone-rumble': {
    reasonZh: '对线胜率 54.75%',
    reasonEn: 'Win rate 54.75%'
  },
  'yone-swain': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%'
  },
  'yone-varus': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'yone-yorick': {
    reasonZh: '对线胜率 56.22%',
    reasonEn: 'Win rate 56.22%'
  },
  'yorick-akali': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%'
  },
  'yorick-aurora': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%'
  },
  'yorick-gnar': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%'
  },
  'yorick-malzahar': {
    reasonZh: '对线胜率 54.60%',
    reasonEn: 'Win rate 54.60%'
  },
  'yorick-mordekaiser': {
    reasonZh: '对线胜率 55.42%',
    reasonEn: 'Win rate 55.42%'
  },
  'yunara-draven': {
    reasonZh: '对线胜率 50.43%',
    reasonEn: 'Win rate 50.43%'
  },
  'yunara-kaisa': {
    reasonZh: '对线胜率 51.58%',
    reasonEn: 'Win rate 51.58%'
  },
  'yunara-kalista': {
    reasonZh: '对线胜率 52.05%',
    reasonEn: 'Win rate 52.05%'
  },
  'yunara-mel': {
    reasonZh: '对线胜率 53.08%',
    reasonEn: 'Win rate 53.08%'
  },
  'yunara-sivir': {
    reasonZh: '对线胜率 51.18%',
    reasonEn: 'Win rate 51.18%'
  },
  'yuumi-mel': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%'
  },
  'yuumi-shen': {
    reasonZh: '对线胜率 55.95%',
    reasonEn: 'Win rate 55.95%'
  },
  'yuumi-swain': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%'
  },
  'yuumi-zoe': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%'
  },
  'yuumi-zyra': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%'
  },
  'zaahen-ambessa': {
    reasonZh: '对线胜率 68.12%',
    reasonEn: 'Win rate 68.12%'
  },
  'zaahen-amumu': {
    reasonZh: '对线胜率 61.73%',
    reasonEn: 'Win rate 61.73%'
  },
  'zaahen-belveth': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%'
  },
  'zaahen-gwen': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%'
  },
  'zaahen-ivern': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%'
  },
  'zaahen-monkeyking': {
    reasonZh: '对线胜率 57.01%',
    reasonEn: 'Win rate 57.01%'
  },
  'zaahen-nasus': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%'
  },
  'zaahen-pantheon': {
    reasonZh: '对线胜率 70.21%',
    reasonEn: 'Win rate 70.21%'
  },
  'zaahen-sejuani': {
    reasonZh: '对线胜率 64.37%',
    reasonEn: 'Win rate 64.37%'
  },
  'zaahen-sion': {
    reasonZh: '对线胜率 53.77%',
    reasonEn: 'Win rate 53.77%'
  },
  'zaahen-zac': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%'
  },
  'zac-gragas': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%'
  },
  'zac-gwen': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%'
  },
  'zac-reksai': {
    reasonZh: '对线胜率 50.58%',
    reasonEn: 'Win rate 50.58%'
  },
  'zac-teemo': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%'
  },
  'zac-trundle': {
    reasonZh: '对线胜率 61.68%',
    reasonEn: 'Win rate 61.68%'
  },
  'zac-viego': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%'
  },
  'zed-ahri': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%'
  },
  'zed-azir': {
    reasonZh: '对线胜率 55.79%',
    reasonEn: 'Win rate 55.79%'
  },
  'zed-kassadin': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%'
  },
  'zed-mel': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%'
  },
  'zed-smolder': {
    reasonZh: '对线胜率 57.84%',
    reasonEn: 'Win rate 57.84%'
  },
  'zed-taliyah': {
    reasonZh: '对线胜率 55.69%',
    reasonEn: 'Win rate 55.69%'
  },
  'zeri-corki': {
    reasonZh: '对线胜率 55.33%',
    reasonEn: 'Win rate 55.33%'
  },
  'zeri-mel': {
    reasonZh: '对线胜率 60.05%',
    reasonEn: 'Win rate 60.05%'
  },
  'zeri-sivir': {
    reasonZh: '对线胜率 53.11%',
    reasonEn: 'Win rate 53.11%'
  },
  'zeri-veigar': {
    reasonZh: '对线胜率 53.07%',
    reasonEn: 'Win rate 53.07%'
  },
  'zeri-vladimir': {
    reasonZh: '对线胜率 53.97%',
    reasonEn: 'Win rate 53.97%'
  },
  'ziggs-akali': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%'
  },
  'ziggs-azir': {
    reasonZh: '对线胜率 58.95%',
    reasonEn: 'Win rate 58.95%'
  },
  'ziggs-brand': {
    reasonZh: '对线胜率 51.91%',
    reasonEn: 'Win rate 51.91%'
  },
  'ziggs-caitlyn': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%'
  },
  'ziggs-fizz': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%'
  },
  'ziggs-hwei': {
    reasonZh: '对线胜率 56.95%',
    reasonEn: 'Win rate 56.95%'
  },
  'ziggs-kalista': {
    reasonZh: '对线胜率 54.27%',
    reasonEn: 'Win rate 54.27%'
  },
  'ziggs-smolder': {
    reasonZh: '对线胜率 53.59%',
    reasonEn: 'Win rate 53.59%'
  },
  'ziggs-varus': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%'
  },
  'ziggs-veigar': {
    reasonZh: '对线胜率 56.14%',
    reasonEn: 'Win rate 56.14%'
  },
  'ziggs-yunara': {
    reasonZh: '对线胜率 57.06%',
    reasonEn: 'Win rate 57.06%'
  },
  'zilean-amumu': {
    reasonZh: '对线胜率 59.06%',
    reasonEn: 'Win rate 59.06%'
  },
  'zilean-braum': {
    reasonZh: '对线胜率 58.36%',
    reasonEn: 'Win rate 58.36%'
  },
  'zilean-hwei': {
    reasonZh: '对线胜率 60.23%',
    reasonEn: 'Win rate 60.23%'
  },
  'zilean-janna': {
    reasonZh: '对线胜率 52.72%',
    reasonEn: 'Win rate 52.72%'
  },
  'zilean-leona': {
    reasonZh: '对线胜率 51.51%',
    reasonEn: 'Win rate 51.51%'
  },
  'zilean-mel': {
    reasonZh: '对线胜率 64.96%',
    reasonEn: 'Win rate 64.96%'
  },
  'zilean-neeko': {
    reasonZh: '对线胜率 59.53%',
    reasonEn: 'Win rate 59.53%'
  },
  'zilean-rakan': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%'
  },
  'zilean-seraphine': {
    reasonZh: '对线胜率 51.99%',
    reasonEn: 'Win rate 51.99%'
  },
  'zilean-sona': {
    reasonZh: '对线胜率 52.30%',
    reasonEn: 'Win rate 52.30%'
  },
  'zilean-taric': {
    reasonZh: '对线胜率 52.34%',
    reasonEn: 'Win rate 52.34%'
  },
  'zoe-ahri': {
    reasonZh: '对线胜率 51.64%',
    reasonEn: 'Win rate 51.64%'
  },
  'zoe-malphite': {
    reasonZh: '对线胜率 65.49%',
    reasonEn: 'Win rate 65.49%'
  },
  'zoe-orianna': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%'
  },
  'zoe-pantheon': {
    reasonZh: '对线胜率 59.40%',
    reasonEn: 'Win rate 59.40%'
  },
  'zoe-renata': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%'
  },
  'zoe-smolder': {
    reasonZh: '对线胜率 53.78%',
    reasonEn: 'Win rate 53.78%'
  },
  'zoe-tahmkench': {
    reasonZh: '对线胜率 52.84%',
    reasonEn: 'Win rate 52.84%'
  },
  'zoe-taliyah': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%'
  },
  'zoe-viktor': {
    reasonZh: '对线胜率 53.42%',
    reasonEn: 'Win rate 53.42%'
  },
  'zyra-jax': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%'
  },
  'zyra-jayce': {
    reasonZh: '对线胜率 62.64%',
    reasonEn: 'Win rate 62.64%'
  },
  'zyra-kindred': {
    reasonZh: '对线胜率 58.73%',
    reasonEn: 'Win rate 58.73%'
  },
  'zyra-nasus': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%'
  },
  'zyra-nidalee': {
    reasonZh: '对线胜率 53.90%',
    reasonEn: 'Win rate 53.90%'
  },
  'zyra-reksai': {
    reasonZh: '对线胜率 55.45%',
    reasonEn: 'Win rate 55.45%'
  },
  'zyra-skarner': {
    reasonZh: '对线胜率 64.71%',
    reasonEn: 'Win rate 64.71%'
  },
  'zyra-udyr': {
    reasonZh: '对线胜率 58.47%',
    reasonEn: 'Win rate 58.47%'
  },
  'zyra-warwick': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%'
  },
};

export function getCounterReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = `${sourceId}-${targetId}`;
  const data = counterReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}

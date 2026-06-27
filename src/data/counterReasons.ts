// 克制理由数据 - 基于 OP.GG 难对付/好对付数据生成
// 数据来源: https://op.gg/zh-cn/lol/champions
// key 格式: "source-target" (source克制target)
import type { Language } from '@/i18n';

export interface CounterReasonData {
  reasonZh: string;
  reasonEn: string;
  games: number | null;
}

export const counterReasons: Record<string, CounterReasonData> = {
  'aatrox-amumu': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%',
    games: 53
  },
  'aatrox-camille': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%',
    games: 349
  },
  'aatrox-kennen': {
    reasonZh: '对线胜率 57.61%',
    reasonEn: 'Win rate 57.61%',
    games: 184
  },
  'aatrox-leesin': {
    reasonZh: '对线胜率 55.27%',
    reasonEn: 'Win rate 55.27%',
    games: 313
  },
  'aatrox-sett': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%',
    games: 641
  },
  'aatrox-skarner': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 33
  },
  'aatrox-vladimir': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%',
    games: 138
  },
  'aatrox-volibear': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%',
    games: 324
  },
  'aatrox-xinzhao': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 105
  },
  'ahri-aurelionsol': {
    reasonZh: '对线胜率 57.92%',
    reasonEn: 'Win rate 57.92%',
    games: 221
  },
  'ahri-cassiopeia': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 228
  },
  'ahri-riven': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%',
    games: 172
  },
  'ahri-smolder': {
    reasonZh: '对线胜率 56.45%',
    reasonEn: 'Win rate 56.45%',
    games: 62
  },
  'ahri-tristana': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 112
  },
  'akali-jayce': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%',
    games: 107
  },
  'akali-olaf': {
    reasonZh: '对线胜率 58.38%',
    reasonEn: 'Win rate 58.38%',
    games: 185
  },
  'akali-smolder': {
    reasonZh: '对线胜率 68.57%',
    reasonEn: 'Win rate 68.57%',
    games: 35
  },
  'akali-tristana': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%',
    games: 59
  },
  'akali-trundle': {
    reasonZh: '对线胜率 61.19%',
    reasonEn: 'Win rate 61.19%',
    games: 67
  },
  'akali-yone': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 848
  },
  'akshan-aurelionsol': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 72
  },
  'akshan-azir': {
    reasonZh: '对线胜率 59.55%',
    reasonEn: 'Win rate 59.55%',
    games: 89
  },
  'akshan-leblanc': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%',
    games: 319
  },
  'akshan-mel': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 145
  },
  'akshan-pantheon': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 45
  },
  'akshan-xerath': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%',
    games: 265
  },
  'alistar-anivia': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 36
  },
  'alistar-blitzcrank': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%',
    games: 589
  },
  'alistar-leblanc': {
    reasonZh: '对线胜率 63.46%',
    reasonEn: 'Win rate 63.46%',
    games: 52
  },
  'alistar-mel': {
    reasonZh: '对线胜率 59.83%',
    reasonEn: 'Win rate 59.83%',
    games: 117
  },
  'alistar-sona': {
    reasonZh: '对线胜率 53.71%',
    reasonEn: 'Win rate 53.71%',
    games: 175
  },
  'alistar-xerath': {
    reasonZh: '对线胜率 57.82%',
    reasonEn: 'Win rate 57.82%',
    games: 147
  },
  'ambessa-amumu': {
    reasonZh: '对线胜率 69.77%',
    reasonEn: 'Win rate 69.77%',
    games: 43
  },
  'ambessa-briar': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%',
    games: 107
  },
  'ambessa-drmundo': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%',
    games: 222
  },
  'ambessa-lillia': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 60
  },
  'ambessa-masteryi': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 36
  },
  'ambessa-monkeyking': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 81
  },
  'ambessa-xinzhao': {
    reasonZh: '对线胜率 63.16%',
    reasonEn: 'Win rate 63.16%',
    games: 57
  },
  'amumu-blitzcrank': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 56
  },
  'amumu-fiddlesticks': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 70
  },
  'amumu-lillia': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%',
    games: 110
  },
  'amumu-lulu': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 99
  },
  'amumu-lux': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%',
    games: 61
  },
  'amumu-nidalee': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 60
  },
  'amumu-pyke': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%',
    games: 78
  },
  'amumu-qiyana': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%',
    games: 98
  },
  'amumu-rell': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%',
    games: 34
  },
  'amumu-skarner': {
    reasonZh: '对线胜率 58.14%',
    reasonEn: 'Win rate 58.14%',
    games: 43
  },
  'amumu-velkoz': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'amumu-yuumi': {
    reasonZh: '对线胜率 61.40%',
    reasonEn: 'Win rate 61.40%',
    games: 57
  },
  'anivia-fiora': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'anivia-galio': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%',
    games: 165
  },
  'anivia-gnar': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%',
    games: 42
  },
  'anivia-illaoi': {
    reasonZh: '对线胜率 69.44%',
    reasonEn: 'Win rate 69.44%',
    games: 36
  },
  'anivia-irelia': {
    reasonZh: '对线胜率 56.20%',
    reasonEn: 'Win rate 56.20%',
    games: 121
  },
  'anivia-janna': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 35
  },
  'anivia-jayce': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 120
  },
  'anivia-milio': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%',
    games: 64
  },
  'anivia-mordekaiser': {
    reasonZh: '对线胜率 65.91%',
    reasonEn: 'Win rate 65.91%',
    games: 44
  },
  'anivia-morgana': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%',
    games: 40
  },
  'anivia-olaf': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 40
  },
  'anivia-ornn': {
    reasonZh: '对线胜率 70.00%',
    reasonEn: 'Win rate 70.00%',
    games: 50
  },
  'anivia-riven': {
    reasonZh: '对线胜率 59.32%',
    reasonEn: 'Win rate 59.32%',
    games: 59
  },
  'anivia-ryze': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%',
    games: 209
  },
  'anivia-shen': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%',
    games: 58
  },
  'anivia-singed': {
    reasonZh: '对线胜率 63.41%',
    reasonEn: 'Win rate 63.41%',
    games: 41
  },
  'anivia-taliyah': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%',
    games: 69
  },
  'anivia-tryndamere': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 38
  },
  'anivia-viktor': {
    reasonZh: '对线胜率 53.35%',
    reasonEn: 'Win rate 53.35%',
    games: 523
  },
  'anivia-vladimir': {
    reasonZh: '对线胜率 54.58%',
    reasonEn: 'Win rate 54.58%',
    games: 251
  },
  'anivia-zoe': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%',
    games: 134
  },
  'annie-ahri': {
    reasonZh: '对线胜率 52.85%',
    reasonEn: 'Win rate 52.85%',
    games: 473
  },
  'annie-akali': {
    reasonZh: '对线胜率 56.40%',
    reasonEn: 'Win rate 56.40%',
    games: 250
  },
  'annie-azir': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%',
    games: 51
  },
  'annie-leblanc': {
    reasonZh: '对线胜率 55.87%',
    reasonEn: 'Win rate 55.87%',
    games: 213
  },
  'annie-lissandra': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%',
    games: 164
  },
  'annie-riven': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 35
  },
  'annie-ryze': {
    reasonZh: '对线胜率 56.20%',
    reasonEn: 'Win rate 56.20%',
    games: 121
  },
  'annie-twistedfate': {
    reasonZh: '对线胜率 53.06%',
    reasonEn: 'Win rate 53.06%',
    games: 196
  },
  'annie-ziggs': {
    reasonZh: '对线胜率 64.52%',
    reasonEn: 'Win rate 64.52%',
    games: 31
  },
  'annie-zoe': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%',
    games: 128
  },
  'aphelios-brand': {
    reasonZh: '对线胜率 52.47%',
    reasonEn: 'Win rate 52.47%',
    games: 324
  },
  'aphelios-kaisa': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%',
    games: 2777
  },
  'aphelios-sivir': {
    reasonZh: '对线胜率 52.21%',
    reasonEn: 'Win rate 52.21%',
    games: 793
  },
  'aphelios-smolder': {
    reasonZh: '对线胜率 51.15%',
    reasonEn: 'Win rate 51.15%',
    games: 866
  },
  'aphelios-vayne': {
    reasonZh: '对线胜率 54.81%',
    reasonEn: 'Win rate 54.81%',
    games: 748
  },
  'ashe-corki': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 243
  },
  'ashe-ezreal': {
    reasonZh: '对线胜率 53.64%',
    reasonEn: 'Win rate 53.64%',
    games: 3626
  },
  'ashe-syndra': {
    reasonZh: '对线胜率 58.02%',
    reasonEn: 'Win rate 58.02%',
    games: 131
  },
  'ashe-varus': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%',
    games: 644
  },
  'ashe-yunara': {
    reasonZh: '对线胜率 55.85%',
    reasonEn: 'Win rate 55.85%',
    games: 1162
  },
  'aurelionsol-aphelios': {
    reasonZh: '对线胜率 60.40%',
    reasonEn: 'Win rate 60.40%',
    games: 101
  },
  'aurelionsol-ashe': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%',
    games: 113
  },
  'aurelionsol-azir': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%',
    games: 49
  },
  'aurelionsol-kaisa': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 140
  },
  'aurelionsol-lux': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%',
    games: 94
  },
  'aurelionsol-mel': {
    reasonZh: '对线胜率 60.76%',
    reasonEn: 'Win rate 60.76%',
    games: 79
  },
  'aurelionsol-orianna': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 63
  },
  'aurelionsol-senna': {
    reasonZh: '对线胜率 52.76%',
    reasonEn: 'Win rate 52.76%',
    games: 127
  },
  'aurelionsol-sivir': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 56
  },
  'aurelionsol-tristana': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%',
    games: 73
  },
  'aurelionsol-twitch': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%',
    games: 65
  },
  'aurelionsol-vayne': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 62
  },
  'aurelionsol-yasuo': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%',
    games: 196
  },
  'aurora-annie': {
    reasonZh: '对线胜率 55.04%',
    reasonEn: 'Win rate 55.04%',
    games: 129
  },
  'aurora-fiora': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 32
  },
  'aurora-gragas': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 38
  },
  'aurora-mel': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%',
    games: 122
  },
  'aurora-pantheon': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 30
  },
  'aurora-urgot': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 36
  },
  'aurora-velkoz': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%',
    games: 51
  },
  'aurora-vex': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%',
    games: 108
  },
  'aurora-yone': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%',
    games: 84
  },
  'aurora-ziggs': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%',
    games: 33
  },
  'azir-aurora': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 77
  },
  'azir-lux': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%',
    games: 84
  },
  'azir-mel': {
    reasonZh: '对线胜率 60.71%',
    reasonEn: 'Win rate 60.71%',
    games: 56
  },
  'azir-talon': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%',
    games: 44
  },
  'azir-vex': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 60
  },
  'bard-leblanc': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%',
    games: 131
  },
  'bard-mel': {
    reasonZh: '对线胜率 58.38%',
    reasonEn: 'Win rate 58.38%',
    games: 173
  },
  'bard-swain': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%',
    games: 306
  },
  'bard-sylas': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%',
    games: 186
  },
  'bard-zoe': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 120
  },
  'belveth-aatrox': {
    reasonZh: '对线胜率 64.06%',
    reasonEn: 'Win rate 64.06%',
    games: 64
  },
  'belveth-jayce': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 108
  },
  'belveth-karthus': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%',
    games: 37
  },
  'belveth-nocturne': {
    reasonZh: '对线胜率 54.15%',
    reasonEn: 'Win rate 54.15%',
    games: 253
  },
  'belveth-olaf': {
    reasonZh: '对线胜率 63.16%',
    reasonEn: 'Win rate 63.16%',
    games: 38
  },
  'belveth-poppy': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%',
    games: 60
  },
  'belveth-rengar': {
    reasonZh: '对线胜率 60.80%',
    reasonEn: 'Win rate 60.80%',
    games: 176
  },
  'belveth-shyvana': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%',
    games: 148
  },
  'belveth-talon': {
    reasonZh: '对线胜率 54.85%',
    reasonEn: 'Win rate 54.85%',
    games: 206
  },
  'belveth-udyr': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%',
    games: 116
  },
  'belveth-zyra': {
    reasonZh: '对线胜率 70.27%',
    reasonEn: 'Win rate 70.27%',
    games: 37
  },
  'blitzcrank-hwei': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%',
    games: 92
  },
  'blitzcrank-leblanc': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 85
  },
  'blitzcrank-shen': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%',
    games: 72
  },
  'blitzcrank-tahmkench': {
    reasonZh: '对线胜率 59.17%',
    reasonEn: 'Win rate 59.17%',
    games: 240
  },
  'blitzcrank-yuumi': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%',
    games: 494
  },
  'brand-anivia': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%',
    games: 40
  },
  'brand-ezreal': {
    reasonZh: '对线胜率 59.50%',
    reasonEn: 'Win rate 59.50%',
    games: 563
  },
  'brand-fizz': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%',
    games: 68
  },
  'brand-jhin': {
    reasonZh: '对线胜率 55.99%',
    reasonEn: 'Win rate 55.99%',
    games: 543
  },
  'brand-jinx': {
    reasonZh: '对线胜率 51.45%',
    reasonEn: 'Win rate 51.45%',
    games: 414
  },
  'brand-kalista': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 70
  },
  'brand-kassadin': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 30
  },
  'brand-mel': {
    reasonZh: '对线胜率 64.81%',
    reasonEn: 'Win rate 64.81%',
    games: 108
  },
  'brand-nilah': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%',
    games: 62
  },
  'brand-renata': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 32
  },
  'brand-ryze': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 56
  },
  'brand-shen': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 51
  },
  'brand-swain': {
    reasonZh: '对线胜率 62.83%',
    reasonEn: 'Win rate 62.83%',
    games: 191
  },
  'brand-sylas': {
    reasonZh: '对线胜率 58.91%',
    reasonEn: 'Win rate 58.91%',
    games: 129
  },
  'brand-tahmkench': {
    reasonZh: '对线胜率 56.29%',
    reasonEn: 'Win rate 56.29%',
    games: 167
  },
  'brand-taric': {
    reasonZh: '对线胜率 53.23%',
    reasonEn: 'Win rate 53.23%',
    games: 62
  },
  'brand-twistedfate': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 88
  },
  'brand-vex': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 33
  },
  'brand-xayah': {
    reasonZh: '对线胜率 58.87%',
    reasonEn: 'Win rate 58.87%',
    games: 124
  },
  'brand-zeri': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%',
    games: 130
  },
  'braum-blitzcrank': {
    reasonZh: '对线胜率 56.24%',
    reasonEn: 'Win rate 56.24%',
    games: 633
  },
  'braum-camille': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 221
  },
  'braum-janna': {
    reasonZh: '对线胜率 53.52%',
    reasonEn: 'Win rate 53.52%',
    games: 284
  },
  'braum-leblanc': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%',
    games: 51
  },
  'braum-mel': {
    reasonZh: '对线胜率 60.17%',
    reasonEn: 'Win rate 60.17%',
    games: 118
  },
  'braum-poppy': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%',
    games: 200
  },
  'braum-taric': {
    reasonZh: '对线胜率 53.28%',
    reasonEn: 'Win rate 53.28%',
    games: 122
  },
  'braum-yuumi': {
    reasonZh: '对线胜率 61.65%',
    reasonEn: 'Win rate 61.65%',
    games: 352
  },
  'braum-zyra': {
    reasonZh: '对线胜率 58.86%',
    reasonEn: 'Win rate 58.86%',
    games: 175
  },
  'briar-belveth': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%',
    games: 207
  },
  'briar-jarvaniv': {
    reasonZh: '对线胜率 53.88%',
    reasonEn: 'Win rate 53.88%',
    games: 503
  },
  'briar-qiyana': {
    reasonZh: '对线胜率 56.68%',
    reasonEn: 'Win rate 56.68%',
    games: 247
  },
  'briar-skarner': {
    reasonZh: '对线胜率 64.10%',
    reasonEn: 'Win rate 64.10%',
    games: 78
  },
  'briar-volibear': {
    reasonZh: '对线胜率 59.14%',
    reasonEn: 'Win rate 59.14%',
    games: 93
  },
  'briar-zed': {
    reasonZh: '对线胜率 58.08%',
    reasonEn: 'Win rate 58.08%',
    games: 167
  },
  'caitlyn-aphelios': {
    reasonZh: '对线胜率 51.97%',
    reasonEn: 'Win rate 51.97%',
    games: 2840
  },
  'caitlyn-aurelionsol': {
    reasonZh: '对线胜率 52.32%',
    reasonEn: 'Win rate 52.32%',
    games: 151
  },
  'caitlyn-corki': {
    reasonZh: '对线胜率 51.68%',
    reasonEn: 'Win rate 51.68%',
    games: 298
  },
  'caitlyn-mel': {
    reasonZh: '对线胜率 52.09%',
    reasonEn: 'Win rate 52.09%',
    games: 430
  },
  'caitlyn-vladimir': {
    reasonZh: '对线胜率 53.11%',
    reasonEn: 'Win rate 53.11%',
    games: 177
  },
  'camille-blitzcrank': {
    reasonZh: '对线胜率 55.80%',
    reasonEn: 'Win rate 55.80%',
    games: 181
  },
  'camille-cassiopeia': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 32
  },
  'camille-gragas': {
    reasonZh: '对线胜率 59.84%',
    reasonEn: 'Win rate 59.84%',
    games: 122
  },
  'camille-ksante': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%',
    games: 204
  },
  'camille-morgana': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%',
    games: 100
  },
  'camille-olaf': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%',
    games: 135
  },
  'camille-tryndamere': {
    reasonZh: '对线胜率 56.29%',
    reasonEn: 'Win rate 56.29%',
    games: 167
  },
  'camille-xinzhao': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 39
  },
  'cassiopeia-aatrox': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%',
    games: 59
  },
  'cassiopeia-azir': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%',
    games: 52
  },
  'cassiopeia-darius': {
    reasonZh: '对线胜率 60.94%',
    reasonEn: 'Win rate 60.94%',
    games: 64
  },
  'cassiopeia-diana': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%',
    games: 90
  },
  'cassiopeia-gnar': {
    reasonZh: '对线胜率 65.71%',
    reasonEn: 'Win rate 65.71%',
    games: 35
  },
  'cassiopeia-katarina': {
    reasonZh: '对线胜率 55.83%',
    reasonEn: 'Win rate 55.83%',
    games: 206
  },
  'cassiopeia-nasus': {
    reasonZh: '对线胜率 73.33%',
    reasonEn: 'Win rate 73.33%',
    games: 30
  },
  'cassiopeia-shen': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 60
  },
  'cassiopeia-yasuo': {
    reasonZh: '对线胜率 55.78%',
    reasonEn: 'Win rate 55.78%',
    games: 147
  },
  'cassiopeia-zaahen': {
    reasonZh: '对线胜率 59.37%',
    reasonEn: 'Win rate 59.37%',
    games: 32
  },
  'chogath-ahri': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%',
    games: 69
  },
  'chogath-akali': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 30
  },
  'chogath-anivia': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 34
  },
  'chogath-aurora': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 33
  },
  'chogath-galio': {
    reasonZh: '对线胜率 65.71%',
    reasonEn: 'Win rate 65.71%',
    games: 35
  },
  'chogath-irelia': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%',
    games: 157
  },
  'chogath-malzahar': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 44
  },
  'chogath-renekton': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 182
  },
  'chogath-sylas': {
    reasonZh: '对线胜率 58.75%',
    reasonEn: 'Win rate 58.75%',
    games: 80
  },
  'chogath-vladimir': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%',
    games: 34
  },
  'chogath-volibear': {
    reasonZh: '对线胜率 56.31%',
    reasonEn: 'Win rate 56.31%',
    games: 103
  },
  'chogath-xerath': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 35
  },
  'chogath-yasuo': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%',
    games: 58
  },
  'chogath-zed': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 81
  },
  'corki-draven': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%',
    games: 114
  },
  'corki-kaisa': {
    reasonZh: '对线胜率 55.75%',
    reasonEn: 'Win rate 55.75%',
    games: 452
  },
  'corki-kogmaw': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%',
    games: 41
  },
  'corki-smolder': {
    reasonZh: '对线胜率 55.30%',
    reasonEn: 'Win rate 55.30%',
    games: 132
  },
  'corki-yasuo': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 33
  },
  'darius-aurora': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%',
    games: 73
  },
  'darius-ksante': {
    reasonZh: '对线胜率 54.78%',
    reasonEn: 'Win rate 54.78%',
    games: 575
  },
  'darius-masteryi': {
    reasonZh: '对线胜率 62.12%',
    reasonEn: 'Win rate 62.12%',
    games: 66
  },
  'darius-poppy': {
    reasonZh: '对线胜率 60.14%',
    reasonEn: 'Win rate 60.14%',
    games: 143
  },
  'darius-qiyana': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 30
  },
  'darius-sejuani': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 33
  },
  'darius-shyvana': {
    reasonZh: '对线胜率 65.45%',
    reasonEn: 'Win rate 65.45%',
    games: 55
  },
  'darius-sion': {
    reasonZh: '对线胜率 57.39%',
    reasonEn: 'Win rate 57.39%',
    games: 697
  },
  'darius-talon': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 64
  },
  'darius-vi': {
    reasonZh: '对线胜率 68.63%',
    reasonEn: 'Win rate 68.63%',
    games: 51
  },
  'diana-fizz': {
    reasonZh: '对线胜率 54.83%',
    reasonEn: 'Win rate 54.83%',
    games: 414
  },
  'diana-leblanc': {
    reasonZh: '对线胜率 57.77%',
    reasonEn: 'Win rate 57.77%',
    games: 457
  },
  'diana-malphite': {
    reasonZh: '对线胜率 65.85%',
    reasonEn: 'Win rate 65.85%',
    games: 41
  },
  'diana-malzahar': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%',
    games: 365
  },
  'diana-mel': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%',
    games: 170
  },
  'diana-nocturne': {
    reasonZh: '对线胜率 54.19%',
    reasonEn: 'Win rate 54.19%',
    games: 609
  },
  'diana-zed': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 715
  },
  'draven-aurelionsol': {
    reasonZh: '对线胜率 53.49%',
    reasonEn: 'Win rate 53.49%',
    games: 43
  },
  'draven-ezreal': {
    reasonZh: '对线胜率 55.80%',
    reasonEn: 'Win rate 55.80%',
    games: 1319
  },
  'draven-kaisa': {
    reasonZh: '对线胜率 53.39%',
    reasonEn: 'Win rate 53.39%',
    games: 1180
  },
  'draven-kalista': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%',
    games: 183
  },
  'draven-lucian': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%',
    games: 627
  },
  'drmundo-cassiopeia': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%',
    games: 49
  },
  'drmundo-lissandra': {
    reasonZh: '对线胜率 60.38%',
    reasonEn: 'Win rate 60.38%',
    games: 53
  },
  'drmundo-malphite': {
    reasonZh: '对线胜率 56.84%',
    reasonEn: 'Win rate 56.84%',
    games: 651
  },
  'drmundo-renekton': {
    reasonZh: '对线胜率 61.56%',
    reasonEn: 'Win rate 61.56%',
    games: 411
  },
  'drmundo-udyr': {
    reasonZh: '对线胜率 65.96%',
    reasonEn: 'Win rate 65.96%',
    games: 47
  },
  'ekko-fizz': {
    reasonZh: '对线胜率 57.04%',
    reasonEn: 'Win rate 57.04%',
    games: 277
  },
  'ekko-jarvaniv': {
    reasonZh: '对线胜率 56.88%',
    reasonEn: 'Win rate 56.88%',
    games: 494
  },
  'ekko-jayce': {
    reasonZh: '对线胜率 57.32%',
    reasonEn: 'Win rate 57.32%',
    games: 164
  },
  'ekko-orianna': {
    reasonZh: '对线胜率 61.79%',
    reasonEn: 'Win rate 61.79%',
    games: 123
  },
  'ekko-poppy': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 99
  },
  'ekko-udyr': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 144
  },
  'ekko-zac': {
    reasonZh: '对线胜率 60.14%',
    reasonEn: 'Win rate 60.14%',
    games: 143
  },
  'elise-fiddlesticks': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%',
    games: 61
  },
  'elise-jax': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'elise-karthus': {
    reasonZh: '对线胜率 70.21%',
    reasonEn: 'Win rate 70.21%',
    games: 47
  },
  'elise-kindred': {
    reasonZh: '对线胜率 61.90%',
    reasonEn: 'Win rate 61.90%',
    games: 84
  },
  'elise-malphite': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%',
    games: 33
  },
  'elise-nautilus': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 150
  },
  'elise-neeko': {
    reasonZh: '对线胜率 67.65%',
    reasonEn: 'Win rate 67.65%',
    games: 34
  },
  'elise-poppy': {
    reasonZh: '对线胜率 67.65%',
    reasonEn: 'Win rate 67.65%',
    games: 34
  },
  'elise-pyke': {
    reasonZh: '对线胜率 56.22%',
    reasonEn: 'Win rate 56.22%',
    games: 201
  },
  'elise-rakan': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 60
  },
  'elise-seraphine': {
    reasonZh: '对线胜率 54.07%',
    reasonEn: 'Win rate 54.07%',
    games: 172
  },
  'elise-sona': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 32
  },
  'elise-soraka': {
    reasonZh: '对线胜率 58.21%',
    reasonEn: 'Win rate 58.21%',
    games: 67
  },
  'elise-velkoz': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 62
  },
  'elise-vi': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%',
    games: 156
  },
  'elise-zilean': {
    reasonZh: '对线胜率 60.47%',
    reasonEn: 'Win rate 60.47%',
    games: 43
  },
  'evelynn-darius': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 30
  },
  'evelynn-graves': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%',
    games: 454
  },
  'evelynn-ivern': {
    reasonZh: '对线胜率 62.26%',
    reasonEn: 'Win rate 62.26%',
    games: 53
  },
  'evelynn-quinn': {
    reasonZh: '对线胜率 66.25%',
    reasonEn: 'Win rate 66.25%',
    games: 80
  },
  'evelynn-zyra': {
    reasonZh: '对线胜率 64.10%',
    reasonEn: 'Win rate 64.10%',
    games: 39
  },
  'ezreal-mel': {
    reasonZh: '对线胜率 50.13%',
    reasonEn: 'Win rate 50.13%',
    games: 397
  },
  'ezreal-varus': {
    reasonZh: '对线胜率 52.19%',
    reasonEn: 'Win rate 52.19%',
    games: 891
  },
  'ezreal-xerath': {
    reasonZh: '对线胜率 50.95%',
    reasonEn: 'Win rate 50.95%',
    games: 316
  },
  'ezreal-yunara': {
    reasonZh: '对线胜率 50.42%',
    reasonEn: 'Win rate 50.42%',
    games: 1666
  },
  'fiddlesticks-alistar': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%',
    games: 53
  },
  'fiddlesticks-bard': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 80
  },
  'fiddlesticks-belveth': {
    reasonZh: '对线胜率 58.75%',
    reasonEn: 'Win rate 58.75%',
    games: 80
  },
  'fiddlesticks-blitzcrank': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%',
    games: 52
  },
  'fiddlesticks-darius': {
    reasonZh: '对线胜率 63.41%',
    reasonEn: 'Win rate 63.41%',
    games: 41
  },
  'fiddlesticks-karma': {
    reasonZh: '对线胜率 67.07%',
    reasonEn: 'Win rate 67.07%',
    games: 82
  },
  'fiddlesticks-leona': {
    reasonZh: '对线胜率 60.27%',
    reasonEn: 'Win rate 60.27%',
    games: 73
  },
  'fiddlesticks-lulu': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%',
    games: 102
  },
  'fiddlesticks-malphite': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 35
  },
  'fiddlesticks-milio': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%',
    games: 71
  },
  'fiddlesticks-nami': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%',
    games: 78
  },
  'fiddlesticks-nautilus': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%',
    games: 118
  },
  'fiddlesticks-pantheon': {
    reasonZh: '对线胜率 81.25%',
    reasonEn: 'Win rate 81.25%',
    games: 32
  },
  'fiddlesticks-qiyana': {
    reasonZh: '对线胜率 62.26%',
    reasonEn: 'Win rate 62.26%',
    games: 106
  },
  'fiddlesticks-quinn': {
    reasonZh: '对线胜率 61.67%',
    reasonEn: 'Win rate 61.67%',
    games: 60
  },
  'fiddlesticks-rakan': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%',
    games: 39
  },
  'fiddlesticks-rammus': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%',
    games: 65
  },
  'fiddlesticks-shaco': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 209
  },
  'fiddlesticks-shyvana': {
    reasonZh: '对线胜率 59.42%',
    reasonEn: 'Win rate 59.42%',
    games: 138
  },
  'fiddlesticks-thresh': {
    reasonZh: '对线胜率 58.43%',
    reasonEn: 'Win rate 58.43%',
    games: 166
  },
  'fiora-cassiopeia': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 32
  },
  'fiora-jayce': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%',
    games: 319
  },
  'fiora-kled': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%',
    games: 104
  },
  'fiora-masteryi': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 32
  },
  'fiora-xinzhao': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 38
  },
  'fizz-aurelionsol': {
    reasonZh: '对线胜率 64.18%',
    reasonEn: 'Win rate 64.18%',
    games: 134
  },
  'fizz-chogath': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 45
  },
  'fizz-ekko': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%',
    games: 61
  },
  'fizz-evelynn': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%',
    games: 31
  },
  'fizz-graves': {
    reasonZh: '对线胜率 58.04%',
    reasonEn: 'Win rate 58.04%',
    games: 143
  },
  'fizz-hwei': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%',
    games: 453
  },
  'fizz-jarvaniv': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%',
    games: 72
  },
  'fizz-malphite': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 50
  },
  'fizz-orianna': {
    reasonZh: '对线胜率 57.59%',
    reasonEn: 'Win rate 57.59%',
    games: 158
  },
  'fizz-ryze': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 235
  },
  'fizz-syndra': {
    reasonZh: '对线胜率 53.04%',
    reasonEn: 'Win rate 53.04%',
    games: 873
  },
  'fizz-taliyah': {
    reasonZh: '对线胜率 60.53%',
    reasonEn: 'Win rate 60.53%',
    games: 76
  },
  'fizz-talon': {
    reasonZh: '对线胜率 61.22%',
    reasonEn: 'Win rate 61.22%',
    games: 49
  },
  'fizz-velkoz': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%',
    games: 91
  },
  'fizz-vi': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%',
    games: 66
  },
  'fizz-zoe': {
    reasonZh: '对线胜率 57.46%',
    reasonEn: 'Win rate 57.46%',
    games: 268
  },
  'galio-azir': {
    reasonZh: '对线胜率 62.62%',
    reasonEn: 'Win rate 62.62%',
    games: 107
  },
  'galio-blitzcrank': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%',
    games: 74
  },
  'galio-brand': {
    reasonZh: '对线胜率 63.75%',
    reasonEn: 'Win rate 63.75%',
    games: 80
  },
  'galio-cassiopeia': {
    reasonZh: '对线胜率 56.48%',
    reasonEn: 'Win rate 56.48%',
    games: 108
  },
  'galio-irelia': {
    reasonZh: '对线胜率 59.79%',
    reasonEn: 'Win rate 59.79%',
    games: 189
  },
  'galio-malphite': {
    reasonZh: '对线胜率 65.71%',
    reasonEn: 'Win rate 65.71%',
    games: 35
  },
  'galio-maokai': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 31
  },
  'galio-nami': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%',
    games: 123
  },
  'galio-nautilus': {
    reasonZh: '对线胜率 56.61%',
    reasonEn: 'Win rate 56.61%',
    games: 189
  },
  'galio-poppy': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 64
  },
  'galio-seraphine': {
    reasonZh: '对线胜率 56.54%',
    reasonEn: 'Win rate 56.54%',
    games: 214
  },
  'galio-sylas': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%',
    games: 828
  },
  'galio-taliyah': {
    reasonZh: '对线胜率 59.30%',
    reasonEn: 'Win rate 59.30%',
    games: 86
  },
  'galio-thresh': {
    reasonZh: '对线胜率 51.98%',
    reasonEn: 'Win rate 51.98%',
    games: 227
  },
  'galio-velkoz': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%',
    games: 96
  },
  'galio-yuumi': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 72
  },
  'gangplank-heimerdinger': {
    reasonZh: '对线胜率 58.51%',
    reasonEn: 'Win rate 58.51%',
    games: 94
  },
  'gangplank-renekton': {
    reasonZh: '对线胜率 58.78%',
    reasonEn: 'Win rate 58.78%',
    games: 444
  },
  'gangplank-singed': {
    reasonZh: '对线胜率 58.55%',
    reasonEn: 'Win rate 58.55%',
    games: 304
  },
  'gangplank-udyr': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 60
  },
  'gangplank-vayne': {
    reasonZh: '对线胜率 58.05%',
    reasonEn: 'Win rate 58.05%',
    games: 205
  },
  'gangplank-yone': {
    reasonZh: '对线胜率 54.82%',
    reasonEn: 'Win rate 54.82%',
    games: 757
  },
  'garen-gwen': {
    reasonZh: '对线胜率 57.48%',
    reasonEn: 'Win rate 57.48%',
    games: 301
  },
  'garen-jax': {
    reasonZh: '对线胜率 56.78%',
    reasonEn: 'Win rate 56.78%',
    games: 1305
  },
  'garen-ksante': {
    reasonZh: '对线胜率 58.24%',
    reasonEn: 'Win rate 58.24%',
    games: 843
  },
  'garen-xinzhao': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 104
  },
  'gnar-aurora': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 36
  },
  'gnar-jax': {
    reasonZh: '对线胜率 55.59%',
    reasonEn: 'Win rate 55.59%',
    games: 286
  },
  'gnar-ksante': {
    reasonZh: '对线胜率 57.26%',
    reasonEn: 'Win rate 57.26%',
    games: 482
  },
  'gnar-ryze': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%',
    games: 64
  },
  'gnar-xinzhao': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%',
    games: 67
  },
  'gragas-briar': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%',
    games: 79
  },
  'gragas-cassiopeia': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 35
  },
  'gragas-kayn': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%',
    games: 87
  },
  'gragas-lissandra': {
    reasonZh: '对线胜率 70.97%',
    reasonEn: 'Win rate 70.97%',
    games: 31
  },
  'gragas-monkeyking': {
    reasonZh: '对线胜率 70.00%',
    reasonEn: 'Win rate 70.00%',
    games: 50
  },
  'gragas-naafiri': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 94
  },
  'gragas-nidalee': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 33
  },
  'gragas-shaco': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%',
    games: 59
  },
  'gragas-tahmkench': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%',
    games: 65
  },
  'graves-lillia': {
    reasonZh: '对线胜率 54.39%',
    reasonEn: 'Win rate 54.39%',
    games: 421
  },
  'graves-pantheon': {
    reasonZh: '对线胜率 55.84%',
    reasonEn: 'Win rate 55.84%',
    games: 154
  },
  'graves-shaco': {
    reasonZh: '对线胜率 55.06%',
    reasonEn: 'Win rate 55.06%',
    games: 850
  },
  'graves-skarner': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%',
    games: 167
  },
  'gwen-drmundo': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 318
  },
  'gwen-gangplank': {
    reasonZh: '对线胜率 56.78%',
    reasonEn: 'Win rate 56.78%',
    games: 236
  },
  'gwen-graves': {
    reasonZh: '对线胜率 58.90%',
    reasonEn: 'Win rate 58.90%',
    games: 146
  },
  'gwen-hecarim': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 40
  },
  'gwen-irelia': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%',
    games: 122
  },
  'gwen-naafiri': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%',
    games: 80
  },
  'gwen-quinn': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%',
    games: 31
  },
  'gwen-sejuani': {
    reasonZh: '对线胜率 70.00%',
    reasonEn: 'Win rate 70.00%',
    games: 30
  },
  'gwen-vi': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%',
    games: 51
  },
  'gwen-zaahen': {
    reasonZh: '对线胜率 61.60%',
    reasonEn: 'Win rate 61.60%',
    games: 125
  },
  'hecarim-karthus': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%',
    games: 88
  },
  'hecarim-olaf': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%',
    games: 86
  },
  'hecarim-zaahen': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 38
  },
  'hecarim-zed': {
    reasonZh: '对线胜率 63.20%',
    reasonEn: 'Win rate 63.20%',
    games: 125
  },
  'heimerdinger-fiora': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 80
  },
  'heimerdinger-gragas': {
    reasonZh: '对线胜率 68.75%',
    reasonEn: 'Win rate 68.75%',
    games: 32
  },
  'heimerdinger-rumble': {
    reasonZh: '对线胜率 64.52%',
    reasonEn: 'Win rate 64.52%',
    games: 31
  },
  'heimerdinger-teemo': {
    reasonZh: '对线胜率 58.26%',
    reasonEn: 'Win rate 58.26%',
    games: 115
  },
  'heimerdinger-tryndamere': {
    reasonZh: '对线胜率 58.93%',
    reasonEn: 'Win rate 58.93%',
    games: 56
  },
  'heimerdinger-vayne': {
    reasonZh: '对线胜率 63.16%',
    reasonEn: 'Win rate 63.16%',
    games: 38
  },
  'heimerdinger-zaahen': {
    reasonZh: '对线胜率 62.96%',
    reasonEn: 'Win rate 62.96%',
    games: 54
  },
  'hwei-anivia': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%',
    games: 288
  },
  'hwei-aphelios': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 212
  },
  'hwei-bard': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%',
    games: 82
  },
  'hwei-brand': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%',
    games: 66
  },
  'hwei-braum': {
    reasonZh: '对线胜率 68.18%',
    reasonEn: 'Win rate 68.18%',
    games: 44
  },
  'hwei-cassiopeia': {
    reasonZh: '对线胜率 56.03%',
    reasonEn: 'Win rate 56.03%',
    games: 141
  },
  'hwei-ezreal': {
    reasonZh: '对线胜率 56.70%',
    reasonEn: 'Win rate 56.70%',
    games: 351
  },
  'hwei-janna': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 47
  },
  'hwei-jayce': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 95
  },
  'hwei-kalista': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%',
    games: 59
  },
  'hwei-kogmaw': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%',
    games: 52
  },
  'hwei-lucian': {
    reasonZh: '对线胜率 57.67%',
    reasonEn: 'Win rate 57.67%',
    games: 163
  },
  'hwei-nami': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%',
    games: 104
  },
  'hwei-nilah': {
    reasonZh: '对线胜率 52.94%',
    reasonEn: 'Win rate 52.94%',
    games: 34
  },
  'hwei-orianna': {
    reasonZh: '对线胜率 55.65%',
    reasonEn: 'Win rate 55.65%',
    games: 239
  },
  'hwei-sivir': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 133
  },
  'hwei-swain': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 72
  },
  'hwei-tahmkench': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%',
    games: 39
  },
  'hwei-twitch': {
    reasonZh: '对线胜率 57.33%',
    reasonEn: 'Win rate 57.33%',
    games: 150
  },
  'hwei-viktor': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%',
    games: 1199
  },
  'hwei-xayah': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%',
    games: 72
  },
  'hwei-yunara': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%',
    games: 111
  },
  'hwei-yuumi': {
    reasonZh: '对线胜率 62.67%',
    reasonEn: 'Win rate 62.67%',
    games: 75
  },
  'illaoi-camille': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%',
    games: 148
  },
  'illaoi-kled': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 110
  },
  'illaoi-monkeyking': {
    reasonZh: '对线胜率 64.29%',
    reasonEn: 'Win rate 64.29%',
    games: 56
  },
  'illaoi-renekton': {
    reasonZh: '对线胜率 58.09%',
    reasonEn: 'Win rate 58.09%',
    games: 346
  },
  'illaoi-rumble': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%',
    games: 77
  },
  'illaoi-xinzhao': {
    reasonZh: '对线胜率 58.14%',
    reasonEn: 'Win rate 58.14%',
    games: 43
  },
  'irelia-aatrox': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%',
    games: 651
  },
  'irelia-aurelionsol': {
    reasonZh: '对线胜率 65.00%',
    reasonEn: 'Win rate 65.00%',
    games: 60
  },
  'irelia-aurora': {
    reasonZh: '对线胜率 59.74%',
    reasonEn: 'Win rate 59.74%',
    games: 77
  },
  'irelia-kassadin': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 156
  },
  'irelia-kayle': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 243
  },
  'irelia-malzahar': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%',
    games: 45
  },
  'irelia-mel': {
    reasonZh: '对线胜率 64.34%',
    reasonEn: 'Win rate 64.34%',
    games: 129
  },
  'irelia-quinn': {
    reasonZh: '对线胜率 58.14%',
    reasonEn: 'Win rate 58.14%',
    games: 86
  },
  'irelia-ryze': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%',
    games: 54
  },
  'irelia-syndra': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%',
    games: 379
  },
  'irelia-urgot': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 140
  },
  'ivern-fiddlesticks': {
    reasonZh: '对线胜率 59.62%',
    reasonEn: 'Win rate 59.62%',
    games: 52
  },
  'ivern-graves': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%',
    games: 205
  },
  'ivern-jarvaniv': {
    reasonZh: '对线胜率 61.22%',
    reasonEn: 'Win rate 61.22%',
    games: 147
  },
  'ivern-kayn': {
    reasonZh: '对线胜率 56.13%',
    reasonEn: 'Win rate 56.13%',
    games: 155
  },
  'ivern-leesin': {
    reasonZh: '对线胜率 60.55%',
    reasonEn: 'Win rate 60.55%',
    games: 218
  },
  'ivern-lillia': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 60
  },
  'ivern-masteryi': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%',
    games: 115
  },
  'ivern-monkeyking': {
    reasonZh: '对线胜率 56.18%',
    reasonEn: 'Win rate 56.18%',
    games: 89
  },
  'ivern-nunu': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%',
    games: 51
  },
  'ivern-warwick': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%',
    games: 65
  },
  'janna-alistar': {
    reasonZh: '对线胜率 57.40%',
    reasonEn: 'Win rate 57.40%',
    games: 338
  },
  'janna-camille': {
    reasonZh: '对线胜率 57.82%',
    reasonEn: 'Win rate 57.82%',
    games: 147
  },
  'janna-mel': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 78
  },
  'janna-milio': {
    reasonZh: '对线胜率 54.42%',
    reasonEn: 'Win rate 54.42%',
    games: 509
  },
  'janna-shen': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 34
  },
  'janna-zoe': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%',
    games: 74
  },
  'jarvaniv-aatrox': {
    reasonZh: '对线胜率 58.25%',
    reasonEn: 'Win rate 58.25%',
    games: 206
  },
  'jarvaniv-quinn': {
    reasonZh: '对线胜率 57.46%',
    reasonEn: 'Win rate 57.46%',
    games: 181
  },
  'jarvaniv-trundle': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 63
  },
  'jarvaniv-zed': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%',
    games: 260
  },
  'jax-camille': {
    reasonZh: '对线胜率 57.86%',
    reasonEn: 'Win rate 57.86%',
    games: 401
  },
  'jax-kindred': {
    reasonZh: '对线胜率 68.29%',
    reasonEn: 'Win rate 68.29%',
    games: 82
  },
  'jax-nasus': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%',
    games: 222
  },
  'jax-ryze': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 66
  },
  'jax-udyr': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%',
    games: 59
  },
  'jax-volibear': {
    reasonZh: '对线胜率 60.94%',
    reasonEn: 'Win rate 60.94%',
    games: 320
  },
  'jax-warwick': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 188
  },
  'jax-xinzhao': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%',
    games: 153
  },
  'jayce-annie': {
    reasonZh: '对线胜率 65.79%',
    reasonEn: 'Win rate 65.79%',
    games: 38
  },
  'jayce-aurora': {
    reasonZh: '对线胜率 56.79%',
    reasonEn: 'Win rate 56.79%',
    games: 81
  },
  'jayce-kennen': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%',
    games: 230
  },
  'jayce-reksai': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%',
    games: 121
  },
  'jayce-ryze': {
    reasonZh: '对线胜率 67.86%',
    reasonEn: 'Win rate 67.86%',
    games: 56
  },
  'jayce-syndra': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 120
  },
  'jayce-vayne': {
    reasonZh: '对线胜率 57.72%',
    reasonEn: 'Win rate 57.72%',
    games: 324
  },
  'jayce-vex': {
    reasonZh: '对线胜率 51.61%',
    reasonEn: 'Win rate 51.61%',
    games: 31
  },
  'jayce-volibear': {
    reasonZh: '对线胜率 58.28%',
    reasonEn: 'Win rate 58.28%',
    games: 151
  },
  'jhin-kalista': {
    reasonZh: '对线胜率 51.65%',
    reasonEn: 'Win rate 51.65%',
    games: 577
  },
  'jhin-katarina': {
    reasonZh: '对线胜率 53.29%',
    reasonEn: 'Win rate 53.29%',
    games: 167
  },
  'jhin-mel': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%',
    games: 388
  },
  'jhin-varus': {
    reasonZh: '对线胜率 53.36%',
    reasonEn: 'Win rate 53.36%',
    games: 862
  },
  'jhin-xayah': {
    reasonZh: '对线胜率 52.40%',
    reasonEn: 'Win rate 52.40%',
    games: 981
  },
  'jinx-corki': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%',
    games: 261
  },
  'jinx-kaisa': {
    reasonZh: '对线胜率 54.22%',
    reasonEn: 'Win rate 54.22%',
    games: 3923
  },
  'jinx-katarina': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%',
    games: 137
  },
  'jinx-syndra': {
    reasonZh: '对线胜率 55.64%',
    reasonEn: 'Win rate 55.64%',
    games: 133
  },
  'jinx-varus': {
    reasonZh: '对线胜率 55.30%',
    reasonEn: 'Win rate 55.30%',
    games: 604
  },
  'kaisa-ezreal': {
    reasonZh: '对线胜率 52.95%',
    reasonEn: 'Win rate 52.95%',
    games: 7250
  },
  'kaisa-jhin': {
    reasonZh: '对线胜率 51.10%',
    reasonEn: 'Win rate 51.10%',
    games: 5474
  },
  'kaisa-mel': {
    reasonZh: '对线胜率 51.32%',
    reasonEn: 'Win rate 51.32%',
    games: 341
  },
  'kaisa-syndra': {
    reasonZh: '对线胜率 52.49%',
    reasonEn: 'Win rate 52.49%',
    games: 221
  },
  'kaisa-yasuo': {
    reasonZh: '对线胜率 50.58%',
    reasonEn: 'Win rate 50.58%',
    games: 342
  },
  'kalista-corki': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%',
    games: 71
  },
  'kalista-ezreal': {
    reasonZh: '对线胜率 53.16%',
    reasonEn: 'Win rate 53.16%',
    games: 681
  },
  'kalista-mel': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 40
  },
  'kalista-velkoz': {
    reasonZh: '对线胜率 61.70%',
    reasonEn: 'Win rate 61.70%',
    games: 47
  },
  'kalista-zeri': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%',
    games: 176
  },
  'karma-brand': {
    reasonZh: '对线胜率 53.60%',
    reasonEn: 'Win rate 53.60%',
    games: 431
  },
  'karma-hwei': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%',
    games: 112
  },
  'karma-leblanc': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%',
    games: 119
  },
  'karma-mel': {
    reasonZh: '对线胜率 60.67%',
    reasonEn: 'Win rate 60.67%',
    games: 267
  },
  'karma-zyra': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%',
    games: 369
  },
  'karthus-ashe': {
    reasonZh: '对线胜率 58.12%',
    reasonEn: 'Win rate 58.12%',
    games: 117
  },
  'karthus-draven': {
    reasonZh: '对线胜率 58.23%',
    reasonEn: 'Win rate 58.23%',
    games: 79
  },
  'karthus-evelynn': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%',
    games: 55
  },
  'karthus-jhin': {
    reasonZh: '对线胜率 56.98%',
    reasonEn: 'Win rate 56.98%',
    games: 179
  },
  'karthus-jinx': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%',
    games: 137
  },
  'karthus-lillia': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 45
  },
  'karthus-lucian': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 84
  },
  'karthus-missfortune': {
    reasonZh: '对线胜率 62.71%',
    reasonEn: 'Win rate 62.71%',
    games: 59
  },
  'karthus-nunu': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%',
    games: 44
  },
  'karthus-samira': {
    reasonZh: '对线胜率 62.79%',
    reasonEn: 'Win rate 62.79%',
    games: 43
  },
  'karthus-tristana': {
    reasonZh: '对线胜率 58.89%',
    reasonEn: 'Win rate 58.89%',
    games: 90
  },
  'karthus-udyr': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 36
  },
  'karthus-varus': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 33
  },
  'karthus-xayah': {
    reasonZh: '对线胜率 65.79%',
    reasonEn: 'Win rate 65.79%',
    games: 38
  },
  'kassadin-galio': {
    reasonZh: '对线胜率 55.70%',
    reasonEn: 'Win rate 55.70%',
    games: 149
  },
  'kassadin-mel': {
    reasonZh: '对线胜率 59.63%',
    reasonEn: 'Win rate 59.63%',
    games: 109
  },
  'kassadin-sion': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 31
  },
  'kassadin-taliyah': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%',
    games: 45
  },
  'katarina-anivia': {
    reasonZh: '对线胜率 54.85%',
    reasonEn: 'Win rate 54.85%',
    games: 268
  },
  'katarina-ashe': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%',
    games: 115
  },
  'katarina-senna': {
    reasonZh: '对线胜率 53.92%',
    reasonEn: 'Win rate 53.92%',
    games: 102
  },
  'katarina-sion': {
    reasonZh: '对线胜率 58.51%',
    reasonEn: 'Win rate 58.51%',
    games: 94
  },
  'katarina-sivir': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 47
  },
  'katarina-swain': {
    reasonZh: '对线胜率 62.03%',
    reasonEn: 'Win rate 62.03%',
    games: 79
  },
  'katarina-taliyah': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%',
    games: 111
  },
  'katarina-talon': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%',
    games: 301
  },
  'katarina-twitch': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%',
    games: 74
  },
  'katarina-ziggs': {
    reasonZh: '对线胜率 61.67%',
    reasonEn: 'Win rate 61.67%',
    games: 60
  },
  'kayle-ambessa': {
    reasonZh: '对线胜率 59.40%',
    reasonEn: 'Win rate 59.40%',
    games: 133
  },
  'kayle-gangplank': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 324
  },
  'kayle-garen': {
    reasonZh: '对线胜率 56.21%',
    reasonEn: 'Win rate 56.21%',
    games: 701
  },
  'kayle-gwen': {
    reasonZh: '对线胜率 60.23%',
    reasonEn: 'Win rate 60.23%',
    games: 88
  },
  'kayle-kled': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 65
  },
  'kayle-ksante': {
    reasonZh: '对线胜率 63.82%',
    reasonEn: 'Win rate 63.82%',
    games: 293
  },
  'kayle-mordekaiser': {
    reasonZh: '对线胜率 59.11%',
    reasonEn: 'Win rate 59.11%',
    games: 225
  },
  'kayle-olaf': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 120
  },
  'kayle-shen': {
    reasonZh: '对线胜率 58.91%',
    reasonEn: 'Win rate 58.91%',
    games: 258
  },
  'kayle-udyr': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'kayle-urgot': {
    reasonZh: '对线胜率 55.08%',
    reasonEn: 'Win rate 55.08%',
    games: 118
  },
  'kayle-varus': {
    reasonZh: '对线胜率 64.52%',
    reasonEn: 'Win rate 64.52%',
    games: 31
  },
  'kayn-amumu': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 264
  },
  'kayn-karthus': {
    reasonZh: '对线胜率 56.30%',
    reasonEn: 'Win rate 56.30%',
    games: 135
  },
  'kayn-sejuani': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%',
    games: 235
  },
  'kayn-volibear': {
    reasonZh: '对线胜率 55.83%',
    reasonEn: 'Win rate 55.83%',
    games: 120
  },
  'kennen-ksante': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%',
    games: 124
  },
  'kennen-pantheon': {
    reasonZh: '对线胜率 63.77%',
    reasonEn: 'Win rate 63.77%',
    games: 69
  },
  'kennen-sett': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 162
  },
  'kennen-sion': {
    reasonZh: '对线胜率 57.23%',
    reasonEn: 'Win rate 57.23%',
    games: 159
  },
  'kennen-urgot': {
    reasonZh: '对线胜率 61.73%',
    reasonEn: 'Win rate 61.73%',
    games: 81
  },
  'kennen-volibear': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%',
    games: 54
  },
  'kennen-xinzhao': {
    reasonZh: '对线胜率 69.44%',
    reasonEn: 'Win rate 69.44%',
    games: 36
  },
  'khazix-ekko': {
    reasonZh: '对线胜率 56.81%',
    reasonEn: 'Win rate 56.81%',
    games: 345
  },
  'khazix-fizz': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 66
  },
  'khazix-ivern': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%',
    games: 96
  },
  'khazix-zed': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 259
  },
  'khazix-zyra': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 63
  },
  'kindred-ambessa': {
    reasonZh: '对线胜率 63.27%',
    reasonEn: 'Win rate 63.27%',
    games: 49
  },
  'kindred-poppy': {
    reasonZh: '对线胜率 65.85%',
    reasonEn: 'Win rate 65.85%',
    games: 41
  },
  'kindred-rengar': {
    reasonZh: '对线胜率 64.10%',
    reasonEn: 'Win rate 64.10%',
    games: 195
  },
  'kindred-sejuani': {
    reasonZh: '对线胜率 60.34%',
    reasonEn: 'Win rate 60.34%',
    games: 58
  },
  'kindred-skarner': {
    reasonZh: '对线胜率 62.30%',
    reasonEn: 'Win rate 62.30%',
    games: 61
  },
  'kindred-zac': {
    reasonZh: '对线胜率 66.36%',
    reasonEn: 'Win rate 66.36%',
    games: 107
  },
  'kled-aatrox': {
    reasonZh: '对线胜率 54.31%',
    reasonEn: 'Win rate 54.31%',
    games: 232
  },
  'kled-chogath': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 76
  },
  'kled-kennen': {
    reasonZh: '对线胜率 67.50%',
    reasonEn: 'Win rate 67.50%',
    games: 40
  },
  'kled-malphite': {
    reasonZh: '对线胜率 57.62%',
    reasonEn: 'Win rate 57.62%',
    games: 151
  },
  'kled-nasus': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 60
  },
  'kled-vayne': {
    reasonZh: '对线胜率 63.24%',
    reasonEn: 'Win rate 63.24%',
    games: 68
  },
  'kled-warwick': {
    reasonZh: '对线胜率 63.27%',
    reasonEn: 'Win rate 63.27%',
    games: 49
  },
  'kogmaw-ashe': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%',
    games: 364
  },
  'kogmaw-brand': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 48
  },
  'kogmaw-jhin': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 450
  },
  'kogmaw-varus': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 80
  },
  'kogmaw-vayne': {
    reasonZh: '对线胜率 62.71%',
    reasonEn: 'Win rate 62.71%',
    games: 177
  },
  'kogmaw-xayah': {
    reasonZh: '对线胜率 61.22%',
    reasonEn: 'Win rate 61.22%',
    games: 98
  },
  'ksante-anivia': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 60
  },
  'ksante-chogath': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 136
  },
  'ksante-heimerdinger': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%',
    games: 100
  },
  'ksante-masteryi': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%',
    games: 49
  },
  'leblanc-aurelionsol': {
    reasonZh: '对线胜率 56.64%',
    reasonEn: 'Win rate 56.64%',
    games: 113
  },
  'leblanc-azir': {
    reasonZh: '对线胜率 56.78%',
    reasonEn: 'Win rate 56.78%',
    games: 118
  },
  'leblanc-brand': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%',
    games: 71
  },
  'leblanc-cassiopeia': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%',
    games: 116
  },
  'leblanc-chogath': {
    reasonZh: '对线胜率 71.05%',
    reasonEn: 'Win rate 71.05%',
    games: 38
  },
  'leblanc-lux': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%',
    games: 92
  },
  'leblanc-zyra': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%',
    games: 30
  },
  'leesin-ambessa': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 275
  },
  'leesin-fizz': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%',
    games: 176
  },
  'leesin-karthus': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%',
    games: 297
  },
  'leesin-zed': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%',
    games: 573
  },
  'leona-amumu': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%',
    games: 94
  },
  'leona-anivia': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%',
    games: 73
  },
  'leona-camille': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 294
  },
  'leona-elise': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 119
  },
  'leona-mel': {
    reasonZh: '对线胜率 61.70%',
    reasonEn: 'Win rate 61.70%',
    games: 235
  },
  'leona-nami': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%',
    games: 1075
  },
  'lillia-gwen': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 34
  },
  'lillia-jax': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%',
    games: 84
  },
  'lillia-taliyah': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'lillia-zac': {
    reasonZh: '对线胜率 60.90%',
    reasonEn: 'Win rate 60.90%',
    games: 156
  },
  'lissandra-ambessa': {
    reasonZh: '对线胜率 64.10%',
    reasonEn: 'Win rate 64.10%',
    games: 39
  },
  'lissandra-diana': {
    reasonZh: '对线胜率 52.59%',
    reasonEn: 'Win rate 52.59%',
    games: 386
  },
  'lissandra-fiora': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%',
    games: 37
  },
  'lissandra-kayle': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%',
    games: 31
  },
  'lissandra-ksante': {
    reasonZh: '对线胜率 64.62%',
    reasonEn: 'Win rate 64.62%',
    games: 65
  },
  'lissandra-malphite': {
    reasonZh: '对线胜率 60.47%',
    reasonEn: 'Win rate 60.47%',
    games: 43
  },
  'lissandra-naafiri': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%',
    games: 230
  },
  'lissandra-renekton': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%',
    games: 61
  },
  'lissandra-riven': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 44
  },
  'lissandra-singed': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'lissandra-yasuo': {
    reasonZh: '对线胜率 57.67%',
    reasonEn: 'Win rate 57.67%',
    games: 893
  },
  'lissandra-yone': {
    reasonZh: '对线胜率 57.12%',
    reasonEn: 'Win rate 57.12%',
    games: 555
  },
  'lucian-ezreal': {
    reasonZh: '对线胜率 52.82%',
    reasonEn: 'Win rate 52.82%',
    games: 2859
  },
  'lucian-mel': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%',
    games: 156
  },
  'lucian-syndra': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%',
    games: 87
  },
  'lucian-velkoz': {
    reasonZh: '对线胜率 51.91%',
    reasonEn: 'Win rate 51.91%',
    games: 131
  },
  'lucian-yunara': {
    reasonZh: '对线胜率 54.26%',
    reasonEn: 'Win rate 54.26%',
    games: 881
  },
  'lulu-mel': {
    reasonZh: '对线胜率 57.20%',
    reasonEn: 'Win rate 57.20%',
    games: 236
  },
  'lulu-shaco': {
    reasonZh: '对线胜率 53.04%',
    reasonEn: 'Win rate 53.04%',
    games: 230
  },
  'lulu-soraka': {
    reasonZh: '对线胜率 52.16%',
    reasonEn: 'Win rate 52.16%',
    games: 1020
  },
  'lulu-yuumi': {
    reasonZh: '对线胜率 54.12%',
    reasonEn: 'Win rate 54.12%',
    games: 1273
  },
  'lulu-zoe': {
    reasonZh: '对线胜率 52.90%',
    reasonEn: 'Win rate 52.90%',
    games: 138
  },
  'lulu-zyra': {
    reasonZh: '对线胜率 53.18%',
    reasonEn: 'Win rate 53.18%',
    games: 425
  },
  'lux-anivia': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%',
    games: 74
  },
  'lux-caitlyn': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%',
    games: 266
  },
  'lux-fiddlesticks': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 66
  },
  'lux-galio': {
    reasonZh: '对线胜率 55.86%',
    reasonEn: 'Win rate 55.86%',
    games: 111
  },
  'lux-jhin': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%',
    games: 227
  },
  'lux-jinx': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%',
    games: 222
  },
  'lux-kaisa': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 230
  },
  'lux-missfortune': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%',
    games: 117
  },
  'lux-rakan': {
    reasonZh: '对线胜率 53.83%',
    reasonEn: 'Win rate 53.83%',
    games: 366
  },
  'lux-renata': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%',
    games: 92
  },
  'lux-smolder': {
    reasonZh: '对线胜率 54.74%',
    reasonEn: 'Win rate 54.74%',
    games: 95
  },
  'lux-sylas': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%',
    games: 163
  },
  'lux-tristana': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 119
  },
  'lux-vex': {
    reasonZh: '对线胜率 53.98%',
    reasonEn: 'Win rate 53.98%',
    games: 176
  },
  'lux-yunara': {
    reasonZh: '对线胜率 60.47%',
    reasonEn: 'Win rate 60.47%',
    games: 86
  },
  'lux-zed': {
    reasonZh: '对线胜率 54.80%',
    reasonEn: 'Win rate 54.80%',
    games: 469
  },
  'lux-ziggs': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 40
  },
  'malphite-ambessa': {
    reasonZh: '对线胜率 57.39%',
    reasonEn: 'Win rate 57.39%',
    games: 467
  },
  'malphite-belveth': {
    reasonZh: '对线胜率 57.50%',
    reasonEn: 'Win rate 57.50%',
    games: 40
  },
  'malphite-briar': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 91
  },
  'malphite-gangplank': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 715
  },
  'malphite-gnar': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%',
    games: 545
  },
  'malphite-jayce': {
    reasonZh: '对线胜率 55.38%',
    reasonEn: 'Win rate 55.38%',
    games: 1459
  },
  'malphite-khazix': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%',
    games: 87
  },
  'malphite-leesin': {
    reasonZh: '对线胜率 54.49%',
    reasonEn: 'Win rate 54.49%',
    games: 178
  },
  'malphite-nidalee': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%',
    games: 37
  },
  'malphite-rengar': {
    reasonZh: '对线胜率 61.73%',
    reasonEn: 'Win rate 61.73%',
    games: 81
  },
  'malphite-teemo': {
    reasonZh: '对线胜率 55.67%',
    reasonEn: 'Win rate 55.67%',
    games: 749
  },
  'malphite-varus': {
    reasonZh: '对线胜率 64.84%',
    reasonEn: 'Win rate 64.84%',
    games: 128
  },
  'malphite-vayne': {
    reasonZh: '对线胜率 62.71%',
    reasonEn: 'Win rate 62.71%',
    games: 472
  },
  'malphite-veigar': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 36
  },
  'malphite-viego': {
    reasonZh: '对线胜率 57.37%',
    reasonEn: 'Win rate 57.37%',
    games: 190
  },
  'malphite-xinzhao': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%',
    games: 90
  },
  'malphite-zed': {
    reasonZh: '对线胜率 58.58%',
    reasonEn: 'Win rate 58.58%',
    games: 437
  },
  'malzahar-aatrox': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 63
  },
  'malzahar-akali': {
    reasonZh: '对线胜率 55.83%',
    reasonEn: 'Win rate 55.83%',
    games: 489
  },
  'malzahar-azir': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%',
    games: 128
  },
  'malzahar-darius': {
    reasonZh: '对线胜率 56.58%',
    reasonEn: 'Win rate 56.58%',
    games: 76
  },
  'malzahar-mel': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%',
    games: 238
  },
  'malzahar-pantheon': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 51
  },
  'malzahar-renekton': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 40
  },
  'malzahar-ryze': {
    reasonZh: '对线胜率 56.96%',
    reasonEn: 'Win rate 56.96%',
    games: 237
  },
  'malzahar-sylas': {
    reasonZh: '对线胜率 53.12%',
    reasonEn: 'Win rate 53.12%',
    games: 721
  },
  'maokai-lulu': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 245
  },
  'maokai-lux': {
    reasonZh: '对线胜率 55.97%',
    reasonEn: 'Win rate 55.97%',
    games: 159
  },
  'maokai-nami': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%',
    games: 275
  },
  'maokai-neeko': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 50
  },
  'maokai-poppy': {
    reasonZh: '对线胜率 58.10%',
    reasonEn: 'Win rate 58.10%',
    games: 105
  },
  'maokai-shaco': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 47
  },
  'maokai-sylas': {
    reasonZh: '对线胜率 76.81%',
    reasonEn: 'Win rate 76.81%',
    games: 69
  },
  'maokai-zoe': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 33
  },
  'masteryi-kayle': {
    reasonZh: '对线胜率 65.57%',
    reasonEn: 'Win rate 65.57%',
    games: 61
  },
  'masteryi-malphite': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 84
  },
  'masteryi-olaf': {
    reasonZh: '对线胜率 61.38%',
    reasonEn: 'Win rate 61.38%',
    games: 145
  },
  'masteryi-poppy': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%',
    games: 134
  },
  'masteryi-qiyana': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%',
    games: 302
  },
  'masteryi-rengar': {
    reasonZh: '对线胜率 59.89%',
    reasonEn: 'Win rate 59.89%',
    games: 526
  },
  'mel-brand': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 45
  },
  'mel-cassiopeia': {
    reasonZh: '对线胜率 51.47%',
    reasonEn: 'Win rate 51.47%',
    games: 68
  },
  'mel-jayce': {
    reasonZh: '对线胜率 54.05%',
    reasonEn: 'Win rate 54.05%',
    games: 37
  },
  'mel-tristana': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%',
    games: 41
  },
  'mel-varus': {
    reasonZh: '对线胜率 61.76%',
    reasonEn: 'Win rate 61.76%',
    games: 68
  },
  'mel-veigar': {
    reasonZh: '对线胜率 50.59%',
    reasonEn: 'Win rate 50.59%',
    games: 170
  },
  'milio-brand': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 300
  },
  'milio-camille': {
    reasonZh: '对线胜率 59.21%',
    reasonEn: 'Win rate 59.21%',
    games: 152
  },
  'milio-galio': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%',
    games: 73
  },
  'milio-mel': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%',
    games: 128
  },
  'milio-taric': {
    reasonZh: '对线胜率 54.86%',
    reasonEn: 'Win rate 54.86%',
    games: 144
  },
  'milio-zoe': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%',
    games: 105
  },
  'missfortune-aphelios': {
    reasonZh: '对线胜率 53.19%',
    reasonEn: 'Win rate 53.19%',
    games: 1177
  },
  'missfortune-corki': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%',
    games: 150
  },
  'missfortune-kalista': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%',
    games: 218
  },
  'missfortune-varus': {
    reasonZh: '对线胜率 53.95%',
    reasonEn: 'Win rate 53.95%',
    games: 304
  },
  'missfortune-velkoz': {
    reasonZh: '对线胜率 54.37%',
    reasonEn: 'Win rate 54.37%',
    games: 103
  },
  'monkeyking-drmundo': {
    reasonZh: '对线胜率 59.37%',
    reasonEn: 'Win rate 59.37%',
    games: 64
  },
  'monkeyking-jayce': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%',
    games: 174
  },
  'monkeyking-khazix': {
    reasonZh: '对线胜率 57.17%',
    reasonEn: 'Win rate 57.17%',
    games: 502
  },
  'monkeyking-naafiri': {
    reasonZh: '对线胜率 56.01%',
    reasonEn: 'Win rate 56.01%',
    games: 832
  },
  'monkeyking-ornn': {
    reasonZh: '对线胜率 55.93%',
    reasonEn: 'Win rate 55.93%',
    games: 59
  },
  'monkeyking-pantheon': {
    reasonZh: '对线胜率 62.67%',
    reasonEn: 'Win rate 62.67%',
    games: 75
  },
  'monkeyking-quinn': {
    reasonZh: '对线胜率 58.20%',
    reasonEn: 'Win rate 58.20%',
    games: 122
  },
  'monkeyking-skarner': {
    reasonZh: '对线胜率 57.00%',
    reasonEn: 'Win rate 57.00%',
    games: 100
  },
  'mordekaiser-gangplank': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%',
    games: 426
  },
  'mordekaiser-malzahar': {
    reasonZh: '对线胜率 54.00%',
    reasonEn: 'Win rate 54.00%',
    games: 50
  },
  'mordekaiser-sion': {
    reasonZh: '对线胜率 56.95%',
    reasonEn: 'Win rate 56.95%',
    games: 446
  },
  'mordekaiser-vladimir': {
    reasonZh: '对线胜率 54.47%',
    reasonEn: 'Win rate 54.47%',
    games: 123
  },
  'mordekaiser-xinzhao': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 63
  },
  'morgana-bard': {
    reasonZh: '对线胜率 56.79%',
    reasonEn: 'Win rate 56.79%',
    games: 405
  },
  'morgana-maokai': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 133
  },
  'morgana-renata': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%',
    games: 61
  },
  'morgana-shen': {
    reasonZh: '对线胜率 62.22%',
    reasonEn: 'Win rate 62.22%',
    games: 45
  },
  'morgana-sylas': {
    reasonZh: '对线胜率 62.77%',
    reasonEn: 'Win rate 62.77%',
    games: 94
  },
  'morgana-zoe': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 72
  },
  'naafiri-anivia': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 106
  },
  'naafiri-annie': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%',
    games: 66
  },
  'naafiri-azir': {
    reasonZh: '对线胜率 60.38%',
    reasonEn: 'Win rate 60.38%',
    games: 53
  },
  'naafiri-hwei': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%',
    games: 214
  },
  'naafiri-ivern': {
    reasonZh: '对线胜率 56.93%',
    reasonEn: 'Win rate 56.93%',
    games: 137
  },
  'naafiri-karthus': {
    reasonZh: '对线胜率 60.90%',
    reasonEn: 'Win rate 60.90%',
    games: 133
  },
  'naafiri-khazix': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%',
    games: 711
  },
  'naafiri-leblanc': {
    reasonZh: '对线胜率 58.92%',
    reasonEn: 'Win rate 58.92%',
    games: 241
  },
  'naafiri-sejuani': {
    reasonZh: '对线胜率 58.72%',
    reasonEn: 'Win rate 58.72%',
    games: 218
  },
  'naafiri-trundle': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%',
    games: 65
  },
  'nami-camille': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%',
    games: 215
  },
  'nami-elise': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%',
    games: 106
  },
  'nami-leblanc': {
    reasonZh: '对线胜率 56.70%',
    reasonEn: 'Win rate 56.70%',
    games: 97
  },
  'nami-swain': {
    reasonZh: '对线胜率 58.36%',
    reasonEn: 'Win rate 58.36%',
    games: 329
  },
  'nami-yuumi': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%',
    games: 795
  },
  'nasus-anivia': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'nasus-briar': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%',
    games: 328
  },
  'nasus-elise': {
    reasonZh: '对线胜率 58.76%',
    reasonEn: 'Win rate 58.76%',
    games: 97
  },
  'nasus-karthus': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 54
  },
  'nasus-kayn': {
    reasonZh: '对线胜率 57.96%',
    reasonEn: 'Win rate 57.96%',
    games: 421
  },
  'nasus-malzahar': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 36
  },
  'nasus-naafiri': {
    reasonZh: '对线胜率 60.70%',
    reasonEn: 'Win rate 60.70%',
    games: 313
  },
  'nasus-quinn': {
    reasonZh: '对线胜率 61.40%',
    reasonEn: 'Win rate 61.40%',
    games: 57
  },
  'nasus-reksai': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 96
  },
  'nasus-sejuani': {
    reasonZh: '对线胜率 61.17%',
    reasonEn: 'Win rate 61.17%',
    games: 103
  },
  'nasus-udyr': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'nasus-viego': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%',
    games: 511
  },
  'nasus-vladimir': {
    reasonZh: '对线胜率 59.20%',
    reasonEn: 'Win rate 59.20%',
    games: 125
  },
  'nasus-warwick': {
    reasonZh: '对线胜率 56.40%',
    reasonEn: 'Win rate 56.40%',
    games: 172
  },
  'nautilus-camille': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%',
    games: 451
  },
  'nautilus-hwei': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 128
  },
  'nautilus-leblanc': {
    reasonZh: '对线胜率 59.21%',
    reasonEn: 'Win rate 59.21%',
    games: 152
  },
  'nautilus-mel': {
    reasonZh: '对线胜率 60.90%',
    reasonEn: 'Win rate 60.90%',
    games: 266
  },
  'nautilus-yuumi': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 1064
  },
  'neeko-brand': {
    reasonZh: '对线胜率 58.16%',
    reasonEn: 'Win rate 58.16%',
    games: 98
  },
  'neeko-mel': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%',
    games: 71
  },
  'neeko-morgana': {
    reasonZh: '对线胜率 55.74%',
    reasonEn: 'Win rate 55.74%',
    games: 122
  },
  'neeko-rakan': {
    reasonZh: '对线胜率 56.43%',
    reasonEn: 'Win rate 56.43%',
    games: 140
  },
  'neeko-xerath': {
    reasonZh: '对线胜率 55.46%',
    reasonEn: 'Win rate 55.46%',
    games: 119
  },
  'nidalee-karthus': {
    reasonZh: '对线胜率 60.49%',
    reasonEn: 'Win rate 60.49%',
    games: 81
  },
  'nidalee-olaf': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 47
  },
  'nidalee-qiyana': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 231
  },
  'nidalee-reksai': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 144
  },
  'nidalee-viego': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%',
    games: 495
  },
  'nilah-caitlyn': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 279
  },
  'nilah-lucian': {
    reasonZh: '对线胜率 60.68%',
    reasonEn: 'Win rate 60.68%',
    games: 206
  },
  'nilah-mel': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 30
  },
  'nilah-samira': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%',
    games: 229
  },
  'nilah-twitch': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 204
  },
  'nilah-varus': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 66
  },
  'nocturne-fizz': {
    reasonZh: '对线胜率 61.90%',
    reasonEn: 'Win rate 61.90%',
    games: 84
  },
  'nocturne-pantheon': {
    reasonZh: '对线胜率 58.00%',
    reasonEn: 'Win rate 58.00%',
    games: 150
  },
  'nocturne-taliyah': {
    reasonZh: '对线胜率 61.25%',
    reasonEn: 'Win rate 61.25%',
    games: 80
  },
  'nocturne-trundle': {
    reasonZh: '对线胜率 60.42%',
    reasonEn: 'Win rate 60.42%',
    games: 48
  },
  'nunu-ambessa': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 44
  },
  'nunu-briar': {
    reasonZh: '对线胜率 54.31%',
    reasonEn: 'Win rate 54.31%',
    games: 197
  },
  'nunu-ekko': {
    reasonZh: '对线胜率 57.93%',
    reasonEn: 'Win rate 57.93%',
    games: 164
  },
  'nunu-hecarim': {
    reasonZh: '对线胜率 57.86%',
    reasonEn: 'Win rate 57.86%',
    games: 159
  },
  'nunu-lillia': {
    reasonZh: '对线胜率 59.49%',
    reasonEn: 'Win rate 59.49%',
    games: 79
  },
  'nunu-masteryi': {
    reasonZh: '对线胜率 53.65%',
    reasonEn: 'Win rate 53.65%',
    games: 233
  },
  'nunu-nocturne': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 234
  },
  'nunu-pantheon': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 32
  },
  'nunu-qiyana': {
    reasonZh: '对线胜率 59.15%',
    reasonEn: 'Win rate 59.15%',
    games: 142
  },
  'nunu-quinn': {
    reasonZh: '对线胜率 63.27%',
    reasonEn: 'Win rate 63.27%',
    games: 49
  },
  'nunu-shaco': {
    reasonZh: '对线胜率 55.49%',
    reasonEn: 'Win rate 55.49%',
    games: 173
  },
  'nunu-talon': {
    reasonZh: '对线胜率 56.78%',
    reasonEn: 'Win rate 56.78%',
    games: 199
  },
  'nunu-xinzhao': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 91
  },
  'olaf-heimerdinger': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 62
  },
  'olaf-ivern': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 31
  },
  'olaf-kennen': {
    reasonZh: '对线胜率 58.43%',
    reasonEn: 'Win rate 58.43%',
    games: 89
  },
  'olaf-quinn': {
    reasonZh: '对线胜率 68.89%',
    reasonEn: 'Win rate 68.89%',
    games: 45
  },
  'olaf-rammus': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 54
  },
  'olaf-sett': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%',
    games: 261
  },
  'olaf-shaco': {
    reasonZh: '对线胜率 58.73%',
    reasonEn: 'Win rate 58.73%',
    games: 126
  },
  'olaf-shen': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%',
    games: 264
  },
  'olaf-singed': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 140
  },
  'olaf-varus': {
    reasonZh: '对线胜率 58.93%',
    reasonEn: 'Win rate 58.93%',
    games: 56
  },
  'orianna-akshan': {
    reasonZh: '对线胜率 59.02%',
    reasonEn: 'Win rate 59.02%',
    games: 122
  },
  'orianna-cassiopeia': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%',
    games: 71
  },
  'orianna-riven': {
    reasonZh: '对线胜率 64.44%',
    reasonEn: 'Win rate 64.44%',
    games: 45
  },
  'orianna-sion': {
    reasonZh: '对线胜率 61.36%',
    reasonEn: 'Win rate 61.36%',
    games: 44
  },
  'orianna-velkoz': {
    reasonZh: '对线胜率 55.36%',
    reasonEn: 'Win rate 55.36%',
    games: 56
  },
  'orianna-zoe': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%',
    games: 97
  },
  'ornn-gragas': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%',
    games: 190
  },
  'ornn-heimerdinger': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%',
    games: 65
  },
  'ornn-jax': {
    reasonZh: '对线胜率 58.55%',
    reasonEn: 'Win rate 58.55%',
    games: 304
  },
  'ornn-masteryi': {
    reasonZh: '对线胜率 61.90%',
    reasonEn: 'Win rate 61.90%',
    games: 42
  },
  'ornn-teemo': {
    reasonZh: '对线胜率 54.91%',
    reasonEn: 'Win rate 54.91%',
    games: 326
  },
  'ornn-udyr': {
    reasonZh: '对线胜率 61.22%',
    reasonEn: 'Win rate 61.22%',
    games: 49
  },
  'ornn-varus': {
    reasonZh: '对线胜率 63.79%',
    reasonEn: 'Win rate 63.79%',
    games: 58
  },
  'pantheon-ahri': {
    reasonZh: '对线胜率 52.33%',
    reasonEn: 'Win rate 52.33%',
    games: 86
  },
  'pantheon-anivia': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 36
  },
  'pantheon-evelynn': {
    reasonZh: '对线胜率 68.75%',
    reasonEn: 'Win rate 68.75%',
    games: 32
  },
  'pantheon-fiddlesticks': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%',
    games: 33
  },
  'pantheon-fizz': {
    reasonZh: '对线胜率 56.80%',
    reasonEn: 'Win rate 56.80%',
    games: 125
  },
  'pantheon-galio': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 93
  },
  'pantheon-heimerdinger': {
    reasonZh: '对线胜率 64.58%',
    reasonEn: 'Win rate 64.58%',
    games: 48
  },
  'pantheon-hwei': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 75
  },
  'pantheon-jarvaniv': {
    reasonZh: '对线胜率 54.03%',
    reasonEn: 'Win rate 54.03%',
    games: 124
  },
  'pantheon-katarina': {
    reasonZh: '对线胜率 54.30%',
    reasonEn: 'Win rate 54.30%',
    games: 186
  },
  'pantheon-kindred': {
    reasonZh: '对线胜率 65.12%',
    reasonEn: 'Win rate 65.12%',
    games: 43
  },
  'pantheon-leblanc': {
    reasonZh: '对线胜率 66.10%',
    reasonEn: 'Win rate 66.10%',
    games: 59
  },
  'pantheon-mel': {
    reasonZh: '对线胜率 58.10%',
    reasonEn: 'Win rate 58.10%',
    games: 105
  },
  'pantheon-neeko': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 102
  },
  'pantheon-shaco': {
    reasonZh: '对线胜率 59.30%',
    reasonEn: 'Win rate 59.30%',
    games: 86
  },
  'pantheon-sion': {
    reasonZh: '对线胜率 57.68%',
    reasonEn: 'Win rate 57.68%',
    games: 241
  },
  'pantheon-twistedfate': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%',
    games: 74
  },
  'pantheon-yasuo': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%',
    games: 188
  },
  'pantheon-yone': {
    reasonZh: '对线胜率 54.94%',
    reasonEn: 'Win rate 54.94%',
    games: 395
  },
  'poppy-aatrox': {
    reasonZh: '对线胜率 53.96%',
    reasonEn: 'Win rate 53.96%',
    games: 139
  },
  'poppy-ambessa': {
    reasonZh: '对线胜率 59.42%',
    reasonEn: 'Win rate 59.42%',
    games: 138
  },
  'poppy-bard': {
    reasonZh: '对线胜率 59.00%',
    reasonEn: 'Win rate 59.00%',
    games: 261
  },
  'poppy-illaoi': {
    reasonZh: '对线胜率 56.36%',
    reasonEn: 'Win rate 56.36%',
    games: 55
  },
  'poppy-irelia': {
    reasonZh: '对线胜率 58.59%',
    reasonEn: 'Win rate 58.59%',
    games: 128
  },
  'poppy-jax': {
    reasonZh: '对线胜率 55.62%',
    reasonEn: 'Win rate 55.62%',
    games: 160
  },
  'poppy-ksante': {
    reasonZh: '对线胜率 60.15%',
    reasonEn: 'Win rate 60.15%',
    games: 133
  },
  'poppy-lulu': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 280
  },
  'poppy-lux': {
    reasonZh: '对线胜率 56.77%',
    reasonEn: 'Win rate 56.77%',
    games: 155
  },
  'poppy-mel': {
    reasonZh: '对线胜率 64.71%',
    reasonEn: 'Win rate 64.71%',
    games: 34
  },
  'poppy-milio': {
    reasonZh: '对线胜率 54.60%',
    reasonEn: 'Win rate 54.60%',
    games: 163
  },
  'poppy-pyke': {
    reasonZh: '对线胜率 55.43%',
    reasonEn: 'Win rate 55.43%',
    games: 433
  },
  'poppy-rell': {
    reasonZh: '对线胜率 53.17%',
    reasonEn: 'Win rate 53.17%',
    games: 331
  },
  'poppy-shen': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%',
    games: 37
  },
  'poppy-soraka': {
    reasonZh: '对线胜率 53.44%',
    reasonEn: 'Win rate 53.44%',
    games: 131
  },
  'poppy-swain': {
    reasonZh: '对线胜率 59.74%',
    reasonEn: 'Win rate 59.74%',
    games: 77
  },
  'poppy-udyr': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%',
    games: 34
  },
  'poppy-warwick': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 64
  },
  'poppy-zyra': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 66
  },
  'pyke-anivia': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%',
    games: 76
  },
  'pyke-braum': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%',
    games: 620
  },
  'pyke-fiddlesticks': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%',
    games: 74
  },
  'pyke-hwei': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 90
  },
  'pyke-mel': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 273
  },
  'pyke-zoe': {
    reasonZh: '对线胜率 55.63%',
    reasonEn: 'Win rate 55.63%',
    games: 142
  },
  'qiyana-cassiopeia': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%',
    games: 52
  },
  'qiyana-gwen': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 33
  },
  'qiyana-jax': {
    reasonZh: '对线胜率 58.46%',
    reasonEn: 'Win rate 58.46%',
    games: 65
  },
  'qiyana-lissandra': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%',
    games: 238
  },
  'qiyana-orianna': {
    reasonZh: '对线胜率 65.75%',
    reasonEn: 'Win rate 65.75%',
    games: 73
  },
  'qiyana-pantheon': {
    reasonZh: '对线胜率 61.90%',
    reasonEn: 'Win rate 61.90%',
    games: 63
  },
  'qiyana-zed': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%',
    games: 117
  },
  'quinn-ambessa': {
    reasonZh: '对线胜率 72.55%',
    reasonEn: 'Win rate 72.55%',
    games: 51
  },
  'quinn-darius': {
    reasonZh: '对线胜率 55.10%',
    reasonEn: 'Win rate 55.10%',
    games: 147
  },
  'quinn-fiora': {
    reasonZh: '对线胜率 65.31%',
    reasonEn: 'Win rate 65.31%',
    games: 49
  },
  'quinn-gragas': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'quinn-hecarim': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%',
    games: 109
  },
  'quinn-jax': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 32
  },
  'quinn-jayce': {
    reasonZh: '对线胜率 58.65%',
    reasonEn: 'Win rate 58.65%',
    games: 133
  },
  'quinn-leesin': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%',
    games: 328
  },
  'quinn-mordekaiser': {
    reasonZh: '对线胜率 62.79%',
    reasonEn: 'Win rate 62.79%',
    games: 43
  },
  'quinn-qiyana': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 94
  },
  'quinn-riven': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%',
    games: 58
  },
  'quinn-shen': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%',
    games: 67
  },
  'rakan-amumu': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%',
    games: 47
  },
  'rakan-brand': {
    reasonZh: '对线胜率 55.03%',
    reasonEn: 'Win rate 55.03%',
    games: 169
  },
  'rakan-hwei': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%',
    games: 40
  },
  'rakan-leblanc': {
    reasonZh: '对线胜率 58.93%',
    reasonEn: 'Win rate 58.93%',
    games: 56
  },
  'rakan-leona': {
    reasonZh: '对线胜率 51.95%',
    reasonEn: 'Win rate 51.95%',
    games: 539
  },
  'rakan-rell': {
    reasonZh: '对线胜率 53.87%',
    reasonEn: 'Win rate 53.87%',
    games: 284
  },
  'rakan-zoe': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 81
  },
  'rammus-ambessa': {
    reasonZh: '对线胜率 68.29%',
    reasonEn: 'Win rate 68.29%',
    games: 41
  },
  'rammus-elise': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%',
    games: 55
  },
  'rammus-evelynn': {
    reasonZh: '对线胜率 64.10%',
    reasonEn: 'Win rate 64.10%',
    games: 78
  },
  'rammus-khazix': {
    reasonZh: '对线胜率 60.56%',
    reasonEn: 'Win rate 60.56%',
    games: 142
  },
  'rammus-masteryi': {
    reasonZh: '对线胜率 57.88%',
    reasonEn: 'Win rate 57.88%',
    games: 584
  },
  'rammus-nidalee': {
    reasonZh: '对线胜率 57.53%',
    reasonEn: 'Win rate 57.53%',
    games: 73
  },
  'rammus-quinn': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 44
  },
  'rammus-viego': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%',
    games: 350
  },
  'reksai-ambessa': {
    reasonZh: '对线胜率 65.85%',
    reasonEn: 'Win rate 65.85%',
    games: 41
  },
  'reksai-belveth': {
    reasonZh: '对线胜率 61.68%',
    reasonEn: 'Win rate 61.68%',
    games: 107
  },
  'reksai-evelynn': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 106
  },
  'reksai-karthus': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 38
  },
  'reksai-pantheon': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 45
  },
  'reksai-rammus': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%',
    games: 46
  },
  'reksai-shaco': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%',
    games: 156
  },
  'reksai-zed': {
    reasonZh: '对线胜率 57.81%',
    reasonEn: 'Win rate 57.81%',
    games: 64
  },
  'rell-anivia': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 39
  },
  'rell-fiddlesticks': {
    reasonZh: '对线胜率 67.39%',
    reasonEn: 'Win rate 67.39%',
    games: 46
  },
  'rell-mel': {
    reasonZh: '对线胜率 60.47%',
    reasonEn: 'Win rate 60.47%',
    games: 86
  },
  'rell-morgana': {
    reasonZh: '对线胜率 56.75%',
    reasonEn: 'Win rate 56.75%',
    games: 252
  },
  'rell-nautilus': {
    reasonZh: '对线胜率 56.17%',
    reasonEn: 'Win rate 56.17%',
    games: 1054
  },
  'rell-pantheon': {
    reasonZh: '对线胜率 56.91%',
    reasonEn: 'Win rate 56.91%',
    games: 246
  },
  'rell-taric': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 135
  },
  'rell-xerath': {
    reasonZh: '对线胜率 57.76%',
    reasonEn: 'Win rate 57.76%',
    games: 161
  },
  'renata-janna': {
    reasonZh: '对线胜率 57.28%',
    reasonEn: 'Win rate 57.28%',
    games: 103
  },
  'renata-karma': {
    reasonZh: '对线胜率 58.21%',
    reasonEn: 'Win rate 58.21%',
    games: 134
  },
  'renata-maokai': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 47
  },
  'renata-sona': {
    reasonZh: '对线胜率 59.57%',
    reasonEn: 'Win rate 59.57%',
    games: 47
  },
  'renata-swain': {
    reasonZh: '对线胜率 59.46%',
    reasonEn: 'Win rate 59.46%',
    games: 37
  },
  'renata-xerath': {
    reasonZh: '对线胜率 61.54%',
    reasonEn: 'Win rate 61.54%',
    games: 39
  },
  'renata-yuumi': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%',
    games: 92
  },
  'renekton-ambessa': {
    reasonZh: '对线胜率 55.13%',
    reasonEn: 'Win rate 55.13%',
    games: 751
  },
  'renekton-riven': {
    reasonZh: '对线胜率 56.28%',
    reasonEn: 'Win rate 56.28%',
    games: 581
  },
  'renekton-udyr': {
    reasonZh: '对线胜率 59.42%',
    reasonEn: 'Win rate 59.42%',
    games: 69
  },
  'renekton-xinzhao': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 75
  },
  'renekton-yorick': {
    reasonZh: '对线胜率 57.38%',
    reasonEn: 'Win rate 57.38%',
    games: 474
  },
  'rengar-gragas': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 48
  },
  'rengar-karthus': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 90
  },
  'rengar-taliyah': {
    reasonZh: '对线胜率 69.77%',
    reasonEn: 'Win rate 69.77%',
    games: 43
  },
  'rengar-zyra': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 53
  },
  'riven-akali': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 99
  },
  'riven-akshan': {
    reasonZh: '对线胜率 57.35%',
    reasonEn: 'Win rate 57.35%',
    games: 68
  },
  'riven-cassiopeia': {
    reasonZh: '对线胜率 71.88%',
    reasonEn: 'Win rate 71.88%',
    games: 32
  },
  'riven-fizz': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 117
  },
  'riven-gwen': {
    reasonZh: '对线胜率 59.32%',
    reasonEn: 'Win rate 59.32%',
    games: 118
  },
  'riven-illaoi': {
    reasonZh: '对线胜率 56.69%',
    reasonEn: 'Win rate 56.69%',
    games: 157
  },
  'riven-katarina': {
    reasonZh: '对线胜率 59.14%',
    reasonEn: 'Win rate 59.14%',
    games: 186
  },
  'riven-sion': {
    reasonZh: '对线胜率 58.89%',
    reasonEn: 'Win rate 58.89%',
    games: 287
  },
  'riven-syndra': {
    reasonZh: '对线胜率 56.12%',
    reasonEn: 'Win rate 56.12%',
    games: 139
  },
  'riven-teemo': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 231
  },
  'riven-veigar': {
    reasonZh: '对线胜率 57.63%',
    reasonEn: 'Win rate 57.63%',
    games: 59
  },
  'riven-vladimir': {
    reasonZh: '对线胜率 57.01%',
    reasonEn: 'Win rate 57.01%',
    games: 107
  },
  'riven-xerath': {
    reasonZh: '对线胜率 58.00%',
    reasonEn: 'Win rate 58.00%',
    games: 50
  },
  'riven-xinzhao': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%',
    games: 49
  },
  'riven-yasuo': {
    reasonZh: '对线胜率 56.65%',
    reasonEn: 'Win rate 56.65%',
    games: 233
  },
  'rumble-aurora': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 30
  },
  'rumble-chogath': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 68
  },
  'rumble-fiora': {
    reasonZh: '对线胜率 59.79%',
    reasonEn: 'Win rate 59.79%',
    games: 97
  },
  'rumble-kled': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%',
    games: 44
  },
  'rumble-ksante': {
    reasonZh: '对线胜率 57.85%',
    reasonEn: 'Win rate 57.85%',
    games: 223
  },
  'rumble-monkeyking': {
    reasonZh: '对线胜率 63.64%',
    reasonEn: 'Win rate 63.64%',
    games: 44
  },
  'rumble-poppy': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 55
  },
  'rumble-trundle': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 35
  },
  'ryze-cassiopeia': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%',
    games: 145
  },
  'ryze-diana': {
    reasonZh: '对线胜率 53.89%',
    reasonEn: 'Win rate 53.89%',
    games: 193
  },
  'ryze-heimerdinger': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%',
    games: 42
  },
  'ryze-kennen': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 56
  },
  'ryze-ornn': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 47
  },
  'ryze-qiyana': {
    reasonZh: '对线胜率 53.91%',
    reasonEn: 'Win rate 53.91%',
    games: 115
  },
  'ryze-sion': {
    reasonZh: '对线胜率 63.04%',
    reasonEn: 'Win rate 63.04%',
    games: 46
  },
  'ryze-talon': {
    reasonZh: '对线胜率 54.76%',
    reasonEn: 'Win rate 54.76%',
    games: 126
  },
  'ryze-tristana': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 33
  },
  'samira-aurelionsol': {
    reasonZh: '对线胜率 58.14%',
    reasonEn: 'Win rate 58.14%',
    games: 43
  },
  'samira-katarina': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 72
  },
  'samira-lux': {
    reasonZh: '对线胜率 56.16%',
    reasonEn: 'Win rate 56.16%',
    games: 73
  },
  'samira-twitch': {
    reasonZh: '对线胜率 53.09%',
    reasonEn: 'Win rate 53.09%',
    games: 501
  },
  'samira-yunara': {
    reasonZh: '对线胜率 57.70%',
    reasonEn: 'Win rate 57.70%',
    games: 383
  },
  'sejuani-elise': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 66
  },
  'sejuani-evelynn': {
    reasonZh: '对线胜率 56.38%',
    reasonEn: 'Win rate 56.38%',
    games: 94
  },
  'sejuani-malphite': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'sejuani-monkeyking': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%',
    games: 161
  },
  'sejuani-poppy': {
    reasonZh: '对线胜率 70.00%',
    reasonEn: 'Win rate 70.00%',
    games: 30
  },
  'sejuani-quinn': {
    reasonZh: '对线胜率 63.83%',
    reasonEn: 'Win rate 63.83%',
    games: 47
  },
  'sejuani-rammus': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 39
  },
  'sejuani-warwick': {
    reasonZh: '对线胜率 59.43%',
    reasonEn: 'Win rate 59.43%',
    games: 106
  },
  'senna-braum': {
    reasonZh: '对线胜率 54.35%',
    reasonEn: 'Win rate 54.35%',
    games: 598
  },
  'senna-ezreal': {
    reasonZh: '对线胜率 56.13%',
    reasonEn: 'Win rate 56.13%',
    games: 3164
  },
  'senna-kaisa': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%',
    games: 2882
  },
  'senna-lucian': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%',
    games: 1469
  },
  'senna-mel': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%',
    games: 245
  },
  'senna-pantheon': {
    reasonZh: '对线胜率 58.63%',
    reasonEn: 'Win rate 58.63%',
    games: 423
  },
  'senna-rell': {
    reasonZh: '对线胜率 53.99%',
    reasonEn: 'Win rate 53.99%',
    games: 539
  },
  'senna-sona': {
    reasonZh: '对线胜率 53.93%',
    reasonEn: 'Win rate 53.93%',
    games: 471
  },
  'senna-soraka': {
    reasonZh: '对线胜率 52.23%',
    reasonEn: 'Win rate 52.23%',
    games: 829
  },
  'senna-tahmkench': {
    reasonZh: '对线胜率 55.12%',
    reasonEn: 'Win rate 55.12%',
    games: 361
  },
  'senna-varus': {
    reasonZh: '对线胜率 55.94%',
    reasonEn: 'Win rate 55.94%',
    games: 556
  },
  'senna-zilean': {
    reasonZh: '对线胜率 56.39%',
    reasonEn: 'Win rate 56.39%',
    games: 509
  },
  'seraphine-caitlyn': {
    reasonZh: '对线胜率 58.48%',
    reasonEn: 'Win rate 58.48%',
    games: 696
  },
  'seraphine-camille': {
    reasonZh: '对线胜率 57.04%',
    reasonEn: 'Win rate 57.04%',
    games: 433
  },
  'seraphine-corki': {
    reasonZh: '对线胜率 60.56%',
    reasonEn: 'Win rate 60.56%',
    games: 71
  },
  'seraphine-hwei': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%',
    games: 154
  },
  'seraphine-janna': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%',
    games: 845
  },
  'seraphine-jinx': {
    reasonZh: '对线胜率 58.02%',
    reasonEn: 'Win rate 58.02%',
    games: 536
  },
  'seraphine-kaisa': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 620
  },
  'seraphine-kalista': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%',
    games: 121
  },
  'seraphine-kogmaw': {
    reasonZh: '对线胜率 55.29%',
    reasonEn: 'Win rate 55.29%',
    games: 85
  },
  'seraphine-leblanc': {
    reasonZh: '对线胜率 60.84%',
    reasonEn: 'Win rate 60.84%',
    games: 166
  },
  'seraphine-lucian': {
    reasonZh: '对线胜率 59.22%',
    reasonEn: 'Win rate 59.22%',
    games: 282
  },
  'seraphine-mel': {
    reasonZh: '对线胜率 58.42%',
    reasonEn: 'Win rate 58.42%',
    games: 695
  },
  'seraphine-missfortune': {
    reasonZh: '对线胜率 55.09%',
    reasonEn: 'Win rate 55.09%',
    games: 265
  },
  'seraphine-nilah': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%',
    games: 51
  },
  'seraphine-pantheon': {
    reasonZh: '对线胜率 55.16%',
    reasonEn: 'Win rate 55.16%',
    games: 640
  },
  'seraphine-poppy': {
    reasonZh: '对线胜率 54.13%',
    reasonEn: 'Win rate 54.13%',
    games: 303
  },
  'seraphine-samira': {
    reasonZh: '对线胜率 60.26%',
    reasonEn: 'Win rate 60.26%',
    games: 234
  },
  'seraphine-senna': {
    reasonZh: '对线胜率 52.98%',
    reasonEn: 'Win rate 52.98%',
    games: 419
  },
  'seraphine-sivir': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%',
    games: 287
  },
  'seraphine-smolder': {
    reasonZh: '对线胜率 58.63%',
    reasonEn: 'Win rate 58.63%',
    games: 249
  },
  'seraphine-thresh': {
    reasonZh: '对线胜率 51.86%',
    reasonEn: 'Win rate 51.86%',
    games: 3145
  },
  'seraphine-xayah': {
    reasonZh: '对线胜率 60.82%',
    reasonEn: 'Win rate 60.82%',
    games: 171
  },
  'seraphine-zeri': {
    reasonZh: '对线胜率 56.32%',
    reasonEn: 'Win rate 56.32%',
    games: 174
  },
  'sett-lissandra': {
    reasonZh: '对线胜率 62.07%',
    reasonEn: 'Win rate 62.07%',
    games: 58
  },
  'sett-monkeyking': {
    reasonZh: '对线胜率 60.50%',
    reasonEn: 'Win rate 60.50%',
    games: 119
  },
  'sett-rumble': {
    reasonZh: '对线胜率 58.87%',
    reasonEn: 'Win rate 58.87%',
    games: 124
  },
  'sett-xinzhao': {
    reasonZh: '对线胜率 63.24%',
    reasonEn: 'Win rate 63.24%',
    games: 68
  },
  'sett-yasuo': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 290
  },
  'shaco-brand': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 85
  },
  'shaco-darius': {
    reasonZh: '对线胜率 63.93%',
    reasonEn: 'Win rate 63.93%',
    games: 61
  },
  'shaco-elise': {
    reasonZh: '对线胜率 57.05%',
    reasonEn: 'Win rate 57.05%',
    games: 149
  },
  'shaco-pantheon': {
    reasonZh: '对线胜率 61.90%',
    reasonEn: 'Win rate 61.90%',
    games: 63
  },
  'shaco-taliyah': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 35
  },
  'shaco-vi': {
    reasonZh: '对线胜率 56.85%',
    reasonEn: 'Win rate 56.85%',
    games: 343
  },
  'shaco-zaahen': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'shaco-zilean': {
    reasonZh: '对线胜率 59.74%',
    reasonEn: 'Win rate 59.74%',
    games: 77
  },
  'shen-nasus': {
    reasonZh: '对线胜率 59.11%',
    reasonEn: 'Win rate 59.11%',
    games: 247
  },
  'shen-ornn': {
    reasonZh: '对线胜率 56.26%',
    reasonEn: 'Win rate 56.26%',
    games: 423
  },
  'shen-seraphine': {
    reasonZh: '对线胜率 53.21%',
    reasonEn: 'Win rate 53.21%',
    games: 156
  },
  'shen-trundle': {
    reasonZh: '对线胜率 59.22%',
    reasonEn: 'Win rate 59.22%',
    games: 103
  },
  'shen-varus': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 66
  },
  'shen-velkoz': {
    reasonZh: '对线胜率 67.74%',
    reasonEn: 'Win rate 67.74%',
    games: 31
  },
  'shen-xinzhao': {
    reasonZh: '对线胜率 68.00%',
    reasonEn: 'Win rate 68.00%',
    games: 50
  },
  'shen-yone': {
    reasonZh: '对线胜率 54.96%',
    reasonEn: 'Win rate 54.96%',
    games: 464
  },
  'shen-yorick': {
    reasonZh: '对线胜率 56.46%',
    reasonEn: 'Win rate 56.46%',
    games: 294
  },
  'shen-zyra': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 40
  },
  'shyvana-ambessa': {
    reasonZh: '对线胜率 57.97%',
    reasonEn: 'Win rate 57.97%',
    games: 69
  },
  'shyvana-hecarim': {
    reasonZh: '对线胜率 57.29%',
    reasonEn: 'Win rate 57.29%',
    games: 295
  },
  'shyvana-kindred': {
    reasonZh: '对线胜率 59.88%',
    reasonEn: 'Win rate 59.88%',
    games: 162
  },
  'shyvana-rammus': {
    reasonZh: '对线胜率 58.95%',
    reasonEn: 'Win rate 58.95%',
    games: 95
  },
  'shyvana-skarner': {
    reasonZh: '对线胜率 60.53%',
    reasonEn: 'Win rate 60.53%',
    games: 76
  },
  'singed-drmundo': {
    reasonZh: '对线胜率 56.81%',
    reasonEn: 'Win rate 56.81%',
    games: 213
  },
  'singed-garen': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%',
    games: 392
  },
  'singed-irelia': {
    reasonZh: '对线胜率 59.34%',
    reasonEn: 'Win rate 59.34%',
    games: 182
  },
  'singed-jax': {
    reasonZh: '对线胜率 55.91%',
    reasonEn: 'Win rate 55.91%',
    games: 254
  },
  'singed-kled': {
    reasonZh: '对线胜率 60.61%',
    reasonEn: 'Win rate 60.61%',
    games: 66
  },
  'singed-mordekaiser': {
    reasonZh: '对线胜率 61.86%',
    reasonEn: 'Win rate 61.86%',
    games: 194
  },
  'singed-ornn': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%',
    games: 210
  },
  'singed-quinn': {
    reasonZh: '对线胜率 68.57%',
    reasonEn: 'Win rate 68.57%',
    games: 35
  },
  'singed-trundle': {
    reasonZh: '对线胜率 62.71%',
    reasonEn: 'Win rate 62.71%',
    games: 59
  },
  'singed-volibear': {
    reasonZh: '对线胜率 58.16%',
    reasonEn: 'Win rate 58.16%',
    games: 98
  },
  'singed-yorick': {
    reasonZh: '对线胜率 57.37%',
    reasonEn: 'Win rate 57.37%',
    games: 190
  },
  'sion-diana': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 70
  },
  'sion-lissandra': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 80
  },
  'sion-malzahar': {
    reasonZh: '对线胜率 57.51%',
    reasonEn: 'Win rate 57.51%',
    games: 193
  },
  'sion-monkeyking': {
    reasonZh: '对线胜率 62.79%',
    reasonEn: 'Win rate 62.79%',
    games: 86
  },
  'sion-rumble': {
    reasonZh: '对线胜率 60.24%',
    reasonEn: 'Win rate 60.24%',
    games: 166
  },
  'sion-ryze': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 60
  },
  'sion-syndra': {
    reasonZh: '对线胜率 52.54%',
    reasonEn: 'Win rate 52.54%',
    games: 118
  },
  'sion-udyr': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 60
  },
  'sion-veigar': {
    reasonZh: '对线胜率 57.58%',
    reasonEn: 'Win rate 57.58%',
    games: 33
  },
  'sion-xerath': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%',
    games: 74
  },
  'sivir-ezreal': {
    reasonZh: '对线胜率 54.24%',
    reasonEn: 'Win rate 54.24%',
    games: 2168
  },
  'sivir-karthus': {
    reasonZh: '对线胜率 55.32%',
    reasonEn: 'Win rate 55.32%',
    games: 94
  },
  'sivir-nilah': {
    reasonZh: '对线胜率 56.34%',
    reasonEn: 'Win rate 56.34%',
    games: 142
  },
  'sivir-syndra': {
    reasonZh: '对线胜率 64.62%',
    reasonEn: 'Win rate 64.62%',
    games: 65
  },
  'sivir-vladimir': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 55
  },
  'skarner-elise': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 53
  },
  'skarner-naafiri': {
    reasonZh: '对线胜率 55.65%',
    reasonEn: 'Win rate 55.65%',
    games: 124
  },
  'skarner-nunu': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 56
  },
  'skarner-quinn': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 32
  },
  'skarner-udyr': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 40
  },
  'smolder-ezreal': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%',
    games: 1437
  },
  'smolder-hwei': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 42
  },
  'smolder-kaisa': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%',
    games: 1643
  },
  'smolder-swain': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 126
  },
  'smolder-vladimir': {
    reasonZh: '对线胜率 53.75%',
    reasonEn: 'Win rate 53.75%',
    games: 80
  },
  'smolder-yunara': {
    reasonZh: '对线胜率 56.68%',
    reasonEn: 'Win rate 56.68%',
    games: 434
  },
  'smolder-ziggs': {
    reasonZh: '对线胜率 52.15%',
    reasonEn: 'Win rate 52.15%',
    games: 209
  },
  'sona-karma': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 423
  },
  'sona-mel': {
    reasonZh: '对线胜率 69.64%',
    reasonEn: 'Win rate 69.64%',
    games: 56
  },
  'sona-neeko': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%',
    games: 60
  },
  'sona-poppy': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%',
    games: 72
  },
  'sona-rakan': {
    reasonZh: '对线胜率 56.89%',
    reasonEn: 'Win rate 56.89%',
    games: 167
  },
  'sona-rell': {
    reasonZh: '对线胜率 55.77%',
    reasonEn: 'Win rate 55.77%',
    games: 156
  },
  'sona-swain': {
    reasonZh: '对线胜率 60.19%',
    reasonEn: 'Win rate 60.19%',
    games: 103
  },
  'sona-taric': {
    reasonZh: '对线胜率 53.03%',
    reasonEn: 'Win rate 53.03%',
    games: 66
  },
  'sona-xerath': {
    reasonZh: '对线胜率 58.52%',
    reasonEn: 'Win rate 58.52%',
    games: 135
  },
  'soraka-hwei': {
    reasonZh: '对线胜率 59.68%',
    reasonEn: 'Win rate 59.68%',
    games: 62
  },
  'soraka-leblanc': {
    reasonZh: '对线胜率 60.66%',
    reasonEn: 'Win rate 60.66%',
    games: 61
  },
  'soraka-leona': {
    reasonZh: '对线胜率 52.46%',
    reasonEn: 'Win rate 52.46%',
    games: 690
  },
  'soraka-mel': {
    reasonZh: '对线胜率 60.87%',
    reasonEn: 'Win rate 60.87%',
    games: 115
  },
  'soraka-neeko': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 136
  },
  'soraka-pyke': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%',
    games: 707
  },
  'soraka-swain': {
    reasonZh: '对线胜率 59.92%',
    reasonEn: 'Win rate 59.92%',
    games: 242
  },
  'swain-akshan': {
    reasonZh: '对线胜率 57.78%',
    reasonEn: 'Win rate 57.78%',
    games: 45
  },
  'swain-alistar': {
    reasonZh: '对线胜率 56.33%',
    reasonEn: 'Win rate 56.33%',
    games: 229
  },
  'swain-braum': {
    reasonZh: '对线胜率 54.27%',
    reasonEn: 'Win rate 54.27%',
    games: 199
  },
  'swain-draven': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 108
  },
  'swain-galio': {
    reasonZh: '对线胜率 58.54%',
    reasonEn: 'Win rate 58.54%',
    games: 41
  },
  'swain-kaisa': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 376
  },
  'swain-kogmaw': {
    reasonZh: '对线胜率 53.33%',
    reasonEn: 'Win rate 53.33%',
    games: 30
  },
  'swain-leblanc': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%',
    games: 52
  },
  'swain-leona': {
    reasonZh: '对线胜率 54.03%',
    reasonEn: 'Win rate 54.03%',
    games: 372
  },
  'swain-maokai': {
    reasonZh: '对线胜率 60.24%',
    reasonEn: 'Win rate 60.24%',
    games: 83
  },
  'swain-neeko': {
    reasonZh: '对线胜率 58.23%',
    reasonEn: 'Win rate 58.23%',
    games: 79
  },
  'swain-twistedfate': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 60
  },
  'swain-yunara': {
    reasonZh: '对线胜率 64.77%',
    reasonEn: 'Win rate 64.77%',
    games: 88
  },
  'sylas-alistar': {
    reasonZh: '对线胜率 56.08%',
    reasonEn: 'Win rate 56.08%',
    games: 148
  },
  'sylas-azir': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 210
  },
  'sylas-brand': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 80
  },
  'sylas-malphite': {
    reasonZh: '对线胜率 57.64%',
    reasonEn: 'Win rate 57.64%',
    games: 144
  },
  'sylas-pyke': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%',
    games: 242
  },
  'sylas-seraphine': {
    reasonZh: '对线胜率 52.22%',
    reasonEn: 'Win rate 52.22%',
    games: 316
  },
  'sylas-shyvana': {
    reasonZh: '对线胜率 58.41%',
    reasonEn: 'Win rate 58.41%',
    games: 517
  },
  'sylas-smolder': {
    reasonZh: '对线胜率 70.83%',
    reasonEn: 'Win rate 70.83%',
    games: 72
  },
  'sylas-sona': {
    reasonZh: '对线胜率 64.58%',
    reasonEn: 'Win rate 64.58%',
    games: 48
  },
  'sylas-tahmkench': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%',
    games: 66
  },
  'sylas-talon': {
    reasonZh: '对线胜率 56.58%',
    reasonEn: 'Win rate 56.58%',
    games: 357
  },
  'sylas-tristana': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 64
  },
  'sylas-zed': {
    reasonZh: '对线胜率 54.59%',
    reasonEn: 'Win rate 54.59%',
    games: 1330
  },
  'sylas-zilean': {
    reasonZh: '对线胜率 61.04%',
    reasonEn: 'Win rate 61.04%',
    games: 77
  },
  'syndra-chogath': {
    reasonZh: '对线胜率 62.96%',
    reasonEn: 'Win rate 62.96%',
    games: 81
  },
  'syndra-draven': {
    reasonZh: '对线胜率 64.00%',
    reasonEn: 'Win rate 64.00%',
    games: 75
  },
  'syndra-malphite': {
    reasonZh: '对线胜率 65.71%',
    reasonEn: 'Win rate 65.71%',
    games: 35
  },
  'syndra-pantheon': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 70
  },
  'syndra-ryze': {
    reasonZh: '对线胜率 58.91%',
    reasonEn: 'Win rate 58.91%',
    games: 331
  },
  'syndra-samira': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 54
  },
  'syndra-smolder': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%',
    games: 62
  },
  'syndra-taliyah': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 186
  },
  'syndra-tristana': {
    reasonZh: '对线胜率 64.29%',
    reasonEn: 'Win rate 64.29%',
    games: 84
  },
  'syndra-twitch': {
    reasonZh: '对线胜率 66.15%',
    reasonEn: 'Win rate 66.15%',
    games: 65
  },
  'syndra-viktor': {
    reasonZh: '对线胜率 53.62%',
    reasonEn: 'Win rate 53.62%',
    games: 1656
  },
  'syndra-zeri': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%',
    games: 44
  },
  'syndra-ziggs': {
    reasonZh: '对线胜率 62.89%',
    reasonEn: 'Win rate 62.89%',
    games: 97
  },
  'tahmkench-ambessa': {
    reasonZh: '对线胜率 59.43%',
    reasonEn: 'Win rate 59.43%',
    games: 106
  },
  'tahmkench-bard': {
    reasonZh: '对线胜率 53.72%',
    reasonEn: 'Win rate 53.72%',
    games: 309
  },
  'tahmkench-camille': {
    reasonZh: '对线胜率 58.14%',
    reasonEn: 'Win rate 58.14%',
    games: 86
  },
  'tahmkench-chogath': {
    reasonZh: '对线胜率 59.30%',
    reasonEn: 'Win rate 59.30%',
    games: 86
  },
  'tahmkench-elise': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 30
  },
  'tahmkench-garen': {
    reasonZh: '对线胜率 54.48%',
    reasonEn: 'Win rate 54.48%',
    games: 413
  },
  'tahmkench-karma': {
    reasonZh: '对线胜率 56.27%',
    reasonEn: 'Win rate 56.27%',
    games: 359
  },
  'tahmkench-kayle': {
    reasonZh: '对线胜率 55.88%',
    reasonEn: 'Win rate 55.88%',
    games: 102
  },
  'tahmkench-maokai': {
    reasonZh: '对线胜率 57.39%',
    reasonEn: 'Win rate 57.39%',
    games: 115
  },
  'tahmkench-shen': {
    reasonZh: '对线胜率 59.52%',
    reasonEn: 'Win rate 59.52%',
    games: 42
  },
  'tahmkench-trundle': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%',
    games: 65
  },
  'tahmkench-zoe': {
    reasonZh: '对线胜率 65.31%',
    reasonEn: 'Win rate 65.31%',
    games: 49
  },
  'taliyah-ekko': {
    reasonZh: '对线胜率 53.73%',
    reasonEn: 'Win rate 53.73%',
    games: 67
  },
  'taliyah-irelia': {
    reasonZh: '对线胜率 59.72%',
    reasonEn: 'Win rate 59.72%',
    games: 72
  },
  'taliyah-kindred': {
    reasonZh: '对线胜率 64.71%',
    reasonEn: 'Win rate 64.71%',
    games: 34
  },
  'taliyah-masteryi': {
    reasonZh: '对线胜率 53.57%',
    reasonEn: 'Win rate 53.57%',
    games: 56
  },
  'taliyah-mel': {
    reasonZh: '对线胜率 56.06%',
    reasonEn: 'Win rate 56.06%',
    games: 66
  },
  'taliyah-monkeyking': {
    reasonZh: '对线胜率 57.75%',
    reasonEn: 'Win rate 57.75%',
    games: 71
  },
  'taliyah-orianna': {
    reasonZh: '对线胜率 58.73%',
    reasonEn: 'Win rate 58.73%',
    games: 63
  },
  'taliyah-shyvana': {
    reasonZh: '对线胜率 61.76%',
    reasonEn: 'Win rate 61.76%',
    games: 34
  },
  'taliyah-sylas': {
    reasonZh: '对线胜率 57.46%',
    reasonEn: 'Win rate 57.46%',
    games: 228
  },
  'taliyah-viego': {
    reasonZh: '对线胜率 60.55%',
    reasonEn: 'Win rate 60.55%',
    games: 109
  },
  'talon-annie': {
    reasonZh: '对线胜率 55.68%',
    reasonEn: 'Win rate 55.68%',
    games: 88
  },
  'talon-aurora': {
    reasonZh: '对线胜率 61.95%',
    reasonEn: 'Win rate 61.95%',
    games: 113
  },
  'talon-ekko': {
    reasonZh: '对线胜率 58.12%',
    reasonEn: 'Win rate 58.12%',
    games: 394
  },
  'talon-galio': {
    reasonZh: '对线胜率 57.92%',
    reasonEn: 'Win rate 57.92%',
    games: 202
  },
  'talon-gragas': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 56
  },
  'talon-hwei': {
    reasonZh: '对线胜率 55.05%',
    reasonEn: 'Win rate 55.05%',
    games: 198
  },
  'talon-malzahar': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%',
    games: 222
  },
  'talon-sejuani': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%',
    games: 165
  },
  'talon-volibear': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 62
  },
  'taric-leona': {
    reasonZh: '对线胜率 55.26%',
    reasonEn: 'Win rate 55.26%',
    games: 266
  },
  'taric-lulu': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%',
    games: 200
  },
  'taric-maokai': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 50
  },
  'taric-morgana': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 65
  },
  'taric-nautilus': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 352
  },
  'taric-neeko': {
    reasonZh: '对线胜率 64.52%',
    reasonEn: 'Win rate 64.52%',
    games: 31
  },
  'taric-pantheon': {
    reasonZh: '对线胜率 59.68%',
    reasonEn: 'Win rate 59.68%',
    games: 62
  },
  'taric-thresh': {
    reasonZh: '对线胜率 51.91%',
    reasonEn: 'Win rate 51.91%',
    games: 418
  },
  'taric-velkoz': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 62
  },
  'taric-yuumi': {
    reasonZh: '对线胜率 62.24%',
    reasonEn: 'Win rate 62.24%',
    games: 98
  },
  'taric-zilean': {
    reasonZh: '对线胜率 56.72%',
    reasonEn: 'Win rate 56.72%',
    games: 67
  },
  'taric-zyra': {
    reasonZh: '对线胜率 77.42%',
    reasonEn: 'Win rate 77.42%',
    games: 62
  },
  'teemo-camille': {
    reasonZh: '对线胜率 56.50%',
    reasonEn: 'Win rate 56.50%',
    games: 177
  },
  'teemo-darius': {
    reasonZh: '对线胜率 59.56%',
    reasonEn: 'Win rate 59.56%',
    games: 544
  },
  'teemo-gwen': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 95
  },
  'teemo-kayle': {
    reasonZh: '对线胜率 55.97%',
    reasonEn: 'Win rate 55.97%',
    games: 159
  },
  'teemo-lissandra': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 50
  },
  'teemo-monkeyking': {
    reasonZh: '对线胜率 59.65%',
    reasonEn: 'Win rate 59.65%',
    games: 57
  },
  'teemo-rumble': {
    reasonZh: '对线胜率 63.19%',
    reasonEn: 'Win rate 63.19%',
    games: 163
  },
  'teemo-sett': {
    reasonZh: '对线胜率 55.30%',
    reasonEn: 'Win rate 55.30%',
    games: 349
  },
  'teemo-volibear': {
    reasonZh: '对线胜率 60.90%',
    reasonEn: 'Win rate 60.90%',
    games: 156
  },
  'teemo-zaahen': {
    reasonZh: '对线胜率 58.80%',
    reasonEn: 'Win rate 58.80%',
    games: 250
  },
  'thresh-anivia': {
    reasonZh: '对线胜率 57.52%',
    reasonEn: 'Win rate 57.52%',
    games: 153
  },
  'thresh-camille': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%',
    games: 467
  },
  'thresh-mel': {
    reasonZh: '对线胜率 56.23%',
    reasonEn: 'Win rate 56.23%',
    games: 546
  },
  'thresh-milio': {
    reasonZh: '对线胜率 53.27%',
    reasonEn: 'Win rate 53.27%',
    games: 1543
  },
  'thresh-renata': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%',
    games: 308
  },
  'thresh-swain': {
    reasonZh: '对线胜率 56.59%',
    reasonEn: 'Win rate 56.59%',
    games: 744
  },
  'thresh-sylas': {
    reasonZh: '对线胜率 56.49%',
    reasonEn: 'Win rate 56.49%',
    games: 370
  },
  'tristana-aurora': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 31
  },
  'tristana-kalista': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 322
  },
  'tristana-kassadin': {
    reasonZh: '对线胜率 58.76%',
    reasonEn: 'Win rate 58.76%',
    games: 97
  },
  'tristana-lissandra': {
    reasonZh: '对线胜率 65.22%',
    reasonEn: 'Win rate 65.22%',
    games: 46
  },
  'tristana-mel': {
    reasonZh: '对线胜率 57.85%',
    reasonEn: 'Win rate 57.85%',
    games: 121
  },
  'tristana-velkoz': {
    reasonZh: '对线胜率 54.04%',
    reasonEn: 'Win rate 54.04%',
    games: 161
  },
  'tristana-yasuo': {
    reasonZh: '对线胜率 61.65%',
    reasonEn: 'Win rate 61.65%',
    games: 133
  },
  'tristana-yunara': {
    reasonZh: '对线胜率 54.16%',
    reasonEn: 'Win rate 54.16%',
    games: 733
  },
  'trundle-chogath': {
    reasonZh: '对线胜率 60.76%',
    reasonEn: 'Win rate 60.76%',
    games: 79
  },
  'trundle-hecarim': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%',
    games: 49
  },
  'trundle-irelia': {
    reasonZh: '对线胜率 60.47%',
    reasonEn: 'Win rate 60.47%',
    games: 86
  },
  'trundle-nasus': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 80
  },
  'trundle-riven': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 56
  },
  'trundle-yasuo': {
    reasonZh: '对线胜率 60.38%',
    reasonEn: 'Win rate 60.38%',
    games: 53
  },
  'trundle-yorick': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%',
    games: 104
  },
  'tryndamere-akali': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 203
  },
  'tryndamere-gangplank': {
    reasonZh: '对线胜率 54.17%',
    reasonEn: 'Win rate 54.17%',
    games: 528
  },
  'tryndamere-garen': {
    reasonZh: '对线胜率 53.61%',
    reasonEn: 'Win rate 53.61%',
    games: 595
  },
  'tryndamere-irelia': {
    reasonZh: '对线胜率 62.04%',
    reasonEn: 'Win rate 62.04%',
    games: 216
  },
  'tryndamere-mordekaiser': {
    reasonZh: '对线胜率 56.51%',
    reasonEn: 'Win rate 56.51%',
    games: 269
  },
  'tryndamere-olaf': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 168
  },
  'tryndamere-sett': {
    reasonZh: '对线胜率 55.90%',
    reasonEn: 'Win rate 55.90%',
    games: 288
  },
  'twistedfate-ahri': {
    reasonZh: '对线胜率 52.61%',
    reasonEn: 'Win rate 52.61%',
    games: 918
  },
  'twistedfate-jayce': {
    reasonZh: '对线胜率 63.00%',
    reasonEn: 'Win rate 63.00%',
    games: 100
  },
  'twistedfate-malphite': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 44
  },
  'twistedfate-qiyana': {
    reasonZh: '对线胜率 62.95%',
    reasonEn: 'Win rate 62.95%',
    games: 224
  },
  'twistedfate-smolder': {
    reasonZh: '对线胜率 57.45%',
    reasonEn: 'Win rate 57.45%',
    games: 47
  },
  'twistedfate-tristana': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 64
  },
  'twistedfate-vladimir': {
    reasonZh: '对线胜率 55.52%',
    reasonEn: 'Win rate 55.52%',
    games: 362
  },
  'twitch-sivir': {
    reasonZh: '对线胜率 52.90%',
    reasonEn: 'Win rate 52.90%',
    games: 431
  },
  'twitch-veigar': {
    reasonZh: '对线胜率 53.10%',
    reasonEn: 'Win rate 53.10%',
    games: 113
  },
  'twitch-velkoz': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 84
  },
  'twitch-yasuo': {
    reasonZh: '对线胜率 53.79%',
    reasonEn: 'Win rate 53.79%',
    games: 132
  },
  'twitch-yunara': {
    reasonZh: '对线胜率 52.95%',
    reasonEn: 'Win rate 52.95%',
    games: 440
  },
  'twitch-ziggs': {
    reasonZh: '对线胜率 51.56%',
    reasonEn: 'Win rate 51.56%',
    games: 192
  },
  'udyr-gnar': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 36
  },
  'udyr-ivern': {
    reasonZh: '对线胜率 54.90%',
    reasonEn: 'Win rate 54.90%',
    games: 51
  },
  'udyr-jayce': {
    reasonZh: '对线胜率 59.21%',
    reasonEn: 'Win rate 59.21%',
    games: 76
  },
  'udyr-lillia': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 112
  },
  'udyr-malphite': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%',
    games: 58
  },
  'udyr-nocturne': {
    reasonZh: '对线胜率 54.32%',
    reasonEn: 'Win rate 54.32%',
    games: 243
  },
  'udyr-qiyana': {
    reasonZh: '对线胜率 60.36%',
    reasonEn: 'Win rate 60.36%',
    games: 111
  },
  'udyr-reksai': {
    reasonZh: '对线胜率 56.76%',
    reasonEn: 'Win rate 56.76%',
    games: 74
  },
  'udyr-zaahen': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 34
  },
  'udyr-zed': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%',
    games: 55
  },
  'urgot-cassiopeia': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 32
  },
  'urgot-darius': {
    reasonZh: '对线胜率 57.85%',
    reasonEn: 'Win rate 57.85%',
    games: 427
  },
  'urgot-masteryi': {
    reasonZh: '对线胜率 64.86%',
    reasonEn: 'Win rate 64.86%',
    games: 37
  },
  'urgot-poppy': {
    reasonZh: '对线胜率 58.73%',
    reasonEn: 'Win rate 58.73%',
    games: 63
  },
  'urgot-ryze': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%',
    games: 30
  },
  'urgot-xinzhao': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'urgot-yone': {
    reasonZh: '对线胜率 56.01%',
    reasonEn: 'Win rate 56.01%',
    games: 291
  },
  'varus-aurelionsol': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 30
  },
  'varus-corki': {
    reasonZh: '对线胜率 61.22%',
    reasonEn: 'Win rate 61.22%',
    games: 49
  },
  'varus-gnar': {
    reasonZh: '对线胜率 59.18%',
    reasonEn: 'Win rate 59.18%',
    games: 49
  },
  'varus-illaoi': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 60
  },
  'varus-lux': {
    reasonZh: '对线胜率 58.00%',
    reasonEn: 'Win rate 58.00%',
    games: 50
  },
  'varus-singed': {
    reasonZh: '对线胜率 58.18%',
    reasonEn: 'Win rate 58.18%',
    games: 55
  },
  'varus-tryndamere': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%',
    games: 41
  },
  'varus-yasuo': {
    reasonZh: '对线胜率 51.11%',
    reasonEn: 'Win rate 51.11%',
    games: 45
  },
  'varus-yunara': {
    reasonZh: '对线胜率 52.17%',
    reasonEn: 'Win rate 52.17%',
    games: 253
  },
  'vayne-chogath': {
    reasonZh: '对线胜率 59.03%',
    reasonEn: 'Win rate 59.03%',
    games: 144
  },
  'vayne-drmundo': {
    reasonZh: '对线胜率 60.83%',
    reasonEn: 'Win rate 60.83%',
    games: 240
  },
  'vayne-garen': {
    reasonZh: '对线胜率 54.34%',
    reasonEn: 'Win rate 54.34%',
    games: 576
  },
  'vayne-karthus': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%',
    games: 67
  },
  'vayne-mel': {
    reasonZh: '对线胜率 54.64%',
    reasonEn: 'Win rate 54.64%',
    games: 97
  },
  'vayne-olaf': {
    reasonZh: '对线胜率 60.48%',
    reasonEn: 'Win rate 60.48%',
    games: 210
  },
  'vayne-swain': {
    reasonZh: '对线胜率 58.49%',
    reasonEn: 'Win rate 58.49%',
    games: 106
  },
  'vayne-yasuo': {
    reasonZh: '对线胜率 56.55%',
    reasonEn: 'Win rate 56.55%',
    games: 145
  },
  'vayne-yunara': {
    reasonZh: '对线胜率 55.22%',
    reasonEn: 'Win rate 55.22%',
    games: 393
  },
  'vayne-ziggs': {
    reasonZh: '对线胜率 52.56%',
    reasonEn: 'Win rate 52.56%',
    games: 156
  },
  'veigar-ahri': {
    reasonZh: '对线胜率 52.04%',
    reasonEn: 'Win rate 52.04%',
    games: 540
  },
  'veigar-akali': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 240
  },
  'veigar-aphelios': {
    reasonZh: '对线胜率 58.99%',
    reasonEn: 'Win rate 58.99%',
    games: 139
  },
  'veigar-azir': {
    reasonZh: '对线胜率 62.92%',
    reasonEn: 'Win rate 62.92%',
    games: 89
  },
  'veigar-draven': {
    reasonZh: '对线胜率 58.06%',
    reasonEn: 'Win rate 58.06%',
    games: 93
  },
  'veigar-ezreal': {
    reasonZh: '对线胜率 58.90%',
    reasonEn: 'Win rate 58.90%',
    games: 236
  },
  'veigar-irelia': {
    reasonZh: '对线胜率 57.98%',
    reasonEn: 'Win rate 57.98%',
    games: 119
  },
  'veigar-jayce': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 45
  },
  'veigar-kalista': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 40
  },
  'veigar-lucian': {
    reasonZh: '对线胜率 56.90%',
    reasonEn: 'Win rate 56.90%',
    games: 116
  },
  'veigar-malzahar': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%',
    games: 353
  },
  'veigar-samira': {
    reasonZh: '对线胜率 63.83%',
    reasonEn: 'Win rate 63.83%',
    games: 94
  },
  'veigar-smolder': {
    reasonZh: '对线胜率 69.23%',
    reasonEn: 'Win rate 69.23%',
    games: 39
  },
  'veigar-tristana': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 114
  },
  'veigar-yunara': {
    reasonZh: '对线胜率 66.10%',
    reasonEn: 'Win rate 66.10%',
    games: 59
  },
  'veigar-ziggs': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 50
  },
  'velkoz-alistar': {
    reasonZh: '对线胜率 54.67%',
    reasonEn: 'Win rate 54.67%',
    games: 214
  },
  'velkoz-anivia': {
    reasonZh: '对线胜率 53.85%',
    reasonEn: 'Win rate 53.85%',
    games: 52
  },
  'velkoz-annie': {
    reasonZh: '对线胜率 71.87%',
    reasonEn: 'Win rate 71.87%',
    games: 32
  },
  'velkoz-aphelios': {
    reasonZh: '对线胜率 54.70%',
    reasonEn: 'Win rate 54.70%',
    games: 181
  },
  'velkoz-brand': {
    reasonZh: '对线胜率 57.41%',
    reasonEn: 'Win rate 57.41%',
    games: 216
  },
  'velkoz-braum': {
    reasonZh: '对线胜率 54.55%',
    reasonEn: 'Win rate 54.55%',
    games: 242
  },
  'velkoz-draven': {
    reasonZh: '对线胜率 61.32%',
    reasonEn: 'Win rate 61.32%',
    games: 106
  },
  'velkoz-fiddlesticks': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 32
  },
  'velkoz-galio': {
    reasonZh: '对线胜率 61.11%',
    reasonEn: 'Win rate 61.11%',
    games: 90
  },
  'velkoz-kassadin': {
    reasonZh: '对线胜率 56.82%',
    reasonEn: 'Win rate 56.82%',
    games: 44
  },
  'velkoz-mel': {
    reasonZh: '对线胜率 58.17%',
    reasonEn: 'Win rate 58.17%',
    games: 153
  },
  'velkoz-senna': {
    reasonZh: '对线胜率 54.25%',
    reasonEn: 'Win rate 54.25%',
    games: 212
  },
  'velkoz-smolder': {
    reasonZh: '对线胜率 58.16%',
    reasonEn: 'Win rate 58.16%',
    games: 98
  },
  'velkoz-vladimir': {
    reasonZh: '对线胜率 64.76%',
    reasonEn: 'Win rate 64.76%',
    games: 105
  },
  'velkoz-xerath': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 112
  },
  'velkoz-yunara': {
    reasonZh: '对线胜率 58.88%',
    reasonEn: 'Win rate 58.88%',
    games: 107
  },
  'velkoz-zeri': {
    reasonZh: '对线胜率 54.22%',
    reasonEn: 'Win rate 54.22%',
    games: 83
  },
  'velkoz-zoe': {
    reasonZh: '对线胜率 59.04%',
    reasonEn: 'Win rate 59.04%',
    games: 83
  },
  'vex-akshan': {
    reasonZh: '对线胜率 58.00%',
    reasonEn: 'Win rate 58.00%',
    games: 200
  },
  'vex-aurelionsol': {
    reasonZh: '对线胜率 59.32%',
    reasonEn: 'Win rate 59.32%',
    games: 59
  },
  'vex-kassadin': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 98
  },
  'vex-katarina': {
    reasonZh: '对线胜率 54.33%',
    reasonEn: 'Win rate 54.33%',
    games: 427
  },
  'vex-riven': {
    reasonZh: '对线胜率 66.07%',
    reasonEn: 'Win rate 66.07%',
    games: 56
  },
  'vex-ryze': {
    reasonZh: '对线胜率 58.97%',
    reasonEn: 'Win rate 58.97%',
    games: 117
  },
  'vex-sion': {
    reasonZh: '对线胜率 59.38%',
    reasonEn: 'Win rate 59.38%',
    games: 32
  },
  'vex-twistedfate': {
    reasonZh: '对线胜率 54.11%',
    reasonEn: 'Win rate 54.11%',
    games: 231
  },
  'vi-belveth': {
    reasonZh: '对线胜率 55.15%',
    reasonEn: 'Win rate 55.15%',
    games: 194
  },
  'vi-poppy': {
    reasonZh: '对线胜率 60.58%',
    reasonEn: 'Win rate 60.58%',
    games: 104
  },
  'vi-quinn': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%',
    games: 121
  },
  'vi-skarner': {
    reasonZh: '对线胜率 60.44%',
    reasonEn: 'Win rate 60.44%',
    games: 91
  },
  'vi-trundle': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 51
  },
  'viego-olaf': {
    reasonZh: '对线胜率 57.64%',
    reasonEn: 'Win rate 57.64%',
    games: 229
  },
  'viego-quinn': {
    reasonZh: '对线胜率 54.58%',
    reasonEn: 'Win rate 54.58%',
    games: 262
  },
  'viego-skarner': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 150
  },
  'viego-zac': {
    reasonZh: '对线胜率 55.24%',
    reasonEn: 'Win rate 55.24%',
    games: 391
  },
  'viktor-mel': {
    reasonZh: '对线胜率 56.46%',
    reasonEn: 'Win rate 56.46%',
    games: 379
  },
  'viktor-ryze': {
    reasonZh: '对线胜率 55.81%',
    reasonEn: 'Win rate 55.81%',
    games: 559
  },
  'viktor-smolder': {
    reasonZh: '对线胜率 67.31%',
    reasonEn: 'Win rate 67.31%',
    games: 52
  },
  'viktor-talon': {
    reasonZh: '对线胜率 57.49%',
    reasonEn: 'Win rate 57.49%',
    games: 367
  },
  'viktor-tristana': {
    reasonZh: '对线胜率 56.52%',
    reasonEn: 'Win rate 56.52%',
    games: 115
  },
  'vladimir-gwen': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 68
  },
  'vladimir-jax': {
    reasonZh: '对线胜率 56.74%',
    reasonEn: 'Win rate 56.74%',
    games: 282
  },
  'vladimir-jinx': {
    reasonZh: '对线胜率 51.32%',
    reasonEn: 'Win rate 51.32%',
    games: 152
  },
  'vladimir-katarina': {
    reasonZh: '对线胜率 53.50%',
    reasonEn: 'Win rate 53.50%',
    games: 643
  },
  'vladimir-malphite': {
    reasonZh: '对线胜率 57.49%',
    reasonEn: 'Win rate 57.49%',
    games: 247
  },
  'vladimir-mel': {
    reasonZh: '对线胜率 57.65%',
    reasonEn: 'Win rate 57.65%',
    games: 196
  },
  'vladimir-missfortune': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 100
  },
  'vladimir-renekton': {
    reasonZh: '对线胜率 59.23%',
    reasonEn: 'Win rate 59.23%',
    games: 130
  },
  'vladimir-sion': {
    reasonZh: '对线胜率 60.26%',
    reasonEn: 'Win rate 60.26%',
    games: 156
  },
  'vladimir-smolder': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 32
  },
  'vladimir-varus': {
    reasonZh: '对线胜率 64.86%',
    reasonEn: 'Win rate 64.86%',
    games: 37
  },
  'vladimir-vayne': {
    reasonZh: '对线胜率 53.01%',
    reasonEn: 'Win rate 53.01%',
    games: 83
  },
  'vladimir-yasuo': {
    reasonZh: '对线胜率 59.04%',
    reasonEn: 'Win rate 59.04%',
    games: 730
  },
  'volibear-ambessa': {
    reasonZh: '对线胜率 56.02%',
    reasonEn: 'Win rate 56.02%',
    games: 166
  },
  'volibear-amumu': {
    reasonZh: '对线胜率 60.53%',
    reasonEn: 'Win rate 60.53%',
    games: 38
  },
  'volibear-hecarim': {
    reasonZh: '对线胜率 62.90%',
    reasonEn: 'Win rate 62.90%',
    games: 62
  },
  'volibear-irelia': {
    reasonZh: '对线胜率 57.09%',
    reasonEn: 'Win rate 57.09%',
    games: 254
  },
  'volibear-lillia': {
    reasonZh: '对线胜率 64.44%',
    reasonEn: 'Win rate 64.44%',
    games: 45
  },
  'volibear-masteryi': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%',
    games: 37
  },
  'volibear-nocturne': {
    reasonZh: '对线胜率 56.19%',
    reasonEn: 'Win rate 56.19%',
    games: 105
  },
  'volibear-nunu': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%',
    games: 46
  },
  'volibear-udyr': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 35
  },
  'volibear-xinzhao': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 48
  },
  'warwick-ambessa': {
    reasonZh: '对线胜率 63.70%',
    reasonEn: 'Win rate 63.70%',
    games: 146
  },
  'warwick-camille': {
    reasonZh: '对线胜率 54.95%',
    reasonEn: 'Win rate 54.95%',
    games: 91
  },
  'warwick-irelia': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 145
  },
  'warwick-kennen': {
    reasonZh: '对线胜率 65.12%',
    reasonEn: 'Win rate 65.12%',
    games: 43
  },
  'warwick-malphite': {
    reasonZh: '对线胜率 69.77%',
    reasonEn: 'Win rate 69.77%',
    games: 43
  },
  'warwick-mordekaiser': {
    reasonZh: '对线胜率 63.68%',
    reasonEn: 'Win rate 63.68%',
    games: 190
  },
  'warwick-nidalee': {
    reasonZh: '对线胜率 59.35%',
    reasonEn: 'Win rate 59.35%',
    games: 123
  },
  'warwick-rengar': {
    reasonZh: '对线胜率 59.92%',
    reasonEn: 'Win rate 59.92%',
    games: 242
  },
  'warwick-talon': {
    reasonZh: '对线胜率 59.68%',
    reasonEn: 'Win rate 59.68%',
    games: 253
  },
  'warwick-tryndamere': {
    reasonZh: '对线胜率 56.41%',
    reasonEn: 'Win rate 56.41%',
    games: 117
  },
  'warwick-volibear': {
    reasonZh: '对线胜率 60.78%',
    reasonEn: 'Win rate 60.78%',
    games: 51
  },
  'warwick-xinzhao': {
    reasonZh: '对线胜率 61.87%',
    reasonEn: 'Win rate 61.87%',
    games: 160
  },
  'xayah-kaisa': {
    reasonZh: '对线胜率 54.44%',
    reasonEn: 'Win rate 54.44%',
    games: 2048
  },
  'xayah-mel': {
    reasonZh: '对线胜率 55.17%',
    reasonEn: 'Win rate 55.17%',
    games: 58
  },
  'xayah-nilah': {
    reasonZh: '对线胜率 53.38%',
    reasonEn: 'Win rate 53.38%',
    games: 133
  },
  'xayah-varus': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 189
  },
  'xayah-yasuo': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 90
  },
  'xayah-yunara': {
    reasonZh: '对线胜率 54.29%',
    reasonEn: 'Win rate 54.29%',
    games: 396
  },
  'xerath-annie': {
    reasonZh: '对线胜率 57.84%',
    reasonEn: 'Win rate 57.84%',
    games: 185
  },
  'xerath-aphelios': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 170
  },
  'xerath-ashe': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 150
  },
  'xerath-aurora': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%',
    games: 243
  },
  'xerath-caitlyn': {
    reasonZh: '对线胜率 61.01%',
    reasonEn: 'Win rate 61.01%',
    games: 277
  },
  'xerath-lux': {
    reasonZh: '对线胜率 55.61%',
    reasonEn: 'Win rate 55.61%',
    games: 633
  },
  'xerath-mel': {
    reasonZh: '对线胜率 61.44%',
    reasonEn: 'Win rate 61.44%',
    games: 306
  },
  'xerath-missfortune': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 99
  },
  'xerath-pantheon': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%',
    games: 52
  },
  'xerath-swain': {
    reasonZh: '对线胜率 60.56%',
    reasonEn: 'Win rate 60.56%',
    games: 142
  },
  'xerath-tristana': {
    reasonZh: '对线胜率 63.30%',
    reasonEn: 'Win rate 63.30%',
    games: 109
  },
  'xerath-vayne': {
    reasonZh: '对线胜率 56.60%',
    reasonEn: 'Win rate 56.60%',
    games: 53
  },
  'xerath-veigar': {
    reasonZh: '对线胜率 57.06%',
    reasonEn: 'Win rate 57.06%',
    games: 326
  },
  'xerath-viktor': {
    reasonZh: '对线胜率 54.34%',
    reasonEn: 'Win rate 54.34%',
    games: 1382
  },
  'xinzhao-fizz': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 36
  },
  'xinzhao-lillia': {
    reasonZh: '对线胜率 53.90%',
    reasonEn: 'Win rate 53.90%',
    games: 154
  },
  'xinzhao-sejuani': {
    reasonZh: '对线胜率 58.70%',
    reasonEn: 'Win rate 58.70%',
    games: 92
  },
  'xinzhao-yorick': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 63
  },
  'xinzhao-zac': {
    reasonZh: '对线胜率 54.93%',
    reasonEn: 'Win rate 54.93%',
    games: 142
  },
  'yasuo-akshan': {
    reasonZh: '对线胜率 54.72%',
    reasonEn: 'Win rate 54.72%',
    games: 413
  },
  'yasuo-caitlyn': {
    reasonZh: '对线胜率 57.93%',
    reasonEn: 'Win rate 57.93%',
    games: 347
  },
  'yasuo-diana': {
    reasonZh: '对线胜率 53.00%',
    reasonEn: 'Win rate 53.00%',
    games: 466
  },
  'yasuo-ezreal': {
    reasonZh: '对线胜率 64.78%',
    reasonEn: 'Win rate 64.78%',
    games: 372
  },
  'yasuo-gwen': {
    reasonZh: '对线胜率 60.18%',
    reasonEn: 'Win rate 60.18%',
    games: 113
  },
  'yasuo-jhin': {
    reasonZh: '对线胜率 56.94%',
    reasonEn: 'Win rate 56.94%',
    games: 353
  },
  'yasuo-mel': {
    reasonZh: '对线胜率 56.68%',
    reasonEn: 'Win rate 56.68%',
    games: 277
  },
  'yasuo-ryze': {
    reasonZh: '对线胜率 54.92%',
    reasonEn: 'Win rate 54.92%',
    games: 315
  },
  'yasuo-samira': {
    reasonZh: '对线胜率 57.76%',
    reasonEn: 'Win rate 57.76%',
    games: 116
  },
  'yasuo-smolder': {
    reasonZh: '对线胜率 65.45%',
    reasonEn: 'Win rate 65.45%',
    games: 55
  },
  'yasuo-teemo': {
    reasonZh: '对线胜率 56.44%',
    reasonEn: 'Win rate 56.44%',
    games: 303
  },
  'yasuo-tristana': {
    reasonZh: '对线胜率 55.41%',
    reasonEn: 'Win rate 55.41%',
    games: 74
  },
  'yone-drmundo': {
    reasonZh: '对线胜率 55.62%',
    reasonEn: 'Win rate 55.62%',
    games: 516
  },
  'yone-malzahar': {
    reasonZh: '对线胜率 61.29%',
    reasonEn: 'Win rate 61.29%',
    games: 62
  },
  'yone-ryze': {
    reasonZh: '对线胜率 55.47%',
    reasonEn: 'Win rate 55.47%',
    games: 128
  },
  'yone-yorick': {
    reasonZh: '对线胜率 55.19%',
    reasonEn: 'Win rate 55.19%',
    games: 665
  },
  'yorick-cassiopeia': {
    reasonZh: '对线胜率 62.16%',
    reasonEn: 'Win rate 62.16%',
    games: 37
  },
  'yorick-illaoi': {
    reasonZh: '对线胜率 56.99%',
    reasonEn: 'Win rate 56.99%',
    games: 186
  },
  'yorick-malzahar': {
    reasonZh: '对线胜率 63.89%',
    reasonEn: 'Win rate 63.89%',
    games: 36
  },
  'yorick-mordekaiser': {
    reasonZh: '对线胜率 57.07%',
    reasonEn: 'Win rate 57.07%',
    games: 368
  },
  'yorick-urgot': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 225
  },
  'yorick-vayne': {
    reasonZh: '对线胜率 59.72%',
    reasonEn: 'Win rate 59.72%',
    games: 144
  },
  'yunara-corki': {
    reasonZh: '对线胜率 51.82%',
    reasonEn: 'Win rate 51.82%',
    games: 137
  },
  'yunara-kaisa': {
    reasonZh: '对线胜率 50.42%',
    reasonEn: 'Win rate 50.42%',
    games: 1898
  },
  'yunara-karthus': {
    reasonZh: '对线胜率 60.38%',
    reasonEn: 'Win rate 60.38%',
    games: 53
  },
  'yunara-senna': {
    reasonZh: '对线胜率 50.24%',
    reasonEn: 'Win rate 50.24%',
    games: 1051
  },
  'yunara-sivir': {
    reasonZh: '对线胜率 52.10%',
    reasonEn: 'Win rate 52.10%',
    games: 618
  },
  'yuumi-anivia': {
    reasonZh: '对线胜率 57.69%',
    reasonEn: 'Win rate 57.69%',
    games: 52
  },
  'yuumi-mel': {
    reasonZh: '对线胜率 57.02%',
    reasonEn: 'Win rate 57.02%',
    games: 114
  },
  'yuumi-morgana': {
    reasonZh: '对线胜率 54.21%',
    reasonEn: 'Win rate 54.21%',
    games: 214
  },
  'yuumi-shaco': {
    reasonZh: '对线胜率 54.69%',
    reasonEn: 'Win rate 54.69%',
    games: 128
  },
  'yuumi-zoe': {
    reasonZh: '对线胜率 58.44%',
    reasonEn: 'Win rate 58.44%',
    games: 77
  },
  'zaahen-drmundo': {
    reasonZh: '对线胜率 55.39%',
    reasonEn: 'Win rate 55.39%',
    games: 204
  },
  'zaahen-kayn': {
    reasonZh: '对线胜率 56.10%',
    reasonEn: 'Win rate 56.10%',
    games: 82
  },
  'zaahen-ksante': {
    reasonZh: '对线胜率 57.54%',
    reasonEn: 'Win rate 57.54%',
    games: 325
  },
  'zaahen-leesin': {
    reasonZh: '对线胜率 55.65%',
    reasonEn: 'Win rate 55.65%',
    games: 115
  },
  'zaahen-masteryi': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 34
  },
  'zaahen-monkeyking': {
    reasonZh: '对线胜率 59.26%',
    reasonEn: 'Win rate 59.26%',
    games: 54
  },
  'zaahen-xinzhao': {
    reasonZh: '对线胜率 66.67%',
    reasonEn: 'Win rate 66.67%',
    games: 42
  },
  'zac-amumu': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 95
  },
  'zac-khazix': {
    reasonZh: '对线胜率 58.28%',
    reasonEn: 'Win rate 58.28%',
    games: 163
  },
  'zac-nunu': {
    reasonZh: '对线胜率 55.00%',
    reasonEn: 'Win rate 55.00%',
    games: 100
  },
  'zac-reksai': {
    reasonZh: '对线胜率 58.75%',
    reasonEn: 'Win rate 58.75%',
    games: 80
  },
  'zac-sejuani': {
    reasonZh: '对线胜率 58.62%',
    reasonEn: 'Win rate 58.62%',
    games: 87
  },
  'zed-aurora': {
    reasonZh: '对线胜率 56.35%',
    reasonEn: 'Win rate 56.35%',
    games: 323
  },
  'zed-azir': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 150
  },
  'zed-mel': {
    reasonZh: '对线胜率 56.92%',
    reasonEn: 'Win rate 56.92%',
    games: 260
  },
  'zed-ryze': {
    reasonZh: '对线胜率 57.37%',
    reasonEn: 'Win rate 57.37%',
    games: 312
  },
  'zed-smolder': {
    reasonZh: '对线胜率 65.85%',
    reasonEn: 'Win rate 65.85%',
    games: 41
  },
  'zed-zac': {
    reasonZh: '对线胜率 60.98%',
    reasonEn: 'Win rate 60.98%',
    games: 82
  },
  'zeri-aurelionsol': {
    reasonZh: '对线胜率 58.33%',
    reasonEn: 'Win rate 58.33%',
    games: 36
  },
  'zeri-karthus': {
    reasonZh: '对线胜率 53.97%',
    reasonEn: 'Win rate 53.97%',
    games: 63
  },
  'zeri-mel': {
    reasonZh: '对线胜率 55.07%',
    reasonEn: 'Win rate 55.07%',
    games: 69
  },
  'zeri-twitch': {
    reasonZh: '对线胜率 54.57%',
    reasonEn: 'Win rate 54.57%',
    games: 383
  },
  'zeri-xerath': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 66
  },
  'zeri-ziggs': {
    reasonZh: '对线胜率 51.97%',
    reasonEn: 'Win rate 51.97%',
    games: 127
  },
  'ziggs-akshan': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 30
  },
  'ziggs-kogmaw': {
    reasonZh: '对线胜率 53.70%',
    reasonEn: 'Win rate 53.70%',
    games: 54
  },
  'ziggs-lissandra': {
    reasonZh: '对线胜率 56.00%',
    reasonEn: 'Win rate 56.00%',
    games: 50
  },
  'ziggs-senna': {
    reasonZh: '对线胜率 53.58%',
    reasonEn: 'Win rate 53.58%',
    games: 601
  },
  'ziggs-sivir': {
    reasonZh: '对线胜率 57.44%',
    reasonEn: 'Win rate 57.44%',
    games: 289
  },
  'ziggs-swain': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'ziggs-varus': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 112
  },
  'ziggs-velkoz': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 55
  },
  'ziggs-viktor': {
    reasonZh: '对线胜率 53.66%',
    reasonEn: 'Win rate 53.66%',
    games: 123
  },
  'ziggs-xerath': {
    reasonZh: '对线胜率 58.90%',
    reasonEn: 'Win rate 58.90%',
    games: 73
  },
  'ziggs-yasuo': {
    reasonZh: '对线胜率 57.89%',
    reasonEn: 'Win rate 57.89%',
    games: 57
  },
  'ziggs-zoe': {
    reasonZh: '对线胜率 54.84%',
    reasonEn: 'Win rate 54.84%',
    games: 31
  },
  'zilean-fiddlesticks': {
    reasonZh: '对线胜率 56.67%',
    reasonEn: 'Win rate 56.67%',
    games: 30
  },
  'zilean-mel': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 65
  },
  'zilean-neeko': {
    reasonZh: '对线胜率 59.22%',
    reasonEn: 'Win rate 59.22%',
    games: 103
  },
  'zilean-seraphine': {
    reasonZh: '对线胜率 54.58%',
    reasonEn: 'Win rate 54.58%',
    games: 709
  },
  'zilean-soraka': {
    reasonZh: '对线胜率 56.25%',
    reasonEn: 'Win rate 56.25%',
    games: 336
  },
  'zilean-thresh': {
    reasonZh: '对线胜率 51.92%',
    reasonEn: 'Win rate 51.92%',
    games: 728
  },
  'zilean-zoe': {
    reasonZh: '对线胜率 65.85%',
    reasonEn: 'Win rate 65.85%',
    games: 41
  },
  'zoe-aurelionsol': {
    reasonZh: '对线胜率 59.62%',
    reasonEn: 'Win rate 59.62%',
    games: 52
  },
  'zoe-karma': {
    reasonZh: '对线胜率 55.56%',
    reasonEn: 'Win rate 55.56%',
    games: 135
  },
  'zoe-mel': {
    reasonZh: '对线胜率 58.75%',
    reasonEn: 'Win rate 58.75%',
    games: 240
  },
  'zoe-pantheon': {
    reasonZh: '对线胜率 56.86%',
    reasonEn: 'Win rate 56.86%',
    games: 51
  },
  'zoe-riven': {
    reasonZh: '对线胜率 63.04%',
    reasonEn: 'Win rate 63.04%',
    games: 46
  },
  'zoe-sion': {
    reasonZh: '对线胜率 60.00%',
    reasonEn: 'Win rate 60.00%',
    games: 35
  },
  'zoe-veigar': {
    reasonZh: '对线胜率 57.14%',
    reasonEn: 'Win rate 57.14%',
    games: 140
  },
  'zyra-ekko': {
    reasonZh: '对线胜率 61.70%',
    reasonEn: 'Win rate 61.70%',
    games: 47
  },
  'zyra-fiddlesticks': {
    reasonZh: '对线胜率 63.27%',
    reasonEn: 'Win rate 63.27%',
    games: 49
  },
  'zyra-graves': {
    reasonZh: '对线胜率 57.99%',
    reasonEn: 'Win rate 57.99%',
    games: 269
  },
  'zyra-kayn': {
    reasonZh: '对线胜率 59.80%',
    reasonEn: 'Win rate 59.80%',
    games: 102
  },
  'zyra-monkeyking': {
    reasonZh: '对线胜率 58.11%',
    reasonEn: 'Win rate 58.11%',
    games: 74
  },
  'zyra-neeko': {
    reasonZh: '对线胜率 58.82%',
    reasonEn: 'Win rate 58.82%',
    games: 85
  },
  'zyra-renata': {
    reasonZh: '对线胜率 62.96%',
    reasonEn: 'Win rate 62.96%',
    games: 54
  },
  'zyra-sejuani': {
    reasonZh: '对线胜率 63.33%',
    reasonEn: 'Win rate 63.33%',
    games: 30
  },
  'zyra-shaco': {
    reasonZh: '对线胜率 62.86%',
    reasonEn: 'Win rate 62.86%',
    games: 70
  },
  'zyra-swain': {
    reasonZh: '对线胜率 62.71%',
    reasonEn: 'Win rate 62.71%',
    games: 118
  },
  'zyra-sylas': {
    reasonZh: '对线胜率 62.50%',
    reasonEn: 'Win rate 62.50%',
    games: 40
  },
  'zyra-warwick': {
    reasonZh: '对线胜率 59.09%',
    reasonEn: 'Win rate 59.09%',
    games: 44
  },
  'zyra-zac': {
    reasonZh: '对线胜率 64.44%',
    reasonEn: 'Win rate 64.44%',
    games: 45
  },
};

export function getCounterReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = `${sourceId}-${targetId}`;
  const data = counterReasons[key];
  if (!data) return '';
  const reason = language === 'zh' ? data.reasonZh : data.reasonEn;
  if (data.games !== null && data.games > 0) {
    const gamesLabel = language === 'zh' ? ` (${data.games.toLocaleString()} 场)` : ` (${data.games.toLocaleString()} games)`;
    return reason + gamesLabel;
  }
  return reason;
}

export function getCounterReasonData(sourceId: string, targetId: string): CounterReasonData | null {
  const key = `${sourceId}-${targetId}`;
  return counterReasons[key] || null;
}

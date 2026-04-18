// 从英雄联盟攻略中心抓取的英雄克制关系数据
// 生成时间: 2026-04-18T04:03:55.271Z
// 数据来源: https://101.qq.com/#/hero
// 收集英雄数: 168

export interface HeroRelation {
  heroId: string;
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
  {
    "heroId": "annie",
    "heroName": "黑暗之女 安妮",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=1",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['pantheon', 'malphite', 'taliyah', 'vladimir', 'twistedfate', 'malzahar'],
      "reasons": ["对线胜率 41.96%", "对线胜率 43.00%", "对线胜率 47.96%", "对线胜率 49.13%", "对线胜率 49.61%", "对线胜率 49.95%"]
    },
    "counters": {
      "heroes": ['garen', 'cassiopeia', 'morgana', 'velkoz', 'yone', 'mel', 'leblanc', 'tristana', 'swain', 'yasuo'],
      "reasons": ["对线胜率 65.09%", "对线胜率 61.18%", "对线胜率 60.00%", "对线胜率 59.34%", "对线胜率 59.30%", "对线胜率 59.04%", "对线胜率 58.70%", "对线胜率 58.62%", "对线胜率 58.46%", "对线胜率 58.35%"]
    }
  },
  {
    "heroId": "olaf",
    "heroName": "狂战士 奥拉夫",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=2",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['vayne', 'poppy', 'irelia', 'singed', 'karthus', 'gragas', 'ekko', 'kindred', 'lillia', 'nidalee'],
      "reasons": ["对线胜率 42.55%", "对线胜率 44.20%", "对线胜率 45.19%", "对线胜率 45.60%", "对线胜率 45.63%", "对线胜率 46.83%", "对线胜率 47.43%", "对线胜率 47.62%", "对线胜率 47.96%", "对线胜率 48.13%"]
    },
    "counters": {
      "heroes": ['ambessa', 'mordekaiser', 'jayce', 'kaisa', 'rumble', 'zed', 'fiddlesticks', 'sejuani', 'drmundo', 'rammus'],
      "reasons": ["对线胜率 74.58%", "对线胜率 61.78%", "对线胜率 61.00%", "对线胜率 60.12%", "对线胜率 59.68%", "对线胜率 59.43%", "对线胜率 58.22%", "对线胜率 57.46%", "对线胜率 57.14%", "对线胜率 56.91%"]
    }
  },
  {
    "heroId": "galio",
    "heroName": "正义巨像 加里奥",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=3",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['ambessa', 'swain', 'gnar', 'hwei', 'taliyah', 'zaahen', 'brand', 'graves', 'ahri', 'zoe'],
      "reasons": ["对线胜率 41.38%", "对线胜率 43.88%", "对线胜率 44.23%", "对线胜率 44.50%", "对线胜率 44.93%", "对线胜率 46.15%", "对线胜率 47.43%", "对线胜率 47.51%", "对线胜率 47.51%", "对线胜率 47.52%"]
    },
    "counters": {
      "heroes": ['sion', 'darius', 'riven', 'gangplank', 'ornn', 'irelia', 'malphite', 'katarina', 'jayce', 'jax'],
      "reasons": ["对线胜率 59.65%", "对线胜率 58.38%", "对线胜率 57.81%", "对线胜率 56.10%", "对线胜率 56.06%", "对线胜率 56.01%", "对线胜率 54.96%", "对线胜率 54.92%", "对线胜率 54.89%", "对线胜率 54.84%"]
    }
  },
  {
    "heroId": "twistedfate",
    "heroName": "卡牌大师 崔斯特",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=4",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['rumble', 'velkoz', 'fiora', 'swain', 'anivia', 'aurelionsol', 'fizz', 'renekton', 'xerath', 'pantheon'],
      "reasons": ["对线胜率 33.33%", "对线胜率 46.01%", "对线胜率 46.30%", "对线胜率 46.60%", "对线胜率 46.85%", "对线胜率 47.04%", "对线胜率 47.16%", "对线胜率 47.62%", "对线胜率 47.80%", "对线胜率 48.39%"]
    },
    "counters": {
      "heroes": ['tryndamere', 'gangplank', 'camille', 'jax', 'mordekaiser', 'yone', 'vayne', 'malphite', 'tristana', 'smolder'],
      "reasons": ["对线胜率 65.00%", "对线胜率 64.29%", "对线胜率 63.46%", "对线胜率 60.48%", "对线胜率 60.44%", "对线胜率 59.30%", "对线胜率 58.49%", "对线胜率 58.28%", "对线胜率 58.18%", "对线胜率 56.64%"]
    }
  },
  {
    "heroId": "xinzhao",
    "heroName": "德邦总管 赵信",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=5",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['olaf', 'taliyah', 'zaahen', 'gwen', 'nasus', 'reksai', 'ornn', 'briar', 'urgot', 'teemo'],
      "reasons": ["对线胜率 43.35%", "对线胜率 45.59%", "对线胜率 46.60%", "对线胜率 46.75%", "对线胜率 46.78%", "对线胜率 46.83%", "对线胜率 47.02%", "对线胜率 47.12%", "对线胜率 47.42%", "对线胜率 47.61%"]
    },
    "counters": {
      "heroes": ['diana', 'smolder', 'rengar', 'zed', 'ksante', 'jayce', 'leesin', 'amumu', 'sylas', 'darius'],
      "reasons": ["对线胜率 55.27%", "对线胜率 55.01%", "对线胜率 54.77%", "对线胜率 54.68%", "对线胜率 53.48%", "对线胜率 53.46%", "对线胜率 53.28%", "对线胜率 53.25%", "对线胜率 53.15%", "对线胜率 52.97%"]
    }
  },
  {
    "heroId": "urgot",
    "heroName": "无畏战车 厄加特",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=6",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['poppy', 'taliyah', 'gwen', 'olaf', 'kindred', 'tahmkench', 'varus', 'zyra', 'brand', 'sion'],
      "reasons": ["对线胜率 41.18%", "对线胜率 43.26%", "对线胜率 44.25%", "对线胜率 44.85%", "对线胜率 45.13%", "对线胜率 45.60%", "对线胜率 45.61%", "对线胜率 45.69%", "对线胜率 45.71%", "对线胜率 45.85%"]
    },
    "counters": {
      "heroes": ['jayce', 'drmundo', 'akali', 'singed', 'zed', 'kaisa', 'darius', 'yasuo', 'nasus', 'rengar'],
      "reasons": ["对线胜率 66.67%", "对线胜率 64.41%", "对线胜率 64.13%", "对线胜率 63.74%", "对线胜率 63.25%", "对线胜率 60.90%", "对线胜率 60.00%", "对线胜率 58.94%", "对线胜率 58.62%", "对线胜率 58.49%"]
    }
  },
  {
    "heroId": "leblanc",
    "heroName": "诡术妖姬 乐芙兰",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=7",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['elise', 'teemo', 'annie', 'milio', 'poppy', 'maokai', 'renekton', 'rakan', 'naafiri', 'malzahar'],
      "reasons": ["对线胜率 39.39%", "对线胜率 40.28%", "对线胜率 41.30%", "对线胜率 41.60%", "对线胜率 41.73%", "对线胜率 42.62%", "对线胜率 42.67%", "对线胜率 42.71%", "对线胜率 42.79%", "对线胜率 42.79%"]
    },
    "counters": {
      "heroes": ['missfortune', 'sett', 'tryndamere', 'yone', 'mordekaiser', 'jarvaniv', 'jayce', 'darius', 'azir', 'aatrox'],
      "reasons": ["对线胜率 67.02%", "对线胜率 66.04%", "对线胜率 60.78%", "对线胜率 60.34%", "对线胜率 60.00%", "对线胜率 58.59%", "对线胜率 58.21%", "对线胜率 58.10%", "对线胜率 56.52%", "对线胜率 56.50%"]
    }
  },
  {
    "heroId": "vladimir",
    "heroName": "猩红收割者 弗拉基米尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=8",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['malzahar', 'zoe', 'velkoz', 'aurelionsol', 'ambessa', 'hwei', 'akshan', 'sion', 'anivia', 'aurora'],
      "reasons": ["对线胜率 41.46%", "对线胜率 43.61%", "对线胜率 43.68%", "对线胜率 43.97%", "对线胜率 44.12%", "对线胜率 44.83%", "对线胜率 45.15%", "对线胜率 45.35%", "对线胜率 46.17%", "对线胜率 46.56%"]
    },
    "counters": {
      "heroes": ['smolder', 'gangplank', 'teemo', 'jax', 'drmundo', 'kayle', 'tryndamere', 'irelia', 'darius', 'camille'],
      "reasons": ["对线胜率 61.61%", "对线胜率 60.71%", "对线胜率 60.29%", "对线胜率 60.07%", "对线胜率 58.89%", "对线胜率 58.33%", "对线胜率 57.60%", "对线胜率 57.26%", "对线胜率 57.07%", "对线胜率 56.84%"]
    }
  },
  {
    "heroId": "fiddlesticks",
    "heroName": "远古恐惧 费德提克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=9",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['olaf', 'rell', 'velkoz', 'singed', 'thresh', 'zilean', 'milio', 'maokai', 'sona', 'seraphine'],
      "reasons": ["对线胜率 41.78%", "对线胜率 43.17%", "对线胜率 44.17%", "对线胜率 44.23%", "对线胜率 46.87%", "对线胜率 46.99%", "对线胜率 47.39%", "对线胜率 47.42%", "对线胜率 47.62%", "对线胜率 47.78%"]
    },
    "counters": {
      "heroes": ['malphite', 'pantheon', 'yasuo', 'senna', 'veigar', 'zyra', 'jhin', 'rumble', 'zed', 'monkeyking'],
      "reasons": ["对线胜率 63.79%", "对线胜率 60.00%", "对线胜率 57.68%", "对线胜率 56.91%", "对线胜率 56.60%", "对线胜率 56.16%", "对线胜率 56.09%", "对线胜率 55.93%", "对线胜率 55.70%", "对线胜率 55.38%"]
    }
  },
  {
    "heroId": "kayle",
    "heroName": "正义天使 凯尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=10",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kennen', 'vladimir', 'shen', 'malzahar', 'evelynn', 'taliyah', 'zac', 'galio', 'fiddlesticks', 'belveth'],
      "reasons": ["对线胜率 41.58%", "对线胜率 41.67%", "对线胜率 41.92%", "对线胜率 41.94%", "对线胜率 45.77%", "对线胜率 45.88%", "对线胜率 45.96%", "对线胜率 47.06%", "对线胜率 47.87%", "对线胜率 48.20%"]
    },
    "counters": {
      "heroes": ['varus', 'yone', 'renekton', 'volibear', 'kaisa', 'mordekaiser', 'shaco', 'heimerdinger', 'darius', 'elise'],
      "reasons": ["对线胜率 66.04%", "对线胜率 60.61%", "对线胜率 59.00%", "对线胜率 58.89%", "对线胜率 58.38%", "对线胜率 58.25%", "对线胜率 57.96%", "对线胜率 57.86%", "对线胜率 57.81%", "对线胜率 57.49%"]
    }
  },
  {
    "heroId": "masteryi",
    "heroName": "无极剑圣 易",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=11",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'singed', 'taliyah', 'zyra', 'elise', 'evelynn', 'vayne', 'urgot', 'teemo', 'ornn'],
      "reasons": ["对线胜率 40.10%", "对线胜率 42.56%", "对线胜率 43.23%", "对线胜率 43.72%", "对线胜率 44.58%", "对线胜率 45.43%", "对线胜率 45.70%", "对线胜率 45.86%", "对线胜率 46.06%", "对线胜率 46.80%"]
    },
    "counters": {
      "heroes": ['zed', 'diana', 'smolder', 'jhin', 'rengar', 'gragas', 'shyvana', 'yasuo', 'malphite', 'jarvaniv'],
      "reasons": ["对线胜率 58.63%", "对线胜率 54.28%", "对线胜率 53.85%", "对线胜率 53.83%", "对线胜率 53.63%", "对线胜率 52.68%", "对线胜率 52.65%", "对线胜率 52.57%", "对线胜率 52.31%", "对线胜率 52.18%"]
    }
  },
  {
    "heroId": "alistar",
    "heroName": "牛头酋长 阿利斯塔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=12",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['janna', 'brand', 'renata', 'senna', 'neeko', 'taric', 'seraphine', 'zyra', 'swain', 'sona'],
      "reasons": ["对线胜率 44.58%", "对线胜率 44.88%", "对线胜率 45.07%", "对线胜率 45.39%", "对线胜率 45.59%", "对线胜率 46.07%", "对线胜率 46.09%", "对线胜率 46.55%", "对线胜率 46.94%", "对线胜率 47.08%"]
    },
    "counters": {
      "heroes": ['amumu', 'camille', 'malphite', 'veigar', 'anivia', 'teemo', 'ashe', 'mel', 'sylas', 'pyke'],
      "reasons": ["对线胜率 61.21%", "对线胜率 61.08%", "对线胜率 56.95%", "对线胜率 56.77%", "对线胜率 55.82%", "对线胜率 55.79%", "对线胜率 53.67%", "对线胜率 53.55%", "对线胜率 53.52%", "对线胜率 53.37%"]
    }
  },
  {
    "heroId": "ryze",
    "heroName": "符文法师 瑞兹",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=13",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'brand', 'pantheon', 'graves', 'hwei', 'malzahar', 'veigar', 'zaahen', 'ahri', 'swain'],
      "reasons": ["对线胜率 43.58%", "对线胜率 43.73%", "对线胜率 43.84%", "对线胜率 44.44%", "对线胜率 44.92%", "对线胜率 45.17%", "对线胜率 45.22%", "对线胜率 45.28%", "对线胜率 45.35%", "对线胜率 45.61%"]
    },
    "counters": {
      "heroes": ['ksante', 'nasus', 'vayne', 'riven', 'malphite', 'sett', 'smolder', 'tryndamere', 'darius', 'fiora'],
      "reasons": ["对线胜率 64.71%", "对线胜率 58.33%", "对线胜率 57.97%", "对线胜率 56.90%", "对线胜率 56.74%", "对线胜率 55.36%", "对线胜率 54.89%", "对线胜率 54.74%", "对线胜率 54.44%", "对线胜率 53.23%"]
    }
  },
  {
    "heroId": "sion",
    "heroName": "亡灵战神 赛恩",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=14",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akshan', 'azir', 'hwei', 'anivia', 'kaisa', 'ornn', 'belveth', 'viktor', 'annie', 'rammus'],
      "reasons": ["对线胜率 43.94%", "对线胜率 44.38%", "对线胜率 44.96%", "对线胜率 45.25%", "对线胜率 45.56%", "对线胜率 45.64%", "对线胜率 45.85%", "对线胜率 46.08%", "对线胜率 46.30%", "对线胜率 46.37%"]
    },
    "counters": {
      "heroes": ['teemo', 'malphite', 'kassadin', 'graves', 'irelia', 'talon', 'ksante', 'naafiri', 'chogath', 'mel'],
      "reasons": ["对线胜率 64.41%", "对线胜率 62.89%", "对线胜率 62.24%", "对线胜率 62.12%", "对线胜率 61.54%", "对线胜率 60.63%", "对线胜率 59.09%", "对线胜率 59.02%", "对线胜率 58.33%", "对线胜率 58.12%"]
    }
  },
  {
    "heroId": "sivir",
    "heroName": "战争女神 希维尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=15",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['senna', 'aurelionsol', 'twitch', 'kogmaw', 'vayne', 'nilah', 'zeri', 'ashe'],
      "reasons": ["对线胜率 42.53%", "对线胜率 47.30%", "对线胜率 47.33%", "对线胜率 47.46%", "对线胜率 48.02%", "对线胜率 48.31%", "对线胜率 48.35%", "对线胜率 48.70%"]
    },
    "counters": {
      "heroes": ['corki', 'varus', 'ezreal', 'kalista', 'caitlyn', 'tristana', 'kaisa', 'jhin', 'lucian', 'draven'],
      "reasons": ["对线胜率 56.60%", "对线胜率 55.59%", "对线胜率 54.83%", "对线胜率 54.15%", "对线胜率 53.77%", "对线胜率 53.26%", "对线胜率 52.76%", "对线胜率 52.67%", "对线胜率 52.57%", "对线胜率 52.40%"]
    }
  },
  {
    "heroId": "soraka",
    "heroName": "众星之子 索拉卡",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=16",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['teemo', 'shen', 'brand', 'rell', 'yuumi', 'nami', 'sona', 'rakan', 'milio', 'janna'],
      "reasons": ["对线胜率 46.79%", "对线胜率 46.99%", "对线胜率 47.51%", "对线胜率 47.55%", "对线胜率 47.56%", "对线胜率 47.64%", "对线胜率 47.80%", "对线胜率 48.85%", "对线胜率 48.90%", "对线胜率 49.01%"]
    },
    "counters": {
      "heroes": ['camille', 'mel', 'missfortune', 'malphite', 'leblanc', 'ashe', 'veigar', 'poppy', 'leesin', 'pantheon'],
      "reasons": ["对线胜率 59.64%", "对线胜率 57.82%", "对线胜率 57.54%", "对线胜率 55.90%", "对线胜率 55.71%", "对线胜率 55.36%", "对线胜率 55.16%", "对线胜率 54.45%", "对线胜率 53.74%", "对线胜率 53.55%"]
    }
  },
  {
    "heroId": "teemo",
    "heroName": "迅捷斥候 提莫",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=17",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'vladimir', 'urgot', 'sona', 'lissandra', 'milio', 'alistar', 'ornn', 'sion', 'malzahar'],
      "reasons": ["对线胜率 38.89%", "对线胜率 39.71%", "对线胜率 42.00%", "对线胜率 42.40%", "对线胜率 42.86%", "对线胜率 44.21%", "对线胜率 44.21%", "对线胜率 44.26%", "对线胜率 44.96%", "对线胜率 45.07%"]
    },
    "counters": {
      "heroes": ['zaahen', 'veigar', 'volibear', 'leblanc', 'jax', 'fiora', 'missfortune', 'shaco', 'warwick', 'tryndamere'],
      "reasons": ["对线胜率 72.41%", "对线胜率 62.79%", "对线胜率 62.26%", "对线胜率 59.72%", "对线胜率 57.95%", "对线胜率 57.14%", "对线胜率 56.88%", "对线胜率 56.86%", "对线胜率 56.46%", "对线胜率 56.44%"]
    }
  },
  {
    "heroId": "tristana",
    "heroName": "麦林炮手 崔丝塔娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=18",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['anivia', 'brand', 'pantheon', 'vex', 'xerath', 'akali', 'annie', 'lux', 'twistedfate', 'fizz'],
      "reasons": ["对线胜率 31.58%", "对线胜率 34.29%", "对线胜率 39.66%", "对线胜率 40.87%", "对线胜率 40.89%", "对线胜率 40.91%", "对线胜率 41.38%", "对线胜率 41.57%", "对线胜率 41.82%", "对线胜率 42.41%"]
    },
    "counters": {
      "heroes": ['smolder', 'leblanc', 'azir', 'varus', 'yasuo', 'ezreal', 'vladimir', 'senna', 'ahri', 'yunara'],
      "reasons": ["对线胜率 56.60%", "对线胜率 53.51%", "对线胜率 53.49%", "对线胜率 53.11%", "对线胜率 52.34%", "对线胜率 52.25%", "对线胜率 51.52%", "对线胜率 51.23%", "对线胜率 51.18%", "对线胜率 51.05%"]
    }
  },
  {
    "heroId": "warwick",
    "heroName": "祖安怒兽 沃里克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=19",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['heimerdinger', 'teemo', 'taliyah', 'singed', 'kennen', 'briar', 'kaisa', 'reksai', 'lillia', 'varus'],
      "reasons": ["对线胜率 43.01%", "对线胜率 43.54%", "对线胜率 44.21%", "对线胜率 45.26%", "对线胜率 45.68%", "对线胜率 45.91%", "对线胜率 45.93%", "对线胜率 45.97%", "对线胜率 46.02%", "对线胜率 46.15%"]
    },
    "counters": {
      "heroes": ['mordekaiser', 'rammus', 'pantheon', 'akali', 'gragas', 'gnar', 'talon', 'shaco', 'tryndamere', 'poppy'],
      "reasons": ["对线胜率 60.78%", "对线胜率 58.74%", "对线胜率 57.04%", "对线胜率 55.29%", "对线胜率 55.19%", "对线胜率 55.16%", "对线胜率 54.66%", "对线胜率 54.55%", "对线胜率 54.15%", "对线胜率 53.85%"]
    }
  },
  {
    "heroId": "nunu",
    "heroName": "雪原双子 努努和威朗普",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=20",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['chogath', 'brand', 'volibear', 'fiddlesticks', 'fiora', 'irelia', 'taliyah', 'kaisa', 'amumu', 'reksai'],
      "reasons": ["对线胜率 43.08%", "对线胜率 43.56%", "对线胜率 43.78%", "对线胜率 45.30%", "对线胜率 46.31%", "对线胜率 46.46%", "对线胜率 46.93%", "对线胜率 47.20%", "对线胜率 47.30%", "对线胜率 47.31%"]
    },
    "counters": {
      "heroes": ['shen', 'heimerdinger', 'qiyana', 'hecarim', 'jayce', 'rammus', 'zed', 'karthus', 'urgot', 'viego'],
      "reasons": ["对线胜率 62.09%", "对线胜率 56.43%", "对线胜率 55.47%", "对线胜率 55.32%", "对线胜率 54.76%", "对线胜率 54.61%", "对线胜率 54.59%", "对线胜率 54.55%", "对线胜率 54.14%", "对线胜率 54.05%"]
    }
  },
  {
    "heroId": "missfortune",
    "heroName": "赏金猎人 厄运小姐",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=21",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['leblanc', 'milio', 'rell', 'yuumi', 'amumu', 'nami', 'brand', 'karma', 'blitzcrank', 'rakan'],
      "reasons": ["对线胜率 32.98%", "对线胜率 34.48%", "对线胜率 37.50%", "对线胜率 37.74%", "对线胜率 37.74%", "对线胜率 38.98%", "对线胜率 39.23%", "对线胜率 39.47%", "对线胜率 40.34%", "对线胜率 40.50%"]
    },
    "counters": {
      "heroes": ['malphite', 'anivia', 'varus', 'kalista', 'tristana', 'kaisa', 'yunara', 'corki', 'draven', 'aphelios'],
      "reasons": ["对线胜率 65.57%", "对线胜率 57.14%", "对线胜率 54.52%", "对线胜率 54.47%", "对线胜率 53.32%", "对线胜率 52.96%", "对线胜率 52.82%", "对线胜率 52.69%", "对线胜率 52.50%", "对线胜率 52.48%"]
    }
  },
  {
    "heroId": "ashe",
    "heroName": "寒冰射手 艾希",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=22",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['tahmkench', 'maokai', 'nami', 'poppy', 'aurelionsol', 'rakan', 'zyra', 'rell', 'karma', 'sylas'],
      "reasons": ["对线胜率 40.11%", "对线胜率 40.68%", "对线胜率 40.86%", "对线胜率 40.91%", "对线胜率 41.01%", "对线胜率 41.30%", "对线胜率 41.35%", "对线胜率 42.15%", "对线胜率 42.53%", "对线胜率 42.55%"]
    },
    "counters": {
      "heroes": ['anivia', 'malphite', 'missfortune', 'varus', 'mel', 'kalista', 'lucian', 'kaisa', 'yunara', 'leblanc'],
      "reasons": ["对线胜率 64.15%", "对线胜率 58.56%", "对线胜率 57.65%", "对线胜率 55.06%", "对线胜率 54.93%", "对线胜率 53.42%", "对线胜率 53.12%", "对线胜率 53.09%", "对线胜率 53.03%", "对线胜率 52.86%"]
    }
  },
  {
    "heroId": "tryndamere",
    "heroName": "蛮族之王 泰达米尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=23",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurora', 'anivia', 'swain', 'aurelionsol', 'taliyah', 'belveth', 'reksai', 'vayne', 'briar', 'teemo'],
      "reasons": ["对线胜率 36.46%", "对线胜率 37.33%", "对线胜率 40.00%", "对线胜率 40.85%", "对线胜率 42.92%", "对线胜率 43.71%", "对线胜率 44.23%", "对线胜率 44.32%", "对线胜率 44.39%", "对线胜率 44.40%"]
    },
    "counters": {
      "heroes": ['jayce', 'urgot', 'lucian', 'drmundo', 'brand', 'mel', 'kled', 'galio', 'rumble', 'kaisa'],
      "reasons": ["对线胜率 59.62%", "对线胜率 59.49%", "对线胜率 58.33%", "对线胜率 57.74%", "对线胜率 57.58%", "对线胜率 55.93%", "对线胜率 55.84%", "对线胜率 55.81%", "对线胜率 55.56%", "对线胜率 55.56%"]
    }
  },
  {
    "heroId": "jax",
    "heroName": "武器大师 贾克斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=24",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['katarina', 'hwei', 'xerath', 'orianna', 'twistedfate', 'vladimir', 'vex', 'lissandra', 'ahri', 'singed'],
      "reasons": ["对线胜率 31.91%", "对线胜率 34.62%", "对线胜率 35.44%", "对线胜率 38.33%", "对线胜率 39.52%", "对线胜率 39.93%", "对线胜率 40.00%", "对线胜率 42.31%", "对线胜率 44.22%", "对线胜率 44.48%"]
    },
    "counters": {
      "heroes": ['graves', 'jhin', 'ezreal', 'tahmkench', 'volibear', 'ksante', 'pantheon', 'gragas', 'missfortune', 'olaf'],
      "reasons": ["对线胜率 60.71%", "对线胜率 60.00%", "对线胜率 59.70%", "对线胜率 58.70%", "对线胜率 56.39%", "对线胜率 56.31%", "对线胜率 55.84%", "对线胜率 55.45%", "对线胜率 55.38%", "对线胜率 55.36%"]
    }
  },
  {
    "heroId": "morgana",
    "heroName": "堕落天使 莫甘娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=25",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akshan', 'annie', 'naafiri', 'milio', 'malzahar', 'yuumi', 'nami', 'ekko', 'zilean', 'xerath'],
      "reasons": ["对线胜率 40.00%", "对线胜率 40.00%", "对线胜率 41.91%", "对线胜率 45.68%", "对线胜率 45.92%", "对线胜率 46.04%", "对线胜率 46.31%", "对线胜率 46.56%", "对线胜率 46.62%", "对线胜率 46.63%"]
    },
    "counters": {
      "heroes": ['malphite', 'cassiopeia', 'graves', 'nasus', 'missfortune', 'veigar', 'leesin', 'irelia', 'camille', 'velkoz'],
      "reasons": ["对线胜率 57.18%", "对线胜率 56.86%", "对线胜率 56.86%", "对线胜率 56.41%", "对线胜率 56.31%", "对线胜率 56.07%", "对线胜率 55.68%", "对线胜率 55.17%", "对线胜率 55.05%", "对线胜率 54.90%"]
    }
  },
  {
    "heroId": "zilean",
    "heroName": "时光守护者 基兰",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=26",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['leblanc', 'elise', 'milio', 'shen', 'bard', 'teemo', 'sylas', 'sona', 'sett', 'lulu'],
      "reasons": ["对线胜率 45.00%", "对线胜率 45.65%", "对线胜率 45.86%", "对线胜率 46.77%", "对线胜率 47.04%", "对线胜率 47.42%", "对线胜率 48.45%", "对线胜率 48.79%", "对线胜率 49.09%", "对线胜率 49.55%"]
    },
    "counters": {
      "heroes": ['amumu', 'poppy', 'pantheon', 'swain', 'anivia', 'veigar', 'missfortune', 'mel', 'leona', 'tahmkench'],
      "reasons": ["对线胜率 61.11%", "对线胜率 59.55%", "对线胜率 56.82%", "对线胜率 56.55%", "对线胜率 56.38%", "对线胜率 56.30%", "对线胜率 56.16%", "对线胜率 55.70%", "对线胜率 54.81%", "对线胜率 54.30%"]
    }
  },
  {
    "heroId": "singed",
    "heroName": "炼金术士 辛吉德",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=27",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['urgot', 'poppy', 'illaoi', 'taliyah', 'belveth', 'smolder', 'kayle', 'nunu', 'reksai', 'vi'],
      "reasons": ["对线胜率 36.26%", "对线胜率 41.24%", "对线胜率 43.09%", "对线胜率 45.45%", "对线胜率 46.18%", "对线胜率 46.70%", "对线胜率 47.25%", "对线胜率 47.33%", "对线胜率 47.44%", "对线胜率 48.08%"]
    },
    "counters": {
      "heroes": ['yone', 'shaco', 'jax', 'sejuani', 'monkeyking', 'zed', 'shyvana', 'aatrox', 'ambessa', 'viego'],
      "reasons": ["对线胜率 62.28%", "对线胜率 60.07%", "对线胜率 58.90%", "对线胜率 58.40%", "对线胜率 58.37%", "对线胜率 57.99%", "对线胜率 57.85%", "对线胜率 57.85%", "对线胜率 57.81%", "对线胜率 57.77%"]
    }
  },
  {
    "heroId": "evelynn",
    "heroName": "痛苦之拥 伊芙琳",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=28",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['riven', 'singed', 'taliyah', 'vayne', 'vi', 'rammus', 'varus', 'reksai', 'belveth', 'zac'],
      "reasons": ["对线胜率 44.44%", "对线胜率 44.63%", "对线胜率 45.56%", "对线胜率 45.77%", "对线胜率 45.98%", "对线胜率 46.30%", "对线胜率 47.33%", "对线胜率 47.64%", "对线胜率 48.16%", "对线胜率 48.33%"]
    },
    "counters": {
      "heroes": ['jhin', 'zed', 'gragas', 'yasuo', 'pantheon', 'sejuani', 'akali', 'darius', 'shyvana', 'hecarim'],
      "reasons": ["对线胜率 60.63%", "对线胜率 58.92%", "对线胜率 58.25%", "对线胜率 58.09%", "对线胜率 56.91%", "对线胜率 55.70%", "对线胜率 55.60%", "对线胜率 55.29%", "对线胜率 55.24%", "对线胜率 55.23%"]
    }
  },
  {
    "heroId": "twitch",
    "heroName": "瘟疫之源 图奇",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=29",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['nilah', 'aurelionsol', 'kogmaw', 'zeri', 'samira', 'vayne', 'draven', 'ashe', 'xayah', 'missfortune'],
      "reasons": ["对线胜率 43.74%", "对线胜率 44.41%", "对线胜率 47.67%", "对线胜率 47.95%", "对线胜率 48.38%", "对线胜率 48.81%", "对线胜率 49.27%", "对线胜率 49.27%", "对线胜率 49.70%", "对线胜率 49.81%"]
    },
    "counters": {
      "heroes": ['varus', 'ziggs', 'sivir', 'jhin', 'aphelios', 'smolder', 'corki', 'ezreal', 'caitlyn', 'yunara'],
      "reasons": ["对线胜率 52.87%", "对线胜率 52.80%", "对线胜率 52.67%", "对线胜率 52.52%", "对线胜率 52.19%", "对线胜率 52.01%", "对线胜率 51.93%", "对线胜率 51.82%", "对线胜率 51.71%", "对线胜率 51.70%"]
    }
  },
  {
    "heroId": "karthus",
    "heroName": "死亡颂唱者 卡尔萨斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=30",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['heimerdinger', 'belveth', 'sion', 'nunu', 'rammus', 'drmundo', 'sett', 'fiora', 'evelynn', 'nidalee'],
      "reasons": ["对线胜率 45.09%", "对线胜率 45.13%", "对线胜率 45.17%", "对线胜率 45.45%", "对线胜率 45.68%", "对线胜率 45.99%", "对线胜率 46.03%", "对线胜率 46.08%", "对线胜率 46.25%", "对线胜率 46.46%"]
    },
    "counters": {
      "heroes": ['qiyana', 'malphite', 'smolder', 'illaoi', 'akali', 'viego', 'zed', 'poppy', 'zyra', 'sejuani'],
      "reasons": ["对线胜率 58.30%", "对线胜率 57.60%", "对线胜率 56.94%", "对线胜率 56.27%", "对线胜率 55.78%", "对线胜率 55.63%", "对线胜率 55.56%", "对线胜率 55.38%", "对线胜率 55.01%", "对线胜率 54.84%"]
    }
  },
  {
    "heroId": "chogath",
    "heroName": "虚空恐惧 科加斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=31",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'ahri', 'aurora', 'drmundo', 'reksai', 'elise', 'hwei', 'brand', 'anivia', 'lillia'],
      "reasons": ["对线胜率 38.27%", "对线胜率 42.19%", "对线胜率 42.24%", "对线胜率 44.85%", "对线胜率 45.03%", "对线胜率 45.09%", "对线胜率 45.12%", "对线胜率 45.22%", "对线胜率 45.57%", "对线胜率 45.65%"]
    },
    "counters": {
      "heroes": ['kayle', 'azir', 'naafiri', 'galio', 'jax', 'zed', 'rengar', 'diana', 'nunu', 'nasus'],
      "reasons": ["对线胜率 61.02%", "对线胜率 59.79%", "对线胜率 59.77%", "对线胜率 58.46%", "对线胜率 58.44%", "对线胜率 57.14%", "对线胜率 57.04%", "对线胜率 57.02%", "对线胜率 56.92%", "对线胜率 56.67%"]
    }
  },
  {
    "heroId": "amumu",
    "heroName": "殇之木乃伊 阿木木",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=32",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taliyah', 'alistar', 'zilean', 'qiyana', 'vayne', 'vi', 'ornn', 'singed', 'illaoi', 'naafiri'],
      "reasons": ["对线胜率 37.37%", "对线胜率 38.79%", "对线胜率 38.89%", "对线胜率 39.74%", "对线胜率 42.17%", "对线胜率 42.99%", "对线胜率 43.68%", "对线胜率 43.75%", "对线胜率 43.96%", "对线胜率 44.46%"]
    },
    "counters": {
      "heroes": ['neeko', 'missfortune', 'bard', 'jhin', 'velkoz', 'reksai', 'sona', 'veigar', 'volibear', 'mel'],
      "reasons": ["对线胜率 64.29%", "对线胜率 62.26%", "对线胜率 59.15%", "对线胜率 57.79%", "对线胜率 57.45%", "对线胜率 57.35%", "对线胜率 56.84%", "对线胜率 56.36%", "对线胜率 56.29%", "对线胜率 55.60%"]
    }
  },
  {
    "heroId": "rammus",
    "heroName": "披甲龙龟 拉莫斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=33",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['jhin', 'warwick', 'shen', 'lillia', 'olaf', 'volibear', 'gangplank', 'shaco', 'kayle', 'ksante'],
      "reasons": ["对线胜率 36.97%", "对线胜率 41.26%", "对线胜率 41.72%", "对线胜率 41.73%", "对线胜率 43.09%", "对线胜率 43.82%", "对线胜率 43.95%", "对线胜率 44.01%", "对线胜率 44.17%", "对线胜率 44.24%"]
    },
    "counters": {
      "heroes": ['zed', 'yasuo', 'rengar', 'kennen', 'belveth', 'pantheon', 'heimerdinger', 'varus', 'yone', 'qiyana'],
      "reasons": ["对线胜率 58.43%", "对线胜率 58.13%", "对线胜率 57.54%", "对线胜率 56.19%", "对线胜率 55.56%", "对线胜率 55.14%", "对线胜率 55.12%", "对线胜率 54.97%", "对线胜率 54.88%", "对线胜率 54.79%"]
    }
  },
  {
    "heroId": "anivia",
    "heroName": "冰晶凤凰 艾尼维亚",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=34",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['ashe', 'shaco', 'jarvaniv', 'neeko', 'elise', 'milio', 'missfortune', 'zilean', 'braum', 'alistar'],
      "reasons": ["对线胜率 35.85%", "对线胜率 38.89%", "对线胜率 40.58%", "对线胜率 40.98%", "对线胜率 42.31%", "对线胜率 42.55%", "对线胜率 42.86%", "对线胜率 43.62%", "对线胜率 43.75%", "对线胜率 44.18%"]
    },
    "counters": {
      "heroes": ['tristana', 'nasus', 'tryndamere', 'veigar', 'irelia', 'yasuo', 'poppy', 'darius', 'zed', 'orianna'],
      "reasons": ["对线胜率 68.42%", "对线胜率 63.08%", "对线胜率 62.67%", "对线胜率 60.00%", "对线胜率 58.12%", "对线胜率 58.11%", "对线胜率 57.89%", "对线胜率 57.89%", "对线胜率 57.83%", "对线胜率 56.96%"]
    }
  },
  {
    "heroId": "shaco",
    "heroName": "恶魔小丑 萨科",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=35",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['singed', 'taliyah', 'kayle', 'maokai', 'gangplank', 'smolder', 'briar', 'sion', 'neeko', 'chogath'],
      "reasons": ["对线胜率 39.93%", "对线胜率 40.57%", "对线胜率 42.04%", "对线胜率 43.09%", "对线胜率 43.39%", "对线胜率 43.49%", "对线胜率 43.54%", "对线胜率 44.23%", "对线胜率 44.34%", "对线胜率 44.34%"]
    },
    "counters": {
      "heroes": ['anivia', 'renata', 'missfortune', 'teemo', 'amumu', 'poppy', 'rammus', 'mel', 'leblanc', 'pantheon'],
      "reasons": ["对线胜率 61.11%", "对线胜率 60.78%", "对线胜率 58.24%", "对线胜率 57.60%", "对线胜率 57.58%", "对线胜率 57.29%", "对线胜率 55.99%", "对线胜率 55.98%", "对线胜率 55.75%", "对线胜率 54.69%"]
    }
  },
  {
    "heroId": "drmundo",
    "heroName": "祖安狂人 蒙多医生",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=36",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['katarina', 'hwei', 'xerath', 'vladimir', 'viktor', 'ahri', 'vex', 'kled', 'swain', 'aurelionsol'],
      "reasons": ["对线胜率 35.05%", "对线胜率 36.07%", "对线胜率 39.68%", "对线胜率 41.11%", "对线胜率 42.20%", "对线胜率 43.26%", "对线胜率 43.42%", "对线胜率 43.53%", "对线胜率 43.66%", "对线胜率 43.75%"]
    },
    "counters": {
      "heroes": ['gangplank', 'trundle', 'akali', 'malphite', 'poppy', 'smolder', 'zed', 'jax', 'darius', 'chogath'],
      "reasons": ["对线胜率 59.34%", "对线胜率 57.41%", "对线胜率 57.03%", "对线胜率 56.95%", "对线胜率 56.92%", "对线胜率 56.62%", "对线胜率 56.40%", "对线胜率 55.91%", "对线胜率 55.62%", "对线胜率 55.60%"]
    }
  },
  {
    "heroId": "sona",
    "heroName": "琴瑟仙女 娑娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=37",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['renata', 'amumu', 'rell', 'maokai', 'blitzcrank', 'milio', 'braum', 'thresh'],
      "reasons": ["对线胜率 43.02%", "对线胜率 43.16%", "对线胜率 44.13%", "对线胜率 45.83%", "对线胜率 48.65%", "对线胜率 48.88%", "对线胜率 49.55%", "对线胜率 49.78%"]
    },
    "counters": {
      "heroes": ['leesin', 'missfortune', 'shen', 'poppy', 'teemo', 'xerath', 'mel', 'leblanc', 'malphite', 'jarvaniv'],
      "reasons": ["对线胜率 60.23%", "对线胜率 59.48%", "对线胜率 58.89%", "对线胜率 58.78%", "对线胜率 57.60%", "对线胜率 57.30%", "对线胜率 56.54%", "对线胜率 56.45%", "对线胜率 56.18%", "对线胜率 55.84%"]
    }
  },
  {
    "heroId": "kassadin",
    "heroName": "虚空行者 卡萨丁",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=38",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['sion', 'velkoz', 'akshan', 'vex', 'pantheon', 'lux', 'talon', 'anivia', 'nasus', 'ziggs'],
      "reasons": ["对线胜率 37.76%", "对线胜率 40.00%", "对线胜率 42.86%", "对线胜率 45.48%", "对线胜率 45.50%", "对线胜率 45.54%", "对线胜率 45.56%", "对线胜率 45.64%", "对线胜率 45.90%", "对线胜率 46.31%"]
    },
    "counters": {
      "heroes": ['irelia', 'azir', 'tristana', 'mel', 'ekko', 'orianna', 'taliyah', 'tryndamere', 'morgana', 'syndra'],
      "reasons": ["对线胜率 58.87%", "对线胜率 56.34%", "对线胜率 56.14%", "对线胜率 55.47%", "对线胜率 54.69%", "对线胜率 54.62%", "对线胜率 53.66%", "对线胜率 53.61%", "对线胜率 53.33%", "对线胜率 53.33%"]
    }
  },
  {
    "heroId": "irelia",
    "heroName": "刀锋舞者 艾瑞莉娅",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=39",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['shen', 'kassadin', 'zoe', 'anivia', 'swain', 'illaoi', 'azir', 'galio', 'vex', 'malzahar'],
      "reasons": ["对线胜率 39.75%", "对线胜率 41.13%", "对线胜率 41.85%", "对线胜率 41.88%", "对线胜率 43.33%", "对线胜率 43.46%", "对线胜率 43.50%", "对线胜率 43.99%", "对线胜率 44.25%", "对线胜率 44.30%"]
    },
    "counters": {
      "heroes": ['smolder', 'rengar', 'rumble', 'akali', 'darius', 'hecarim', 'ksante', 'orianna', 'tahmkench', 'olaf'],
      "reasons": ["对线胜率 69.49%", "对线胜率 60.29%", "对线胜率 58.24%", "对线胜率 56.92%", "对线胜率 56.91%", "对线胜率 56.48%", "对线胜率 56.04%", "对线胜率 55.91%", "对线胜率 55.73%", "对线胜率 54.81%"]
    }
  },
  {
    "heroId": "janna",
    "heroName": "风暴之怒 迦娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=40",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['poppy', 'leesin', 'fiddlesticks', 'taric', 'zilean', 'brand', 'sona', 'shaco', 'zyra', 'bard'],
      "reasons": ["对线胜率 43.72%", "对线胜率 43.75%", "对线胜率 45.22%", "对线胜率 46.71%", "对线胜率 47.02%", "对线胜率 47.68%", "对线胜率 48.03%", "对线胜率 48.45%", "对线胜率 48.55%", "对线胜率 48.57%"]
    },
    "counters": {
      "heroes": ['sett', 'camille', 'malphite', 'veigar', 'mel', 'missfortune', 'swain', 'leblanc', 'alistar', 'anivia'],
      "reasons": ["对线胜率 59.68%", "对线胜率 58.59%", "对线胜率 57.79%", "对线胜率 57.24%", "对线胜率 56.48%", "对线胜率 56.39%", "对线胜率 55.51%", "对线胜率 55.48%", "对线胜率 55.42%", "对线胜率 55.36%"]
    }
  },
  {
    "heroId": "gangplank",
    "heroName": "海洋之灾 普朗克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=41",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['katarina', 'lissandra', 'twistedfate', 'mel', 'vladimir', 'aurelionsol', 'malzahar', 'galio', 'kled', 'brand'],
      "reasons": ["对线胜率 30.77%", "对线胜率 31.58%", "对线胜率 35.71%", "对线胜率 38.33%", "对线胜率 39.29%", "对线胜率 40.00%", "对线胜率 40.54%", "对线胜率 43.90%", "对线胜率 44.44%", "对线胜率 45.00%"]
    },
    "counters": {
      "heroes": ['smolder', 'heimerdinger', 'zed', 'mordekaiser', 'shaco', 'zac', 'rammus', 'teemo', 'volibear', 'pantheon'],
      "reasons": ["对线胜率 60.27%", "对线胜率 58.60%", "对线胜率 58.53%", "对线胜率 57.14%", "对线胜率 56.61%", "对线胜率 56.49%", "对线胜率 56.05%", "对线胜率 56.04%", "对线胜率 55.70%", "对线胜率 55.60%"]
    }
  },
  {
    "heroId": "corki",
    "heroName": "英勇投弹手 库奇",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=42",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['sivir', 'zeri', 'ziggs', 'kogmaw', 'xayah', 'smolder', 'jinx', 'missfortune', 'jhin', 'caitlyn'],
      "reasons": ["对线胜率 43.40%", "对线胜率 43.89%", "对线胜率 44.20%", "对线胜率 44.71%", "对线胜率 46.33%", "对线胜率 46.50%", "对线胜率 46.56%", "对线胜率 47.31%", "对线胜率 48.03%", "对线胜率 48.05%"]
    },
    "counters": {
      "heroes": ['kalista', 'varus', 'tristana', 'aurelionsol', 'samira', 'yunara', 'aphelios', 'nilah', 'ezreal', 'senna'],
      "reasons": ["对线胜率 53.05%", "对线胜率 52.23%", "对线胜率 52.14%", "对线胜率 52.04%", "对线胜率 51.19%", "对线胜率 51.15%", "对线胜率 50.99%", "对线胜率 50.94%", "对线胜率 50.63%", "对线胜率 50.55%"]
    }
  },
  {
    "heroId": "karma",
    "heroName": "天启者 卡尔玛",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=43",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['renata', 'rakan', 'taric', 'amumu', 'maokai', 'sona', 'fiddlesticks', 'shen', 'milio', 'blitzcrank'],
      "reasons": ["对线胜率 44.81%", "对线胜率 45.12%", "对线胜率 45.40%", "对线胜率 45.43%", "对线胜率 46.44%", "对线胜率 46.50%", "对线胜率 47.06%", "对线胜率 47.25%", "对线胜率 47.39%", "对线胜率 47.51%"]
    },
    "counters": {
      "heroes": ['missfortune', 'sett', 'ashe', 'mel', 'leesin', 'veigar', 'malphite', 'lux', 'leblanc', 'jarvaniv'],
      "reasons": ["对线胜率 60.53%", "对线胜率 58.45%", "对线胜率 57.47%", "对线胜率 56.47%", "对线胜率 54.93%", "对线胜率 54.68%", "对线胜率 54.33%", "对线胜率 53.31%", "对线胜率 53.15%", "对线胜率 52.64%"]
    }
  },
  {
    "heroId": "taric",
    "heroName": "瓦洛兰之盾 塔里克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=44",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['milio', 'leblanc', 'rakan', 'bard', 'brand', 'swain', 'sona', 'shaco', 'morgana', 'soraka'],
      "reasons": ["对线胜率 45.25%", "对线胜率 46.55%", "对线胜率 47.06%", "对线胜率 47.54%", "对线胜率 47.72%", "对线胜率 48.06%", "对线胜率 48.11%", "对线胜率 48.21%", "对线胜率 48.83%", "对线胜率 48.94%"]
    },
    "counters": {
      "heroes": ['pantheon', 'velkoz', 'pyke', 'blitzcrank', 'mel', 'zyra', 'yuumi', 'lux', 'tahmkench', 'neeko'],
      "reasons": ["对线胜率 60.17%", "对线胜率 59.38%", "对线胜率 59.33%", "对线胜率 58.63%", "对线胜率 58.22%", "对线胜率 56.49%", "对线胜率 56.34%", "对线胜率 56.10%", "对线胜率 55.95%", "对线胜率 55.56%"]
    }
  },
  {
    "heroId": "veigar",
    "heroName": "邪恶小法师 维迦",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=45",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['teemo', 'milio', 'janna', 'blitzcrank', 'zyra', 'alistar', 'fiddlesticks', 'amumu', 'zilean', 'fiora'],
      "reasons": ["对线胜率 37.21%", "对线胜率 38.49%", "对线胜率 42.76%", "对线胜率 42.83%", "对线胜率 42.86%", "对线胜率 43.23%", "对线胜率 43.40%", "对线胜率 43.64%", "对线胜率 43.70%", "对线胜率 44.23%"]
    },
    "counters": {
      "heroes": ['yorick', 'jayce', 'sett', 'yasuo', 'rell', 'nasus', 'malphite', 'smolder', 'tristana', 'jax'],
      "reasons": ["对线胜率 61.84%", "对线胜率 60.34%", "对线胜率 59.15%", "对线胜率 57.38%", "对线胜率 57.14%", "对线胜率 56.69%", "对线胜率 56.17%", "对线胜率 56.03%", "对线胜率 55.71%", "对线胜率 55.43%"]
    }
  },
  {
    "heroId": "trundle",
    "heroName": "巨魔之王 特朗德尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=48",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['drmundo', 'nasus', 'jax'],
      "reasons": ["对线胜率 42.59%", "对线胜率 45.90%", "对线胜率 46.48%"]
    },
    "counters": {
      "heroes": ['sett', 'malphite', 'mordekaiser', 'aatrox', 'garen'],
      "reasons": ["对线胜率 60.34%", "对线胜率 57.69%", "对线胜率 57.14%", "对线胜率 53.68%", "对线胜率 50.36%"]
    }
  },
  {
    "heroId": "swain",
    "heroName": "诺克萨斯统领 斯维因",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=50",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['yorick', 'hwei', 'annie', 'syndra', 'zilean', 'elise', 'aurelionsol', 'janna', 'orianna', 'renata'],
      "reasons": ["对线胜率 39.34%", "对线胜率 41.46%", "对线胜率 41.54%", "对线胜率 43.43%", "对线胜率 43.45%", "对线胜率 43.56%", "对线胜率 43.94%", "对线胜率 44.49%", "对线胜率 44.98%", "对线胜率 45.40%"]
    },
    "counters": {
      "heroes": ['smolder', 'malphite', 'nasus', 'tryndamere', 'vex', 'sylas', 'yone', 'naafiri', 'aatrox', 'ekko'],
      "reasons": ["对线胜率 66.97%", "对线胜率 63.33%", "对线胜率 62.16%", "对线胜率 60.00%", "对线胜率 60.00%", "对线胜率 58.46%", "对线胜率 57.40%", "对线胜率 57.36%", "对线胜率 57.35%", "对线胜率 56.86%"]
    }
  },
  {
    "heroId": "caitlyn",
    "heroName": "皮城女警 凯特琳",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=51",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'ziggs', 'darius', 'nilah', 'sivir', 'jax', 'ashe', 'jinx', 'smolder', 'samira'],
      "reasons": ["对线胜率 44.19%", "对线胜率 45.19%", "对线胜率 45.45%", "对线胜率 45.90%", "对线胜率 46.23%", "对线胜率 47.17%", "对线胜率 47.49%", "对线胜率 47.66%", "对线胜率 47.72%", "对线胜率 47.78%"]
    },
    "counters": {
      "heroes": ['aatrox', 'corki', 'yunara', 'lucian', 'mordekaiser', 'varus', 'tristana', 'ezreal', 'kaisa'],
      "reasons": ["对线胜率 57.65%", "对线胜率 51.95%", "对线胜率 51.15%", "对线胜率 50.94%", "对线胜率 50.88%", "对线胜率 50.80%", "对线胜率 50.79%", "对线胜率 50.66%", "对线胜率 50.17%"]
    }
  },
  {
    "heroId": "blitzcrank",
    "heroName": "蒸汽机器人 布里茨",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=53",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'fiddlesticks', 'braum', 'amumu', 'neeko', 'rakan', 'maokai', 'brand', 'leona', 'rell'],
      "reasons": ["对线胜率 41.37%", "对线胜率 45.36%", "对线胜率 45.60%", "对线胜率 45.99%", "对线胜率 46.68%", "对线胜率 46.81%", "对线胜率 46.81%", "对线胜率 47.27%", "对线胜率 47.54%", "对线胜率 47.60%"]
    },
    "counters": {
      "heroes": ['missfortune', 'camille', 'veigar', 'malphite', 'ashe', 'mel', 'renata', 'sett', 'anivia', 'sylas'],
      "reasons": ["对线胜率 59.66%", "对线胜率 59.63%", "对线胜率 57.17%", "对线胜率 56.74%", "对线胜率 55.46%", "对线胜率 54.71%", "对线胜率 54.45%", "对线胜率 54.43%", "对线胜率 53.50%", "对线胜率 53.19%"]
    }
  },
  {
    "heroId": "malphite",
    "heroName": "熔岩巨兽 墨菲特",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=54",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['bard', 'renata', 'maokai', 'senna', 'ezreal', 'aurelionsol', 'rakan', 'ashe', 'janna', 'trundle'],
      "reasons": ["对线胜率 36.11%", "对线胜率 36.51%", "对线胜率 37.38%", "对线胜率 37.81%", "对线胜率 38.33%", "对线胜率 40.83%", "对线胜率 41.35%", "对线胜率 41.44%", "对线胜率 42.21%", "对线胜率 42.31%"]
    },
    "counters": {
      "heroes": ['irelia', 'cassiopeia', 'graves', 'camille', 'smolder', 'annie', 'kennen', 'pantheon', 'qiyana', 'vayne'],
      "reasons": ["对线胜率 62.22%", "对线胜率 60.61%", "对线胜率 58.82%", "对线胜率 57.81%", "对线胜率 57.38%", "对线胜率 57.00%", "对线胜率 56.88%", "对线胜率 56.76%", "对线胜率 56.25%", "对线胜率 55.82%"]
    }
  },
  {
    "heroId": "katarina",
    "heroName": "不祥之刃 卡特琳娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=55",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['pantheon', 'sion', 'anivia', 'galio', 'vex', 'annie', 'aurelionsol', 'malzahar', 'fizz', 'vladimir'],
      "reasons": ["对线胜率 43.10%", "对线胜率 43.81%", "对线胜率 44.40%", "对线胜率 45.08%", "对线胜率 45.71%", "对线胜率 45.98%", "对线胜率 46.83%", "对线胜率 47.01%", "对线胜率 47.39%", "对线胜率 47.43%"]
    },
    "counters": {
      "heroes": ['gangplank', 'jax', 'tryndamere', 'jayce', 'drmundo', 'garen', 'aatrox', 'mordekaiser', 'yone', 'nasus'],
      "reasons": ["对线胜率 69.23%", "对线胜率 68.09%", "对线胜率 67.31%", "对线胜率 65.22%", "对线胜率 64.95%", "对线胜率 62.50%", "对线胜率 62.50%", "对线胜率 61.45%", "对线胜率 60.81%", "对线胜率 60.42%"]
    }
  },
  {
    "heroId": "nocturne",
    "heroName": "永恒梦魇 魔腾",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=56",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kennen', 'taliyah', 'olaf', 'singed', 'evelynn', 'nunu', 'zaahen', 'lillia', 'vayne', 'sett'],
      "reasons": ["对线胜率 41.67%", "对线胜率 45.79%", "对线胜率 46.24%", "对线胜率 47.13%", "对线胜率 47.31%", "对线胜率 47.49%", "对线胜率 47.65%", "对线胜率 47.65%", "对线胜率 47.92%", "对线胜率 47.93%"]
    },
    "counters": {
      "heroes": ['zed', 'rengar', 'shaco', 'naafiri', 'heimerdinger', 'leesin', 'hecarim', 'yasuo', 'khazix', 'malphite'],
      "reasons": ["对线胜率 55.97%", "对线胜率 55.35%", "对线胜率 54.87%", "对线胜率 54.15%", "对线胜率 54.04%", "对线胜率 53.95%", "对线胜率 53.93%", "对线胜率 53.90%", "对线胜率 53.81%", "对线胜率 53.69%"]
    }
  },
  {
    "heroId": "maokai",
    "heroName": "扭曲树精 茂凯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=57",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['teemo', 'sylas', 'rell', 'alistar', 'zilean', 'senna', 'tahmkench', 'soraka', 'velkoz', 'renata'],
      "reasons": ["对线胜率 45.86%", "对线胜率 45.89%", "对线胜率 46.27%", "对线胜率 47.03%", "对线胜率 47.85%", "对线胜率 48.31%", "对线胜率 48.68%", "对线胜率 48.74%", "对线胜率 48.76%", "对线胜率 48.89%"]
    },
    "counters": {
      "heroes": ['camille', 'malphite', 'leesin', 'ashe', 'sett', 'jarvaniv', 'leblanc', 'shaco', 'mel', 'anivia'],
      "reasons": ["对线胜率 65.67%", "对线胜率 62.62%", "对线胜率 59.70%", "对线胜率 59.32%", "对线胜率 59.26%", "对线胜率 59.21%", "对线胜率 57.38%", "对线胜率 56.91%", "对线胜率 55.73%", "对线胜率 55.13%"]
    }
  },
  {
    "heroId": "renekton",
    "heroName": "荒漠屠夫 雷克顿",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=58",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurora', 'katarina', 'aurelionsol', 'kayle', 'taliyah', 'ahri', 'vladimir', 'veigar', 'lucian', 'lissandra'],
      "reasons": ["对线胜率 30.77%", "对线胜率 39.74%", "对线胜率 41.77%", "对线胜率 43.43%", "对线胜率 43.69%", "对线胜率 44.23%", "对线胜率 44.53%", "对线胜率 44.83%", "对线胜率 45.21%", "对线胜率 45.31%"]
    },
    "counters": {
      "heroes": ['kennen', 'leblanc', 'zed', 'olaf', 'kaisa', 'sejuani', 'volibear', 'sion', 'singed', 'drmundo'],
      "reasons": ["对线胜率 67.80%", "对线胜率 57.33%", "对线胜率 57.28%", "对线胜率 56.44%", "对线胜率 55.63%", "对线胜率 55.61%", "对线胜率 54.86%", "对线胜率 54.39%", "对线胜率 54.35%", "对线胜率 54.25%"]
    }
  },
  {
    "heroId": "jarvaniv",
    "heroName": "德玛西亚皇子 嘉文四世",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=59",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['maokai', 'rakan', 'leblanc', 'renata', 'taliyah', 'zaahen', 'sona', 'leona', 'varus', 'ornn'],
      "reasons": ["对线胜率 40.79%", "对线胜率 40.93%", "对线胜率 41.41%", "对线胜率 43.14%", "对线胜率 44.09%", "对线胜率 44.14%", "对线胜率 44.16%", "对线胜率 44.81%", "对线胜率 45.10%", "对线胜率 45.24%"]
    },
    "counters": {
      "heroes": ['elise', 'anivia', 'malphite', 'teemo', 'mel', 'missfortune', 'sylas', 'veigar', 'senna', 'camille'],
      "reasons": ["对线胜率 60.27%", "对线胜率 59.42%", "对线胜率 59.04%", "对线胜率 58.16%", "对线胜率 56.73%", "对线胜率 56.60%", "对线胜率 55.75%", "对线胜率 54.46%", "对线胜率 54.36%", "对线胜率 54.24%"]
    }
  },
  {
    "heroId": "elise",
    "heroName": "蜘蛛女皇 伊莉丝",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=60",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['rell', 'kayle', 'gangplank', 'qiyana', 'ornn', 'sona', 'amumu', 'fiddlesticks', 'leona', 'taliyah'],
      "reasons": ["对线胜率 42.34%", "对线胜率 42.51%", "对线胜率 45.29%", "对线胜率 45.93%", "对线胜率 46.04%", "对线胜率 46.15%", "对线胜率 46.38%", "对线胜率 47.06%", "对线胜率 47.18%", "对线胜率 47.66%"]
    },
    "counters": {
      "heroes": ['leblanc', 'pyke', 'bard', 'poppy', 'camille', 'malphite', 'anivia', 'illaoi', 'brand', 'ksante'],
      "reasons": ["对线胜率 60.61%", "对线胜率 60.27%", "对线胜率 59.86%", "对线胜率 59.55%", "对线胜率 59.32%", "对线胜率 59.15%", "对线胜率 57.69%", "对线胜率 57.07%", "对线胜率 56.90%", "对线胜率 56.70%"]
    }
  },
  {
    "heroId": "orianna",
    "heroName": "发条魔灵 奥莉安娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=61",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'velkoz', 'anivia', 'xerath', 'annie', 'irelia', 'nasus', 'hwei', 'sion', 'brand'],
      "reasons": ["对线胜率 41.78%", "对线胜率 42.71%", "对线胜率 43.04%", "对线胜率 43.42%", "对线胜率 44.06%", "对线胜率 44.09%", "对线胜率 44.29%", "对线胜率 44.73%", "对线胜率 44.81%", "对线胜率 45.26%"]
    },
    "counters": {
      "heroes": ['darius', 'jax', 'garen', 'swain', 'smolder', 'graves', 'mel', 'zed', 'ryze', 'tryndamere'],
      "reasons": ["对线胜率 62.75%", "对线胜率 61.67%", "对线胜率 55.68%", "对线胜率 55.02%", "对线胜率 54.78%", "对线胜率 54.17%", "对线胜率 53.83%", "对线胜率 52.79%", "对线胜率 52.25%", "对线胜率 52.00%"]
    }
  },
  {
    "heroId": "monkeyking",
    "heroName": "齐天大圣 孙悟空",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=62",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taliyah', 'singed', 'zac', 'amumu', 'fiddlesticks', 'evelynn', 'ornn', 'kayle', 'shen', 'lillia'],
      "reasons": ["对线胜率 39.84%", "对线胜率 41.63%", "对线胜率 44.09%", "对线胜率 44.58%", "对线胜率 44.62%", "对线胜率 44.82%", "对线胜率 45.13%", "对线胜率 45.35%", "对线胜率 45.52%", "对线胜率 46.12%"]
    },
    "counters": {
      "heroes": ['yasuo', 'fiora', 'tryndamere', 'zed', 'sylas', 'jayce', 'darius', 'pantheon', 'renekton', 'qiyana'],
      "reasons": ["对线胜率 63.64%", "对线胜率 62.50%", "对线胜率 58.82%", "对线胜率 57.47%", "对线胜率 56.45%", "对线胜率 55.56%", "对线胜率 55.00%", "对线胜率 54.71%", "对线胜率 54.65%", "对线胜率 54.08%"]
    }
  },
  {
    "heroId": "brand",
    "heroName": "复仇焰魂 布兰德",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=63",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kayle', 'evelynn', 'heimerdinger', 'gwen', 'ornn', 'fiora', 'belveth', 'ambessa', 'aurelionsol', 'singed'],
      "reasons": ["对线胜率 44.88%", "对线胜率 44.92%", "对线胜率 45.39%", "对线胜率 45.43%", "对线胜率 46.13%", "对线胜率 46.15%", "对线胜率 46.34%", "对线胜率 47.21%", "对线胜率 47.29%", "对线胜率 47.69%"]
    },
    "counters": {
      "heroes": ['chogath', 'tristana', 'darius', 'cassiopeia', 'missfortune', 'jayce', 'graves', 'smolder', 'tryndamere', 'qiyana'],
      "reasons": ["对线胜率 66.67%", "对线胜率 65.71%", "对线胜率 63.13%", "对线胜率 60.80%", "对线胜率 60.77%", "对线胜率 60.68%", "对线胜率 60.17%", "对线胜率 59.85%", "对线胜率 59.48%", "对线胜率 59.15%"]
    }
  },
  {
    "heroId": "leesin",
    "heroName": "盲僧 李青",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=64",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['sona', 'maokai', 'rell', 'rakan', 'taliyah', 'ornn', 'naafiri', 'kayle', 'velkoz', 'nami'],
      "reasons": ["对线胜率 39.77%", "对线胜率 40.30%", "对线胜率 40.50%", "对线胜率 41.30%", "对线胜率 42.36%", "对线胜率 43.50%", "对线胜率 43.87%", "对线胜率 44.04%", "对线胜率 44.14%", "对线胜率 44.24%"]
    },
    "counters": {
      "heroes": ['missfortune', 'jarvaniv', 'janna', 'bard', 'senna', 'lulu', 'zed', 'rengar', 'malphite', 'neeko'],
      "reasons": ["对线胜率 57.41%", "对线胜率 56.90%", "对线胜率 56.25%", "对线胜率 54.90%", "对线胜率 51.82%", "对线胜率 51.72%", "对线胜率 51.64%", "对线胜率 51.24%", "对线胜率 50.70%", "对线胜率 50.51%"]
    }
  },
  {
    "heroId": "vayne",
    "heroName": "暗夜猎手 薇恩",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=67",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['viktor', 'twistedfate', 'ryze', 'aurelionsol', 'poppy', 'malphite', 'zyra', 'kennen', 'nilah', 'fiddlesticks'],
      "reasons": ["对线胜率 37.93%", "对线胜率 41.51%", "对线胜率 42.03%", "对线胜率 44.48%", "对线胜率 45.81%", "对线胜率 46.15%", "对线胜率 46.33%", "对线胜率 46.72%", "对线胜率 47.09%", "对线胜率 47.20%"]
    },
    "counters": {
      "heroes": ['volibear', 'camille', 'aatrox', 'gwen', 'chogath', 'olaf', 'smolder', 'tryndamere', 'amumu', 'mordekaiser'],
      "reasons": ["对线胜率 60.63%", "对线胜率 60.33%", "对线胜率 59.70%", "对线胜率 58.84%", "对线胜率 58.65%", "对线胜率 58.62%", "对线胜率 58.59%", "对线胜率 58.20%", "对线胜率 57.83%", "对线胜率 57.53%"]
    }
  },
  {
    "heroId": "rumble",
    "heroName": "机械公敌 兰博",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=68",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['malzahar', 'ahri', 'fiddlesticks', 'taliyah', 'zaahen', 'brand', 'urgot', 'nidalee', 'evelynn', 'kaisa'],
      "reasons": ["对线胜率 28.13%", "对线胜率 38.46%", "对线胜率 44.07%", "对线胜率 45.21%", "对线胜率 46.27%", "对线胜率 46.56%", "对线胜率 46.78%", "对线胜率 47.20%", "对线胜率 47.33%", "对线胜率 47.35%"]
    },
    "counters": {
      "heroes": ['twistedfate', 'vayne', 'zed', 'yasuo', 'hecarim', 'yorick', 'malphite', 'talon', 'fiora', 'akali'],
      "reasons": ["对线胜率 66.67%", "对线胜率 57.83%", "对线胜率 57.01%", "对线胜率 56.56%", "对线胜率 54.46%", "对线胜率 54.43%", "对线胜率 54.39%", "对线胜率 53.94%", "对线胜率 53.85%", "对线胜率 53.78%"]
    }
  },
  {
    "heroId": "cassiopeia",
    "heroName": "魔蛇之拥 卡西奥佩娅",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=69",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['annie', 'velkoz', 'brand', 'malphite', 'aurelionsol', 'morgana', 'ziggs', 'lux', 'malzahar', 'zoe'],
      "reasons": ["对线胜率 38.82%", "对线胜率 39.06%", "对线胜率 39.20%", "对线胜率 39.39%", "对线胜率 41.83%", "对线胜率 43.14%", "对线胜率 44.57%", "对线胜率 44.84%", "对线胜率 45.32%", "对线胜率 45.58%"]
    },
    "counters": {
      "heroes": ['akshan', 'smolder', 'yasuo', 'mel', 'azir', 'pantheon', 'qiyana', 'jayce', 'irelia', 'sion'],
      "reasons": ["对线胜率 63.64%", "对线胜率 57.48%", "对线胜率 57.14%", "对线胜率 56.67%", "对线胜率 56.49%", "对线胜率 55.56%", "对线胜率 55.56%", "对线胜率 55.21%", "对线胜率 55.10%", "对线胜率 52.38%"]
    }
  },
  {
    "heroId": "heimerdinger",
    "heroName": "大发明家 黑默丁格",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=74",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['gangplank', 'kayle', 'sion', 'nunu', 'riven', 'briar', 'olaf', 'yasuo', 'singed', 'rammus'],
      "reasons": ["对线胜率 41.40%", "对线胜率 42.14%", "对线胜率 42.38%", "对线胜率 43.57%", "对线胜率 43.93%", "对线胜率 44.34%", "对线胜率 44.53%", "对线胜率 44.68%", "对线胜率 44.86%", "对线胜率 44.88%"]
    },
    "counters": {
      "heroes": ['gragas', 'kaisa', 'warwick', 'pantheon', 'karthus', 'brand', 'qiyana', 'rengar', 'poppy', 'jarvaniv'],
      "reasons": ["对线胜率 58.56%", "对线胜率 57.66%", "对线胜率 56.99%", "对线胜率 55.42%", "对线胜率 54.91%", "对线胜率 54.61%", "对线胜率 54.26%", "对线胜率 54.22%", "对线胜率 54.02%", "对线胜率 53.72%"]
    }
  },
  {
    "heroId": "nasus",
    "heroName": "沙漠死神 内瑟斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=75",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['morgana', 'zyra', 'annie', 'anivia', 'reksai', 'aurelionsol', 'jhin', 'lissandra', 'malzahar', 'viktor'],
      "reasons": ["对线胜率 43.59%", "对线胜率 44.81%", "对线胜率 45.71%", "对线胜率 45.81%", "对线胜率 45.83%", "对线胜率 45.86%", "对线胜率 46.09%", "对线胜率 46.09%", "对线胜率 46.45%", "对线胜率 46.70%"]
    },
    "counters": {
      "heroes": ['monkeyking', 'qiyana', 'akshan', 'swain', 'irelia', 'smolder', 'zed', 'varus', 'orianna', 'poppy'],
      "reasons": ["对线胜率 62.50%", "对线胜率 62.50%", "对线胜率 61.67%", "对线胜率 60.38%", "对线胜率 59.09%", "对线胜率 57.23%", "对线胜率 57.07%", "对线胜率 56.96%", "对线胜率 56.86%", "对线胜率 56.86%"]
    }
  },
  {
    "heroId": "nidalee",
    "heroName": "狂野女猎手 奈德丽",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=76",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'rammus', 'shen', 'gragas', 'fiddlesticks', 'elise', 'taliyah', 'naafiri', 'ornn', 'nunu'],
      "reasons": ["对线胜率 44.12%", "对线胜率 46.58%", "对线胜率 46.65%", "对线胜率 46.70%", "对线胜率 47.39%", "对线胜率 47.52%", "对线胜率 47.73%", "对线胜率 47.76%", "对线胜率 47.90%", "对线胜率 48.04%"]
    },
    "counters": {
      "heroes": ['qiyana', 'khazix', 'vi', 'darius', 'tryndamere', 'sejuani', 'graves', 'irelia', 'viego', 'ksante'],
      "reasons": ["对线胜率 54.97%", "对线胜率 54.67%", "对线胜率 54.55%", "对线胜率 54.26%", "对线胜率 54.25%", "对线胜率 54.14%", "对线胜率 53.92%", "对线胜率 53.88%", "对线胜率 53.81%", "对线胜率 53.71%"]
    }
  },
  {
    "heroId": "poppy",
    "heroName": "圣锤之毅 波比",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=78",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zilean', 'sona', 'reksai', 'anivia', 'milio', 'gwen', 'garen', 'velkoz', 'swain', 'taliyah'],
      "reasons": ["对线胜率 40.45%", "对线胜率 41.22%", "对线胜率 42.07%", "对线胜率 42.11%", "对线胜率 42.92%", "对线胜率 43.50%", "对线胜率 43.53%", "对线胜率 43.56%", "对线胜率 43.56%", "对线胜率 43.61%"]
    },
    "counters": {
      "heroes": ['jarvaniv', 'darius', 'ashe', 'urgot', 'leesin', 'singed', 'leblanc', 'camille', 'gragas', 'pyke'],
      "reasons": ["对线胜率 59.57%", "对线胜率 59.42%", "对线胜率 59.09%", "对线胜率 58.82%", "对线胜率 58.82%", "对线胜率 58.76%", "对线胜率 58.27%", "对线胜率 57.41%", "对线胜率 57.14%", "对线胜率 57.14%"]
    }
  },
  {
    "heroId": "gragas",
    "heroName": "酒桶 古拉加斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=79",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akali', 'zyra', 'ornn', 'heimerdinger', 'evelynn', 'poppy', 'naafiri', 'varus', 'nasus', 'yorick'],
      "reasons": ["对线胜率 37.04%", "对线胜率 41.09%", "对线胜率 41.18%", "对线胜率 41.44%", "对线胜率 41.75%", "对线胜率 42.86%", "对线胜率 42.97%", "对线胜率 43.18%", "对线胜率 43.46%", "对线胜率 44.00%"]
    },
    "counters": {
      "heroes": ['aatrox', 'volibear', 'riven', 'sejuani', 'nidalee', 'olaf', 'gwen', 'rengar', 'zed', 'shaco'],
      "reasons": ["对线胜率 60.27%", "对线胜率 55.49%", "对线胜率 55.28%", "对线胜率 55.20%", "对线胜率 53.30%", "对线胜率 53.17%", "对线胜率 52.89%", "对线胜率 52.87%", "对线胜率 52.63%", "对线胜率 52.36%"]
    }
  },
  {
    "heroId": "pantheon",
    "heroName": "不屈之枪 潘森",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=80",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'warwick', 'evelynn', 'zilean', 'chogath', 'rakan', 'fiddlesticks', 'cassiopeia', 'heimerdinger', 'ornn'],
      "reasons": ["对线胜率 39.83%", "对线胜率 42.96%", "对线胜率 43.09%", "对线胜率 43.18%", "对线胜率 43.64%", "对线胜率 44.05%", "对线胜率 44.24%", "对线胜率 44.44%", "对线胜率 44.58%", "对线胜率 44.60%"]
    },
    "counters": {
      "heroes": ['malphite', 'tryndamere', 'jayce', 'morgana', 'nasus', 'tristana', 'yone', 'azir', 'annie', 'brand'],
      "reasons": ["对线胜率 63.64%", "对线胜率 62.50%", "对线胜率 61.29%", "对线胜率 60.98%", "对线胜率 60.76%", "对线胜率 60.34%", "对线胜率 59.74%", "对线胜率 58.44%", "对线胜率 58.04%", "对线胜率 57.78%"]
    }
  },
  {
    "heroId": "ezreal",
    "heroName": "探险家 伊泽瑞尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=81",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['jax', 'aurelionsol', 'darius', 'mordekaiser', 'zeri', 'nilah', 'senna', 'kogmaw', 'sivir', 'kalista'],
      "reasons": ["对线胜率 40.30%", "对线胜率 40.83%", "对线胜率 41.82%", "对线胜率 43.14%", "对线胜率 43.38%", "对线胜率 44.60%", "对线胜率 44.65%", "对线胜率 45.14%", "对线胜率 45.17%", "对线胜率 45.72%"]
    },
    "counters": {
      "heroes": ['malphite', 'garen', 'varus'],
      "reasons": ["对线胜率 61.67%", "对线胜率 52.38%", "对线胜率 51.90%"]
    }
  },
  {
    "heroId": "mordekaiser",
    "heroName": "铁铠冥魂 莫德凯撒",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=82",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'xerath', 'draven', 'katarina', 'malzahar', 'twistedfate', 'leblanc', 'trundle', 'anivia', 'taliyah'],
      "reasons": ["对线胜率 30.91%", "对线胜率 31.67%", "对线胜率 36.54%", "对线胜率 38.55%", "对线胜率 39.18%", "对线胜率 39.56%", "对线胜率 40.00%", "对线胜率 42.86%", "对线胜率 44.07%", "对线胜率 44.21%"]
    },
    "counters": {
      "heroes": ['ekko', 'ezreal', 'chogath', 'hecarim', 'jhin', 'smolder', 'zed', 'poppy', 'ksante', 'varus'],
      "reasons": ["对线胜率 58.06%", "对线胜率 56.86%", "对线胜率 55.48%", "对线胜率 54.96%", "对线胜率 54.95%", "对线胜率 54.80%", "对线胜率 54.48%", "对线胜率 54.46%", "对线胜率 54.25%", "对线胜率 54.11%"]
    }
  },
  {
    "heroId": "yorick",
    "heroName": "牧魂人 约里克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=83",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['veigar', 'lissandra', 'aurora', 'lucian', 'ahri', 'viktor', 'malzahar', 'katarina', 'zyra', 'fiddlesticks'],
      "reasons": ["对线胜率 38.16%", "对线胜率 38.60%", "对线胜率 40.38%", "对线胜率 41.82%", "对线胜率 42.42%", "对线胜率 42.86%", "对线胜率 42.98%", "对线胜率 43.33%", "对线胜率 44.94%", "对线胜率 44.99%"]
    },
    "counters": {
      "heroes": ['urgot', 'swain', 'ksante', 'zed', 'drmundo', 'smolder', 'mel', 'ambessa', 'gragas', 'jayce'],
      "reasons": ["对线胜率 63.24%", "对线胜率 60.66%", "对线胜率 60.66%", "对线胜率 59.39%", "对线胜率 56.69%", "对线胜率 56.69%", "对线胜率 56.58%", "对线胜率 56.32%", "对线胜率 56.00%", "对线胜率 55.47%"]
    }
  },
  {
    "heroId": "akali",
    "heroName": "离群之刺 阿卡丽",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=84",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['urgot', 'akshan', 'belveth', 'vex', 'anivia', 'karthus', 'kennen', 'evelynn', 'warwick', 'twistedfate'],
      "reasons": ["对线胜率 35.87%", "对线胜率 43.01%", "对线胜率 43.96%", "对线胜率 43.98%", "对线胜率 44.12%", "对线胜率 44.22%", "对线胜率 44.32%", "对线胜率 44.40%", "对线胜率 44.71%", "对线胜率 45.36%"]
    },
    "counters": {
      "heroes": ['jhin', 'gragas', 'zaahen', 'rumble', 'pantheon', 'zed', 'tristana', 'vayne', 'sion', 'ambessa'],
      "reasons": ["对线胜率 63.33%", "对线胜率 62.96%", "对线胜率 62.75%", "对线胜率 62.07%", "对线胜率 60.49%", "对线胜率 60.23%", "对线胜率 59.09%", "对线胜率 59.04%", "对线胜率 58.33%", "对线胜率 57.53%"]
    }
  },
  {
    "heroId": "kennen",
    "heroName": "狂暴之心 凯南",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=85",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['urgot', 'shen', 'rammus', 'briar', 'evelynn', 'singed', 'monkeyking', 'reksai', 'zac', 'fiddlesticks'],
      "reasons": ["对线胜率 42.86%", "对线胜率 43.28%", "对线胜率 43.81%", "对线胜率 44.10%", "对线胜率 45.00%", "对线胜率 45.65%", "对线胜率 46.62%", "对线胜率 46.78%", "对线胜率 47.71%", "对线胜率 48.01%"]
    },
    "counters": {
      "heroes": ['yasuo', 'kindred', 'shyvana', 'yone', 'kayle', 'zaahen', 'nocturne', 'sejuani', 'vi', 'talon'],
      "reasons": ["对线胜率 64.65%", "对线胜率 60.34%", "对线胜率 59.06%", "对线胜率 58.50%", "对线胜率 58.42%", "对线胜率 58.40%", "对线胜率 58.33%", "对线胜率 56.18%", "对线胜率 56.09%", "对线胜率 55.81%"]
    }
  },
  {
    "heroId": "garen",
    "heroName": "德玛西亚之力 盖伦",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=86",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['annie', 'zoe', 'hwei', 'kled', 'viktor', 'reksai', 'kayle', 'draven', 'vayne', 'lissandra'],
      "reasons": ["对线胜率 34.91%", "对线胜率 37.84%", "对线胜率 40.91%", "对线胜率 42.02%", "对线胜率 43.45%", "对线胜率 44.36%", "对线胜率 44.37%", "对线胜率 45.33%", "对线胜率 45.74%", "对线胜率 45.79%"]
    },
    "counters": {
      "heroes": ['ksante', 'poppy', 'zed', 'qiyana', 'shen', 'vladimir', 'gragas', 'lucian', 'jax', 'sylas'],
      "reasons": ["对线胜率 60.98%", "对线胜率 60.00%", "对线胜率 58.81%", "对线胜率 57.93%", "对线胜率 56.32%", "对线胜率 55.79%", "对线胜率 55.59%", "对线胜率 55.00%", "对线胜率 54.83%", "对线胜率 54.78%"]
    }
  },
  {
    "heroId": "leona",
    "heroName": "曙光女神 蕾欧娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=89",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zilean', 'renata', 'swain', 'brand', 'shen', 'janna', 'teemo', 'anivia', 'morgana', 'rakan'],
      "reasons": ["对线胜率 45.19%", "对线胜率 45.72%", "对线胜率 46.55%", "对线胜率 47.01%", "对线胜率 47.59%", "对线胜率 47.62%", "对线胜率 47.67%", "对线胜率 47.75%", "对线胜率 47.88%", "对线胜率 48.09%"]
    },
    "counters": {
      "heroes": ['malphite', 'missfortune', 'mel', 'jarvaniv', 'camille', 'sett', 'leesin', 'pyke', 'pantheon', 'senna'],
      "reasons": ["对线胜率 57.40%", "对线胜率 55.92%", "对线胜率 55.92%", "对线胜率 55.19%", "对线胜率 54.81%", "对线胜率 54.58%", "对线胜率 54.03%", "对线胜率 53.84%", "对线胜率 53.76%", "对线胜率 52.95%"]
    }
  },
  {
    "heroId": "malzahar",
    "heroName": "虚空先知 玛尔扎哈",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=90",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['ornn', 'hwei', 'aurelionsol', 'talon', 'viktor', 'vayne', 'velkoz', 'vex', 'jax', 'tryndamere'],
      "reasons": ["对线胜率 43.28%", "对线胜率 46.69%", "对线胜率 47.10%", "对线胜率 47.75%", "对线胜率 48.20%", "对线胜率 48.78%", "对线胜率 48.95%", "对线胜率 49.07%", "对线胜率 49.21%", "对线胜率 49.22%"]
    },
    "counters": {
      "heroes": ['rumble', 'tahmkench', 'mordekaiser', 'chogath', 'aatrox', 'gangplank', 'vladimir', 'yasuo', 'kayle', 'fiora'],
      "reasons": ["对线胜率 71.88%", "对线胜率 60.94%", "对线胜率 60.82%", "对线胜率 60.71%", "对线胜率 60.00%", "对线胜率 59.46%", "对线胜率 58.54%", "对线胜率 58.33%", "对线胜率 58.06%", "对线胜率 57.95%"]
    }
  },
  {
    "heroId": "talon",
    "heroName": "刀锋之影 泰隆",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=91",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zoe', 'teemo', 'kennen', 'vayne', 'ornn', 'annie', 'poppy', 'rammus', 'reksai', 'warwick'],
      "reasons": ["对线胜率 43.96%", "对线胜率 43.99%", "对线胜率 44.19%", "对线胜率 44.58%", "对线胜率 44.68%", "对线胜率 44.71%", "对线胜率 44.88%", "对线胜率 45.24%", "对线胜率 45.31%", "对线胜率 45.34%"]
    },
    "counters": {
      "heroes": ['sylas', 'garen', 'kassadin', 'tristana', 'smolder', 'tahmkench', 'zed', 'drmundo', 'velkoz', 'darius'],
      "reasons": ["对线胜率 57.69%", "对线胜率 54.46%", "对线胜率 54.44%", "对线胜率 54.24%", "对线胜率 54.19%", "对线胜率 54.17%", "对线胜率 53.88%", "对线胜率 53.85%", "对线胜率 53.80%", "对线胜率 53.66%"]
    }
  },
  {
    "heroId": "riven",
    "heroName": "放逐之刃 锐雯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=92",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['galio', 'ryze', 'reksai', 'lissandra', 'zaahen', 'kennen', 'gragas', 'taliyah', 'zyra', 'ahri'],
      "reasons": ["对线胜率 42.19%", "对线胜率 43.10%", "对线胜率 43.53%", "对线胜率 43.86%", "对线胜率 44.55%", "对线胜率 44.69%", "对线胜率 44.72%", "对线胜率 44.82%", "对线胜率 45.76%", "对线胜率 46.55%"]
    },
    "counters": {
      "heroes": ['teemo', 'smolder', 'varus', 'illaoi', 'yasuo', 'ksante', 'akali', 'heimerdinger', 'sion', 'evelynn'],
      "reasons": ["对线胜率 60.66%", "对线胜率 58.95%", "对线胜率 57.49%", "对线胜率 56.72%", "对线胜率 56.46%", "对线胜率 56.40%", "对线胜率 56.16%", "对线胜率 56.07%", "对线胜率 55.56%", "对线胜率 55.56%"]
    }
  },
  {
    "heroId": "kogmaw",
    "heroName": "深渊巨口 克格莫",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=96",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['ziggs', 'missfortune', 'samira', 'jhin', 'jinx', 'yunara'],
      "reasons": ["对线胜率 47.54%", "对线胜率 48.09%", "对线胜率 49.03%", "对线胜率 49.72%", "对线胜率 49.88%", "对线胜率 49.93%"]
    },
    "counters": {
      "heroes": ['xayah', 'draven', 'corki', 'aphelios', 'tristana', 'ezreal', 'ashe', 'kaisa', 'nilah', 'lucian'],
      "reasons": ["对线胜率 56.98%", "对线胜率 55.85%", "对线胜率 55.29%", "对线胜率 54.96%", "对线胜率 54.88%", "对线胜率 54.86%", "对线胜率 54.02%", "对线胜率 53.66%", "对线胜率 52.87%", "对线胜率 52.83%"]
    }
  },
  {
    "heroId": "shen",
    "heroName": "暮光之眼 慎",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=98",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['nunu', 'bard', 'sona', 'velkoz', 'milio', 'taliyah', 'senna', 'reksai', 'varus', 'xerath'],
      "reasons": ["对线胜率 37.91%", "对线胜率 39.78%", "对线胜率 41.11%", "对线胜率 42.75%", "对线胜率 42.86%", "对线胜率 43.85%", "对线胜率 44.54%", "对线胜率 44.96%", "对线胜率 45.22%", "对线胜率 45.24%"]
    },
    "counters": {
      "heroes": ['malphite', 'mordekaiser', 'irelia', 'rammus', 'kayle', 'zac', 'renekton', 'gangplank', 'kennen', 'fizz'],
      "reasons": ["对线胜率 62.35%", "对线胜率 60.29%", "对线胜率 60.25%", "对线胜率 58.28%", "对线胜率 58.08%", "对线胜率 57.32%", "对线胜率 56.92%", "对线胜率 56.86%", "对线胜率 56.72%", "对线胜率 56.36%"]
    }
  },
  {
    "heroId": "lux",
    "heroName": "光辉女郎 拉克丝",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=99",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zoe', 'taric', 'naafiri', 'jax', 'milio', 'fiddlesticks', 'poppy', 'elise', 'karma', 'zilean'],
      "reasons": ["对线胜率 43.11%", "对线胜率 43.90%", "对线胜率 44.97%", "对线胜率 45.76%", "对线胜率 45.80%", "对线胜率 45.85%", "对线胜率 46.15%", "对线胜率 46.28%", "对线胜率 46.69%", "对线胜率 46.98%"]
    },
    "counters": {
      "heroes": ['garen', 'nasus', 'darius', 'tristana', 'velkoz', 'malphite', 'veigar', 'missfortune', 'cassiopeia', 'mordekaiser'],
      "reasons": ["对线胜率 61.29%", "对线胜率 59.77%", "对线胜率 59.26%", "对线胜率 58.43%", "对线胜率 57.10%", "对线胜率 56.07%", "对线胜率 55.64%", "对线胜率 55.36%", "对线胜率 55.16%", "对线胜率 55.07%"]
    }
  },
  {
    "heroId": "xerath",
    "heroName": "远古巫灵 泽拉斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=101",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['sona', 'elise', 'teemo', 'nami', 'yuumi', 'bard', 'milio', 'taric', 'maokai', 'poppy'],
      "reasons": ["对线胜率 42.70%", "对线胜率 43.81%", "对线胜率 43.98%", "对线胜率 45.60%", "对线胜率 45.94%", "对线胜率 45.95%", "对线胜率 46.03%", "对线胜率 46.07%", "对线胜率 46.29%", "对线胜率 46.50%"]
    },
    "counters": {
      "heroes": ['nasus', 'mordekaiser', 'jax', 'drmundo', 'azir', 'tristana', 'mel', 'missfortune', 'malphite', 'camille'],
      "reasons": ["对线胜率 70.15%", "对线胜率 68.33%", "对线胜率 64.56%", "对线胜率 60.32%", "对线胜率 59.86%", "对线胜率 59.11%", "对线胜率 58.46%", "对线胜率 58.05%", "对线胜率 57.94%", "对线胜率 57.54%"]
    }
  },
  {
    "heroId": "shyvana",
    "heroName": "龙血武姬 希瓦娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=102",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kennen', 'singed', 'sylas', 'ornn', 'belveth', 'lillia', 'brand', 'olaf', 'vayne', 'zyra'],
      "reasons": ["对线胜率 40.94%", "对线胜率 42.15%", "对线胜率 42.95%", "对线胜率 43.10%", "对线胜率 43.52%", "对线胜率 43.69%", "对线胜率 43.95%", "对线胜率 44.18%", "对线胜率 44.52%", "对线胜率 44.57%"]
    },
    "counters": {
      "heroes": ['zed', 'malphite', 'rengar', 'yasuo', 'hecarim', 'amumu', 'kindred', 'poppy', 'monkeyking', 'ksante'],
      "reasons": ["对线胜率 52.65%", "对线胜率 51.47%", "对线胜率 51.39%", "对线胜率 51.35%", "对线胜率 51.34%", "对线胜率 50.90%", "对线胜率 50.65%", "对线胜率 50.48%", "对线胜率 50.47%", "对线胜率 50.45%"]
    }
  },
  {
    "heroId": "ahri",
    "heroName": "九尾妖狐 阿狸",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=103",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['annie', 'zoe', 'brand', 'tristana', 'naafiri', 'vex', 'taliyah', 'kassadin', 'malzahar'],
      "reasons": ["对线胜率 46.20%", "对线胜率 47.77%", "对线胜率 48.04%", "对线胜率 48.82%", "对线胜率 49.59%", "对线胜率 49.62%", "对线胜率 49.92%", "对线胜率 49.95%", "对线胜率 49.96%"]
    },
    "counters": {
      "heroes": ['nasus', 'garen', 'jayce', 'sett', 'ksante', 'aatrox', 'rumble', 'yone', 'sion', 'darius'],
      "reasons": ["对线胜率 66.67%", "对线胜率 66.27%", "对线胜率 62.50%", "对线胜率 62.38%", "对线胜率 62.34%", "对线胜率 61.92%", "对线胜率 61.54%", "对线胜率 61.39%", "对线胜率 60.00%", "对线胜率 59.48%"]
    }
  },
  {
    "heroId": "graves",
    "heroName": "法外狂徒 格雷福斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=104",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['vex', 'annie', 'xerath', 'morgana', 'hwei', 'aurelionsol', 'aurora', 'viktor', 'zyra', 'malzahar'],
      "reasons": ["对线胜率 37.68%", "对线胜率 42.62%", "对线胜率 42.67%", "对线胜率 43.14%", "对线胜率 43.46%", "对线胜率 43.65%", "对线胜率 43.79%", "对线胜率 44.48%", "对线胜率 44.60%", "对线胜率 44.76%"]
    },
    "counters": {
      "heroes": ['qiyana', 'garen', 'tryndamere', 'pantheon', 'zed', 'jayce', 'ryze', 'sett', 'nasus', 'shaco'],
      "reasons": ["对线胜率 61.29%", "对线胜率 60.00%", "对线胜率 57.69%", "对线胜率 57.38%", "对线胜率 56.05%", "对线胜率 55.93%", "对线胜率 55.56%", "对线胜率 54.72%", "对线胜率 54.67%", "对线胜率 54.45%"]
    }
  },
  {
    "heroId": "fizz",
    "heroName": "潮汐海灵 菲兹",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=105",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'shen', 'poppy', 'ornn', 'fiddlesticks', 'singed', 'lissandra', 'kindred', 'zyra', 'taliyah'],
      "reasons": ["对线胜率 42.88%", "对线胜率 43.64%", "对线胜率 44.34%", "对线胜率 44.58%", "对线胜率 45.33%", "对线胜率 45.50%", "对线胜率 45.53%", "对线胜率 45.80%", "对线胜率 45.98%", "对线胜率 46.00%"]
    },
    "counters": {
      "heroes": ['renekton', 'gangplank', 'jayce', 'ksante', 'sion', 'tryndamere', 'malphite', 'ambessa', 'zed', 'garen'],
      "reasons": ["对线胜率 65.43%", "对线胜率 65.08%", "对线胜率 64.37%", "对线胜率 63.33%", "对线胜率 60.94%", "对线胜率 60.87%", "对线胜率 60.67%", "对线胜率 58.62%", "对线胜率 58.49%", "对线胜率 57.98%"]
    }
  },
  {
    "heroId": "volibear",
    "heroName": "不灭狂雷 沃利贝尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=106",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kayle', 'teemo', 'vayne', 'illaoi', 'amumu', 'urgot', 'gragas', 'taliyah', 'elise', 'belveth'],
      "reasons": ["对线胜率 41.11%", "对线胜率 42.32%", "对线胜率 42.86%", "对线胜率 43.50%", "对线胜率 43.71%", "对线胜率 44.27%", "对线胜率 44.51%", "对线胜率 44.87%", "对线胜率 45.08%", "对线胜率 45.21%"]
    },
    "counters": {
      "heroes": ['ambessa', 'yorick', 'riven', 'nunu', 'rammus', 'irelia', 'tryndamere', 'shaco', 'yasuo', 'vi'],
      "reasons": ["对线胜率 63.08%", "对线胜率 58.42%", "对线胜率 56.34%", "对线胜率 56.22%", "对线胜率 56.18%", "对线胜率 55.91%", "对线胜率 55.11%", "对线胜率 55.01%", "对线胜率 54.93%", "对线胜率 54.77%"]
    }
  },
  {
    "heroId": "rengar",
    "heroName": "傲之追猎者 雷恩加尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=107",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['irelia', 'urgot', 'briar', 'varus', 'kindred', 'rammus', 'belveth', 'chogath', 'naafiri', 'taliyah'],
      "reasons": ["对线胜率 39.71%", "对线胜率 41.51%", "对线胜率 41.71%", "对线胜率 42.05%", "对线胜率 42.06%", "对线胜率 42.46%", "对线胜率 42.90%", "对线胜率 42.96%", "对线胜率 43.10%", "对线胜率 43.10%"]
    },
    "counters": {
      "heroes": ['zed', 'ksante', 'talon', 'kaisa', 'smolder', 'hecarim', 'lillia', 'sylas', 'nunu', 'zyra'],
      "reasons": ["对线胜率 55.09%", "对线胜率 53.90%", "对线胜率 53.44%", "对线胜率 53.18%", "对线胜率 53.10%", "对线胜率 52.69%", "对线胜率 52.16%", "对线胜率 52.12%", "对线胜率 51.90%", "对线胜率 51.28%"]
    }
  },
  {
    "heroId": "varus",
    "heroName": "惩戒之箭 韦鲁斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=110",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['ziggs', 'zeri', 'zed', 'kayle', 'sivir', 'vi', 'kennen', 'xayah', 'ashe', 'nilah'],
      "reasons": ["对线胜率 37.86%", "对线胜率 38.25%", "对线胜率 44.34%", "对线胜率 44.36%", "对线胜率 44.41%", "对线胜率 44.71%", "对线胜率 44.86%", "对线胜率 44.88%", "对线胜率 44.94%", "对线胜率 44.95%"]
    },
    "counters": {
      "heroes": ['kaisa', 'jhin', 'rengar', 'hecarim', 'gragas', 'aatrox', 'illaoi', 'zaahen', 'fiora', 'tahmkench'],
      "reasons": ["对线胜率 62.42%", "对线胜率 59.87%", "对线胜率 57.95%", "对线胜率 57.70%", "对线胜率 56.82%", "对线胜率 56.23%", "对线胜率 56.22%", "对线胜率 56.06%", "对线胜率 55.67%", "对线胜率 55.63%"]
    }
  },
  {
    "heroId": "nautilus",
    "heroName": "深海泰坦 诺提勒斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=111",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['renata', 'rell', 'taric', 'swain', 'brand', 'braum', 'rakan', 'seraphine', 'fiddlesticks', 'leona'],
      "reasons": ["对线胜率 43.45%", "对线胜率 44.66%", "对线胜率 45.51%", "对线胜率 45.79%", "对线胜率 46.05%", "对线胜率 46.19%", "对线胜率 46.78%", "对线胜率 46.79%", "对线胜率 47.04%", "对线胜率 47.39%"]
    },
    "counters": {
      "heroes": ['missfortune', 'mel', 'leesin', 'ashe', 'malphite', 'pyke', 'camille', 'leblanc', 'yuumi', 'sylas'],
      "reasons": ["对线胜率 56.90%", "对线胜率 55.70%", "对线胜率 55.26%", "对线胜率 55.11%", "对线胜率 54.79%", "对线胜率 54.01%", "对线胜率 53.79%", "对线胜率 53.52%", "对线胜率 53.33%", "对线胜率 52.88%"]
    }
  },
  {
    "heroId": "viktor",
    "heroName": "奥术先驱 维克托",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=112",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'xerath', 'velkoz', 'brand', 'akshan', 'swain', 'lux', 'akali', 'hwei', 'pantheon'],
      "reasons": ["对线胜率 46.35%", "对线胜率 47.28%", "对线胜率 47.50%", "对线胜率 47.59%", "对线胜率 47.66%", "对线胜率 47.78%", "对线胜率 47.82%", "对线胜率 47.99%", "对线胜率 48.17%", "对线胜率 48.67%"]
    },
    "counters": {
      "heroes": ['fiora', 'vayne', 'yasuo', 'ambessa', 'smolder', 'aatrox', 'garen', 'nasus', 'malphite', 'camille'],
      "reasons": ["对线胜率 62.69%", "对线胜率 62.07%", "对线胜率 61.82%", "对线胜率 60.78%", "对线胜率 59.28%", "对线胜率 59.11%", "对线胜率 58.72%", "对线胜率 58.62%", "对线胜率 58.54%", "对线胜率 58.49%"]
    }
  },
  {
    "heroId": "sejuani",
    "heroName": "北地之怒 瑟庄妮",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=113",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'singed', 'brand', 'olaf', 'lillia', 'kennen', 'evelynn', 'renekton', 'gwen', 'gragas'],
      "reasons": ["对线胜率 35.67%", "对线胜率 41.60%", "对线胜率 42.51%", "对线胜率 42.54%", "对线胜率 43.13%", "对线胜率 43.82%", "对线胜率 44.30%", "对线胜率 44.39%", "对线胜率 44.67%", "对线胜率 44.80%"]
    },
    "counters": {
      "heroes": ['qiyana', 'jayce', 'zac', 'yasuo', 'zed', 'khazix', 'tryndamere', 'hecarim', 'rengar', 'irelia'],
      "reasons": ["对线胜率 57.95%", "对线胜率 54.63%", "对线胜率 54.04%", "对线胜率 53.37%", "对线胜率 53.19%", "对线胜率 53.15%", "对线胜率 52.80%", "对线胜率 52.75%", "对线胜率 52.63%", "对线胜率 51.93%"]
    }
  },
  {
    "heroId": "fiora",
    "heroName": "无双剑姬 菲奥娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=114",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['mel', 'viktor', 'aurora', 'malzahar', 'ahri', 'kaisa', 'aurelionsol', 'lissandra', 'taliyah', 'leblanc'],
      "reasons": ["对线胜率 35.29%", "对线胜率 37.31%", "对线胜率 41.82%", "对线胜率 42.05%", "对线胜率 43.08%", "对线胜率 44.23%", "对线胜率 44.26%", "对线胜率 44.71%", "对线胜率 45.86%", "对线胜率 46.15%"]
    },
    "counters": {
      "heroes": ['smolder', 'mordekaiser', 'zed', 'varus', 'ksante', 'veigar', 'volibear', 'sylas', 'qiyana', 'shen'],
      "reasons": ["对线胜率 59.76%", "对线胜率 58.52%", "对线胜率 58.52%", "对线胜率 56.80%", "对线胜率 55.88%", "对线胜率 55.77%", "对线胜率 55.56%", "对线胜率 54.91%", "对线胜率 54.59%", "对线胜率 54.39%"]
    }
  },
  {
    "heroId": "ziggs",
    "heroName": "爆破鬼才 吉格斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=115",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['annie', 'ekko', 'xerath', 'brand', 'diana', 'pantheon', 'ahri', 'jayce', 'anivia', 'fizz'],
      "reasons": ["对线胜率 44.90%", "对线胜率 45.14%", "对线胜率 45.43%", "对线胜率 45.60%", "对线胜率 45.93%", "对线胜率 46.28%", "对线胜率 46.56%", "对线胜率 46.78%", "对线胜率 46.80%", "对线胜率 46.83%"]
    },
    "counters": {
      "heroes": ['varus', 'smolder', 'tristana', 'yone', 'aphelios', 'corki', 'draven', 'cassiopeia', 'missfortune', 'veigar'],
      "reasons": ["对线胜率 62.14%", "对线胜率 60.46%", "对线胜率 59.46%", "对线胜率 56.74%", "对线胜率 56.06%", "对线胜率 55.80%", "对线胜率 55.46%", "对线胜率 55.43%", "对线胜率 55.35%", "对线胜率 55.22%"]
    }
  },
  {
    "heroId": "lulu",
    "heroName": "仙灵女巫 璐璐",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=117",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['amumu', 'taric', 'teemo', 'elise', 'maokai', 'leona', 'brand', 'sona', 'fiddlesticks', 'rell'],
      "reasons": ["对线胜率 45.03%", "对线胜率 45.05%", "对线胜率 46.77%", "对线胜率 46.95%", "对线胜率 47.04%", "对线胜率 47.47%", "对线胜率 47.49%", "对线胜率 47.53%", "对线胜率 47.63%", "对线胜率 47.79%"]
    },
    "counters": {
      "heroes": ['missfortune', 'sett', 'mel', 'shaco', 'anivia', 'camille', 'ashe', 'leblanc', 'shen', 'malphite'],
      "reasons": ["对线胜率 58.54%", "对线胜率 57.10%", "对线胜率 55.57%", "对线胜率 53.53%", "对线胜率 53.33%", "对线胜率 53.21%", "对线胜率 53.14%", "对线胜率 53.01%", "对线胜率 52.87%", "对线胜率 52.85%"]
    }
  },
  {
    "heroId": "draven",
    "heroName": "荣耀行刑官 德莱文",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=119",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kogmaw', 'ziggs', 'nilah', 'aurelionsol', 'xayah', 'missfortune', 'sivir', 'zeri', 'senna', 'jinx'],
      "reasons": ["对线胜率 44.15%", "对线胜率 44.54%", "对线胜率 46.20%", "对线胜率 46.43%", "对线胜率 47.18%", "对线胜率 47.50%", "对线胜率 47.60%", "对线胜率 47.64%", "对线胜率 48.33%", "对线胜率 48.58%"]
    },
    "counters": {
      "heroes": ['aatrox', 'mordekaiser', 'garen', 'kalista', 'kaisa', 'tristana', 'jax', 'lucian', 'corki', 'vayne'],
      "reasons": ["对线胜率 66.67%", "对线胜率 63.46%", "对线胜率 54.67%", "对线胜率 53.60%", "对线胜率 52.93%", "对线胜率 52.33%", "对线胜率 51.67%", "对线胜率 51.46%", "对线胜率 51.35%", "对线胜率 50.87%"]
    }
  },
  {
    "heroId": "hecarim",
    "heroName": "战争之影 赫卡里姆",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=120",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kaisa', 'zyra', 'varus', 'irelia', 'brand', 'briar', 'nunu', 'sett', 'urgot', 'evelynn'],
      "reasons": ["对线胜率 40.98%", "对线胜率 42.26%", "对线胜率 42.30%", "对线胜率 43.52%", "对线胜率 43.56%", "对线胜率 43.69%", "对线胜率 44.68%", "对线胜率 44.74%", "对线胜率 44.76%", "对线胜率 44.77%"]
    },
    "counters": {
      "heroes": ['shaco', 'rammus', 'kindred', 'talon', 'yasuo', 'gragas', 'malphite'],
      "reasons": ["对线胜率 52.15%", "对线胜率 51.74%", "对线胜率 51.68%", "对线胜率 51.42%", "对线胜率 51.02%", "对线胜率 50.72%", "对线胜率 50.07%"]
    }
  },
  {
    "heroId": "khazix",
    "heroName": "虚空掠夺者 卡兹克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=121",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zyra', 'belveth', 'naafiri', 'vayne', 'ornn', 'singed', 'urgot', 'nidalee', 'drmundo', 'fiddlesticks'],
      "reasons": ["对线胜率 42.30%", "对线胜率 43.10%", "对线胜率 43.66%", "对线胜率 44.44%", "对线胜率 44.71%", "对线胜率 44.88%", "对线胜率 45.11%", "对线胜率 45.33%", "对线胜率 45.58%", "对线胜率 45.83%"]
    },
    "counters": {
      "heroes": ['fizz', 'zed', 'yasuo', 'diana', 'kaisa', 'jayce', 'varus', 'sylas', 'vi', 'hecarim'],
      "reasons": ["对线胜率 52.53%", "对线胜率 52.15%", "对线胜率 52.11%", "对线胜率 51.31%", "对线胜率 50.93%", "对线胜率 50.73%", "对线胜率 50.69%", "对线胜率 50.68%", "对线胜率 50.66%", "对线胜率 50.64%"]
    }
  },
  {
    "heroId": "darius",
    "heroName": "诺克萨斯之手 德莱厄斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=122",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['syndra', 'orianna', 'vex', 'aurelionsol', 'katarina', 'zyra', 'ahri', 'lux', 'aurora', 'galio'],
      "reasons": ["对线胜率 35.85%", "对线胜率 37.25%", "对线胜率 37.50%", "对线胜率 37.96%", "对线胜率 39.81%", "对线胜率 40.44%", "对线胜率 40.52%", "对线胜率 40.74%", "对线胜率 41.30%", "对线胜率 41.62%"]
    },
    "counters": {
      "heroes": ['gragas', 'ezreal', 'gnar', 'lucian', 'caitlyn', 'yasuo', 'zed', 'mordekaiser', 'qiyana', 'tahmkench'],
      "reasons": ["对线胜率 61.84%", "对线胜率 58.18%", "对线胜率 57.21%", "对线胜率 56.32%", "对线胜率 54.55%", "对线胜率 54.29%", "对线胜率 54.20%", "对线胜率 53.29%", "对线胜率 52.93%", "对线胜率 52.89%"]
    }
  },
  {
    "heroId": "jayce",
    "heroName": "未来守护者 杰斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=126",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'malzahar', 'ornn', 'annie', 'cassiopeia', 'anivia', 'nunu', 'vex', 'reksai', 'velkoz'],
      "reasons": ["对线胜率 42.44%", "对线胜率 43.93%", "对线胜率 44.44%", "对线胜率 44.64%", "对线胜率 44.79%", "对线胜率 44.85%", "对线胜率 45.24%", "对线胜率 45.33%", "对线胜率 45.35%", "对线胜率 45.37%"]
    },
    "counters": {
      "heroes": ['smolder', 'tristana', 'garen', 'gragas', 'sylas', 'twistedfate', 'lucian', 'yasuo', 'mel', 'volibear'],
      "reasons": ["对线胜率 57.60%", "对线胜率 56.47%", "对线胜率 56.39%", "对线胜率 55.74%", "对线胜率 54.60%", "对线胜率 54.29%", "对线胜率 54.10%", "对线胜率 53.62%", "对线胜率 53.46%", "对线胜率 53.40%"]
    }
  },
  {
    "heroId": "lissandra",
    "heroName": "冰霜女巫 丽桑卓",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=127",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['annie', 'ambessa', 'ksante', 'hwei', 'brand', 'chogath', 'aurelionsol', 'xerath', 'vex', 'veigar'],
      "reasons": ["对线胜率 45.71%", "对线胜率 46.91%", "对线胜率 47.13%", "对线胜率 47.17%", "对线胜率 47.46%", "对线胜率 47.85%", "对线胜率 48.08%", "对线胜率 48.09%", "对线胜率 49.13%", "对线胜率 49.39%"]
    },
    "counters": {
      "heroes": ['camille', 'gangplank', 'malphite', 'yorick', 'tryndamere', 'jayce', 'yasuo', 'darius', 'jax', 'nasus'],
      "reasons": ["对线胜率 69.86%", "对线胜率 68.42%", "对线胜率 61.95%", "对线胜率 61.40%", "对线胜率 58.62%", "对线胜率 58.33%", "对线胜率 58.08%", "对线胜率 58.02%", "对线胜率 57.69%", "对线胜率 57.36%"]
    }
  },
  {
    "heroId": "diana",
    "heroName": "皎月女神 黛安娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=131",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['gwen', 'singed', 'zaahen', 'briar', 'swain', 'xinzhao', 'kennen', 'kayle', 'fiddlesticks', 'masteryi'],
      "reasons": ["对线胜率 40.24%", "对线胜率 43.10%", "对线胜率 44.19%", "对线胜率 44.24%", "对线胜率 44.41%", "对线胜率 44.73%", "对线胜率 45.02%", "对线胜率 45.62%", "对线胜率 45.69%", "对线胜率 45.72%"]
    },
    "counters": {
      "heroes": ['ambessa', 'darius', 'ksante', 'tryndamere', 'jayce', 'camille', 'smolder', 'gangplank', 'fiora', 'jhin'],
      "reasons": ["对线胜率 70.37%", "对线胜率 68.53%", "对线胜率 67.74%", "对线胜率 64.38%", "对线胜率 63.29%", "对线胜率 60.78%", "对线胜率 59.64%", "对线胜率 59.09%", "对线胜率 58.62%", "对线胜率 57.72%"]
    }
  },
  {
    "heroId": "syndra",
    "heroName": "暗黑元首 辛德拉",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=134",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'katarina', 'fizz', 'xerath', 'ekko', 'akshan', 'lissandra', 'irelia', 'talon', 'jayce'],
      "reasons": ["对线胜率 42.87%", "对线胜率 44.53%", "对线胜率 45.14%", "对线胜率 45.88%", "对线胜率 46.00%", "对线胜率 46.45%", "对线胜率 46.47%", "对线胜率 46.53%", "对线胜率 46.56%", "对线胜率 46.60%"]
    },
    "counters": {
      "heroes": ['darius', 'nasus', 'smolder', 'swain', 'graves', 'mordekaiser', 'tristana', 'cassiopeia', 'orianna', 'taliyah'],
      "reasons": ["对线胜率 64.15%", "对线胜率 60.38%", "对线胜率 57.04%", "对线胜率 56.57%", "对线胜率 54.95%", "对线胜率 54.39%", "对线胜率 54.38%", "对线胜率 54.30%", "对线胜率 54.16%", "对线胜率 53.38%"]
    }
  },
  {
    "heroId": "aurelionsol",
    "heroName": "铸星龙王 奥瑞利安索尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=136",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['nilah', 'akshan', 'pantheon', 'jax', 'fizz', 'naafiri', 'samira', 'corki', 'vex', 'annie'],
      "reasons": ["对线胜率 46.08%", "对线胜率 46.17%", "对线胜率 47.20%", "对线胜率 47.22%", "对线胜率 47.28%", "对线胜率 47.60%", "对线胜率 47.74%", "对线胜率 47.96%", "对线胜率 48.28%", "对线胜率 48.97%"]
    },
    "counters": {
      "heroes": ['mordekaiser', 'nasus', 'tristana', 'darius', 'chogath', 'teemo', 'sion', 'malphite', 'gangplank', 'smolder'],
      "reasons": ["对线胜率 69.09%", "对线胜率 63.86%", "对线胜率 62.61%", "对线胜率 62.04%", "对线胜率 61.73%", "对线胜率 61.11%", "对线胜率 60.71%", "对线胜率 60.37%", "对线胜率 60.00%", "对线胜率 59.26%"]
    }
  },
  {
    "heroId": "kayn",
    "heroName": "影流之镰 凯隐",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=141",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'poppy', 'zyra', 'kayle', 'fiddlesticks', 'evelynn', 'irelia', 'singed', 'zaahen', 'kennen'],
      "reasons": ["对线胜率 43.97%", "对线胜率 44.37%", "对线胜率 44.85%", "对线胜率 45.31%", "对线胜率 45.79%", "对线胜率 46.11%", "对线胜率 46.40%", "对线胜率 46.44%", "对线胜率 46.63%", "对线胜率 46.98%"]
    },
    "counters": {
      "heroes": ['zed', 'jhin', 'ksante', 'amumu', 'smolder', 'diana', 'tryndamere', 'shyvana', 'fizz', 'kaisa'],
      "reasons": ["对线胜率 56.18%", "对线胜率 54.48%", "对线胜率 53.80%", "对线胜率 53.45%", "对线胜率 53.36%", "对线胜率 52.89%", "对线胜率 52.78%", "对线胜率 52.76%", "对线胜率 52.76%", "对线胜率 52.73%"]
    }
  },
  {
    "heroId": "zoe",
    "heroName": "暮光星灵 佐伊",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=142",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['sion', 'malzahar', 'naafiri', 'chogath', 'annie', 'nasus', 'aurelionsol', 'pantheon', 'ziggs', 'twistedfate'],
      "reasons": ["对线胜率 44.02%", "对线胜率 44.71%", "对线胜率 45.24%", "对线胜率 46.03%", "对线胜率 46.59%", "对线胜率 46.63%", "对线胜率 46.76%", "对线胜率 46.84%", "对线胜率 47.04%", "对线胜率 47.31%"]
    },
    "counters": {
      "heroes": ['garen', 'smolder', 'irelia', 'taliyah', 'lux', 'vladimir', 'talon', 'tryndamere', 'qiyana', 'cassiopeia'],
      "reasons": ["对线胜率 62.16%", "对线胜率 59.06%", "对线胜率 58.15%", "对线胜率 57.36%", "对线胜率 56.89%", "对线胜率 56.39%", "对线胜率 56.04%", "对线胜率 55.42%", "对线胜率 55.29%", "对线胜率 54.42%"]
    }
  },
  {
    "heroId": "zyra",
    "heroName": "荆棘之兴 婕拉",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=143",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'illaoi', 'karthus', 'jhin', 'rell', 'kaisa', 'zilean', 'belveth', 'ornn', 'warwick'],
      "reasons": ["对线胜率 43.51%", "对线胜率 44.10%", "对线胜率 44.99%", "对线胜率 45.45%", "对线胜率 46.14%", "对线胜率 46.39%", "对线胜率 46.57%", "对线胜率 46.60%", "对线胜率 46.78%", "对线胜率 46.88%"]
    },
    "counters": {
      "heroes": ['camille', 'sett', 'darius', 'ksante', 'teemo', 'gragas', 'ashe', 'hecarim', 'khazix', 'viego'],
      "reasons": ["对线胜率 60.15%", "对线胜率 59.83%", "对线胜率 59.56%", "对线胜率 59.18%", "对线胜率 58.95%", "对线胜率 58.91%", "对线胜率 58.65%", "对线胜率 57.74%", "对线胜率 57.70%", "对线胜率 57.57%"]
    }
  },
  {
    "heroId": "kaisa",
    "heroName": "虚空之女 卡莎",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=145",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['qiyana', 'urgot', 'olaf', 'taliyah', 'reksai', 'kayle', 'nilah', 'briar', 'brand', 'singed'],
      "reasons": ["对线胜率 37.50%", "对线胜率 39.10%", "对线胜率 39.88%", "对线胜率 40.14%", "对线胜率 40.76%", "对线胜率 41.62%", "对线胜率 41.65%", "对线胜率 41.67%", "对线胜率 41.71%", "对线胜率 42.24%"]
    },
    "counters": {
      "heroes": ['ksante', 'hecarim', 'zed', 'fiora', 'gnar', 'sion', 'warwick', 'gragas', 'darius', 'zac'],
      "reasons": ["对线胜率 59.19%", "对线胜率 59.02%", "对线胜率 56.22%", "对线胜率 55.77%", "对线胜率 55.41%", "对线胜率 54.44%", "对线胜率 54.07%", "对线胜率 54.07%", "对线胜率 54.00%", "对线胜率 53.79%"]
    }
  },
  {
    "heroId": "seraphine",
    "heroName": "星籁歌姬 萨勒芬妮",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=147",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['renata', 'elise', 'rell', 'milio', 'nami', 'velkoz', 'yuumi', 'pyke', 'bard', 'brand'],
      "reasons": ["对线胜率 45.86%", "对线胜率 47.26%", "对线胜率 47.31%", "对线胜率 47.41%", "对线胜率 48.31%", "对线胜率 48.41%", "对线胜率 48.76%", "对线胜率 48.81%", "对线胜率 48.88%", "对线胜率 49.06%"]
    },
    "counters": {
      "heroes": ['sett', 'malphite', 'missfortune', 'anivia', 'mel', 'amumu', 'veigar', 'poppy', 'leblanc', 'alistar'],
      "reasons": ["对线胜率 58.29%", "对线胜率 56.88%", "对线胜率 55.60%", "对线胜率 54.92%", "对线胜率 54.77%", "对线胜率 54.33%", "对线胜率 54.29%", "对线胜率 54.23%", "对线胜率 53.92%", "对线胜率 53.91%"]
    }
  },
  {
    "heroId": "gnar",
    "heroName": "迷失之牙 纳尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=150",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['qiyana', 'brand', 'olaf', 'taliyah', 'reksai', 'kaisa', 'warwick', 'sion', 'nasus', 'belveth'],
      "reasons": ["对线胜率 41.50%", "对线胜率 43.10%", "对线胜率 43.67%", "对线胜率 44.31%", "对线胜率 44.54%", "对线胜率 44.59%", "对线胜率 44.84%", "对线胜率 45.12%", "对线胜率 45.57%", "对线胜率 45.60%"]
    },
    "counters": {
      "heroes": ['ambessa', 'gangplank', 'galio', 'amumu', 'ksante', 'fiora', 'shaco', 'leesin', 'shen', 'darius'],
      "reasons": ["对线胜率 58.11%", "对线胜率 56.34%", "对线胜率 55.77%", "对线胜率 55.37%", "对线胜率 55.30%", "对线胜率 54.53%", "对线胜率 53.99%", "对线胜率 53.61%", "对线胜率 53.58%", "对线胜率 53.52%"]
    }
  },
  {
    "heroId": "zac",
    "heroName": "生化魔人 扎克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=154",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taliyah', 'shen', 'gangplank', 'briar', 'ornn', 'vi', 'chogath', 'singed', 'sejuani', 'kaisa'],
      "reasons": ["对线胜率 42.33%", "对线胜率 42.68%", "对线胜率 43.51%", "对线胜率 43.97%", "对线胜率 44.48%", "对线胜率 45.30%", "对线胜率 45.45%", "对线胜率 45.51%", "对线胜率 45.96%", "对线胜率 46.21%"]
    },
    "counters": {
      "heroes": ['tahmkench', 'monkeyking', 'ksante', 'kindred', 'smolder', 'kayle', 'gnar', 'illaoi', 'tryndamere', 'rengar'],
      "reasons": ["对线胜率 56.74%", "对线胜率 55.91%", "对线胜率 55.40%", "对线胜率 54.61%", "对线胜率 54.11%", "对线胜率 54.04%", "对线胜率 53.93%", "对线胜率 53.71%", "对线胜率 53.56%", "对线胜率 53.18%"]
    }
  },
  {
    "heroId": "yasuo",
    "heroName": "疾风剑豪 亚索",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=157",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'urgot', 'annie', 'malzahar', 'rammus', 'anivia', 'evelynn', 'fiddlesticks', 'vex', 'cassiopeia'],
      "reasons": ["对线胜率 40.21%", "对线胜率 41.06%", "对线胜率 41.65%", "对线胜率 41.76%", "对线胜率 41.87%", "对线胜率 41.89%", "对线胜率 41.91%", "对线胜率 42.32%", "对线胜率 42.61%", "对线胜率 42.86%"]
    },
    "counters": {
      "heroes": ['lucian', 'akali', 'ryze', 'mel', 'smolder', 'twistedfate', 'brand', 'zed', 'sylas', 'mordekaiser'],
      "reasons": ["对线胜率 64.15%", "对线胜率 62.73%", "对线胜率 59.46%", "对线胜率 58.82%", "对线胜率 57.65%", "对线胜率 57.14%", "对线胜率 56.60%", "对线胜率 56.57%", "对线胜率 56.33%", "对线胜率 56.06%"]
    }
  },
  {
    "heroId": "velkoz",
    "heroName": "虚空之眼 维克兹",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=161",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'annie', 'fizz', 'amumu', 'ahri', 'naafiri', 'sett', 'akali', 'yasuo', 'akshan'],
      "reasons": ["对线胜率 40.63%", "对线胜率 40.66%", "对线胜率 42.31%", "对线胜率 42.55%", "对线胜率 43.81%", "对线胜率 45.05%", "对线胜率 45.54%", "对线胜率 45.62%", "对线胜率 45.65%", "对线胜率 45.76%"]
    },
    "counters": {
      "heroes": ['cassiopeia', 'kassadin', 'orianna', 'shen', 'poppy', 'vladimir', 'leesin', 'fiddlesticks', 'malphite', 'veigar'],
      "reasons": ["对线胜率 60.94%", "对线胜率 60.00%", "对线胜率 57.29%", "对线胜率 57.25%", "对线胜率 56.44%", "对线胜率 56.32%", "对线胜率 55.86%", "对线胜率 55.83%", "对线胜率 55.82%", "对线胜率 55.67%"]
    }
  },
  {
    "heroId": "taliyah",
    "heroName": "岩雀 塔莉垭",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=163",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zoe', 'velkoz', 'morgana', 'anivia', 'leblanc', 'kennen', 'twistedfate', 'katarina', 'reksai', 'veigar'],
      "reasons": ["对线胜率 42.64%", "对线胜率 44.64%", "对线胜率 45.16%", "对线胜率 45.39%", "对线胜率 45.39%", "对线胜率 45.45%", "对线胜率 45.81%", "对线胜率 45.85%", "对线胜率 46.27%", "对线胜率 46.28%"]
    },
    "counters": {
      "heroes": ['amumu', 'qiyana', 'monkeyking', 'kaisa', 'illaoi', 'shaco', 'akshan', 'ksante', 'viego', 'zac'],
      "reasons": ["对线胜率 62.63%", "对线胜率 60.73%", "对线胜率 60.16%", "对线胜率 59.86%", "对线胜率 59.47%", "对线胜率 59.43%", "对线胜率 57.97%", "对线胜率 57.94%", "对线胜率 57.80%", "对线胜率 57.67%"]
    }
  },
  {
    "heroId": "camille",
    "heroName": "青钢影 卡蜜尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=164",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['lissandra', 'maokai', 'twistedfate', 'braum', 'alistar', 'soraka', 'blitzcrank', 'nami', 'janna', 'viktor'],
      "reasons": ["对线胜率 30.14%", "对线胜率 34.33%", "对线胜率 36.54%", "对线胜率 38.18%", "对线胜率 38.92%", "对线胜率 40.36%", "对线胜率 40.37%", "对线胜率 41.31%", "对线胜率 41.41%", "对线胜率 41.51%"]
    },
    "counters": {
      "heroes": ['ksante', 'smolder', 'tryndamere', 'yorick', 'drmundo', 'jhin', 'jayce', 'gnar', 'ambessa', 'volibear'],
      "reasons": ["对线胜率 61.25%", "对线胜率 60.71%", "对线胜率 58.70%", "对线胜率 57.78%", "对线胜率 57.14%", "对线胜率 56.03%", "对线胜率 55.92%", "对线胜率 55.24%", "对线胜率 55.06%", "对线胜率 55.00%"]
    }
  },
  {
    "heroId": "akshan",
    "heroName": "影哨 阿克尚",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=166",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['cassiopeia', 'nasus', 'taliyah', 'annie', 'yasuo', 'talon', 'galio', 'jayce', 'malzahar', 'ahri'],
      "reasons": ["对线胜率 36.36%", "对线胜率 38.33%", "对线胜率 42.03%", "对线胜率 42.42%", "对线胜率 46.40%", "对线胜率 46.93%", "对线胜率 47.03%", "对线胜率 47.51%", "对线胜率 48.11%", "对线胜率 48.32%"]
    },
    "counters": {
      "heroes": ['morgana', 'zed', 'ekko', 'kassadin', 'akali', 'tristana', 'sion', 'aurora', 'hwei', 'yone'],
      "reasons": ["对线胜率 60.00%", "对线胜率 57.65%", "对线胜率 57.21%", "对线胜率 57.14%", "对线胜率 56.99%", "对线胜率 56.25%", "对线胜率 56.06%", "对线胜率 55.35%", "对线胜率 55.27%", "对线胜率 55.00%"]
    }
  },
  {
    "heroId": "belveth",
    "heroName": "虚空女皇 卑尔维斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=200",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['rammus', 'kennen', 'teemo', 'fiddlesticks', 'pantheon', 'urgot', 'amumu', 'chogath', 'zac', 'vayne'],
      "reasons": ["对线胜率 44.44%", "对线胜率 44.54%", "对线胜率 47.58%", "对线胜率 47.80%", "对线胜率 48.21%", "对线胜率 48.22%", "对线胜率 48.32%", "对线胜率 48.39%", "对线胜率 49.16%", "对线胜率 49.37%"]
    },
    "counters": {
      "heroes": ['jhin', 'tahmkench', 'rengar', 'khazix', 'shyvana', 'tryndamere', 'sylas', 'akali', 'zed', 'hecarim'],
      "reasons": ["对线胜率 61.82%", "对线胜率 58.33%", "对线胜率 57.10%", "对线胜率 56.90%", "对线胜率 56.48%", "对线胜率 56.29%", "对线胜率 56.16%", "对线胜率 56.04%", "对线胜率 55.37%", "对线胜率 54.96%"]
    }
  },
  {
    "heroId": "braum",
    "heroName": "弗雷尔卓德之心 布隆",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=201",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zilean', 'taric', 'brand', 'velkoz', 'bard', 'renata', 'rakan', 'soraka', 'swain', 'neeko'],
      "reasons": ["对线胜率 46.20%", "对线胜率 46.51%", "对线胜率 46.56%", "对线胜率 47.26%", "对线胜率 47.49%", "对线胜率 47.57%", "对线胜率 48.23%", "对线胜率 48.53%", "对线胜率 48.54%", "对线胜率 48.71%"]
    },
    "counters": {
      "heroes": ['camille', 'sett', 'missfortune', 'mel', 'sylas', 'leblanc', 'anivia', 'yuumi', 'pantheon', 'blitzcrank'],
      "reasons": ["对线胜率 61.82%", "对线胜率 60.26%", "对线胜率 58.54%", "对线胜率 57.32%", "对线胜率 56.90%", "对线胜率 56.83%", "对线胜率 56.25%", "对线胜率 55.79%", "对线胜率 54.59%", "对线胜率 54.40%"]
    }
  },
  {
    "heroId": "jhin",
    "heroName": "戏命师 烬",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=202",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akali', 'zaahen', 'belveth', 'evelynn', 'aurelionsol', 'amumu', 'diana', 'singed', 'naafiri', 'qiyana'],
      "reasons": ["对线胜率 36.67%", "对线胜率 37.60%", "对线胜率 38.18%", "对线胜率 39.38%", "对线胜率 42.16%", "对线胜率 42.21%", "对线胜率 42.28%", "对线胜率 43.40%", "对线胜率 43.64%", "对线胜率 43.75%"]
    },
    "counters": {
      "heroes": ['rammus', 'darius', 'zyra', 'heimerdinger', 'rengar', 'nasus', 'sejuani', 'malphite', 'gragas', 'taliyah'],
      "reasons": ["对线胜率 63.03%", "对线胜率 61.11%", "对线胜率 54.55%", "对线胜率 54.17%", "对线胜率 54.17%", "对线胜率 53.91%", "对线胜率 53.91%", "对线胜率 53.58%", "对线胜率 53.47%", "对线胜率 53.33%"]
    }
  },
  {
    "heroId": "kindred",
    "heroName": "永猎双子 千珏",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=203",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kennen', 'brand', 'kayle', 'zac', 'elise', 'amumu', 'taliyah', 'qiyana', 'gnar', 'singed'],
      "reasons": ["对线胜率 39.66%", "对线胜率 42.12%", "对线胜率 44.94%", "对线胜率 45.39%", "对线胜率 45.75%", "对线胜率 46.25%", "对线胜率 46.32%", "对线胜率 46.50%", "对线胜率 46.55%", "对线胜率 46.56%"]
    },
    "counters": {
      "heroes": ['rengar', 'smolder', 'zed', 'yasuo', 'urgot', 'fizz', 'tahmkench', 'kaisa', 'jayce', 'sylas'],
      "reasons": ["对线胜率 57.94%", "对线胜率 57.19%", "对线胜率 56.06%", "对线胜率 55.80%", "对线胜率 54.87%", "对线胜率 54.20%", "对线胜率 54.09%", "对线胜率 53.99%", "对线胜率 53.00%", "对线胜率 52.98%"]
    }
  },
  {
    "heroId": "zeri",
    "heroName": "祖安花火 泽丽",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=221",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['nilah', 'kogmaw', 'ziggs'],
      "reasons": ["对线胜率 45.66%", "对线胜率 48.11%", "对线胜率 49.12%"]
    },
    "counters": {
      "heroes": ['varus', 'kalista', 'ezreal', 'corki', 'jhin', 'yunara', 'kaisa', 'lucian', 'samira', 'tristana'],
      "reasons": ["对线胜率 61.75%", "对线胜率 57.78%", "对线胜率 56.62%", "对线胜率 56.11%", "对线胜率 55.27%", "对线胜率 55.05%", "对线胜率 54.90%", "对线胜率 54.01%", "对线胜率 53.38%", "对线胜率 53.06%"]
    }
  },
  {
    "heroId": "jinx",
    "heroName": "暴走萝莉 金克丝",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=222",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'ashe', 'senna', 'twitch', 'ziggs', 'sivir', 'zeri'],
      "reasons": ["对线胜率 46.69%", "对线胜率 48.83%", "对线胜率 48.96%", "对线胜率 49.10%", "对线胜率 49.33%", "对线胜率 49.61%", "对线胜率 49.76%"]
    },
    "counters": {
      "heroes": ['kalista', 'samira', 'kaisa', 'corki', 'lucian', 'varus', 'ezreal', 'tristana', 'yunara', 'caitlyn'],
      "reasons": ["对线胜率 56.92%", "对线胜率 53.89%", "对线胜率 53.79%", "对线胜率 53.44%", "对线胜率 53.35%", "对线胜率 53.22%", "对线胜率 52.71%", "对线胜率 52.53%", "对线胜率 52.47%", "对线胜率 52.34%"]
    }
  },
  {
    "heroId": "tahmkench",
    "heroName": "河流之王 塔姆",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=223",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['malzahar', 'belveth', 'ornn', 'zac', 'taric', 'gwen', 'naafiri', 'varus', 'zaahen', 'briar'],
      "reasons": ["对线胜率 39.06%", "对线胜率 41.67%", "对线胜率 42.62%", "对线胜率 43.26%", "对线胜率 44.05%", "对线胜率 44.12%", "对线胜率 44.33%", "对线胜率 44.37%", "对线胜率 45.35%", "对线胜率 45.51%"]
    },
    "counters": {
      "heroes": ['ashe', 'jayce', 'missfortune', 'malphite', 'poppy', 'renekton', 'tryndamere', 'sett', 'veigar', 'leesin'],
      "reasons": ["对线胜率 59.89%", "对线胜率 58.72%", "对线胜率 58.21%", "对线胜率 57.83%", "对线胜率 57.34%", "对线胜率 56.57%", "对线胜率 56.02%", "对线胜率 55.81%", "对线胜率 55.71%", "对线胜率 55.56%"]
    }
  },
  {
    "heroId": "briar",
    "heroName": "狂厄蔷薇 贝蕾亚",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=233",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taliyah', 'reksai', 'sion', 'kayle', 'belveth', 'shen', 'teemo', 'nasus', 'ornn', 'brand'],
      "reasons": ["对线胜率 43.74%", "对线胜率 46.97%", "对线胜率 47.48%", "对线胜率 47.78%", "对线胜率 48.40%", "对线胜率 48.43%", "对线胜率 48.66%", "对线胜率 49.10%", "对线胜率 49.15%", "对线胜率 49.28%"]
    },
    "counters": {
      "heroes": ['kaisa', 'rengar', 'smolder', 'zed', 'shaco', 'hecarim', 'zac', 'yasuo', 'kennen', 'diana'],
      "reasons": ["对线胜率 58.33%", "对线胜率 58.29%", "对线胜率 57.81%", "对线胜率 57.53%", "对线胜率 56.46%", "对线胜率 56.31%", "对线胜率 56.03%", "对线胜率 56.02%", "对线胜率 55.90%", "对线胜率 55.76%"]
    }
  },
  {
    "heroId": "viego",
    "heroName": "破败之王 佛耶戈",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=234",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taliyah', 'singed', 'zyra', 'qiyana', 'karthus', 'elise', 'kayle', 'reksai', 'fiddlesticks', 'belveth'],
      "reasons": ["对线胜率 42.20%", "对线胜率 42.23%", "对线胜率 42.43%", "对线胜率 43.46%", "对线胜率 44.37%", "对线胜率 44.38%", "对线胜率 44.74%", "对线胜率 44.80%", "对线胜率 45.27%", "对线胜率 45.72%"]
    },
    "counters": {
      "heroes": ['zed', 'smolder', 'yasuo', 'shyvana', 'sylas', 'hecarim', 'diana', 'vi', 'monkeyking', 'jarvaniv'],
      "reasons": ["对线胜率 54.65%", "对线胜率 53.79%", "对线胜率 52.45%", "对线胜率 52.34%", "对线胜率 52.33%", "对线胜率 52.29%", "对线胜率 52.24%", "对线胜率 51.44%", "对线胜率 51.43%", "对线胜率 51.38%"]
    }
  },
  {
    "heroId": "senna",
    "heroName": "涤魂圣枪 赛娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=235",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['fiddlesticks', 'leblanc', 'elise', 'sona', 'jarvaniv', 'velkoz', 'xerath', 'zilean', 'thresh', 'nami'],
      "reasons": ["对线胜率 43.09%", "对线胜率 43.62%", "对线胜率 44.16%", "对线胜率 44.38%", "对线胜率 45.64%", "对线胜率 45.81%", "对线胜率 45.99%", "对线胜率 46.04%", "对线胜率 46.37%", "对线胜率 46.46%"]
    },
    "counters": {
      "heroes": ['malphite', 'sivir', 'xayah', 'sett', 'mel', 'shen', 'ezreal', 'missfortune', 'alistar', 'jhin'],
      "reasons": ["对线胜率 62.19%", "对线胜率 57.47%", "对线胜率 57.20%", "对线胜率 56.73%", "对线胜率 55.80%", "对线胜率 55.46%", "对线胜率 55.35%", "对线胜率 54.91%", "对线胜率 54.61%", "对线胜率 54.47%"]
    }
  },
  {
    "heroId": "lucian",
    "heroName": "圣枪游侠 卢锡安",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=236",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['yasuo', 'tryndamere', 'darius', 'aurelionsol', 'garen', 'jayce', 'zeri', 'jinx', 'yone', 'senna'],
      "reasons": ["对线胜率 35.85%", "对线胜率 41.67%", "对线胜率 43.68%", "对线胜率 44.99%", "对线胜率 45.00%", "对线胜率 45.90%", "对线胜率 45.99%", "对线胜率 46.65%", "对线胜率 46.67%", "对线胜率 46.79%"]
    },
    "counters": {
      "heroes": ['aatrox', 'yorick', 'renekton', 'jax', 'varus', 'ezreal', 'malphite', 'tristana'],
      "reasons": ["对线胜率 61.48%", "对线胜率 58.18%", "对线胜率 54.79%", "对线胜率 53.68%", "对线胜率 52.12%", "对线胜率 51.28%", "对线胜率 50.62%", "对线胜率 50.39%"]
    }
  },
  {
    "heroId": "zed",
    "heroName": "影流之主 劫",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=238",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['urgot', 'olaf', 'evelynn', 'masteryi', 'rammus', 'ornn', 'singed', 'anivia', 'akshan', 'briar'],
      "reasons": ["对线胜率 36.75%", "对线胜率 40.57%", "对线胜率 41.08%", "对线胜率 41.37%", "对线胜率 41.57%", "对线胜率 41.72%", "对线胜率 42.01%", "对线胜率 42.17%", "对线胜率 42.35%", "对线胜率 42.47%"]
    },
    "counters": {
      "heroes": ['yone', 'fiora', 'yorick', 'mordekaiser', 'aatrox', 'yasuo', 'tryndamere', 'poppy', 'varus', 'sion'],
      "reasons": ["对线胜率 64.33%", "对线胜率 59.02%", "对线胜率 58.21%", "对线胜率 57.89%", "对线胜率 56.28%", "对线胜率 56.00%", "对线胜率 55.95%", "对线胜率 55.75%", "对线胜率 55.66%", "对线胜率 55.56%"]
    }
  },
  {
    "heroId": "kled",
    "heroName": "暴怒骑士 克烈",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=240",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['tryndamere', 'mordekaiser', 'malphite', 'jayce'],
      "reasons": ["对线胜率 44.16%", "对线胜率 46.77%", "对线胜率 48.86%", "对线胜率 48.94%"]
    },
    "counters": {
      "heroes": ['aatrox', 'garen', 'drmundo', 'gangplank', 'jax', 'yone', 'renekton', 'nasus', 'darius'],
      "reasons": ["对线胜率 58.76%", "对线胜率 57.98%", "对线胜率 56.47%", "对线胜率 55.56%", "对线胜率 55.20%", "对线胜率 54.93%", "对线胜率 52.70%", "对线胜率 50.91%", "对线胜率 50.56%"]
    }
  },
  {
    "heroId": "ekko",
    "heroName": "时间刺客 艾克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=245",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akshan', 'swain', 'anivia', 'singed', 'lissandra', 'kayle', 'kassadin', 'ahri', 'leblanc', 'annie'],
      "reasons": ["对线胜率 42.79%", "对线胜率 43.14%", "对线胜率 43.68%", "对线胜率 44.48%", "对线胜率 44.56%", "对线胜率 44.89%", "对线胜率 45.31%", "对线胜率 45.87%", "对线胜率 46.02%", "对线胜率 46.49%"]
    },
    "counters": {
      "heroes": ['aatrox', 'darius', 'jax', 'zed', 'ziggs', 'ksante', 'garen', 'syndra', 'drmundo', 'yorick'],
      "reasons": ["对线胜率 61.54%", "对线胜率 60.64%", "对线胜率 58.67%", "对线胜率 56.58%", "对线胜率 54.86%", "对线胜率 54.29%", "对线胜率 54.20%", "对线胜率 54.00%", "对线胜率 53.97%", "对线胜率 53.70%"]
    }
  },
  {
    "heroId": "qiyana",
    "heroName": "元素女皇 奇亚娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=246",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['vex', 'karthus', 'taliyah', 'sejuani', 'swain', 'cassiopeia', 'nunu', 'zoe', 'velkoz', 'malzahar'],
      "reasons": ["对线胜率 41.54%", "对线胜率 41.70%", "对线胜率 41.84%", "对线胜率 42.05%", "对线胜率 43.55%", "对线胜率 44.44%", "对线胜率 44.53%", "对线胜率 44.71%", "对线胜率 44.83%", "对线胜率 44.98%"]
    },
    "counters": {
      "heroes": ['kaisa', 'akali', 'amumu', 'smolder', 'gnar', 'viego', 'illaoi', 'jhin', 'tristana', 'poppy'],
      "reasons": ["对线胜率 62.50%", "对线胜率 60.83%", "对线胜率 60.26%", "对线胜率 58.70%", "对线胜率 58.50%", "对线胜率 56.54%", "对线胜率 56.50%", "对线胜率 56.25%", "对线胜率 55.77%", "对线胜率 55.45%"]
    }
  },
  {
    "heroId": "vi",
    "heroName": "皮城执法官 蔚",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=254",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kayle', 'kennen', 'brand', 'taliyah', 'fiddlesticks', 'volibear', 'nidalee', 'shen', 'teemo', 'briar'],
      "reasons": ["对线胜率 42.93%", "对线胜率 43.91%", "对线胜率 44.37%", "对线胜率 44.53%", "对线胜率 45.00%", "对线胜率 45.23%", "对线胜率 45.45%", "对线胜率 45.58%", "对线胜率 45.89%", "对线胜率 46.01%"]
    },
    "counters": {
      "heroes": ['amumu', 'rengar', 'varus', 'zed', 'zac', 'evelynn', 'sejuani', 'chogath', 'karthus', 'diana'],
      "reasons": ["对线胜率 57.01%", "对线胜率 55.67%", "对线胜率 55.29%", "对线胜率 55.25%", "对线胜率 54.70%", "对线胜率 54.02%", "对线胜率 53.19%", "对线胜率 53.09%", "对线胜率 52.62%", "对线胜率 52.40%"]
    }
  },
  {
    "heroId": "aatrox",
    "heroName": "暗裔剑魔 亚托克斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=266",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['draven', 'katarina', 'ahri', 'lucian', 'malzahar', 'hwei', 'viktor', 'kled', 'vex', 'caitlyn'],
      "reasons": ["对线胜率 33.33%", "对线胜率 37.50%", "对线胜率 38.08%", "对线胜率 38.52%", "对线胜率 40.00%", "对线胜率 40.19%", "对线胜率 40.89%", "对线胜率 41.24%", "对线胜率 41.49%", "对线胜率 42.35%"]
    },
    "counters": {
      "heroes": ['shen', 'tahmkench', 'smolder', 'zed', 'jhin', 'drmundo', 'pantheon', 'amumu', 'aurora', 'rengar'],
      "reasons": ["对线胜率 60.67%", "对线胜率 57.02%", "对线胜率 56.75%", "对线胜率 55.29%", "对线胜率 55.17%", "对线胜率 54.99%", "对线胜率 54.95%", "对线胜率 54.65%", "对线胜率 54.35%", "对线胜率 54.20%"]
    }
  },
  {
    "heroId": "nami",
    "heroName": "唤潮鲛姬 娜美",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=267",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'rakan', 'renata', 'rell', 'elise', 'sona', 'braum', 'zilean', 'blitzcrank', 'nautilus'],
      "reasons": ["对线胜率 46.81%", "对线胜率 47.78%", "对线胜率 47.91%", "对线胜率 48.31%", "对线胜率 48.35%", "对线胜率 48.47%", "对线胜率 49.08%", "对线胜率 49.08%", "对线胜率 49.20%", "对线胜率 49.27%"]
    },
    "counters": {
      "heroes": ['sett', 'missfortune', 'ashe', 'camille', 'malphite', 'mel', 'leesin', 'anivia', 'poppy', 'jarvaniv'],
      "reasons": ["对线胜率 65.24%", "对线胜率 61.02%", "对线胜率 59.14%", "对线胜率 58.69%", "对线胜率 56.48%", "对线胜率 56.23%", "对线胜率 55.76%", "对线胜率 54.95%", "对线胜率 54.86%", "对线胜率 54.73%"]
    }
  },
  {
    "heroId": "azir",
    "heroName": "沙漠皇帝 阿兹尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=268",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['xerath', 'chogath', 'vex', 'aurelionsol', 'brand', 'pantheon', 'hwei', 'leblanc', 'cassiopeia', 'kassadin'],
      "reasons": ["对线胜率 40.14%", "对线胜率 40.21%", "对线胜率 40.65%", "对线胜率 41.15%", "对线胜率 41.23%", "对线胜率 41.56%", "对线胜率 42.98%", "对线胜率 43.48%", "对线胜率 43.51%", "对线胜率 43.66%"]
    },
    "counters": {
      "heroes": ['irelia', 'sion', 'yasuo', 'smolder', 'graves', 'morgana', 'malphite', 'mel'],
      "reasons": ["对线胜率 56.50%", "对线胜率 55.62%", "对线胜率 54.82%", "对线胜率 52.87%", "对线胜率 52.33%", "对线胜率 50.86%", "对线胜率 50.33%", "对线胜率 50.26%"]
    }
  },
  {
    "heroId": "yuumi",
    "heroName": "魔法猫咪 悠米",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=350",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'braum', 'rell', 'renata', 'fiddlesticks', 'zilean', 'rakan', 'nautilus', 'thresh', 'leona'],
      "reasons": ["对线胜率 43.66%", "对线胜率 44.21%", "对线胜率 45.30%", "对线胜率 45.80%", "对线胜率 45.98%", "对线胜率 46.18%", "对线胜率 46.33%", "对线胜率 46.67%", "对线胜率 47.28%", "对线胜率 47.29%"]
    },
    "counters": {
      "heroes": ['missfortune', 'ashe', 'mel', 'veigar', 'xerath', 'swain', 'morgana', 'leblanc', 'shaco', 'jarvaniv'],
      "reasons": ["对线胜率 62.26%", "对线胜率 56.60%", "对线胜率 55.01%", "对线胜率 54.80%", "对线胜率 54.06%", "对线胜率 54.04%", "对线胜率 53.96%", "对线胜率 53.53%", "对线胜率 53.22%", "对线胜率 52.82%"]
    }
  },
  {
    "heroId": "samira",
    "heroName": "沙漠玫瑰 莎弥拉",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=360",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['nilah', 'jinx', 'ziggs', 'zeri', 'senna', 'xayah', 'ashe', 'missfortune', 'sivir', 'corki'],
      "reasons": ["对线胜率 44.53%", "对线胜率 46.11%", "对线胜率 46.48%", "对线胜率 46.62%", "对线胜率 46.97%", "对线胜率 48.21%", "对线胜率 48.31%", "对线胜率 48.36%", "对线胜率 48.73%", "对线胜率 48.81%"]
    },
    "counters": {
      "heroes": ['kalista', 'kaisa', 'ezreal', 'aurelionsol', 'caitlyn', 'lucian', 'tristana', 'twitch', 'yunara', 'varus'],
      "reasons": ["对线胜率 55.40%", "对线胜率 54.16%", "对线胜率 52.40%", "对线胜率 52.26%", "对线胜率 52.22%", "对线胜率 51.68%", "对线胜率 51.64%", "对线胜率 51.62%", "对线胜率 51.54%", "对线胜率 51.25%"]
    }
  },
  {
    "heroId": "thresh",
    "heroName": "魂锁典狱长 锤石",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=412",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taric', 'brand', 'zilean', 'rakan', 'velkoz', 'braum', 'zyra', 'renata', 'rell', 'swain'],
      "reasons": ["对线胜率 46.53%", "对线胜率 46.71%", "对线胜率 47.24%", "对线胜率 47.73%", "对线胜率 47.83%", "对线胜率 48.10%", "对线胜率 48.29%", "对线胜率 48.48%", "对线胜率 48.49%", "对线胜率 48.94%"]
    },
    "counters": {
      "heroes": ['ashe', 'missfortune', 'anivia', 'camille', 'malphite', 'sylas', 'pyke', 'mel', 'pantheon', 'senna'],
      "reasons": ["对线胜率 55.85%", "对线胜率 55.82%", "对线胜率 55.09%", "对线胜率 54.94%", "对线胜率 54.41%", "对线胜率 54.04%", "对线胜率 53.98%", "对线胜率 53.75%", "对线胜率 53.63%", "对线胜率 53.63%"]
    }
  },
  {
    "heroId": "illaoi",
    "heroName": "海兽祭司 俄洛伊",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=420",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['taliyah', 'kayle', 'elise', 'qiyana', 'karthus', 'varus', 'teemo', 'brand', 'ornn', 'sion'],
      "reasons": ["对线胜率 40.53%", "对线胜率 42.56%", "对线胜率 42.93%", "对线胜率 43.50%", "对线胜率 43.73%", "对线胜率 43.78%", "对线胜率 43.82%", "对线胜率 44.22%", "对线胜率 45.20%", "对线胜率 45.47%"]
    },
    "counters": {
      "heroes": ['sylas', 'drmundo', 'singed', 'renekton', 'jax', 'irelia', 'volibear', 'fiora', 'amumu', 'zyra'],
      "reasons": ["对线胜率 60.00%", "对线胜率 58.67%", "对线胜率 56.91%", "对线胜率 56.78%", "对线胜率 56.55%", "对线胜率 56.54%", "对线胜率 56.50%", "对线胜率 56.10%", "对线胜率 56.04%", "对线胜率 55.90%"]
    }
  },
  {
    "heroId": "reksai",
    "heroName": "虚空遁地兽 雷克塞",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=421",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['amumu', 'kayle', 'urgot', 'brand', 'zyra', 'qiyana', 'gragas', 'belveth'],
      "reasons": ["对线胜率 42.65%", "对线胜率 45.93%", "对线胜率 47.76%", "对线胜率 47.87%", "对线胜率 48.48%", "对线胜率 48.79%", "对线胜率 49.00%", "对线胜率 49.14%"]
    },
    "counters": {
      "heroes": ['sejuani', 'masteryi', 'yasuo', 'kaisa', 'poppy', 'smolder', 'fizz', 'zed', 'sylas', 'riven'],
      "reasons": ["对线胜率 64.33%", "对线胜率 59.90%", "对线胜率 59.79%", "对线胜率 59.24%", "对线胜率 57.93%", "对线胜率 57.32%", "对线胜率 57.12%", "对线胜率 56.73%", "对线胜率 56.62%", "对线胜率 56.47%"]
    }
  },
  {
    "heroId": "kalista",
    "heroName": "复仇之矛 卡莉丝塔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=429",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['zeri', 'jinx', 'samira', 'xayah', 'missfortune', 'sivir', 'ziggs', 'draven', 'ashe', 'smolder'],
      "reasons": ["对线胜率 42.22%", "对线胜率 43.08%", "对线胜率 44.60%", "对线胜率 44.75%", "对线胜率 45.53%", "对线胜率 45.85%", "对线胜率 46.15%", "对线胜率 46.40%", "对线胜率 46.58%", "对线胜率 46.91%"]
    },
    "counters": {
      "heroes": ['ezreal', 'nilah', 'caitlyn', 'kaisa', 'tristana'],
      "reasons": ["对线胜率 54.28%", "对线胜率 52.03%", "对线胜率 50.91%", "对线胜率 50.63%", "对线胜率 50.31%"]
    }
  },
  {
    "heroId": "bard",
    "heroName": "星界游神 巴德",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=432",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['elise', 'amumu', 'leesin', 'sona', 'velkoz', 'maokai', 'rell', 'fiddlesticks', 'poppy', 'sett'],
      "reasons": ["对线胜率 40.14%", "对线胜率 40.85%", "对线胜率 45.10%", "对线胜率 45.58%", "对线胜率 45.67%", "对线胜率 45.88%", "对线胜率 46.01%", "对线胜率 46.15%", "对线胜率 46.32%", "对线胜率 46.55%"]
    },
    "counters": {
      "heroes": ['malphite', 'shen', 'renata', 'mel', 'ashe', 'missfortune', 'xerath', 'pyke', 'veigar', 'pantheon'],
      "reasons": ["对线胜率 63.89%", "对线胜率 60.22%", "对线胜率 56.45%", "对线胜率 55.43%", "对线胜率 55.05%", "对线胜率 54.55%", "对线胜率 54.05%", "对线胜率 53.79%", "对线胜率 53.13%", "对线胜率 53.09%"]
    }
  },
  {
    "heroId": "rakan",
    "heroName": "幻翎 洛",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=497",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['sona', 'veigar', 'teemo', 'zilean', 'anivia', 'seraphine', 'fiddlesticks', 'rell', 'brand', 'velkoz'],
      "reasons": ["对线胜率 46.12%", "对线胜率 46.71%", "对线胜率 46.83%", "对线胜率 46.97%", "对线胜率 48.13%", "对线胜率 48.14%", "对线胜率 48.18%", "对线胜率 48.56%", "对线胜率 48.80%", "对线胜率 48.92%"]
    },
    "counters": {
      "heroes": ['sylas', 'missfortune', 'jarvaniv', 'ashe', 'leesin', 'malphite', 'mel', 'leblanc', 'pantheon', 'pyke'],
      "reasons": ["对线胜率 61.44%", "对线胜率 59.50%", "对线胜率 59.07%", "对线胜率 58.70%", "对线胜率 58.70%", "对线胜率 58.65%", "对线胜率 57.65%", "对线胜率 57.29%", "对线胜率 55.95%", "对线胜率 55.71%"]
    }
  },
  {
    "heroId": "xayah",
    "heroName": "逆羽 霞",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=498",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'senna', 'kogmaw', 'zeri', 'jinx', 'ashe', 'sivir', 'ziggs', 'smolder'],
      "reasons": ["对线胜率 41.96%", "对线胜率 42.80%", "对线胜率 43.02%", "对线胜率 46.95%", "对线胜率 48.87%", "对线胜率 49.04%", "对线胜率 49.12%", "对线胜率 49.24%", "对线胜率 49.89%"]
    },
    "counters": {
      "heroes": ['kalista', 'nilah', 'varus', 'kaisa', 'corki', 'lucian', 'draven', 'ezreal', 'tristana', 'yunara'],
      "reasons": ["对线胜率 55.25%", "对线胜率 55.24%", "对线胜率 55.12%", "对线胜率 55.04%", "对线胜率 53.67%", "对线胜率 53.17%", "对线胜率 52.82%", "对线胜率 52.42%", "对线胜率 52.16%", "对线胜率 51.95%"]
    }
  },
  {
    "heroId": "ornn",
    "heroName": "山隐之焰 奥恩",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=516",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['galio', 'lissandra', 'olaf', 'kennen', 'akali', 'belveth', 'twistedfate', 'reksai', 'warwick', 'taliyah'],
      "reasons": ["对线胜率 43.94%", "对线胜率 44.07%", "对线胜率 45.19%", "对线胜率 47.21%", "对线胜率 47.87%", "对线胜率 47.97%", "对线胜率 48.15%", "对线胜率 48.25%", "对线胜率 48.28%", "对线胜率 48.71%"]
    },
    "counters": {
      "heroes": ['sion', 'malphite', 'teemo', 'yasuo', 'nasus', 'gragas', 'zed', 'jayce', 'tryndamere', 'tahmkench'],
      "reasons": ["对线胜率 64.81%", "对线胜率 61.54%", "对线胜率 59.57%", "对线胜率 59.38%", "对线胜率 59.18%", "对线胜率 58.82%", "对线胜率 58.28%", "对线胜率 57.80%", "对线胜率 57.75%", "对线胜率 57.38%"]
    }
  },
  {
    "heroId": "sylas",
    "heroName": "解脱者 塞拉斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=517",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['rakan', 'vex', 'braum', 'reksai', 'belveth', 'gwen', 'lillia', 'taric', 'janna', 'rell'],
      "reasons": ["对线胜率 38.56%", "对线胜率 40.12%", "对线胜率 43.10%", "对线胜率 43.38%", "对线胜率 43.84%", "对线胜率 44.91%", "对线胜率 44.91%", "对线胜率 45.24%", "对线胜率 45.45%", "对线胜率 45.49%"]
    },
    "counters": {
      "heroes": ['fiora', 'galio', 'drmundo', 'malphite', 'kayle', 'gnar', 'irelia', 'ashe', 'shyvana', 'smolder'],
      "reasons": ["对线胜率 66.20%", "对线胜率 60.94%", "对线胜率 60.36%", "对线胜率 59.38%", "对线胜率 58.59%", "对线胜率 58.43%", "对线胜率 57.60%", "对线胜率 57.45%", "对线胜率 57.05%", "对线胜率 56.99%"]
    }
  },
  {
    "heroId": "neeko",
    "heroName": "万花通灵 妮蔻",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=518",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['amumu', 'taric', 'elise', 'brand', 'shen', 'rakan', 'lux', 'zyra', 'renata', 'velkoz'],
      "reasons": ["对线胜率 35.71%", "对线胜率 44.44%", "对线胜率 45.62%", "对线胜率 45.95%", "对线胜率 47.25%", "对线胜率 47.39%", "对线胜率 47.43%", "对线胜率 47.77%", "对线胜率 47.90%", "对线胜率 48.11%"]
    },
    "counters": {
      "heroes": ['sett', 'anivia', 'missfortune', 'ashe', 'shaco', 'poppy', 'alistar', 'camille', 'mel', 'teemo'],
      "reasons": ["对线胜率 60.78%", "对线胜率 59.02%", "对线胜率 57.98%", "对线胜率 57.24%", "对线胜率 55.66%", "对线胜率 55.65%", "对线胜率 54.41%", "对线胜率 54.37%", "对线胜率 53.52%", "对线胜率 53.42%"]
    }
  },
  {
    "heroId": "aphelios",
    "heroName": "残月之肃 厄斐琉斯",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=523",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'ziggs', 'kogmaw', 'nilah', 'senna', 'zeri', 'missfortune', 'jinx', 'twitch', 'ashe'],
      "reasons": ["对线胜率 43.50%", "对线胜率 43.94%", "对线胜率 45.04%", "对线胜率 45.41%", "对线胜率 46.90%", "对线胜率 47.04%", "对线胜率 47.52%", "对线胜率 47.77%", "对线胜率 47.81%", "对线胜率 47.91%"]
    },
    "counters": {
      "heroes": ['kaisa', 'kalista', 'vayne', 'lucian', 'caitlyn', 'ezreal', 'tristana', 'yunara', 'draven'],
      "reasons": ["对线胜率 53.10%", "对线胜率 53.09%", "对线胜率 51.71%", "对线胜率 51.52%", "对线胜率 50.92%", "对线胜率 50.76%", "对线胜率 50.57%", "对线胜率 50.35%", "对线胜率 50.33%"]
    }
  },
  {
    "heroId": "rell",
    "heroName": "镕铁少女 芮尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=526",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['veigar', 'camille', 'velkoz', 'zilean', 'janna', 'shaco', 'taric', 'alistar', 'teemo', 'swain'],
      "reasons": ["对线胜率 42.86%", "对线胜率 45.00%", "对线胜率 46.77%", "对线胜率 46.93%", "对线胜率 47.22%", "对线胜率 48.21%", "对线胜率 48.43%", "对线胜率 48.97%", "对线胜率 48.99%", "对线胜率 49.28%"]
    },
    "counters": {
      "heroes": ['missfortune', 'leesin', 'ashe', 'elise', 'mel', 'malphite', 'fiddlesticks', 'renata', 'sona', 'nautilus'],
      "reasons": ["对线胜率 62.50%", "对线胜率 59.50%", "对线胜率 57.85%", "对线胜率 57.66%", "对线胜率 57.18%", "对线胜率 57.02%", "对线胜率 56.83%", "对线胜率 56.08%", "对线胜率 55.87%", "对线胜率 55.34%"]
    }
  },
  {
    "heroId": "pyke",
    "heroName": "血港鬼影 派克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=555",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['elise', 'taric', 'poppy', 'teemo', 'rakan', 'maokai', 'sona', 'rell', 'nautilus', 'fiddlesticks'],
      "reasons": ["对线胜率 39.73%", "对线胜率 40.67%", "对线胜率 42.86%", "对线胜率 43.97%", "对线胜率 44.29%", "对线胜率 44.92%", "对线胜率 45.44%", "对线胜率 45.72%", "对线胜率 45.99%", "对线胜率 46.01%"]
    },
    "counters": {
      "heroes": ['missfortune', 'velkoz', 'senna', 'seraphine', 'veigar', 'ashe', 'leesin', 'camille', 'pantheon', 'mel'],
      "reasons": ["对线胜率 56.35%", "对线胜率 52.60%", "对线胜率 51.61%", "对线胜率 51.19%", "对线胜率 51.12%", "对线胜率 51.05%", "对线胜率 50.28%", "对线胜率 50.26%", "对线胜率 50.20%", "对线胜率 50.04%"]
    }
  },
  {
    "heroId": "vex",
    "heroName": "愁云使者 薇古丝",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=711",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['swain', 'pantheon', 'chogath', 'annie', 'sion', 'zoe', 'ziggs', 'hwei', 'veigar', 'viktor'],
      "reasons": ["对线胜率 40.00%", "对线胜率 44.98%", "对线胜率 45.26%", "对线胜率 46.13%", "对线胜率 47.30%", "对线胜率 47.95%", "对线胜率 47.98%", "对线胜率 48.20%", "对线胜率 48.39%", "对线胜率 49.84%"]
    },
    "counters": {
      "heroes": ['darius', 'graves', 'smolder', 'jax', 'sylas', 'azir', 'garen', 'tristana', 'yone', 'aatrox'],
      "reasons": ["对线胜率 62.50%", "对线胜率 62.32%", "对线胜率 60.10%", "对线胜率 60.00%", "对线胜率 59.88%", "对线胜率 59.35%", "对线胜率 59.15%", "对线胜率 59.13%", "对线胜率 58.77%", "对线胜率 58.51%"]
    }
  },
  {
    "heroId": "yone",
    "heroName": "封魔剑魂 永恩",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=777",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['annie', 'vex', 'ahri', 'ziggs', 'lissandra', 'kayle', 'twistedfate', 'akshan', 'kled', 'rammus'],
      "reasons": ["对线胜率 40.70%", "对线胜率 41.23%", "对线胜率 42.56%", "对线胜率 43.26%", "对线胜率 43.85%", "对线胜率 44.69%", "对线胜率 44.75%", "对线胜率 45.00%", "对线胜率 45.07%", "对线胜率 45.12%"]
    },
    "counters": {
      "heroes": ['lux', 'gwen', 'ksante', 'monkeyking', 'yorick', 'teemo', 'drmundo', 'rumble', 'tahmkench', 'sylas'],
      "reasons": ["对线胜率 66.67%", "对线胜率 63.46%", "对线胜率 60.77%", "对线胜率 58.82%", "对线胜率 58.70%", "对线胜率 58.33%", "对线胜率 57.73%", "对线胜率 57.14%", "对线胜率 56.30%", "对线胜率 55.51%"]
    }
  },
  {
    "heroId": "ambessa",
    "heroName": "铁血狼母 安蓓萨",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=799",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['viktor', 'ahri', 'malzahar', 'reksai', 'taliyah', 'ryze', 'elise', 'fiddlesticks', 'singed', 'zaahen'],
      "reasons": ["对线胜率 39.22%", "对线胜率 42.19%", "对线胜率 45.21%", "对线胜率 46.16%", "对线胜率 46.64%", "对线胜率 47.37%", "对线胜率 47.79%", "对线胜率 48.18%", "对线胜率 48.20%", "对线胜率 48.33%"]
    },
    "counters": {
      "heroes": ['ksante', 'varus', 'galio', 'yone', 'ornn', 'zed', 'kayle', 'vladimir', 'yasuo', 'shaco'],
      "reasons": ["对线胜率 59.49%", "对线胜率 58.70%", "对线胜率 58.62%", "对线胜率 58.03%", "对线胜率 57.81%", "对线胜率 57.29%", "对线胜率 55.95%", "对线胜率 55.88%", "对线胜率 55.15%", "对线胜率 54.96%"]
    }
  },
  {
    "heroId": "mel",
    "heroName": "流光镜影 梅尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=800",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'annie', 'taric', 'sion', 'milio', 'soraka', 'rakan', 'fizz', 'xerath', 'braum'],
      "reasons": ["对线胜率 40.77%", "对线胜率 40.96%", "对线胜率 41.78%", "对线胜率 41.88%", "对线胜率 42.06%", "对线胜率 42.18%", "对线胜率 42.35%", "对线胜率 42.53%", "对线胜率 42.54%", "对线胜率 42.68%"]
    },
    "counters": {
      "heroes": ['fiora', 'gangplank', 'darius', 'smolder', 'drmundo', 'aatrox', 'malphite', 'leesin', 'jayce', 'tryndamere'],
      "reasons": ["对线胜率 64.71%", "对线胜率 61.67%", "对线胜率 56.36%", "对线胜率 55.86%", "对线胜率 55.45%", "对线胜率 55.09%", "对线胜率 55.08%", "对线胜率 54.35%", "对线胜率 54.10%", "对线胜率 53.62%"]
    }
  },
  {
    "heroId": "yunara",
    "heroName": "不破之誓 芸阿娜",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=804",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['aurelionsol', 'zeri', 'nilah', 'ashe', 'smolder', 'missfortune', 'senna', 'jinx', 'xayah', 'twitch'],
      "reasons": ["对线胜率 41.81%", "对线胜率 44.95%", "对线胜率 45.59%", "对线胜率 46.97%", "对线胜率 46.99%", "对线胜率 47.18%", "对线胜率 47.41%", "对线胜率 47.53%", "对线胜率 48.05%", "对线胜率 48.30%"]
    },
    "counters": {
      "heroes": ['kalista', 'kaisa', 'lucian', 'jhin', 'varus', 'ezreal', 'kogmaw'],
      "reasons": ["对线胜率 51.34%", "对线胜率 51.13%", "对线胜率 50.54%", "对线胜率 50.35%", "对线胜率 50.27%", "对线胜率 50.23%", "对线胜率 50.07%"]
    }
  },
  {
    "heroId": "sett",
    "heroName": "腕豪 瑟提",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=875",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['nami', 'ahri', 'neeko', 'trundle', 'braum', 'milio', 'janna', 'maokai', 'veigar', 'karma'],
      "reasons": ["对线胜率 34.76%", "对线胜率 37.62%", "对线胜率 39.22%", "对线胜率 39.66%", "对线胜率 39.74%", "对线胜率 39.76%", "对线胜率 40.32%", "对线胜率 40.74%", "对线胜率 40.85%", "对线胜率 41.55%"]
    },
    "counters": {
      "heroes": ['pantheon', 'shen', 'monkeyking', 'yorick', 'mel', 'ksante', 'diana', 'chogath', 'yasuo', 'gragas'],
      "reasons": ["对线胜率 62.32%", "对线胜率 60.26%", "对线胜率 59.79%", "对线胜率 58.33%", "对线胜率 58.29%", "对线胜率 57.98%", "对线胜率 57.83%", "对线胜率 57.49%", "对线胜率 57.32%", "对线胜率 56.67%"]
    }
  },
  {
    "heroId": "lillia",
    "heroName": "含羞蓓蕾 莉莉娅",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=876",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['reksai', 'taliyah', 'gangplank', 'varus', 'kayle', 'briar', 'elise', 'rengar', 'brand', 'pantheon'],
      "reasons": ["对线胜率 44.42%", "对线胜率 44.59%", "对线胜率 45.14%", "对线胜率 47.26%", "对线胜率 47.49%", "对线胜率 47.66%", "对线胜率 47.67%", "对线胜率 47.84%", "对线胜率 47.90%", "对线胜率 47.93%"]
    },
    "counters": {
      "heroes": ['rammus', 'sejuani', 'malphite', 'shyvana', 'zed', 'kaisa', 'amumu', 'leesin', 'shaco', 'sylas'],
      "reasons": ["对线胜率 58.27%", "对线胜率 56.87%", "对线胜率 56.86%", "对线胜率 56.31%", "对线胜率 55.91%", "对线胜率 55.87%", "对线胜率 55.47%", "对线胜率 55.47%", "对线胜率 55.37%", "对线胜率 55.09%"]
    }
  },
  {
    "heroId": "gwen",
    "heroName": "灵罗娃娃 格温",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=887",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['vayne', 'kayle', 'reksai', 'kennen', 'zyra', 'zaahen', 'teemo', 'ornn', 'pantheon', 'gragas'],
      "reasons": ["对线胜率 41.16%", "对线胜率 43.15%", "对线胜率 45.53%", "对线胜率 45.71%", "对线胜率 45.82%", "对线胜率 46.73%", "对线胜率 46.76%", "对线胜率 46.82%", "对线胜率 47.01%", "对线胜率 47.11%"]
    },
    "counters": {
      "heroes": ['diana', 'mordekaiser', 'zed', 'poppy', 'smolder', 'tryndamere', 'drmundo', 'tahmkench', 'urgot', 'sejuani'],
      "reasons": ["对线胜率 59.76%", "对线胜率 59.62%", "对线胜率 57.24%", "对线胜率 56.50%", "对线胜率 56.50%", "对线胜率 56.14%", "对线胜率 55.96%", "对线胜率 55.88%", "对线胜率 55.75%", "对线胜率 55.33%"]
    }
  },
  {
    "heroId": "renata",
    "heroName": "炼金男爵 烈娜塔 · 戈拉斯克",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=888",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['shaco', 'bard', 'rell', 'velkoz', 'blitzcrank', 'brand', 'soraka', 'poppy', 'sylas', 'zilean'],
      "reasons": ["对线胜率 39.22%", "对线胜率 43.55%", "对线胜率 43.92%", "对线胜率 45.10%", "对线胜率 45.55%", "对线胜率 46.71%", "对线胜率 47.46%", "对线胜率 49.12%", "对线胜率 49.33%", "对线胜率 49.33%"]
    },
    "counters": {
      "heroes": ['malphite', 'sona', 'jarvaniv', 'nautilus', 'karma', 'alistar', 'swain', 'tahmkench', 'milio', 'leona'],
      "reasons": ["对线胜率 63.49%", "对线胜率 56.98%", "对线胜率 56.86%", "对线胜率 56.55%", "对线胜率 55.19%", "对线胜率 54.93%", "对线胜率 54.60%", "对线胜率 54.41%", "对线胜率 54.40%", "对线胜率 54.28%"]
    }
  },
  {
    "heroId": "aurora",
    "heroName": "双界灵兔 阿萝拉",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=893",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akshan', 'vex', 'katarina', 'aatrox', 'velkoz', 'sion', 'zoe', 'ahri', 'aurelionsol', 'fizz'],
      "reasons": ["对线胜率 44.65%", "对线胜率 45.16%", "对线胜率 45.49%", "对线胜率 45.65%", "对线胜率 45.80%", "对线胜率 45.85%", "对线胜率 46.00%", "对线胜率 47.12%", "对线胜率 47.19%", "对线胜率 47.79%"]
    },
    "counters": {
      "heroes": ['renekton', 'tryndamere', 'malphite', 'yorick', 'darius', 'nasus', 'garen', 'fiora', 'chogath', 'smolder'],
      "reasons": ["对线胜率 69.23%", "对线胜率 63.54%", "对线胜率 60.44%", "对线胜率 59.62%", "对线胜率 58.70%", "对线胜率 58.49%", "对线胜率 58.42%", "对线胜率 58.18%", "对线胜率 57.76%", "对线胜率 57.06%"]
    }
  },
  {
    "heroId": "nilah",
    "heroName": "不羁之悦 尼菈",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=895",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['xayah', 'kogmaw', 'kalista', 'jinx', 'ziggs', 'corki'],
      "reasons": ["对线胜率 44.76%", "对线胜率 47.13%", "对线胜率 47.97%", "对线胜率 48.88%", "对线胜率 48.99%", "对线胜率 49.06%"]
    },
    "counters": {
      "heroes": ['kaisa', 'twitch', 'samira', 'ezreal', 'varus', 'aphelios', 'missfortune', 'yunara', 'zeri', 'caitlyn'],
      "reasons": ["对线胜率 58.35%", "对线胜率 56.26%", "对线胜率 55.47%", "对线胜率 55.40%", "对线胜率 55.05%", "对线胜率 54.59%", "对线胜率 54.55%", "对线胜率 54.41%", "对线胜率 54.34%", "对线胜率 54.10%"]
    }
  },
  {
    "heroId": "ksante",
    "heroName": "纳祖芒荣耀 奎桑提",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=897",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['ryze', 'ahri', 'kaisa', 'zyra', 'urgot', 'taliyah', 'malzahar', 'elise', 'poppy', 'singed'],
      "reasons": ["对线胜率 35.29%", "对线胜率 37.66%", "对线胜率 40.81%", "对线胜率 40.82%", "对线胜率 41.77%", "对线胜率 42.06%", "对线胜率 43.21%", "对线胜率 43.30%", "对线胜率 43.64%", "对线胜率 43.91%"]
    },
    "counters": {
      "heroes": ['rammus', 'malphite', 'drmundo', 'lissandra', 'gragas', 'olaf', 'pantheon', 'aatrox', 'ornn', 'sylas'],
      "reasons": ["对线胜率 55.76%", "对线胜率 54.89%", "对线胜率 52.87%", "对线胜率 52.87%", "对线胜率 52.75%", "对线胜率 52.38%", "对线胜率 52.00%", "对线胜率 51.92%", "对线胜率 51.92%", "对线胜率 51.49%"]
    }
  },
  {
    "heroId": "smolder",
    "heroName": "炽炎雏龙 斯莫德",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=901",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['swain', 'vladimir', 'vex', 'viktor', 'fiora', 'zoe', 'briar', 'hwei', 'xerath', 'cassiopeia'],
      "reasons": ["对线胜率 33.03%", "对线胜率 38.39%", "对线胜率 39.90%", "对线胜率 40.72%", "对线胜率 40.85%", "对线胜率 40.94%", "对线胜率 42.19%", "对线胜率 42.44%", "对线胜率 42.48%", "对线胜率 42.52%"]
    },
    "counters": {
      "heroes": ['ksante', 'sion', 'shaco', 'graves', 'varus', 'jayce', 'rumble', 'darius', 'corki', 'singed'],
      "reasons": ["对线胜率 57.88%", "对线胜率 57.86%", "对线胜率 56.51%", "对线胜率 55.20%", "对线胜率 55.08%", "对线胜率 54.91%", "对线胜率 53.69%", "对线胜率 53.66%", "对线胜率 53.50%", "对线胜率 53.30%"]
    }
  },
  {
    "heroId": "milio",
    "heroName": "明烛 米利欧",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=902",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['elise', 'renata', 'senna', 'rell', 'rakan', 'thresh', 'velkoz'],
      "reasons": ["对线胜率 45.52%", "对线胜率 45.60%", "对线胜率 47.26%", "对线胜率 48.22%", "对线胜率 48.83%", "对线胜率 49.23%", "对线胜率 49.34%"]
    },
    "counters": {
      "heroes": ['missfortune', 'veigar', 'sett', 'leblanc', 'mel', 'anivia', 'shen', 'poppy', 'ashe', 'malphite'],
      "reasons": ["对线胜率 65.52%", "对线胜率 61.51%", "对线胜率 60.24%", "对线胜率 58.40%", "对线胜率 57.94%", "对线胜率 57.45%", "对线胜率 57.14%", "对线胜率 57.08%", "对线胜率 56.63%", "对线胜率 56.54%"]
    }
  },
  {
    "heroId": "zaahen",
    "heroName": "不落魔锋 亚恒",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=904",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['kennen', 'brand', 'evelynn', 'urgot', 'varus', 'teemo', 'fiddlesticks', 'zyra', 'vayne', 'reksai'],
      "reasons": ["对线胜率 41.60%", "对线胜率 42.34%", "对线胜率 45.09%", "对线胜率 45.23%", "对线胜率 45.42%", "对线胜率 45.95%", "对线胜率 45.96%", "对线胜率 46.02%", "对线胜率 46.46%", "对线胜率 47.28%"]
    },
    "counters": {
      "heroes": ['jhin', 'ambessa', 'yasuo', 'riven', 'ksante', 'sylas', 'darius', 'kaisa', 'jayce', 'jarvaniv'],
      "reasons": ["对线胜率 62.40%", "对线胜率 61.84%", "对线胜率 57.61%", "对线胜率 56.99%", "对线胜率 56.55%", "对线胜率 56.38%", "对线胜率 56.34%", "对线胜率 55.93%", "对线胜率 55.88%", "对线胜率 55.86%"]
    }
  },
  {
    "heroId": "hwei",
    "heroName": "异画师 彗",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=910",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['akshan', 'annie', 'velkoz', 'zoe', 'xerath', 'ahri', 'brand', 'lux', 'qiyana', 'naafiri'],
      "reasons": ["对线胜率 44.73%", "对线胜率 46.29%", "对线胜率 46.83%", "对线胜率 46.85%", "对线胜率 47.63%", "对线胜率 48.01%", "对线胜率 48.16%", "对线胜率 48.86%", "对线胜率 49.08%", "对线胜率 49.15%"]
    },
    "counters": {
      "heroes": ['jax', 'drmundo', 'aatrox', 'malphite', 'garen', 'swain', 'smolder', 'tristana', 'azir', 'graves'],
      "reasons": ["对线胜率 65.38%", "对线胜率 63.93%", "对线胜率 59.81%", "对线胜率 59.65%", "对线胜率 59.38%", "对线胜率 58.54%", "对线胜率 57.56%", "对线胜率 57.23%", "对线胜率 57.02%", "对线胜率 56.54%"]
    }
  },
  {
    "heroId": "naafiri",
    "heroName": "百裂冥犬 纳亚菲利",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=950",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": ['swain', 'lissandra', 'taliyah', 'singed', 'kayle', 'nocturne', 'reksai', 'belveth', 'briar', 'ornn'],
      "reasons": ["对线胜率 42.64%", "对线胜率 43.00%", "对线胜率 44.65%", "对线胜率 44.93%", "对线胜率 45.60%", "对线胜率 45.85%", "对线胜率 46.01%", "对线胜率 46.19%", "对线胜率 47.14%", "对线胜率 47.35%"]
    },
    "counters": {
      "heroes": ['sylas', 'darius', 'yone', 'yorick', 'aatrox', 'morgana', 'yasuo', 'nasus', 'smolder', 'leblanc'],
      "reasons": ["对线胜率 70.18%", "对线胜率 62.34%", "对线胜率 62.34%", "对线胜率 58.82%", "对线胜率 58.46%", "对线胜率 58.09%", "对线胜率 57.69%", "对线胜率 57.53%", "对线胜率 57.27%", "对线胜率 57.21%"]
    }
  }
,
  {
    "heroId": "skarner",
    "heroName": "上古领主 斯卡纳",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=72",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": [],
      "reasons": []
    },
    "counters": {
      "heroes": [],
      "reasons": []
    }
  }
,
  {
    "heroId": "udyr",
    "heroName": "兽灵行者 乌迪尔",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=77",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": [],
      "reasons": []
    },
    "counters": {
      "heroes": [],
      "reasons": []
    }
  }
,
  {
    "heroId": "quinn",
    "heroName": "德玛西亚之翼 奎因",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=133",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": [],
      "reasons": []
    },
    "counters": {
      "heroes": [],
      "reasons": []
    }
  }
,
  {
    "heroId": "ivern",
    "heroName": "翠神 艾翁",
    "heroUrl": "https://101.qq.com/#/hero-detail?heroid=427",
    "bestPartners": {
      "heroes": [],
      "reasons": []
    },
    "counteredBy": {
      "heroes": [],
      "reasons": []
    },
    "counters": {
      "heroes": [],
      "reasons": []
    }
  }
];
const ROUTE_TYPES = {
  AR: { key: 'AR', name: 'All Rocks Hands and Feet', description: '' },
  ARF: { key: 'ARF', name: 'All Rocks Feet', description: '' },
  ARH: { key: 'ARH', name: 'All Rocks Hands', description: '' },
  noF: { key: 'noF', name: 'No Rocks Feet', description: '' },
  ENG: { key: 'ENG', name: 'English', description: '' },
}

const ROUTE_GRADES = {
  EASY: { key: 'EASY', name: 'Easy', ydsGrade: '5.6', order: 1 },
  EASY_MODERATE: { key: 'EASY_MODERATE', name: 'Easy-moderate', ydsGrade: '5.8', order: 2 },
  MODERATE: { key: 'MODERATE', name: 'Moderate', ydsGrade: '5.9', order: 3 },
  MODERATE_HARD: { key: 'MODERATE_HARD', name: 'Moderate-hard', ydsGrade: '5.10', order: 4 },
  HARD: { key: 'HARD', name: 'Hard', ydsGrade: '5.11-', order: 5 },
  VERY_HARD: { key: 'VERY_HARD', name: 'Very hard', ydsGrade: '5.11+', order: 6 },
  EXTREMELY_HARD: { key: 'EXTREMELY_HARD', name: 'Extremely hard', ydsGrade: '5.12-', order: 7 },
  EXTREME: { key: 'EXTREME', name: 'Extreme', ydsGrade: '5.12+', order: 8 },
}

const ROUTE_RISKS = {
  LOW: { key: 'LOW', name: 'Low risk of injury' },
  MODERATE: { key: 'MODERATE', name: 'Risk of injury' },
  HIGH: { key: 'HIGH', name: 'Risk of serious injury.' },
}

const southTowerWall = {
  key: 'south-tower',
  name: 'South Tower',
  image: 'south-tower.png',
  width: 303,
  height: 485,
  rocks: {
    edge1: {
      width: 10,
      height: 30,
      top: 387,
      left: 12,
      label: 'edge',
    },
    edge2: {
      width: 10,
      height: 30,
      top: 412,
      left: 294,
      label: 'edge',
    },
    edge3: {
      top: 1,
      left: 182,
      width: 24,
      height: 6,
      label: 'edge',
    },
    edge4: {
      top: 8,
      left: 226,
      width: 20,
      height: 7,
      label: 'edge',
    },
    edge5: {
      top: 477,
      left: 180,
      width: 32,
      height: 6,
    },
    edge6: {
      top: 303,
      left: 233,
      width: 6,
      height: 17,
      label: 'edge',
    },
    edge7: {
      top: 274,
      left: 287,
      width: 7,
      height: 31,
      label: 'edge',
    },
    pocket1: {
      width: 6,
      height: 6,
      left: 123,
      top: 352,
      label: 'pocket',
    },
    pocket2: {
      top: 237,
      left: 132,
      width: 6,
      height: 6,
      label: 'pocket',
    },
    pocket3: {
      top: 383,
      left: 204,
      width: 6,
      height: 6,
      label: 'pocket',
    },
    pocket4: {
      top: 391,
      left: 243,
      width: 6,
      height: 6,
      label: 'pocket',
    },
    notch1: {
      top: 369,
      left: 240,
      width: 4,
      height: 10,
      label: 'notch',
    },
    rock1: {
      width: 11,
      height: 13,
      top: 414,
      left: 45,
    },
    rock2: {
      width: 9,
      height: 14,
      left: 100,
      top: 408,
    },
    rock3: {
      width: 7,
      height: 11,
      top: 407,
      left: 149,
    },
    rock4: {
      width: 11,
      height: 13,
      top: 392,
      left: 162,
    },
    rock5: {
      width: 12,
      height: 16,
      top: 383,
      left: 214,
    },
    rock6: {
      width: 20,
      height: 5,
      left: 56,
      top: 354,
      label: 'texture',
    },
    rock7: {
      width: 8,
      height: 7,
      left: 91,
      top: 327,
    },
    rock8: {
      width: 12,
      height: 12,
      left: 52,
      top: 291,
    },
    rock9: {
      width: 16,
      height: 17,
      left: 99,
      top: 265,
    },
    rock10: {
      width: 7,
      height: 12,
      left: 131,
      top: 216,
    },
    rock11: {
      width: 6,
      height: 12,
      left: 153,
      top: 173,
    },
    rock12: {
      width: 6,
      height: 12,
      left: 153,
      top: 173,
    },
    rock13: {
      width: 17,
      height: 22,
      left: 150,
      top: 140,
    },
    rock14: {
      width: 7,
      height: 11,
      left: 115,
      top: 309,
    },
    rock15: {
      width: 12,
      height: 20,
      left: 168,
      top: 267,
    },
    rock16: {
      width: 16,
      height: 12,
      left: 200,
      top: 202,
    },
    rock17: {
      top: 325,
      left: 154,
      width: 14,
      height: 16,
    },
    rock18: {
      top: 230,
      left: 171,
      width: 18,
      height: 12,
    },
    rock19: {
      top: 164,
      left: 181,
      width: 14,
      height: 14,
    },
    rock20: {
      top: 124,
      left: 210,
      width: 13,
      height: 18,
    },
    rock21: {
      top: 105,
      left: 235,
      width: 14,
      height: 8,
    },
    rock22: {
      top: 79,
      left: 194,
      width: 9,
      height: 14,
    },
    rock23: {
      top: 47,
      left: 199,
      width: 14,
      height: 7,
    },
    rock24: {
      top: 30,
      left: 160,
      width: 13,
      height: 13,
    },
    rock26: {
      top: 336,
      left: 24,
      width: 6,
      height: 33,
    },
    rock27: {
      top: 360,
      left: 114,
      width: 7,
      height: 17,
    },
    rock28: {
      top: 322,
      left: 249,
      width: 16,
      height: 15,
    },
    rock29: {
      top: 318,
      left: 200,
      width: 8,
      height: 10,
    },
    rock30: {
      top: 310,
      left: 150,
      width: 11,
      height: 8,
    },
    rock31: {
      top: 360,
      left: 149,
      width: 11,
      height: 13,
    },
    rock32: {
      top: 379,
      left: 26,
      width: 8,
      height: 10,
    },
    rock33: {
      top: 376,
      left: 85,
      width: 10,
      height: 9,
    },
    rock34: {
      top: 350,
      left: 164,
      width: 10,
      height: 12,
    },
    rock35: {
      top: 236,
      left: 87,
      width: 10,
      height: 10,
    },
    rock37: {
      top: 131,
      left: 233,
      width: 21,
      height: 11,
    },
    rock38: {
      top: 351,
      left: 135,
      width: 7,
      height: 6,
    },
    rock39: {
      top: 242,
      left: 156,
      width: 10,
      height: 7,
    },
    rock40: {
      top: 163,
      left: 242,
      width: 16,
      height: 10,
    },
    rock41: {
      top: 76,
      left: 242,
      width: 19,
      height: 19,
    },
    rock42: {
      top: 465,
      left: 10,
      width: 11,
      height: 7,
    },
    rock43: {
      top: 467,
      left: 60,
      width: 10,
      height: 8,
    },
    rock44: {
      top: 469,
      left: 75,
      width: 12,
      height: 7,
    },
    rock45: {
      top: 469,
      left: 105,
      width: 12,
      height: 6,
    },
    rock46: {
      top: 469,
      left: 131,
      width: 12,
      height: 6,
    },
    rock47: {
      top: 464,
      left: 147,
      width: 12,
      height: 9,
    },
    rock48: {
      top: 469,
      left: 168,
      width: 12,
      height: 7,
    },
    rock49: {
      top: 472,
      left: 232,
      width: 11,
      height: 5,
    },
    rock50: {
      top: 471,
      left: 250,
      width: 13,
      height: 5,
    },
    rock51: {
      top: 461,
      left: 266,
      width: 18,
      height: 12,
    },
    rock52: {
      top: 352,
      left: 33,
      width: 8,
      height: 11,
    },
    rock53: {
      top: 229,
      left: 62,
      width: 13,
      height: 13,
    },
    rock54: {
      top: 188,
      left: 114,
      width: 14,
      height: 9,
    },
    rock55: {
      top: 391,
      left: 186,
      width: 6,
      height: 6,
      label: 'microhold',
    },
    rock56: {
      top: 325,
      left: 135,
      width: 8,
      height: 9,
    },
    rock57: {
      top: 194,
      left: 165,
      width: 19,
      height: 12,
    },
    rock58: {
      top: 322,
      left: 174,
      width: 8,
      height: 10,
    },
  },
  routes: {
    route1: {
      name: null,
      description: 'Low traverse, left to right; Tricky beta',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'edge1',
          label: 'start',
        },
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock5',
        },
        {
          key: 'edge2',
          label: 'end',
        },
      ],
    },
    route2: {
      name: "Mohler's Mayhem",
      description: 'Stem start to 1st hold',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
          label: 'start',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock11',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
          label: 'end',
        },
      ],
    },
    route3: {
      name: 'Jingus',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
          label: 'start',
        },
        {
          key: 'pocket1',
          label: 'start',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock16',
        },
        {
          key: 'rock13',
          label: 'end',
        },
      ],
    },
    route4: {
      name: 'Air to Spare',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.HIGH,
      sequence: [
        {
          key: 'rock17',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock20',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock23',
        },
        {
          key: 'rock24',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route5: {
      name: 'Four to Flag',
      description: 'Use cheater rock if short',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock17',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route6: {
      name: '5.13 Bigwall problem',
      description: 'Wicked finish',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'pocket1',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock9',
        },
        {
          key: 'pocket2',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route7: {
      name: 'Albatross',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock26',
          label: 'start',
        },
        {
          key: 'rock27',
        },
        {
          key: 'rock5',
        },
        {
          key: 'rock28',
        },
        {
          key: 'rock29',
        },
        {
          key: 'rock30',
        },
        {
          key: 'rock8',
          label: 'end',
        },
      ],
    },
    route8: {
      name: null,
      description: 'Classic 5.9',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock31',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock30',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route9: {
      name: 'Hobbit Pockets',
      description: 'Tough highstep; Sitstart',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock6',
        },
        {
          key: 'pocket1',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock9',
        },
        {
          key: 'pocket2',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
        },
      ],
    },
    route10: {
      name: "Rubik's cube",
      description: 'Left to right',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock32',
        },
        {
          key: 'rock33',
        },
        {
          key: 'rock34',
        },
        {
          key: 'pocket3',
        },
        {
          key: 'pocket4',
        },
        {
          key: 'edge2',
        },
      ],
    },
    route11: {
      name: 'Curly Fries',
      description: 'Lots of texture, figure it out',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'pocket1',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock35',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route12: {
      name: 'Dance of the Leopardslug',
      description: 'Airy',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.HIGH,
      sequence: [
        {
          key: 'notch1',
          label: 'notch below crack only',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock37',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock23',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route13: {
      name: 'Tower of power',
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.HIGH,
      sequence: [
        {
          key: 'rock38',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock39',
        },
        {
          key: 'rock16',
        },
        {
          key: 'rock40',
        },
        {
          key: 'rock20',
        },
        {
          key: 'rock41',
        },
        {
          key: 'rock23',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route14: {
      name: null,
      description: 'Classic low traverse',
      type: ROUTE_TYPES.ARH,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock42',
        },
        {
          key: 'rock43',
        },
        {
          key: 'rock44',
        },
        {
          key: 'rock45',
        },
        {
          key: 'rock46',
        },
        {
          key: 'rock47',
        },
        {
          key: 'rock48',
        },
        {
          key: 'rock49',
        },
        {
          key: 'rock50',
        },
        {
          key: 'rock51',
        },
      ],
    },
    route15: {
      name: 'Airwolf',
      description: 'Establish on 1st hold; No texture hold; Big block out for feet',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.HIGH,
      sequence: [
        {
          key: 'rock27',
        },
        {
          key: 'rock52',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock53',
        },
        {
          key: 'rock54',
        },
        {
          key: 'rock13',
        },
      ],
      notes: [
        {
          key: 'rock6',
          label: 'out!',
        },
      ],
    },
    route16: {
      name: 'Toasted Harshmellows',
      description: 'Microedge 1st hold - yikes!',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock55',
        },
        {
          key: 'rock56',
        },
        {
          key: 'rock39',
        },
        {
          key: 'rock57',
        },
        {
          key: 'rock13',
        },
      ],
    },
    route17: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock56',
        },
        {
          key: 'rock58',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock39',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route18: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock56',
        },
        {
          key: 'rock58',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock39',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route19: {
      name: null,
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock56',
        },
        {
          key: 'rock58',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock39',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route20: {
      name: 'Schizo',
      description: 'Left side of body on left side of crack; Right side on right',
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'edge5',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route21: {
      name: 'Schizo',
      description: 'Left side of body on left side of crack; Right side on right',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'edge5',
        },
        {
          key: 'rock19',
        },
      ],
    },
    route22: {
      name: 'Adhesion',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock30',
        },
        {
          key: 'edge6',
          type: 'left side only',
        },
        {
          key: 'edge7',
        },
      ],
    },
  },
}

const northRoof = {
  key: 'north-roof',
  name: 'North Roof',
  image: 'north-roof.png',
  width: 965,
  height: 850,
  rocks: {
    edge1: {
      top: 24,
      left: 451,
      width: 73,
      height: 25,
      type: 'edge',
    },
    edge2: {
      top: 16,
      left: 276,
      width: 65,
      height: 27,
      type: 'edge',
    },
    edge3: {
      top: 8,
      left: 110,
      width: 85,
      height: 24,
      type: 'edge',
    },
    edge4: {
      top: 369,
      left: 807,
      width: 32,
      height: 71,
      type: 'edge',
    },
    edge5: {
      top: 4,
      left: 4,
      width: 51,
      height: 30,
      type: 'edge',
    },
    rock0: {
      top: 425,
      left: 739,
      width: 41,
      height: 38,
    },
    rock1: {
      top: 252,
      left: 679,
      width: 26,
      height: 18,
    },
    rock2: {
      top: 209,
      left: 638,
      width: 34,
      height: 23,
    },
    rock3: {
      top: 187,
      left: 559,
      width: 44,
      height: 26,
    },
    rock4: {
      top: 122,
      left: 490,
      width: 24,
      height: 30,
    },
    rock5: {
      top: 433,
      left: 453,
      width: 61,
      height: 26,
    },
    rock6: {
      top: 252,
      left: 364,
      width: 22,
      height: 26,
    },
    rock7: {
      top: 95,
      left: 290,
      width: 41,
      height: 31,
    },
    rock8: {
      top: 416,
      left: 195,
      width: 51,
      height: 86,
    },
    rock9: {
      top: 240,
      left: 87,
      width: 19,
      height: 28,
    },
    rock10: {
      top: 160,
      left: 79,
      width: 33,
      height: 37,
    },
    rock11: {
      top: 555,
      left: 268,
      width: 27,
      height: 54,
    },
    rock12: {
      top: 457,
      left: 354,
      width: 28,
      height: 18,
    },
    rock13: {
      top: 205,
      left: 165,
      width: 28,
      height: 27,
    },
    rock14: {
      top: 750,
      left: 209,
      width: 42,
      height: 30,
    },
    rock15: {
      top: 782,
      left: 390,
      width: 63,
      height: 33,
    },
    rock16: {
      top: 786,
      left: 518,
      width: 26,
      height: 25,
    },
    rock17: {
      top: 775,
      left: 571,
      width: 40,
      height: 32,
    },
    rock18: {
      top: 775,
      left: 679,
      width: 40,
      height: 38,
    },
    rock19: {
      top: 794,
      left: 739,
      width: 36,
      height: 24,
    },
    rock20: {
      top: 784,
      left: 845,
      width: 57,
      height: 33,
    },
    rock21: {
      top: 451,
      left: 128,
      width: 34,
      height: 34,
    },
    rock22: {
      top: 466,
      left: 533,
      width: 38,
      height: 27,
    },
    rock23: {
      top: 367,
      left: 683,
      width: 54,
      height: 31,
    },
    rock24: {
      top: 209,
      left: 217,
      width: 23,
      height: 21,
    },
    rock25: {
      top: 527,
      left: 739,
      width: 39,
      height: 46,
    },
    rock26: {
      top: 402,
      left: 512,
      width: 55,
      height: 55,
    },
    rock27: {
      top: 364,
      left: 266,
      width: 75,
      height: 55,
    },
    rock28: {
      top: 295,
      left: 89,
      width: 39,
      height: 51,
    },
    rock29: {
      top: 124,
      left: 131,
      width: 44,
      height: 43,
    },
    rock30: {
      top: 535,
      left: 194,
      width: 29,
      height: 34,
    },
    rock31: {
      top: 531,
      left: 381,
      width: 59,
      height: 53,
    },
    rock32: {
      top: 516,
      left: 548,
      width: 53,
      height: 55,
    },
    rock33: {
      top: 301,
      left: 577,
      width: 34,
      height: 32,
    },
    rock34: {
      top: 293,
      left: 386,
      width: 31,
      height: 44,
    },
    rock35: {
      top: 44,
      left: 99,
      width: 44,
      height: 72,
    },
    rock36: {
      top: 579,
      left: 169,
      width: 46,
      height: 61,
    },
    rock37: {
      top: 365,
      left: 118,
      width: 30,
      height: 37,
    },
    rock38: {
      top: 145,
      left: 44,
      width: 30,
      height: 45,
    },
    rock39: {
      top: 48,
      left: 46,
      width: 40,
      height: 40,
    },
    rock40: {
      top: 354,
      left: 569,
      width: 38,
      height: 50,
    },
    rock41: {
      top: 244,
      left: 405,
      width: 40,
      height: 26,
      type: 'hole in crack',
    },
    rock42: {
      top: 185,
      left: 249,
      width: 42,
      height: 32,
    },
    rock43: {
      top: 160,
      left: 327,
      width: 37,
      height: 30,
    },
    rock44: {
      top: 152,
      left: 381,
      width: 30,
      height: 31,
    },
    rock45: {
      top: 141,
      left: 424,
      width: 25,
      height: 30,
    },
    rock46: {
      top: 89,
      left: 556,
      width: 32,
      height: 37,
    },
    rock47: {
      top: 110,
      left: 679,
      width: 48,
      height: 48,
      label: 'edge',
    },
    rock48: {
      top: 497,
      left: 834,
      width: 42,
      height: 80,
      label: 'edge',
    },
    rock49: {
      top: 512,
      left: 647,
      width: 50,
      height: 63,
    },
    rock50: {
      top: 617,
      left: 826,
      width: 44,
      height: 38,
    },
    rock51: {
      top: 461,
      left: 792,
      width: 34,
      height: 32,
    },
    rock52: {
      top: 299,
      left: 664,
      width: 31,
      height: 55,
    },
    rock53: {
      top: 234,
      left: 447,
      width: 23,
      height: 23,
    },
    rock54: {
      top: 291,
      left: 179,
      width: 46,
      height: 33,
    },
    rock55: {
      top: 177,
      left: 114,
      width: 44,
      height: 48,
    },
    rock56: {
      top: 790,
      left: 251,
      width: 94,
      height: 32,
    },
    rock57: {
      top: 27,
      left: 548,
      width: 112,
      height: 26,
    },
    rock58: {
      top: 619,
      left: 725,
      width: 69,
      height: 43,
    },
    rock59: {
      top: 508,
      left: 308,
      width: 42,
      height: 34,
    },
    rock60: {
      top: 289,
      left: 230,
      width: 33,
      height: 23,
    },
    rock61: {
      top: 187,
      left: 742,
      width: 38,
      height: 53,
      label: 'edge',
    },
    rock62: {
      top: 287,
      left: 129,
      width: 33,
      height: 12,
      label: 'slot under roof',
    },
    rock63: {
      top: 131,
      left: 291,
      width: 29,
      height: 50,
    },
  },
  routes: {
    route1: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
        {
          key: 'rock4',
        },
        {
          key: 'edge1',
        },
      ],
    },
    route2: {
      name: '3-rock classic',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock5',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'edge2',
        },
      ],
    },
    route3: {
      name: '3-rock classic (variation)',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock5',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'edge2',
        },
      ],
    },
    route4: {
      name: '3-rock classic (variation)',
      description: 'Layback crack to tooth',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock5',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'edge2',
        },
      ],
    },
    route5: {
      name: 'Monkey Trap',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock10',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route6: {
      name: 'Tuff Enuf!',
      description: 'Sit start',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock11',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route7: {
      name: null,
      description: 'Traverse - designation for feet',
      type: ROUTE_TYPES.ARH,
      grade: ROUTE_GRADES.EASY,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock14',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock16',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock20',
        },
      ],
    },
    route8: {
      name: 'Balance master',
      description: 'Left to right',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock21',
          type: 'start',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock23',
        },
        {
          key: 'edge4',
        },
      ],
    },
    route9: {
      name: 'Dyonsoar',
      description: 'Classic dyno',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock21',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock24',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route10: {
      name: '8th Dwarf',
      description: 'Slopey!',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock25',
        },
        {
          key: 'rock26',
        },
        {
          key: 'rock27',
        },
        {
          key: 'rock28',
        },
        {
          key: 'rock29',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route11: {
      name: null,
      description: 'Finish left corner',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock30',
          type: 'start',
        },
        {
          key: 'rock31',
        },
        {
          key: 'rock32',
        },
        {
          key: 'rock0',
        },
        {
          key: 'rock33',
        },
        {
          key: 'rock34',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock35',
        },
        {
          key: 'edge5',
        },
      ],
    },
    route12: {
      name: 'Edge Zeppelin',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock14',
          type: 'feet only',
        },
        {
          key: 'rock36',
          type: 'feet only',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock37',
        },
        {
          key: 'rock28',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock38',
        },
        {
          key: 'rock39',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route13: {
      name: 'MLF Overhang',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock22',
        },
        {
          key: 'rock40',
        },
        {
          key: 'rock41',
        },
        {
          key: 'rock42',
        },
        {
          key: 'edge2',
        },
      ],
    },
    route14: {
      name: 'Gorilla Traverse',
      description: '(Variation: Out & back - Hard!)',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
        },
        {
          key: 'rock28',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock24',
        },
        {
          key: 'rock42',
        },
        {
          key: 'rock43',
        },
        {
          key: 'rock44',
        },
        {
          key: 'rock45',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock46',
        },
        {
          key: 'rock47',
        },
      ],
    },
    route15: {
      name: null,
      description: 'Out & back',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock48',
          label: 'start',
        },
        {
          key: 'rock49',
        },
        {
          key: 'rock31',
        },
        {
          key: 'rock30',
          label: 'end',
        },
      ],
    },
    route16: {
      name: 'Bible Thumper',
      description: 'Two additional rocks for feet',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock50',
          label: 'feet only',
        },
        {
          key: 'rock51',
        },
        {
          key: 'rock52',
        },
        {
          key: 'rock53',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock54',
        },
        {
          key: 'rock55',
        },
        {
          key: 'rock39',
        },
        {
          key: 'edge5',
        },
      ],
      notes: [
        {
          key: 'rock8',
          label: 'feet only',
        },
        {
          key: 'rock22',
          label: 'feet only',
        },
      ],
    },
    route17: {
      name: 'Battle the bulge',
      description: 'Climb left side of roof to top',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock56',
          label: 'start',
        },
        {
          key: 'edge3',
          label: 'end',
        },
      ],
    },
    route18: {
      name: 'Pulling teeth',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
          label: 'Right side only',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock3',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock57',
        },
      ],
    },
    route19: {
      name: 'The Final',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock58',
        },
        {
          key: 'rock32',
        },
        {
          key: 'rock59',
        },
        {
          key: 'rock60',
        },
        {
          key: 'rock43',
        },
        {
          key: 'edge2',
        },
      ],
    },
    route20: {
      name: 'The Iron Cross',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock5',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock24',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route21: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock36',
        },
        {
          key: 'rock59',
        },
        {
          key: 'rock5',
        },
        {
          key: 'rock33',
        },
        {
          key: 'rock61',
        },
      ],
    },
    route22: {
      name: 'Beer & Loathing',
      description: '1st hold: bottom edge, 3rd hold: slot under roof',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
          label: 'bottom edge only',
        },
        {
          key: 'rock27',
        },
        {
          key: 'rock62',
        },
        {
          key: 'rock29',
        },
        {
          key: 'edge3',
        },
      ],
    },
    route23: {
      name: 'Concrete Jungle',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock63',
        },
        {
          key: 'edge2',
        },
      ],
    },
  },
}

const northRoofInnerSide = {
  key: 'north-roof-inner-side',
  name: 'North Roof, Inner Side',
  image: 'north-roof-inner-side.png',
  width: 966,
  height: 1067,
  rocks: {
    rock0: {
      top: 506,
      left: 427,
      width: 65,
      height: 64,
    },
    rock1: {
      top: 212,
      left: 370,
      width: 139,
      height: 39,
      label: 'edge',
    },
    rock2: {
      top: 558,
      left: 631,
      width: 65,
      height: 69,
    },
    rock3: {
      top: 674,
      left: 398,
      width: 47,
      height: 39,
    },
    rock4: {
      top: 727,
      left: 202,
      width: 45,
      height: 63,
    },
    rock5: {
      top: 668,
      left: 112,
      width: 31,
      height: 137,
      label: 'edge',
    },
    rock6: {
      top: 582,
      left: 251,
      width: 43,
      height: 57,
    },
    rock7: {
      top: 482,
      left: 270,
      width: 67,
      height: 61,
    },
    rock8: {
      top: 361,
      left: 378,
      width: 47,
      height: 107,
    },
    rock9: {
      top: 331,
      left: 474,
      width: 41,
      height: 49,
    },
    rock10: {
      top: 255,
      left: 698,
      width: 62,
      height: 70,
    },
    rock11: {
      top: 833,
      left: 451,
      width: 37,
      height: 37,
    },
    rock12: {
      top: 578,
      left: 441,
      width: 55,
      height: 80,
    },
    rock13: {
      top: 413,
      left: 680,
      width: 102,
      height: 167,
    },
    rock14: {
      top: 586,
      left: 319,
      width: 40,
      height: 45,
    },
    rock15: {
      top: 741,
      left: 821,
      width: 71,
      height: 53,
    },
    rock16: {
      top: 282,
      left: 858,
      width: 37,
      height: 45,
    },
    rock17: {
      top: 67,
      left: 703,
      width: 114,
      height: 29,
      label: 'edge',
    },
    rock18: {
      top: 980,
      left: 435,
      width: 41,
      height: 33,
    },
    rock19: {
      top: 846,
      left: 323,
      width: 41,
      height: 49,
    },
    rock20: {
      top: 294,
      left: 247,
      width: 108,
      height: 35,
      label: 'edge',
    },
    rock21: {
      top: 408,
      left: 196,
      width: 35,
      height: 33,
    },
    rock22: {
      top: 390,
      left: 12,
      width: 55,
      height: 49,
    },
    rock23: {
      top: 972,
      left: 792,
      width: 82,
      height: 35,
    },
    rock24: {
      top: 455,
      left: 137,
      width: 65,
      height: 47,
    },
    rock25: {
      top: 351,
      left: 110,
      width: 76,
      height: 47,
      label: 'edge',
    },
  },
  routes: {
    route1: {
      name: null,
      description: 'Classic move',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock1',
        },
      ],
    },
    route2: {
      name: 'Ferris Wheel',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock5',
        },
      ],
    },
    route3: {
      name: 'Rainbow Coallition',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock10',
        },
      ],
    },
    route4: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock11',
          label: 'feet only',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock1',
        },
      ],
    },
    route5: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock13',
          label: 'start',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock5',
        },
      ],
    },
    route6: {
      name: 'Bags of sand',
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock15',
          label: 'feet only',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock16',
        },
        {
          key: 'rock17',
        },
      ],
    },
    route7: {
      name: null,
      description: 'Sit start',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock18',
          label: 'feet only',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock11',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock20',
        },
      ],
    },
    route8: {
      name: 'Chimney Sweep',
      description: '4th hold: block under platform; Exit thru chimney, mantle onto roof',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.MODERATE,
      sequence: [
        {
          key: 'rock13',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock22',
        },
      ],
    },
    route9: {
      name: null,
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock23',
          label: 'feet only',
        },
        {
          key: 'rock15',
          label: 'feet only',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock17',
        },
      ],
    },
    route10: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock2',
          label: 'start',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock5',
          label: 'end',
        },
      ],
    },
    route11: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock13',
        },
        {
          key: 'rock0',
        },
        {
          key: 'rock24',
        },
        {
          key: 'rock25',
        },
      ],
    },
    route12: {
      name: null,
      description: 'Traverse edge left to platform and mantle',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock13',
          label: 'start',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock20',
        },
      ],
    },
  },
}

const eastWallSouthFacing = {
  key: 'east-wall-south-facing',
  name: 'East Wall, South Facing',
  image: 'east-wall-south-facing.png',
  width: 1000,
  height: 1016,
  rocks: {
    rock1: {
      top: 899,
      left: 946,
      width: 16,
      height: 54,
      label: 'edge',
    },
    rock2: {
      top: 566,
      left: 922,
      width: 30,
      height: 54,
      label: 'edge',
    },
    rock3: {
      top: 272,
      left: 748,
      width: 36,
      height: 49,
      label: 'edge',
    },
    rock4: {
      top: 237,
      left: 642,
      width: 60,
      height: 21,
      label: 'edge',
    },
    rock5: {
      top: 11,
      left: 191,
      width: 69,
      height: 39,
      label: 'edge',
    },
    rock6: {
      top: 802,
      left: 889,
      width: 39,
      height: 31,
    },
    rock7: {
      top: 667,
      left: 903,
      width: 33,
      height: 28,
    },
    rock8: {
      top: 576,
      left: 874,
      width: 37,
      height: 31,
    },
    rock9: {
      top: 419,
      left: 777,
      width: 35,
      height: 34,
    },
    rock10: {
      top: 813,
      left: 330,
      width: 55,
      height: 45,
    },
    rock11: {
      top: 709,
      left: 291,
      width: 39,
      height: 42,
    },
    rock12: {
      top: 545,
      left: 296,
      width: 30,
      height: 31,
    },
    rock13: {
      top: 380,
      left: 298,
      width: 28,
      height: 44,
    },
    rock14: {
      top: 260,
      left: 433,
      width: 33,
      height: 28,
    },
    rock15: {
      top: 131,
      left: 424,
      width: 39,
      height: 29,
      label: 'edge',
    },
    rock16: {
      top: 611,
      left: 604,
      width: 80,
      height: 84,
    },
    rock17: {
      top: 508,
      left: 547,
      width: 31,
      height: 26,
    },
    rock18: {
      top: 405,
      left: 428,
      width: 44,
      height: 30,
    },
    rock19: {
      top: 266,
      left: 255,
      width: 69,
      height: 60,
    },
    rock20: {
      top: 67,
      left: 294,
      width: 52,
      height: 36,
      label: 'edge',
    },
    rock21: {
      top: 586,
      left: 710,
      width: 22,
      height: 23,
    },
    rock22: {
      top: 706,
      left: 477,
      width: 39,
      height: 29,
    },
    rock23: {
      top: 562,
      left: 363,
      width: 31,
      height: 28,
    },
    rock24: {
      top: 488,
      left: 206,
      width: 48,
      height: 46,
    },
    rock25: {
      top: 333,
      left: 453,
      width: 28,
      height: 35,
    },
    rock26: {
      top: 408,
      left: 505,
      width: 60,
      height: 58,
    },
    rock27: {
      top: 363,
      left: 637,
      width: 39,
      height: 33,
    },
    rock28: {
      top: 706,
      left: 846,
      width: 42,
      height: 31,
    },
    rock29: {
      top: 631,
      left: 840,
      width: 34,
      height: 37,
    },
    rock30: {
      top: 407,
      left: 650,
      width: 34,
      height: 24,
    },
    rock31: {
      top: 276,
      left: 575,
      width: 51,
      height: 42,
    },
    rock32: {
      top: 609,
      left: 497,
      width: 47,
      height: 39,
    },
    rock33: {
      top: 458,
      left: 438,
      width: 29,
      height: 26,
    },
    rock34: {
      top: 304,
      left: 441,
      width: 12,
      height: 14,
    },
    rock35: {
      top: 597,
      left: 234,
      width: 37,
      height: 43,
    },
    rock36: {
      top: 503,
      left: 442,
      width: 46,
      height: 39,
    },
    rock37: {
      top: 374,
      left: 488,
      width: 35,
      height: 31,
    },
    rock38: {
      top: 235,
      left: 582,
      width: 36,
      height: 25,
    },
    rock39: {
      top: 718,
      left: 568,
      width: 43,
      height: 51,
    },
    rock40: {
      top: 654,
      left: 505,
      width: 49,
      height: 36,
    },
    rock41: {
      top: 157,
      left: 490,
      width: 51,
      height: 36,
      label: 'edge',
    },
    rock42: {
      top: 466,
      left: 671,
      width: 46,
      height: 29,
    },
    rock43: {
      top: 371,
      left: 770,
      width: 44,
      height: 39,
    },
  },
  routes: {
    route1: {
      name: 'Edge traverse',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EASY,
      risk: ROUTE_RISKS.MODERATE,
      sequence: [
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock5',
        },
      ],
    },
    route2: {
      name: 'Crimper classic',
      description: 'Sit start',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route3: {
      name: 'The C-Clamp',
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock10',
        },
        {
          key: 'rock11',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock15',
        },
      ],
    },
    route4: {
      name: "Can't truss it",
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.MODERATE,
      sequence: [
        {
          key: 'rock16',
          label: 'left side only',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock20',
        },
      ],
    },
    route5: {
      name: 'Cakewalk',
      description: 'Stemming allowed',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock16',
          label: 'right side only',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock23',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock24',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock25',
        },
        {
          key: 'rock26',
        },
        {
          key: 'rock27',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route6: {
      name: 'Pump & Circumstance',
      description: 'Sit start',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock28',
        },
        {
          key: 'rock29',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock30',
        },
        {
          key: 'rock31',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock20',
          label: 'End left of crack',
        },
      ],
    },
    route7: {
      name: 'The razor',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock32',
        },
        {
          key: 'rock33',
        },
        {
          key: 'rock34',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock15',
        },
      ],
    },
    route8: {
      name: "Bakers' dozen",
      description: 'Stem start if short',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock35',
        },
        {
          key: 'rock12',
        },
        {
          key: 'rock36',
        },
        {
          key: 'rock37',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock15',
        },
      ],
    },
    route9: {
      name: 'Toecutter',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.HIGH,
      sequence: [
        {
          key: 'rock16',
          label: 'right side only',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock30',
        },
        {
          key: 'rock38',
        },
        {
          key: 'rock4',
        },
      ],
    },
    route10: {
      name: 'The enigma',
      description: "'Nuf said",
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock39',
          label: 'start with either first 3',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock40',
        },
        {
          key: 'rock37',
        },
        {
          key: 'rock41',
        },
      ],
    },
    route11: {
      name: null,
      description: null,
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.EASY,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock10',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock42',
        },
        {
          key: 'rock43',
        },
        {
          key: 'rock4',
        },
      ],
    },
  },
}

const eastSideNorthWallWestFacing = {
  key: 'east-side-north-wall-west-facing',
  name: 'East Side, North Wall, West Facing',
  image: 'east-side-north-wall-west-facing.png',
  width: 1000,
  height: 840,
  rocks: {
    rock0: {
      top: 495,
      left: 243,
      width: 45,
      height: 49,
    },
    rock1: {
      top: 413,
      left: 204,
      width: 70,
      height: 45,
    },
    rock2: {
      top: 307,
      left: 109,
      width: 51,
      height: 42,
      label: 'edge',
    },
    rock3: {
      top: 441,
      left: 357,
      width: 84,
      height: 60,
    },
    rock4: {
      top: 388,
      left: 530,
      width: 71,
      height: 53,
    },
    rock5: {
      top: 296,
      left: 538,
      width: 27,
      height: 41,
    },
    rock6: {
      top: 145,
      left: 665,
      width: 23,
      height: 22,
    },
    rock7: {
      top: 47,
      left: 641,
      width: 41,
      height: 28,
      label: 'edge',
    },
    rock8: {
      top: 303,
      left: 290,
      width: 50,
      height: 31,
    },
    rock9: {
      top: 282,
      left: 370,
      width: 25,
      height: 19,
    },
    rock10: {
      top: 20,
      left: 705,
      width: 30,
      height: 28,
      label: 'loop',
    },
    rock11: {
      top: 565,
      left: 105,
      width: 21,
      height: 14,
    },
    rock12: {
      top: 518,
      left: 106,
      width: 36,
      height: 37,
    },
    rock13: {
      top: 418,
      left: 83,
      width: 36,
      height: 27,
    },
    rock14: {
      top: 340,
      left: 61,
      width: 36,
      height: 31,
      label: 'edge',
    },
    rock15: {
      top: 401,
      left: 296,
      width: 49,
      height: 31,
    },
    rock16: {
      top: 363,
      left: 385,
      width: 30,
      height: 24,
    },
    rock17: {
      top: 329,
      left: 493,
      width: 33,
      height: 38,
    },
    rock18: {
      top: 136,
      left: 466,
      width: 44,
      height: 32,
    },
  },
  routes: {
    route1: {
      name: null,
      description: 'End at top of crack',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
      ],
    },
    route2: {
      name: 'Heel or Peel',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.MODERATE,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock3',
        },
        {
          key: 'rock4',
        },
        {
          key: 'rock5',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route3: {
      name: 'Rude flys',
      description: 'Gripper finish',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.MODERATE,
      sequence: [
        {
          key: 'rock1',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock5',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock10',
        },
      ],
    },
    route4: {
      name: null,
      description: 'All rocks to right top',
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock11',
        },
        {
          key: 'rock10',
        },
      ],
    },
    route5: {
      name: null,
      description: 'Feet left of crack',
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock14',
        },
      ],
    },
    route6: {
      name: null,
      description: 'Sitstart',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock14',
        },
      ],
    },
    route7: {
      name: 'Kriss Kross',
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock15',
        },
        {
          key: 'rock16',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock18',
        },
      ],
    },
  },
}

const emptyRouteStub = {
  isEmpty: true,
  rocks: {
    demo: {
      top: 0,
      left: 0,
      width: 1,
      height: 1,
    },
  },
  routes: {
    route0: {
      name: 'empty',
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EASY,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'demo',
        },
      ],
    },
  },
}

const eastSideNorthWallEastFacing = {
  key: 'east-side-north-wall-east-facing',
  name: 'East Side, North Wall, East Facing',
  image: 'east-side-north-wall-east-facing.png',
  width: 1000,
  height: 779,
  rocks: {
    rock0: {
      top: 727,
      left: 105,
      width: 76,
      height: 28,
    },
    rock1: {
      top: 76,
      left: 122,
      width: 43,
      height: 35,
    },
    rock2: {
      top: 309,
      left: 495,
      width: 101,
      height: 59,
    },
    rock3: {
      top: 95,
      left: 602,
      width: 39,
      height: 44,
      label: 'edge',
    },
    rock4: {
      top: 741,
      left: 574,
      width: 70,
      height: 17,
    },
    rock5: {
      top: 156,
      left: 839,
      width: 42,
      height: 44,
      label: 'edge',
    },
    rock6: {
      top: 427,
      left: 345,
      width: 28,
      height: 27,
    },
    rock7: {
      top: 261,
      left: 268,
      width: 38,
      height: 40,
    },
    rock8: {
      top: 175,
      left: 335,
      width: 50,
      height: 47,
    },
    rock9: {
      top: 27,
      left: 335,
      width: 32,
      height: 31,
      label: 'edge',
    },
    rock10: {
      top: 715,
      left: 58,
      width: 39,
      height: 31,
    },
    rock11: {
      top: 133,
      left: 44,
      width: 31,
      height: 34,
    },
    rock12: {
      top: 479,
      left: 718,
      width: 25,
      height: 30,
    },
    rock13: {
      top: 429,
      left: 591,
      width: 42,
      height: 50,
    },
    rock14: {
      top: 285,
      left: 353,
      width: 57,
      height: 47,
    },
    rock15: {
      top: 59,
      left: 452,
      width: 38,
      height: 36,
      label: 'edge',
    },
    rock16: {
      top: 552,
      left: 242,
      width: 28,
      height: 46,
    },
    rock17: {
      top: 480,
      left: 243,
      width: 38,
      height: 29,
    },
    rock18: {
      top: 374,
      left: 265,
      width: 44,
      height: 39,
    },
    rock19: {
      top: 131,
      left: 287,
      width: 20,
      height: 45,
    },
    rock20: {
      top: 9,
      left: 276,
      width: 28,
      height: 35,
      label: 'edge',
    },
    rock21: {
      top: 741,
      left: 860,
      width: 53,
      height: 16,
    },
    rock22: {
      top: 19,
      left: 232,
      width: 36,
      height: 32,
    },
  },
  routes: {
    route1: {
      name: 'Touchy Feely',
      description: 'Texture only to top; Top of block out; No stemming',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
          label: 'start',
        },
        {
          key: 'rock1',
          label: 'end',
        },
      ],
    },
    route2: {
      name: null,
      description: 'Classic mantle',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route3: {
      name: null,
      description: 'All rocks between cracks to top',
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock4',
          label: 'start',
        },
        {
          key: 'rock5',
          label: 'end',
        },
      ],
    },
    route4: {
      name: null,
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
      ],
    },
    route5: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
      ],
    },
    route6: {
      name: null,
      description: 'Stem between walls to block; Mantle finish',
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.EASY,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock10',
        },
        {
          key: 'rock11',
          label: 'end',
        },
      ],
    },
    route7: {
      name: null,
      description: 'Mantle Finish',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock12',
        },
        {
          key: 'rock13',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock14',
        },
        {
          key: 'rock15',
        },
      ],
    },
    route8: {
      name: 'Fivespot',
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock16',
          label: 'feet only',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock7',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock20',
        },
      ],
    },
    route9: {
      name: 'Free Gift',
      description: 'Texture only hands & feet',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock21',
          label: 'start',
        },
        {
          key: 'rock22',
          label: 'end at crack',
        },
      ],
    },
  },
}

const eastSideSouthWallEastFacing = {
  key: 'east-side-south-wall-east-facing',
  name: 'East Side, South Wall, East Facing',
  image: 'east-side-south-wall-east-facing.png',
  width: 1000,
  height: 1082,
  rocks: {
    rock0: {
      top: 621,
      left: 307,
      width: 57,
      height: 57,
    },
    rock1: {
      top: 456,
      left: 346,
      width: 122,
      height: 94,
    },
    rock2: {
      top: 228,
      left: 482,
      width: 54,
      height: 37,
    },
    rock3: {
      top: 36,
      left: 484,
      width: 63,
      height: 34,
      label: 'edge',
    },
    rock4: {
      top: 769,
      left: 110,
      width: 50,
      height: 66,
    },
    rock5: {
      top: 11,
      left: 790,
      width: 38,
      height: 31,
      label: 'edge',
    },
    rock6: {
      top: 495,
      left: 621,
      width: 26,
      height: 47,
    },
    rock7: {
      top: 26,
      left: 584,
      width: 136,
      height: 32,
      label: 'edge',
    },
    rock8: {
      top: 602,
      left: 584,
      width: 37,
      height: 32,
    },
    rock9: {
      top: 398,
      left: 676,
      width: 52,
      height: 28,
    },
    rock10: {
      top: 199,
      left: 644,
      width: 40,
      height: 40,
    },
    rock11: {
      top: 307,
      left: 447,
      width: 47,
      height: 81,
    },
    rock12: {
      top: 460,
      left: 524,
      width: 31,
      height: 29,
    },
    rock13: {
      top: 992,
      left: 717,
      width: 61,
      height: 24,
    },
    rock14: {
      top: 908,
      left: 722,
      width: 51,
      height: 60,
    },
    rock15: {
      top: 817,
      left: 714,
      width: 37,
      height: 39,
    },
    rock16: {
      top: 775,
      left: 754,
      width: 32,
      height: 41,
    },
    rock17: {
      top: 707,
      left: 728,
      width: 41,
      height: 29,
    },
    rock18: {
      top: 621,
      left: 739,
      width: 43,
      height: 34,
    },
    rock19: {
      top: 502,
      left: 735,
      width: 48,
      height: 43,
    },
    rock20: {
      top: 366,
      left: 756,
      width: 38,
      height: 35,
    },
    rock21: {
      top: 189,
      left: 723,
      width: 47,
      height: 78,
    },
    rock22: {
      top: 189,
      left: 528,
      width: 56,
      height: 62,
    },
    rock23: {
      top: 333,
      left: 662,
      width: 52,
      height: 38,
    },
    rock24: {
      top: 366,
      left: 354,
      width: 57,
      height: 40,
    },
    rock25: {
      top: 138,
      left: 396,
      width: 65,
      height: 68,
    },
    rock26: {
      top: 856,
      left: 417,
      width: 104,
      height: 121,
    },
    rock27: {
      top: 421,
      left: 134,
      width: 55,
      height: 61,
    },
    rock28: {
      top: 604,
      left: 534,
      width: 49,
      height: 35,
    },
    rock29: {
      top: 254,
      left: 345,
      width: 64,
      height: 57,
    },
    rock30: {
      top: 94,
      left: 597,
      width: 55,
      height: 40,
    },
    rock31: {
      top: 777,
      left: 584,
      width: 60,
      height: 42,
    },
    rock32: {
      top: 129,
      left: 699,
      width: 40,
      height: 41,
    },
    rock33: {
      top: 615,
      left: 94,
      width: 79,
      height: 65,
    },
    rock34: {
      top: 392,
      left: 280,
      width: 58,
      height: 87,
    },
    rock35: {
      top: 1003,
      left: 592,
      width: 84,
      height: 29,
    },
    rock36: {
      top: 304,
      left: 306,
      width: 44,
      height: 42,
    },
    rock37: {
      top: 963,
      left: 228,
      width: 75,
      height: 31,
    },
    rock38: {
      top: 1024,
      left: 754,
      width: 49,
      height: 20,
    },
    rock39: {
      top: 16,
      left: 749,
      width: 26,
      height: 28,
    },
  },
  routes: {
    route1: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock0',
        },
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route2: {
      name: null,
      description: 'Texture only for hands to top',
      type: ROUTE_TYPES.ARF,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock4',
          label: 'start, feet only',
        },
        {
          key: 'rock5',
        },
      ],
    },
    route3: {
      name: "Heel's Ladder",
      description: 'One rock to top',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.MODERATE,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route4: {
      name: null,
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route5: {
      name: "Gold's Gym",
      description: 'Gold rock to top',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock11',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route6: {
      name: 'Taiwan on',
      description: 'No divot, establish on 1st rock',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREME,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock4',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock7',
        },
      ],
      notes: [
        {
          key: 'rock12',
          label: 'out',
        },
      ],
    },
    route7: {
      name: null,
      description: 'Classic english problem',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock13',
          label: 'feet',
        },
        {
          key: 'rock14',
          label: 'feet',
        },
        {
          key: 'rock15',
          label: 'feet',
        },
        {
          key: 'rock16',
          label: 'feet',
        },
        {
          key: 'rock17',
        },
        {
          key: 'rock18',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock20',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock5',
        },
      ],
    },
    route8: {
      name: 'Training Loop',
      description: 'Clockwise',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock1',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock23',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock1',
        },
      ],
    },
    route9: {
      name: 'Young upstarts',
      description: 'Finish at top',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock24',
        },
        {
          key: 'rock25',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route10: {
      name: null,
      description: 'Establish on first rock',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock4',
        },
        {
          key: 'rock0',
        },
        {
          key: 'rock6',
        },
        {
          key: 'rock20',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route11: {
      name: null,
      description: 'All rocks to top; Exit right',
      type: ROUTE_TYPES.AR,
      grade: ROUTE_GRADES.EASY,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock26',
          label: 'start',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route12: {
      name: "You're so vano",
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock27',
        },
        {
          key: 'rock11',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route13: {
      name: "You're so vano (variation)",
      description: 'Divot out',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock27',
        },
        {
          key: 'rock11',
        },
        {
          key: 'rock21',
        },
        {
          key: 'rock7',
        },
      ],
      notes: [
        {
          key: 'rock12',
          label: 'out',
        },
      ],
    },
    route14: {
      name: 'Malaria Pond',
      description: 'Divot out, end right corner',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock28',
        },
        {
          key: 'rock29',
        },
        {
          key: 'rock30',
        },
        {
          key: 'rock5',
        },
      ],
      notes: [
        {
          key: 'rock12',
          label: 'out',
        },
      ],
    },
    route15: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock31',
          label: 'feet',
        },
        {
          key: 'rock28',
        },
        {
          key: 'rock19',
        },
        {
          key: 'rock9',
        },
        {
          key: 'rock20',
        },
        {
          key: 'rock32',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route16: {
      name: null,
      description: null,
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock6',
        },
        {
          key: 'rock11',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route17: {
      name: 'Wrist Twister',
      description: 'Classic!',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock33',
        },
        {
          key: 'rock34',
        },
        {
          key: 'rock2',
        },
        {
          key: 'rock3',
        },
      ],
    },
    route18: {
      name: 'By Jeff Smoot',
      description: 'Texture only: no rocks hands or feet',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock35',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route19: {
      name: null,
      description: null,
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.EASY_MODERATE,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock4',
          label: 'feet',
        },
        {
          key: 'rock33',
        },
        {
          key: 'rock27',
        },
        {
          key: 'rock36',
        },
        {
          key: 'rock22',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route20: {
      name: null,
      description: 'Two rock classic',
      type: ROUTE_TYPES.ENG,
      grade: ROUTE_GRADES.MODERATE_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock8',
        },
        {
          key: 'rock23',
        },
        {
          key: 'rock5',
        },
      ],
    },
    route21: {
      name: null,
      description: 'Layback left or right of middle crack',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock37',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route22: {
      name: 'Swamp Thang',
      description: 'Slimy mantle',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.VERY_HARD,
      risk: ROUTE_RISKS.LOW,
      sequence: [
        {
          key: 'rock28',
        },
        {
          key: 'rock20',
        },
        {
          key: 'rock10',
        },
        {
          key: 'rock7',
        },
      ],
    },
    route23: {
      name: 'Spiral fracture',
      description: 'Layback left to top',
      type: ROUTE_TYPES.noF,
      grade: ROUTE_GRADES.EXTREMELY_HARD,
      risk: ROUTE_RISKS.HIGH,
      sequence: [
        {
          key: 'rock38',
          label: 'start',
        },
        {
          key: 'rock39',
          label: 'end',
        },
      ],
    },
  },
}

const eastSideSouthWallWestFacing = {
  key: 'east-side-south-wall-west-facing',
  name: 'East Side, South Wall, West Facing',
  image: 'east-side-south-wall-west-facing.png',
  width: 1000,
  height: 1156,
  ...emptyRouteStub,
}

const eastWallNorthFacing = {
  key: 'east-wall-north-facing',
  name: 'East Wall, North Facing',
  image: 'east-wall-north-facing.png',
  width: 1000,
  height: 874,
  ...emptyRouteStub,
}

const northTower = {
  key: 'north-tower',
  name: 'North Tower',
  image: 'north-tower.png',
  width: 1000,
  height: 1540,
  ...emptyRouteStub,
}

const westWallNorthFacing = {
  key: 'west-wall-north-facing',
  name: 'West Wall, North Facing',
  image: 'west-wall-north-facing.png',
  width: 1000,
  height: 1053,
  ...emptyRouteStub,
}

const westWallSouthFacing = {
  key: 'west-wall-south-facing',
  name: 'West Wall, South Facing',
  image: 'west-wall-south-facing.png',
  width: 1000,
  height: 1180,
  ...emptyRouteStub,
}

const WALLS = {
  [northRoof.key]: northRoof,
  [northRoofInnerSide.key]: northRoofInnerSide,
  [eastWallSouthFacing.key]: eastWallSouthFacing,
  [eastWallNorthFacing.key]: eastWallNorthFacing,
  [southTowerWall.key]: southTowerWall,
  [northTower.key]: northTower,
  [eastSideNorthWallEastFacing.key]: eastSideNorthWallEastFacing,
  [eastSideNorthWallWestFacing.key]: eastSideNorthWallWestFacing,
  [eastSideSouthWallEastFacing.key]: eastSideSouthWallEastFacing,
  [eastSideSouthWallWestFacing.key]: eastSideSouthWallWestFacing,
  [westWallNorthFacing.key]: westWallNorthFacing,
  [westWallSouthFacing.key]: westWallSouthFacing,
}

module.exports = {
  ROUTE_TYPES,
  ROUTE_GRADES,
  ROUTE_RISKS,
  WALLS,
}

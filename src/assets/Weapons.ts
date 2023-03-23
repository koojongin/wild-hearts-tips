import { ITEM_NAME, SKILL_NAME } from './ItemSkills';

export const WEAPONS = [
  {
    name: '카라쿠리 카타나',
    powers: {
      physical: 50,
    },
    moreCriticalChance: 0,
    crafting: {
      materials: [
        {
          name: '핵석',
          amount: 1,
        },
      ],
      gold: 100,
    },
  },
  {
    name: '연석 카타나',
    powers: {
      physical: 80,
    },
    moreCriticalChance: 0,
    crafting: {
      materials: [
        {
          name: '핵석',
          amount: 3,
        },
      ],
      gold: 100,
    },
  },
  {
    name: '홍수검',
    powers: {
      physical: 85,
      water: 80,
    },
    moreCriticalChance: 5,
    crafting: {
      materials: [
        {
          name: ITEM_NAME.CORE_STONE,
          amount: 4,
        },
        {
          name: ITEM_NAME.SPIKED_SQUIRREL_HORN,
          amount: 1,
        },
        {
          name: ITEM_NAME.CORAL_PIECE,
          amount: 5,
        },
      ],
      gold: 300,
    },
    skills: {
      unique: [
        {
          name: SKILL_NAME.ENHANCE_CRITICAL_STRIKE_ATTACK,
          value: 8,
        },
      ],
      inheritance: [
        {
          name: SKILL_NAME.CHAMPION,
          value: 6,
        },
      ],
    },
  },
  {
    name: '우빙검',
    powers: {
      physical: 165,
      water: 120,
    },
    moreCriticalChance: 0,
    skills: {
      unique: [
        {
          name: SKILL_NAME.STRONG_ARM_THREAD,
          value: 6,
        },
      ],
      inheritance: [{ name: SKILL_NAME.MASTER_OF_REACTION, value: 13 }],
    },
    crafting: {
      materials: [
        {
          name: ITEM_NAME.CORE_STONE,
          amount: 10,
        },
        {
          name: ITEM_NAME.ICE_BOAR_TUSKS,
          amount: 3,
        },
        {
          name: ITEM_NAME.ICE_BOAR_ICE_BRANCH,
          amount: 2,
        },
      ],
      gold: 600,
    },
  },
];

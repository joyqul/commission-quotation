const coloredType = {
  monoColored: { value: 1, label: "黑白" },
  celluloidColored: { value: 2, label: "簡單上色" },
  meticulousColored: { value: 3, label: "精緻上色" },
};

const commissionType = {
  gatcha: { value: 1, label: "轉蛋模式" },
  commission: { value: 2, label: "委託模式" },
};

const itemType = {
  chibiSingle: { value: 1, label: "Q版單人" },
  chibiCouple: { value: 2, label: "Q版雙人" },
  portrait: { value: 3, label: "頭貼" },
  aboveWaistSingle: { value: 4, label: "正比單人半身" },
  aboveWaistCouple: { value: 5, label: "正比雙人半身" },
  tachie: { value: 6, label: "全身立繪" },
};

const basePrice = {
  [itemType.chibiSingle.value]: {
    [coloredType.celluloidColored.value]: {
      [commissionType.gatcha.value]: 150,
      [commissionType.commission.value]: 250,
    },
    [coloredType.meticulousColored.value]: {
      [commissionType.gatcha.value]: 250,
      [commissionType.commission.value]: 350,
    },
  },
  [itemType.chibiCouple.value]: {
    [coloredType.celluloidColored.value]: {
      [commissionType.gatcha.value]: 300,
      [commissionType.commission.value]: 400,
    },
    [coloredType.meticulousColored.value]: {
      [commissionType.gatcha.value]: 500,
      [commissionType.commission.value]: 600,
    },
  },
  [itemType.aboveWaistSingle.value]: {
    [coloredType.monoColored.value]: {
      [commissionType.gatcha.value]: 200,
      [commissionType.commission.value]: 400,
    },
    [coloredType.celluloidColored.value]: {
      [commissionType.gatcha.value]: 250,
      [commissionType.commission.value]: 450,
    },
    [coloredType.meticulousColored.value]: {
      [commissionType.gatcha.value]: 350,
      [commissionType.meticulousColored.value]: 550,
    },
  },
  [itemType.aboveWaistCouple.value]: {
    [coloredType.monoColored.value]: {
      [commissionType.gatcha.value]: 600,
      [commissionType.commission.value]: 800,
    },
    [coloredType.celluloidColored.value]: {
      [commissionType.gatcha.value]: 700,
      [commissionType.commission.value]: 900,
    },
    [coloredType.meticulousColored.value]: {
      [commissionType.gatcha.value]: 900,
      [commissionType.meticulousColored.value]: 1100,
    },
  },
  [itemType.tachie.value]: {
    [coloredType.celluloidColored.value]: {
      [commissionType.gatcha.value]: 800,
      [commissionType.commission.value]: 1000,
    },
    [coloredType.meticulousColored.value]: {
      [commissionType.gatcha.value]: 1000,
      [commissionType.commission.value]: 1200,
    },
  },
};

const onSellItems = [
  itemType.chibiSingle,
  itemType.chibiCouple,
  itemType.aboveWaistSingle,
  itemType.aboveWaistCouple,
  itemType.tachie,
];
export default {
  onSellItems,
  basePrice,
  commissionType,
  coloredType,
};

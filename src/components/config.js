const coloredTypes = {
  monoColored: { value: 1, label: "黑白" },
  celluloidColored: { value: 2, label: "簡單上色" },
  meticulousColored: { value: 3, label: "精緻上色" },
};

const commissionTypes = {
  gatcha: { value: 1, label: "轉蛋模式" },
  commission: { value: 2, label: "委託模式" },
};

const itemTypes = {
  chibiSingle: { value: 1, label: "Q版單人" },
  chibiCouple: { value: 2, label: "Q版雙人" },
  portrait: { value: 3, label: "頭貼" },
  aboveWaistSingle: { value: 4, label: "正比單人半身" },
  aboveWaistCouple: { value: 5, label: "正比雙人半身" },
  tachie: { value: 6, label: "全身立繪" },
};

const basePrices = {
  [itemTypes.chibiSingle.value]: {
    [coloredTypes.celluloidColored.value]: {
      [commissionTypes.gatcha.value]: 150,
      [commissionTypes.commission.value]: 250,
    },
    [coloredTypes.meticulousColored.value]: {
      [commissionTypes.gatcha.value]: 250,
      [commissionTypes.commission.value]: 350,
    },
  },
  [itemTypes.chibiCouple.value]: {
    [coloredTypes.celluloidColored.value]: {
      [commissionTypes.gatcha.value]: 300,
      [commissionTypes.commission.value]: 400,
    },
    [coloredTypes.meticulousColored.value]: {
      [commissionTypes.gatcha.value]: 500,
      [commissionTypes.commission.value]: 600,
    },
  },
  [itemTypes.aboveWaistSingle.value]: {
    [coloredTypes.monoColored.value]: {
      [commissionTypes.gatcha.value]: 200,
      [commissionTypes.commission.value]: 400,
    },
    [coloredTypes.celluloidColored.value]: {
      [commissionTypes.gatcha.value]: 250,
      [commissionTypes.commission.value]: 450,
    },
    [coloredTypes.meticulousColored.value]: {
      [commissionTypes.gatcha.value]: 350,
      [commissionTypes.commission.value]: 550,
    },
  },
  [itemTypes.aboveWaistCouple.value]: {
    [coloredTypes.monoColored.value]: {
      [commissionTypes.gatcha.value]: 600,
      [commissionTypes.commission.value]: 800,
    },
    [coloredTypes.celluloidColored.value]: {
      [commissionTypes.gatcha.value]: 700,
      [commissionTypes.commission.value]: 900,
    },
    [coloredTypes.meticulousColored.value]: {
      [commissionTypes.gatcha.value]: 900,
      [commissionTypes.commission.value]: 1100,
    },
  },
  [itemTypes.tachie.value]: {
    [coloredTypes.celluloidColored.value]: {
      [commissionTypes.gatcha.value]: 800,
      [commissionTypes.commission.value]: 1000,
    },
    [coloredTypes.meticulousColored.value]: {
      [commissionTypes.gatcha.value]: 1000,
      [commissionTypes.commission.value]: 1200,
    },
  },
};

const onSellItems = [
  itemTypes.chibiSingle,
  itemTypes.chibiCouple,
  itemTypes.aboveWaistSingle,
  itemTypes.aboveWaistCouple,
  itemTypes.tachie,
];
export { onSellItems, basePrices, commissionTypes, coloredTypes };

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

const sampleImages = {
  [itemTypes.chibiSingle.value]: {
    [coloredTypes.celluloidColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0127-goose5970_orig.jpg",
        caption: "噗幣轉蛋圖 - 一人+小動物模板",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0127-q-8473_orig.jpg",
        caption: "噗幣轉蛋圖 - 一人+小動物模板",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0127-q-shabu6747_orig.jpg",
        caption: "噗幣轉蛋圖 - 一人+小動物模板",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0128-q-sophie496_orig.jpg",
        caption: "噗幣轉蛋圖 - 一人+小動物模板",
      },
    ],
    [coloredTypes.meticulousColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0129-q-clam3963_orig.jpg",
        caption: "噗幣轉蛋圖 - 一人+蛋糕模板",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0202-q-e3s-watermark_orig.jpg",
        caption: "委託圖 - 一人+蛋糕模板",
      },
    ],
  },
  [itemTypes.chibiCouple.value]: {
    [coloredTypes.celluloidColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0822-q-garnit_orig.jpg",
        caption: "委託圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0725-q-yuu_orig.jpg",
        caption: "委託圖",
      },
    ],
    [coloredTypes.meticulousColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0314-q_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0315-q-sumi-sample_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0316-q-taurus5627-sample_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0321-q-kumakura-sample_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0321-q-haruna19_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0325-q-hippo237_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
    ],
  },
  [itemTypes.aboveWaistSingle.value]: {
    [coloredTypes.monoColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/bw03_1_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/bw05_1_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/bw06_1_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0104-leaflove508_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
    ],
    [coloredTypes.celluloidColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/sugar4174_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0118-kurodoyami-single-color_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0122-nnne5b-eillote-color_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0119-salmon395-color_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
    ],
    [coloredTypes.meticulousColored.value]: [
      {
        src:
          "https://joyqul.weebly.com/uploads/2/3/9/1/23912381/bookwalker_orig.jpg",
        caption: "2019 年創作圖",
      },
      {
        src:
          "https://joyqul.weebly.com/uploads/2/3/9/1/23912381/2146595286_orig.jpg",
        caption: "2019 年創作圖",
      },
    ],
  },
  [itemTypes.aboveWaistCouple.value]: {
    [coloredTypes.monoColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0829-shinatake_orig.jpg",
        caption: "委託圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/bw2-01_1_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0106-drarry520-b-w_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
    ],
    [coloredTypes.celluloidColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0106-drarry520-color_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0105-hotdog5580-color_orig.jpg",
        caption: "噗幣轉蛋圖",
      },
    ],
    [coloredTypes.meticulousColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0808-shine-1225_orig.jpg",
        caption: "委託圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0204-e3s-optionb-sample_orig.jpg",
        caption: "委託圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0203-e3s-watermarker_orig.jpg",
        caption: "委託圖",
      },
    ],
  },
  [itemTypes.tachie.value]: {
    [coloredTypes.celluloidColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/1001-sample_orig.jpg",
        caption: "委託圖 - 服設指定風格 + 服設驚喜包",
      },
    ],
    [coloredTypes.meticulousColored.value]: [
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0919-1-sample_orig.jpg",
        caption: "委託圖 - 服設日常服*2 + 差分圖",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0919-2-ig_orig.jpg",
        caption: "委託圖 - 服設日常服",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0910-ig_orig.jpg",
        caption: "委託圖 - 既有設計修改 + 背面",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0911-ig_orig.jpg",
        caption: "委託圖 - 延伸設計 + 背面",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0822-takemoto-ig_orig.jpg",
        caption: "委託圖 - 服設日常服 + 背面",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0308-sample-square_orig.jpg",
        caption: "噗幣轉蛋圖 - 服設驚喜包",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0311-seven-sample-forig_orig.jpg",
        caption: "噗幣轉蛋圖 - 服設驚喜包",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0321-fairy-1-ig_orig.jpg",
        caption: "噗幣轉蛋圖 - 服設驚喜包",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0402-finch5340-ig_orig.jpg",
        caption: "噗幣轉蛋圖 - 服設驚喜包",
      },
      {
        src:
          "https://joyqul-commission.weebly.com/uploads/2/3/9/1/23912381/0412-rimi-ig_orig.jpg",
        caption: "噗幣轉蛋圖 - 服設驚喜包",
      },
    ],
  },
};

const additionalFields = {
  [itemTypes.tachie.value]: [
    {
      key: "2p",
      value: "2p",
      label: "差分圖",
      price: 100,
    },
    { key: "back", value: "back", label: "背面", price: 200 },
    {
      key: "breakDown",
      value: "breakDown",
      label: "拆分圖",
      price: 300,
      enabledOnlyIfKeySet: "clothesDesign",
    },
    {
      key: "clothesDesign",
      value: "normal",
      label: "服裝設計-日常服",
      price: 100,
    },
    {
      key: "clothesDesign",
      value: "gatcha",
      label: "服裝設計-驚喜包",
      price: 200,
    },
    {
      key: "clothesDesign",
      value: "chosen",
      label: "服裝設計指定風格",
      minPrice: 300,
      maxPrice: 600,
    },
    {
      key: "2p2",
      value: "2p2",
      label: "【第二套】差分圖",
      price: 100,
      enabledOnlyIfKeySet: "clothesDesign2",
    },
    {
      key: "back2",
      value: "back2",
      label: "【第二套】背面",
      price: 200,
      enabledOnlyIfKeySet: "clothesDesign2",
    },
    {
      key: "breakDown2",
      value: "breakDown2",
      label: "【第二套】拆分圖",
      price: 300,
      enabledOnlyIfKeySet: "clothesDesign2",
    },
    {
      key: "clothesDesign2",
      value: "normal2",
      label: "【第二套】服裝設計-日常服",
      price: 300,
      enabledOnlyIfKeySet: "clothesDesign",
    },
    {
      key: "clothesDesign2",
      value: "gatcha2",
      label: "【第二套】服裝設計-驚喜包",
      price: 400,
      enabledOnlyIfKeySet: "clothesDesign",
    },
    {
      key: "clothesDesign2",
      value: "chosen2",
      label: "【第二套】服裝設計指定風格",
      minPrice: 500,
      maxPrice: 800,
      enabledOnlyIfKeySet: "clothesDesign",
    },
  ],
};

const onSellItems = [
  itemTypes.chibiSingle,
  itemTypes.chibiCouple,
  itemTypes.aboveWaistSingle,
  itemTypes.aboveWaistCouple,
  itemTypes.tachie,
];
export {
  additionalFields,
  onSellItems,
  sampleImages,
  basePrices,
  commissionTypes,
  coloredTypes,
};

import React, { useState } from "react";
import "./App.css";
import Selections from "./components/Selections";
import {
  onSellItems,
  coloredTypes,
  commissionTypes,
} from "./components/config";
import QuotationPrice from "./components/QuotationPrice";
import SampleImages from "./components/SampleImages";

function App() {
  const [mainItem, setMainItem] = useState(onSellItems[0].value);
  const [coloredType, setColoredType] = useState(
    coloredTypes.celluloidColored.value
  );
  const [commissionType, setCommissionType] = useState(
    commissionTypes.gatcha.value
  );
  return (
    <div className="App">
      <header className="App-header">
        <QuotationPrice
          mainItem={mainItem}
          coloredType={coloredType}
          commissionType={commissionType}
        />
        <Selections.MainItem value={mainItem} setValue={setMainItem} />
        <Selections.ColoredType
          value={coloredType}
          setValue={setColoredType}
          mainItem={mainItem}
        />
        <Selections.CommissionType
          value={commissionType}
          setValue={setCommissionType}
        />
        <SampleImages mainItem={mainItem} coloredType={coloredType} />
      </header>
    </div>
  );
}

export default App;

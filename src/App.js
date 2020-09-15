import React, { useState } from "react";
import "./App.css";
import Selections from "./components/Selections";
import { onSellItems, coloredTypes } from "./components/config";

function App() {
  const [selectedItem, setSelectedItem] = useState(onSellItems[0].value);
  const [coloredType, setColoredType] = useState(
    coloredTypes.celluloidColored.value
  );
  return (
    <div className="App">
      <header className="App-header">
        <Selections.MainItem value={selectedItem} setValue={setSelectedItem} />
        <Selections.ColoredType
          value={coloredType}
          setValue={setColoredType}
          mainItemValue={selectedItem}
        />
      </header>
    </div>
  );
}

export default App;

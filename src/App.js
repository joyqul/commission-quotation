import React, { useEffect, useState } from "react";
import "./App.css";
import Selections from "./components/Selections";
import {
  onSellItems,
  coloredTypes,
  commissionTypes,
} from "./components/config";
import QuotationPrice from "./components/QuotationPrice";
import SampleImages from "./components/SampleImages";
import ActionButtons from "./components/ActionButtons";
import app from 'firebase/app';
import 'firebase/analytics';

function App() {
  const [mainItem, setMainItem] = useState(onSellItems[0].value);
  const [coloredType, setColoredType] = useState(
    coloredTypes.celluloidColored.value
  );
  const [commissionType, setCommissionType] = useState(
    commissionTypes.gatcha.value
  );
  const [additionalPriceMin, setAdditionalPriceMin] = useState(0);
  const [additionalPriceMax, setAdditionalPriceMax] = useState(0);
  const setPrice = ({ min, max }) => {
    setAdditionalPriceMin(min);
    setAdditionalPriceMax(max);
  };

  useEffect(() => {
    initFirebaseAnalytics()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ActionButtons />
        <QuotationPrice
          mainItem={mainItem}
          coloredType={coloredType}
          commissionType={commissionType}
          additionalPriceMin={additionalPriceMin}
          additionalPriceMax={additionalPriceMax}
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
        <Selections.AdditionalCheckboxField
          mainItem={mainItem}
          setPrice={setPrice}
        />
      </header>
      <div>
        <SampleImages mainItem={mainItem} coloredType={coloredType} />
      </div>
    </div>
  );

  function initFirebaseAnalytics() {
    app.initializeApp({
      apiKey: "AIzaSyBN5WNCmgZle4OmCOW7rgT5_7W_f2rl8DY",
      authDomain: "joyqul-commission-quotation.firebaseapp.com",
      projectId: "joyqul-commission-quotation",
      storageBucket: "joyqul-commission-quotation.appspot.com",
      messagingSenderId: "75582009227",
      appId: "1:75582009227:web:cddcf3a1e035384be7498e",
      measurementId: "G-ZSK6T6HK3F"
    })

    app.analytics()
    app.analytics().logEvent('view_home_page')
  }
}

export default App;

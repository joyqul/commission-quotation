import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { basePrices } from "./config";

const QuotationPrice = ({
  mainItem,
  coloredType,
  commissionType,
  additionalPriceMin,
  additionalPriceMax,
}) => {
  const [price, setPrice] = useState("");

  const updateCurrentPrice = () => {
    const getPrice = () => {
      try {
        const basePrice = basePrices[mainItem][coloredType][commissionType];
        if (additionalPriceMin === additionalPriceMax)
          return basePrice + additionalPriceMin;
        return `${basePrice + additionalPriceMin}~${
          basePrice + additionalPriceMax
        }`;
      } catch (error) {
        return "未知";
      }
    };
    setPrice(getPrice());
  };

  useEffect(updateCurrentPrice, [
    mainItem,
    coloredType,
    commissionType,
    additionalPriceMin,
    additionalPriceMax,
  ]);

  return (
    <TextField
      InputProps={{
        readOnly: true,
        style: { textAlign: "center" },
      }}
      label={"估價金額"}
      value={price}
    />
  );
};
export default QuotationPrice;

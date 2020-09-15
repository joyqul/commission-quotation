import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { basePrices } from "./config";

const QuotationPrice = ({ mainItem, coloredType, commissionType }) => {
  const [price, setPrice] = useState("");

  const updateCurrentPrice = () => {
    const getPrice = () => {
      try {
        const basePrice = basePrices[mainItem][coloredType][commissionType];
        return basePrice;
      } catch (error) {
        return "未知";
      }
    };
    setPrice(getPrice());
  };

  useEffect(updateCurrentPrice, [mainItem, coloredType, commissionType]);

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

import React from "react";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import { onSellItems, coloredTypes, basePrices } from "./config";
import {
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@material-ui/core";

const MainItem = ({ value, setValue }) => {
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Select value={value} onChange={onChange}>
      {onSellItems.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

const RadioLabel = ({ text }) => <span style={{ color: "#000" }}>{text}</span>;
const ColoredType = ({ mainItemValue, value, setValue }) => {
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const coloredTypeKeys = Object.keys(coloredTypes);
  return (
    <RadioGroup value={value} onChange={onChange} row>
      {coloredTypeKeys.map((key) => {
        const item = coloredTypes[key];
        const basePrice = basePrices[mainItemValue][item.value];
        if (!basePrice) return null;
        return (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={<RadioLabel text={item.label} />}
          />
        );
      })}
    </RadioGroup>
  );
};
export default { ColoredType, MainItem };

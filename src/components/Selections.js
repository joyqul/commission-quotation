import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import {
  onSellItems,
  coloredTypes,
  basePrices,
  commissionTypes,
  additionalFields,
} from "./config";
import {
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
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
const ColoredType = ({ mainItem, value, setValue }) => {
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const coloredTypeKeys = Object.keys(coloredTypes);
  return (
    <RadioGroup value={value} onChange={onChange} row>
      {coloredTypeKeys.map((key) => {
        const item = coloredTypes[key];
        const basePrice = basePrices[mainItem][item.value];
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

const CommissionType = ({ value, setValue }) => {
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const commissionTypeKeys = Object.keys(commissionTypes);
  return (
    <RadioGroup value={value} onChange={onChange} row>
      {commissionTypeKeys.map((key) => {
        const item = commissionTypes[key];
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

const AdditionalCheckboxField = ({ mainItem, setPrice }) => {
  const [state, setState] = useState({});
  const additionalField = additionalFields[mainItem];

  const resetState = () => {
    if (!additionalField) {
      setState({});
      return;
    }
    const keys = additionalField.map((f) => f.key);
    const newState = {};
    for (const key of keys) {
      newState[key] = null;
    }
    setState(newState);
  };
  const recalculatePrice = () => {};

  const onChange = (value, event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked ? value : null,
    });
  };

  useEffect(resetState, [mainItem]);
  if (!additionalField) return null;
  return (
    <div row={"true"}>
      {additionalField.map((f) => (
        <FormControlLabel
          key={f.value}
          name={f.key}
          control={<Checkbox checked={state[f.key] === f.value} />}
          label={<RadioLabel text={f.label} />}
          onChange={(e) => onChange(f.value, e)}
        />
      ))}
    </div>
  );
};

export default {
  AdditionalCheckboxField,
  CommissionType,
  ColoredType,
  MainItem,
};

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
  Card,
  Collapse,
  CardActions,
  IconButton,
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

const RadioLabel = ({ text, style }) => (
  <span style={{ color: "#000", ...style }}>{text}</span>
);
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
  const [expanded, setExpanded] = useState(true);
  const additionalField = additionalFields[mainItem];
  const itemNumberPerRow = 6;

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
    recalculatePrice();
  };

  const recalculatePrice = (currentState = state) => {
    if (!additionalField) setPrice({ min: 0, max: 0 });
    let min = 0,
      max = 0;
    for (const field of additionalField) {
      if (currentState[field.key] === field.value) {
        min += (field.price || 0) + (field.minPrice || 0);
        max += (field.price || 0) + (field.maxPrice || 0);
      }
    }
    setPrice({ min, max });
  };

  const onChange = (value, event) => {
    const newState = {
      ...state,
      [event.target.name]: event.target.checked ? value : null,
    };
    if (!event.target.checked) {
      for (const f of additionalField) {
        if (f.enabledOnlyIfKeySet === event.target.name) {
          newState[f.key] = null;
        }
      }
    }
    setState(newState);
    recalculatePrice(newState);
  };

  const handleExpandClick = ()=>{
    setExpanded(!expanded)
  }

  useEffect(resetState, [mainItem]);
  if (!additionalField) return null;
  return (
    <Card>
      <CardActions disableSpacing>
        <IconButton
          style={{width: '100%', fontSize:14, height: 24}}
          onClick={handleExpandClick}
        >{expanded? '收起': '更多選項'}</IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div row={"true"}>
          {additionalField.map((f, index) => {
            const disabled =
              f.enabledOnlyIfKeySet && !state[f.enabledOnlyIfKeySet];
            const labelStyle = disabled ? { color: "#aaa" } : {};
            return (
              <React.Fragment key={f.label}>
                {index % itemNumberPerRow === 0 && <hr />}
                <FormControlLabel
                  key={f.label}
                  name={f.key}
                  disabled={disabled}
                  control={<Checkbox checked={state[f.key] === f.value} />}
                  label={<RadioLabel text={f.label} style={labelStyle} />}
                  onChange={(e) => onChange(f.value, e)}
                />
              </React.Fragment>
            );
          })}
        </div>
      </Collapse>
    </Card>
  );
};

export default {
  AdditionalCheckboxField,
  CommissionType,
  ColoredType,
  MainItem,
};

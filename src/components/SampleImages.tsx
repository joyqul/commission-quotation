import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Gallery, { ImageOptionsProps } from "react-grid-gallery";
import { sampleImages, sampleImageTypes } from "./config";
import { RadioLabel } from './Selections'

const allImageTypesKey = Object.keys(sampleImageTypes);

const ConstraintCheckboxes = ({ onChange, checkedKeys }: { onChange: Function, checkedKeys: string[] }) => {
  return (
    <>
      {allImageTypesKey.map((key) => {
        const target = sampleImageTypes[key];
        const { label, value } = target;
        return (
          <FormControlLabel
            key={label}
            name={label}
            control={<Checkbox checked={checkedKeys.includes(value)} />}
            label={<RadioLabel text={label} />}
            onChange={(e) => onChange(value, e)}
          />
        );
      }
      )}
    </>
  );
}

const SampleImages = ({ mainItem, coloredType }: { mainItem: number, coloredType: number }) => {
  const defaultImages: ImageOptionsProps[] = [];
  const [displayImages, setDisplayImages] = useState(defaultImages);
  const defaultDisplayKeys = allImageTypesKey;
  const [state, setState] = useState(defaultDisplayKeys);

  const updateDisplayImages = (currentState = state) => {
    const images = (sampleImages[mainItem][coloredType] || defaultImages).filter(image => currentState.includes(image.type)).map(
      (image) => ({
        thumbnail: image.src,
        ...image,
      })
    );
    setDisplayImages(images);
  };

  const changeDisplayKeys = (value: string, event: React.ChangeEvent<any>) => {
    const { checked } = event.target;
    const newState = state.filter(s => s !== value || checked)
    if (checked) {
      newState.push(value)
    }
    setState(newState)
    updateDisplayImages(newState);
  }

  useEffect(updateDisplayImages, [mainItem, coloredType]);
  return (
    <>
      <ConstraintCheckboxes checkedKeys={state} onChange={changeDisplayKeys} />
      {displayImages.length === 0 && (<p>暫無範例</p>)}
      {displayImages.length > 0 && <Gallery images={displayImages} backdropClosesModal={true} rowHeight={300} />}
    </>
  );
};
export default SampleImages;

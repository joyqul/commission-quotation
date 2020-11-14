import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import { sampleImages, sampleImageTypes } from "./config";
import { RadioLabel } from './Selections'

const allImageTypesKey = Object.keys(sampleImageTypes);

const ConstraintCheckboxes = ({ onChange, checkedKeys }) => {
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

const SampleImages = ({ mainItem, coloredType }) => {
  const defaultImages = [];
  const [displayImages, setDisplayImages] = useState(defaultImages);
  const defaultDisplayKeys = allImageTypesKey;
  const [state, setState] = useState(defaultDisplayKeys);

  const updateDisplayImages = (currentState = state) => {
    const images = (sampleImages[mainItem][coloredType] || defaultImages).filter(image => currentState.includes(image.type)).map(
      (image) => ({
        thumbnail: image.src,
        thumbnailWidth: 100,
        ...image,
      })
    );
    setDisplayImages(images);
  };

  const changeDisplayKeys = (value, event) => {
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
      {displayImages.length > 0 && <Gallery images={displayImages} backdropClosesModal={true} />}
    </>
  );
};
export default SampleImages;

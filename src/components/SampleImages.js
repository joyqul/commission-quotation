import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { sampleImages } from "./config";

const SampleImages = ({ mainItem, coloredType }) => {
  const defaultImages = [];
  const [displayImages, setDisplayImages] = useState(defaultImages);

  const updateDisplayImages = () => {
    setDisplayImages(sampleImages[mainItem][coloredType] || defaultImages);
  };

  useEffect(updateDisplayImages, [mainItem, coloredType]);

  const onClickItem = (index) => {
    const link = displayImages[index];
    window.open(link, "_blank");
  };

  return (
    <div>
      <Carousel onClickItem={onClickItem}>
        {displayImages.map((uri) => (
          <img src={uri} style={{ maxWidth: 500 }} />
        ))}
      </Carousel>
    </div>
  );
};
export default SampleImages;

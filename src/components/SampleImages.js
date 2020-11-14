import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from "react-grid-gallery";
import { sampleImages } from "./config";

const SampleImages = ({ mainItem, coloredType }) => {
  const defaultImages = [];
  const [displayImages, setDisplayImages] = useState(defaultImages);

  const updateDisplayImages = () => {
    const images = (sampleImages[mainItem][coloredType] || defaultImages).map(
      (image) => ({
        thumbnail: image.src,
        thumbnailWidth: 100,
        ...image,
      })
    );
    setDisplayImages(images);
  };

  useEffect(updateDisplayImages, [mainItem, coloredType]);

  if (displayImages.length === 0) {
    return <p>暫無範例</p>;
  }
  return <Gallery images={displayImages} backdropClosesModal={true} />;
};
export default SampleImages;

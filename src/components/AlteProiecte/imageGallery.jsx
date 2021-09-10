import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const Galerie = ({ items }) => {
  return (
    <ImageGallery
      slideDuration={300}
      autoPlay={true}
      showNav={false}
      showPlayButton={false}
      items={items}
      lazyLoad={true}
      disableThumbnailScroll={true}
    />
  );
};

export default Galerie;

import React from "react";

const Image = props => {
  const { image } = props;

  return (
    <div className="single-photo">
      <img src={image.urls.thumb} alt={image.name} />
    </div>
  );
};

export default Image;

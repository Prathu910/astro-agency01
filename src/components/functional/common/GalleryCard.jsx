import React from "react";

const GalleryCard = ({ img }) => {
  return (
    <div>
      <div className="item-box All Brand">
        <img src={img} alt="image" width={326} height={474} />
      </div>
    </div>
  );
};

export default GalleryCard;

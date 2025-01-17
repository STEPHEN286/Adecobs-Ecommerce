import React, { useState } from "react";

export default function ProductImages({ images }) {
  const [activeImageId, setActiveImageId] = useState(0);

  const handleClick = (index) => {
    setActiveImageId(index);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-4">
          <img
            src={images[activeImageId]?.url}
            alt="Havic HV G-92 Gamepad"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <img
              src={image.url}
              key={index}
              alt="Thumbnail 1"
              className="w-20 h-20 rounded-lg border cursor-pointer"
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

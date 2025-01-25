import React, { useState } from "react";

export default function ProductImages({ images, description }) {
  const [activeImageId, setActiveImageId] = useState(0);

  const handleClick = (index) => {
    setActiveImageId(index);
  };

  return (
    
      <div className="h-full  flex flex-col overflow-y-hidden">
       
          <div className="mb-4 max-h-52 max-w-full md:max-h-[467px]  hidden md:block">
            <img
              src={images[activeImageId]?.url}
              alt="Havic HV G-92 Gamepad"
              className=" w-full overflow-hidden flex justify-center items-center max-h-full max-w-full  object-contain rounded-lg"
            />
          </div>
          <div className="flex gap-4 ">
            {images.map((image, index) => (
              <img
                src={image.url}
                key={index}
                alt="Thumbnail 1"
                className="md:w-20 md:h-20 h-72  w-72 rounded-lg border cursor-pointer"
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
      

       
      </div>
   
  );
}

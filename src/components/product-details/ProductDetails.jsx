import React, { useState } from "react";
import ProductImages from "./ProductImages";
import { ShareIcon } from "@heroicons/react/24/outline";


const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  // const [showDetails, setShowDetails] = useState(false);
  const { name, price, description, images, color, size } = product;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // const toggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div className="max-w-7xl  mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Image Gallery */}
        <ProductImages images={images} description={description} />
 
        {/* Product Info */}
        <div className="  space-y-8 ">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-gray-600">(150 Reviews)</span>
            <span className="text-green-600">In Stock</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">${price}</p>

          {/* Product Description with Details Toggle */}
         

          {color && color.value !== "N/A" && (
            <div className="flex items-center gap-4">
              <h3 className="font-medium">Colour:</h3>
              <button
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color.value }}
              ></button>
            </div>
          )}


{size.value !== "not applied" &&  (
            <div className="flex items-center gap-4">
              <h3 className="font-medium">Size:</h3>
              <div className="flex gap-2">
               
                    <button
                      key={size.id}
                      className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-200"
                    >
                      {size.name}
                    </button>
                
              </div>
            </div>
          )}

          
          {/* Quantity */}
          <div className="flex items-center gap-4">
            <h3 className="font-medium">Quantity:</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-200"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex gap-4">
            <button className="  px-6 py-2 border rounded-md">
            <ShareIcon  className="text-gray-500 w-6 h-6" />
            </button>
            <button className="  px-6 py-2 rounded-md bg-cta-button  text-md font-medium text-white">
            add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

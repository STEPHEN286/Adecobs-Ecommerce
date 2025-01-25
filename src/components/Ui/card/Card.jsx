import { memo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import { useNavigate } from "react-router";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { EyeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { toast, Toaster } from "sonner";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  

  const { id, name, images, price, discountedPrice, discount } = product;

  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        discount,
        discountedPrice,
        image: images[0].url,
        quantity: 1, // default quantity
      })
    );
    toast('Item added to cart', {duration: 800})
  };

  const handleNavigate = () => navigate(`/product-details/${id}`);

  const handleLikeToggle = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  return (
    <div
      onClick={handleNavigate}
      className="relative w-[200px] min-w-[200px] h-[300px] overflow-hidden group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <Toaster position="top-center" />
      {/* Product Image Section */}
      <div className="relative bg-gray-100  h-40">
        <img
          src={images[0].url}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-2 left-2 text-xs font-semibold text-green-500 bg-green-100 px-1 rounded">
            {discount}%
          </span>
        )}
        {/* Wishlist Button */}
        <button
          onClick={handleLikeToggle}
          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white transition duration-200"
        >
          {isLiked ? (
            <FaHeart className="w-4 h-4 text-red-500" />
          ) : (
            <FaRegHeart className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Add to Cart Button (Appears on Hover) */}
      <div
    className={`  border-t p-2 absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 flex space-x-2 transition-all duration-300`}
  >
    {/* Add to Cart Button */}
 

{/* View Product Button */}
<button
  onClick={handleNavigate}
  className=" px-3  flex justify-center items-center font-semibold text-sm rounded-lg shadow-md border-2 border-gray-500 text-gray-500 hover:border-gray-600 hover:text-gray-600 transition-all duration-300"
>
  View Product
</button>

<button
  id="cartStatus"
  onClick={(e) => handleAddToCart(e)}
  className= "p-3 flex justify-center items-center font-semibold text-sm rounded-lg shadow-md transition-all duration-300 bg-cta-button text-white hover:bg-cta-hover hover:shadow-lg " 
>
 
  <BsCartPlus />
</button>
  </div>


     
      <div className="p-3 space-y-2">
        <h2    className={`text-sm font-medium text-nowrap text-gray-800 ${name.length > 30 ? 'group-hover:animate-scrollX' : ''}`} title={name}>
          {name}
        </h2>

       
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-800">
            {currencyFormatter.format(price)}
          </span>
          {discount > 0 && (
            <span className="text-xs text-gray-500 line-through">
              {currencyFormatter.format(discountedPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);

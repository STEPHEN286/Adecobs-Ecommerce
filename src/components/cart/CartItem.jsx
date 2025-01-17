import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { currencyFormatter } from "../../utils/currencyFormatter";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (productId) => {
    dispatch(cartActions.removeItem({ id: productId }));

    console.log(productId);
  };
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
     
      <div className="flex items-start gap-4">
       
        <img
          src={product.image}
          alt="Artwork Tee"
          className="w-20 h-20 object-cover rounded-lg"
        />

        {/* Product Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">Mint</p>
          <p className="text-sm text-gray-600">Medium</p>
          <div className="flex items-center gap-1 mt-2">
            {/* In Stock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-green-600">In stock</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-lg font-medium text-gray-800">GH&#8373;{product.discountedPrice}</p>
        <p className="text-lg font-medium text-gray-800">{product.quantity}</p>
        <button
          onClick={() => handleRemoveFromCart(product.id)}
          className="mt-2 text-sm text-red-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

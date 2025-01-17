
import CartItem from "./CartItem";
import OrderReview from "./OrderReview";
import { useSelector } from "react-redux";

function CartItems() {

  const cartItems = useSelector((state) => state.cart.cartItems);



  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full  lg:w-2/4 px-4 mb-6">
          <h5 className="border-b border-gray-300 pb-2 text-lg font-semibold">
            Cart ({cartItems.length})
          </h5>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 mt-4">No items in the cart.</p>
          ) : (
            cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="p-4 bg-white flex flex-col gap-4 mb-4"
              >
                <CartItem product={cartItem} />
              </div>
            ))
          )}
        </div>

        <div
          className={`${
            cartItems.length === 0 ? "hidden" : ""
          } w-full  lg:w-2/4 px-4`}
        >
          <OrderReview />
        </div>
      </div>
    </div>
  );
}

export default CartItems;

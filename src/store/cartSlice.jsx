import { createSlice } from "@reduxjs/toolkit";






function getInitials (){
  const carts  = JSON.parse(localStorage.getItem("carts")) || []
  return {
    cartItems:  carts,
    totalPriceInCart: calculateTotalPrice(carts)
  }
}

const calculateTotalPrice = (cartItems) =>
  cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

const initialState = getInitials()
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isItemExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      isItemExist
        ? (isItemExist.quantity += 1)
        : state.cartItems.push({ ...action.payload, quantity: 1 });

      // console.log("isClicked");
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
      
      state.totalPriceInCart = calculateTotalPrice(state.cartItems);
      console.log(JSON.parse(localStorage.getItem("carts")));
    },
    removeItem(state, action) {
      const { id } = action.payload;

      const carts = JSON.parse(localStorage.getItem("carts"));
      state.cartItems = carts.filter((item) => item.id !== id);

      localStorage.setItem("carts", JSON.stringify(state.cartItems));
      state.totalPriceInCart = calculateTotalPrice(state.cartItems);
      // state.cartItems = state.cartItems.filter((item) => item.id !== id);
      // console.log("IsDeleted");

      // if (process.env.NODE_ENV === "development") {
      //   console.log(`Item with id ${action.payload.id} removed from cart.`);
      // }
    },

    increaseQuantity(state, action) {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity += 1;
      state.totalPriceInCart = calculateTotalPrice(state.cartItems);
    },

    increaseDecrease(state, action) {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity -= 1;
      state.totalPriceInCart = calculateTotalPrice(state.cartItems);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

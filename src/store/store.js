import { configureStore} from "@reduxjs/toolkit";
import userProgressSliceReducer from "./userProgressSlice";
import cartSliceReducer from "./cartSlice";
import userSliceReducer from "./AuthSlice"



const store = configureStore({
  reducer: {
    userProgress: userProgressSliceReducer,
    cart: cartSliceReducer,
    user: userSliceReducer,
  }
});
  

export default store;
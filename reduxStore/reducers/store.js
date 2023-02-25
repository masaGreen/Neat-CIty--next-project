import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = configureStore({
  reducer: {
    cartItems: cartReducer,
  },
});

export default reducer;

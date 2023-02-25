import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  quantity: 0,
};

const CartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const found = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (found) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === found.id ? { ...item, num: action.payload.num } : item
        );
      }
      if (!found) {
        state.cartItems.push(action.payload);
      }
    },
    changeQuantity: (state, action) => {
      console.log(action.payload);
      if (action.payload === "+") {
        state.quantity++;
      }
      if (action.payload === "-") {
        state.quantity--;
      }
    },
  },
});
export const { addToCart, changeQuantity } = CartSlice.actions;
export default CartSlice.reducer;

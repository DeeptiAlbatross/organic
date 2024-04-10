import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: 0,
  itemsInCart: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {},
    removeAll: (state) => {
      state.cartItems = 0;
      state.itemsInCart = [];
      state.total = 0;
    },
    addToCart(state, action) {
      const updatedItemsInCart = [...state.itemsInCart, action.payload];
      return {
        ...state,
        itemsInCart: updatedItemsInCart,
        cartItems: state.cartItems + 1, // Increment the number of items in the cart
        total: state.total + action.payload.price // Add the price of the new item to the total
      };
    
    },
    // showCart: (state) => {
    //   state.hidden = !state.hidden;
    // },
  },
});
export const {addToCart, removeAll, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
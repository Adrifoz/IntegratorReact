import { addItemToCart } from './elementsCart';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    },
  }
  });

  // export const { addToCart, removeFromCart, clearCart, toggleHiddenCart } =
  export const { addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
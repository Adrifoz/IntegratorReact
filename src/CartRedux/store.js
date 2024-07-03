import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartRedux/cartSlice';
import productsReducer from '../CartRedux/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

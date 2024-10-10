import { createSlice } from "@reduxjs/toolkit";
import { addToCartUtil } from "./cartUtils";

const initialState= {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    quantity: 0
};

export const cartSlice= createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));  // Guardar en localStorage
          },
        reset: (state) => {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify([]));  // Limpiar localStorage
        }
    }
})

export const {addToCart, reset} = cartSlice.actions;
export default cartSlice.reducer;

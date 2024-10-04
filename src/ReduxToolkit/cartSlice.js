import { createSlice } from "@reduxjs/toolkit";
import { addToCartUtil } from "./cartUtils";

const initialState= {
    cartItems: [],
    quantity: 0
};

export const cartSlice= createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            return {...state, quantity: state.quantity+1,
            cartItems: addToCartUtil(state.cartItems, action.payload)
            }
        },
        reset: (state) => {
            return initialState
        }
    }
})

export const {addToCart, reset} = cartSlice.actions;
export default cartSlice.reducer;

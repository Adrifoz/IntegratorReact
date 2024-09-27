import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    quantity: 0
};

export const cartSlice= createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state) => {
            return {...state, quantity: state.quantity+1};
        },
        reset: (state) => {
            return initialState
        }
    }
})

export const {addToCart, reset} = cartSlice.actions;
export default cartSlice.reducer;

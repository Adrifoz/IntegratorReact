import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    quantity: parseInt(localStorage.getItem('quantity')) || 0,
    total: parseInt(localStorage.getItem('total')) || 0,
};

export const cartSlice= createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.cantidad += 1; // Incrementa la cantidad si ya existe
            } else {
              state.cartItems.push({ ...action.payload, cantidad: 1 }); // Agregar nuevo con cantidad 1
            }
            state.quantity += 1;
            state.total += action.payload.precio;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('quantity', JSON.stringify(state.quantity));
            localStorage.setItem('total', JSON.stringify(state.total));
          },
        reset: (state) => {
            state.cartItems = [];
            state.quantity = 0;
            state.total = 0;
            localStorage.setItem('cartItems', JSON.stringify([]));
            localStorage.setItem('quantity', JSON.stringify(0));
            localStorage.setItem('total', JSON.stringify(0));
        },
      
        restToQuantity(state, action) {
          const existingItem = state.cartItems.find(item => item.id === action.payload.id);
          if (existingItem) {
              if (existingItem.cantidad > 1) {
                  existingItem.cantidad -= 1; // Decrementar cantidad si es mayor a 1
              } else {
                  state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // Eliminar si la cantidad es 1
              }
              state.quantity -= 1;
              state.total -= existingItem.precio;
              localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
              localStorage.setItem('quantity', JSON.stringify(state.quantity));
              localStorage.setItem('total', JSON.stringify(state.total));
          }
        },

        addToQuantity(state, action){
          const existingItem = state.cartItems.find(item => item.id === action.payload.id);
          if (existingItem) {
            existingItem.cantidad += 1; // Incrementa la cantidad si ya existe
          } else {
            state.cartItems.push({ ...action.payload, cantidad: 1 }); // Agregar nuevo con cantidad 1
          }
          state.quantity += 1;
          state.total += action.payload.precio;
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
          localStorage.setItem('quantity', JSON.stringify(state.quantity));
          localStorage.setItem('total', JSON.stringify(state.total));
        },

        removeToCart(state, action) {
          const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // Eliminar el item completo
                state.quantity -= existingItem.cantidad; // Restar la cantidad total del item eliminado
                state.total -= existingItem.precio * existingItem.cantidad; // Restar el precio total del item eliminado
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                localStorage.setItem('quantity', JSON.stringify(state.quantity));
                localStorage.setItem('total', JSON.stringify(state.total));
            }
        }
    }
})

export const {addToCart, reset, restToQuantity, addToQuantity, removeToCart} = cartSlice.actions;
export default cartSlice.reducer;

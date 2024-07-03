import { createSlice } from '@reduxjs/toolkit';

export const productos= [
    {
        id: 1,
        nombre:"Canilla de lavatorio",
        imagen: "src/assets/canilladelavatorio.webp",
        precio:"$25000",
        destacado: "1"
    },
    {
        id: 2,
        nombre:"Canilla de mesada",
        imagen: "src/assets/canillademesada.webp",
        precio:"$40000",
        destacado:"0"
    },
    {
        id: 3,
        nombre:"Canilla de pared",
        imagen: "src/assets/canilladepared.png",
        precio:"$35000",
        destacado: "1"
    },
    {
        id: 4,
        nombre:"Llave de paso",
        imagen: "src/assets/llavedepaso.jpg",
        precio:"$7000",
        destacado:"0"
    },
];



const initialState = {
  items: [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

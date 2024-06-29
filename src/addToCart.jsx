import React, { useState } from 'react';



const addToCart = (productos) => {
    const [cart, setCart] = useState([]);
    const cartItems = cart;

  const existingItem = cart.find((item) => item.id === productos.id);
  if (existingItem) {
    setCart(
      cart.map((item) =>
        item.id === productos.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, {  quantity: 1 }]);
  }
};

export default addToCart;
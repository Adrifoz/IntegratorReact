import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../CartRedux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>
        Total: $
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};

export default Cart;
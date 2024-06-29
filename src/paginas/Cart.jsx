
import React from 'react';
import {cartItems} from '../addToCart';
import './Cart.css'

const Cart = () => {
  return ( 
    <>
      <div className="modal">
      <div className="modal-content">
    
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>
        Total: $
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h3>
      
      </div>
      </div>
    </>
  );
  
};

export default Cart;

// Corregir llamado a funcion changeClass desde Cart y Layout





// div className={`${!cartOpen ? 'default' : 'modified'}`}>
      //    <div className='modified'>
      // <h2>Carrito</h2>
      // </div>
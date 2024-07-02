import { useDispatch } from "react-redux";
// import { formatPrice } from "./elementsCart";
import React from 'react';
import {addToCart} from '../addToCart';
import './Cart.css'
import { formatPrice } from "./elementsCart";

const Cart = () => {
  return ( 
    <>
      <div className="modal">
      <div className="modal-content">
    
      <h2>Cart</h2>
     
      <div>{precio}</div>
    
  

        {/* <p>{quantity}</p> */}
        <button
          onClick={() => dispatch(addToCart({nombre, precio, id}))}
        >Incrementar
          </button>

      </div>
      </div>
    </>
  )
};

export default Cart;
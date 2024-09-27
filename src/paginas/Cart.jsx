import React from 'react';
import '../CSS/Cart.css';
import { useSelector } from 'react-redux';

const Cart = ({ onClose }) => {
const quantity = useSelector((state) => state.quantity)

  return ( 
    <>
      <div className="contentCart">
      <div className="cart">
        <span className="close" onClick={onClose}></span>
        <h3>Contenido de la pestaña superpuesta...</h3>
        <p>{quantity}</p>
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
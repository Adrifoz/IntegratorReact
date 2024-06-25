
import React from 'react';
import './Cart.css'

const Cart = ({ onClose }) => {
  return ( 
    <>
      <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Contenido de la pestaña superpuesta...</p>
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
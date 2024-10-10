import React from 'react';
import '../CSS/Cart.css';
import { useSelector } from 'react-redux';
import { reset } from '../ReduxToolkit/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = ({ onClose }) => {
const quantity = useSelector((state) => state.quantity)
const produc = useSelector((state) => state.cartItems)
const dispatch = useDispatch();

  return ( 
    <>
      <div className="contentCart">
      <div className="cart">
        <span className="close" onClick={onClose}></span>
        <h3>Contenido del carrito:</h3>
          <div className="produc">
            {produc.map((item, index) => (
              <div className='cardProduct' key={index}>
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            ))}
          </div>
          <p className='totalCart'>Total de productos: {quantity}</p>
          <button onClick={() => dispatch(reset())}>Limpiar</button>
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
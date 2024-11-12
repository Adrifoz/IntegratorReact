import React from 'react';
import '../CSS/Cart.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { restToQuantity, addToQuantity, removeToCart, reset} from '../ReduxToolkit/cartSlice';
import { Link } from 'react-router-dom';
import States from './StatesControls';


const Cart = () => {
const quantity = useSelector((state) => state.quantity)
const total = useSelector((state) => state.total)
const produc = useSelector((state) => state.cartItems)
const dispatch = useDispatch();

const  { toggles } = States();


  return ( 
    <>
      <div className="contentCart">
        <h3 className='titleCart'>Contenido del carrito:</h3>
        <div className="cart">
            <div className="produc">
              {produc.map((item, index) => (
                <div className="cardProduct" key={index}>
                  <h4 className='titleProdCart'>{item.nombre}</h4>
                  <p>Precio: ${item.precio}</p>
                  <div className='quantity'>
                    <p>Cantidad: {item.cantidad}</p>
                    <div className='quantityButtons'>
                      <button className='buttonCart' onClick={() => dispatch(addToQuantity({ id: item.id, precio: item.precio }))}>+</button>
                      <button className='buttonCart' onClick={() => dispatch(restToQuantity({ id: item.id, precio: item.precio }))}>-</button>
                    </div>
                  </div>
                  <button className='buttonCart' onClick={() => dispatch(removeToCart({ id: item.id, precio: item.precio }))}>Remover</button>
                </div>
              ))}
            </div>
            <p className='totalCart'>Total: ${total}</p>
            <p className='totalProd'>Cantidad de productos: {quantity}</p>
            
            <div className='buttonsCart'>
              <button className='buttonCart' onClick={() => dispatch(reset())}>Limpiar</button>
              <Link className='buttonCart' id='linkBuy' onClick={{toggles}} to="/BuyForm" >Comprar</Link>
          </div>
      </div>
    </div>
    </>
  );
  
};

export default Cart;

import React from 'react';
import { useSelector } from 'react-redux';
import { reset } from '../ReduxToolkit/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import States from './StatesControls';
import '../CSS/BuyConfirm.css';


const BuyConfirm = () => {
const quantity = useSelector((state) => state.quantity)
const total = useSelector((state) => state.total)
const produc = useSelector((state) => state.cartItems)
const dispatch = useDispatch();

const { resetAndToggles } = States();


return ( 
    <>
    <div className="container">
        <h3 className='titleConfirm'>Lista de productos:</h3>


            <div className="producConfirm">
            {produc.map((item, index) => (
                <div className="cardConfirm" key={index}>
                <p className='titleProdConfirm'>{item.nombre}</p>
                <p>Precio: ${item.precio}</p>
                <div className='quantity'>
                    <p>Cantidad: {item.cantidad}</p>
                </div>

                </div>
            ))}
            </div>
            <p className='totalCart'>Total: ${total}</p>
            <p className='totalconfirm'>Cantidad de productos: {quantity}</p>
            
            <div className='buttonsCart'>
            <Link className='buttonCart' to='/' onClick={() => dispatch(reset())} >Cancelar</Link>
            <Link className='buttonCart' id='linkBuy' onClick={resetAndToggles} to="/Congrulations" >Confirmar</Link>
        </div>

        <footer className='footerBuyAndConfirm'>
            <p className='description'>Garantía en todos los productos.</p>
            <p>Plomería y Gas Necochea ©copyright</p>
        </footer>

    </div>
    </>
);  

};

export default BuyConfirm;
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Felicitaciones.css';

const Felicitaciones = () => {

  return (
    <div className='usContainer'>
    <div className="CardSuccessContent">
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu pedido ha sido recibido con éxito.</p>
      <div className="order-details">
        <h2>Compra realizada. Felicitaciones!!</h2>
      </div>
      <Link to="/Productos" className="linkSucess">Seguir Comprando</Link>
    </div>
    
            
        
      <footer>

        .<p className='description'>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
      <p>Plomería y Gas Necochea ©copyright</p>
      
      </footer>
    </div>
  );
};

export default Felicitaciones;
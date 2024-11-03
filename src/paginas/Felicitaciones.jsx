import React from 'react';
import { Link } from 'react-router-dom';


const Felicitaciones = () => {

  return (
    <div className='usContainer'>
    <div className="headerContent">
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu pedido ha sido recibido con éxito.</p>
      <div className="order-details">
        <h2>Compra realizada. Felicitaciones!!</h2>
      </div>
      <Link to="/" className="continue-shopping">Seguir Comprando</Link>
    </div>
    
            <p className='description'>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
        
      <footer>
      <p>Plomería y Gas Necochea ©copyright</p>
      </footer>
    </div>
  );
};

export default Felicitaciones;
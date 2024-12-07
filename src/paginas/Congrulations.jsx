import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Congrulations.css';

const Congrulations = () => {

  return (
    <div className='container'>
    <div className="CardSuccessContent">
      <h3>¡Gracias por tu compra!</h3>
      <p>Tu pedido ha sido recibido con éxito.</p>
      <h3>Compra realizada. Felicitaciones!!</h3>
      <Link to="/Productos" className="linkSucess">Seguir Comprando</Link>
    </div>
    
      <footer>

        .<p className='description'>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>
      <p>Plomería y Gas Necochea ©copyright</p>
      
      </footer>
    </div>
  );
};

export default Congrulations;
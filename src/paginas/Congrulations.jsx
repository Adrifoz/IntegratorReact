import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Congrulations.css';

const Congrulations = () => {

  return (
    <div className='container'>
    <div className="CardSuccessContent">
      <h3>¡Gracias por tu compra! ¡Felicitaciones!</h3>
      <h3 className='congrulationsMessage'>Compra realizada</h3>
      <p>Tu pedido ha sido recibido con éxito.</p>
      <Link to="/Productos" className="linkContinue">Seguir Comprando</Link>
    </div>
    
      <footer>
        <p className='description'>Para más información no dude en entrar en contacto con nosotros</p>
        <p className='description'> ¡Lo esperamos!</p>
      <p>Plomería y Gas Necochea ©copyright</p>
      </footer>
    </div>
  );
};

export default Congrulations;
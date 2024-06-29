import React from 'react';
import './Home.css';
import FuncionProductos from './FuncionProductos';
import { Link } from "react-router-dom";


function Home () {

  return (
  <>
  <div className='homeContainer'>
    <h1>Bienvenido</h1>

  <div className='hero'>
    <h1>Promería/ Fontanería</h1>
    <p>
    El sistema que distribuye el agua en su casa es uno de los más importantes e indispensables para su bienestar. Una persona consume una media de 136 litros por día.
    Nuestra especialidad es reparar las perdidas de sus canillas, duchas, lavaderos, tocadores, entre otros. También reparamos los desagües para su óptimo funcionamiento, y así se ahorrará de situaciones desagradables en la comodidad de su casa.
    <br/><br/>
    El gas que llega a su casa necesita estar bien manipulado para evitar pérdidas que lo puedan colocar en riesgo a usted y a su familia. Realizamos la conexión de los artefactos que utilizan gas natural o envasado, así como también damos asesoría y soluciones prácticas para su red de gas domiciliaria.</p>
  </div>

      <div className='home'>
          <h3>Artículos recomendados</h3>
          
          <FuncionProductos />
          <Link to="Productos">Ir a Productos</Link>

         
      </div>
  <div class="footer">
    <h3>Plomería y Gas Necochea ©copyright</h3>

    
  </div>

</div>
  </>
  )
};

export default Home;

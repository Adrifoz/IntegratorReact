import React from 'react';
import '../CSS/Home.css';
import FuncionProducts from './FuncionProducts';
import { Link } from "react-router-dom";


function Home () {

  return (
  <>
  <div className='container'>

    <div className='boxTitle'>
        <h1>Bienvenido a su tienda de Promería/ Fontanería</h1>
    </div>

    <div className='paragraph'>
      <p>
      El sistema que distribuye el agua en su casa es uno de los más importantes e indispensables para su bienestar. Una persona consume una media de 136 litros por día.
      Nuestra especialidad es reparar las perdidas de sus canillas, duchas, lavaderos, tocadores, entre otros. También reparamos los desagües para su óptimo funcionamiento, y así se ahorrará de situaciones desagradables en la comodidad de su casa.
      <br/><br/>
      El gas que llega a su casa necesita estar bien manipulado para evitar pérdidas que lo puedan colocar en riesgo a usted y a su familia. Realizamos la conexión de los artefactos que utilizan gas natural o envasado, así como también damos asesoría y soluciones prácticas para su red de gas domiciliaria.</p>
      </div>

    <Link className='link' id='linkAboutUs' to="AboutUs">Sabe más sobre nosotros</Link>


      <div className='home'>
          <h3>Artículos recomendados</h3>
          
          <FuncionProducts />
          <Link className='link' id='linkProducts' to="Productos">Ir a Productos</Link>

      </div>

  <footer>
    <p className='description'>Todos nuestros productos están abalados por la norma ISO 9001.</p>
    <p className='description'>La empresa se reserva todos los derechos de este sítio</p>
    <p>Plomería y Gas Necochea ©copyright</p>
  </footer>

</div>
  </>
  )
};

export default Home;

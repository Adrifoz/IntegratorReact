<<<<<<< HEAD
import React from 'react';
import './Home.css';
import FuncionProductos from './FuncionProductos';
import { Outlet, Link } from "react-router-dom";
// import Productos from './Productos';
// import Buttton from './Buttton';
// import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      
  

  <div className='homeContacto'>
    <h1>
      Contacto
    </h1>
        <h2>
            Celular: 2262666666 / 2262555555
            Mail: plomeriaygas@gmail.com
            Instagram: @plomeriaygasnecochea
        </h2>
        <img src={"https://i.pinimg.com/550x/7e/e6/f6/7ee6f6d7043c1b2e34726d4f71976747.jpg"} alt={"Caricatura de plomero"}/>
  </div>

  <div class="footer">
    <h3>Plomería y Gas Necochea ©copyright</h3>

    
  </div>

</div>
  </>
  )
};

export default Home;
=======
import React from 'react'

function Home() {
  return (
    <div>
        <h1>Bienvenido al acceso a sus compras favoritas</h1>
        <h2>Aqui encontrará todo lo que busca</h2>
    </div>
  )
}

export default Home
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90

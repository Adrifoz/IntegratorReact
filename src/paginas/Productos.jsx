import React from 'react';
import { productos } from "../productos.js";
import Producto from "./Producto.jsx";
import '../CSS/Productos.css';

function Productos() {
  return (

  <>

      <div className="ProductosHome">
          <h2>Artículos de Plomería/Fontanería</h2>
     

      <div className="Productos">
          {productos.map((prod)=>(
              <Producto key={prod.id} {...prod} />
          ))}
      </div>

      <p>Todos los productos están sujetos a disponibilidad de stock.</p>
      <p>Para más información no dude en entrar en contacto con nosotros ¡Lo esperamos!</p>

      </div>

  </>
  )
}

export default Productos
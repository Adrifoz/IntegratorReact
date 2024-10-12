import React from 'react';
import { productos } from "../productos.js";
import Producto from "./Producto.jsx";
import '../CSS/Productos.css';

function Productos() {
  return (

  <>

      <div className="ProductosHome">
          <h2>Artículos de Plomería/Fontanería</h2>
      </div>

      <div className="Productos">
          {productos.map((prod)=>(
              <Producto key={prod.id} {...prod} />
          ))}
      </div>

  </>
  )
}

export default Productos
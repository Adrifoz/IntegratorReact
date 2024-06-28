import React from 'react';
import { productos } from "../productos.js";
import Producto from "./Producto.jsx";
import './Productos.css';

function Productos() {
  return (

  <>

      <div className="ProductosHome">
          <h2>Artículos de Plomería/Fontanería</h2>
      </div>

      <div className="Productos">
          {productos.map((prod)=>(
              <Producto key={prod.id} nombre={prod.nombre} imagen={prod.imagen} precio={prod.precio} />
          ))}
      </div>

  </>
  )
}

export default Productos
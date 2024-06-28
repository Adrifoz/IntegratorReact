<<<<<<< HEAD
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
=======
// import React from 'react'
import { productos } from "../productos"
import Producto from "./Producto"

function Productos() {
  return (
    <div>
        {productos.map((prod)=>(
            <Producto key={prod.id} nombre={prod.nombre} precio={prod.precio} />
        ))}
    </div>
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90
  )
}

export default Productos
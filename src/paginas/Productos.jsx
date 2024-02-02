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
  )
}

export default Productos
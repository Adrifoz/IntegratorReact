<<<<<<< HEAD
import React from "react";

const Producto = ({nombre,imagen,precio}) => {
  return (
  <>
  <div className="Card">

    <div className="CardA">
        <h3>{nombre}</h3>
        <img src={imagen} alt={nombre}/> 
    </div>

    <div className="CardB">

        <p className="Precio">Precio: {precio}</p>
    </div>

  </div>
  </>
  )
}

export default Producto
=======


function Producto({nombre,precio}) {
  return (
    <div>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
    </div>
  )
}

export default Producto
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90

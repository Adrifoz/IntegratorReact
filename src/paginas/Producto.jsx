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

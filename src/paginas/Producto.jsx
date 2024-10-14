import React from "react";
import { addToCart } from "../ReduxToolkit/cartSlice";
import { useDispatch } from "react-redux";

const Producto = ({id, nombre, imagen, precio}) => {
  const dispatch = useDispatch();

  return (
  <>
  <div className="Card">

    <div className="CardA">
        <h3 className="titleCard">{nombre}</h3>
        <img src={imagen} alt={nombre}/> 
    </div>

    <div className="CardB">

        <p className="Precio">Precio: ${precio}</p>
        <button onClick={() => dispatch(addToCart({id, nombre, imagen, precio}))}>Comprar</button>
    </div>

  </div>
  </>
  )
}

export default Producto

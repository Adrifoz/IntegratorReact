import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../CartRedux/cartSlice';

const Producto = ({nombre,imagen,precio}) => {
  // const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  return (
  <>
  <div className="Card">

    <div className="CardA">
        <h3>{nombre}</h3>
        <img src={imagen} alt={nombre}/> 
    </div>

    <div className="CardB">

        <p className="Precio">Precio: {precio}</p>
        <button onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
    </div>

  </div>
  </>
  )
}

export default Producto;

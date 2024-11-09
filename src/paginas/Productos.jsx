import React, { useState } from 'react';
import { productos } from "../productos.js";
import Producto from "./Producto.jsx";
import '../CSS/Productos.css';

function Productos() {
const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(productos.map(producto => producto.categoria))]; // Obtener categorías únicas

  return (

  <>

    <div className="ProductsContainer">
        <h2 className='titleCardProducts'>Artículos de Plomería/Fontanería</h2>

            <div id="containerFilter">
                <div className="filter">
                    <p>Filtrar:</p>
                    <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        <option value=''>Todas las Categorías</option>
                        {categories.map((categoria, index) => (
                        <option key={index} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='sectionProducts'>
                <div className="Products">
                    {productos.filter(producto => selectedCategory === '' || producto.categoria === selectedCategory)
                    .map(prod => (
                        <Producto key={prod.id} {...prod} />
                    ))}
                </div>

            </div>
       
            <p className='description'>Todos los productos están sujetos a disponibilidad de stock.</p>
            <p className='description'>Para más información no dude en entrar en contacto con nosotros.</p>
            <p className='description'>¡Lo esperamos!</p>
        
        <footer>
        <p>Plomería y Gas Necochea ©copyright</p>
        </footer>

    </div>

  </>
  )
}

export default Productos
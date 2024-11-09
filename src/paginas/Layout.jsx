
import { Outlet, Link } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';
import '../CSS/Layout.css';




function Layout() {

    const [cartOpen, setCartOpen] = useState(false);
    const modifield = () => {
        if (cartOpen == false) {
        setCartOpen(true);
      } else {
        setCartOpen(false);
      }}

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const handleMenuToggle = () => { 
            setIsMenuOpen(!isMenuOpen); 
            };
   
    
  return (
    <>
        <nav>
            
            <ul id='NavContainer'>
                <Link className="menuToggle" aria-label="Abrir menú" onClick={handleMenuToggle}> 
                    <span className="bar"></span> 
                    <span className="bar"></span> 
                    <span className="bar"></span> 
                </Link>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link className='navLink' to='/' onClick={handleMenuToggle}>Home</Link>
                    </li>
                    <li>
                        <Link className='navLink' to='Productos' onClick={handleMenuToggle}>Productos</Link>
                    </li>
                    <li>
                        <Link className='navLink' id='aboutUs' to='AboutUs' onClick={handleMenuToggle}>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link className='navLink' to='Contacto' onClick={handleMenuToggle}>Contacto</Link>
                    </li>
                    <li>
                        <Link className='navLink' onClick={modifield}>Carrito</Link>
                        {cartOpen && <Cart />}
                    </li>
                    
                    <ul className='Login'>
                        <li>
                            <Link className='navLink' to='Login' onClick={handleMenuToggle}>Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link className='navLink' to='SignUp' onClick={handleMenuToggle}>Registrarse</Link>
                        </li>
                    </ul>
                </ul>
            </ul>
        </nav>
        <Outlet/>
    </>
  );
}

export default Layout
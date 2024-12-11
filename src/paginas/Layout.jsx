
import { Outlet, Link } from 'react-router-dom';
import Cart from './Cart';
import States from './StatesControls';
import '../CSS/Layout.css'


function Layout() {

const  { cartOpen, isMenuOpen, toggleCart, handleMenuToggle } = States();

    return (
        <>
            <nav>
                
                <ul id='NavContainer'>
                    <Link className="menuToggle" aria-label="Abrir menú" onClick={handleMenuToggle} > 
                        <span className="bar"></span> 
                        <span className="bar"></span> 
                        <span className="bar"></span> 
                    </Link>

                    <ul className={`nav-links ${isMenuOpen ? 'activeMenu' : ''}`} >
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
                        
                        <div className='Login'>
                            <li>
                                <Link className='navLink' to='Login' onClick={handleMenuToggle}>Iniciar Sesión</Link>
                            </li>
                            <li>
                                <Link className='navLink' to='SignUp' onClick={handleMenuToggle}>Registrarse</Link>
                            </li>
                        </div>
                        <li>
                            <Link className='navLink' id='buttonCartNav' onClick={toggleCart}>Carrito</Link>
                            {cartOpen && <Cart />}
                        
                        </li>
                    </ul>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default Layout
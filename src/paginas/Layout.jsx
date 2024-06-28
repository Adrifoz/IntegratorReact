
import { Outlet, Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";
import './Layout.css'
// import toggleMenu from "./toggleMenu";




function Layout() {

    // const changeClass = Cart(changeClass);
    const [cartOpen, setCartOpen] = useState(false);
    const modifield = () => {
        if (cartOpen == false) {
        setCartOpen(true);
      } else {
        setCartOpen(false);
      }}
   
    
  return (
    <>
        <nav>
            <ul id="NavContainer">
                <li>
                    <Link className="navLink" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navLink" to="Productos">Productos</Link>
                </li>
                <li>
                    <Link className="navLink" to="AboutUs">Sobre Nosotros</Link>
                </li>
                <li>
                    <Link className="navLink" to="Contacto">Contacto</Link>
                </li>
                <li>
                    {/* <button className="navLink" onClick={<Cart/>}>Carrito</button> */}
                    <Link className="navLink" onClick={modifield}>Carrito</Link>
                    {cartOpen && <Cart />}
                </li>
                
                <ul className="Login">
                    <li>
                        <Link className="navLink" to="Login">Iniciá Sesión</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="SignUp">Registrate</Link>
                    </li>
                </ul>
            </ul>
        </nav>
        <Outlet/>
    </>
  );
}

export default Layout
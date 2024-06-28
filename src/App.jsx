import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';
import Cart from "./paginas/Cart";
import Login from "./paginas/Login";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='Productos' element={<Productos/>} />
                <Route path='Cart' element={<Cart/>} />
                {/* <Route path='SobreNosotros' element={<SobreNosotros/>} />
                <Route path='Contacto' element={<Contacto/>} /> */}
                <Route path='Login' element={<Login/>} />
                {/* <Route path='SignIn' element={<SignIn/>} /> */}
                <Route path='*' element={<NoPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;


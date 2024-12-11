import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';
import Cart from "./paginas/Cart";
import Login from "./paginas/Login";
import SignUp from "./paginas/SignUp";
import AboutUs from "./paginas/AboutUs";
import Contacto from "./paginas/Contacto";
import Congrulations from "./paginas/Congrulations";
import BuyForm from "./paginas/BuyForm";
import BuyConfirm from "./paginas/BuyConfirm";
import './CSS/App.css';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='Productos' element={<Productos/>} />
                <Route path='Cart' element={<Cart/>} />
                <Route path='AboutUs' element={<AboutUs/>} />
                <Route path='Contacto' element={<Contacto/>} />
                <Route path='Login' element={<Login/>} />
                <Route path='SignUp' element={<SignUp/>} />

                <Route path="Cart" element={<Cart />} /> 

                <Route path="/BuyForm" element={<BuyForm/>}/>
                <Route path="/BuyConfirm" element={<BuyConfirm/>}/>
                <Route path="/Congrulations" element={<Congrulations/>}/>
                <Route path='*' element={<NoPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;


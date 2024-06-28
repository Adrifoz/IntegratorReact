<<<<<<< HEAD
import React from "react";
=======
// import './App.css'
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';
<<<<<<< HEAD
import Cart from "./paginas/Cart";


=======
import './App.css';
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
<<<<<<< HEAD
                <Route path='Productos' element={<Productos/>} />
                <Route path='Cart' element={<Cart/>} />
                {/* <Route path='SobreNosotros' element={<SobreNosotros/>} />
                <Route path='Contacto' element={<Contacto/>} />
                <Route path='Login' element={<Login/>} />
                <Route path='SignIn' element={<SignIn/>} /> */}
=======
                <Route path='productos' element={<Productos/>} />
                <Route path='NoPage' element={<Productos/>} />
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90
                <Route path='*' element={<NoPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

<<<<<<< HEAD
export default App

=======
export default App
>>>>>>> c19bbac0e85abd9c54160c11bb21738f3fa50e90

// import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './node_modules/Home';
import Layout from './node_modules/Layout';
import NoPage from './node_modules/NoPage';
import Productos from './node_modules/Productos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='productos' element={<Productos/>} />
                <Route path='NoPage' element={<Productos/>} />
                <Route path='*' element={<NoPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
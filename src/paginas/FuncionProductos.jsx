import Producto from "./Producto";
import { destacados } from "../destacados";
import "./Productos.css";

const FuncionProductos = () => {
    return (
        <div className='cardsContainer'>
            {destacados.map((prod)=>(
                <Producto key={prod.id} {...prod} />
            ))}
        </div>
    )
};

export default FuncionProductos;
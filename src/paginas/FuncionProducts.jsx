import Producto from "./Producto";
import { productos } from "../productos";
import "../CSS/Productos.css";

const FuncionProducts = () => {
    let prodDest = productos.filter((prod) => prod.destacado == true);

    return (
        <div className='cardsContainer'>
            {prodDest.map((prod) => <Producto key={prod.id} {...prod} />)}
        </div>
    )
};

export default FuncionProducts;
import { useContext } from "react";
import ShopContext from "./Utilities/ShopContext";

export default function ProductDetail() {
    const id = 2;

    // Use the stuff from the Context Object
    // that you want to use by calling 
    // useContext and passing the Context
    // Object as argument.

    const { products, addToCart } = useContext(ShopContext);
    const product = products.find(i => i.id === id);
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}
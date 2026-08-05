import { useContext } from "react";
import ShopContext from "./Utilities/ShopContext";

function Links() {
    const { cartItems } = useContext(ShopContext);

    return (
        <ul>
            <li>
                <a href="#">
                <span>Cart - </span>
                <span className="cart-icon">{cartItems.length}</span>
                </a>
            </li>
        </ul>
    )
}

export default function Header() {
    return (
        <header>
            <nav>
                <Links />
            </nav>
        </header>
    );
}
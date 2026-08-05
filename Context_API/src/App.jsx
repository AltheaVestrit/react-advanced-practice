import { useState } from "react";
import ShopContext from "./Utilities/ShopContext";
import Header from "./Header";
import ProductDetail from "./ProductDetail";

export default function App() {

  // Create the props that you'll pass to the 
  // Context Object to overwrite the default values

  const [cartItems, setCartItems] = useState([
    {id:1, title:"item 1", price:1000},
    {id:1, title:"item 1", price:1000},
    {id:1, title:"item 1", price:1000},
    {id:3, title:"item 3", price:14.95},
    {id:3, title:"item 3", price:14.95},
  ]);

  const products = [
    {id:1, title:"item 1", price:1000},
    {id:2, title:"item 2", price:0.79},
    {id:3, title:"item 3", price:14.95},
  ];

  const addToCart = (product) => {
    let updatedCartItems = [...cartItems, product]
    setCartItems(updatedCartItems);
  }

  return (

    // Wrap everything that needs to use the 
    // context in the Context Object. Overwrite
    // the default values of the Context Object
    // by passing new values to the value prop.

    <ShopContext value={{ cartItems, products, addToCart }}>
      <Header />
      <ProductDetail />
    </ShopContext>
  )
}

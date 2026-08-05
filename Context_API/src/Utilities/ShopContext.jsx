import { createContext } from "react"

// Create the Context Object with a default value

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default ShopContext;
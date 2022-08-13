
import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/cart.context.jsx";
import {ShoppingIcon,CartIconContainer,ItemCount} from "./cart-icon.styles.jsx"

export default function CartIcon () {
  const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
  const toggleCart =()=>{
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartIconContainer onClick={toggleCart} >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

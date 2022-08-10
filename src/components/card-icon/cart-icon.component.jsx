
import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/cart.context.jsx";
import "./cart-icon.styles.scss"

export default function CartIcon () {
  const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
  const toggleCart =()=>{
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className="cart-icon-container" onClick={toggleCart} >
      <ShopIcon className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

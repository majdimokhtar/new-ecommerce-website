// import { useContext } from "react";
// import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg"
// import { CartContext } from "../../contexts/cart.context.jsx";
import { useDispatch, useSelector } from "react-redux"
import { selectCartCount, selectCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx"

export default function CartIcon() {
  // const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectCartOpen)
  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

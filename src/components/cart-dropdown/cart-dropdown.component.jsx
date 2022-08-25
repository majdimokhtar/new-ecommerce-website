import {useNavigate} from "react-router-dom"
// import { CartContext } from "../../contexts/cart.context"
import {selectCartItems} from "../../store/cart/cart.selector"
import { useSelector } from "react-redux"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import   {EmptyMessage,CartDropdownContainer,CartItems} from "./cart-dropdown.styles.jsx"

export default function CartDropDown() {
  const navigate = useNavigate()
  const goToCheckoutHandler =()=>{
    navigate("/checkout")
  }
  const cartItems = useSelector(selectCartItems)
  // const {cartItems}=useContext(CartContext) 


  return (
    <CartDropdownContainer>
     <CartItems>
      {cartItems.length ? 
      (cartItems.map((item)=> <CartItem key={item.id} cartItem={item}/>))
      :(
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )
      }
      
     </CartItems>
     <Button onClick={goToCheckoutHandler} >Go To Checkout</Button>
    </CartDropdownContainer>
  )
}

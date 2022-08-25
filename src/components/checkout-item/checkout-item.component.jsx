import {useContext} from 'react'
import "./checkout-item.styles.scss"
import {clearItemFromCart,addItemtoCart,removeItemFromCart} from  "../../store/cart/cart.action"
import { useDispatch,useSelector } from 'react-redux'
import {selectCartItems} from "../../store/cart/cart.selector"
// import { CartContext } from "../../contexts/cart.context"

export default function CheckoutItem({cartItem}) {
    const dispatch =useDispatch()
    const cartItems =useSelector(selectCartItems)
    const {name,imageUrl,price,quantity}=cartItem
    // const {clearItemFromCart,addItemtoCart,removeItemFromCart}=useContext(CartContext)
    const clearCartHandler =()=>{dispatch(clearItemFromCart(cartItems,cartItem))}
    const addItemHandler =()=>{dispatch(addItemtoCart(cartItems, cartItem))}
    const removeItemHandler =()=>{dispatch(removeItemFromCart(cartItems, cartItem))}
  return (
    <div className='checkout-item-container'>
     <div className='image-container'>
     <img src={imageUrl} alt={`${name}`} />
     </div>
     <span className='name'>{name}</span>
     <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
            &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow'  onClick={addItemHandler}>
        &#10095;
        </div>
        </span>
     <span className='price'>{price}</span>
     <div className='remove-button' onClick={clearCartHandler} >
        &#10005;
     </div>
    </div>
  )
}

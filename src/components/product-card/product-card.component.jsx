// import {useContext} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {selectCartItems} from "../../store/cart/cart.selector"
import {addItemtoCart} from "../../store/cart/cart.action"
import  Button ,{Button_TYPE_CLASS} from "../button/button.component"

import "./product-card.styles.scss"

export default function ProductCard({product}) {
    const dispatch = useDispatch()
    const {name,price,imageUrl}=product
    // const {addItemtoCart}=useContext(CartContext)
    const cartItems =useSelector(selectCartItems)
    const addProductToCart =()=>dispatch(addItemtoCart(cartItems,product))
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <Button buttonType={Button_TYPE_CLASS.inverted} onClick={addProductToCart} >Add To Card</Button>
    </div>
  )
}

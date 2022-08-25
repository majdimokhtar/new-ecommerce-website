import {createAction} from "../../utils/reducer/reducer.utils"
import {CART_ACTION_TYPES} from "./cart.types"

export const setIsCartOpen =(bool)=> createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)


// add cart item
const addCartItem=(cartItems,productToAdd)=>{
    // find if cart items contain product to add
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id ===productToAdd.id)
    // if found ,increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem)=> 
        cartItem.id===productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity+1}
        : cartItem
        )
    }
    // return new array with modified cart items/new cart items
    return [...cartItems,{...productToAdd, quantity: 1}]
}
// decr cart item
const removeCartItem=(cartItems,cartItemToRemove)=>{
    // find if cart items contain product to remove
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id ===cartItemToRemove.id)
    // if found ,decrement quantity
    if (existingCartItem.quantity===1) {
        return cartItems.filter((cartItem)=> cartItem.id !== cartItemToRemove.id
        )
    }
    return cartItems.map((cartItem)=> 
        cartItem.id===cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
        )
}
// clear cart item
const clearCartItem =(cartItems,cartItemToClear)=>{
    return cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id)
}


// const setIsCartOpen =(bool)=>{
//     dispatch(
//         createAction(ACTION_TYPES.SET_IS_CART_OPEN,bool))
//     }

export const addItemtoCart =(cartItems,productToAdd)=>{
        const newCartItems= addCartItem(cartItems,productToAdd)
       return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems)
    }

export const removeItemFromCart =(cartItems,cartItemToRemove)=>{
        const newCartItems= removeCartItem(cartItems,cartItemToRemove)
       return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems)
    }
export const clearItemFromCart =(cartItems,cartItemToClear)=>{
        const newCartItems= clearCartItem(cartItems,cartItemToClear)
       return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems)
    }

    
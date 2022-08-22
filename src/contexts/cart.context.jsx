import { createContext,useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
    setIsCartOpen:()=>{},
    addItemtoCart: ()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},

})

const ACTION_TYPES ={
    SET_CART_ITEM: "SET_CART_ITEM",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const INITIAL_STATE ={
    isCartOpen :false,
    cartCount : 0,
    cartTotal:0,
    cartItems:[],
}

const cartReducer =(state,action)=>{
   const {type,payload}=action;
   switch (type){
    case  "SET_CART_ITEM":
        return {...state,
                ...payload
        }
        case  "SET_IS_CART_OPEN":
            return {...state,
                    isCartOpen :payload
            }
    default :
    throw new Error(`unhandled type of ${type} cart Reducer`)
   }
}

export const CartProvider =({children})=>{

    const [{cartItems,isCartOpen,cartCount,cartTotal},dispatch]=useReducer(cartReducer,INITIAL_STATE)
//   update cart reducer
    const updateCartItemsReducer =(newCartItems)=>{
    //  generate new cart total and new cart count
    const newCartTotal = newCartItems.reduce((total,cartItem)=> total + cartItem.quantity*cartItem.price , 0)
    const newCartCount = newCartItems.reduce((total,cartItem)=> total + cartItem.quantity, 0)

    dispatch(
        createAction(ACTION_TYPES.SET_CART_ITEM , {cartItems:newCartItems,cartTotal:newCartTotal,cartCount:newCartCount}))
    }
    
    const setIsCartOpen =(bool)=>{

    dispatch(
        createAction(ACTION_TYPES.SET_IS_CART_OPEN,bool))
    }

    const addItemtoCart =(productToAdd)=>{
        const newCartItems= addCartItem(cartItems,productToAdd)
        updateCartItemsReducer(newCartItems)
    }

        const removeItemFromCart =(cartItemToRemove)=>{
        const newCartItems= removeCartItem(cartItems,cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }
    const clearItemFromCart =(cartItemToClear)=>{
        const newCartItems= clearCartItem(cartItems,cartItemToClear)
        updateCartItemsReducer(newCartItems)
    }

    const value ={isCartOpen , setIsCartOpen ,addItemtoCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
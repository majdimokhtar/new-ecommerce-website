import { createContext, useState,useEffect } from "react";

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
    isCartOpen :false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemtoCart: ()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount : 0
})

export const CartProvider =({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItems] =useState([])
    const [cartCount,setCartCount] =useState(0)
    const [cartTotal,setCartTotal]=useState(0)
    
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=> total + cartItem.quantity*cartItem.price , 0)
        setCartTotal(newCartTotal)
        },[cartItems])
        
    useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity, 0)
    setCartCount(newCartCount)
    },[cartItems])

    const addItemtoCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

        const removeItemFromCart =(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }
    const clearItemFromCart =(cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToClear))
    }

    const value ={isCartOpen , setIsCartOpen,addItemtoCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, CLEAR_CART } from "../types";


export function addToCart(product){
    return {
        type: ADD_CART_PRODUCT,
        data: product
    }
}

export function removeFromCart(product){
    return {
        type: REMOVE_CART_PRODUCT,
        data: product
    }
}

export function clearCart(){
    return {
        type: CLEAR_CART
    }
}
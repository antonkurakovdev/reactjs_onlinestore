import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, CLEAR_CART, UPDATE_CART_PRODUCT_AMOUNT, UPDATE_CART_TOTAL } from "../types";

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

export function updateProductAmount(productId, newAmount){
    return {
        type: UPDATE_CART_PRODUCT_AMOUNT,
        data: { productId, newAmount}
    }
}

export function updateCartTotal(){
    return {
        type: UPDATE_CART_TOTAL
    }
}


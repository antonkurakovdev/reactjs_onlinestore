import { ADD_WISHLIST_PRODUCT, REMOVE_WISHLIST_PRODUCT, CLEAR_WISHLIST } from "../types";

export function addToWishlist(product){
    return {
        type: ADD_WISHLIST_PRODUCT,
        data: product
    }
}

export function removeFromWishlist(product){
    return {
        type: REMOVE_WISHLIST_PRODUCT,
        data: product
    }
}

export function clearWishlist(){
    return {
        type: CLEAR_WISHLIST
    }
}

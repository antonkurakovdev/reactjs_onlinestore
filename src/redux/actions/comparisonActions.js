import { ADD_COMPARE_PRODUCT, REMOVE_COMPARE_PRODUCT, CLEAR_COMPARE } from "../types";

export function addToCompare(product){
    return {
        type: ADD_COMPARE_PRODUCT,
        data: product
    }
}

export function removeFromCompare(product){
    return {
        type: REMOVE_COMPARE_PRODUCT,
        data: product
    }
}

export function clearCompare(){
    return {
        type: CLEAR_COMPARE
    }
}

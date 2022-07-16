import { GET_CATEGORY_PRODUCTS, SWITCH_PRODUCTS_DISPLAY_TYPE, SWITCH_PRODUCTS_SORT_TYPE } from "./types";

//get list products of category
export function getProducts(limit, skip){
    return async dispatch => {
        // const response = await fetch('https://dummyjson.com/products/category/smartphones?limit=' + limit + '&skip=' + skip)
        const response = await fetch('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip)
        const json = await response.json()
        dispatch({ type: GET_CATEGORY_PRODUCTS, data: json })
    }
}

export function switchProductsDisplayType(value){
    return {
        type: SWITCH_PRODUCTS_DISPLAY_TYPE,
        data: value
    }
}

export function switchProductsSortType(value){
    return {
        type: SWITCH_PRODUCTS_SORT_TYPE,
        data: value
    }
}


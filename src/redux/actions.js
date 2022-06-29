import { GET_CATEGORY_PRODUCTS, SET_PRODUCTS_PAGINATION } from "./types";

//get list products of category
export function getProducts(limit, skip){
    return async dispatch => {
        // const response = await fetch('https://dummyjson.com/products/category/smartphones?limit=' + limit + '&skip=' + skip)
        const response = await fetch('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip)
        const json = await response.json()
        console.log('actions getProducts', json)
        dispatch({ type: GET_CATEGORY_PRODUCTS, data: json })
    }
}

//get list products of category
export function paginationUpdate(value){
    return {
        type: SET_PRODUCTS_PAGINATION,
        data: value
    }
}



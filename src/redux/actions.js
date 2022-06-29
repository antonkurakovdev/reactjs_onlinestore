import { GET_PRODUCTS } from "./types";

export function getProducts(products){
    // return {
    //     type: GET_PRODUCTS,
    //     payload: products
    // }

    return async dispatch => {
        const response = await fetch("https://dummyjson.com/products?limit=5")
        const json = await response.json()
        dispatch({ type: GET_PRODUCTS, payload: json.products })
    }
}


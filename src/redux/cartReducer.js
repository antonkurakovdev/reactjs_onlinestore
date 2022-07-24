import { GET_CART_PRODUCTS } from "./types"

const initialState = {
    products: [],
    total: 0,
    discountedTotal: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_PRODUCTS:
            return {...state, products: action.data.products, total: action.data.total, discountedTotal: action.data.discountedTotal }
        default:
           return state
    }
}
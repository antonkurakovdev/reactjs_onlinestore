import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, CLEAR_CART } from "./types"

const initialState = {
    products: JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_PRODUCT:
            return {...state, products: state.products.concat(action.data), totalPrice: state.totalPrice + (action.data.price * action.data.amount) }
        case REMOVE_CART_PRODUCT:
            return {...state, products: state.products.filter(obj => obj.id !== action.data.id), totalPrice: state.totalPrice - (action.data.price * action.data.amount) }
        case CLEAR_CART:
            return { products: [], totalPrice: 0 }
        default:
           return state
    }
}
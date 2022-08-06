import { ADD_COMPARE_PRODUCT, REMOVE_COMPARE_PRODUCT, CLEAR_COMPARE } from "../types"

const initialState = {
    products: JSON.parse(localStorage.getItem("compare")) || []
}

export const compareReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPARE_PRODUCT:
            return {...state, products: state.products.concat(action.data) }
        case REMOVE_COMPARE_PRODUCT:
            return {...state, products: state.products.filter(obj => obj.id !== action.data) }
        case CLEAR_COMPARE:
            return { products: [] }
        default:
           return state
    }
}
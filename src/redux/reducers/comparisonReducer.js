import { ADD_COMPARE_PRODUCT, REMOVE_COMPARE_PRODUCT, CLEAR_COMPARE } from "../types"

const initialState = {
    products: JSON.parse(localStorage.getItem("comparison")) || []
}

export const comparisonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPARE_PRODUCT:
            return {...state, products: state.products.concat(action.data) }
        case REMOVE_COMPARE_PRODUCT:
            return {...state, products: state.products.filter(obj => obj.id !== action.data.id) }
        case CLEAR_COMPARE:
            return { products: [] }
        default:
           return state
    }
}
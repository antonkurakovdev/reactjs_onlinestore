import { GET_PRODUCTS } from "./types"

const initialState = {
    products: [],
    category_name: ''
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload }
        default:
           return state
    }
}
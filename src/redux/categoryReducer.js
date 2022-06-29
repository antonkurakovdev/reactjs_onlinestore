import { GET_CATEGORY_PRODUCTS, SET_PRODUCTS_PAGINATION } from "./types"

const initialState = {
    products: [],
    total: 0
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS:
            return {...state, products: action.data.products, total: action.data.total }
        case SET_PRODUCTS_PAGINATION:
                return {...state, pagination: action.data }
        default:
           return state
    }
}
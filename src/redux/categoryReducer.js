import { GET_CATEGORY_PRODUCTS, SWITCH_PRODUCTS_DISPLAY_TYPE } from "./types"

const initialState = {
    products: [],
    total: 0,
    displayType: 1
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS:
            return {...state, products: action.data.products, total: action.data.total }
        case SWITCH_PRODUCTS_DISPLAY_TYPE:
            return {...state, displayType: action.data }
        default:
           return state
    }
}
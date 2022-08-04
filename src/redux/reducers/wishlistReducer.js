import { ADD_WISHLIST_PRODUCT, REMOVE_WISHLIST_PRODUCT, CLEAR_WISHLIST } from "../types"

const initialState = {
    products: JSON.parse(localStorage.getItem("wishlist")) || []
}

export const wishlistReducer = (state = initialState, action) => {
    console.log('state', state);
    switch (action.type) {
        case ADD_WISHLIST_PRODUCT:
            return {...state, products: state.products.concat(action.data) }
        case REMOVE_WISHLIST_PRODUCT:
            return {...state, products: state.products.filter(obj => obj.id !== action.data.id) }
        case CLEAR_WISHLIST:
            return { products: [] }
        default:
           return state
    }
}
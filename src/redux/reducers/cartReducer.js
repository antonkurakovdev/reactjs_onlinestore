import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, CLEAR_CART, UPDATE_CART_PRODUCT_AMOUNT, UPDATE_CART_TOTAL } from "../types" 

const initialState = {
    products: JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice: JSON.parse(localStorage.getItem("cartTotalPrice")) || ""
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_PRODUCT:
            return {...state, products: state.products.concat(action.data) }
        case REMOVE_CART_PRODUCT:
            return {...state, products: state.products.filter(obj => obj.id !== action.data.id)}
        case CLEAR_CART:
            return { products: [], totalPrice: 0 }
        case UPDATE_CART_PRODUCT_AMOUNT:
            return {...state, products: state.products.map(pr => (pr.id == action.data.productId ? {...pr, amount: action.data.newAmount } : pr ))}
        case UPDATE_CART_TOTAL:
            return {...state, totalPrice: state.products.reduce((total, product) => total = total + (product.price * product.amount), 0)}
        default:
           return state
    }
}
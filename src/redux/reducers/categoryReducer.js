import { GET_CATEGORY_PRODUCTS, SWITCH_PRODUCTS_DISPLAY_TYPE, SWITCH_PRODUCTS_SORT_TYPE, UPDATE_PRODUCT_AMOUNT } from "../types"

const initialState = {
    category_name: 'Электроника',
    category_id: 5,
    products: [],
    total: 0,
    displayType: 1,
    sortType: { value: 'PRICEASC', label: 'Дешевые выше' }
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS:
            return {...state, products: action.data.products, total: action.data.total }
        case SWITCH_PRODUCTS_DISPLAY_TYPE:
            return {...state, displayType: action.data }
        case SWITCH_PRODUCTS_SORT_TYPE:
            return {...state, sortType: action.data }
        case UPDATE_PRODUCT_AMOUNT:
            return {...state, products: state.products.map(pr => (pr.id == action.data.productId ? {...pr, amount: action.data.newAmount } : pr ))}
        default:
           return state
    }
}
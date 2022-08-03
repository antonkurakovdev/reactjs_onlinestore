import { combineReducers } from "redux"
import { categoryReducer } from "./categoryReducer"
import { cartReducer } from "./cartReducer"
import { wishlistReducer } from "./wishlistReducer"
import { comparisonReducer } from "./comparisonReducer"

export const rootReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    comparison: comparisonReducer
})
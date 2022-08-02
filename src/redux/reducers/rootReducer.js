import { combineReducers } from "redux"
import { categoryReducer } from "./categoryReducer"
import { cartReducer } from "./cartReducer"
import { wishlistReducer } from "./wishlistReducer"

export const rootReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
})
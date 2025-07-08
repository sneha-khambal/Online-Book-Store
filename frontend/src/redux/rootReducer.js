import { combineReducers } from "redux";
import childrenBooksReducer from "./ChidlrenReducer/childrenBooksReducer";
import accountCreationReducer from "./ChidlrenReducer/accountCreationReducer";
import addToCartReducer from "./ChidlrenReducer/addToCartReducer";
import getCartReducer from "./ChidlrenReducer/getCartReducer";
import checkoutReducer from "./ChidlrenReducer/checkoutReducer";

console.log('root reducer')

const rootReducer = combineReducers({
    childrenBooks : childrenBooksReducer,
    accountCreation : accountCreationReducer,
    addToCart : addToCartReducer,
    getCart : getCartReducer,
    checkout  :checkoutReducer 
    
})

export default rootReducer;
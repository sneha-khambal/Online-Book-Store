import { combineReducers } from "redux";
import childrenBooksReducer from "./ChidlrenReducer/childrenBooksReducer";
import accountCreationReducer from "./ChidlrenReducer/accountCreationReducer";
import addToCartReducer from "./ChidlrenReducer/addToCartReducer";

console.log('root reducer')

const rootReducer = combineReducers({
    childrenBooks : childrenBooksReducer,
    accountCreation : accountCreationReducer,
    addToCart : addToCartReducer
})

export default rootReducer;
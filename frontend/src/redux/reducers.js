import { combineReducers } from "redux";
import childrenBooksReducer from "./childrenBooksReducer";
import accountCreationReducer from "./accountCreationReducer";

console.log('root reducer')

const rootReducer = combineReducers({
    childrenBooks : childrenBooksReducer,
    accountCreation : accountCreationReducer
})

export default rootReducer;
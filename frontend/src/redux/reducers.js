import { combineReducers } from "redux";
import childrenBooksReducer from "./childrenBooksReducer";

const rootReducer = combineReducers({
    childrenBooks : childrenBooksReducer
})

export default rootReducer;
import {ADD_TO_CART_DATA, ADD_TO_CART_SUCCESS, ADD_TO_CART_ERROR } from "../actions";

const initialState = {
    cartDataLoading : true,
    cartSuccessData : [],
    cartErrorData : null
}

const addToCartReducer = (state = initialState,action)=>{

    switch (action.type) {
        case ADD_TO_CART_DATA:
            return {
                ...state,
                cartDataLoading: true,
              };
            
        case ADD_TO_CART_SUCCESS:
            return {
                 ...state,
                cartDataLoading: false,
                cartSuccessData: action.payload,
                cartErrorData: null,
                };  
       case ADD_TO_CART_ERROR:
            return {
                ...state,
                cartDataLoading: false,
                cartSuccessData:  [],
                cartErrorData: action.payload,
                };     
           
    
        default:
            return state;
    }

}

export default addToCartReducer;
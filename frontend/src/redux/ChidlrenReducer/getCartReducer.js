import {GET_CART_DATA,GET_CART_SUCCESS,GET_CART_ERROR } from "../actions";

const initialState = {
    getCartLoading : true,
    getCartSuccessData : [],
    getCartErrorData : null
}

const getCartReducer = (state = initialState,action)=>{

    switch (action.type) {
        case GET_CART_DATA:
            return {
                ...state,
                getCartLoading: true,
              };
            
        case GET_CART_SUCCESS:
            return {
                 ...state,
                getCartLoading: false,
                getCartSuccessData: action.payload,
                getCartErrorData: null,
                };  
       case GET_CART_ERROR:
            return {
                ...state,
                getCartLoading: false,
                getCartSuccessData:  [],
                getCartErrorData: action.payload,
                };     
           
    
        default:
            return state;
    }

}

export default getCartReducer;
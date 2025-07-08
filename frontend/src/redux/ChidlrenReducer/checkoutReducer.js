import { SAVE_CHECKOUT_DATA,SAVE_CHECKOUT_SUCCESS,SAVE_CHECKOUT_ERROR } from "../actions";

const initialState = {
    saveCheckoutDataLoading : true,
    saveCheckoutData : [],
    saveCheckoutDataError : null
}

const checkoutReducer = (state = initialState,action)=>{

    switch (action.type) {
        case SAVE_CHECKOUT_DATA:
            return {
                ...state,
                saveCheckoutDataLoading: true,
              };
            
        case SAVE_CHECKOUT_SUCCESS:
            return {
                 ...state,
                saveCheckoutDataLoading: false,
                saveCheckoutData: action.payload,
                saveCheckoutDataError: null,
                };  
       case SAVE_CHECKOUT_ERROR:
            return {
                ...state,
                saveCheckoutDataLoading: false,
                saveCheckoutData:  [],
                saveCheckoutDataError: action.payload,
                };     
           
    
        default:
            return state;
    }

}

export default checkoutReducer;
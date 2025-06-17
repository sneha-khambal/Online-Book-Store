import { ACCOUNT_CREATION_DATA,ACCOUNT_CREATION_SUCCESS,ACCOUNT_CREATION_ERROR } from "./actions";

const initialState = {
    accountCreationDataLoading : true,
    accountCreationData : [],
    accountCreationError : null
}

const accountCreationReducer = (state = initialState,action)=>{

    switch (action.type) {
        case ACCOUNT_CREATION_DATA:
            return {
                ...state,
                accountCreationDataLoading: true,
              };
            
        case ACCOUNT_CREATION_SUCCESS:
            return {
                 ...state,
                accountCreationDataLoading: false,
                accountCreationData: action.payload,
                accountCreationError: null,
                };  
       case ACCOUNT_CREATION_ERROR:
            return {
                ...state,
                accountCreationDataLoading: false,
                accountCreationData:  [],
                accountCreationError: action.payload,
                };     
           
    
        default:
            return state;
    }

}

export default accountCreationReducer;
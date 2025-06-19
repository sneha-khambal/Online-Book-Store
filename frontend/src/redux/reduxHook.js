import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { accountCreationAction, accountCreationError, fetchBooksData } from "./actions";

  const useChildrenBooksHook = ()=>{
    const dispatch = useDispatch();
    const childrenBooksDataLoading = useSelector((state)=>state.childrenBooks.childrenBooksDataLoading);
    const childrenBooksData = useSelector((state)=>state.childrenBooks.childrenBooksData);
    const childrenBooksDataError = useSelector((state)=>state.childrenBooks.childrenBooksDataError);


    const fetchChildrenBooks = useCallback((bookType)=>{
        dispatch(fetchBooksData(bookType))
    },[dispatch])

    return{
        childrenBooksData,
        childrenBooksDataError,
        childrenBooksDataLoading,
        fetchChildrenBooks
    }
};

 const useAccountCreationHook = ()=>{
    const dispatch = useDispatch();
    
     const accountCreationLoading = useSelector((state)=>state.accountCreation.accountCreationDataLoading);
    const accountCreationData = useSelector((state)=>state.accountCreation.accountCreationData);
    const accountCreationError = useSelector((state)=>state.accountCreation.accountCreationError);
    
    const fetchAccountCreationData = useCallback((data)=>{
dispatch(accountCreationAction(data))
    },[dispatch]);

    return{
        accountCreationData,accountCreationLoading,accountCreationError,fetchAccountCreationData
    }


}

export default{ useChildrenBooksHook , useAccountCreationHook};
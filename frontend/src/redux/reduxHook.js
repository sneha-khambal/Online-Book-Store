import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { accountCreationAction, accountCreationError, fetchBooksData, getCartDataAction,addToCartAction } from "./actions";

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

 const useAddToCartHook = ()=>{
    const dispatch = useDispatch();
    
     const cartDataLoading = useSelector((state)=>state.addToCart.cartDataLoading);
    const cartSuccessData = useSelector((state)=>state.addToCart.cartSuccessData);
    const cartErrorData = useSelector((state)=>state.addToCart.cartErrorData);
    
    const addBookToCart = useCallback((data)=>{
dispatch(addToCartAction(data))
    },[dispatch]);

    return{
        cartDataLoading,cartSuccessData,cartErrorData,addBookToCart
    }


}

 const useGetCartHook = ()=>{
    const dispatch = useDispatch();
    
     const getCartLoading = useSelector((state)=>state.getCart.getCartLoading);
    const getCartSuccessData = useSelector((state)=>state.getCart.getCartSuccessData);
    const getCartErrorData = useSelector((state)=>state.getCart.getCartErrorData);
    
    const fetchCartData = useCallback(( )=>{
dispatch(getCartDataAction( ))
    },[dispatch]);

    return{
        getCartLoading,getCartSuccessData,getCartErrorData,fetchCartData
    }


}

export default{ useChildrenBooksHook , useAccountCreationHook,useGetCartHook,useAddToCartHook};
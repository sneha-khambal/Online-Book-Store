import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBooksData } from "./actions";

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

export default useChildrenBooksHook;
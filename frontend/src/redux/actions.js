
export const FETCH_BOOKS_DATA = 'FETCH_BOOKS_DATA';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR'
 

export const fetchBooksData =(data)=>({
    type: FETCH_BOOKS_DATA,
    payload:data
});

export const fetchBooksSuccess = (data)=>({
    type:FETCH_BOOK_SUCCESS,
    payload:data
});
export const fetchBooksError = (data)=>({
    type:FETCH_BOOK_ERROR,
    payload:data
});
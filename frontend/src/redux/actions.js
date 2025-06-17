
export const FETCH_BOOKS_DATA = 'FETCH_BOOKS_DATA';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';

export const ACCOUNT_CREATION_DATA = 'ACCOUNT_CREATION_DATA';
export const ACCOUNT_CREATION_SUCCESS = 'ACCOUNT_CREATION_SUCCESS';
export const ACCOUNT_CREATION_ERROR = 'ACCOUNT_CREATION_ERROR';
 
console.log('action')
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


export const accountCreationAction =(data)=>({
    type: ACCOUNT_CREATION_DATA,
    payload:data
});

export const accountCreationSuccess = (data)=>({
    type:ACCOUNT_CREATION_SUCCESS,
    payload:data
});
export const accountCreationError = (data)=>({
    type:ACCOUNT_CREATION_ERROR,
    payload:data
});
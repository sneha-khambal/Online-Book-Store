import {call,put,takeLatest} from "redux-saga/effects";

import { ACCOUNT_CREATION_DATA, accountCreationAction, accountCreationError, accountCreationSuccess, ADD_TO_CART_DATA, addToCartError, addToCartSuccess, FETCH_BOOKS_DATA,fetchBooksError, fetchBooksSuccess, GET_CART_DATA, getCartError, getCartSuccess } from "./actions";
import { fetchBooksData } from "../APIs/booksDataApi";
import { accountCreationApiCall } from "../APIs/authenticationApi.js";
import {   addToCartApiCall, getCartDataApiCall } from "../APIs/bookSaleingApi.js";

console.log('call from saga')
function* fetchBooksSaga(action){
  try {
    console.log('call saga api' + action.payload)
    const response = yield call(fetchBooksData,action.payload);
    console.log(response.data);
    yield put(fetchBooksSuccess(response.data.docs));
  } catch (error) {
    console.log(error)
    yield put(fetchBooksError(error));

    
  }
};


function* accountCreation(action){
  try {
    console.log('call saga api' + action.payload)
    const response = yield call(accountCreationApiCall,action.payload);
    console.log(response.data);
    yield put(accountCreationSuccess(response.data.docs));
  } catch (error) {
    console.log(error)
    yield put(accountCreationError(error));

    
  }
};

function* addToCartFunction(action){
  try {
    console.log('call saga CART api' + action.payload)
    const response = yield call(addToCartApiCall,action.payload);
    console.log(response.data);
    yield put(addToCartSuccess(response.data));
  } catch (error) {
    console.log(error)
    yield put(addToCartError(error));

    
  }
};

function* getCartSagaFunction(action){
  try {
    console.log('call saga CART api' + action.payload)
    const response = yield call(getCartDataApiCall,action.payload);
    console.log(response.data);
    yield put(getCartSuccess(response.data));
  } catch (error) {
    console.log(error)
    yield put(getCartError(error));

    
  }
};

export default function* rootSaga(){
    yield takeLatest(FETCH_BOOKS_DATA,fetchBooksSaga)
    yield takeLatest(ACCOUNT_CREATION_DATA,accountCreation)
    yield takeLatest(ADD_TO_CART_DATA,addToCartFunction)
    yield takeLatest(GET_CART_DATA,getCartSagaFunction)
}


import {call,put,takeLatest} from "redux-saga/effects";

import { ACCOUNT_CREATION_DATA, accountCreationAction, accountCreationError, accountCreationSuccess, FETCH_BOOKS_DATA,fetchBooksError, fetchBooksSuccess } from "./actions";
import { fetchBooksData } from "../APIs/booksDataApi";
import { accountCreationApiCall } from "../APIs/authenticationApi";

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

export default function* rootSaga(){
    yield takeLatest(FETCH_BOOKS_DATA,fetchBooksSaga)
    yield takeLatest(ACCOUNT_CREATION_DATA,accountCreation)
}


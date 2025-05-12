import {call,put,takeLatest} from "redux-saga/effects";

import { FETCH_BOOKS_DATA,fetchBooksError, fetchBooksSuccess } from "./actions";
import { fetchBooksData } from "../APIs/booksDataApi";

console.log('call from saga')
function* fetchBooksSaga(action){
  try {
    console.log('call saga api')
    const response = yield call(fetchBooksData,action.payload);
    console.log(response.data.works);
    yield put(fetchBooksSuccess(response.data.works));
  } catch (error) {
    console.log(error)
    yield put(fetchBooksError(error));

    
  }
};

export default function* rootSaga(){
    yield takeLatest(FETCH_BOOKS_DATA,fetchBooksSaga)
}


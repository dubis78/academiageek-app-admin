import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

import {GET_All_PROSPECTS} from '../../constants/ActionTypes';
import {fetchProspectsSuccess} from '../actions/Prospects';
import {fetchError} from "../actions/Common";

const getProspects = async () =>{
  try {
    const { data } = await axios.get(`https://x3n0w.sse.codesandbox.io/prospects`);
    // const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/prospects`);
    return data;   
  } catch (err) {
    return err;
  }
}

function* fetchProspectsRequest() {
  try {
    const fetchedProspects = yield call(getProspects);
    yield put(fetchProspectsSuccess(fetchedProspects));
  } catch (error) {
    yield put(fetchError(error));
  }
}

export function* fetchProspects() {
  yield takeEvery(GET_All_PROSPECTS, fetchProspectsRequest);
}


export default function* rootSaga() {
  yield all([fork(fetchProspects)]);
}

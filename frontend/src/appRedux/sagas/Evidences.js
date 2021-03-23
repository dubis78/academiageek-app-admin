import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

import {GET_All_EVIDENCES, UPDATE_EVIDENCE} from '../../constants/ActionTypes';
import {fetchEvidencesSuccess,UpdateEvidenceSuccess} from '../actions/Evidences';
import {fetchError} from "../actions/Common";

const getEvidences = async () =>{
  try {
    const { data } = await axios.get(`https://x3n0w.sse.codesandbox.io/evidences`);
    // const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/evidences`);
    return data;   
  } catch (err) {
    return err;
  }
}

const updateEvidence = async (evidence) => {
  const temp={...evidence}; delete temp.id;
  console.log(temp,evidence.id);
  try {
    const { data } = await axios.patch(`https://x3n0w.sse.codesandbox.io/evidences/${evidence.id}`,temp);
    // const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}/evidences/${evidence.id}`,temp);
    return data;   
  } catch (err) {
    return err;
  }
};

function* fetchEvidencesRequest() {
  try {
    const fetchedEvidences = yield call(getEvidences);
    yield put(fetchEvidencesSuccess(fetchedEvidences));
  } catch (error) {
    yield put(fetchError(error));
  }
}

function* updateEvidenceRequest({evidenceList}) {
  try {
    const updatedEvidence = yield call(updateEvidence,evidenceList);
    yield put(UpdateEvidenceSuccess(updatedEvidence));
  } catch (error) {
    yield put(fetchError(error));
  }
};

export function* fetchGetEvidences() {
  yield takeEvery(GET_All_EVIDENCES, fetchEvidencesRequest);
}

export function* fetchUpdateEvidence() {
  yield takeEvery(UPDATE_EVIDENCE, updateEvidenceRequest);
}

export default function* rootSaga() {
  yield all([fork(fetchGetEvidences),
    fork(fetchUpdateEvidence)]);
}

import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

import {GET_All_PROSPECTS} from '../../constants/ActionTypes';
import {fetchProspectsSuccess} from '../actions/Prospects';
import {fetchError} from "../actions/Common";

const getProspects = async () =>{
  try {
    const { data } = await axios.get(`http://localhost:3001/users`);
    // const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);    
    console.log(data);
    return data;   
  } catch (err) {
    return err;
  }

// {
//   try
//   {
//       yield put(startFetchAPIRequest());
//       const result = yield call(() => {
//           return fetch('https://reqres.in/api/users')
//                  .then(res => res.json())
//       });
//       yield put(startFetchAPISuccess(result));
//   } 
//   catch (error)
//   {
//       yield put(startFetchAPIFailure());
//   }
// }

// return{
//   dispatch({type: FETCH_START});
//   try {
//     const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
//     dispatch({type: FETCH_SUCCESS});
//     dispatch({type: GET_All_PROSPECTS_SUCCESS,payload: data});
//   } catch (err) {
//     dispatch({type: GET_All_PROSPECTS_SUCCESS,payload: err});
//   }
// };
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

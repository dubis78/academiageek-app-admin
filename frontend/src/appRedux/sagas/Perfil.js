import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

import {GET_PERFIL} from '../../constants/ActionTypes';
import {fetchPerfilSuccess} from '../actions/Perfil';
import {fetchError} from "../actions/Common";

const getPerfil = async ({id}) =>{
  try {
    const { data } = await axios.get(`https://x3n0w.sse.codesandbox.io/users/?id_user=${id}`);
    // const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/prospects/?id_user=${perfil.id}`);
    console.log(data)
    return data;   
  } catch (err) {
    return err;
  }
}

function* fetchPerfilRequest({perfil}) {
  console.log('holis')
  try {
    const fetchedPerfil = yield call(getPerfil,perfil);
    yield put(fetchPerfilSuccess(fetchedPerfil));
  } catch (error) {
    yield put(fetchError(error));
  }
}

export function* fetchPerfil() {
  yield takeEvery(GET_PERFIL, fetchPerfilRequest);
}


export default function* rootSaga() {
  yield all([fork(fetchPerfil)]);
}

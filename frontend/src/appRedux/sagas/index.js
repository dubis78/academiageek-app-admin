import {all} from "redux-saga/effects";
import authSagas from "./Auth";
import notesSagas from "./Notes";
import prospectsSagas from "./Prospects";
import evidencesSagas from "./Evidences";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    notesSagas(),
    prospectsSagas(),
    evidencesSagas()
  ]);
}

import {
  GET_All_EVIDENCES,
  FETCH_ALL_EVIDENCES_SUCCESS,
  UPDATE_EVIDENCE,
  UPDATE_EVIDENCE_SUCCESS    
} from "../../constants/ActionTypes";




export const onGetAllEvidences = (evidenceList) => {
  return{
    type: GET_All_EVIDENCES,
    evidenceList
  };
};

export const fetchEvidencesSuccess = (evidenceList) => {
  return {
    type: FETCH_ALL_EVIDENCES_SUCCESS,
    payload: evidenceList
  }
};

export const onUpdateEvidence = (evidenceList) => {
  return {
    type: UPDATE_EVIDENCE,
    evidenceList
  }
};

export const UpdateEvidenceSuccess = (evidenceList) => {
  return {
    type:  UPDATE_EVIDENCE_SUCCESS,
    payload: evidenceList
  };
};




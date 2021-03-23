import {
  GET_All_EVIDENCES,
  FETCH_ALL_EVIDENCES_SUCCESS,
  UPDATE_EVIDENCE,
  UPDATE_EVIDENCE_SUCCESS  
} from "../../constants/ActionTypes";

const INIT_STATE = {
  evidenceList: [{id:'',id_user:'',evidence_name:'',commentary:'',status:''}]
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {

    
    case FETCH_ALL_EVIDENCES_SUCCESS: {
      return {
        ...state,
        evidenceList: action.payload,
      }
    }    

    case UPDATE_EVIDENCE_SUCCESS: {
      return {
        ...state,
        evidenceList: action.payload,
      }
    }  

    default:
      return state;
  }
}
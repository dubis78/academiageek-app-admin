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

    case GET_All_EVIDENCES: {
      return {
        ...state,
        evidenceList: action.evidenceList,
      }
    }

    case FETCH_ALL_EVIDENCES_SUCCESS: {
      return {
        ...state,
        evidenceList: action.payload,
      }
    }    

    case UPDATE_EVIDENCE: {
      return {
        ...state,
        // evidenceList: state.evidenceList.map(evidence => { evidence.id !== action.evidenceList.id ? evidence : ...evidence, commentary: action.evidenceList.commentary, state: action.evidenceList.state
        
        evidenceList: state.evidenceList.map(evidence => {   
          if (evidence.id !== action.evidenceList.id) {
            return evidence;
          } else {
            return { ...evidence, commentary: action.evidenceList.commentary, status: action.evidenceList.status };
          }
        })
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

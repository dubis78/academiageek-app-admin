import {
  GET_All_PROSPECTS,
  FETCH_ALL_PROSPECTS_SUCCESS  
} from "../../constants/ActionTypes";




export const onGetAllProspects = (prospectList) => {
  return{
    type: GET_All_PROSPECTS,
    prospectList
  };
};

export const fetchProspectsSuccess = (prospectList) => {
  return {
    type: FETCH_ALL_PROSPECTS_SUCCESS,
    payload: prospectList
  }
};

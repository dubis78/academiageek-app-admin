import {
  GET_All_PROSPECTS,
  FETCH_ALL_PROSPECTS_SUCCESS  
} from "../../constants/ActionTypes";

const INIT_STATE = {
  prospectList: [{
    id_user:'', course_name:'', name:'', document_type:'',
    document:'', gender:'', age:'', disability:'', population_type:'',
    city_name:'', state:'', creation_date:''
  }]
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case FETCH_ALL_PROSPECTS_SUCCESS: {
      return {
        ...state,
        prospectList: action.payload,
      }
    }

    default:
      return state;
  }
}

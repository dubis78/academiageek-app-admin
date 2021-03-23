import {
  GET_PERFIL,
  FETCH_PERFIL_SUCCESS  
} from "../../constants/ActionTypes";

const INIT_STATE = {
  perfil: [{
    id_user:'', course_name:'', name:'', document_type:'',
    document:'', gender:'', age:'', email:'', disability:'', population_type:'',
    city_name:'', state:'', creation_date:''
  }]
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case FETCH_PERFIL_SUCCESS: {
      return {
        ...state,
        perfil: action.payload,
      }
    }

    default:
      return state;
  }
}

import {
  GET_PERFIL,
  FETCH_PERFIL_SUCCESS  
} from "../../constants/ActionTypes";




export const onGetPerfil = (perfil) => {
  return{
    type: GET_PERFIL,
    perfil
  };
};

export const fetchPerfilSuccess = (perfil) => {
  return {
    type: FETCH_PERFIL_SUCCESS,
    payload: perfil
  }
};

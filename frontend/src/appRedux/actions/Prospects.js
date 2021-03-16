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


// export const onAddContact = (contact) => {
//   return dispatch => database.ref('/contact').push(contact);
// };


// export const onUpdateContact = (id, contact) => {

//   return dispatch => database.ref('/contact').child(id).update(contact);
// };

// export const onDeleteContact = (id) => {
//   return dispatch => database.ref('/contact').child(id).remove();
// };

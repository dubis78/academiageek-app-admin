import {
  GET_All_PROSPECTS,
  FETCH_ALL_PROSPECTS_SUCCESS  
} from "../../constants/ActionTypes";

const INIT_STATE = {
  prospectList: [],
  // selectedProspects: []
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case GET_All_PROSPECTS: {
      return {
        ...state,
        prospectList: action.prospectList,
      }
    }

    case FETCH_ALL_PROSPECTS_SUCCESS: {
      return {
        ...state,
        prospectList: action.payload,
      }
    }

    // case UPDATE_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     contactList: state.contactList.map((contact) => contact.id === action.payload.id ? action.payload : contact),
    //   };

    // case DELETE_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     contactList: state.contactList.filter((contact) => contact.id !== action.payload.id),
    //   };

    // case ON_ADD_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     contactList: action.payload.contact(state.contactList),
    //   };

    default:
      return state;
  }
}

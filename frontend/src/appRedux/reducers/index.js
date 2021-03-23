import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";
import Prospects from "./Prospects";
import Perfil from "./Perfil";
import Evidences from "./Evidences";


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  notes: Notes,
  contact: Contact,
  common: Common,
  prospects: Prospects,
  perfil: Perfil,
  evidences: Evidences,
});

export default createRootReducer

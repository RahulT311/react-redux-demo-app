import { combineReducers } from "redux";
import songReducers from './songReducer';
const allReducers = combineReducers({
  songs: songReducers,
})

export default allReducers
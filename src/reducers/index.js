import { combineReducers } from "redux";
import songReducers from './breakingBadQuotesReducer';
const allReducers = combineReducers({
  songs: songReducers,
})

export default allReducers
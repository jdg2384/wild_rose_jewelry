import { combineReducers } from 'redux';
import StateReducers from './StateReducers'

export default combineReducers({
  projects: StateReducers,
});
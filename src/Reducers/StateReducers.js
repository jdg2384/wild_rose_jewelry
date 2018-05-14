import {
    PROJECTINFO,
    TOGGLE
} from '../Actions/types.js';   
const INITIAL_STATE = {
  info:[], 
  //reducerToggle: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTINFO:
      return{ ...state, info: action.payload};
    case TOGGLE:
      return{ ...state, reducerToggle: action.payload};
    // case TOGGLE:
    //   return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
  
  
  
  
    
  
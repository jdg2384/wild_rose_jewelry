import {
    PROJECTINFO,
    ONHOVERRENDER,
} from '../Actions/types.js'; 

const INITIAL_STATE = {
  info:[],
  hover: false,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTINFO: 
      return{ ...state, info: action.payload};
    case ONHOVERRENDER: 
      console.log('INITIAL_STATE one',action.payload)
      return{ ...state, hover: action.payload};
    default:
      return state;
  }
}; 
  
  
  
  
    
  
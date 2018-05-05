import axios from 'axios';
import {
  PROJECTINFO,
  TOGGLE
} from './types';
const api = 'http://localhost:3001/api'
//const api = 'https://dp-dash.herokuapp.com/seed_deals'
export const projectInfo = () => {
    return (dispatch) => {
        axios.get(`${api}`)
        .then(response => response)
        .then(data => {
            dispatch({
              type: PROJECTINFO,
              payload: data.data,
            });
        })
    }
}
export const toggle = (prop) => {
    console.log('action = ',prop)
    return (dispatch) => {
        dispatch({
            type: TOGGLE,
            payload: prop,
        });
    }
}


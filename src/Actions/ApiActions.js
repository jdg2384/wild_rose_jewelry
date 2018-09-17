import axios from 'axios';
import {
  PROJECTINFO,
  PRODUCTGET,
  ONHOVERRENDER,
  TOGGLE
} from './types';
//const api = 'http://localhost:3001/api'
const api = 'https://peaceful-tor-89083.herokuapp.com/api'

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

export const productGet = (id) => {
    return (dispatch) => {
        axios.get(`${api}/${id}`)
        .then(response => response)
        .then(data => {
            dispatch({
              type: PRODUCTGET,
              payload: data.data,
            });
        })
    }
}


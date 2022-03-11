import {getDate} from '../helpers';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

const axios = require('axios');

export const login = (login, password) => dispatch => {
    const params = new URLSearchParams({
        login,
        password,
      });
      dispatch({ type: LOGIN_REQUEST });
  return axios
    .get(`http://localhost:3500/user/login/?${params}`)
    .then((payload) => {
      return dispatch({ type: LOGIN_SUCCESS, payload });
    })
    .catch(({ response }) => {
      return dispatch({ type: LOGIN_FAILURE, error: response.data });
    });
}

export const register = (data) => dispatch => {
  const date = new Date();
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`http://localhost:3500/user/register/?`, data)
    .then((payload) => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch(({ response }) => {
      dispatch({ type: REGISTER_FAILURE, error: response.data });
    });
}
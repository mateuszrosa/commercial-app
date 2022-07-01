import {getDate} from '../helpers';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';
export const EDIT_USER_PASWORD_REQUEST = 'EDIT_USER_PASWORD_REQUEST';
export const EDIT_USER_PASWORD_SUCCESS = 'EDIT_USER_PASWORD_SUCCESS';
export const EDIT_USER_PASWORD_FAILURE = 'EDIT_USER_PASWORD_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const ADD_ORDER_REQUEST = 'ADD_ORDER_REQUEST';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAILURE = 'ADD_ORDER_FAILURE';
export const RESET_ERRORS = 'RESET_ERRORS';

const axios = require('axios');

export const login = ({login, password}) => dispatch => {
    const params = new URLSearchParams({
        login,
        password,
      });
      dispatch({ type: LOGIN_REQUEST });
  return axios
    .get(`https://commercial-app1.herokuapp.com/user/login/?${params}`)
    .then((payload) => {
      return dispatch({ type: LOGIN_SUCCESS, payload });
    })
    .catch(({ response }) => {
      return dispatch({ type: LOGIN_FAILURE, error: response.data });
    });
}

export const editUser = (data, login) => (dispatch) => {
  const params = new URLSearchParams({
    ...data,
    login
  });
  dispatch({ type: EDIT_USER_REQUEST });
  return axios
    .put(`http://localhost:3500/user/update/?${params}`)
    .then((payload) => {
      return dispatch({type: EDIT_USER_SUCCESS, payload})
    })
    .catch(({response}) => {
      return dispatch({ type: EDIT_USER_FAILURE, error: response.data });
    })
}

export const editUserPassword = (data, login) => (dispatch) => {
  dispatch({type: EDIT_USER_PASWORD_REQUEST});
  return axios
    .put(`https://commercial-app1.herokuapp.com/user/password/?`, {...data, login})
    .then((payload) => {
      console.log(payload);
      return dispatch({type: EDIT_USER_PASWORD_SUCCESS, payload})
    })
    .catch(({response}) => {
      return dispatch({type: EDIT_USER_PASWORD_FAILURE, error: response.data});
    })
}

export const logout = () => (dispatch) => {
  return dispatch({ type: LOGOUT });
};

export const register = (data) => dispatch => {
  const date = getDate(new Date());
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`https://commercial-app1.herokuapp.com/user/register/?`, {...data, date})
    .then((payload) => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch(({ response }) => {
      dispatch({ type: REGISTER_FAILURE, error: response.data });
    });
}

export const order = (data, login) => dispatch => {
  dispatch({type: ADD_ORDER_REQUEST});
  return axios
    .put(`https://commercial-app1.herokuapp.com/user/order/?`, {data, login})
    .then((payload) => {
      dispatch({type: ADD_ORDER_SUCCESS, payload})
    })
    .catch(err => console.log(err))
}

export const resetErrors = () => dispatch => {
  dispatch({type: RESET_ERRORS});
}
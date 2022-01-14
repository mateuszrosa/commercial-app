export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const axios = require('axios');

export const login = (login, password) => dispatch => {
    const params = new URLSearchParams({
        login,
        password,
      });
      console.log(params);
      dispatch({ type: LOGIN_REQUEST });
  return axios
    .get(`http://localhost:3500/user/login/?${params}`)
    .then((payload) => {
        console.log(payload);
      return dispatch({ type: LOGIN_SUCCESS, payload });
    })
    .catch(({ response }) => {
      return dispatch({ type: LOGIN_FAILURE, error: response.data });
    });
}
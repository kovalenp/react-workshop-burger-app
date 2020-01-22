import axios from 'axios';
import * as actionTypes from './actionTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = ({ localId, idToken }) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: localId,
    token: idToken,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, authType) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }
    let authUrl;
    console.log('Here' + authType)
    switch (authType) {
      case "SIGN UP":
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSz8zwnQq4XR5L9SP3je3Q8t-h_5GDN70'
        break
      case "SIGN IN":
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSz8zwnQq4XR5L9SP3je3Q8t-h_5GDN70'
        break
      default:
        authUrl = 'n/a'
    }


    axios.post(authUrl, authData)
      .then(response => {
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      })
  }
}

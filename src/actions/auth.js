import { push } from 'redux-first-history';
import * as types from './actionTypes';

export const signupSuccess = payload => {
  return dispatch => {
    dispatch(push('/'));
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload,
    });
  };
};

export const signupFailure = payload => {
  return {
    type: types.SIGNUP_FAILURE,
    payload,
  };
};

export const signinSuccess = payload => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload,
  };
};

export const signinFailure = payload => {
  return {
    type: types.SIGNIN_FAILURE,
    payload,
  };
};

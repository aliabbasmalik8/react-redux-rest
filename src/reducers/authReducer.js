import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      localStorage.setItem('taskerToken', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        error: null,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        error: action.payload,
      };
    case types.AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        error: null,
      };
    case types.UN_AUTHENTICATE_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

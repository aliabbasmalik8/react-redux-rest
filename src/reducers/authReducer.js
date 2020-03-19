import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      localStorage.setItem('taskerToken', action.payload.token);
      return {
        ...state,
        isLoggedIn: true,
        error: null,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

import * as types from './actionTypes';

export const getAllUsers = payload => {
  return {
    type: types.GET_ALL_USERS_SUCCESS,
    payload,
  };
};

export const getAllUsersFailure = payload => {
  return {
    type: types.GET_ALL_USERS_FAILURE,
    payload,
  };
};

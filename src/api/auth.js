import request from './request';

export const signup = (data, successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/signup',
        successAction,
        failureAction,
        opts: {
          data,
          method: 'POST',
        },
      }),
    );
  };
};

export const signin = (data, successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/signin',
        successAction,
        failureAction,
        opts: {
          data,
          method: 'POST',
        },
      }),
    );
  };
};

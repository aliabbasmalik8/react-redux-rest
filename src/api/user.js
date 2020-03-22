import request from './request';

export const users = (successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/all',
        successAction,
        failureAction,
        opts: {
          method: 'GET',
        },
      }),
    );
  };
};

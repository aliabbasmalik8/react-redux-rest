import { BASE_URL } from 'config/apiConfig';
import axios from 'axios';

const request = ({ path, successAction, failureAction, opts = {} }) => {
  return dispatch => {
    axios({
      url: `${BASE_URL}/${path}`,
      ...opts,
      headers: {
        Authorization: localStorage?.taskerToken ?? null,
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch(successAction(res.data));
      })
      .catch(error => {
        dispatch(failureAction(error));
      });
  };
};

export default request;

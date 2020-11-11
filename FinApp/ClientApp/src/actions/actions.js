import axios from 'axios';

export const authenticateAction = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  const url = 'User/FindUser';
  axios
    .post(url, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: 'AUTHENTICATE_SUCCESS', payload });
    })
    .catch(() => {
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
    });
};
export const registerAction = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  const url = 'User/Create';
  axios
    .post(url, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: 'AUTHENTICATE_SUCCESS', payload });
    })
    .catch(() => {
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
    });
};

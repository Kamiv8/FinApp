import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';

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
    .catch((err) => {
      dispatch({ type: 'AUTHENTICATE_FAILURE', err });
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

export const LogoutAction = (Id) => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  const url = 'User/Logout';

  // eslint-disable-next-line no-undef
  localStorage.clear();
  axios.post(url, {
    Id,
  });
  return <Redirect to="/" />;
};

export const AddOperationAction = (title, price, date, description, userId) => (dispatch) => {
  const url = 'Operation/Create';
  axios
    .post(url, {
      Title: title,
      Price: +price,
      Date: date,
      Description: description,
      UserId: userId,
    })
    .then((payload) => {
      dispatch({ type: 'ADD_OPERATION_MONEY', payload });
    })
    .catch(() => {
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
    });
};
// do poprawy
export const SortByCategoryAction = (category, userId) => (dispatch) => {
  const url = 'Operation/SortByCategory';
  console.log(category);
  axios.post(url, { Title: category, UserId: userId });
};

export const ChangeNameAction = (userId, newName) => (dispatch) => {
  const url = 'User/ChangeUsername';
  axios
    .put(url, {
      id: userId,
      username: newName,
    })
    .then((payload) => dispatch({ type: 'CHANGE_USERNAME', payload }))
    .catch(() => {
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
    });
};
export const ChangePasswordAction = (userId, newPassword) => (dispatch) => {
  const url = 'User/ChangePassword';
  axios.put(url, {
    id: userId,
    password: newPassword,
  });
};

export const RemoveDataAction = (userId) => (dispatch) => {
  const url = 'User/RemoveData';
  axios
    .put(url, {
      id: userId,
    })
    .then((payload) => dispatch({ type: 'REMOVE_DATA', payload }));
};

export const AddDataAction = (file, userId) => (dispatch) => {
  const url = 'User/AddImage';

  const form = new FormData();
  form.append('file', file);
  form.append('json_data', userId);

  axios.post(url, form).then((payload) =>
    dispatch({
      type: 'FETCH_IMAGE',
      payload,
    }),
  );
};

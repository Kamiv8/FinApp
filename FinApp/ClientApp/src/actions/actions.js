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


export const LogoutAction =(Id)=> (dispatch) =>{
  dispatch({type: 'LOGOUT'});
  const url = 'User/Logout';
  axios
    .post(url,
      {
        Id,
      }

    )
  return <Redirect to='/' />;
}
export const FetchDataMoneyAction = (userId) => dispatch =>{
  const url = 'Operation/GetData';
  console.log(`${userId} idddd`)
  axios
    .post(url,{Id: userId})
    .then((payload) => {
      dispatch({ type: 'GET_DATA_OPERATION', payload });
    })
    .catch(() => dispatch({ type: 'AUTHENTICATE_FAILURE' }));
} 
export const AddOperationAction = (title,price,date,description,userId) => dispatch =>{
    


    const url = 'Operation/Create';
    axios
      .post(url, {    
        Title: title,
        Price: +price,
        Date: date,
        Description: description,
        UserId: userId
      })
      .then((payload) => {
        dispatch( {type: 'ADD_OPERATION_MONEY',payload });
      })
      .catch(() => {
        dispatch({ type: 'AUTHENTICATE_FAILURE' });
      });
}

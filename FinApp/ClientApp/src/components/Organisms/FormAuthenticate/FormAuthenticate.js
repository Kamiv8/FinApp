import React from 'react';
import {  Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { routes } from '../../../theme/MainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import { authenticateAction, registerAction } from '../../../actions/actions';
import {StyledWrapper,StyledForm,StyledLink,StyledTitle}from './StyledFormAuthenticate';



const FormAuthenticate = ({ registerForm, authenticate, register, isLoggedIn }) => {
  return (
    <>
      <StyledWrapper>
        {registerForm ? (
          <>
            <StyledTitle>Create Account</StyledTitle>
            <Formik
              initialValues={{ username: '', password: '', secondPassword: '' }}
              onSubmit={({ username, password, secondPassword }, { resetForm }) => {
                if (password === secondPassword) {
                  register(username, password);
                  resetForm();
                }
              }}
            >
              {({ handleChange, values, handleBlur }) => {
                if (isLoggedIn) {
                  return <Redirect to="/home" />;
                }
                return (
                  <>
                    <StyledForm>
                      <Input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="LOGIN"
                        autoComplete="off"
                      />
                      <Input
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        type="password"
                        name="secondPassword"
                        placeholder="CONFIM PASSWORD"
                        value={values.secondPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Button type="submit">REGISTER</Button>
                    </StyledForm>
                  </>
                );
              }}
            </Formik>
            <StyledLink to={routes.loginPage}> I want to log in</StyledLink>
          </>
        ) : (
          <>
            <StyledTitle>Sign in</StyledTitle>
            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={({ username, password }) => {
                authenticate(username, password);
              }}
            >
              {({ handleChange, values, handleBlur }) => {
                if (isLoggedIn) {
                  return <Redirect to="/home" />;
                }

                return (
                  <>
                    <StyledForm>
                      <Input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="LOGIN"
                        autoComplete="off"
                      />
                      <Input
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Button type="submit">ENTER</Button>
                    </StyledForm>
                  </>
                );
              }}
            </Formik>
            <StyledLink to={routes.registerPage}>if you dont have account, click here</StyledLink>
          </>
        )}
      </StyledWrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => {
    dispatch(authenticateAction(username, password));
  },
  register: (username, password) => {
    dispatch(registerAction(username, password));
  },
});

const mapStateToProps = ({ isLoggedIn, userId }) => ({
  isLoggedIn,
  userId,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAuthenticate);

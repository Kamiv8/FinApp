import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form as Forms } from 'formik';
import { connect } from 'react-redux';

import { routes } from '../theme/MainTheme';
import Input from './Input';
import Button from './Button';
import { authenticateAction, registerAction } from '../actions/actions';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 308px;
  margin: 0 auto;
`;
const StyledTitle = styled.p`
  margin: 37px 0;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const StyledForm = styled(Forms)`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-evenly;
  align-items: center;
`;


const Form = ({ registerForm, authenticate, register, isLoggedIn, userId }) => {
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
              {({ handleChange, values, handleBlur,}) => {
                console.log(isLoggedIn);
                if (isLoggedIn) {
                console.log(userId);

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

const mapStateToProps = ({ isLoggedIn,userId }) => ({
  isLoggedIn,
  userId
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

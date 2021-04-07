import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form as Forms, Formik } from 'formik';
import { ChangeNameAction, ChangePasswordAction } from '../../../actions/actions';

import Button from '../../Atoms/Button/Button';
import HamburgerImage from '../../Atoms/HamburgerImage/HamburgerImage';
import Input from '../../Atoms/Input/Input';
import Label from '../../Atoms/Label/Label';
import Title from '../../Atoms/Title/Title';

const StyledHamburgerIcon = styled(HamburgerImage)`
  margin-left: 10px;
`;
const StyledForm = styled(Forms)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledContent = styled.div`
  margin: 30px 5px 0 50px;
  height: 280px;
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 1fr 5fr;
`;
const SettingsUsername = ({
  open,
  setOpen,
  data,
  userId,
  changeName,
  changePassword,
  password,
}) => (
  <StyledContent>
    {data === 'username' ? (
      <>
        <Title settings>Do you want to change username?</Title>
        <div onClick={() => setOpen(!open)}>
          <StyledHamburgerIcon open settings />
        </div>
        <Formik
          initialValues={{ username: '' }}
          onSubmit={({ username }, { resetForm }) => {
            changeName(userId, username);
            setOpen(!open);
            resetForm();
          }}
        >
          {({ handleChange, values, handleBlur }) => (
            <StyledForm>
              <Label>New username</Label>
              <Input
                third
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <Button type="submit" settings>
                Save
              </Button>
            </StyledForm>
          )}
        </Formik>
      </>
    ) : (
      <>
        <Title settings>Do you want to change password?</Title>
        <div onClick={() => setOpen(!open)}>
          <StyledHamburgerIcon open settings />
        </div>
        <Formik
          initialValues={{ oldPassword: '', newPassword: '', confimNewPassword: '' }}
          onSubmit={({ newPassword, confimNewPassword }, { resetForm }) => {
            console.log(password);
            if (newPassword === confimNewPassword) {
              changePassword(userId, newPassword);
              setOpen(!open);
              resetForm();
            } else {
              alert('Old password is not corect or confim password is not equal new password');
            }
          }}
        >
          {({ handleChange, values, handleBlur }) => (
            <StyledForm>
              <Label>Old password</Label>
              <Input
                third
                type="password"
                name="oldPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oldPassword}
              />
              <Label>New password</Label>
              <Input
                third
                type="password"
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
              />
              <Label>New confim password</Label>
              <Input
                third
                type="password"
                name="confimNewPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confimNewPassword}
              />
              <Button type="submit" settings>
                Save
              </Button>
            </StyledForm>
          )}
        </Formik>
      </>
    )}
  </StyledContent>
);

const mapStateToProps = ({ userId, password }) => ({
  userId,
  password,
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (userId, newName) => {
    dispatch(ChangeNameAction(userId, newName));
  },
  changePassword: (userId, newPassword) => {
    dispatch(ChangePasswordAction(userId, newPassword));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsUsername);

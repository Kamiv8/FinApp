import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Title from '../Atoms/Title/Title';
import HomeTemplate from '../templates/HomeTemplate';
import profileIcon from '../../assets/image/3135715.png';
import Input from '../Atoms/Input/Input';
import Button from '../Atoms/Button/Button';
import Label from '../Atoms/Label/Label';
import ModalSettings from '../Organisms/ModalSettings/ModalSettings';
import SettingsIcon from '../Atoms/SettingsIcon/SettingsIcon';
import { AddDataAction } from '../../actions/actions';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 40px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 5px -5px 6px rgba(0, 0, 0, 0.5);
`;
const StyledIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  justify-self: center;
  position: relative;
`;
const StyledForm = styled.form`
  display: grid;
  width: 70%;
`;

const StyledInputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SettingsPage = ({ username, addData, userId, profileImage }) => {
  const [{ open, data }, setOpenModal] = useState({
    open: false,
    data: '',
  });

  const [file, setFile] = useState(null);

  return (
    <>
      <ModalSettings open={open} setOpen={setOpenModal} data={data} />
      <HomeTemplate>
        <StyledWrapper>
          <Title>Settings</Title>
          <StyledIconWrapper>
            <StyledImage src={profileIcon} alt="profileImage" />
            <input type="file" onChange={(x) => setFile(x.currentTarget.files[0])} />
            <button type="button" onClick={() => addData(file, userId)}>
              dddd
            </button>
          </StyledIconWrapper>
          <StyledForm>
            <Label>Username</Label>
            <StyledInputContent>
              <Input third type="text" value={username} disabled />
              <SettingsIcon open={open} setOpenModal={setOpenModal} data="username" />
            </StyledInputContent>

            <Label>Password</Label>
            <StyledInputContent>
              <Input third type="text" value="......................." disabled />
              <SettingsIcon open={open} setOpenModal={setOpenModal} data="password" />
            </StyledInputContent>
            <Label>Interface color</Label>
            <input type="color" />
            <Label>Reset all data</Label>
            <Button type="button" onClick={() => setOpenModal({ open: !open, data: 'data' })}>
              Reset
            </Button>
          </StyledForm>
        </StyledWrapper>
      </HomeTemplate>
    </>
  );
};

const mapStateToProps = ({ username, userId, profileImage }) => ({
  username,
  userId,
  profileImage,
});
const mapDispatchToProps = (dispatch) => ({
  addData: (file, userId) => {
    dispatch(AddDataAction(file, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

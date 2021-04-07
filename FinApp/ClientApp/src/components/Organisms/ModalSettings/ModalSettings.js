import React from 'react';
import styled from 'styled-components';
import SettingsData from '../../Molecues/SettingsData/SettingsData';
import SettingsUsername from '../../Molecues/SettingsUsername/SettingsUsername';

const StyledView = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${({ theme }) => theme.modalBackground};
  z-index: 5;
  display: grid;
  align-items: center;
  display: ${({ openModal }) => (openModal ? 'grid' : 'none')};
`;

const StyledWrapper = styled.div`
  margin: auto 5.4%;
  height: 40%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
`;

const ModalSettings = ({ open, setOpen, data }) => {
  let element;
  if (data === 'username') {
    element = <SettingsUsername open={open} setOpen={setOpen} data={data} />;
  } else if (data === 'password') {
    element = <SettingsUsername open={open} setOpen={setOpen} data={data} />;
  } else {
    element = <SettingsData open={open} setOpen={setOpen} />;
  }

  return (
    <>
      <StyledView openModal={open}>
        <StyledWrapper>{element}</StyledWrapper>
      </StyledView>
    </>
  );
};

export default ModalSettings;

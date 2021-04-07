import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChangeIcon } from '../../../assets/image/ChangeIcon.svg';

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.purple};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const SettingsIcon = ({ setOpenModal, open, data }) => (
  <>
    <StyledBackground onClick={() => setOpenModal({ open: !open, data })}>
      <ChangeIcon />
    </StyledBackground>
  </>
);

export default SettingsIcon;

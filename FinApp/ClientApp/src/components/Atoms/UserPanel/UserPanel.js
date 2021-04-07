import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../../assets/image/3135715.png';

const StyledProfileIcon = styled.div`
  width: 37px;
  height: 37px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 50%;
  background-image: url(${image});
  background-position: center;
  background-size: 100%;
  @media screen and (min-width: 960px) {
    width: 74px;
    height: 74px;
  }
`;
const StyledUserName = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.white};
  padding-left: 20px;
  @media screen and (min-width: 960px) {
    color: ${({ theme }) => theme.grayDark};
    //font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const UserPanel = ({ children }) => (
  <>
    <StyledProfileIcon />
    <StyledUserName to="/">{children}</StyledUserName>
  </>
);

export default UserPanel;

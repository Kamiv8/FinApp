import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/image/3135715.png';

import Nav from './Nav';

const StyledWrapper = styled.div`
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.purple};
  box-shadow: -10px 3px 20px rgba(0, 0, 0, 0.16);
`;
const StyledUserPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 40px;
`;
const StyledProfileIcon = styled.div`
  width: 37px;
  height: 37px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 50%;
  background-image: url(${image});
  background-position: center;
  background-size: 100%;
`;
const StyledUserName = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.white};
  padding-left: 20px;
`;
const StyledBookmarksPanel = styled.nav`
  position: relative;
  top: 200px;
`;
const Navigation = ({ username }) => {
  return (
    <>
      <StyledWrapper>
        <StyledUserPanel>
          <StyledProfileIcon />
          <StyledUserName to="/">{username}</StyledUserName>
        </StyledUserPanel>
        <StyledBookmarksPanel>
          <Nav />
        </StyledBookmarksPanel>
      </StyledWrapper>
    </>
  );
};
const mapStateToProps = ({ username }) => {
  return { username };
};
export default connect(mapStateToProps)(Navigation);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoutAction } from '../actions/actions';

import image from '../assets/image/3135715.png';
import {ReactComponent as LogoutImage} from '../assets/image/logout2.svg';

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
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
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
const StyledLogout = styled(Link)`
display: grid;
justify-content: end; // do poprawy ten top 200
position: relative;
top: 390px;

`;
const Navigation = ({ username,logout,open }) => {
  return (
    <>
      <StyledWrapper open={open}>
        <StyledUserPanel>
          <StyledProfileIcon />
          <StyledUserName to="/">{username}</StyledUserName>
        </StyledUserPanel>
        <StyledBookmarksPanel>
          <Nav />
        </StyledBookmarksPanel>
          <StyledLogout to='/' onClick={logout}>
            <LogoutImage />
          </StyledLogout>
      </StyledWrapper>
    </>
  );
};
const mapStateToProps = ({ username }) => {
  return { username };
};
const mapDispatchToProps = (dispatch) =>({
  logout: () => { dispatch(LogoutAction()); }
})
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);

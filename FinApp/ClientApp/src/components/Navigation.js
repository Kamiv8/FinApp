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
  display: ${({open}) => open ? 'grid' : 'none'} ;
  top: 0;
  right: 0;
  padding: 6% 6%;
  background-color: ${({ theme }) => theme.purple};
  box-shadow: -10px 3px 20px rgba(0, 0, 0, 0.16);
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`;
const StyledUserPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  position: relative;
`;
const StyledProfileIcon = styled.div`
  width:  37px;
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
  top: 15%;

`;
const StyledLogout = styled(Link)`

`;
const StyledLogoutWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: end;
  justify-content: end;
`;
const Navigation = ({ username,logout,open ,userId}) => {
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
          <StyledLogoutWrapper>
          <StyledLogout to='/' onClick={()=>logout(userId)}>
            <LogoutImage />
          </StyledLogout>
          </StyledLogoutWrapper>
      </StyledWrapper>
    </>
  );
};
const mapStateToProps = ({ username,userId }) => {
  return { username,userId };
};
const mapDispatchToProps = (dispatch) =>({
  logout: (userId) => { dispatch(LogoutAction(userId)); }
})
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);

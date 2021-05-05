import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { LogoutAction } from '../../../actions/actions';

import { ReactComponent as LogoutImage } from '../../../assets/image/logout2.svg';
import UserPanel from '../../Atoms/UserPanel/UserPanel';

import Nav from '../../Molecues/Nav/Nav';

const Open = keyframes`
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
`;

const Animation = () => css`
  animation: ${Open} 0.3s ease-out forwards;
`;

const StyledWrapper = styled.div`
  width: 80%;
  height: 100vh;
  position: absolute;
  z-index: 3;
  display: ${({ open }) => (open ? 'grid' : 'none')};
  top: 0;
  right: 0;
  padding: 6% 6%;
  background-color: ${({ theme }) => theme.purple};
  box-shadow: -10px 3px 20px rgba(0, 0, 0, 0.16);
  ${({ open }) => (open ? Animation : ' transform: translateX(100%)')};
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
const StyledUserPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  position: relative;
  margin-right: 35px;
`;

const StyledBookmarksPanel = styled.nav`
  position: relative;
  top: 15%;
`;
const StyledLogout = styled(Link)``;
const StyledLogoutWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: end;
  justify-content: end;
`;
const Navigation = ({ username, logout, open, userId }) => {
  return (
    <>
      <StyledWrapper open={open}>
        <StyledUserPanel>
          <UserPanel>{username}</UserPanel>
        </StyledUserPanel>
        <StyledBookmarksPanel>
          <Nav />
        </StyledBookmarksPanel>
        <StyledLogoutWrapper>
          <StyledLogout to="/" onClick={() => logout(userId)}>
            <LogoutImage />
          </StyledLogout>
        </StyledLogoutWrapper>
      </StyledWrapper>
    </>
  );
};
const mapStateToProps = ({ username, userId }) => {
  return { username, userId };
};
const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => {
    dispatch(LogoutAction(userId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

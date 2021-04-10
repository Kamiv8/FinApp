import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutAction } from '../../../actions/actions';

import { ReactComponent as Logout } from '../../../assets/image/logoutDark.svg';
import Title from '../../Atoms/Title/Title';
import UserPanel from '../../Atoms/UserPanel/UserPanel';
import FormOperation from '../../Molecues/FormOperation/FormOperation';

const StyledWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    //width: 100%;
    height: 90%;
    border-left: 2px solid ${({ theme }) => theme.purple};
    display: flex;
    flex-direction: column;
    // justify-items: center;
    justify-content: space-around;
    align-items: center;
    padding: 7%;
  }
`;
const StyledLogout = styled(Logout)`
  fill: red;
`;

const StyledUserWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5vh;
  }
`;
const StyledOperation = styled.div`
  width: 100%;
  height: 400px;
`;

const OperationDesktop = ({ username, userId, logout }) => (
  <div>
    <StyledUserWrapper>
      <UserPanel>{username}</UserPanel>
      <Link to="/" onClick={() => logout(userId)}>
        <StyledLogout />
      </Link>
    </StyledUserWrapper>
    <StyledWrapper>
      <Title>Add operation</Title>
      <StyledOperation>
        <FormOperation />
      </StyledOperation>
    </StyledWrapper>
  </div>
);

const mapStateToProps = ({ username, userId }) => ({
  username,
  userId,
});
const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => {
    dispatch(LogoutAction(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationDesktop);

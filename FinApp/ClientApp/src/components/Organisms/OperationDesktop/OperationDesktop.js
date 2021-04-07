import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ReactComponent as Logout } from '../../../assets/image/logout2.svg';
import Title from '../../Atoms/Title/Title';
import UserPanel from '../../Atoms/UserPanel/UserPanel';
import FormOperation from '../AddOperation/AddOperation';

const StyledWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    border-left: 2px solid ${({ theme }) => theme.purple};
    display: block;
    height: 100%;
    padding: 7%;
  }
`;
const StyledLogout = styled(Logout)`
  fill: red;
`;

const OperationDesktop = ({ username }) => (
  <StyledWrapper>
    <UserPanel>{username}</UserPanel>
    <StyledLogout />
    <Title>Add operation</Title>
    <FormOperation />
  </StyledWrapper>
);

const mapStateToProps = ({ username }) => ({
  username,
});

export default connect(mapStateToProps)(OperationDesktop);

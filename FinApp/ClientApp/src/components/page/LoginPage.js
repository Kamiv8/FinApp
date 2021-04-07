import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../../theme/MainTheme';
import AuthTemplate from '../templates/AuthTemplate';
import LoginImage from '../Atoms/LoginImage/LoginImage';
import FormAuthenticate from '../Organisms/FormAuthenticate/FormAuthenticate';
import { ReactComponent as Logout } from '../../assets/image/human_profile.svg';

const StyledLogout = styled(Logout)`
  width: 100%;
  height: 100%;
`;

const LoginPage = ({ location }) => {
  const locations = location.pathname;
  return (
    <>
      <AuthTemplate>
        {locations === routes.loginPage ? (
          <>
            <LoginImage />
            <FormAuthenticate />
          </>
        ) : (
          <>
            <StyledLogout />
            <FormAuthenticate registerForm />
          </>
        )}
      </AuthTemplate>
    </>
  );
};

export default withRouter(LoginPage);

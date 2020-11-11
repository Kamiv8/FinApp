import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { routes } from '../theme/MainTheme';
import LogoImage from '../components/LogoImage';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 33px 37px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledContent = styled.div`
  width: 100%;
  min-height: 622px;
  display: grid;
  grid-template-rows: 40% 60%;
  justify-content: center;
`;

const AuthTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Link to={routes.loginPage}>
        <LogoImage />
      </Link>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
};

export default AuthTemplate;

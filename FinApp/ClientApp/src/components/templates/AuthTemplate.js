import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { routes, px2vw } from '../../theme/MainTheme';
import LogoImage from '../Atoms/LogoImage/LogoImage';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${px2vw(33)} 10%; //8% 10%; // 33px 37px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.purple};
`;

// styled grid wrapper and make responsible form

const StyledContent = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-rows: 2fr 2fr;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 960px) {
    padding-top: 10vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: space-between;
  }
`;
const StyledLink = styled(Link)`
  // margin-top: ${px2vw(20)};
  width: 55px;
  height: 55px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledLink to={routes.loginPage}>
        <LogoImage login />
      </StyledLink>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
};

export default AuthTemplate;

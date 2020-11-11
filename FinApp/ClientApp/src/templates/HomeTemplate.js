import React from 'react';
import styled from 'styled-components';

import Logo from '../components/LogoImage';
import HamburgerIcon from '../components/HamburgerImage';
import Navigation from '../components/Navigation';

const StyledWrapper = styled.div`
  padding: 30px 20px;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMainContent = styled.div``;

const HomeTemplate = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <Navigation />
        <StyledHeader>
          <Logo />
          <HamburgerIcon />
        </StyledHeader>
        <StyledMainContent>{children}</StyledMainContent>
      </StyledWrapper>
    </>
  );
};

export default HomeTemplate;

import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/LogoImage';
import HamburgerIcon from '../components/HamburgerImage';
import Navigation from '../components/Navigation';

const StyledWrapper = styled.div`
  padding: 0 5.4%;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.purple};
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding-top: 6%;
`;

const StyledHamburgerWrapper = styled.div`
  width: 35px;
  height: 35px;
`;
const StyledMainContent = styled.div`
  height: 80vh;
  background-color: ${({ theme }) => theme.white};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 10% 5% auto 10%;
  margin-top: 5vh;
  padding: 5.5%;
  border-radius: 20px;
`;

const HomeTemplate = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledWrapper>
        <StyledHeader>
          <Logo />
          <StyledHamburgerWrapper onClick={() => setOpen(!open)}>
            <HamburgerIcon open={open} />
          </StyledHamburgerWrapper>
        </StyledHeader>
        <Navigation open={open} setOpen={setOpen} />

        <StyledMainContent>{children}</StyledMainContent>
      </StyledWrapper>
    </>
  );
};

export default HomeTemplate;

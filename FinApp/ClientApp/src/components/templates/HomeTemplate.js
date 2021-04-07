import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../Atoms/LogoImage/LogoImage';
import HamburgerIcon from '../Atoms/HamburgerImage/HamburgerImage';
import Navigation from '../Organisms/Navigation/Navigation';
import Nav from '../Molecues/Nav/Nav';

const StyledWrapper = styled.div`
  padding: 0 5.4%;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.purple};
  @media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1% 0 5.4%;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding-top: 2vh;
  @media (min-width: 960px) {
    width: 20%;
    height: 100vh;
    padding-top: 6vh;
    flex-direction: column;
    justify-content: start;
  }
`;

const StyledHamburgerWrapper = styled.div`
  width: 35px;
  height: 35px;
  @media (min-width: 960px) {
    display: none;
  }
`;
const StyledMainContent = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.white};
  margin-top: 5vh;
  padding: 5.5%;
  border-radius: 20px;
  @media screen and (min-width: 960px) {
    width: 80%;
    height: 95vh;
    margin: 2.5vh;
    // margin-right: 20px;
    padding: 4%;
    border-radius: 90px;
  }
`;

const StyledNav = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: grid;
    margin-top: 15vh;
  }
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
          <StyledNav>
            <Nav />
          </StyledNav>
        </StyledHeader>
        <Navigation open={open} setOpen={setOpen} />

        <StyledMainContent>{children}</StyledMainContent>
      </StyledWrapper>
    </>
  );
};

export default HomeTemplate;

// <Nav />

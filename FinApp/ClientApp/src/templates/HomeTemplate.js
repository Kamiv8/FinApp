import React,{useState} from 'react';
import styled from 'styled-components';

import Logo from '../components/LogoImage';
import HamburgerIcon from '../components/HamburgerImage';
import Navigation from '../components/Navigation';

const StyledWrapper = styled.div`
  padding: 0 5.4%;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.purple};
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 6%;
`;


const StyledHamburgerWrapper = styled.div`
  
`;
const StyledMainContent = styled.div``;

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
// do poprawy przekazywanie funkcji open

export default HomeTemplate;

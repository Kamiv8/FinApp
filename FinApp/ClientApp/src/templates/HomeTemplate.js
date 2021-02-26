import React,{useState} from 'react';
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
 const [open, setOpen] = useState(false);


  return (
    <>
      <StyledWrapper>
        <Navigation open={open} setOpen={setOpen} />
        <StyledHeader>
          <Logo />
          <div onClick={() => setOpen(!open)}>  
            <HamburgerIcon open={open} />
          </div>
        </StyledHeader>
        <StyledMainContent>{children}</StyledMainContent>

      </StyledWrapper>
    </>
  );
};
// do poprawy przekazywanie funkcji open

export default HomeTemplate;

import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.ul`
  position: relative;
//  bottom: 15px;
`;

const StyledLine = styled.li`
  width: 35px;
  height: 4px;
  margin-top: 4px;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  z-index: 2;
  right: 0;
  ${({ second }) =>
    second &&
    css`
      width: 20px;
      top: 10px;
    `}
  ${({ third }) =>
    third &&
    css`
      width: 30px;
      top: 20px;
    `}
`;

// onClick={() => setOpen(!open)


const HamburgerIcon = (open,setOpen) => {

  return (

      <StyledWrapper >  
        <StyledLine first />
        <StyledLine second />
        <StyledLine third />
      </StyledWrapper>
  );
};

export default HamburgerIcon;

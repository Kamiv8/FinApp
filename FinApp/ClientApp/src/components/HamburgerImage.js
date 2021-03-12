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
  transform-origin: left top;
  z-index: 4;
  right: 0;
  &:nth-child(2) {
    width: 20px;
    top: 10px;
  }
  &:last-child {
    width: 30px;
    top: 20px;
  }
  ${({ exit }) =>
    exit &&
    css`
      &:first-child {
        transform: rotate(-45deg) translateY(-4px);
        transform-origin: right top;
      }
      &:nth-child(2) {
        display: none;
      }
      &:last-child {
        width: 35px;
        transform-origin: right bottom;
        transform: rotate(45deg);
      }
    `}
`;

// onClick={() => setOpen(!open)

const HamburgerIcon = ({ open }) => {
  return (
    <StyledWrapper>
      <StyledLine exit={open} />
      <StyledLine exit={open} />
      <StyledLine exit={open} />
    </StyledWrapper>
  );
};

export default HamburgerIcon;

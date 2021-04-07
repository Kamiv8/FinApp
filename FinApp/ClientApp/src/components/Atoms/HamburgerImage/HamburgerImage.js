import React from 'react';
import { StyledWrapper, StyledLine } from './StyledHamburgerImage';

const HamburgerIcon = ({ open, settings }) => {
  return (
    <StyledWrapper>
      <StyledLine exit={open} settings={settings} />
      <StyledLine exit={open} settings={settings} />
      <StyledLine exit={open} settings={settings} />
    </StyledWrapper>
  );
};

export default HamburgerIcon;

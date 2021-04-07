import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../../assets/image/profits.svg';

const StyledLogo = styled(Logo)`
  width: 55px;
  height: 55px;
  @media screen and (min-width: 960px) {
    width: ${({ login }) => (login ? '55px' : '135px')};
    height: ${({ login }) => (login ? '55px' : '135px')};
  }
`;

const LogoImage = ({ login }) => <StyledLogo login={login} />;

export default LogoImage;

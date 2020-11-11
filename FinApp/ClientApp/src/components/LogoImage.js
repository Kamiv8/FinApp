import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/image/profits.svg';

const StyledLogo = styled(Logo)`
  width: 55px;
  height: 55px;
`;

const LogoImage = () => <StyledLogo />;

export default LogoImage;

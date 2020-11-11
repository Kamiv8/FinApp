import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/MainTheme';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

export default MainTemplate;

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/MainTheme';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainTemplate = ({ children }) => {
  // const [selectedTheme, setSelectedTheme] = useState({ theme });

  return (
    <StyledWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

// const mapStateToProps = ({ mainColor }) => ({
//   mainColor,
// });

export default MainTemplate;

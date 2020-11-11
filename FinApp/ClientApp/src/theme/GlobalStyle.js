import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;

  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: rgba(141,129,219,1);
  }
  ul,ol{
    list-style: none;
    margin: 0;
  }
`;

export default GlobalStyle;

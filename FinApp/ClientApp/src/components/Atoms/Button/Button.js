import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, reverse }) => (reverse ? theme.white : theme.purple)};
  border-radius: 50px;
  color: ${({ theme, reverse }) => (reverse ? theme.purple : theme.white)};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-transform: uppercase;
  padding: 8px 50px;
  // border: none;
  border: ${({ theme, reverse }) => (reverse ? `1px solid ${theme.purple}` : 'none')};
  &:focus {
    outline: none;
  }
  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 220px;
    height: 40px;
    &:hover {
      background-color: ${({ theme }) => theme.purple};
      color: ${({ theme }) => theme.white};
    }
    //  display: ${({ reverse }) => (reverse ? 'none' : 'block')};
  }
  ${({ settings }) =>
    settings &&
    css`
      width: 100px;
      height: 34px;
      padding: 0;
    `}
`;

export default Button;

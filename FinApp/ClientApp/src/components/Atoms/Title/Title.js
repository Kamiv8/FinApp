import styled, { css } from 'styled-components';

const Title = styled.h2`
  color: ${({ theme, white }) => (white ? theme.white : theme.grayDark)};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.m)};
  ${({ settings }) =>
    settings &&
    css`
      color: ${({ theme }) => theme.purple};
      text-align: center;
    `}
  @media screen and (min-width: 960px) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xxxl : theme.fontSize.xl)};
  }
`;

export default Title;

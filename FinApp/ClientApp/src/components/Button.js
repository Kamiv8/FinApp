import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, reverse }) => (reverse ? theme.white : theme.purple)};
  border-radius: 50px;
  color: ${({ theme, reverse }) => (reverse ? theme.purple : theme.white)};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-transform: uppercase;
  padding: 8px 50px;
  border: none;
  border: ${({ theme, reverse }) => (reverse ? `1px solid ${theme.purple}` : 'none')};
  &:focus {
    outline: none;
  }
`;

export default Button;

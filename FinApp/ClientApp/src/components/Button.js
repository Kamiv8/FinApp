import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.purple};
  border-radius: 50px;
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  text-transform: uppercase;
  padding: 8px 0;
  border: none;
  width: 50%;
  &:focus {
    outline: none;
  }
`;

export default Button;

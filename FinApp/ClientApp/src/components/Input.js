import styled from 'styled-components';

const Input = styled.input`
  border-radius: 50px;
  background-color: ${({ theme }) =>  theme.gray };
  border: none;
  padding-left: 35px;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  &:focus {
    outline: none;
  }
  &::placeholder,
  &::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSize.xxxs};
  }
  
`;

export default Input;

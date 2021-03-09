import styled,{css} from 'styled-components';

const Input = styled.input`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.gray};
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
  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ theme: { fontSize } }) => fontSize.xs};
      border-bottom: 2px solid ${({theme}) => theme.purple};
      background: none;
      border-radius: 0;
      padding: 0;
      width: 100%;
      &::placeholder,
      &::-webkit-input-placeholder {
        font-size: ${({ theme }) => theme.fontSize.xxs};
      }
    `}
`;

export default Input;

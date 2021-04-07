import styled, { css } from 'styled-components';

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
  @media (min-width: 960px) {
    width: 70%;
    padding: 13px 35px;

    &::placeholder,
    &::-webkit-input-placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  ${({ second }) =>
    second &&
    css`
      font-size: ${({ theme: { fontSize } }) => fontSize.xs};
      border-bottom: 2px solid ${({ theme }) => theme.purple};
      background: none;
      border-radius: 0;
      padding: 0;
      width: 100%;
      &::placeholder,
      &::-webkit-input-placeholder {
        font-size: ${({ theme }) => theme.fontSize.xxs};
      }
    `}
  ${({ third }) =>
    third &&
    css`
      width: 100%;
      background: none;
      height: 30px;
      border: 2px solid ${({ theme }) => theme.grayDark};
      &::placeholder,
      &::-webkit-input-placeholder {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }
    `}
`;

export default Input;

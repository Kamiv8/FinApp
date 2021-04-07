import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme, color }) => (color > 0 ? theme.green : theme.red)};
  border-radius: 20px;
  width: 100%;
  height: ${({ expand }) => (expand ? 'auto' : '80px')};
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-template-rows: 2fr 1fr;
  justify-content: space-around;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const StyledElement = styled.p`
  padding-bottom: 10px;
  ${({ theme, price }) =>
    price &&
    css`
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.bold};
      padding: 15px 0 15px 10px;
    `}
  ${({ theme, title }) =>
    title &&
    css`
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.bold};
      justify-content: center;
      overflow-y: hidden;
      padding: 15px 5px;
    `}
      ${({ theme, date }) =>
    date &&
    css`
      font-size: ${theme.fontSize.xxs};
      font-weight: ${theme.light};
      padding: 3px 13px 0 0;
      justify-self: end;
    `}
      ${({ theme, description }) =>
    description &&
    css`
      font-size: ${theme.fontSize.s};
      display: ${({ expand }) => (expand ? 'block' : 'none')};
      padding: 0 10px;
      word-wrap: break-word;
      grid-column: 1/-1;
    `}
`;

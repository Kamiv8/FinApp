import styled, { css } from 'styled-components';

export const StyledWrapper = styled.ul`
  position: relative;
  width: 35px;
  height: 35px;
  //  bottom: 15px;
  cursor: pointer;
`;

export const StyledLine = styled.li`
  width: 35px;
  height: 4px;
  margin-top: 4px;
  border-radius: 20px;
  background-color: ${({ theme, settings }) => (settings ? theme.purple : theme.white)};
  position: absolute;
  transform-origin: left top;
  z-index: ${({ settings }) => (settings ? 6 : 4)};
  right: 0;
  &:nth-child(2) {
    width: 20px;
    top: 10px;
  }
  &:last-child {
    width: 30px;
    top: 20px;
  }
  ${({ exit }) =>
    exit &&
    css`
      &:first-child {
        transform: rotate(-45deg) translateY(-4px);
        transform-origin: right top;
      }
      &:nth-child(2) {
        display: none;
      }

      &:last-child {
        width: 35px;
        transform-origin: right bottom;
        transform: rotate(45deg);
      }
    `}
`;

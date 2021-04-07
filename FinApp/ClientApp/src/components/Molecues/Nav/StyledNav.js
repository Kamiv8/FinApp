import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  margin-top: 40px;
  display: flex;
  padding-left: 10px;
  //padding-top: 2px;
  flex-direction: row;
  align-items: center;
  width: 80%;
  &.active {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.grayLight};
  }
`;
export const StyledNavLinks = styled.ul`
  position: relative;
  display: grid;
  grid-auto-flow: row;
`;

export const StyledLinkName = styled.p`
  margin-left: 15px;
  padding-top: 7px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.bold};
  @media screen and (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

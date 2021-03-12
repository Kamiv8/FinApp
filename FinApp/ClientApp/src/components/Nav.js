import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../theme/MainTheme';
import { ReactComponent as Home } from '../assets/image/home2.svg';
import { ReactComponent as History } from '../assets/image/wallet2.svg';
import { ReactComponent as Group } from '../assets/image/group2.svg';
import { ReactComponent as Settings } from '../assets/image/settings2.svg';

const bookmarks = [
  {
    name: 'Home',
    route: routes.homePage,
    image: <Home />,
  },
  {
    name: 'History',
    route: routes.historyPage,
    image: <History />,
  },
  {
    name: 'Group',
    route: routes.groupPage,
    image: <Group />,
  },
  {
    name: 'Settings',
    route: routes.settingsPage,
    image: <Settings />,
  },
];

const StyledNavLink = styled(NavLink)`
  margin-top: 40px;
  display: flex;
  padding: 2px 10px 0 10px;
  //padding-top: 2px;
  flex-direction: row;
  width: 80%;
  &.active {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.grayLight};
  }
`;
const StyledNavLinks = styled.ul`
  position: relative;
  display: grid;
  grid-auto-flow: row;
`;

const StyledLinkName = styled.p`
  margin-left: 15px;
  padding-top: 7px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.bold};
`;

const Nav = () => (
  <>
    <StyledNavLinks>
      {bookmarks.map(({ name, route, image }) => {
        return (
          <React.Fragment key={name}>
            <StyledNavLink to={route} activeClassName="active">
              {image}
              <StyledLinkName> {name}</StyledLinkName>
            </StyledNavLink>
          </React.Fragment>
        );
      })}
    </StyledNavLinks>
  </>
);

export default Nav;

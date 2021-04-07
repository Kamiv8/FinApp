import React from 'react';
import { routes } from '../../../theme/MainTheme';
import { ReactComponent as Home } from '../../../assets/image/home2.svg';
import { ReactComponent as History } from '../../../assets/image/wallet2.svg';
import { ReactComponent as Group } from '../../../assets/image/group2.svg';
import { ReactComponent as Settings } from '../../../assets/image/settings2.svg';

import { StyledNavLinks, StyledNavLink, StyledLinkName } from './StyledNav';

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

const Nav = () => (
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
);

export default Nav;

import { grep } from 'jquery';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const bookmarks = [
  {
    name: 'Home',
    route: '/home',
  },
  {
    name: 'History',
    route: '/history',
  },
  {
    name: 'Group',
    route: '/group',
  },
  {
    name: 'Setings',
    route: 'settings',
  },
];

const StyledNavLink = styled(NavLink)`
  background-color: blue;
  &.active {
    background-color: red;
  }
`;

const Nav = () => (
  <>
    <ul>
      {bookmarks.map(({ name, route }) => {
        return (
          <StyledNavLink key={name} to={route} activeClassName="active">
            {name}
          </StyledNavLink>
        );
      })}
    </ul>
  </>
);

export default Nav;

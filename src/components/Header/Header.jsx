import React from 'react';
import { HeaderNav, HeaderWrap } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

export const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='Register'>Register</NavLink>

          <NavLink to='logIn'>logIn</NavLink>
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};

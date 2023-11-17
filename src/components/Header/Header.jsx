import React from 'react';
import { HeaderNav, HeaderWrap } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAuth } from 'hook';

export const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <NavLink to="/">Home</NavLink>
          {/* {!isLoggedIn ? ( */}
            <>
              <NavLink to="registration">Registration</NavLink>
              <NavLink to="logIn">logIn</NavLink>
            </>
          {/* ) : ( */}
            <>
              <NavLink to="phonebook">Phonebook</NavLink>
              <NavLink to="logOut">
                <button type="button">leave</button>
              </NavLink>
            </>
          {/* )} */}
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};

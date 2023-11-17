import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Home } from 'Page/Home';
import { Register } from 'Page/Register/Register';
import { LogIn } from 'Page/LogIn/LogIn';
import { useDispatch} from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { Phonebook } from 'Page/Phonebook';
import { useAuth } from 'hook';
import { LogOut } from './LogOut/LogOut';

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // при кожному монтуванні Арр, персіст записує значеня токена із ЛС в Редакс
  useEffect(() => dispatch(refreshUser), [dispatch]);

  return (
  // isRefreshing ?(
  //   <b>Refreshing user...</b>
  // ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Register />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="logOut" element={<LogOut />} />
        <Route path="phonebook" element={<Phonebook/>} />
      </Route>
    </Routes>
  );
};

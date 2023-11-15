import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Home } from 'Page/Home';
import { Register } from 'Page/Register/Register';
import { LogIn } from 'Page/LogIn/LogIn';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="logIn" element={<LogIn />} />
      </Route>
    </Routes>
  );
};

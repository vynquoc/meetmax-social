import React from 'react';
import Logo from '../../../components/Logo';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { Routes, Route } from 'react-router-dom';
const Authentication = () => {
  return (
    <div>
      <Logo />
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Authentication;

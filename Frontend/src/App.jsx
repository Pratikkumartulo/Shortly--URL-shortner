import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

export default App;

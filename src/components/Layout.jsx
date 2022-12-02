import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = ({ handleOpen }) => {
  return (
    <div>
      <NavBar handleOpen={handleOpen} />
      <Outlet />
    </div>
  );
};

export default Layout;

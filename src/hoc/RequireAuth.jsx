import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/diary" state={location} />;
  }

  return children;
};

export default RequireAuth;

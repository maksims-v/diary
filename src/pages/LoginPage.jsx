import React from 'react';
import LoginModal from '../components/LoginModal';
import { useSelector } from 'react-redux';

const LoginPage = ({ handleClose, open }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return <div>{!isAuth && <LoginModal handleClose={handleClose} open={open} />}</div>;
};

export default LoginPage;

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { exit } from '../store/reducer/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const NavBar = ({ handleOpen }) => {
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calendar
          </Typography>
          {!isAuth ? (
            <Button onClick={handleOpen} color="inherit">
              Войти
            </Button>
          ) : (
            <Button
              component={RouterLink}
              to="/diary"
              onClick={() => dispatch(exit())}
              color="inherit">
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

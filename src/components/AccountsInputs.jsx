import React, { useState } from 'react';
import { FormControl, FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { autorisation } from './../store/reducer/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function AccountsInputs({ handleClose }) {
  const [pass, setPass] = useState();
  const [user, setUSer] = useState('');

  const navigate = useNavigate('');
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch('');

  const enter = () => {
    const enterPassword = users.filter((item) => item.password === pass);
    if (enterPassword.length === 1) {
      localStorage.getItem('events');
      navigate('/diary/calendar', { replace: true });
      dispatch(autorisation(user));
      handleClose();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > :not(style)': { m: 1 },
      }}>
      <Typography id="spring-modal-description" sx={{ mt: 2 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-autowidth-label">Login</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={user}
            onChange={(value) => setUSer(value.target.value)}
            autoWidth
            label="User">
            {users.map((item, index) => {
              return (
                <MenuItem key={index} value={item.user}>
                  {item.user}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            sx={{ mt: 1 }}
            onChange={(value) => setPass(value.target.value)}
            helperText="Логин = пароль"
            id="demo-helper-text-aligned"
            label="Password"
            type="password"
          />
          <FormHelperText id="my-helper-text">Заполните все поля</FormHelperText>
        </FormControl>
      </Typography>
      <Button
        onClick={enter}
        component={RouterLink}
        to={'/diary/calendar'}
        size="large"
        variant="outlined"
        href="#outlined-buttons">
        Войти
      </Button>
    </Box>
  );
}

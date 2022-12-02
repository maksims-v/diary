import React from 'react';
import Calendar from '../components/Calendar';
import EventInputModal from '../components/CalendarInputModal';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import { changefilteruser } from '../store/reducer/authSlice';

const CalendarPage = () => {
  const [value, setValue] = React.useState(new Date());
  const [user, setUSer] = React.useState('admin');

  const { users, activeUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  dispatch(changefilteruser(user));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          '& > :not(style)': { m: 1 },
        }}>
        <EventInputModal setValue={setValue} value={value} />
        {activeUser === 'admin' && (
          <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">пользователь</InputLabel>
            <Select
              sx={{ width: '100px', height: '50px' }}
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
          </FormControl>
        )}
      </Box>
      <Calendar setValue={setValue} />
    </>
  );
};

export default CalendarPage;

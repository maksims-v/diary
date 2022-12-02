import React from 'react';
import { Calendar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { transformDate } from '../utils/date';
import { removeEvent } from '../store/reducer/calendarSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const border = {
  borderBottom: '1px solid black',
  maxWidth: '100px',
  width: '100%',
  color: 'black',
  '&:hover': {
    color: 'red',
  },
};

const App = ({ setValue }) => {
  const { event } = useSelector((state) => state.calendar);
  const { activeUser, adminActiveUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  localStorage.setItem('events', JSON.stringify(event));

  const deleteEvent = (value) => {
    const newArr = event.filter((item) => item !== value);
    dispatch(removeEvent(newArr));
  };

  const addToCalendar = (value) => {
    return (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }} className="events">
        {value.map((item, index) => (
          <li key={index}>
            <span style={border}>
              <DeleteIcon onClick={() => deleteEvent(item)} />
              {item.user}: {item.description}{' '}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  const dateCellRender = (value) => {
    const formatDate = transformDate(value.toDate());
    const personRender = event.filter((user) => user.user === activeUser);

    if (activeUser === 'admin') {
      if (adminActiveUser === 'admin') {
        const adminRender = event.filter((date) => date.date === formatDate);
        return addToCalendar(adminRender);
      } else {
        const adminFilter = event.filter((user) => user.user === adminActiveUser);
        const adminRender = adminFilter.filter((date) => date.date === formatDate);
        return addToCalendar(adminRender);
      }
    } else {
      const render = personRender.filter((date) => date.date === formatDate);
      return addToCalendar(render);
    }
  };

  return (
    <Calendar
      onChange={(newValue) => setValue(transformDate(newValue.toDate()))}
      dateCellRender={dateCellRender}
    />
  );
};
export default App;

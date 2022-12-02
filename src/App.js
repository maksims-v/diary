import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { datafromlocalstorage } from './store/reducer/calendarSlice';
import { fetchLogIn } from './store/reducer/authSlice';
import { useDispatch } from 'react-redux';
import RequireAuth from './hoc/RequireAuth';
import CalendarPage from './pages/CalendarPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';

function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(datafromlocalstorage(JSON.parse(localStorage.getItem('events'))));
  }, []);

  // useEffect(() => {
  //   dispatch(fetchLogIn());
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/diary" element={<Layout handleOpen={handleOpen} />}>
          <Route path="/diary" element={<LoginPage handleClose={handleClose} open={open} />} />
          <Route
            path="/diary/calendar"
            element={
              <RequireAuth>
                <CalendarPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
// "homepage": "https://maksims-v.github.io/diary/",

export default App;

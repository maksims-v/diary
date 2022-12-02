import auth from './reducer/authSlice';
import calendar from './reducer/calendarSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { auth, calendar },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

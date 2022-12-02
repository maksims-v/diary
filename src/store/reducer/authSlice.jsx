import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http';

const initialState = {
  users: [
    {
      user: 'user',
      password: 'user',
    },
    {
      user: 'admin',
      password: 'admin',
    },
    {
      user: 'quest',
      password: 'quest',
    },
  ],
  isAuth: false,
  activeUser: {},
  adminActiveUser: 'admin',
  error: '',
  isLoading: false,
};

export const fetchLogIn = createAsyncThunk('auth/fetchLogIn', () => {
  const { request } = useHttp();

  return request('https://api.agify.io/?name=meelad');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    autorisation(state, action) {
      state.isAuth = true;
      state.activeUser = action.payload;
    },
    changefilteruser(state, action) {
      state.adminActiveUser = action.payload;
    },
    error(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    loading(state, action) {
      state.isLoading = action.payload;
    },
    exit(state) {
      state.isAuth = false;
      state.activeUser = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogIn.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(fetchLogIn.fulfilled, (state, action) => {
        // state.users.push(action.payload);
      })
      .addCase(fetchLogIn.rejected, (state) => {
        // state.isLoading = false;
        // state.error = 'error';
      });
  },
});

export const { autorisation, exit, error, loading, changefilteruser } = authSlice.actions;
export default authSlice.reducer;

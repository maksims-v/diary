import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  event: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent(state, action) {
      state.event.push(action.payload);
    },
    removeEvent(state, action) {
      state.event = action.payload;
    },
    datafromlocalstorage(state, action) {
      state.event = action.payload || [];
    },
  },
});

export const { addEvent, removeEvent, datafromlocalstorage } = calendarSlice.actions;
export default calendarSlice.reducer;

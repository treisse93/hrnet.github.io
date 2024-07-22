// dateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: new Date().toISOString(),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.selectedDate = action.payload.toISOString();
    },
  },
});

export const { setDate } = dateSlice.actions;
export default dateSlice.reducer;

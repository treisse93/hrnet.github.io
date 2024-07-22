import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for managing service information
const serviceSlice = createSlice({
  name: "service",
  initialState: {
    startDate: "",
    department: "",
  },
  reducers: {
    // Reducer to add or update service information
    add_service: (state, action) => {
      state.startDate = new Date(action.payload.startDate).toISOString(); // Update the start date with the provided value
      state.department = action.payload.department; // Update the department with the provided value
    },
    // Reducer to remove service information
    remove_service: (state) => {
      state.startDate = ""; // Reset the start date to an empty string
      state.department = ""; // Reset the department to an empty string
    },
  },
});

// Exporting the actions to use them in other parts of the application
export const { add_service, remove_service } = serviceSlice.actions;

// Exporting the reducer
export default serviceSlice.reducer;

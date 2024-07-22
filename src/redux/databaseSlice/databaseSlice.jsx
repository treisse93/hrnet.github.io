/**
 * Redux slice for managing employee data in the database.
 * @module Redux/databaseSlice/databaseSlice
 */
/**
 * @fileoverview This file contains the Redux slice for managing employee data in the database.
 * @module Redux/databaseSlice/databaseSlice
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing employee data in the Redux store.
 * @type {import("@reduxjs/toolkit").Slice}
 */
const databaseSlice = createSlice({
  name: "EmployeeList", // Name of the slice
  initialState: [], // Initial state of the slice, an empty array
  reducers: {
    /**
     * Reducer function for adding an employee.
     * @param {Array} state - The current state of the slice.
     * @param {import("@reduxjs/toolkit").PayloadAction} action - The action containing the employee data.
     */
    add_employee: (state, action) => {
      // Adds a new employee object to the state array
      console.log("Add Employee action payload:", action.payload);
      state.push({
        employeeInfo: action.payload.employeeInfo,
        adress: action.payload.adress,
        service: action.payload.service,
      });
      console.log("New state after adding employee:", state);
    },
    /**
     * Reducer function for removing all employees.
     * @param {Array} state - The current state of the slice.
     */
    remove_employee: (state) => {
      console.log("Remove Employee action triggered");
      return []; // Resets the state to an empty array
    },
  },
});

// Exporting the action creators
export const { add_employee, remove_employee } = databaseSlice.actions;

// Exporting the reducer
export default databaseSlice.reducer;

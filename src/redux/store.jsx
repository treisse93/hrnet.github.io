/**
 * Redux store configuration.
 * @module Redux/store
 */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import employeeInfoReducer from "./employeeSlice/employeeInfoSlice.jsx";
import serviceReducer from "./employeeSlice/serviceSlice.jsx";
import adressReducer from "./employeeSlice/adressSlice.jsx";
import databaseReducer from "./databaseSlice/databaseSlice.jsx";
import dateReducer from "./employeeSlice/dateSlice.jsx";

/**
 * Combines multiple reducers into a single reducer function.
 * @type {Function}
 */
const employee = combineReducers({
  employeeInfo: employeeInfoReducer,
  service: serviceReducer,
  adress: adressReducer,
});

/**
 * Combines the employee reducer and the database reducer into a single reducer function.
 * @type {Function}
 */
const rootReducer = combineReducers({
  employee: employee,
  database: databaseReducer,
  date: dateReducer,
});

/**
 * Creates a Redux store with the specified reducer.
 * @type {Object}
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;

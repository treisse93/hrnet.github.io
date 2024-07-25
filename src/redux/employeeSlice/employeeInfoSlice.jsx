import { createSlice } from "@reduxjs/toolkit";

const employeeInfoSlice = createSlice({
  name: "employeeInfo",
  initialState: {
    firstName: "",
    lastName: "",
    birthDate: "",
  },
  reducers: {
    add_employeeInfo: (state, action) => {
      console.log("add_employeeInfo action payload:", action.payload);
      console.log("Current state before update:", state);

      // Mise à jour de l'état avec le payload de l'action
      const newState = {
        ...state,
        ...action.payload,
      };

      console.log("New state after update:", newState);
      return newState;
    },
    remove_employeeInfo: (state) => {
      console.log("remove_employeeInfo action triggered");
      console.log("Current state before reset:", state);

      // Réinitialisation de l'état
      const resetState = {
        firstName: "",
        lastName: "",
        birthDate: "",
        startDate: "",
      };
      console.log("State after reset:", resetState);
      return resetState;
    },
  },
});

export const { add_employeeInfo, remove_employeeInfo } =
  employeeInfoSlice.actions;
export default employeeInfoSlice.reducer;

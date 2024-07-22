import { createSlice } from "@reduxjs/toolkit";

// Create a slice for address management
const adressSlice = createSlice({
  name: "adress", // Name of the slice, used to generate action types
  initialState: {
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  reducers: {
    // Reducer to add or update an address
    add_adress: (state, action) => {
      // Update each field of the address with the values provided in the action
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zip = action.payload.zip;
    },
    // Reducer to remove the address by resetting the fields
    remove_adress: (state) => {
      // Reset each field of the address to an empty string
      state.street = "";
      state.city = "";
      state.state = "";
      state.zip = "";
    },
  },
});

// Export the actions to use them in other parts of the application
export const { add_adress, remove_adress } = adressSlice.actions;

// Export the slice's reducer as the default export
export default adressSlice.reducer;

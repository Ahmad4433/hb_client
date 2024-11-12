import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    project: [],
  },
  reducers: {
    setDropdown(state, action) {
      state.project = action.payload.project;
    },
  },
});

export const dropdownActions = dropdownSlice.actions;
export default dropdownSlice;

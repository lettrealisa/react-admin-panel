import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    name: "users",
  },
  reducers: {
    tableSelected(state, action) {
      state.name = action.payload.name;
    },
  },
});

// destructure and export the plain action creators
export const { tableSelected } = tableSlice.actions;

export default tableSlice.reducer;

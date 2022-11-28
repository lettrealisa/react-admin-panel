import { createSlice } from "@reduxjs/toolkit";

const petsSlice = createSlice({
  name: "pets",
  initialState: [
    {
      id: 1,
      name: "cat",
    },
    {
      id: 2,
      name: "dog",
    },
    {
      id: 3,
      name: "turtle",
    },
  ],
  reducers: {
    petAdded(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
      });
    },
  },
});

// destructure and export the plain action creators
export const { petAdded } = petsSlice.actions;

export default petsSlice.reducer;

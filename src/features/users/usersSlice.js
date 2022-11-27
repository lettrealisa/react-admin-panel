import { createSlice } from "@reduxjs/toolkit";

const pets = [
  { id: 1, name: "cat" },
  { id: 2, name: "dog" },
  { id: 3, name: "turtle" },
];

const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 1,
      name: "Todd",
      age: 31,
      job: "engineer",
      pet: pets[0].name,
      date: "2012-02-12",
    },
    {
      id: 2,
      name: "Rob",
      age: 37,
      job: "tour guide",
      pet: pets[1].name,
      date: "2017-05-15",
    },
    {
      id: 3,
      name: "Steve",
      age: 32,
      job: "charlatan",
      pet: pets[2].name,
      date: "2013-01-10",
    },
  ],
  reducers: {
    userAdded(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        age: action.payload.age,
        job: action.payload.job,
        pet: action.payload.pet,
        date: action.payload.date,
      });
    },
  },
});

export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;

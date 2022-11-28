import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "../features/pets/petsSlice";
import tableReducer from "../features/table/tableSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    pets: petsReducer,
    table: tableReducer,
  },
});

export default store;

import petsReducer from "./features/pets";
import tableReducer from "./features/table";
import usersReducer from "./features/users";

export default function rootReducer(state = {}, action) {
  return {
    users: usersReducer(state.users, action),
    pets: petsReducer(state.pets, action),
    table: tableReducer(state.table, action),
  };
}

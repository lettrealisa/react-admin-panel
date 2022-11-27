import usersReducer from "./features/users";

export default function rootReducer(state = {}, action) {
  return {
    users: usersReducer(state.users, action),
  };
}

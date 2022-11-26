const pets = [
  { id: 1, name: "cat" },
  { id: 2, name: "dog" },
  { id: 3, name: "turtle" },
];

const initialState = {
  users: [
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
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/userAdded": {
      return {
        ...state,
        users: [...state.users, {}],
      };
    }
    default:
      return state;
  }
}

import {
  Cancel,
  CheckCircle,
  Edit,
  FilterList,
  Search,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../features/users/usersSlice";
import Button from "./sub/Button";

const selectUsers = (state) => state.users;
const selectTable = (state) => state.table;

const Content = ({ socket }) => {
  const table = useSelector(selectTable);
  const selectItems = (state) => state[table.name];
  const items = useSelector(selectItems);

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const pets = [
    { id: 1, name: "cat" },
    { id: 2, name: "dog" },
    { id: 3, name: "turtle" },
  ];

  const columns = [
    { id: 1, title: "name", visible: true },
    { id: 2, title: "age", visible: true },
    { id: 3, title: "job", visible: true },
    { id: 4, title: "pet", visible: true },
    { id: 5, title: "date", visible: true },
    { id: 6, title: "" },
  ];

  const filters = columns.slice(0, -1);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    age: "",
    job: "",
    pet: "",
    date: "",
  });

  const handleChange = (prop) => (event) => {
    setCurrentUser({ ...currentUser, [prop]: event.target.value });
  };

  const [row, setRow] = useState(0);

  const toggleEditable = (i) => {
    setRow(i);
    setCurrentUser({
      name: users[i - 1].name,
      age: users[i - 1].age,
      job: users[i - 1].job,
      pet: users[i - 1].pet,
      date: users[i - 1].date,
    });
  };
  const toggleSelectable = (i) => {
    const selectedRow = document.getElementsByClassName("row")[i - 1];
    if (selectedRow.classList.contains("row-focused")) {
      selectedRow.classList.remove("row-focused");
    } else {
      selectedRow.classList.add("row-focused");
    }
  };

  const cancelEditing = () => {
    setRow(0);
  };

  const saveChanges = (user) => {
    localStorage.setItem("user", user.pet);
    setRow(0);
  };

  const sendMessage = () => {
    socket.on("hello", (msg) => {
      console.log("hello, " + msg);
    });
  };

  useEffect(() => {
    sendMessage();
  });

  return (
    <div className="content">
      <div className="filters-list">
        {filters.map((filter) => {
          return (
            <div className="title-column" key={filter.id}>
              <input type="checkbox" className="checkbox" />
              {filter.title}
            </div>
          );
        })}
      </div>
      <div className="table">
        <Button
          text={"+ Добавить"}
          action={() =>
            dispatch(
              userAdded({
                id: 4,
                name: "Bob",
                age: 45,
                job: "merchant",
                pet: pets[2].name,
                date: "2021-01-21",
              })
            )
          }
        />
        <div className="filters">
          <div className="input-container">
            <i className="icon">
              <Search />
            </i>
            <input type="text" className="text-input" />
          </div>
          <FilterList />
        </div>
        <div className="title">
          <div className="column">
            <input type="checkbox" className="checkbox" />
          </div>
          {columns.map((column) => {
            return (
              <div className="title-column" key={column.id}>
                {column.title}
              </div>
            );
          })}
        </div>
        {users.map((user) => {
          return (
            <div className="row" key={user.id}>
              <div className="column">
                <input
                  type="checkbox"
                  className="checkbox"
                  key={user.id}
                  onChange={() => toggleSelectable(user.id)}
                />
              </div>
              {row > 0 && users[row - 1].id === user.id ? (
                <>
                  <input
                    type="text"
                    value={currentUser.name}
                    onChange={handleChange("name")}
                    className="text-input"
                  />
                  <input
                    type="text"
                    value={currentUser.age}
                    onChange={handleChange("age")}
                    className="text-input"
                  />
                  <input
                    type="text"
                    value={currentUser.job}
                    onChange={handleChange("job")}
                    className="text-input"
                  />
                  <select
                    name="pets"
                    onChange={handleChange("pet")}
                    className="select"
                  >
                    {pets.map((pet) => {
                      return (
                        <option value={pet.id} key={pet.id}>
                          {pet.name}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="date"
                    defaultValue={currentUser.date}
                    onChange={handleChange("date")}
                    className="text-input"
                  />
                </>
              ) : (
                <>
                  <div className="column">{user.name}</div>
                  <div className="column">{user.age}</div>
                  <div className="column">{user.job}</div>
                  <div className="column">{user.pet}</div>
                  <div className="column">{user.date}</div>
                </>
              )}

              <div className="column">
                {row > 0 && users[row - 1].id === user.id ? (
                  <button className="icon-button" onClick={cancelEditing}>
                    <i>
                      <Cancel />
                    </i>
                  </button>
                ) : null}

                <button
                  className="icon-button"
                  onClick={() =>
                    row > 0 && users[row - 1].id === user.id
                      ? saveChanges(user)
                      : toggleEditable(user.id)
                  }
                >
                  <i>
                    {row > 0 && users[row - 1].id === user.id ? (
                      <CheckCircle />
                    ) : (
                      <Edit />
                    )}
                  </i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;

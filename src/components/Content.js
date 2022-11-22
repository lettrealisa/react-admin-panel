import { Edit, Cancel, CheckCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Content = ({ socket }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [pet, setPet] = useState("");
  const [date, setDate] = useState("");

  const [row, setRow] = useState(0);

  const toggleEditable = (i) => {
    setRow(i);
  };
  const toggleSelectable = (i) => {
    const selectedRow = document.getElementsByClassName("row")[i - 1];
    if (selectedRow.classList.contains("row-focused")) {
      selectedRow.classList.remove("row-focused");
    } else {
      selectedRow.classList.add("row-focused");
    }
    console.log(selectedRow);
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

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeJob = (e) => {
    setJob(e.target.value);
  };
  const changePet = (e) => {
    setPet(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const pets = [
    { id: 1, name: "cat" },
    { id: 2, name: "dog" },
    { id: 3, name: "turtle" },
  ];

  const users = [
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
  ];

  const columns = [
    { id: 1, title: "name" },
    { id: 2, title: "age" },
    { id: 3, title: "job" },
    { id: 4, title: "pet" },
    { id: 5, title: "date" },
    { id: 6, title: "" },
  ];

  return (
    <div className="content">
      <div className="table">
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
                <input
                  type="text"
                  value={user.name}
                  onChange={changeName}
                  className="text-input"
                />
              ) : (
                <div className="column">{user.name}</div>
              )}
              {row > 0 && users[row - 1].id === user.id ? (
                <input
                  type="text"
                  value={user.age}
                  onChange={changeAge}
                  className="text-input"
                />
              ) : (
                <div className="column">{user.age}</div>
              )}
              {row > 0 && users[row - 1].id === user.id ? (
                <input
                  type="text"
                  value={user.job}
                  onChange={changeJob}
                  className="text-input"
                />
              ) : (
                <div className="column">{user.job}</div>
              )}
              {row > 0 && users[row - 1].id === user.id ? (
                <select name="pets" onChange={changePet}>
                  {pets.map((pet) => {
                    return (
                      <option value={pet.id} key={pet.id}>
                        {pet.name}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <div className="column">{user.pet}</div>
              )}

              {row > 0 && users[row - 1].id === user.id ? (
                <input
                  type="date"
                  defaultValue={user.date}
                  onChange={changeDate}
                  className="text-input"
                />
              ) : (
                <div className="column">{user.date}</div>
              )}

              <div className="column">
                {row > 0 && users[row - 1].id === user.id ? (
                  <button className="button" onClick={cancelEditing}>
                    <i>
                      <Cancel />
                    </i>
                  </button>
                ) : null}

                <button
                  className="button"
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

import { Edit, Cancel } from "@mui/icons-material";
import { useRef, useState } from "react";

const Content = ({ toggleOpen }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");

  const [row, setRow] = useState(0);

  const rowRef = useRef();
  const cbRef = useRef();

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

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeJob = (e) => {
    setJob(e.target.value);
  };

  const users = [
    { id: 1, name: "Todd", age: 31, job: "engineer" },
    { id: 2, name: "Rob", age: 37, job: "tour guide" },
    { id: 3, name: "Steve", age: 32, job: "charlatan" },
  ];

  return (
    <div className="content">
      <div className="table">
        <div className="title">
          <div className="column">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="title-column">Name</div>
          <div className="title-column">Age</div>
          <div className="title-column">Job</div>
          <div className="title-column">&nbsp;</div>
        </div>
        {users.map((user) => {
          return (
            <div className="row" rowid={user.id} key={user.id} ref={rowRef}>
              <div className="column">
                <input
                  type="checkbox"
                  className="checkbox"
                  rowid={user.id}
                  key={user.id}
                  ref={cbRef}
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
                  onClick={() => toggleEditable(user.id)}
                >
                  <i>
                    <Edit />
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

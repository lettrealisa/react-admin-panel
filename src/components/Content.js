import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPetForm from "../features/pets/AddPetForm";
import { PetsList } from "../features/pets/PetsList";
import UsersList from "../features/users/UsersList";

const selectUsers = (state) => state.users;
const selectTable = (state) => state.table;

const Content = ({ socket, table }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

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

  const toggleTable = () => {
    switch (table?.table) {
      case "users":
        return <UsersList />;
      case "pets":
        return <PetsList />;
    }
  };

  /*const sendMessage = () => {
    socket.on("hello", (msg) => {
      console.log("hello, " + msg);
    });
  };

  useEffect(() => {
    sendMessage();
  });*/

  return (
    <div className="content">
      <AddPetForm open={modalOpen} toggleModalOpen={toggleModalOpen} />
      {toggleTable()}
    </div>
  );
};

export default Content;

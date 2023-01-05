import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Wrapper = ({ socket }) => {
  const [table, setTable] = useState({});
  return (
    <div className="wrapper">
      <Profile />
      <Header className="header" />
      <Sidebar table={table} setTable={setTable} />
      <Content socket={socket} table={table} />
    </div>
  );
};

export default Wrapper;

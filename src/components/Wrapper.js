import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Wrapper = ({ socket }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <Profile />
      <Header className="header" />
      <Sidebar open={open} />
      <Content socket={socket} />
    </div>
  );
};

export default Wrapper;

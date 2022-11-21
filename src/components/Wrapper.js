import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";
import Content from "./Content";
import { useRef, useState } from "react";

const Wrapper = () => {
  const [open, setOpen] = useState(false);
  const wRef = useRef();

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    if (wRef.current.style.gridTemplateColumns) {
      wRef.current.style.gridTemplateColumns = "";
    } else {
      wRef.current.style.gridTemplateColumns = "500px 1fr";
    }
  };
  return (
    <div className="wrapper" ref={wRef}>
      <Profile />
      <Header className="header" />
      <Sidebar open={open} />
      <Content toggleOpen={toggleOpen} />
    </div>
  );
};

export default Wrapper;

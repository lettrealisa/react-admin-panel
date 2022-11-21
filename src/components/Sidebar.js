import { useRef } from "react";

const Sidebar = ({ ref, open }) => {
  const sideRef = useRef();
  return (
    <div className="sidebar" ref={sideRef}>
      <div className="item item-active">
        <p>{open ? "Content" : "Пользователи 🥳"}</p>
      </div>
      <div className="item">
        <p>{open ? "Content" : "Sidebarrrrrrrrrrr 🥳"}</p>
      </div>
      <div className="item">
        <p>{open ? "Content" : "Sidebarrrrrrrrrrr 🥳"}</p>
      </div>
      <div className="item">
        <p>{open ? "Content" : "Sidebarrrrrrrrrrr 🥳"}</p>
      </div>
      <div className="item">
        <p>{open ? "Content" : "Sidebarrrrrrrrrrr 🥳"}</p>
      </div>
    </div>
  );
};

export default Sidebar;

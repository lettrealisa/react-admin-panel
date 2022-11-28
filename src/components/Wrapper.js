import Content from "./Content";
import Header from "./Header";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Wrapper = ({ socket }) => {
  return (
    <div className="wrapper">
      <Profile />
      <Header className="header" />
      <Sidebar />
      <Content socket={socket} />
    </div>
  );
};

export default Wrapper;

import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Wrapper;

import Wrapper from "../components/Wrapper";
import { io } from "socket.io-client";
const socket = io("localhost:8000");

function App() {
  return (
    <>
      <Wrapper socket={socket}/>
    </>
  );
}

export default App;

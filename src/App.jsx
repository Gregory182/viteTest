import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExcelScreen from "./components/ExcelScreen";
import ReadXlsx from "./components/ReadXlsx";

import { socket } from "./socket";
import Chat from "./pages/chat/Chat";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Grid_1 from "./pages/AgGridek/Grid_1";

function App() {
  const [count, setCount] = useState(0);

  const [dt, setDt] = useState();

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  useEffect(() => {
    const getDt = async () => {
      const res = await fetch("http://127.0.0.1:5000");
      const data = await res.json();
      console.log(data);
      setDt(data);
      console.log(data);
      return data;
    };
    // getDt();
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/excel" element={<ExcelScreen />} />
          <Route path="/aggrid" element={<Grid_1 />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import { socket } from "../../socket";

const Chat = () => {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, [socket]);

  onsubmit = (e) => {
    e.preventDefault();
    socket.emit("message", inputRef.current.value);
    console.log(socket);
    inputRef.current.value = "";
  };

  const userNameRef = useRef(null)

  const setName=()=>{
    let name = userNameRef.current.value

    console.log(name)
    if(name.length <1)return

    localStorage.setItem('userName',name)
    setUserName(name)

  }

  return (
    <div>
      <div>
        <div>
          <label htmlFor="userName">Twój nick</label>
          <input id="userName" type="text" ref={userNameRef} />
          <button onClick={setName}>Wbijam</button>
        </div>
      </div>
      {userName && <div>Siema {userName}</div>}
      <form>
        <div>
          <ul>
            {messages.map((message) => (
              <li>{message}</li>
            ))}
          </ul>
        </div>
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
};

export default Chat;

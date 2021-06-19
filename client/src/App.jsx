import React from 'react';
import logo from './logo.svg';

import './App.css';
import MainWindowContainer from "./MainWindow";
import socket from "./socket";

const App = () => {
  const [clientId, setClientId] = React.useState("");

  React.useEffect(() => {
    socket.on('init', (data) => setClientId(data.id)).emit("init")
  }, [])


  const startCall = (isCaller, friendId, config) => {
    socket.on("init", (data) => {
      console.log(data);
      setClientId(data.id);
    });
  };


  return (
    <div>
      <MainWindowContainer clientId={clientId} startCall={startCall} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";
const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };
  return (
    <div>
      <NewMessageForm onSend={handleSend} />
    </div>
  );
};

export default App;

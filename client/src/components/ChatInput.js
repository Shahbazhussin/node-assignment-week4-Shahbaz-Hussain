import React, { useState } from "react";
import socket from "../socket";
import styles from "../public/ChatPage.module.css";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const timestamp = new Date().toISOString();
    const messagePayload = {
      user: socket.id,
      text: message,
      timestamp: timestamp,
    };

    socket.emit("sendMessage", messagePayload);
    setMessage("");
  };

  return (
    <div className={styles.chatInput}>
      <input
        type="text"
        value={message}
        placeholder="Enter Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;

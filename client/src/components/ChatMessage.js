import React from "react";
import styles from "../public/ChatPage.module.css";
import socket from "../socket";

const ChatMessage = ({ message }) => {
  const isSender = message.user === socket.id;

  return (
    <div
      className={`${styles.message} ${
        isSender ? styles.messageSender : styles.messageReceiver
      }`}
    >
      <div className={styles.messageText}>{message.text}</div>
      <div className={styles.timestamp}>
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default ChatMessage;

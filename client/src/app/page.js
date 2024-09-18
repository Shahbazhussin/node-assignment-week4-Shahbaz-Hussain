"use client";
import React, { useState, useEffect } from "react";
import socket from "../socket";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import styles from "../public/ChatPage.module.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  return (
    <div className={styles.chatContainer}>
      <h1>Chat Room</h1>
      <div className={styles.messageList}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className={styles.chatInput}>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatPage;

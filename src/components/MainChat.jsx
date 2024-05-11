import React, { useState, useEffect } from "react";
import userIcon from "../assets/user-icon.png";
import botLogo from "../assets/bot-logo.png";
import UserInput from "./UserInput";

export default function MainChat({ chat, updateMainChat }) {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (chat) {
      setChatHistory(chat.history);
    }
  }, [chat]);

  const handleUserInput = (userMessage) => {
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { sender: "user", message: userMessage },
    ]);

    // Bot response
    const botResponse = "Hello";

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { sender: "bot", message: botResponse },
    ]);

    updateMainChat(chat.id, chatHistory);
  };

  return (
    <div className="main">
      <div className="chats">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat ${chat.sender}`}>
            <img
              className="chatImg"
              src={chat.sender === "user" ? userIcon : botLogo}
              alt=""
            />
            <p className="txt">{chat.message}</p>
          </div>
        ))}
      </div>
      <UserInput onUserInput={handleUserInput} />
    </div>
  );
}

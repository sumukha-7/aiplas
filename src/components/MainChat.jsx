import React, { useState } from "react";
import userIcon from "../assets/user-icon.png";
import botLogo from "../assets/bot-logo.png";
import UserInput from "./UserInput";

export default function MainChat() {
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      message: "Welcome to Counsel.ai. How can I assist you today?",
    },
  ]);

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

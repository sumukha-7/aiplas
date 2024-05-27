/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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

  const handleUserInput = async (userMessage) => {
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { sender: "user", message: userMessage },
    ]);

    try {
      const response = await fetch("http://localhost:3002/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: userMessage }),
      });
      const data = await response.json();

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "bot", message: data.response },
      ]);

      updateMainChat(chat.id, [
        ...chatHistory,
        { sender: "user", message: userMessage },
        { sender: "bot", message: data.response },
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
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

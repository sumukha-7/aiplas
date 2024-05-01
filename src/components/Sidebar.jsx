import React, { useState } from "react";
import addBtn from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import home from "../assets/home.svg";
import saved from "../assets/bookmark.svg";
import rocket from "../assets/rocket.svg";

export default function Sidebar() {
  const [chats, setChats] = useState([
    { id: 1, name: "Indian trademark", selected: true, history: [] },
    { id: 2, name: "Rent regulations", selected: false, history: [] },
  ]);

  const handleNewChat = () => {
    const newChatName = prompt("Enter the name of the new chat:");
    if (newChatName) {
      const newChat = {
        id: chats.length + 1,
        name: newChatName,
        selected: false,
        history: [],
      };
      setChats((prevChats) => [...prevChats, newChat]);
    }
  };

  const handleChatSelection = (chatId) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, selected: true }
          : { ...chat, selected: false }
      )
    );
  };

  return (
    <>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <span className="brand">Counsel.ai</span>
          </div>
          <button className="midBtn" onClick={handleNewChat}>
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className={`query ${chat.selected ? "currentChat" : ""}`}
                onClick={() => handleChatSelection(chat.id)}
              >
                <img src={msgIcon} alt="Query" className="msgIcon" />
                {chat.name}
              </button>
            ))}
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemImg" />
            Upgrade
          </div>
        </div>
      </div>
    </>
  );
}

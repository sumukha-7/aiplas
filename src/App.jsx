import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainChat from "./components/MainChat";

function App() {
  const [chats, setChats] = useState([
    { id: 1, name: "Indian trademark", selected: true, history: [] },
    { id: 2, name: "Rent regulations", selected: false, history: [] },
  ]);

  const updateChatHistory = (chatId, newHistory) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId ? { ...chat, history: newHistory } : chat
      )
    );
  };

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

  const [selectedChat, setSelectedChat] = useState(chats[0]);

  const handleChatSelection = (chatId) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, selected: true }
          : { ...chat, selected: false }
      )
    );
    const selectedChatObject = chats.find((chat) => chat.id === chatId);
    setSelectedChat(selectedChatObject);
  };
  return (
    <div className="App">
      <Sidebar
        chats={chats}
        handleChatSelection={handleChatSelection}
        handleNewChat={handleNewChat}
      />
      <MainChat chat={selectedChat} updateMainChat={updateChatHistory} />
    </div>
  );
}

export default App;

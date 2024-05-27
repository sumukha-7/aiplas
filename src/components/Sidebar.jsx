/* eslint-disable react/prop-types */
import addBtn from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";

export default function Sidebar({ chats, handleChatSelection, handleNewChat }) {
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
      </div>
    </>
  );
}

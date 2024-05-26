/* eslint-disable react/prop-types */
import { useState } from "react";
import uploadFileIcon from "../assets/uploadFileIcon.png";
import sendBtn from "../assets/send.svg";

export default function UserInput({ onUserInput }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onUserInput(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatFooter">
      <div className="inp">
        <button className="uploadFileBtn">
          <img src={uploadFileIcon} alt="" />
        </button>
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />
        <button className="send" onClick={handleSendMessage}>
          <img src={sendBtn} alt="Send" />
        </button>
      </div>
      <p>
        The answers provided by Counsel.ai are only for immediate reference.
        Please contact an authorised lawyer for more accurate information.
      </p>
    </div>
  );
}

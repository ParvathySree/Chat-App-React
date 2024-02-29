import React from "react";
import { auth } from "../../../firebase";
import "./Message.css";

const Message = ({ message }) => {
  const messageClass = message.uid === auth.currentUser.uid ? "right" : "left";
  return (
    <>
    <div className={messageClass}>
      <div className="userDetails">
        <img src={message.image} />
        <p className="username">{message.name}</p>
      </div>

      <div className="user-message">
      <p className="message">{message.text}</p>
      </div>
      </div>
      <br style={{ clear: "both" }} />
      </>
    
  );
};

export default Message;

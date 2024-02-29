import React, { useState, useEffect, useRef } from "react";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";
import "./Chat.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const sendBtn = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let messages = [];
      querySnapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    sendBtn.current.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  return (
    <>
      <div className="chat">
        <main>
          {messages &&
            messages.map((message) => (
              <>
                <Message key={message.id} message={message} />
                <br />
              </>
            ))}
        </main>

        <span ref={scroll}></span>
      </div>
      <SendMessage scroll={scroll} />
      <span ref={sendBtn}></span>
    </>
  );
};

export default Chat;

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, {  useState } from "react";
import { auth, db } from "../../../firebase";
import "./SendMessage.css";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  

 

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return 0;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      image: photoURL,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };  
  
  
 
  return (
    <div className="outer-send-msg" >
      <form onSubmit={(e) => sendMessage(e)}>
        <div className="send-msg" >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="message-box"
          placeholder="Message"
        />
        <button  className="msg-btn" type="submit">
          <span class="material-symbols-outlined">send</span>
        </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;

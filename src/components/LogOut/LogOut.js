import React from "react";
import "./LogOut.css";
import { auth } from "../../firebase";


const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className="logout">
      LogOut
      <span className="material-symbols-outlined">logout</span>
    </button>
  );
};

export default LogOut;

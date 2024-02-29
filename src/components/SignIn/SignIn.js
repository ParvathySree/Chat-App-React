import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../../firebase";
import "./SignIn.css";


const SignIn = () => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="signin">
      <GoogleButton onClick={signIn}/>
    </div>
  );
};

export default SignIn;

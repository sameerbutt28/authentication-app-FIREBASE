import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }; 
  return (
    <div className="sign-up">
      <form onSubmit={SignUp}>
      <h1>Sign up and create new account</h1>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;

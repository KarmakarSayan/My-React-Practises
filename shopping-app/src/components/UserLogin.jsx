import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../styles/UserLogin.css';  

function UserLogin() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  function valUser_login(e) {
    e.preventDefault();
    if (username === "xyz" && pwd === "123") {
      toast.success("Login Successful");
    } else {
      toast.error("Login Failed");
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={valUser_login}>
        <h2>Login</h2>

        <label>Username</label>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter your username'
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder='Enter your password'
          required 
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;

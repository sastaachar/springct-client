import React, { useState } from "react";

import "./login.css";

export default function Login(props) {
  const { updateLogin, udpateUser } = props;

  const [userid, updateUserid] = useState("");
  const [pass, updatePass] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userid,
        pass: pass,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          udpateUser({ ...data.message });
          updateLogin(true);
        });
      }
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <span>SpringCt Login</span>
        </div>
        <div className="login-input-wrapper">
          <label className="login-lbl" htmlFor="loginUserid">
            Username
          </label>
          <input
            id="loginUserid"
            type="text"
            value={userid}
            onChange={(e) => updateUserid(e.target.value)}
            className="login-inp"
          />
        </div>
        <div className="login-input-wrapper">
          <label className="login-lbl" htmlFor="loginPassword">
            Password
          </label>
          <input
            id="loginPassword"
            type="text"
            value={pass}
            onChange={(e) => updatePass(e.target.value)}
            className="login-inp"
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

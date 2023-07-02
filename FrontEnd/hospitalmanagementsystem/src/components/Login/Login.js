import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  var [user, setUser] = useState({
    email: "",
    password: "",
  });
  var login = () => {
    fetch("http://localhost:5194/api/User/Login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then(async (data) => {
        var myData = await data.json();
        if (myData.role == "Doctor") {
          navigate("/doctor");
        } else if (myData.role == "Patient") {
          navigate("/patient");
        }
        console.log(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="Login">
      <div className="LoginImage">
        <img src={""} className="loginPic" />
      </div>
      <div className="LoginDetails">
        <input
          type="email"
          onChange={(evet) => {
            setUser({ ...user, email: evet.target.value });
          }}
        />
        <input
          type="password"
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;

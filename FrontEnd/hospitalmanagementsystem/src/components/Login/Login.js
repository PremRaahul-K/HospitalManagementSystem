import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import loginImage from "../images/hospital-logo.jpg";
import DoctorApprovalPopup from "../AlertMessages/DoctorApprovalPopup";
import DoctorUpdationPopup from "../AlertMessages/DoctorUpdationPopup";
import InvalidCredentials from "../AlertMessages/InvalidCredentials";
function Login(props) {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const navigate = useNavigate();
  var [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isOpenInvalid, setIsInavlidOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const togglePopupInvalid = () => {
    setIsInavlidOpen(!isOpenInvalid);
  };

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
        localStorage.setItem("id", myData.id);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        if (myData.role == "Doctor") {
          if (myData.token != null) {
            navigate("/doctor/$/");
          }
          togglePopup();
        } else if (myData.role == "Patient") {
          navigate("/patient/$");
        } else if (myData.role == "Admin") {
          navigate("/admin/$");
        }
      })
      .catch((err) => {
        togglePopupInvalid();
        console.log(err.error);
      });
  };
  return (
    <div className="Login">
      <div className="LoginTitle">
        <h1>Login</h1>
        <p className="loginmessage">
          Stay connected and improve your treatment’s efficiency together
        </p>
      </div>
      <div className="loginRquestfields">
        <input
          className="inputfield"
          type="email"
          placeholder="Email"
          onChange={(evet) => {
            setUser({ ...user, email: evet.target.value });
          }}
        />
        <input
          className="inputfield"
          type="password"
          placeholder="Password"
          onChange={(evet) => {
            setUser({ ...user, password: evet.target.value });
          }}
        />
        <button
          className="profileViewButton userapprovalbutton loginbutton"
          onClick={login}
        >
          Login
        </button>
        {/* <button onClick={togglePopup}>Happy</button> */}
        {isOpen && <DoctorApprovalPopup handleClose={togglePopup} />}
        {isOpenInvalid && (
          <InvalidCredentials handleClose={togglePopupInvalid} />
        )}
      </div>
      <div className="signUpButtons">
        <div>
          <button
            className="deleteDoctor editDoctor editProfile signupButton"
            onClick={() => {
              navigate("/doctorregister");
            }}
          >
            Doctor SignUp
          </button>
        </div>
        <div>
          <button
            className="deleteDoctor editDoctor editProfile signupButton"
            onClick={() => {
              navigate("/patientregister");
            }}
          >
            Patient SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

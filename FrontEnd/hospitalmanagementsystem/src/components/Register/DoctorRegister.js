import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  const navigate = useNavigate();
  const [doctor, setUser] = useState({
    doctorId: 0,
    name: "",
    gender: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    address: "",
    specialization: "",
    qualifications: "",
    licenseNumber: "",
    experience: 0,
    about: "",
    status: "",
    passwordClear: "",
  });
  const [email, setEmail] = useState();

  var register = () => {
    console.log(doctor);
    fetch("http://localhost:5194/api/Doctor/DoctorRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...doctor,
        user: {
          id: 0,
          email: email,
          role: "",
        },
      }),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("id", myData.id);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        navigate("/doctor/$/");
        console.log(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="EditDoctor">
      <div className="EditDoctorDetails">
        <div>
          <h2>Doctor Registeration </h2>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Name</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Name"
              onChange={(evet) => {
                setUser({ ...doctor, name: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Specialization</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Specialization"
              onChange={(evet) => {
                setUser({ ...doctor, specialization: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Qulifications</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Qulifications"
              onChange={(evet) => {
                setUser({ ...doctor, qualifications: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">License Number</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="License Number"
              onChange={(evet) => {
                setUser({ ...doctor, licenseNumber: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Experience</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Experience"
              onChange={(evet) => {
                setUser({ ...doctor, experience: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Address</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Address"
              onChange={(evet) => {
                setUser({ ...doctor, address: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Phone Number</label>
            <input
              className="UpdateDetailsInfoInput smallLabel"
              type="text"
              placeholder="Phone Number"
              onChange={(evet) => {
                setUser({ ...doctor, phoneNumber: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Date of Birth</label>
            <input
              className="UpdateDetailsInfoInput smallLabel"
              type="date"
              placeholder="Date of Birth"
              onChange={(evet) => {
                setUser({ ...doctor, dateOfBirth: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Gender</label>
            <select
              className="UpdateDetailsInfoInput smallLabel"
              onChange={(evet) => {
                setUser({ ...doctor, gender: evet.target.value });
              }}
            >
              <option>Other</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Email</label>
            <input
              className="UpdateDetailsInfoInput"
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">About</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="About"
              onChange={(evet) => {
                setUser({ ...doctor, about: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Password</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Password"
              onChange={(evet) => {
                setUser({ ...doctor, passwordClear: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <button
              className="deleteDoctor editDoctor submitButton"
              onClick={register}
            >
              Register
            </button>
          </div>
          <div className="UpdateDetailsInfo">
            <button
              className="deleteDoctor editDoctor submitButton"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;

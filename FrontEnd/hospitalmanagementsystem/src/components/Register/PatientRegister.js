import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientRegister() {
  const navigate = useNavigate();
  const [patient, setUser] = useState({
    patientId: 0,
    name: "",
    gender: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    address: "",
    bloodGroup: "",
    passwordClear: "",
  });
  const [email, setEmail] = useState();

  var register = () => {
    console.log(patient);
    fetch("http://localhost:5194/api/Patient/PatinetRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...patient,
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
        navigate("/patient/$");
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
          <h2>Patient Registeration </h2>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Name</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Name"
              onChange={(evet) => {
                setUser({ ...patient, name: evet.target.value });
              }}
            />
          </div>
          <div className="updateDetails">
            <div className="UpdateDetailsInfo">
              <label className="UpdateDetailsInfolabel">Address</label>
              <input
                className="UpdateDetailsInfoInput"
                type="text"
                placeholder="Address"
                onChange={(evet) => {
                  setUser({ ...patient, address: evet.target.value });
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
                  setUser({ ...patient, phoneNumber: evet.target.value });
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
                  setUser({ ...patient, dateOfBirth: evet.target.value });
                }}
              />
            </div>
            <div className="UpdateDetailsInfo">
              <label className="UpdateDetailsInfolabel ">Gender</label>
              <select
                className="UpdateDetailsInfoInput smallLabel"
                onChange={(evet) => {
                  setUser({ ...patient, gender: evet.target.value });
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
            <div className="UpdateDetailsInfo"></div>
            <div className="updateDetails">
              <div className="UpdateDetailsInfo">
                <label className="UpdateDetailsInfolabel ">Password</label>
                <input
                  className="UpdateDetailsInfoInput"
                  type="text"
                  placeholder="Password"
                  onChange={(evet) => {
                    setUser({ ...patient, passwordClear: evet.target.value });
                  }}
                />
              </div>
              <div className="UpdateDetailsInfo">
                <label className="UpdateDetailsInfolabel ">Blood Group</label>
                <input
                  className="UpdateDetailsInfoInput"
                  type="text"
                  placeholder="Blood Group"
                  onChange={(evet) => {
                    setUser({ ...patient, bloodGroup: evet.target.value });
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
      </div>
    </div>
  );
}

export default PatientRegister;

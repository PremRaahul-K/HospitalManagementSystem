import React, { useEffect, useState } from "react";
import "../Doctor/EditDoctor.css";
import filtericon from "../images/filter-filled-tool-symbol.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditDoctor() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    doctorId: 0,
    user: {
      id: 0,
      email: "",
      role: "",
    },
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
  });
  const [doctor, setDoctor] = useState({
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
  });
  const [doctors, setDoctors] = useState([]);
  const [phone, setPhone] = useState("");
  const [updatedDoctor, setUpdatedDoctors] = useState([]);
  useEffect(() => {
    viewDoctors();
  }, []);
  var viewDoctors = () => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/GetAllDoctors", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setDoctors(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  var getDoctorDetails = (id) => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/GetDoctor?id=" + id, {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        setDoctor(myData);
        setPhone(myData.phone);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  var UpdateDoctorDetails = () => {
    console.log(user);
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/Update", {
      method: "PUT",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ ...user }),
    })
      .then(async (data) => {
        var myData = await data.json();
        setUpdatedDoctors(myData);
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
          <h2>Edit Doctor Details</h2>
        </div>
        <div className="Filter">
          <span>Search By</span>
          <select
            className="doctorsFilter"
            onChange={(event) => {
              setUser({ ...user, doctorId: event.target.value });
              getDoctorDetails(event.target.value);
            }}
          >
            <option>Choose Doctor</option>
            {doctors.map((item, index) => (
              <option value={item.doctorId} key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="filterDiv">
            <img src={filtericon} />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Name</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder={doctor.name}
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
              }}
            />
            {error && <p>{error}name</p>}
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Specialization</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder={doctor.specialization}
              onChange={(event) => {
                setUser({ ...user, specialization: event.target.value });
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
              placeholder={doctor.qualifications}
              onChange={(event) => {
                setUser({ ...user, qualifications: event.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">License Number</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder={doctor.licenseNumber}
              onChange={(event) => {
                setUser({ ...user, licenseNumber: event.target.value });
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
              placeholder={doctor.experience}
              onChange={(event) => {
                setUser({ ...user, experience: event.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Address</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder={doctor.address}
              onChange={(event) => {
                setUser({ ...user, address: event.target.value });
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
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setUser({ ...user, phoneNumber: event.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Date of Birth</label>
            <input
              className="UpdateDetailsInfoInput smallLabel"
              type="date"
              placeholder={doctor.dateOfBirth}
              onChange={(event) => {
                setUser({ ...user, dateOfBirth: event.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Gender</label>
            <select
              className="UpdateDetailsInfoInput smallLabel"
              onChange={(event) => {
                setUser({ ...user, gender: event.target.value });
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
            <label className="UpdateDetailsInfolabel ">About</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder={doctor.about}
              onChange={(event) => {
                setUser({ ...user, about: event.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">status</label>
            <select
              className="UpdateDetailsInfoInput smallLabel"
              onChange={(event) => {
                setUser({ ...user, status: event.target.value });
              }}
            >
              <option>Choose an Option</option>
              <option>Approved</option>
              <option>Not Approved</option>
            </select>
          </div>
          <div className="UpdateDetailsInfo">
            <button
              className="deleteDoctor editDoctor submitButton"
              onClick={UpdateDoctorDetails}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDoctor;

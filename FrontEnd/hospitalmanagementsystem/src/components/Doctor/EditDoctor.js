import React, { useEffect, useState } from "react";
import "../Doctor/EditDoctor.css";
import filtericon from "../images/filter-filled-tool-symbol.png";
import { useParams } from "react-router-dom";

function EditDoctor() {
  const { id } = useParams();
  const [user, setUser] = useState({
    doctorId: 0,
    name: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    specialization: "",
    qualifications: "",
    licenseNumber: "",
    experience: 0,
    status: "",
  });
  const [doctor, setDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getDoctorDetails(id);
    viewDoctors();
  }, []);
  var getDoctorDetails = (userId) => {
    fetch("http://localhost:5194/api/Doctor/GetDoctor?id=" + userId, {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        setDoctor(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  var viewDoctors = () => {
    fetch("http://localhost:5194/api/Doctor/GetAllDoctors", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
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
              placeholder="Name"
              value={doctor.name}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Specialization</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Specialization"
              value={doctor.specialization}
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
              value={doctor.qualifications}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">License Number</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="License Number"
              value={doctor.licenseNumber}
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
              value={doctor.experience}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Address</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Address"
              value={doctor.address}
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
              value={doctor.phoneNumber}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Date of Birth</label>
            <input
              className="UpdateDetailsInfoInput smallLabel"
              type="date"
              placeholder="Date of Birth"
              value={doctor.dateOfBirth}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Gender</label>
            <select
              className="UpdateDetailsInfoInput smallLabel"
              onChange={(event) => {
                "";
              }}
              value={doctor.gender}
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
              placeholder="About"
            />
          </div>

          <div className="UpdateDetailsInfo">
            <button
              className="deleteDoctor editDoctor submitButton"
              onClick={() => {}}
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

import React, { useEffect, useState } from "react";
import PatientImage from "../images/PatientProfile.avif";
import { useNavigate, useParams } from "react-router-dom";
import "../Patient/PatientProfile.css";

function DoctorProfile() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getPatientDetails();
    getUserDetails();
  }, []);
  var getPatientDetails = () => {
    fetch(
      "http://localhost:5194/api/Patient/GetPatient?id=" +
        localStorage.getItem("id"),
      {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (data) => {
        var myData = await data.json();
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  var getUserDetails = () => {
    fetch(
      "http://localhost:5194/api/User/GetAllUserDetails?id=+" +
        localStorage.getItem("id"),
      {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (data) => {
        var myData = await data.json();
        setUser(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="Doctor">
      <div className="doctorHeader">
        <div className="">
          <h2>Patient Information</h2>
        </div>
      </div>
      <div className="aboutDoctor aboutPatient">
        <div>
          <img src={PatientImage} className="doctorImage" />
        </div>
        <div>
          <div className="description">
            <div className="doctorInfo">
              <div className="doctorInfoData patientData">
                <h5>Name</h5>
                <span>{data.name}</span>
              </div>
              <div className="doctorInfoData patientData">
                <h5>Phone Number</h5>
                <span>{data.phoneNumber}</span>
              </div>
              <div className="doctorInfoData patientData">
                <h5>Address</h5>
                <span>{data.address}</span>
              </div>
              <div className="doctorInfoData patientData">
                <h5>Email</h5>
                <span>{user.email}</span>
              </div>
              <div className="doctorInfoData patientData">
                <h5>Blood Group</h5>
                <span>{data.bloodGroup}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoctorProfile;

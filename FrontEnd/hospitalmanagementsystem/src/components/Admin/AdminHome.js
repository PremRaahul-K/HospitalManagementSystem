import React, { useEffect, useState } from "react";
import "../Admin/AdminHome.css";
import doctor from "../images/doctor-icon.png";
import patient from "../images/patient-icon.png";

function AdminHome() {
  const [data, setData] = useState({
    approvedDoctorCount: 0,
    notApprovedDoctorCount: 0,
    patientCount: 0,
  });
  useEffect(() => {
    viewUsersCount();
  }, []);
  var viewUsersCount = () => {
    fetch("http://localhost:5194/api/User/GetAllUsersCount", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="AdminHome">
      <div className="adminDetails">
        <h2>Admin</h2>
        <span>Email - admin@gmail.com</span>
      </div>
      <div className="hospitalData">
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={doctor} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue">{data.approvedDoctorCount}</span>
            <span className="cardLabel">Approved Doctors</span>
          </div>
        </div>
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={doctor} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue notApprovedCardValue">
              {data.notApprovedDoctorCount}
            </span>
            <span className="cardLabel">Not Approved Doctors</span>
          </div>
        </div>
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={patient} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue patientCardValue">
              {data.patientCount}
            </span>
            <span className="cardLabel">Patient Count</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

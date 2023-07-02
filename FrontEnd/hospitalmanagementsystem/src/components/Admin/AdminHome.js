import React from "react";
import "../Admin/AdminHome.css";
import doctor from "../images/doctor-icon.png";
import patient from "../images/patient-icon.png";

function AdminHome() {
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
            <span className="cardValue">250</span>
            <span className="cardLabel">Approved Doctors</span>
          </div>
        </div>
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={doctor} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue notApprovedCardValue">250</span>
            <span className="cardLabel">Not Approved Doctors</span>
          </div>
        </div>
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={patient} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue patientCardValue">250</span>
            <span className="cardLabel">Patient Count</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

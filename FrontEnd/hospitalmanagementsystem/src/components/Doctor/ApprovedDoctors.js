import React, { useEffect, useState } from "react";
import "../Doctor/Doctors.css";
import { Link, Routes, Route, json, useNavigate } from "react-router-dom";
import filtericon from "../images/filter-filled-tool-symbol.png";

function ApprovedDoctors() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    GetUsersByStatus();
  }, []);
  var GetUsersByStatus = () => {
    fetch(
      "http://localhost:5194/api/Doctor/GetAllDoctorsByStatus?status=Approved",
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
        console.log(myData);
        setData(myData);
      })
      .catch((err) => {
        console.log(err);
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
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="Doctors">
      <div className="DoctorsHeader">
        <div>
          <h2>Doctors</h2>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="headerRow">
            <th>S.NO</th>
            <th>Doctor Name</th>
            <th className="smalldoc">Specilization</th>
            <th className="smalldoc">License Number</th>
            <th className="smalldoc">Experience</th>
            <th className="smalldoc">Gender</th>
            <th>View Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th className="serialNo">{index + 1}</th>
              <td>{item.name}</td>
              <td className="smalldoc">{item.specialization}</td>
              <td className="smalldoc">{item.licenseNumber}</td>
              <td className="smalldoc">{item.experience}</td>
              <td className="smalldoc">{item.gender}</td>
              <td>
                <button
                  className="profileViewButton userapprovalbutton"
                  onClick={(event) => {
                    navigate("/patient/doctorprofiles/" + item.user.id);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApprovedDoctors;

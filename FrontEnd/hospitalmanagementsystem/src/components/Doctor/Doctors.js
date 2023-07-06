import React, { useEffect, useState } from "react";
import "../Doctor/Doctors.css";
import { Link, Routes, Route, json, useNavigate } from "react-router-dom";
import filtericon from "../images/filter-filled-tool-symbol.png";

function Doctors() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [status, setStatus] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    viewDoctors();
  }, []);
  var GetUsersByStatus = (value) => {
    var token = localStorage.getItem("token");
    if (value == "All Doctors") {
      viewDoctors();
    } else {
      fetch(
        "http://localhost:5194/api/Doctor/GetAllDoctorsByStatus?status=" +
          value,
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
        .then(async (data) => {
          var myData = await data.json();
          setData(myData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  var viewDoctors = () => {
    const token = localStorage.getItem("token");
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
        <div className="Filter">
          <span>Search By</span>
          <select
            className="doctorsFilter"
            onChange={(event) => {
              GetUsersByStatus(event.target.value);
            }}
          >
            <option value="All Doctors">All Doctors</option>
            <option value="Approved">Approved Doctors</option>
            <option value="Not Approved">Not Approved Doctors</option>
          </select>
          <div className="filterDiv">
            <img src={filtericon} />
          </div>
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
            <th className="smalldoc">Status</th>
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
              <td className="smalldoc">{item.status}</td>
              <td>
                <button
                  className="profileViewButton userapprovalbutton"
                  onClick={(event) => {
                    navigate("/admin/doctor/" + item.user.id);
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

export default Doctors;

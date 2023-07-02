import React, { useEffect, useState } from "react";
import "../Doctor/Doctors.css";
import { Link, Routes, Route } from "react-router-dom";
import Doctor from "../Doctor/Doctor";

function Doctors() {
  const [data, setData] = useState([]);
  useEffect(() => {
    viewDoctors();
  }, []);
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
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td className="smalldoc">{item.specialization}</td>
              <td className="smalldoc">{item.licenseNumber}</td>
              <td className="smalldoc">{item.experience}</td>
              <td className="smalldoc">{item.gender}</td>
              <td className="smalldoc">{item.status}</td>
              <td>
                <Link className="profileViewButton" to="/admin/doctor">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Doctors;

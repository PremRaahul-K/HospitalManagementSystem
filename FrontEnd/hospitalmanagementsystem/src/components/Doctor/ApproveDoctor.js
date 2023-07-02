import React from "react";
import "../Doctor/ApproveDoctor.css";
import filtericon from "../images/filter-filled-tool-symbol.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../images/doctor-icon.png";
import patient from "../images/patient-icon.png";

function ApproveDoctor() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [status, setStatus] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    viewDoctors();
  }, []);
  var GetUsersByStatus = (value) => {
    console.log(value);
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
    }
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
  var ChangeStatus = (data) => {
    fetch("http://localhost:5194/api/Doctor/ChangeDoctorStatus", {
      method: "PUT",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (data) => {
        var myData = await data.json();
        GetUsersByStatus();
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  const ApproveStyle = {
    backgroundColor: "#7ee8fa",
    backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)",
  };

  const NotApproveStyle = {
    backgroundColor: "#ff0000",
    backgroundImage: "linear-gradient(315deg, #ff0000 0%, #ffed00 74%)",
  };
  return (
    <div className="ApproveDoctor">
      <div className="DoctorsHeader">
        <div>
          <h2>Update Doctor Status</h2>
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
            <th>Status</th>
            <th className="smalldoc">Edit</th>
            <th className="smalldoc">View</th>
            <th className="smalldoc">Delete</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th className="serialNo">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td className="smalldoc">
                {" "}
                <button
                  className="deleteDoctor editDoctor userapprovalbutton editProfile"
                  onClick={() => {
                    navigate("/admin/editdoctor/" + item.doctorId);
                  }}
                >
                  Edit Doctor
                </button>
              </td>
              <td className="smalldoc">
                <button
                  className="deleteDoctor userapprovalbutton viewProfile"
                  onClick={(event) => {
                    navigate("/admin/doctor/" + item.user.id);
                  }}
                >
                  View
                </button>
              </td>
              <td className="smalldoc">
                <button className="profileViewButton userapprovalbutton">
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="profileViewButton userapprovalbutton"
                  style={
                    item.status == "Not Approved"
                      ? ApproveStyle
                      : NotApproveStyle
                  }
                  onClick={() => {
                    var userStatus =
                      item.status == "Approved" ? "Not Approved" : "Approved";
                    ChangeStatus({
                      doctorId: item.doctorId,
                      updatedStatus: userStatus,
                    });
                  }}
                >
                  {item.status == "Approved" ? "Disapprove" : "Approve"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApproveDoctor;

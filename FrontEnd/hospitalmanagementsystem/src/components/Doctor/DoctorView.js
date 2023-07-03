import React, { useEffect, useState } from "react";
import DoctorImage from "../images/DoctorImage.png";
import { useNavigate, useParams } from "react-router-dom";

function DoctorView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getDoctorDetails();
    getUserDetails();
  }, []);
  var getDoctorDetails = () => {
    fetch(
      "http://localhost:5194/api/Doctor/GetDoctor?id=" +
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
          <h2>Doctor Information</h2>
        </div>
      </div>
      <div className="aboutDoctor">
        <div>
          <img src={DoctorImage} className="doctorImage" />
        </div>
        <div>
          <div className="description">
            <div></div>
            <div>
              <h3>Name - {data.name}</h3>

              <h4>About Doctor</h4>
              <p>
                A doctor, also known as a physician or medical practitioner, is
                a highly trained and skilled professional who diagnoses, treats,
                and prevents illnesses and injuries in individuals. Doctors play
                a crucial role in healthcare systems, working to promote and
                maintain the well-being of their patients.
              </p>
              <div className="doctorInfo">
                <div className="doctorInfoData">
                  <h5>Specilization</h5>
                  <span>{data.specialization}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>License Number</h5>
                  <span>{data.licenseNumber}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Qulifications</h5>
                  <span>{data.qualifications}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Phone Number</h5>
                  <span>{data.phoneNumber}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Address</h5>
                  <span>{data.address}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Email</h5>
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoctorView;

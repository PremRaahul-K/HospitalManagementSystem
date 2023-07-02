import React from "react";
import "../Doctor/Doctor.css";
import DoctorImage from "../images/DoctorImage.png";

function Doctor() {
  return (
    <div className="Doctor">
      <div className="doctorHeader">
        <div className="">
          <h2>Doctor Information</h2>
        </div>
        <div>
          <button className="deleteDoctor editDoctor">Edit Doctor</button>
          <button className="deleteDoctor">Delete Doctor</button>
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
              <h3>Name - Prem</h3>

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
                  <h5>Email</h5>
                  <span>prem@gamil.com</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Specilization</h5>
                  <span>prem@gamil.com</span>
                </div>
                <div className="doctorInfoData">
                  <h5>License Number</h5>
                  <span>prem@gamil.com</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Qulifications</h5>
                  <span>prem@gamil.com</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Phone Number</h5>
                  <span>+91 2839829389</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Address</h5>
                  <span>Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Doctor;

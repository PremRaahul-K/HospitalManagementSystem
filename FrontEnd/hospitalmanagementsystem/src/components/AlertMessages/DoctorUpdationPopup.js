import React from "react";
import updated from "../images/UpdatedImage.jpg";
import "../AlertMessages/DoctorUpdationPopup.css";

const DoctorUpdationPopup = (props) => {
  return (
    <div className="popup-box">
      <div className="box Updatebox">
        <div className="container">
          <div className="cookiesContent" id="cookiesPopup">
            <img src={updated} alt="cookies-img" className="notApprovedImage" />
            <p className="popupMessage">
              Doctor details have been successfully updated.
            </p>
            <button onClick={props.handleClose} className="okButton">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorUpdationPopup;

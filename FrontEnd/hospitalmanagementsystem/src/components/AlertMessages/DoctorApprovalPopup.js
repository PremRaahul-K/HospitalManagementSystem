import React from "react";
import "../AlertMessages/Popup.css";
import notApproved from "../images/NotApproved.jpg";

const DoctorApprovalPopup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="container">
          <div className="cookiesContent" id="cookiesPopup">
            <img
              src={notApproved}
              alt="cookies-img"
              className="notApprovedImage"
            />
            <p className="popupMessage">
              I wanted to inform you that your approval status is still pending.
              Therefore, I kindly request you to log in at a later time. We
              appreciate your patience and understanding.
            </p>
            <p className="popupThankYouNote">Thank you and have a great day.</p>
            <button onClick={props.handleClose} className="okButton">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorApprovalPopup;

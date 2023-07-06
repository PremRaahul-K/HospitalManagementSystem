import React from "react";
import "../AlertMessages/DoctorDelete";
import deleted from "../images/delete.png";

const DoctorDelete = (props) => {
  return (
    <div className="popup-box">
      <div className="box Deletebox">
        <div className="container">
          <div className="cookiesContent" id="cookiesPopup">
            <img
              src={deleted}
              alt="cookies-img"
              className="notApprovedImage deletedoctorimage"
            />
            <p className="popupMessage">Doctor has been deleted successfully</p>
            <button onClick={props.handleClose} className="okButton">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDelete;

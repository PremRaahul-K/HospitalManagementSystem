import React from "react";
import invalid from "../images/Invalid.jpg";
import "../AlertMessages/InvalidCredentials.css";

const InvalidCredentials = (props) => {
  return (
    <div className="popup-box">
      <div className="box invalidbox">
        <div className="container">
          <div className="cookiesContent" id="cookiesPopup">
            <img
              src={invalid}
              alt="cookies-img"
              className="notApprovedImage invalidImage"
            />
            <p className="popupMessage">
              Invalid creadentials, Please enter a valid credentials!!
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

export default InvalidCredentials;

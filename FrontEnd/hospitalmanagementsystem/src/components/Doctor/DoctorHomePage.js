import React, { useEffect, useState } from "react";
import "../Admin/Admin.css";
import home from "../images/Home.svg";
import doctors from "../images/doctor-icon.png";
import logout from "../images/pngfind.com-black-button-png-49940.png";
import user from "../images/user.png";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import DoctorView from "./DoctorView";

function DoctorHomePage() {
  const navigate = useNavigate();
  return (
    <div className="Admin">
      <div className="sideBar">
        <div className="SideBar">
          <div className="userProfile navIcon">
            <img src={user} className="userImage" />
          </div>
          <div>
            <Link to={"$/"} className="home navIcon">
              <img src={home} className="navImage" />
            </Link>
            <Link
              className="logout navIcon"
              to={"/"}
              onClick={() => {
                localStorage.clear();
              }}
            >
              <img src={logout} className="navImage" />
            </Link>
          </div>
        </div>
      </div>
      <div className="viewBar">
        <Routes>
          <Route path="$/" element={<DoctorView />} />
        </Routes>
      </div>
    </div>
  );
}

export default DoctorHomePage;

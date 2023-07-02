import React from "react";
import "../Admin/Admin.css";
import home from "../images/Home.svg";
import doctors from "../images/doctor-icon.png";
import edit from "../images/edit.png";
import logout from "../images/pngfind.com-black-button-png-49940.png";
import approveDoctor from "../images/approved-icon-png.jpg";
import user from "../images/user.png";
import AdminHome from "./AdminHome";
import { Link, Routes, Route } from "react-router-dom";
import Doctors from "../Doctor/Doctors";
import Doctor from "../Doctor/Doctor";

function Admin() {
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
            <Link to={"$/doctorsprofile"} className="doctors navIcon">
              <img src={doctors} className="navImage" />
            </Link>
            <Link className="approvedoctor navIcon">
              <img src={approveDoctor} className="navImage" />
            </Link>
            <Link className="editdoctor navIcon">
              <img src={edit} className="navImage" />
            </Link>
            <Link className="logout navIcon">
              <img src={logout} className="navImage" />
            </Link>
          </div>
        </div>
      </div>
      <div className="viewBar">
        <Routes>
          <Route path="$/" element={<AdminHome />} />
          <Route path="$/doctorsprofile" element={<Doctors />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;

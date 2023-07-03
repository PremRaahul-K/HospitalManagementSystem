import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile";
import Patient from "./components/Patient/Patient";
import Admin from "./components/Admin/Admin";
import DoctorHomePage from "./components/Doctor/DoctorHomePage";
import DoctorRegister from "./components/Register/DoctorRegister";
import PatientRegister from "./components/Register/PatientRegister";
import AdminProtected from "./components/Protected/AdminProtected";
import PatientProtected from "./components/Protected/PatientProtected";
import DoctorProtected from "./components/Protected/DoctorProtected";

function App() {
  var token;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/patient/*"
            element={
              <PatientProtected token={token}>
                <Patient />
              </PatientProtected>
            }
          />

          <Route
            path="/admin/*"
            element={
              <AdminProtected token={token}>
                <Admin />
              </AdminProtected>
            }
          />
          <Route
            path="/doctor/*"
            element={
              <DoctorProtected token={token}>
                <DoctorHomePage />
              </DoctorProtected>
            }
          />
          <Route path="/doctorregister" element={<DoctorRegister />} />
          <Route path="/patientregister" element={<PatientRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

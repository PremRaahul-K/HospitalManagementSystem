import React, { useEffect, useState } from "react";
import "../Admin/AdminHome.css";
import doctor from "../images/doctor-icon.png";
import patient from "../images/patient-icon.png";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

function AdminHome() {
  const [data, setData] = useState({
    approvedDoctorCount: 0,
    notApprovedDoctorCount: 0,
    patientCount: 0,
  });
  useEffect(() => {
    viewUsersCount();
  }, []);
  const myInfo = [
    { name: "Approved Doctors", value: data.approvedDoctorCount },
    { name: "Not Approved Doctors", value: data.notApprovedDoctorCount },
    { name: "Patients Count", value: data.patientCount },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  var viewUsersCount = () => {
    fetch("http://localhost:5194/api/User/GetAllUsersCount", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="AdminHome">
      <div className="adminDetails">
        <h2>Admin</h2>
        <span>Email - admin@gmail.com</span>
      </div>
      <div className="hospitalData">
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={doctor} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue">{data.approvedDoctorCount}</span>
            <span className="cardLabel">Approved Doctors</span>
          </div>
        </div>
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={doctor} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue notApprovedCardValue">
              {data.notApprovedDoctorCount}
            </span>
            <span className="cardLabel">Not Approved Doctors</span>
          </div>
        </div>
        <div className="hospitalInfo">
          <div className="labelDiv">
            <img src={patient} className="labelImage" />
          </div>
          <div className="hospitalValue">
            <span className="cardValue patientCardValue">
              {data.patientCount}
            </span>
            <span className="cardLabel">Patient Count</span>
          </div>
        </div>
      </div>
      <div className="userPercentages">
        <h3>Users Percentages</h3>
        <div className="pieChart">
          <div>
            <PieChart width={400} height={400}>
              <Pie
                data={myInfo}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {myInfo.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div>
            <div className="barChartColour">
              <div className="ApprovedDoctorsColour"></div>
              <span>Approved Doctors</span>
            </div>
            <div className="barChartColour">
              <div className="NotApprovedDoctorsColour"></div>
              <span>Not Approved Doctors</span>
            </div>
            <div className="barChartColour">
              <div className="PatientsColour"></div>
              <span>Patients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

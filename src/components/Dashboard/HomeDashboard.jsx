import React, { useState, useEffect } from "react";
import Barchart from "../Barchart/Barchart.jsx";
import { getProfile } from "../../services/auth.mjs";
import Daily from "../Daily/Daily.jsx";
import "./HomeDashboard.css";

function HomeDashboard() {
  const [user, setUser] = useState(false);
  const [noOfEmployees, setnoOfEmployees] = useState(0);
  const [yearResult,setyearResult] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const responseEmpNumber = await fetch(
          "http://localhost:5000/employees/employeeCount",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseEmpNumberJson = await responseEmpNumber.json();
        setnoOfEmployees(responseEmpNumberJson);

        const response = await getProfile();
        if (response.message === "Unauthorized") {
          setUser("false");
        } else {
          setUser(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchYearResult = async() =>{
      try{
        const result = await fetch("http://localhost:5000/transactions/year");
        const jsonResult = await result.json();
        console.log(jsonResult);
        setyearResult(jsonResult);
      }catch(err){
        console.log("fetchYearResultError:",err);
      }
    }
    fetchProfile();
    fetchYearResult();
  }, []);
  return (
    <section id="dashboard">
      <div className="homePageContainer">
        <h2 className="my-3 tilteDashboard">Dashboard</h2>
        <p className="">
          Welcome{" "}
          {user != "false"
            ? user.username
            : ", please login with admin credentials."}
        </p>
      </div>
      <div className="bodyContainer my-3">
        <div className="itemContainer my-3">
          <div className="modelCard" style={{ width: "100%" }}>
            <div className="modelContainer">
              <h5 className="">FY:</h5>
              <h5 className="">{"2024 - 2025"}</h5>
            </div>
            <div className="timeContainer">
              <Date />
            </div>
          </div>

          <div className="cardContainer">
            <div
              className="card"
              style={{ width: "13rem", backgroundColor: "black" }}
            >
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Total Audits</h5>
                  <p className="card-text">{}</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "13rem", backgroundColor: "black" }}
            >
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Revenue Generated</h5>
                  <p className="card-text">109203</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "13rem", backgroundColor: "black" }}
            >
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Employees Working</h5>
                  <p className="card-text">{noOfEmployees}</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "13rem", backgroundColor: "black" }}
            >
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Time Required</h5>
                  <p className="card-text">{1} hours (approx)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="" style={{ width: "90%" }}>
            <div className="d-flex justify-content-end">
              <div className="mx-3">
                <span className="fw-bold">Audit Date :</span>
                {"10 May 2024"}
              </div>
              <div>
                <span className="fw-bold">Target Date :</span>
                {"1 June 2024"}
              </div>
            </div>
          </div>
          <hr className="divider" />
          {/* <div className="chart"><Barchart /></div> */}
            <h5 className="text-center">Insights</h5>
          <div className="chartContainer">
            <div className="barchart">
              <Barchart />
            </div>
            <div className="employeeChart">
              <Daily/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeDashboard;

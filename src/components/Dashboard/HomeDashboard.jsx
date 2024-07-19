import React from 'react';
import Barchart from "../Barchart/Barchart.jsx";
function HomeDashboard() {
  return (
    <section id="dashboard">
        <div className="homePageContainer">
            <h2 className="my-3 tilteDashboard">Dashboard</h2>
            <p className="">Welcome Aditya Roy</p>
        </div>
      <div className="bodyContainer my-3">

        <div className="itemContainer">
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
                  <h5 className="card-title">Total Partners</h5>
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
                  <p className="card-text">2009</p>
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

          <div className="planContainer">
            <Barchart/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeDashboard;
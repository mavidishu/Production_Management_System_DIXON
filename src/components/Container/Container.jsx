import React from "react";
import "./container.css";


function Container() {
  return (
    <div className="container mx-3 my-3 bodyContainer">
      <h1 className="mx-3 my-3">Dashboard</h1>
      <p className="mx-3 my-3">Welcome Frenedish Ghurdhin</p>

      <div className="d-flex">
        <div className="container my-3 cardContainer">
          <div className="card my-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Total Customers</h5>
              <h6 className="card-subtitle mb-2 text-muted">Icons</h6>
              <p className="card-text">65510</p>
              <p>
                <span>+41% </span>
                <span>since last month</span>
              </p>
            </div>
          </div>
          <div className="card my-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Sales Today</h5>
              <h6 className="card-subtitle mb-2 text-muted">Icons</h6>
              <p className="card-text">988</p>
              <p>
                <span>-21% </span>
                <span>since last month</span>
              </p>
            </div>
          </div>
          <div className="card my-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <h6 className="card-subtitle mb-2 text-muted">Icons</h6>
              <p className="card-text">1000</p>
              <p>
                <span>+10% </span>
                <span>since last month</span>
              </p>
            </div>
          </div>
          <div className="card my-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Monthly Sales</h5>
              <h6 className="card-subtitle mb-2 text-muted">Icons</h6>
              <p className="card-text">40000</p>
              <p>
                <span>+58% </span>
                <span>since last month</span>
              </p>
            </div>
          </div>
        </div>

        <div className="chart">
        <div><canvas id="acquisitions"></canvas></div>
        </div>
      </div>
    </div>
  );
}

export default Container;

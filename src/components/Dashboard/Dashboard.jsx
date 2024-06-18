import React from 'react';
import "./dashboard.css";
import Barchart from "../Barchart/Barchart.jsx";
import users from "../../assets/customers.png";
import salesToday from "../../assets/salesToday.png";
import monthlySales from "../../assets/monthlySales.png";
import product from "../../assets/product.png";

function Dashboard() {
  return (
    <div className="mx-3 my-3 bodyContainer">
      <h1 className="my-3">Dashboard</h1>
      <p className="">Welcome Frenedish Guard</p>

      <div className="itemContainer">
        <div className="cardContainer">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex">
              <img src={users} alt=""/>
              <div className="info">
                <h5 className="card-title">Total Customers</h5>
                <p className="card-text">65510</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <div className="card-body d-flex">
              <img src={salesToday} alt=""/>
              <div className="info">
                <h5 className="card-title">Daily Sales</h5>
                <p className="card-text">65510</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <div className="card-body d-flex">
              <img src={product} alt=""/>
              <div className="info">
                <h5 className="card-title">Total Product</h5>
                <p className="card-text">65510</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <div className="card-body d-flex">
              <img src={monthlySales} alt=""/>
              <div className="info">
                <h5 className="card-title">Monthly Sales</h5>
                <p className="card-text">65510</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart">
            <Barchart />
        </div>

      </div>
    </div>
  )
}

export default Dashboard
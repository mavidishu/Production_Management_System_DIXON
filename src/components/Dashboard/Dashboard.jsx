import React, { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import Barchart from "../Barchart/Barchart.jsx";
import users from "../../assets/customers.png";
import salesToday from "../../assets/salesToday.png";
import monthlySalesIcon from "../../assets/monthlySales.png";
import product from "../../assets/product.png";
import UserContext from "../../context/user/UserContext.jsx";

function Dashboard() {
  const context = useContext(UserContext);
  const {
    user,
    products,
    getUser,
    getProduct,
    dailySales,
    getDailySales,
    monthlySales,
    getMonthlySales,
  } = context;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    getUser();
    getProduct();
    getDailySales();
    getMonthlySales();
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <section id="dashboard">
      <div className="bodyContainer my-3">
        {/* <h2 className="my-3 tilteDashboard">Dashboard</h2>
          <p className="">Welcome Aditya Roy</p> */}

        <div className="itemContainer">
          <div className="modelCard" style={{ width: "100%" }}>
            <div className="modelContainer">
              <h5 className="">Production :</h5>
              <h5 className="">Samsung MX555</h5>
            </div>
            <div className="timeContainer">
              {formatDate(time)} <span id="seprator">|</span>
              {hours}:{minutes}:{seconds}</div>
          </div>

          <div className="cardContainer">
            <div className="card" style={{ width: "13rem", backgroundColor:"black" }}>{/*MEDIUM SLATE BLUE */}
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Target</h5>
                  <p className="card-text">{user.length}</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "13rem", backgroundColor:"black" }}>{/* SALE BLUE */}
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Input Stock</h5>
                  <p className="card-text">{dailySales}</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "13rem", backgroundColor:"black" }}>{/*TEAL*/}
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Production</h5>
                  <p className="card-text">{products.length}</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "13rem", backgroundColor:"black" }}>
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Time Required</h5>
                  <p className="card-text">{monthlySales} hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ width: "100%" }}>
            <div className="d-flex justify-content-end">
              <div className="mx-3"><span className="fw-bold">Audit Date :</span> 20 May 2024</div>
              <div><span className="fw-bold">Target Date :</span> 20 June 2024</div>
            </div>
          </div>

          <div className="chart">
            <Barchart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

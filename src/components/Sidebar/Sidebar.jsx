import React, { useEffect } from "react";
import cart from "../../assets/cart.png";
import group from "../../assets/group.png";
import bill from "../../assets/bill.png";
import computer from "../../assets/computer.png";
import daily from "../../assets/daily.png";
import monthly from "../../assets/monthly.png";
import breakdown from "../../assets/breakdown.png";
import dashboardIcon from "../../assets/dashboard.png";
import admin from "../../assets/admin.png";
import performance from "../../assets/performance.png";
import back from "../../assets/back.png";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

function Sidebar({toggleSidebar}) {
  let location = useLocation();
  useEffect(() => {});

  let handleClick = () => {};
  return (
    <div className="toggleContent">
      <div className="sidebarHeader">
        <a className="navbar-brand logo" href="/">
          Dixon Technologies
        </a>
        <div className="backIcon">
          <img draggable={false} className="cross-icon" src={back} onClick={toggleSidebar}/>
        </div>
      </div>
      <div>
        <section className="sectionContainer">
          <ul>
            <li
              className={`d-flex ${
                location.pathname == "/" ? "hoverEffect" : ""
              }`}
              onClick={handleClick}
            >
              <Link
                to="/"
                className={`${location.pathname == "/" ? "hoverEffect" : ""}`}
              >
                <img
                  src={dashboardIcon}
                  className={`${location.pathname == "/" ? "imageEffect" : ""}`}
                  alt=""
                />
                Dashboard
              </Link>
            </li>
            <li
              className={`d-flex ${
                location.pathname == "/products" ? "hoverEffect" : ""
              }`}
              onClick={handleClick}
            >
              <Link
                to="/products"
                className={`${
                  location.pathname == "/products" ? "hoverEffect" : ""
                }`}
              >
                <img
                  draggable={false}
                  src={cart}
                  className={`${
                    location.pathname == "/products" ? "imageEffect" : ""
                  }`}
                  alt=""
                />
                Products
              </Link>
            </li>
            <li
              className={`d-flex ${
                location.pathname == "/customers" ? "hoverEffect" : ""
              }`}
            >
              <Link
                to="/customers"
                className={`${
                  location.pathname == "/customers" ? "hoverEffect" : ""
                }`}
              >
                <img
                  draggable={false}
                  src={group}
                  className={`${
                    location.pathname == "/customers" ? "imageEffect" : ""
                  }`}
                  alt=""
                />
                Customers
              </Link>
            </li>
            <li
              className={`d-flex ${
                location.pathname == "/transactions" ? "hoverEffect" : ""
              }`}
            >
              <Link
                to="/transactions"
                className={`${
                  location.pathname == "/transactions" ? "hoverEffect" : ""
                }`}
              >
                <img
                  draggable={false}
                  src={bill}
                  className={`${
                    location.pathname == "/transactions" ? "imageEffect" : ""
                  }`}
                  alt=""
                />
                Transactions
              </Link>
            </li>
            <li
              className={`d-flex  ${
                location.pathname == "/dashboard" ? "hoverEffect" : ""
              }`}
            >
              <Link
                to="/dashboard"
                className={`${
                  location.pathname == "/dashboard" ? "hoverEffect" : ""
                }`}
              >
                <img
                  draggable={false}
                  src={computer}
                  className={`img-small ${
                    location.pathname == "/dashboard" ? "imageEffect" : ""
                  }`}
                  alt=""
                />
                Dashboard
              </Link>
            </li>
            <li
              className={`d-flex ${
                location.pathname == "/daily" ? "hoverEffect" : ""
              }`}
            >
              <Link
                to="/daily"
                className={`${
                  location.pathname == "/daily" ? "hoverEffect" : ""
                }`}
              >
                <img
                  draggable={false}
                  src={daily}
                  className={`img-small ${
                    location.pathname == "/daily" ? "imageEffect" : ""
                  }`}
                  alt=""
                />
                Daily Production
              </Link>
            </li>
            {/* <li className={`d-flex ${location.pathname=='/monthly'?'hoverEffect':''}`}>
                <img draggable={false} src={monthly}className={`img-small ${location.pathname=='/monthly'?'imageEffect':''}`} alt="" />
                <Link to="/monthly" className={`${location.pathname=='/monthly'?'hoverEffect':''}`}>Monthly</Link>
              </li> */}
            <li
              className={`d-flex ${
                location.pathname == "/breakdown" ? "hoverEffect" : ""
              }`}
            >
              <Link
                to="/breakdown"
                className={`${
                  location.pathname == "/breakdown" ? "hoverEffect" : ""
                }`}
              >
                <img
                  draggable={false}
                  src={breakdown}
                  className={`img-small ${
                    location.pathname == "/breakdown" ? "imageEffect" : ""
                  }`}
                  alt=""
                />
                Breakdown
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="prodcnName">
        <p>Samsung Productions</p>
      </div>
    </div>
  );
}

export default Sidebar;

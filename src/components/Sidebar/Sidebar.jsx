import React from 'react';
import cart from "../../assets/cart.png";
import group from "../../assets/group.png";
import bill from "../../assets/bill.png";
import computer from "../../assets/computer.png";
import daily from "../../assets/daily.png";
import monthly from "../../assets/monthly.png";
import breakdown from "../../assets/breakdown.png";
import admin from "../../assets/admin.png";
import performance from "../../assets/performance.png";
import back from "../../assets/back.png";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="toggleContent">
        <a className="navbar-brand title" href="/">
          Admin Dashboard
        </a>
        <img className="cross-icon" src={back}/>
        <div className="sectionContainer">
          <section id="clientfacing">
            <span>Client Facing</span>
            <ul>
              <li className="d-flex">
                <img src={cart} alt="" />
                <small>Products</small>
              </li>
              <li className="d-flex">
                <img src={group} alt="" />
                <small>Customers</small>
              </li>
              <li className="d-flex">
                <img src={bill} alt="" />
                <small>Transactions</small>
              </li>
            </ul>
          </section>
          <section id="sales">
            <span>Sales</span>
            <ul>
              <li className="d-flex">
                <img src={computer} alt="" />
                <small>Overview</small>
              </li>
              <li className="d-flex">
                <img src={daily} alt="" />
                <small>Daily</small>
              </li>
              <li className="d-flex">
                <img src={monthly} alt="" />
                <small>Monthly</small>
              </li>
              <li className="d-flex">
                <img src={breakdown} alt="" />
                <small>Breadkdown</small>
              </li>
            </ul>
          </section>
          <section id="management">
            <span>Management</span>
            <ul>
              <li className="d-flex">
                <img src={admin} alt="" />
                <small>Admin</small>
              </li>
              <li className="d-flex">
                <img src={performance} alt="" />
                <small>Performance</small>
              </li>
            </ul>
          </section>
        </div>
      </div>
  )
}

export default Sidebar
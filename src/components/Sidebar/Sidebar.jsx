import React, { useEffect } from 'react';
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
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  let location = useLocation();
  useEffect(()=>{
  })
  let handleClick = ()=>{
    
  }
  return (
    <div className="toggleContent">
      <div className="sidebarHeader">
        <a className="navbar-brand logo" href="/">
          Admin Dashboard
        </a>
        <img className="cross-icon" src={back}/>
      </div>
        <div className="sectionContainer">
          <section>
            <span>
              <Link to="/" className={`li-item ${location.pathname=='/'?'hoverEffect':''}`}>Dashboard</Link>
            </span>
          </section>
          <section id="clientfacing">
            <span>Client Facing</span>
            <ul>
              <li className={`d-flex ${location.pathname=='/products'?'hoverEffect':''}`} onClick={handleClick}>
                <img src={cart} className={`${location.pathname=='/products'?'imageEffect':''}`}alt=""/>
                <small><Link to="/products" className={`${location.pathname=='/products'?'hoverEffect':''}`}>Products</Link></small>
              </li>
              <li className={`d-flex ${location.pathname=='/customers'?'hoverEffect':''}`}>
                <img src={group} className={`${location.pathname=='/customers'?'imageEffect':''}`}alt="" />
                <small><Link to="/customers" className={`${location.pathname=='/customers'?'hoverEffect':''}`}>Customers</Link></small>
              </li>
              <li className={`d-flex ${location.pathname=='/transactions'?'hoverEffect':''}`} >
                <img src={bill} className={`${location.pathname=='/transactions'?'imageEffect':''}`} alt="" />
                <small><Link to="/transactions" className={`${location.pathname=='/transactions'?'hoverEffect':''}`}>Transactions</Link></small>
              </li>
            </ul>
          </section>
          <section id="sales">
            <span>Sales</span>
            <ul>
              <li className={`d-flex ${location.pathname=='/overview'?'hoverEffect':''}`}>
                <img src={computer} className={`${location.pathname=='/overview'?'imageEffect':''}`} alt="" />
                <small><Link to="/overview" className={`${location.pathname=='/overview'?'hoverEffect':''}`}>Overview</Link></small>
              </li>
              <li className={`d-flex ${location.pathname=='/daily'?'hoverEffect':''}`}>
                <img src={daily} className={`${location.pathname=='/daily'?'imageEffect':''}`} alt="" />
                <small><Link to="/daily" className={`${location.pathname=='/daily'?'hoverEffect':''}`}>Daily</Link></small>
              </li>
              <li className={`d-flex ${location.pathname=='/monthly'?'hoverEffect':''}`}>
                <img src={monthly}className={`${location.pathname=='/monthly'?'imageEffect':''}`} alt="" />
                <small><Link to="/monthly" className={`${location.pathname=='/monthly'?'hoverEffect':''}`}>Monthly</Link></small>
              </li>
              <li className={`d-flex ${location.pathname=='/breakdown'?'hoverEffect':''}`}>
                <img src={breakdown} className={`${location.pathname=='/breakdown'?'imageEffect':''}`} alt="" />
                <small><Link to="/breakdown" className={`${location.pathname=='/breakdown'?'hoverEffect':''}`}>Breakdown</Link></small>
              </li>
            </ul>
          </section>
          <section id="management">
            <span>Management</span>
            <ul>
              <li className={`d-flex ${location.pathname=='/admin'?'hoverEffect':''}`}>
                <img src={admin} className={`${location.pathname=='/admin'?'imageEffect':''}`} alt="" />
                <small><Link to="/admin" className={`${location.pathname=='/admin'?'hoverEffect':''}`}>Admin</Link></small>
              </li>
              <li className={`d-flex ${location.pathname=='/performance'?'hoverEffect':''}`}>
                <img src={performance} className={`${location.pathname=='/preformance'?'imageEffect':''}`} alt="" />
                <small className={`${location.pathname=='/performance'?'hoverEffect':''}`}>Performance</small>
              </li>
            </ul>
          </section>
        </div>
      </div>
  )
}

export default Sidebar
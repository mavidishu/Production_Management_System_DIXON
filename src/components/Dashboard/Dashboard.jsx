import React, { useContext,useEffect } from 'react';
import "./dashboard.css";
import Barchart from "../Barchart/Barchart.jsx";
import users from "../../assets/customers.png";
import salesToday from "../../assets/salesToday.png";
import monthlySalesIcon from "../../assets/monthlySales.png";
import product from "../../assets/product.png";
import UserContext from '../../context/user/UserContext.jsx';

function Dashboard() {
  const context = useContext(UserContext);
  const {user,products,getUser,getProduct,dailySales,getDailySales,monthlySales,getMonthlySales} = context;
  useEffect(() => {
    getUser();
    getProduct();
    getDailySales();
    getMonthlySales();
  }, [])
  
  return (
    <section id="dashboard">
      <div className="bodyContainer">
          {/* <h2 className="my-3 tilteDashboard">Dashboard</h2>
          <p className="">Welcome Aditya Roy</p> */}

          <div className="itemContainer">
            <div className="card" style={{}}>
              <div className="card-body modelContainer">
                <h5 className="">Model :</h5>
                <h5 className="">Samsung MX555</h5>
              </div>
            </div>

            <div className="cardContainer">
              <div className="card" style={{ width: "14rem" }}>
                <div className="card-body d-flex">
                  <img src={users} draggable={false} alt="" />
                  <div className="info">
                    <h5 className="card-title">Total Customers</h5>
                    <p className="card-text">{user.length}</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "14rem" }}>
                <div className="card-body d-flex">
                  <img src={salesToday} draggable={false} alt="" />
                  <div className="info">
                    <h5 className="card-title">Daily Sales</h5>
                    <p className="card-text">{dailySales}</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "14rem" }}>
                <div className="card-body d-flex">
                  <img src={product} draggable={false} alt="" />
                  <div className="info">
                    <h5 className="card-title">Total Product</h5>
                    <p className="card-text">{products.length}</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "14rem" }}>
                <div className="card-body d-flex">
                  <img src={monthlySalesIcon} draggable={false} alt="" />
                  <div className="info">
                    <h5 className="card-title">Monthly Sales</h5>
                    <p className="card-text">{monthlySales}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart">
              <Barchart />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Dashboard
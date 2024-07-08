import React, { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import Barchart from "../Barchart/Barchart.jsx";
import users from "../../assets/customers.png";
import salesToday from "../../assets/salesToday.png";
import monthlySalesIcon from "../../assets/monthlySales.png";
import product from "../../assets/product.png";
import UserContext from "../../context/user/UserContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

function Dashboard() {
  const context = useContext(UserContext);
  let params = useParams();

  const {
    user,
    products,
    getUser,
    getProduct,
    productOne,
    getParticularProduct,
  } = context;
  const [time, setTime] = useState(new Date());
  let productId = params.id;

  useEffect(() => {
    getUser();
    getProduct();
    getParticularProduct(productId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
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
              <h5 className="">{productOne.productName}</h5>
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
                  <h5 className="card-title">Target</h5>
                  <p className="card-text">{productOne.production}</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "13rem", backgroundColor: "black" }}
            >
              <div className="card-body d-flex">
                <div className="info">
                  <h5 className="card-title">Input Stock</h5>
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
                  <h5 className="card-title">Production</h5>
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
                  <p className="card-text">{Math.round((productOne.production) / 375)} hours (approx)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="" style={{ width: "90%" }}>
            <div className="d-flex justify-content-end">
              <div className="mx-3">
                <span className="fw-bold">Audit Date :</span>
                {productOne.auditDate}
              </div>
              <div>
                <span className="fw-bold">Target Date :</span>
                {productOne.targetDate}
              </div>
            </div>
          </div>
          <hr className="divider" />
          {/* <div className="chart"><Barchart /></div> */}

          <div className="planContainer">
            <h5 class="text-center">Plan For the Day</h5>
            <form method="POST" className="needs-validation" noValidate>
              <div class="row">
                <div class=" mb-3">
                  <label htmlFor="target" class="form-label" >Target of the day</label>
                  <input type="number" class="form-control" id="target" placeholder="" aria-label="Target For the Day" />
                  <div className="form-text">Warning: target of the day must be less than or equal to overall target.</div>
                </div>
                <div class="">
                  <label htmlFor="target" class="form-label" >Workers left</label>
                  <input type="number" class="form-control" placeholder="" aria-label="Workers Available" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label htmlFor="target" class="form-label" >Stock for the day</label>
                  <input type="number" class="form-control" placeholder="" aria-label="Stock For the Day" />
                </div>
                <div class="col">
                  <label htmlFor="target" class="form-label" >Stock leftout</label>
                  <input type="number" class="form-control" placeholder="" aria-label="Left Out Stock" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label htmlFor="target" class="form-label" >Faulty Stock</label>
                  <input type="number" class="form-control" placeholder="" aria-label="Faulty Stock" />
                </div>
                <div class="col">
                  <label htmlFor="target" class="form-label" >Faulty Production</label>
                  <input type="number" class="form-control" placeholder="" aria-label="Faulty Production" />
                </div>
              </div>
              <div class="mt-3" >
                <label htmlFor="target" class="form-label" >Product Details <span style={{color:"rgb(170, 170, 170)"}}>(Include Test Details Also)</span></label>
                <textarea name="productInfo" id="productInfo" placeholder="" rows={10}></textarea>
              </div>
              <button type="submit" class="mt-3 btn btn-sm btn-dark mb-3">Submit</button>
            </form>
          </div>

          <div className="pdfContainer">
            <h5 className="text-center mb-3">Work Instruction</h5>
            <iframe src={productOne.workInstruction}  className="mt-3 pdfViewer"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

import React, { useContext, useEffect } from "react";
import "./product.css";
import UserContext from "../../context/user/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Product() {
  const contextProduct = useContext(UserContext);
  const { products, getProduct } = contextProduct;
  let navigate = useNavigate();
  useEffect(() => {
    getProduct();
  }, []);
  let dateFormat = (dateInput) => {
    let date = new Date(dateInput);
    let options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    let formatter = new Intl.DateTimeFormat("en-IN", options);
    let formattedDate = formatter.format(date)
    return (formattedDate);
  };

  return (
    <section id="product">
      <div className="container my-3">
        <div className="productsHeading d-flex justify-content-between align-items-center">
          <h3 className="my-3 productTitle">Product Listing</h3>
          <button className="btn btn-dark"> <a href="/products/new" style={{color:"white"}}>Add</a> </button>
        </div>
        <div className="tableContainer">
          <table className="table mx-3 table-hover">
            <thead>
              <tr>
                <th scope="col" className="tableHead">
                  Identity No
                </th>
                <th scope="col" className="tableHead">
                  Product Name
                </th>
                <th scope="col" className="tableHead">
                  Audit Date
                </th>
                <th scope="col" className="tableHead">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">66786b58ec144130df9dg1f1</th>
                <td>Samsung Television 1</td>
                <td>20 May 2000</td>
                <td><FontAwesomeIcon icon={faClock} style={{color: "#FFD43B",}} /></td>
              </tr>
              <tr>
                <th scope="row">66786b58ec144130df9df1fg</th>
                <td>OnePlus Note 4</td>
                <td>17 June 2018</td>
                <td><FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE",}} /></td>
              </tr>
              <tr>
                <th scope="row">66786b58ec144130df9df1fa</th>
                <td>RedTape Shoes XL White</td>
                <td>09 Jan 1990</td>
                <td><FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE",}} /></td>
              </tr>
              {products.map((item) => {
                return (
                  <tr key={`${item._id}`} onClick={() => navigate(`/product/view/${item._id}`)}>
                    <th scope="row">{item._id}</th>
                    <td>{item.productName}</td>
                    <td>{dateFormat(item.auditDate)}</td>
                    <td>{item.status == true?<FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE",}} />:<FontAwesomeIcon icon={faClock} style={{color: "#FFD43B",}} />}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Product;

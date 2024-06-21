import React from "react";
import "./product.css";

function Product() {
  return (
    <section id="product">
      <div className="container my-3">
        <h3 className="my-3">Product Listing</h3>
        <table className="table mx-3">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Registered Date</th>
              <th scope="col">Suppplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Samsung Television 1</td>
              <td>20 May 2000</td>
              <td>Samsung Pvt. Ltd.</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>OnePlus Note 4</td>
              <td>17 June 2018</td>
              <td>OnePlus Mobile</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>RedTape Shoes XL White</td>
              <td>09 Jan 1990</td>
              <td>RedTape</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Product;

import React from "react";
import "./customers.css";

function Customers() {
  return (
    <section id="customers">
      <div className="container">

      <h3 className="my-3">Registered Customers</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ram Sharma</td>
            <td>8727392010</td>
            <td>ramsharma9090@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Hardeep Singhania</td>
            <td>2310928490</td>
            <td>hardeepTred@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Rohan Chechi</td>
            <td>8989456788</td>
            <td>rohanch99@gmail.com</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default Customers;

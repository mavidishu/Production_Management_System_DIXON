import React from 'react';
import "./transactions.css";

function Transactions() {
  return (
    <section id="transactions">
      <div className="container my-3">
        <h3 className="my-3">Transactions Listing</h3>
        <table className="table mx-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User Id</th>
              <th scope="col">Created At</th>
              <th scope="col">No of Products</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>578</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Transactions
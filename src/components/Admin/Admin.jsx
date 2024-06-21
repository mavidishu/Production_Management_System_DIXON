import React from "react";
import "./admin.css";
import userImage from "../../assets/adminProfile.jpg";
function Admin() {
  return (
    <section id="admin">
      <div className="container">
        <div className="card">
          <div className="titleContainer">
            <h4 className="my-3 adminTitle">Admin Profile</h4>
          </div>
          <img src={userImage} className="card-img-top adminImage" alt="..." />
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Aditya Roy</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>adityaroy997@gmail.com</td>
                </tr>
                <tr>
                  <th>Work Email Address</th>
                  <td>adityaroy@dev.amazon.com</td>
                </tr>
                <tr>
                  <th>Contact Number</th>
                  <td>+91 6152789810</td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>Administrator - SDE</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>Male</td>
                </tr>
              </tbody>
            </table>
          </div>
            <button className="btn btn-sm btn-dark logoutBtn">LOGOUT</button>
        </div>
      </div>
    </section>
  );
}

export default Admin;

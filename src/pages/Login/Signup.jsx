import React from "react";
import "./login.css";

function Signup() {
    
  return (
    <div className="loginSection d-flex" style={{ marginTop: "5rem" }}>
        <div className="loginSidebar">
            <h2 >Dixon</h2>
            <div className="sidebarInfo">
                <h4 className="">Inspired by our Vision.</h4>
                <p>Leading an</p>
                <p>Innovative Electronic</p>
                <p>Revolution !</p>
            </div>
        </div>
      <div className="loginContainer">
        <h3 className="">New authorization for admin access</h3>
        <form action="http://localhost:5000/signup" method="post">
          <div className="mb-3 mt-3">
            <label htmlFor="employeeId" className="form-label">
              Employee Id
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="employeeId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="employeeId" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" name="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-dark my-3">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
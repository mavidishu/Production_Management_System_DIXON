import React from "react";
import "./login.css";
import dixonLogo from "../../assets/dixon.png";
function Login() {
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
        <h3 className="">Gain access to admin panel</h3>
        <form method="POST" action="http://localhost:5000/login">
          <div class="mb-3 mt-3">
            <label for="employeeId" class="form-label">
              Employee Id
            </label>
            <input
              type="text"
              class="form-control"
              name="username"
              id="employeeId"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" name="password" id="password" />
          </div>
          <button type="submit" class="btn btn-dark my-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

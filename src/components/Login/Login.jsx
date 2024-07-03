import React from "react";
import "./login.css";
import dixonLogo from "../../assets/dixon.png";
function Login() {
  return (
    <div className="loginSection d-flex" style={{ marginTop: "6rem" }}>
        <div className="loginSidebar">
            {/* <img src={dixonLogo} alt="" id="dixonLogin"/> */}
            <h2 >Dixon</h2>
            <div className="sidebarInfo">
                <h4>Inspired by our Vision.</h4>
                <p>Leading an</p>
                <p>Innovative Electronic</p>
                <p>Revolution !</p>
            </div>
        </div>
      <div className="loginContainer">
        <h3>Gain access to admin panel</h3>
        <form>
          <div class="mb-3">
            <label for="employeeId" class="form-label">
              Employee Id
            </label>
            <input
              type="email"
              class="form-control"
              id="employeeId"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>
          <button type="submit" class="btn btn-dark my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

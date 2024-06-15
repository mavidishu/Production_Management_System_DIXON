import React, { useEffect } from "react";
import "./navbar.css";
import profile from "../../assets/profile.png";
import darkThemeIcon from "../../assets/darkIcon.png";
import menu from "../../assets/menu.png";

function Navbar() {
  return (
    <div className="containerNavbar">
      <nav className="header navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img className="hamburger-icon" src={menu} />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </form>

          <div className="sideNavbar">
            <div className="utilityTools">
              <img src={darkThemeIcon} alt="" />
            </div>
            <img src={profile} alt="profileImage" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

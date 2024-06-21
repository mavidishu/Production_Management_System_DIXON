import React, { useEffect } from "react";
import "./navbar.css";
import profile from "../../assets/profile.png";
import darkThemeIcon from "../../assets/darkIcon.png";
import searchIcon from "../../assets/searchIcon.png";
import menu from "../../assets/menu.png";

function Navbar() {
  return (
    <div className="containerNavbar">
      <nav className="header navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="logoContainer">
            <a className="logo" href="/">Admin Dashboard</a>
            <img className="hamburger-icon" src={menu} />
          </div>
          <form className="d-flex" role="search">
            <input
              className=" inputSearch"
              placeholder="Search"
            />
            <button className="btn searchBtn" type="submit">
              <img src={searchIcon}/>
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

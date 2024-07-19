import React, { useEffect, useState } from "react";
import "./navbar.css";
import profile from "../../assets/profile.png";
import darkThemeIcon from "../../assets/darkIcon.png";
import searchIcon from "../../assets/searchIcon.png";
import menu from "../../assets/menu.png";
import { getProfile } from "../../services/auth.mjs";

function Navbar({toggleSidebar}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if(response.message === "Unauthorized"){
          setUser(false);
        }else{
          setUser(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);
  return (
    <div className="containerNavbar">
      <nav className="header navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="logoContainer">
            <a className="logo" href="/">Dixon Technologies</a>
            <img className="hamburger-icon" draggable={false} src={menu} onClick={toggleSidebar}/>
          </div>
          <form className="d-flex" role="search">
            <input
              className=" inputSearch"
              placeholder="Search"
            />
            <button className="btn searchBtn" type="submit">
              <img draggable={false} src={searchIcon}/>
            </button>
          </form>

          <div className="sideNavbar">
            <div className="utilityTools">
              <a href="#">info@dixontech.com</a>
            </div>
            {/* {console.log(user)} */}
            {user?<a href="http://localhost:5000/logout" className="loginBtn">Logout</a>:<a href="/" className="loginBtn">Login</a>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

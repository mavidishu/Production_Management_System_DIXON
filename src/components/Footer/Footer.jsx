import React from 'react';
import "./footer.css";
// Logos
import twitterLogo from "../../assets/twitter.png";
import linkedinLogo from "../../assets/linkedin.png";

function Footer() {
  return (
    <section id='footer'>
        <div className="footerContainer d-flex">
            <div className="designContainer">
                <p>Website by <span className='author'>Dishu Mavi</span></p>
            </div>
            <div className="infoContainer">
                <p>2021 &copy; Dixon Technologies</p> <span id='seprator'>| </span>
                <p>Dixon Technologies (India) Ltd.</p> <span id='seprator'>| </span>
                <p>B-14 Sec-85 Noida, Uttar Pradesh, India</p> <span id='seprator'>| </span>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={twitterLogo} alt="" style={{height:"17px",width:"17px"}}/>
                    <img src={linkedinLogo} alt="" style={{height:"18px",width:"18px",marginLeft:"5px"}}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;
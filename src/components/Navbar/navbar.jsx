import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../../public/assests/images/logo .png";
import Call from "../../../public/assests/images/2.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [hide, setHide] = useState(false);

  function handle() {
    setHide(!hide);
    console.log(hide);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <div className="nav_img">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="loading">
            <svg width="64px" height="48px">
              <polyline
                points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                id="back"
              ></polyline>
              <polyline
                points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                id="front"
              ></polyline>
            </svg>
          </div>
        </div>

        <div className={`list ${hide && "show"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skill">Skills</Link>
            </li>
            <li>
              <Link to="/clients">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li className="li_last">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>

        <div className="btnnav">
          <button className="btn">
            <img src={Call} alt="Image" className="call_icon" />  <Link to="/contact">Contact Me</Link>
          </button>
        </div>

        <div className="icons" id="icons" onClick={handle}>
        <div className="line" id="line"></div>
        <div className="line" id="line"></div>
        <div className="line" id="line"></div>
        </div>
      </nav>

      <div className={`overlay ${hide && "show"}`} id="overlay" onClick={handle}></div>
    </div>
  );
}

export default Navbar;

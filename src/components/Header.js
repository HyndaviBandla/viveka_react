import React from "react";
import "./Header.css";
import logo from "./school-logo.png";
import classLogo from "./class.jpg";
const Header = () => {
  return (
    <>
      <header id="header">
        <nav>
          <div className="navbar">
            <img src={logo} alt="" />
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="bi bi-list"></i>
            </label>
            <ul className="menu">
              <li>
                <a href="#">
                  HOME <span className="bi bi-caret-down-fill"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#sec1">Campus</a>
                  </li>
                  <li>
                    <a href="#sec2">Who we are</a>
                  </li>
                  <li>
                    <a href="#sec3">Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  ACADEMICS <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#sec1">Pre primary</a>
                  </li>
                  <li>
                    <a href="#sec2">Primary</a>
                  </li>
                  <li>
                    <a href="#sec3">Senior secondary</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  CO-CURRICULUM <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#sec1">ECA</a>
                  </li>
                  <li>
                    <a href="#sec2">Sport</a>
                  </li>
                  <li>
                    <a href="#sec3"> Events</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  ABOUT US <i class="bi bi-caret-down-fill"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="">Mission-vision</a>
                  </li>
                  <li>
                    <a href="">Faculty</a>
                  </li>
                  <li>
                    <a href="">Facilities</a>
                  </li>
                  <li>
                    <a href="">Achievments</a>
                  </li>
                </ul>
              </li>{" "}
              <li>
                <a href="#">
                  ADMISSIONS <i class="bi bi-caret-down-fill"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="">Admission process</a>
                  </li>
                  <li>
                    <a href="">Enroll now</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  LOGIN <i class="bi bi-caret-down-fill"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="">Parent login</a>
                  </li>
                  <li>
                    <a href="">Staff login</a>
                  </li>
                </ul>
              </li>{" "}
              <li>
                <a href="#">
                  VIVEKA CAMPUSES <i class="bi bi-caret-down-fill"></i>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="">VIVEKA foster school Tenali</a>
                  </li>
                  <li>
                    <a href="">VIVEKA ponnur</a>
                  </li>
                  <li>
                    <a href="">VIVEKA foster school BAPATLA</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <img style={{ width: "100vw" }} src={classLogo} alt="" srcSet="" />
    </>
  );
};

export default Header;

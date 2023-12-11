import React from "react";
import "./Footer.css";
// In your JavaScript/React file
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer>
      <img src="school-logo.png" alt="" />
      <div>
        <h3>LOCATION</h3>
        <p>GBC Rd, Ponnur, Andhra Pradesh 522124</p>
        <br />
        <div>
          <a
            href="https://goo.gl/maps/nS8rhsURF1hgZjWx9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Get Direction</h3>
            <i style={{ fontSize: "30px" }} className="bi bi-signpost-fill"></i>
          </a>
        </div>
      </div>
      <div>
        <h3>FOR ADMISSION</h3>
        <p>+91 XXXXXXXXXX</p>
        <br />
        <h3>CORPORATE OFFICE</h3>
        <p>+91 XXXXXXXXXX</p>
        <h3>HELPDESK</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="bi bi-whatsapp"></i>
          <p>+91 XXXXXXXXXX</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "max-content",
        }}
      >
        <h3>CONNECT AND SHARE</h3>
        <a
          href="https://www.facebook.com/viveka.ponnur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ fontSize: "60px" }} className="bi bi-facebook"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

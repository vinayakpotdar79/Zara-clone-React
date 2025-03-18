import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-options">
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Shop at ZARA.com</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Exchanges & Returns</a></li>
            <li><a href="#">Shops & Company</a></li>
            <li><a href="#">Clothes Collection Programme</a></li>
            <li><a href="#">My Account</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <ul>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Offices</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Work with Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>POLICIES</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Purchase Conditions</a></li>
            <li><a href="#">Cookies Settings</a></li>
          </ul>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-left">
          <p>INDIA</p>
        </div>
        <div className="footer-right">
          <p>ENGLISH</p>
          <p className="reserved">© ALL RIGHTS RESERVED</p>
        </div>
      </div>

      <p className="manufacturer-info">
        NAME AND ADDRESS OF THE MANUFACTURER:<br />
        INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)<br />
        AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/Logo.png";
import instgram from "../../assets/instgram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";

import "./style.css";
import Button from "../Button";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-1">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
              <p>Golden View Dine</p>
            </div>
            <p className="footer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin
            </p>
            <div className="footer-social">
              <img src={instgram} alt="instgram" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>

          <div>
            <p className="footer-title">Other Links</p>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
              <li>Blogs</li>
              <li>our team</li>
              <li>Our kitchen</li>
            </ul>
          </div>
          <div>
            <p className="footer-title">Contact Us</p>
            <p className="footer-contact-us-item">
              <img src={email} alt="email" /> Gogreendineservice@gmail.com
            </p>
            <p className="footer-contact-us-item">
              <img src={location} alt="location" /> AZ complex bylane3 Mandari
              Rd Mumbai 1100867
            </p>
            <p className="footer-contact-us-item">
              <img src={phone} alt="phone" /> +1800 287 256
            </p>
          </div>
        </div>

        <div className="subs">
          <p>
            <img src={email} alt="email" /> Subscribe to our Newsletter
          </p>
          <input type={"email"} placeholder="Your Email Id" />
          <Button content="Subscribe" properties="footerBtn"  />
        </div>

        <div className="copyright">
          <p>Copyright © 2022 Golden Dine website</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

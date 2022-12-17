import React from "react";
import Button from "../Button";
import logo from "../../assets/Logo.png";
import "./style.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="topnav">
          <li>
            <a href="#Icon">
              <img className="nav-logo" src={logo} alt="img" />
            </a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Special">Special</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Blogs">Blogs</a>
          </li>

          <li>
            <a href="#search">search</a>
          </li>

          <li className="right">
            <a href="#about">
              <Button properties="navBtn" content="Book Now" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

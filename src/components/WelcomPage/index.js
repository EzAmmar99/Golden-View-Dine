import React from "react";
import NavBar from "../NavBar";
import bg from "../../assets/background.png";
import "./style.css";
import Button from "../Button";

class WelcomPage extends React.Component {
  render() {
    return (
      <div className="welcome-bg">
        <img className="bg-img" src={bg} alt="img" />
        <NavBar />
        <span className="welcome-stat">
          <h1>Welcome To Golden View Dine </h1>
          <h3>
            Explore the authentic vegan dishes with your friends and family
          </h3>
          <Button properties="none" content="Read more"></Button>
        </span>
      </div>
    );
  }
}

export default WelcomPage;

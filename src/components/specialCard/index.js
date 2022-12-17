import React from "react";
import test from "../../assets/chef.png";
import "./style.css";
class SpecialCard extends React.Component {
  render() {
    const { img, title, description } = this.props;

    return (
      <div className="cards-section">
        <div className="card">
          <img src={img} alt="img" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default SpecialCard;

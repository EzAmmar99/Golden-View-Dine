import React from "react";
import "./style.css";

class StatisticsCard extends React.Component {
  render() {
    const { image, number, title } = this.props;

    return (
      <div className="statistics">
        <div className="statistics-img">
          <img src={image} alt="img" />
        </div>
        <div className="statistics-num">
          <h3>{number}</h3>
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default StatisticsCard;

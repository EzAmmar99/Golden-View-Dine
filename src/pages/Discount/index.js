import React from "react";
import discount from "../../assets/discount.png";
import Button from "../../components/Button";
import "./style.css";

class Discount extends React.Component {
  render() {
    return (
      <div className="discount">
        <div>
          <img src={discount} alt="img" />
        </div>
        <div className="discount-content">
          <p className="discount-content-title">
            Come join us for a lunch this weekend and enjoy
          </p>
          <p className="discount-content-sale">FLAT 10% OFF</p>
          <Button content="Book Table" properties="discount" />
        </div>
        <div className="discount-image">
          <img src={discount} alt="img" />
        </div>
      </div>
    );
  }
}

export default Discount;

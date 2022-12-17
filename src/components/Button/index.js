import React from "react";
import "./style.css";

class Button extends React.Component {
  render() {
    const { content, properties } = this.props;
    return (
      <div>
        <button
          className={
            properties === "none"
              ? "none"
              : properties === "navBtn"
              ? "navBtn"
              : properties === "discount"
              ? "discountBtn"
              : properties === "blogsBtn"
              ? "blogsBtn"
              : properties === "footerBtn"
              ? "footerBtn"
              : ""
          }
        >
          {content}
        </button>
      </div>
    );
  }
}

export default Button;

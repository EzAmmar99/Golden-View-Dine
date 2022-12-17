import React from "react";
import "./style.css";
class Container extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="container">{children}</div>;
  }
}

export default Container;

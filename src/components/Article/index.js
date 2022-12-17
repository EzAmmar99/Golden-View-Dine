import React from "react";
import Button from "../Button";
import "./style.css";

class Article extends React.Component {
  render() {
    const { title, subTitle, content, image } = this.props;

    return (
      <div className="article-style">
        <div className="content">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <p>{content}</p>
          <Button content="Read more" properties="none" />
        </div>
        <div>
          <img src={image} alt="img" />
        </div>
      </div>
    );
  }
}

export default Article;

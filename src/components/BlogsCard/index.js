import React from "react";
import Button from "../Button";

class BlogsCard extends React.Component {
  render() {
    const { content, title, image, order } = this.props;

    return (
      <div className="blogs-card">
        <img src={image} alt="" style={{ order: order }} />
        <div className="card-content">
          <h4>{title}</h4>
          <p>{content}</p>
          <Button content="Read more" properties="blogsBtn" />
        </div>
      </div>
    );
  }
}

export default BlogsCard;

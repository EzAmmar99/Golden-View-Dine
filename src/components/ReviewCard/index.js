import React from "react";

class ReviewCard extends React.Component {
  render() {
    const { name, content, avatar } = this.props;

    return (
      <div className="review-card">
        <div className="review-card__header">
          <img className="avatar" src={avatar} alt="img" />
          <div>
            <h4>{name}</h4>
            <p>{"⭐".repeat(5)}</p>
          </div>
        </div>
        <p className="review">{content}</p>
      </div>
    );
  }
}

export default ReviewCard;

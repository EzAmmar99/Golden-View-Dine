import React from "react";
import avatar from "../../assets/avatar.png";
import ReviewCard from "../../components/ReviewCard";

import "./style.css";

class Review extends React.Component {
  render() {
    return (
      <div className="reviews">
        <h2 className="title" style={{ textAlign: "center" }}>
          Reviews
        </h2>
        <p className="sub-title" style={{ textAlign: "center" }}>
          words from our food lovers
        </p>

        <div className="reviews__container">
          <ReviewCard
            name="Alex andrina"
            avatar={avatar}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit"
          />
          <ReviewCard
            name="Alex andrina"
            avatar={avatar}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit"
          />
          <ReviewCard
            name="Alex andrina"
            avatar={avatar}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit"
          />
        </div>
      </div>
    );
  }
}

export default Review;

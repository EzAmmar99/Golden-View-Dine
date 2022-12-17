import React from "react";
import BlogImg from "../../assets/blogsImg.png";
import BlogsCard from "../../components/BlogsCard";

import "./style.css";

class Blogs extends React.Component {
  render() {
    return (
      <div className="blogs">
        <h2 className="title" style={{ textAlign: "center" }}>
          Blogs
        </h2>
        <p className="sub-title" style={{ textAlign: "center" }}>
          words from our food lovers
        </p>

        <div className="grid-with-three-columns">
          <BlogsCard
            order="-1"
            image={BlogImg}
            title="Cooking Dining Experience"
            content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin"
          />
          <BlogsCard
            order="2"
            image={BlogImg}
            title="Cooking Dining Experience"
            content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin"
          />
          <BlogsCard
            order="-1"
            image={BlogImg}
            title="Cooking Dining Experience"
            content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin"
          />
        </div>
      </div>
    );
  }
}

export default Blogs;

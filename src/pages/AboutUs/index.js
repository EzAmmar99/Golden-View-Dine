import React from "react";
import about from "../../assets/about.png";
import "./style.css";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>About Us</h2>
          <h3>
            Discover The Taste Of Worldclass Vegan Dishes From The Kitchen Of Go
            Green Dine
          </h3>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At
            Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar
            Orci, Egestas Eget Nulla Duis At Iaculis Nunc, Elit. Nibh Auctor
            Purus Nunc Tellus Pellentesque Nibh Mattis. Malesuada Integer
            Consectetur. Imperdiet Aliquam Quam Mauris Semper Suscipit. Molestie
            Maecenas Interdum Pharetra Id Velit Sed Nec.Tetur Sit Sagittis
            Pretium Eget Vitae Semper Pellentesque Pellentesque
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />

          <button>Read more</button>
        </div>
        <div className="image">
          <img src={about} alt="....." />
        </div>
      </div>
    );
  }
}

export default AboutUs;

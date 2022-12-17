import React from "react";
import SpecialCard from "../../components/specialCard";
import orange from "../../assets/orange-juice.png";
import chef from "../../assets/chef.png";
import restaurant from "../../assets/restaurant.png";

import "./style.css";
class Special extends React.Component {
  render() {
    return (
      <div className="special">
        <h2>Special</h2>
        <h3>What makes us special</h3>
        <span className="card-style">
          <SpecialCard
            img={orange}
            title="Fresh food"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
            mattis cras."
          />

          <SpecialCard
            img={chef}
            title="skilled Chef"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
            mattis cras."
          />

          <SpecialCard
            img={restaurant}
            title="Exotic dishes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
            mattis cras."
          />
        </span>
      </div>
    );
  }
}

export default Special;

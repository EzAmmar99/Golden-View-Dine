import React from "react";
import StatisticsCard from "../../components/StatisticsCard";
import team from "../../assets/team.png";
import dish from "../../assets/dish.png";
import chefSta from "../../assets/chefSta.png";

class Statistics extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "rgba(16, 20, 24, 0.7)",
          padding: "2% 0px",
        }}
      >
        <StatisticsCard image={dish} number="250+" title="Delicacy" />
        <StatisticsCard image={chefSta} number="10+" title="renowed chefs" />
        <StatisticsCard image={team} number="30+" title="Members" />
      </div>
    );
  }
}

export default Statistics;

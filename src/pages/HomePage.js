import React from "react";
import WelcomPage from "../components/WelcomPage";
import Special from "./Special";
import Article from "../components/Article";
import Discount from "./Discount";
import Statistics from "./Statistics";
import Menu from "./Menu";
import Review from "./Review";
import Blogs from "./Blogs";
import about from "../assets/about.png";
import Cooking from "../assets/Cooking.png";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <WelcomPage />

      <Article
        title="About Us"
        subTitle="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
        image={about}
      />

      <Special />

      <Menu />

      <Discount />

      <Article
        title="Cooking ingredients"
        subTitle="What goes in"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
        image={Cooking}
      />

      <Statistics />

      <Review />

      <Blogs />

      <Footer />
    </>
  );
}

export default HomePage;

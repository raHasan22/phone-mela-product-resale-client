import React from "react";
import Banner from "../Banner/Banner";
import Catagories from "./Catagories/Catagories";
import Offers from "./ourOffers/Offers";
import Sell from "./Sell/Sell";
import Benefits from "../Benefits/Benefits";
import Stats from "./Stats/Stats";
import ContactUs from "./ContactUs/ContactUs";
import OtherFacilities from "./OtherFacilities/OtherFacilities";
import BestDiscount from "./BestDiscount/BestDiscount";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <BestDiscount></BestDiscount>
      <Offers></Offers>
      <Catagories></Catagories>
      <Benefits></Benefits>
      <Sell></Sell>
      <OtherFacilities></OtherFacilities>
      <section id="contact">
        <ContactUs></ContactUs>
      </section>
      <Review></Review>
    </div>
  );
};

export default Home;

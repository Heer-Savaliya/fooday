import React from "react";
import LandPage from "../components/UI/HomeUi/LandPage.jsx";
import Discover from "../components/UI/HomeUi/Discover.jsx";
import DailySpecial from "../components/UI/HomeUi/DailySpecial.jsx";
import OurMenu from "../components/UI/HomeUi/OurMenu.jsx";
import Testimonial from "../components/UI/HomeUi/Testimonial.jsx";
import Chefs from "../components/UI/HomeUi/Chefs.jsx";
import Reservation from "../components/UI/HomeUi/Reservation.jsx";
import Service from "../components/UI/HomeUi/Service.jsx";
import FoodGallery from "../components/UI/HomeUi/FoodGallery.jsx";
import FeaturedBlog from "../components/UI/HomeUi/FeaturedBlog.jsx";
import ScrollToTop from "../components/UI/ScrollToTop.jsx";

const Home = () => {
  return (
    <>
      <LandPage />
      <Discover />
      <DailySpecial />
      <OurMenu />
      <Testimonial />
      <Chefs />
      <Reservation />
      <Service />
      <FoodGallery />
      <FeaturedBlog />
      <ScrollToTop />
    </>
  );
};

export default Home;

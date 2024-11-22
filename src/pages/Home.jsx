/* eslint-disable no-unused-vars */

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cta2 from "../components/Cta_2";
import DiscountItem from "../components/DiscountItem";
import HowItWorks from "../components/HowItWorks";
import PopularItems from "../components/PopularItems";
import FeaturedRestraunt from "../components/FeaturedRestraunt";
import Slider from "../components/Slider";
import Cta_1 from "../components/Cta_1";
import Cards from "../components/Cards";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <DiscountItem />
      <HowItWorks />
      <PopularItems />
      <FeaturedRestraunt />
      <Slider />
      <Cta_1/>
      <Cards />
      <Cta2 />
      <Footer />
    </>
  );
}

export default Home;

// src/pages/HomePage.jsx
import Carousel from "../components/home/Carousel";
import Newsletter from "../components/layout/Newsletter";
import HomeSection from "../components/home/HomeSection";
import NewArrivals from "../components/home/NewArrivals";
import Features from "../components/home/Features";
import ShopSection from "../components/home/ShopSection";
import Articles from "../components/home/Articles";

function HomePage() {
  return (
    <>
      <main>
        <Carousel />
        <HomeSection />
        <NewArrivals />
        <Features />
        <ShopSection />
        <Articles />
        <Newsletter />
      </main>
    </>
  );
}

export default HomePage;
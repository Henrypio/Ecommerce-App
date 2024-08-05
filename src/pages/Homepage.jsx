import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import FlashSales from "../Sections/FlashSales";
import Categories from "../Sections/Categories";
import HeroSection from "../Sections/HeroSection";
import BestProduct from "../Sections/BestProduct";
import Offer from "../Sections/Offer";
import Product from "../Sections/Product";
import NewArrival from "../Sections/NewArrival";
import Service from "../Sections/Service";

const Homepage = () => {
  return (
    <div className="  ">
      <Header wishlist={true} cart={true} account={true} />

      <div className="w-screen px-24 sm:px-8 md:px-12 xs:px-6  ">
        <HeroSection />
        <FlashSales />
        <Categories />
        <BestProduct />
        <Offer />
        <Product />
        <NewArrival />
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

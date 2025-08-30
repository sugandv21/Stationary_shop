import React, { useState, useEffect } from "react";
import Banner from '../components/Banner'
import StationerySection from '../components/StationerySection'
import ProductCategories from '../components/ProductCategories'
import Trending from '../components/Trending'
import Testimonial from "../components/Testimonial";
import TeamSection from "../components/TeamSection";
import BackToSchool from "../components/BackToSchool";
import FeaturedProduct from "../components/FeaturedProduct";

export default function Home() {
   useEffect(() => {
          document.title = "Supplyhive | Home"
        }, []); 

  return (
     <div className=""> 
     <Banner />
     <StationerySection />
     <ProductCategories />
     <FeaturedProduct />
     <Trending />
     <Testimonial />
     <BackToSchool />
     <TeamSection />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import SchoolTools from "../components/SchoolTools";
import PenPencil from "../components/PenPencil";
import AllStationery from "../components/AllStationery";
import TeamSection from "../components/TeamSection";
import Bag from "../components/bag";
import banner from "../assets/images/about_banner.jpg";

export default function About() {
  useEffect(() => {
    document.title = "Supplyhive | About Us"; 
  }, []); 

  return (
      <div className="min-h-screen ">
             <div className="mx-auto max-w-7xl px-4 py-8">
                     <div className="rounded-2xl overflow-hidden">
                       <img
                         src={banner}
                         alt="Contact banner"
                         className="w-full h-48 md:h-[500px]"
                       />
                     </div>
             
             <h2 className="text-center mt-16 text-lg md:text-3xl font-semibold">
               "Smart Supplies for Bright Futures"
             </h2>
           </div>
        <SchoolTools />
        <PenPencil />
        <Bag /> 
        <AllStationery />
        <TeamSection />
    </div>
  );
}

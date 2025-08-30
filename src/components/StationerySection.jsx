import React from "react";
import img1 from "../assets/images/essential-stationary1.jpg"; 
import img2 from "../assets/images/essential-stationary2.jpg";
import img3 from "../assets/images/essential-stationary3.jpg";

export default function StationerySection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
          Essential Stationery, Exceptional Supply
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-lg">
          From pens to paper, we deliver quality tools that power classrooms, offices, and creativity.
          <br />
          Bulk pricing, reliable service, and everything your workspace needs—right at your fingertips.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={img1}
            alt="Stationery 1"
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={img2}
            alt="Stationery 2"
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={img3}
            alt="Stationery 3"
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import customerImg from "../assets/images/customer.jpg"; 

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-6 ">
      <h2 className="text-xl md:text-3xl  font-bold mb-2">Customer Testimonial</h2>
      <p className="text-md md:text-lg  mb-6">
        Bulk Stationery. Better Prices. <br /> Smarter Supply.
      </p>

      <img
        src={customerImg}
        alt="Customer"
        className="w-20 h-20 rounded-full object-cover shadow-md mb-6"
      />

      <p className="max-w-5xl text-lg md:text-2xl mb-6">
        "Working with SupplyHive has been a game-changer for my store. The
        quality of the stationery is consistently high, prices are competitive,
        and orders always arrive on time—making it easy to keep my shelves
        stocked and customers happy."
      </p>

      <h3 className="font-bold text-xl md:text-2xl ">Priya M</h3>
      <p className="text-md md:text-lg ">Retail shop Owner</p>
    </div>
  );
};

export default Testimonial;

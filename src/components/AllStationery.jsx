import React from "react";
import penNote from "../assets/images/writing-essentials.png";   
import sticky from "../assets/images/sticky_notes.png";  
import stapler from "../assets/images/stapler.jpg";     

const AllStationery = () => {
  return (
    <section className="py-6 px-6 md:px-10"> 
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">ALL STATIONERY</h2>
        <p className="mb-4 text-sm md:text-lg max-w-7xl">
          We offer a wide range of stationery essentials, from notebooks, folders,
          and sticky notes to markers, staplers, and rulers. Each item is chosen
          for quality, functionality, and style—perfect for school, office, or
          creative use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
 
          <div className="flex justify-center">
            <img
              src={penNote}
              alt="Pen and Notebook"
              className="w-72 md:w-[500px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-4"> 
            <img
              src={sticky}
              alt="Sticky Note"
              className="w-40 md:w-[320px] object-contain"
            />
            <img
              src={stapler}
              alt="Stapler"
              className="w-52 md:w-[360px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllStationery;

import React from "react";
import redSet from "../assets/images/diary.jpg";
import notebook from "../assets/images/dairy_pen.jpg";
import planner from "../assets/images/notepad.jpg";

const SchoolTools = () => {
  const items = [
    { img: redSet, alt: "Red stationery set" },
    { img: notebook, alt: "Open notebook with pens" },
    { img: planner, alt: "Planner with pen and heart clip" },
  ];

  return (
    <section className="py-12 px-6 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Tools for School, Fuel for Success
      </h2>

      <p className="max-w-3xl mx-auto mb-10 text-md md:text-lg">
        We provide quality stationery and school supplies to support learning,
        creativity, and organization. From classrooms to home desks, we’re here
        to help students and educators stay prepared and inspired.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolTools;

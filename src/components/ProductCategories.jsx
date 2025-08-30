import React from "react";
import noteImg from "../assets/images/writing-essentials.png";

export default function ProductCategories() {
  return (
    <section className="w-full px-4 pb-6 mt-24 md:-mt-20 lg:mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        <div className="flex flex-col justify-center p-6 h-[750px] ">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            1. Writing Essentials
          </h3>
          <p className="text-lg md:text-xl mb-4">
            From everyday ballpoint pens to premium gel pens and highlighters, our writing tools ensure clarity,
            comfort, and reliability. Perfect for classrooms, offices, or creative spaces, these essentials are built
            to support productivity and expression at every level.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            2. Paper Products
          </h3>
          <p className="text-lg md:text-xl mb-4">
            Whether it’s notebooks, notepads, printer paper, or sticky notes, our paper supplies cover every need.
            Designed for durability and smooth performance, these products are ideal for note-taking, organizing,
            printing, or planning in any setting.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            3. Classroom & Office Tools
          </h3>
          <p className="text-lg md:text-xl">
            Keep workspaces equipped and efficient with rulers, staplers, scissors, erasers, and more. These tools
            bring order and precision to daily tasks, making them indispensable in both educational and professional
            environments.
          </p>
        </div>

        <div className="flex justify-center items-center h-[350px] md:h-[550px] lg:h-[650px] mt-10 md:-mt-48 lg:-mt-10">
          <img
            src={noteImg}
            alt="Writing Essentials"
            className="w-[250px] md:w-[450px] lg:w-[580px] h-[300px] md:h-[550px] lg:h-[650px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

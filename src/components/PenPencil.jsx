import React from "react";
import pens from "../assets/images/pen_kit.jpg";   
import pencils from "../assets/images/color_pencil.jpg"; 

const PenPencil = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">PEN & PENCIL</h2>

        <p className="mb-8 text-md md:text-lg max-w-7xl">
          At Supplyhive, we believe a great pen is more than just a writing tool—
          it’s an expression of thought, precision, and personality. From smooth
          everyday ballpoints to elegant signature pens, we offer reliable
          writing instruments designed for comfort, style, and performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={pens}
              alt="Different types of pens"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src={pencils}
              alt="Colored pencils"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenPencil;

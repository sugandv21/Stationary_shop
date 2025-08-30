import React from "react";
import bag1 from "../assets/images/bag1.png";   
import bag2 from "../assets/images/bag2.png"; 

const Bag = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bags</h2>

        <p className="mb-10 text-md md:text-lg max-w-7xl">
          Our sSchool and Office bags combine durability, comfort and smart design to keep you organized on the go
 whetehr for class or the workplace, they're built to carry what matters most-safely and in style. </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={bag1}
              alt="Different types of pens"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src={bag2}
              alt="Colored pencils"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bag;

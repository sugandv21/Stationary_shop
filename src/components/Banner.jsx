import React from "react";
import bannerImg1 from "../assets/images/banner_img1.jpg";
import bannerImg2 from "../assets/images/banner_img2.jpg";
import bannerBag from "../assets/images/banner_img_bag.png";

export default function Banner() {
  return (
   <div className="relative w-full max-w-[1350px] lg:h-[500px] mx-auto bg-white flex flex-col lg:block items-center justify-center p-4 mb-20">
  
      <p className="lg:absolute lg:top-[50px] lg:left-[10px] text-lg md:text-xl lg:text-3xl font-medium text-black text-center lg:text-left leading-relaxed mb-4 lg:mb-0">
        "Your Partner in Paper and Beyond."
      </p>

      <img
        src={bannerImg1}
        alt="Paper Products"
        className="w-[250px] md:w-[600px] lg:w-[440px] h-[200px] md:h-[300px] lg:h-auto object-cover rounded-md shadow-md mb-4 lg:absolute lg:top-[150px] lg:left-0"
      />

      <div className="bg-[#f43333] px-6 md:px-12 py-2 rounded-xl text-lg md:text-xl lg:text-2xl font-semibold text-center leading-tight mb-4 lg:absolute lg:top-[100px] lg:left-[550px]">
        Upto 50% off on <br /> Bulk Order
      </div>

      <div className="flex justify-center lg:absolute lg:top-[150px] lg:left-[340px] z-50 mb-4 lg:mb-0">
        <img
          src={bannerBag}
          alt="Bag"
          className="inline-block w-[200px] md:w-[300px] lg:w-[400px] h-auto"
        />
        <img
          src={bannerBag}
          alt="Bag"
          className="inline-block w-[200px] md:w-[300px] lg:w-[400px] h-auto -ml-[60px] md:-ml-[100px] lg:-ml-[120px]"
        />
      </div>

      <img
        src={bannerImg2}
        alt="Stationery"
        className="w-[250px] md:w-[600px] lg:w-[440px] h-[200px] md:h-[300px] lg:h-auto object-cover rounded-md shadow-md mb-4 lg:mb-0 lg:absolute lg:top-[20px] lg:right-2"
      />

      <p className="text-lg md:text-xl lg:text-3xl font-medium text-black text-center lg:text-left leading-relaxed lg:absolute lg:bottom-[40px] lg:left-[580px]">
        "Quality Supplies. Delivered in Bulk."
      </p>
    </div>
  );
}

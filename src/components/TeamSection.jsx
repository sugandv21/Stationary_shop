import React from "react";
import team1 from "../assets/images/shop_owner.jpg"; 
import team2 from "../assets/images/manager.jpg";
import team3 from "../assets/images/shop_keeper.jpg";

const teamMembers = [
  { name: "Seth Rollins", role: "Shop Owner", image: team1 },
  { name: "Seth Rollins", role: "Manager", image: team2 },
  { name: "Seth Rollins", role: "Shop Keeper", image: team3 },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Team</h2>
        <p className="text-gray-700 text-base md:text-lg">
          Our team is a dedicated group of professionals passionate about
          delivering quality stationery in bulk with efficiency and care. With
          expertise in sourcing, logistics, and customer service, we ensure
          every order meets the highest standards.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden text-center p-6 hover:shadow-2xl"
          >
           <img
  src={member.image}
  alt={member.name}
  className="w-full h-64 object-cover rounded-xl mb-4 transition-shadow drop-shadow-[8px_8px_12px_rgba(0,0,0,0.25)]"
/>

            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

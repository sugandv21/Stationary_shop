import React, {useEffect} from "react";
import team1 from "../assets/images/shop_owner.jpg"; 
import team2 from "../assets/images/manager.jpg";
import team3 from "../assets/images/shop_keeper.jpg";

const teamMembers = [
  { name: "Seth Rollins", role: "Shop Owner", image: team1 },
  { name: "Seth Rollins", role: "Manager", image: team2 },
  { name: "Seth Rollins", role: "Shop Keeper", image: team3 },
];

const Teams = () => {
    useEffect(() => {
              document.title = "Supplyhive | Our Teams";
            }, []); 
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#097afa] mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Our team is a dedicated group of professionals passionate about
          delivering quality stationery with efficiency and care. With expertise
          in sourcing, logistics, and customer service, we ensure every order
          meets the highest standards.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden text-center p-6 hover:shadow-2xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;

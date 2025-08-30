import React, {useEffect} from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  { city: "Coimbatore", address: "123 Stationery Street, Coimbatore", path: "/coimbatore" },
  { city: "Bengaluru", address: "456 Pencil Lane, Bengaluru", path: "/bengaluru" },
  { city: "Chennai", address: "789 Notebook Rd, Chennai", path: "/chennai" },
  { city: "Kolkata", address: "101 Pen Avenue, Kolkata", path: "/kolkata" },
];

const Locations = () => {
     useEffect(() => {
            document.title = "Supplyhive | Locations"
          }, []); 
  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Store Locations</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {locations.map((loc, index) => (
          <Link
            to={loc.path}
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition"
          >
            <MapPin className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h2 className="font-semibold text-lg">{loc.city}</h2>
              <p className="text-gray-600">{loc.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Locations;

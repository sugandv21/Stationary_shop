import React, { useState, useEffect} from "react";
import phone from "../assets/images/phone.jpg";
import map from "../assets/images/map.jpg";
import mail from "../assets/images/mail.png";
import call from "../assets/images/call.webp";
import location from "../assets/images/location.png";

export default function ContactPage() {
   useEffect(() => {
          document.title = "Supplyhive | Contact Us";
        }, []); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setSubmitMessage("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage("Please enter a valid email.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(phone)) {
      setSubmitMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitMessage("Form submitted successfully!");
    console.log("Form Data:", formData);

    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <div className="min-h-screen mt-2">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={phone}
            alt="Contact banner"
            className="w-full h-48 md:h-[500px]"
          />
        </div>

        <p className="mt-6 text-center text-xl md:text-2xl text-gray-800">
          "Your Perfect Stationery Partner Is Just a Message Away."
        </p>

        <div className="mt-6 rounded-xl border border-blue-200 bg-[#D3DFF8] px-4 py-4">
          <h3 className="text-center text-md md:text-xl font-medium text-gray-800 mb-4">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 gap-28 sm:grid-cols-3">
            <div className="rounded-xl bg-[#097AFA] p-4 text-black">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
                <img src={location} alt="Location" className="h-full w-full object-cover" />
              </div>
              <div className="text-center text-base md:text-lg">
                <div className="font-semibold mb-1">Location</div>
                <p>789 Beechwood Ave,</p>
                <p>Sarasota, FL 34231</p>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-[#097AFA] p-4 text-black">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
                <img src={mail} alt="Email" className="h-full w-full object-cover" />
              </div>
              <div className="text-center text-base md:text-lg">
                <div className="font-semibold mb-1">E-mail</div>
                <p>example@gmail.com</p>
                <p>debra.holt@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl bg-[#097AFA] p-4 text-black">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
                <img src={call} alt="Phone" className="h-full w-full object-cover" />
              </div>
              <div className="text-center text-base md:text-lg">
                <div className="font-semibold mb-1">Contact</div>
                <p>079457286332</p>
                <p>016457896333</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-6 rounded-2xl overflow-hidden">
          <img
            src={map}
            alt="Our locations map"
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="mt-6 rounded-2xl border border-black bg-white shadow-sm">
          <h4 className="text-center text-lg font-bold">
            Have a List? We’ve Got the Stationery—Contact Us Now!
          </h4>
          <p className="text-center text-lg text-black my-6">Write Us</p>
          <p className="text-center text-lg w-full text-black">
            We are always happy to be of service; be sure to listen to the prompt to
            help direct to the right person.
          </p>

           <form
      className="mt-8 space-y-6 flex flex-col justify-center"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 place-items-center sm:grid-cols-2">
        {[
          { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
          { label: "Email", name: "email", type: "email", placeholder: "Email ID" },
          { label: "Phone Number", name: "phone", type: "tel", placeholder: "Phone Number" },
          { label: "Message", name: "message", type: "text", placeholder: "Message" },
        ].map((field) => (
          <label key={field.name} className="w-full max-w-xs text-start">
            <span className="mb-2 block text-lg font-medium text-gray-800">
              {field.label}
            </span>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium text-gray-900 placeholder-black text-center outline-none border border-black focus:ring-2 focus:ring-blue-400"
            />
          </label>
        ))}
      </div>

      {/* Submit */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          className="mt-2 mb-2 rounded-xl cursor-pointer bg-[#097AFA] px-8 py-1 text-black text-sm font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Send Message
        </button>
        {submitMessage && (
          <p className="mt-2 text-center text-sm font-medium text-red-600">
            {submitMessage}
          </p>
        )}
      </div>
    </form>
        </div>
      </div>
    </div>
  );
}

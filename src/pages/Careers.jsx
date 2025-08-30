import React, {useEffect} from "react";

const Careers = () => {
    useEffect(() => {
      document.title = "Supplyhive | Careers"; 
    }, []); 
  const jobs = [
    {
      title: "Sales Executive",
      location: "Chennai, India",
      type: "Full-time",
      description:
        "Drive B2B and retail sales, build client relationships, and meet monthly sales targets.",
    },
    {
      title: "Inventory Manager",
      location: "Remote / Chennai",
      type: "Full-time",
      description:
        "Oversee stock levels, manage vendors, and ensure smooth supply chain operations.",
    },
    {
      title: "Marketing Associate",
      location: "Chennai, India",
      type: "Internship",
      description:
        "Assist in running social media campaigns, promotions, and brand awareness activities.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-[#097afa] mb-8">
          Careers at SupplyHive
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Join the <span className="font-semibold text-[#097afa]">SupplyHive</span> 
          team and help us redefine stationery and office solutions. 
          We are looking for passionate and talented individuals to grow with us.
        </p>

        {/* Job Openings */}
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <a
                href="/"
                className="inline-block bg-[#097afa] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Didn’t find a role that fits?
          </h2>
          <p className="text-gray-600 mb-6">
            We’re always on the lookout for new talent. Share your resume with us.
          </p>
          <a
            href="/contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-900 transition"
          >
            Send Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Careers;

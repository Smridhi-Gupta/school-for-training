import React from "react";

const HomeHero = () => {
  return (
    <section className="relative bg-gray-100 text-gray-800 px-40 h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Placeholder (Grey Box for now) */}
        <div className="bg-gray-300 w-full h-80 md:h-[500px] rounded-lg shadow-md flex items-center justify-center"></div>

        {/* Right Side - Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Upgrade Your Skills <br /> with{" "}
            <span className="text-gray-600">TransTech Academy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of learners who trusted us to build their future. Get
            hands-on training, professional certification, and job-ready skills
            designed for today’s competitive IT industry.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 transition px-6 py-3 rounded-md font-semibold text-white">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

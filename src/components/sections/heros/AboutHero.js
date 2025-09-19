import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-gray-100 text-gray-800 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transfotech Academy <br />{" "}
            <span className="text-gray-600">We build professionals</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Transfotech Academy in New York City and Los Angeles is a certified
            training institute. We try to give people the knowledge and skills
            they need to succeed in today’s evolving world.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Accelerate your career with Transfotech, a professional IT training
            institute and empower your excellence in IT.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 transition px-6 py-3 rounded-md font-semibold text-white">
            Book an Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-full h-96 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-gray-700">Image Placeholder</span>
          </div>
          {/* ✅ Later replace with: 
          <img src="/about-hero.jpg" alt="About Transfotech Academy" className="w-full h-96 object-cover rounded-lg shadow-md" />
          */}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

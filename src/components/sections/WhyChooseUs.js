"use client";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 space-y-12">\
          {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 text-sm uppercase">More reasons to choose us</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Live Instructor-Led and Online Classes for Flexible Learning
        </h2>
      </div>
      {/* Section 1: Text Right, Image Left */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Left: Image Placeholder */}
        <div className="w-full md:w-2/5 bg-gray-400 rounded-2xl flex items-center justify-center">
          <span className="text-gray-700 font-medium">Image Placeholder</span>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-3/5 bg-gray-100  p-8 rounded-2xl flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Live Instructor-Led Learning in New York City
          </h3>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Experience hands-on learning with our Live Instructor-Led Classroom
            in New York, offering expert guidance in fields like Full Stack QA
            Engineering, Data Analytics, Business Analysis, Cyber Security and
            more. Our interactive sessions and real-time feedback will equip you
            with the skills needed to succeed in today’s competitive job market.
            Join us for an immersive learning experience designed to advance
            your career.
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-5 py-2 w-50 rounded-lg transition">
            Contact Now
          </button>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Left: Text Content */}
        <div className="w-full md:w-3/5 bg-gray-100 p-8 rounded-2xl flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Live Instructor-Led Online Classes: Learn from Anywhere
          </h3>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Join our Live Instructor-Led Online Classes and gain expert
            instruction in fields like Full Stack QA Engineering, Data
            Analytics, Business Analysis, and Cyber Security. With real-time
            feedback and interactive sessions, you’ll receive practical,
            career-focused education from anywhere in the world—all from the
            comfort of your home. Elevate your skills and career opportunities
            with flexible, online learning.
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-5 py-2 w-60 rounded-lg transition">
            Book an Appointment
          </button>
        </div>

        {/* Right: Image Placeholder */}
        <div className="w-full md:w-2/5 bg-gray-400 rounded-2xl flex items-center justify-center">
          <span className="text-gray-700 font-medium">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

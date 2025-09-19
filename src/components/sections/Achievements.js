"use client";
import React from "react";

const achievements = [
  {
    number: "3000+",
    label: "Satisfied Students",
  },
  {
    number: "10000+",
    label: "Hours Completed",
  },
  {
    number: "1245+",
    label: "Live Assignments",
  },
  {
    number: "225+",
    label: "Projects Done",
  },
];

const Achievements = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 text-sm uppercase">Transfotech Academy</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Achievements
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl hover:scale-105 
                       transform transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              {item.number}
            </h3>
            <p className="text-gray-600 mt-2 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

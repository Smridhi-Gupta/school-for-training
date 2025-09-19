"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const instructors = [
  {
    name: "Dr. Ayesha Khan",
    qualification: "PhD in Computer Science",
    experience: "10+ Years Experience",
    rating: 5,
    description:
      "Expert in Artificial Intelligence and Machine Learning with a decade of teaching and research experience.",
  },
  {
    name: "Mr. Raj Mehta",
    qualification: "M.Tech in Software Engineering",
    experience: "8+ Years Experience",
    rating: 4,
    description:
      "Specializes in Full Stack Development and has guided several successful industry projects.",
  },
  {
    name: "Ms. Riya Sharma",
    qualification: "MSc in Data Science",
    experience: "6+ Years Experience",
    rating: 4,
    description:
      "Focused on Data Analytics and Big Data, with hands-on expertise in real-world applications.",
  },
];

const Instructors = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm uppercase">Our Instructors</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Meet Our Experienced Instructors
        </h2>
      </div>

      {/* Flip Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {instructors.map((inst, idx) => (
          <div key={idx} className="group perspective">
            <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* Front Side */}
              <div className="absolute inset-0 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center backface-hidden p-6">
                {/* Grey circular placeholder */}
                <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {inst.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {inst.qualification}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-gray-800 text-white shadow-lg rounded-xl p-6 rotate-y-180 backface-hidden flex flex-col justify-center items-center">
                <p className="text-sm mb-2">{inst.experience}</p>

                {/* Rating */}
                <div className="flex justify-center mb-3">
                  {Array.from({ length: inst.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - inst.rating }).map((_, i) => (
                    <FaStar key={i} className="text-gray-500" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 text-center">
                  {inst.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Instructors;

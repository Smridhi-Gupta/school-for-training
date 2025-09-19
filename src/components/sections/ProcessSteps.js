import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Career Counseling",
    desc: "Meet experienced career advisors to discuss goals, create personalized roadmaps, and receive ongoing support.",
  },
  {
    id: 2,
    title: "Enrollment",
    desc: "Enroll online, sign agreements, and gain access to lectures, lab practices, and LMS study materials.",
  },
  {
    id: 3,
    title: "Lectures & Lab",
    desc: "Instructor-led classes with fixed schedules, blending pre-class content and live sessions twice a week.",
  },
  {
    id: 4,
    title: "Internship",
    desc: "Hands-on 2–4 week internship with real software teams, collaborating with mid-sized companies.",
  },
  {
    id: 5,
    title: "Interview Preparation",
    desc: "Resume coaches help bypass AI screening, highlight key skills, and prepare for technical interviews.",
  },
  {
    id: 6,
    title: "Job Marketing",
    desc: "Resume marketing and job placement support with 100+ staffing partners to guide your job search.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-40">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Features / Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Our Unique Six-Step Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A structured roadmap designed to guide you from the very beginning
            of your journey to a successful career.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                <CheckCircle size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

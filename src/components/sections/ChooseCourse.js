import React from "react";

const courses = [
  {
    id: 1,
    title: "Full Stack QA Engineering",
    weeks: "16 Weeks",
    desc: "Master QA methodologies, automation frameworks, and end-to-end testing practices with real-world projects.",
  },
  {
    id: 2,
    title: "Cybersecurity Engineering",
    weeks: "20 Weeks",
    desc: "Learn network security, ethical hacking, and defense mechanisms to protect organizations from cyber threats.",
  },
  {
    id: 3,
    title: "Business & Data Analytics: Integrated With AI",
    weeks: "18 Weeks",
    desc: "Analyze and visualize data using AI tools, drive insights, and help businesses make data-driven decisions.",
  },
  {
    id: 4,
    title: "Introduction To AI",
    weeks: "12 Weeks",
    desc: "Get started with Artificial Intelligence concepts, hands-on machine learning projects, and AI applications.",
  },
  {
    id: 5,
    title: "Basic Computer Training",
    weeks: "12 Weeks",
    desc: "Learn essential computer skills, MS Office, and internet basics to build a strong digital foundation.",
  },
];

const ChooseCourse = () => {
  return (
    <section className="bg-gray-50 py-16 px-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            IT Training
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Choose Your Course
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            In today’s digital age, IT skills are in high demand and play a
            crucial role in many industries. Learning IT-related courses can
            open up new job opportunities and career paths.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="space-y-16">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Gray Image Placeholder */}
              <div className="w-full h-56 bg-gray-300 rounded-lg shadow-md border border-gray-200"></div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {course.weeks}
                </p>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <button className="bg-gray-800 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 transition">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCourse;

import React from "react";
import { workExperienceData } from "../data";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Work Experience</h2>
        <div className="relative">
          <div className="border-2 border-gray-300 absolute h-full border-r-0 left-1/2 transform -translate-x-1/2"></div>
          {workExperienceData.map((experience, index) => (
            <div
              key={experience.id}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow relative ${
                index !== 0 ? "mt-8" : ""
              }`}
            >
              <h3 className="text-green-500 text-xl font-semibold">{experience.title}</h3>
              <h4 className="text-gray-600">{experience.company}</h4>
              <p className="mt-2 text-gray-600">{experience.duration}</p>
              <p className="mt-4 text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;



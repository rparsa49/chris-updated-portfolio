import React from "react";
import { coursesData } from "../data";

const Courses = () => {
  return (
    <section id="courses" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Course Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow relative"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <div className="absolute top-2 right-2 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-white text-sm">{course.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

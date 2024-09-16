import React from "react";
import { volunteeringData } from "../data";

const Volunteering = () => {
  return (
    <section id="volunteering" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Volunteering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteeringData.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-green-500 text-xl font-semibold">{volunteer.title}</h3>
              <p className="text-gray-600 mb-2">{volunteer.position}</p>
              <p className="text-gray-600 mb-2">{volunteer.duration}</p>
              <p className="text-gray-600">{volunteer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;

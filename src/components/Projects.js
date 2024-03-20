import React from "react";
import { projects } from "../data";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{project.subtitle}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
                >
                  <FaGithub className="mr-2" size={20} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

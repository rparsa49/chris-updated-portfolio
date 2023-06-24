import React from "react";
import ProjectCarousel from './ProjectsCarousel';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-semibold text-center mb-8">
            My Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
          <div className="h-12" />
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}
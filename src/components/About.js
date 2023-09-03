import React from "react";
import headshot from "./headshot.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-gray-800">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-8">
        <div className="text-5xl font-bold text-center mb-6">
          <h1 className="font-extrabold text-transparent text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 p-4">
            Hey, I'm Chris.
          </h1>
          <h3 className="font-extrabold text-transparent text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 p-4">
            I'm a Computer Engineering Junior at SBU.
          </h3>
        </div>
        <div className="w-full">
          <div className="mockup-code m-10">
            <pre data-prefix="$">
              <code>who is chris</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>
                An aspiring single board computer, 
              </code>
              <pre data-prefix="">
                <code>
                  systems, and
                computer/motherboard designer.
                </code>
              </pre>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Intern experience in the defense industry.</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>
                Passion for motherboard board level repair 
              </code>
            </pre>
            <pre data-prefix="" className="text-warning">
              <code>
                and debugging,
                commercial AV systems, 
              </code>
            </pre>
            <pre data-prefix="" className="text-warning">
              <code>
                and enthusiast Macintosh hobbies.
              </code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Scroll down to see some more about me!</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-8">
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src={headshot}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-white text-2xl">
          Scroll down
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mt-2 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;

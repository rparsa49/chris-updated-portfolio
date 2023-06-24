import React from "react";

const workExperienceData = [
  {
    id: 1,
    title: "Test Engineer Intern",
    company: "North Atlantic Industries",
    duration: "June 2023 - Present",
    description:
      "As a new employee in this internship, my role involves working with the Software Engineering Team to develop test programs that verify the functional operations of NAI products. I utilize my circuit analysis skills to test and debug products to component level. Additionally, I implement test procedures and work with engineers to learn how to use necessary test equipment. I also assist the Production team in diagnosing and repairing failed production items. General requirements for this internship are being in an engineering degree, having working knowledge of electronic circuits, skills with reading data sheets and component specifications, familiarity with general-purpose test equipment, such as oscilloscopes, DMMs, and power sources. Knowledge of programming languages, such as C, C++, and C# were also very valued. Other desired skills and abilities required for this internship are good oral and written communication skills, strong analytical and problem-solving skills, self-motivation, and a high degree of curiosity and desire to learn new things. The job specifically takes those who can 'take initiative and multi-task within a fast-paced environment'.",
  },
  {
    id: 2,
    title: "Media Systems Engineer",
    company: "DOiT",
    duration: "August 2022 - Present",
    description:
      "Our job with CES MSE had us managing and up-keeping ALL of the university classrooms through maintenance, refurbishing and preventive checks. The tools we used allowed us to see equipment status, and administrative online interfaces. Interfaced with ticketing and servicing platforms used to track known issues. Collaborated within company meetings of 10+ members to improve quality of data logging. Initiated changes proposed led to a 30% increased amount of testing. Wording of each test was reworked. Employed Google Suite, company chats, and video calls to constantly update supervisors on status of rooms/ disrepair/ brainstorming fixes. Our position gave us an incredible amount of digital tools, training, access to coworkers ( who were experts in their fields ), and independence when it came to classroom monitoring, fixing, and troubleshooting. We were used for both data collection, and sentinel work which the head engineers did not have the time for. It gave me a great sense of purpose and drive to know I was fixing and keeping the universities’ most valuable assets up and running for the benefit of the students, faculty, and staff. Knowing everyday I am enabling better, more efficient and easy learning all while using my talents to best benefit others around me.",
  },
  {
    id: 3,
    title: "Freelance Macbook Repair",
    company: "Self Employed",
    duration: "August 2021 - Present",
    description: "In college so far I have completed various repairs / maintenance on personal computers all over campus. Battery replacements, repasting components, cable replacements, heat sink replacements, and full disassembly for display replacements. MacBook repair and computer tinkering has always been a large passion of mine and i've turned it into a side business."
  }
];

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



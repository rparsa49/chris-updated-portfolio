import React from "react";

const volunteeringData = [
  {
    id: 1,
    title: "Probationary Volunteer Fire Fighting",
    description:
      "For the past 2 years I have been in the early stages of training with my local fire department, Atlantic Hook & Ladder Company No.1 Port Washington New York. I initially learned the ropes around the engine house in regards to the tools, learning terminology, etc. Once sworn in I began immediately responding to local motor-vehicle/residential fire emergencies, assisting with clean up efforts, midnight fire detector alarms, and numerous unattended smoky kitchens. Now in my second year I have passed through Nassau County Fire Service Academy's Essentials training, which has prepared me for an even more difficult training during the upcoming summer. I enjoy giving my body and time to the fire service, knowing I am giving back to the community which has enabled and cradled me since I was little.",
  },
  {
    id: 2,
    title:
      "Scouting's National Honor Society Order of the Arrow - 3 Year County Treasurer",
    description:
      "Being involved as an experienced Eagle Scout in Theodore Roosevelt council, I have been able to give back to the Scouting community as a whole. I was elected for the position of Treasurer for the County Wide Honor Society. Throughout my 3 years in this volunteer role (for the Scouting community), I had helped facilitate financial negotiations, planning of our community service, hosted events, enhanced our record keeping, reestablished faith and trust from the scouting membership in the Treasury, increased transparency and communication, created training documents, and engineered a Queue and Submission System for budget proposals and reimbursements. All of this work was done in order to make America's youth in scouting have an easier time within their honor society and to make our program more conflict-free for the benefit of the membership and county as a whole.",
  },
];

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

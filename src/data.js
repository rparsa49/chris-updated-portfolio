export const projects = [
  {
    title: "SIMD PROCESSOR DESIGN PROJECT",
    subtitle: "VHDL, CAD",
    description:
      "Junior year VHDL hardware description language + modern CAD tool project of the structural and behavioral design of a four-stage pipelined multimedia unit with a reduced set of multimedia instructions similar to those in the Sony Cell SPU and Intel SSE architectures.",
    image: process.env.PUBLIC_URL + "/SMID.jpeg",
    link: "https://github.com/CypherVault/ESE-345-PMU-PROJECT",
  },
  {
    title: "Lidar-Guided Automated Driving Project",
    subtitle: "C, PetaLinux, XILINX SDK 20127.2, Tera Term",
    description:
      "The primary objective was to explore its potential in autonomous driving systems, a domain currently gaining considerable attention. Leveraging available modules specialized in data handling and power generation, the project aimed to achieve feasible and autonomous operations.",
    image: process.env.PUBLIC_URL + "/75ARM1_conduction_cooled.png",
    link: "https://github.com/CypherVault/NAI-75ARM1-SelfNavigationProgram",
  },
  {
    title: "CMOS 45nm D-FlipFlop",
    subtitle: "VSLI, Cadence",
    description:
      "Built and Simulated a CMOS 45nm D-FlipFlop, Based on the free 45nmPDK Library Suite from Cadence. Dissimilation an optimization of NMOS and PMOS sizing for cleaner signal, symmetrica fallrise and delay.",
    image: process.env.PUBLIC_URL + "/project2.png",
    link: "https://rparsa49.github.io/chris-portfolio/DFF%20Report.pdf",
  },
  {
    title: "Library Management System",
    subtitle: "C, C++",
    description:
      "Project required the creation of a C++ program to run a digital library. Users must login with valid credentials, and are able to borrow, return, renew, and search for books within the library database. Teacher logins are able to remove books from the library, and request new books to be added to the database. This project stretched the limit of what our group could implement given our tools. However by using complex data structures, verification programs, loop based flows, and object oriented programming, we implemented all required functions of the project assignment.",
    image: process.env.PUBLIC_URL + "/project3.png",
    link: "https://github.com/goonmandu/sbu_fall2022_ese224/tree/main/projects",
  },
  {
    title: "AI Maze Solver",
    subtitle: "C",
    description:
      "Ai which can traverse a “matrix” based maze, with the goal of determining a rule of where higher point values are stored: Low level AI reasoning was achieved within C.",
    image: process.env.PUBLIC_URL + "/project1.png",
    link: "https://github.com/CypherVault/ESE124_Lab-HW_Docs",
  },
];

export const coursesData = [
  {
    id: 1,
    title: "ESE 124",
    description:
      "This course presented advanced C programming concepts. Lectures discussed the C language constructs. The course also introduces fundamental concepts in computer engineering, such as bitwise operations, text file scanning, stack-based computation, table-based finite state machine implementation, hash tables, and linked lists. Lab assignments saw us abstracting, implementing, debugging, and testing C programs which utilized the ideas from lecture in different and more difficult ways.",
    grade: "B+",
  },
  {
    id: 2,
    title: "ESE 224",
    description:
      "This course so far has presented lessons in fundamental data structures and algorithms frequently used in engineering applications. Object oriented programming in C++ is employed heavily in a wide range of applications. Our topics so far have included: programming and applications of data structures; stacks, queues, and lists. Recursive programming has been a necessity for this course. The final project had us create a terminal based library management system, with password authentication, a central database, a borrow and return system, and a time dependent due date system.",
    grade: "A",
  },
  {
    id: 3,
    title: "ESE 280",
    description:
      "This course has us currently in charge of all of the design of microcontroller-based electronic systems. We’ve had to familiarize ourselves with topics of system level architecture, microcontrollers, memory, direct memory addressing, configuration of ports, peripheral ICs, and interrupt all in AVR assembly language programming within MicroChip Studio. We must take hardware and software into account when deciding on trade-offs and simplicity in needed system functions. The hardware and software designing phases are intertwined and take separate critical skill sets. Laboratory work involves design, implementation, debugging, simulation, and verification of microcontroller systems.",
    grade: "B+",
  },
  {
    id: 4,
    title: "ESE 118",
    description:
      "This class discussed standard combinational modules, arithmetic circuits, latches and flip-flops, standard sequential modules, memory, combinational and sequential PLDs and their applications, and design of system controllers. We covered a large amount of implementation in schematics, and began work in Cadence’s OrCad platform, which served as a digital system stimulus/simulation/layout planning tool in our laboratory sections. This class cemented the thought in my mind that I had a passion for the hardware design of computers. This course gave me a massive amount of confidence in the building of circuits and left me seeing computers in a different light. This course describes the integrated circuit design process. Main topics included CMOS processing technology, VLSI design methodologies, and MOS digital circuit analysis/history. Integrated circuits were introduced throughout the course using VLSI design tools (CADENCE). I now have a much clearer understanding of the physical implementation of all the chips and logic components utilized in other classes, and have a further appreciation for the intricate designs at play for the simplest of circuits. I have experienced typical low level VLSI design/production flow.",
    grade: "B+",
  },
  {
    id: 5,
    title: "ESE 555",
    description:
      "An Advanced VLSI Design Course. This course describes the integrated circuit design process. Main topics included CMOS processing technology, VLSI design methodologies, and MOS digital circuit analysis/history. Integrated circuits were introduced throughout the course using VLSI design tools (CADENCE). I now have a much clearer understanding of the physical implementation of all the chips and logic components utilized in other classes, and have a further appreciation for the intricate designs at play for the simplest of circuits. I have experienced typical low level VLSI design/production flow. Built and Simulated a CMOS 45nm D-FlipFlop, Based on the free 45nmPDK Library Suite from Cadence.      Dissimilation an optimization of NMOS and PMOS sizing for cleaner signal, symmetrica fallrise and delay.",
    grade: "AU",
  },
  {
    id: 6,
    title: "ESE 382",
    description:
      "This course covered the design and implementation of digital systems using VHDL and programmable logic devices (CPLDs and FPGAs). We learned about design methodology, VHDL syntax, entities, architectures, test benches [ exhaustive, self-checking, nonexhaustive, and user stimulated with real-time debugging ], subprograms, packages, and libraries. Also, the course covered the architecture and internal characteristics of PLDs and FPGAs. In the laboratory, students will apply these concepts by writing VHDL descriptions and test benches, compiling and stimulating designs, and programming CPLDs or FPGAs for bench testing with the synthesized and functional JED config file. By the end of the course, students will have developed practical skills in digital system design and implementation. Laboratory tasks and exam entity designs were presented in a customer order / technical requirement fashion, further leading to my engrossment/enjoyment of the class. This class has been one of the most impactful classes I've ever taken, and was genuinely fun to problem solve, work with different architectures, and create digital machines which were deployed out into the world (in the form of antique and obsolete FPGAs on lab benches).",
    grade: "B+",
  },
  {
    id: 7,
    title: "ESE 272",
    description:
      "In this nonlinear electronics class, we delved into the foundations of circuit design, focusing on the architecture of a modern electronics system interfacing with sensors, function generators, high-performance oscilloscopes, and DC / AC power supplies. We explored the modeling of non-linear devices, such as diode and MOS transistors, and their fundamental properties for designing analog (amplification) and digital (switching) IC circuits within the program LTSPICE. We also delved into the ideal and non-ideal models of operational amplifiers, feedback, and stability concepts. Additionally, we explored a range of signal conditioning circuits, including fixed-gain, difference, and instrumentation amplifiers, active filters, signal shaping circuits (e.g. rectifier, clipper, peak detector), oscillators, sample and hold circuits, data converters, digital signal processing platforms, and radios. This course both demystified electricity and the building block components of both logic circuits and appliances/machinery, while also raising more questions than I had before. However, the context and science presented in this class only made the small-scale details and physics behind electrical engineering courses more impressive in my eyes.",
    grade: "✔",
  },
  {
    id: 8,
    title: "ESE 305",
    description:
      "This course provides an introduction to signals and systems, covering the manipulation of simple analog and digital signals. Students will learn about the relationship between frequencies of analog signals and their sampled sequences, as well as concepts of linearity, time-invariance, and causality in systems. The course also covers topics such as convolution, FIR and IIR digital filters, differential and difference equations, Laplace transform, Z-transform, Fourier series, Fourier transform, stability, frequency response, and filtering. This foundational course is essential for subsequent courses in control, communication, electronics, and digital signal processing.",
    grade: "C+",
  },
  {
    id: 9,
    title: "ESE 345",
    description:
      "This course focuses on the fundamental techniques of designing and evaluating modern computer architectures and tradeoffs present at the hardware/software boundary. The emphasis is on instruction set design, processor design, memory and parallel processing. Students were required to complete a Hardware Description Language project and design a 4-Stage Multimedia Unit Pipelined Processor.",
    grade: "B+",
  },
  {
    id: 10,
    title: "ESE 323",
    description:
      "In the course students were required to design, fabricate, and test a prototype device using a custom made circuit board, surface mount components, and a 3D printed enclosure. Topics include printed circuit design, active and passive component selection, design for testability, solid modeling, and 3D printing. Labs included practicing surface mount component soldering techniques, electrical limits of trace design, reflow ovens, and other various motherboard design concepts.",
    grade: "IP",
  },
];

export const volunteeringData = [
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

export const workExperienceData = [
  {
    id: 1,
    title: "Test Engineer Intern",
    company: "North Atlantic Industries",
    duration: "June 2023 - December 2023",
    description:
      "As an employee in the Test Engineering team, my role involved working with the Software Engineering Team to improve/develop working test programs that verify the functional operations of NAI products. Most of the working day required my circuit analysis skills to test and debug products at the component level. Additionally, I implemented test procedures and worked with engineers to learn how to use necessary test equipment. I also assisted the Production team in diagnosing and repairing failed production items, as well as bringing boards up to functioning order through firmware and software flashing at the chip level. Most recently my role changed to a single board computer troubleshooting role, searching for and isolating systemic issues with high failure rate products, and with the collaboration of multiple teams we formulated a flowchart for finding issues, developed tools to debug malfunctioning boards, and overall improved product throughput. General requirements for this internship are being in an engineering degree, having working knowledge of electronic circuits, skills with reading data sheets and component specifications, familiarity with general-purpose test equipment, such as oscilloscopes, DMMs, and power sources, as well as knowledge of programming languages, such as C, C++. Other desired skills and abilities required for this internship are good oral and written communication skills, strong analytical and problem-solving skills, self-motivation, and a high degree of curiosity and desire to learn new things. The job specifically takes those who can 'take initiative and multi-task within a fast-paced environment'.",
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
    description:
      "In college so far I have completed various repairs / maintenance on personal computers all over campus. Battery replacements, repasting components, cable replacements, heat sink replacements, and full disassembly for display replacements. MacBook repair and computer tinkering has always been a large passion of mine and i've turned it into a side business.",
  },
];
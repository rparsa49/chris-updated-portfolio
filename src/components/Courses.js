import React from "react";

const coursesData = [
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
      "This course focused on the fundamental techniques of designing and evaluating modern computer architectures and tradeoffs present at the hardware/software boundary. The emphasis is on instruction set design, processor design, memory and parallel processing. Students will undertake a design project using a hardware description language and modern CAD tools.",
    grade: "IP",
  },
  {
    id: 10,
    title: "ESE 323",
    description:
      "ESE 323 was a prototyping course which introduced students to modern circuit prototyping techniques and packaging. Students will demonstrate these techniques by building and testing a microcontroller-based project utilizing surface mounted components on a student-designed circuit board. This class used Auto Desk Fusion 360 as our main design interface.",
    grade: "IP"
    },
];

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

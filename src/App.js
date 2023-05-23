import React from 'react';
import About from './components/About';
import Courses from './components/Courses';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import WorkExperience from './components/WorkExperience';

export default function App(){
    return(
    <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Courses />
        <Volunteering />
        <WorkExperience />
        </main>  
    );
}
import React from 'react';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import WorkExperience from './components/WorkExperience';
import Credit from "./components/Credits";
import Popup from "./components/Popup";

export default function App(){
    return(
    <main className="text-gray-400 bg-gray-900 body-font">
        <Popup />
        <About />
        <Courses />
        <WorkExperience />
        <Volunteering />
        <Projects />
        <Credit />
        </main>  
    );
}
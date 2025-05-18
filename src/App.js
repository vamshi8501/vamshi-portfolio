import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ResumeDownload from './components/ResumeDownload';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <ResumeDownload />
            <Contact />
          </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

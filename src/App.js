import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>서장호 ©2025</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import MatrixRain from './components/MatrixRain';
import Hero from './components/Hero';
import Documents from './components/Documents';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="matrix-bg-container">
        <MatrixRain />
      </div>
      <Hero />
      <Documents />
      <Education />
      <Experience />
      <Projects />
      <Philosophy />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;

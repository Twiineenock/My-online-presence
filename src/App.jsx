import React, { useEffect } from 'react';
import './App.css';
import MatrixRain from './components/MatrixRain';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

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

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="scanlines"></div>
      <div className="vignette"></div>
      <MatrixRain />
      <Hero />
      <About />
      <Experience />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;

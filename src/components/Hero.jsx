import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
      <div className="fade-in is-visible" style={{ flex: 1 }}>
        <div className="badge" style={{ marginBottom: '2rem' }}>
          <span className="dot"></span>
          AVAILABLE FOR SELECT PROJECTS
        </div>

        <h1 className="section-title">
          Engineering <br />
          <span className="text-purple" style={{ fontStyle: 'italic' }}>Excellence</span> Into <br />
          Scalable <span className="text-gradient">Startups.</span>
        </h1>

        <p className="section-subtitle" style={{ marginBottom: '3rem', fontSize: '1.25rem' }}>
          Founder of Twiinex. A multi-disciplinary developer specializing in bridging trust between social media sellers and buyers through decentralized protocols.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#projects" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            Explore Twiinex <ChevronRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="fade-in is-visible" style={{ flex: '0 0 auto', position: 'relative' }}>
        <div style={{ 
          width: '350px', 
          height: '350px', 
          borderRadius: '50%', 
          border: '2px solid var(--neon-purple)', 
          padding: '10px',
          boxShadow: 'var(--purple-glow)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img 
            src={profilePic} 
            alt="Twiine Enock" 
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '50%', 
              objectFit: 'cover',
              filter: 'grayscale(0.2) contrast(1.1)'
            }} 
          />
        </div>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '60px', height: '60px', borderRight: '2px solid var(--neon-green)', borderTop: '2px solid var(--neon-green)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '60px', height: '60px', borderLeft: '2px solid var(--neon-green)', borderBottom: '2px solid var(--neon-green)' }}></div>
      </div>
    </section>
  );
};

export default Hero;

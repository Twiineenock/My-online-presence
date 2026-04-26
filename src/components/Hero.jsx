import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ alignItems: 'center', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '4rem', maxWidth: '800px', width: '100%' }}>
        <h1 className="glitch-text" data-text="TWIINE ENOCK" style={{ fontSize: '4.5rem', marginBottom: '0.5rem', color: '#fff' }}>
          TWIINE ENOCK
        </h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--matrix-green)', opacity: 0.9 }}>
          Software Engineer
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Full Stack Developer | React & Java/Node.js | Open Source Contributor
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#about">
            <button className="btn-primary">Initialize Sequence</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

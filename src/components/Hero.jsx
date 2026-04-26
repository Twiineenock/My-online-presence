import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ alignItems: 'center', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '5rem 4rem', maxWidth: '900px', width: '100%', borderTop: '2px solid var(--matrix-green)' }}>
        <div className="widget-content">
          <h1 className="glitch-text" data-text="TWIINE ENOCK" style={{ fontSize: '5rem', marginBottom: '1rem', color: '#fff', letterSpacing: '8px' }}>
            TWIINE ENOCK
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--matrix-green)', opacity: 1, letterSpacing: '4px' }}>
            &gt; SOFTWARE ENGINEER_
          </h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            Full Stack Developer | <span className="text-highlight">React</span> & <span className="text-highlight">Java/Node.js</span> | Open Source Contributor @ <span className="text-highlight">OpenMRS</span>
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#about">
              <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Initialize Sequence</button>
            </a>
            <a href="#contact">
              <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>Establish Connection</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

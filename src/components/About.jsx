import React from 'react';

const About = () => {
  return (
    <section id="about" className="fade-in-section">
      <h2 className="section-title">System.About()</h2>
      <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem' }}>
        <div className="widget-content">
          <h3 className="widget-title">&gt; Education Profile</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            I am currently pursuing a Bachelor's degree in <span className="text-highlight">Software Engineering</span> at 
            <span className="text-highlight"> Bugema University (Main Campus)</span>.
          </p>
          <p>
            My academic journey is heavily focused on understanding core computer science principles, software architecture, and modern web technologies. I thrive in building scalable systems and crafting intuitive user interfaces.
          </p>
        </div>
        <div className="widget-content">
          <h3 className="widget-title">&gt; Tech Stack</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: 'var(--matrix-green)', fontWeight: 'bold' }}>[Frontend]</span> 
              <span style={{ color: 'var(--text-secondary)' }}>React.js, HTML5, CSS3, JavaScript</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: 'var(--matrix-green)', fontWeight: 'bold' }}>[Backend]</span> 
              <span style={{ color: 'var(--text-secondary)' }}>Java, Spring Boot, Node.js, Express</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: 'var(--matrix-green)', fontWeight: 'bold' }}>[Database]</span> 
              <span style={{ color: 'var(--text-secondary)' }}>SQL, MongoDB</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: 'var(--matrix-green)', fontWeight: 'bold' }}>[Tools]</span> 
              <span style={{ color: 'var(--text-secondary)' }}>Git, Docker, RESTful APIs</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

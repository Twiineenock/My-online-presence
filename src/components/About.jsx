import React from 'react';

const About = () => {
  return (
    <section id="about" className="fade-in-section">
      <h2 className="section-title">System.About()</h2>
      <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--matrix-green)' }}>&gt; Education Profile</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            I am currently pursuing a Bachelor's degree in <strong style={{ color: '#fff' }}>Software Engineering</strong> at 
            <strong style={{ color: '#fff' }}> Bugema University (Main Campus)</strong>.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            My academic journey is heavily focused on understanding core computer science principles, software architecture, and modern web technologies. I thrive in building scalable systems and crafting intuitive user interfaces.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--matrix-green)' }}>&gt; Tech Stack</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--matrix-green)' }}>[Frontend]</span> React.js, HTML5, CSS3, JavaScript
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--matrix-green)' }}>[Backend]</span> Java, Spring Boot, Node.js, Express
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--matrix-green)' }}>[Database]</span> SQL, MongoDB
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--matrix-green)' }}>[Tools]</span> Git, Docker, RESTful APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

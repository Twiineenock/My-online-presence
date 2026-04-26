import React from 'react';
import { Terminal, UserCircle, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="fade-in-section" style={{ minHeight: '60vh' }}>
      <h2 className="section-title">System.Connect()</h2>
      <div className="glass-panel" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Incoming transmission... Ready to collaborate on innovative projects.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
          <a href="https://github.com/Twiineenock" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={32} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/twiine-enock-264b6b280/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <UserCircle size={32} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:twiineenockfox@gmail.com" className="contact-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={32} />
            <span>Email</span>
          </a>
        </div>
      </div>
      <footer style={{ marginTop: 'auto', paddingTop: '4rem', textAlign: 'center', color: 'var(--matrix-dark-green)', fontSize: '0.8rem' }}>
        <p>&copy; 2024 PORTFOLIO_V1.0. ALL RIGHTS RESERVED. BUGEMA UNIVERSITY.</p>
      </footer>
    </section>
  );
};

export default Contact;

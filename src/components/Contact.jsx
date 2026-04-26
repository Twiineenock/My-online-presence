import React from 'react';
import { Terminal, UserCircle, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="fade-in-section" style={{ minHeight: '60vh' }}>
      <h2 className="section-title">System.Connect()</h2>
      <div className="glass-panel" style={{ textAlign: 'center' }}>
        <div className="widget-content">
          <p style={{ marginBottom: '3rem', fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
            Incoming transmission... Ready to <span className="text-highlight">collaborate</span> on innovative projects.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/Twiineenock" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.3s ease' }}>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(0, 255, 0, 0.05)', border: '1px solid var(--glass-border)' }}>
                <Terminal size={32} color="var(--matrix-green)" />
              </div>
              <span style={{ fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/twiine-enock-264b6b280/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.3s ease' }}>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(0, 255, 0, 0.05)', border: '1px solid var(--glass-border)' }}>
                <UserCircle size={32} color="var(--matrix-green)" />
              </div>
              <span style={{ fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>LinkedIn</span>
            </a>
            <a href="mailto:twiineenockfox@gmail.com" className="contact-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.3s ease' }}>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(0, 255, 0, 0.05)', border: '1px solid var(--glass-border)' }}>
                <Mail size={32} color="var(--matrix-green)" />
              </div>
              <span style={{ fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>Email</span>
            </a>
          </div>
        </div>
      </div>
      <footer style={{ marginTop: 'auto', paddingTop: '4rem', textAlign: 'center', color: 'var(--matrix-dark-green)', fontSize: '0.8rem' }}>
        <p>&copy; 2024 PORTFOLIO_V1.0. ALL RIGHTS RESERVED. BUGEMA UNIVERSITY.</p>
      </footer>
    </section>
  );
};

export default Contact;

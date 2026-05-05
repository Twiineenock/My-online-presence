import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Docs', href: '#docs' },
    { name: 'Edu', href: '#education' },
    { name: 'Work', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--neon-purple)', color: '#000', padding: '4px 8px', borderRadius: '4px', fontWeight: '800', fontSize: '0.9rem' }}>TE</div>
          <span className="mono" style={{ color: 'var(--neon-purple)', fontWeight: '700' }}>TWIINE/ENOCK</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="nav-item">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Terminal size={20} className="text-purple" />
          <a href="#contact" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

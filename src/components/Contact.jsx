import React from 'react';
import { Mail, Globe, User, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      label: 'EMAIL',
      value: 'twiineenockfox@gmail.com',
      icon: <Mail size={20} />,
      href: 'mailto:twiineenockfox@gmail.com',
    },
    {
      label: 'PHONE',
      value: '+256771250497',
      icon: <Phone size={20} />,
      href: 'tel:+256771250497',
    },
    {
      label: 'GITHUB',
      value: 'github.com/Twiineenock',
      icon: <Globe size={20} />,
      href: 'https://github.com/Twiineenock',
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/twiine-enock',
      icon: <User size={20} />,
      href: 'https://www.linkedin.com/in/twiine-enock-264b6b280/',
    },
  ];

  return (
    <section id="contact" className="fade-in" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <div className="section-label">
          <MessageSquare size={18} className="text-purple" />
          <span className="mono text-purple">06 // CONNECTION_GATEWAY</span>
        </div>
        <h2 className="section-title">
          Initialize <span className="text-purple">Contact</span>
        </h2>
      </div>

      <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Let's Build Something <span className="text-gradient">Extraordinary</span></h3>
        <p className="text-dim" style={{ fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          Available for collaborations, mentorship, or discussing the future of decentralized commerce. 
          Reach out through any of the channels below.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.href} 
              target={contact.label !== 'EMAIL' && contact.label !== 'PHONE' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="glass-panel contact-card" 
              style={{ 
                padding: '2rem', 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div className="text-purple" style={{ marginBottom: '0.5rem' }}>{contact.icon}</div>
              <div className="mono text-dim" style={{ fontSize: '0.7rem' }}>{contact.label}</div>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', wordBreak: 'break-all' }}>{contact.value}</div>
              <ArrowUpRight size={14} className="text-dim" style={{ marginTop: 'auto' }} />
            </a>
          ))}
        </div>

        <div style={{ marginTop: '6rem', opacity: '0.3' }}>
          <div className="mono" style={{ fontSize: '0.7rem' }}>© 2024 TWIINE ENOCK // ALL_RIGHTS_RESERVED</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

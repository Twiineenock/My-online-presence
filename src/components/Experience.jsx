import React from 'react';
import { Briefcase, ExternalLink, Award } from 'lucide-react';
import openmrsLogo from '../assets/OpenMRS-logo-transparent-1.webp';
import hieroLogo from '../assets/hiero-logo.png';
import gsocCert from '../assets/gsoc-certificate.pdf';

const Experience = () => {
  const experiences = [
    {
      title: 'GSoC Contributor',
      company: 'OpenMRS',
      logo: openmrsLogo,
      period: '2024',
      desc: 'Collaborated with the OpenMRS community to enhance medical record systems, focusing on full-stack development and improving the developer experience within the ecosystem.',
      tags: ['REACT', 'JAVA', 'OPEN SOURCE'],
    },
    {
      title: 'Hiero Contributor',
      company: 'Hiero Community',
      logo: hieroLogo,
      period: 'PRESENT',
      desc: 'Contributing to the Hiero project, focusing on distributed ledger technologies and enterprise-grade tools for the Hedera network.',
      tags: ['DLT', 'HEDERA', 'BLOCKCHAIN'],
    },
  ];

  return (
    <section id="experience" className="fade-in">
      <div className="section-header">
        <div className="section-label">
          <Briefcase size={18} className="text-purple" />
          <span className="mono text-purple">02 // PROFESSIONAL_HISTORY</span>
        </div>
        <h2 className="section-title">
          Experience <span className="text-dim">&</span> Contributions
        </h2>
      </div>

      <div className="card-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel" style={{ borderLeft: '4px solid var(--neon-purple)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={exp.logo} alt={exp.company} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>{exp.title}</h3>
                  <div className="mono text-purple" style={{ fontSize: '0.75rem' }}>{exp.company}</div>
                </div>
              </div>
              <div className="mono text-dim" style={{ fontSize: '0.7rem' }}>{exp.period}</div>
            </div>
            <p className="text-dim" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {exp.desc}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {exp.tags.map(tag => (
                <span key={tag} className="mono" style={{ fontSize: '0.65rem', padding: '2px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'var(--neon-purple)', padding: '12px', borderRadius: '8px' }}>
            <Award size={32} color="#000" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Google Summer of Code Certificate</h3>
            <p className="text-dim">Official recognition for successful completion of GSoC 2024.</p>
          </div>
        </div>
        <a href={gsocCert} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          View Certificate <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default Experience;

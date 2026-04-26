import React, { useState } from 'react';
import CertificateModal from './CertificateModal';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="fade-in-section">
      <h2 className="section-title">System.Experience()</h2>
      
      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ color: 'var(--matrix-green)', fontSize: '1.5rem', margin: 0 }}>
            <span>OpenMRS</span>
          </h3>
          <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>2025</span>
        </div>
        <p style={{ fontStyle: 'italic', color: 'var(--matrix-light-green)', marginBottom: '1rem' }}>GSoC Contributor</p>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          As a GSoC 2025 contributor for OpenMRS, I've been actively involved in enhancing the core medical record system. 
          Focusing on full-stack features, I've collaborated with international mentors to deliver high-impact features using 
          React for the frontend and Java-based microservices.
        </p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
        >
          <ExternalLink size={18} />
          Retrieve GSoC Certificate
        </button>
      </div>

      <div className="glass-panel">
        <h3 style={{ color: 'var(--matrix-green)', fontSize: '1.5rem' }}>Hedera / Hiero Ecosystem</h3>
        <p style={{ fontStyle: 'italic', color: 'var(--matrix-light-green)', marginBottom: '1rem' }}>Web3 Enthusiast & Developer</p>
        <p style={{ lineHeight: '1.6' }}>
          I am deeply interested in the Hedera and Hiero network. My work involves exploring distributed ledger technologies (DLT), 
          smart contract verification, and building enterprise-grade tools within the Hiero ecosystem. I am passionate about 
          the transparency and efficiency that decentralized systems bring to modern software engineering.
        </p>
      </div>

      <CertificateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pdfUrl="/completion_certificate_2025_contributor.pdf"
      />
    </section>
  );
};

export default Experience;

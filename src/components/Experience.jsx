import React, { useState } from 'react';
import CertificateModal from './CertificateModal';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="fade-in-section">
      <h2 className="section-title">System.Experience()</h2>
      
      <div className="glass-panel" style={{ marginBottom: '2.5rem' }}>
        <div className="widget-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 className="widget-title" style={{ margin: 0 }}>
              <span>OpenMRS</span>
            </h3>
            <span style={{ fontSize: '1.1rem', color: 'var(--matrix-green)', opacity: 0.8 }}>2025</span>
          </div>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>GSoC Contributor</p>
          <p style={{ marginBottom: '2rem' }}>
            As a <span className="text-highlight">GSoC 2025</span> contributor for OpenMRS, I've been actively involved in enhancing the core medical record system. 
            Focusing on full-stack features, I've collaborated with international mentors to deliver high-impact features using 
            <span className="text-highlight"> React</span> for the frontend and <span className="text-highlight">Java-based microservices</span>.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}
          >
            <ExternalLink size={20} />
            Retrieve GSoC Certificate
          </button>
        </div>
      </div>

      <div className="glass-panel">
        <div className="widget-content">
          <h3 className="widget-title">Hedera / Hiero Ecosystem</h3>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Web3 Enthusiast & Developer</p>
          <p>
            I am deeply interested in the <span className="text-highlight">Hedera</span> and <span className="text-highlight">Hiero</span> network. My work involves exploring distributed ledger technologies (DLT), 
            smart contract verification, and building enterprise-grade tools within the Hiero ecosystem. I am passionate about 
            the transparency and efficiency that decentralized systems bring to modern software engineering.
          </p>
        </div>
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

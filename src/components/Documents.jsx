import React, { useState } from 'react';
import { FileText, Award, Download, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';
import gsocPdf from '../assets/gsoc-certificate.pdf';

const Documents = () => {
  const [activeTab, setActiveTab] = useState('resume');

  const docs = {
    resume: {
      title: 'Professional Resume',
      file: resumePdf,
      icon: <FileText className="text-purple" size={20} />,
      description: 'Comprehensive overview of my engineering experience and skills.'
    },
    gsoc: {
      title: 'GSoC 2024 Certificate',
      file: gsocPdf,
      icon: <Award className="text-purple" size={20} />,
      description: 'Official recognition from Google for contributions to OpenMRS.'
    }
  };

  return (
    <section id="docs" className="docs-section">
      <div className="fade-in">
        <div className="section-label mono">
          <span className="dot"></span>
          Credentials
        </div>
        <h2 className="section-title">Verified <span className="text-gradient">Impact.</span></h2>
        
        <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', marginTop: '2rem' }}>
          {/* Document Tabs */}
          <div style={{ 
            display: 'flex', 
            borderBottom: '1px solid var(--border-color)',
            background: 'rgba(0,0,0,0.2)'
          }}>
            {Object.keys(docs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  flex: 1,
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: activeTab === key ? 'rgba(192, 132, 252, 0.1)' : 'transparent',
                  border: 'none',
                  color: activeTab === key ? 'var(--neon-purple)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderBottom: activeTab === key ? '2px solid var(--neon-purple)' : '2px solid transparent',
                  fontWeight: activeTab === key ? '700' : '500'
                }}
              >
                {docs[key].icon}
                <span className="mono" style={{ fontSize: '0.9rem' }}>{docs[key].title}</span>
              </button>
            ))}
          </div>

          {/* Document Preview Area */}
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="text-dim" style={{ fontSize: '0.95rem' }}>{docs[activeTab].description}</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={docs[activeTab].file} download className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={16} /> Download
                </a>
                <a href={docs[activeTab].file} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ExternalLink size={16} /> Full View
                </a>
              </div>
            </div>

            {/* Inline Viewer */}
            <div style={{ 
              width: '100%', 
              height: '600px', 
              background: '#000', 
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}>
              <iframe
                src={`${docs[activeTab].file}#toolbar=0`}
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '8px' }}
                title={docs[activeTab].title}
              />
              {/* Overlay hint for mobile or if blocked */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                pointerEvents: 'none',
                display: 'none', // Shown only if needed via media queries
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.8)',
                textAlign: 'center',
                padding: '2rem'
              }} className="viewer-fallback">
                <p>PDF viewer might be limited on this device.</p>
                <a href={docs[activeTab].file} target="_blank" className="btn-primary" style={{ marginTop: '1rem', pointerEvents: 'auto' }}>Open Document</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;

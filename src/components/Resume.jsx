import React from 'react';
import { FileText, Download } from 'lucide-react';
import resumeFile from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="fade-in">
      <div className="section-header">
        <div className="section-label">
          <FileText size={18} className="text-purple" />
          <span className="mono text-purple">04 // CURRICULUM_VITAE</span>
        </div>
        <h2 className="section-title">
          Professional <span className="text-purple">Background</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
          <a 
            href={resumeFile} 
            download="Twiine_Enock_Resume.pdf" 
            className="btn-secondary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem' }}
          >
            DOWNLOAD_PDF <Download size={16} />
          </a>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1rem', height: '800px', background: 'rgba(0,0,0,0.3)' }}>
        <iframe 
          src={`${resumeFile}#toolbar=0`} 
          width="100%" 
          height="100%" 
          style={{ border: 'none', borderRadius: '4px' }}
          title="Resume PDF"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;

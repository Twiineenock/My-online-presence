import React from 'react';
import { X, FileText, ShieldCheck } from 'lucide-react';

const CertificateModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            <ShieldCheck size={20} />
            SECURE_DOCUMENT_VIEWER.EXE
          </h3>
          <button className="close-btn" onClick={onClose} title="Close Terminal">
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-content">
          <div style={{ 
            padding: '10px', 
            background: 'rgba(0, 40, 0, 0.5)', 
            borderBottom: '1px solid var(--matrix-green)',
            fontSize: '0.8rem',
            color: 'var(--matrix-green)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ animation: 'pulse 1.5s infinite' }}>● SYSTEM_STATUS: VERIFIED</span>
            <span>|</span>
            <span>ENCRYPTION: AES-256</span>
            <span>|</span>
            <span>FILE: {pdfUrl.split('/').pop()}</span>
          </div>
          
          <iframe 
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
            className="pdf-viewer"
            title="GSoC Certificate"
          />
        </div>
        
        <div style={{ 
          padding: '0.5rem 1rem', 
          fontSize: '0.7rem', 
          color: 'var(--matrix-dark-green)',
          textAlign: 'right',
          background: 'rgba(0,0,0,0.5)'
        }}>
          CONFIDENTIAL // AUTHORIZED_ACCESS_ONLY // GSOC_2025
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default CertificateModal;

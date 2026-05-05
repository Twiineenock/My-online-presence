import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="fade-in" style={{ padding: '4rem 2rem' }}>
      <div className="section-header">
        <div className="section-label">
          <GraduationCap size={18} className="text-purple" />
          <span className="mono text-purple">01 // ACADEMIC_JOURNEY</span>
        </div>
        <h2 className="section-title">
          Education <span className="text-dim">&</span> Foundations
        </h2>
      </div>

      <div className="glass-panel" style={{ borderLeft: '4px solid var(--neon-purple)', padding: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Bugema University</h3>
            <div className="mono text-purple" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>STUDENT (FINALIST)</div>
            <p className="text-dim" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px' }}>
              Currently in my final year, specializing in software engineering and distributed systems. 
              My academic journey has been defined by a deep interest in how decentralized technologies 
              can solve real-world trust issues in emerging markets.
            </p>
          </div>
          <div className="mono text-dim" style={{ fontSize: '0.9rem', textAlign: 'right' }}>
            <div style={{ marginBottom: '0.5rem' }}>EST. COMPLETION</div>
            <div className="text-purple" style={{ fontSize: '1.5rem', fontWeight: '800' }}>2026</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <div className="glass-panel" style={{ flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.02)' }}>
            <BookOpen size={24} className="text-purple" style={{ marginBottom: '1rem' }} />
            <h4 className="mono" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>CORE FOCUS</h4>
            <div style={{ fontSize: '0.9rem' }}>Distributed Systems, Smart Contracts, Full-Stack Architecture</div>
          </div>
          <div className="glass-panel" style={{ flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.02)' }}>
            <Award size={24} className="text-purple" style={{ marginBottom: '1rem' }} />
            <h4 className="mono" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>ACHIEVEMENTS</h4>
            <div style={{ fontSize: '0.9rem' }}>GSoC 2024 Contributor, Open Source Advocate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

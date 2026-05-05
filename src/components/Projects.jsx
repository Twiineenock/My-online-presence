import React from 'react';
import { Layers, Rocket, ExternalLink, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Twiinex V2',
      category: 'STARTUP / FINTECH',
      year: '2024',
      desc: 'A decentralized trust layer that bridges the gap between social media sellers and buyers. By using an escrow-like mechanism, Twiinex ensures that sellers can ship with confidence and buyers are committed to their purchases.',
      stats: 'Founder & Lead Developer',
      link: 'https://twiinex-v2.vercel.app/',
      features: ['Escrow Protection', 'Social Commerce', 'Trust Verification'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <section id="projects" className="fade-in">
      <div className="section-header">
        <div className="section-label">
          <Layers size={18} className="text-purple" />
          <span className="mono text-purple">03 // FEATURED_STARTUP</span>
        </div>
        <h2 className="section-title">
          Building <span className="text-purple">Trust</span> in Commerce
        </h2>
        <p className="section-subtitle">
          Creating digital solutions that solve real-world transaction risks in social commerce.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '3rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            <div style={{ position: 'relative' }}>
               <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.4' }} />
               <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(10,10,15,0.9), transparent)' }}></div>
            </div>
            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge" style={{ fontSize: '0.65rem' }}>{project.category}</span>
                <span className="mono text-dim" style={{ fontSize: '0.65rem' }}>{project.year}</span>
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{project.title}</h3>
              <p className="text-dim" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{project.desc}</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                {project.features.map(f => (
                   <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', padding: '6px 12px', borderRadius: '4px' }}>
                     <ShieldCheck size={14} className="text-purple" />
                     <span className="mono" style={{ fontSize: '0.7rem' }}>{f}</span>
                   </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="mono text-purple" style={{ fontSize: '0.8rem', fontWeight: '800' }}>{project.stats}</div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '10px 20px' }}>
                  Live Site <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

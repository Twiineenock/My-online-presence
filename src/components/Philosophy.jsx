import React from 'react';
import { Lightbulb, Binary, Users, Quote } from 'lucide-react';

const Philosophy = () => {
  const roleModels = [
    { name: 'Albert Einstein', role: 'Theoretical Physicist' },
    { name: 'Hendrik Ebbers', role: 'Founder of OpenElements' },
    { name: 'Bruce Lee', role: 'Philosopher & Actor' },
  ];

  return (
    <section id="philosophy" className="fade-in" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <div className="section-label">
          <Lightbulb size={18} className="text-purple" />
          <span className="mono text-purple">04 // CORE_PHILOSOPHY</span>
        </div>
        <h2 className="section-title">
          Logic <span className="text-dim">&</span> Inspiration
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Favourite Concept */}
          <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <Quote size={80} style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: '0.05', color: 'var(--neon-purple)' }} />
            <div className="mono text-purple" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>MY FAVOURITE CONCEPT</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Gossip about Gossip</h3>
            <p className="text-dim" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              A revolutionary synchronization mechanism used in the Hashgraph consensus algorithm. 
              Instead of just sharing transactions, nodes share information about who they've talked to, 
              allowing the entire network to achieve consensus without a leader, at incredible speeds.
            </p>
          </div>

          {/* Mathematics */}
          <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderLeft: '4px solid var(--neon-green)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Binary className="text-green" size={24} />
              <div className="mono" style={{ fontSize: '0.8rem' }}>I AM A LOVER OF MATH</div>
            </div>
            <p className="text-dim" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              "My Best mathematics Book is CJ Tranter"
            </p>
          </div>
        </div>

        {/* Role Models */}
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Users className="text-purple" size={24} />
            <div className="mono" style={{ fontSize: '0.8rem' }}>ARCHITECTS OF THOUGHT</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {roleModels.map((model, index) => (
              <div key={index} style={{ borderBottom: index !== roleModels.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{model.name}</h4>
                <div className="mono text-purple" style={{ fontSize: '0.75rem' }}>{model.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

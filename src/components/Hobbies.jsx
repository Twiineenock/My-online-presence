import React from 'react';
import { Terminal, Dumbbell, Trophy } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Basketball',
      category: 'DYNAMIC STRATEGY',
      desc: 'Love for the game, focusing on teamwork, agility, and precision. A perfect balance of physical intensity and strategic thinking.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Calisthenics',
      category: 'BODYWEIGHT MASTERY',
      desc: 'Mastering the art of bodyweight exercises. Pushing limits of strength, flexibility, and control through disciplined training.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="hobbies" className="fade-in">
      <div className="section-header">
        <div className="section-label">
          <Terminal size={18} className="text-purple" />
          <span className="mono text-purple">INTERESTS // 005</span>
        </div>
        <h2 className="section-title">
          Extracurricular <span className="text-purple">Logic</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {hobbies.map((hobby, index) => (
            <div key={index} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex' }}>
              <img src={hobby.image} alt={hobby.title} style={{ width: '250px', height: '100%', objectFit: 'cover', opacity: '0.6' }} />
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.5rem' }}>{hobby.title}</h3>
                  <span className="mono text-dim" style={{ fontSize: '0.6rem' }}>{hobby.category}</span>
                </div>
                <p className="text-dim" style={{ fontSize: '0.9rem' }}>{hobby.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '3rem' }}>
           <div style={{ marginBottom: '2rem' }}>
             <Dumbbell size={48} className="text-purple" style={{ margin: '0 auto 1.5rem' }} />
             <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Active Mind, Active Body</h3>
             <p className="text-dim" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
               Believing in the synergy between physical discipline and intellectual growth. 
               Calisthenics and Basketball provide the necessary mental reset to maintain peak performance.
             </p>
           </div>
           
           <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="mono text-purple" style={{ fontSize: '1.5rem', fontWeight: '800' }}>365</span>
                <span className="mono text-dim" style={{ fontSize: '0.6rem' }}>DAYS ACTIVE</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="mono text-purple" style={{ fontSize: '1.5rem', fontWeight: '800' }}>∞</span>
                <span className="mono text-dim" style={{ fontSize: '0.6rem' }}>CONSISTENCY</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

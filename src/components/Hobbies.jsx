import React from 'react';
import { Trophy, BookOpen, Activity } from 'lucide-react';

const Hobbies = () => {
  const hobbyList = [
    {
      title: 'Basketball',
      icon: <Trophy size={48} />,
      description: 'The court is where I find my flow. Teamwork, strategy, and precision.'
    },
    {
      title: 'Teaching Mathematics',
      icon: <BookOpen size={48} />,
      description: 'I love breaking down complex mathematical concepts for fun. Logic is the language of the universe.'
    },
    {
      title: 'Calisthenics',
      icon: <Activity size={48} />,
      description: 'Bodyweight training to push physical and mental limits. Strength through discipline.'
    }
  ];

  return (
    <section id="hobbies" className="fade-in-section">
      <h2 className="section-title">System.Hobbies()</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {hobbyList.map((hobby, index) => (
          <div key={index} className="glass-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ color: 'var(--matrix-green)', marginBottom: '1.5rem' }}>
              {hobby.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{hobby.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;


import React, { useState, useEffect } from 'react';

const skills = [
  { name: 'UI/UX Design', level: 95, icon: '🎨' },
  { name: 'Frontend Development', level: 90, icon: '💻' },
  { name: 'Creative Direction', level: 85, icon: '🎭' },
  { name: 'Prototyping', level: 88, icon: '⚡' },
  { name: 'Brand Identity', level: 82, icon: '🎯' },
  { name: 'Motion Graphics', level: 78, icon: '🎬' }
];

const SkillBar = ({ skill, delay }: { skill: typeof skills[0], delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold">{skill.name}</span>
        </div>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary via-accent to-electric-cyan transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%'
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-morphism p-6 rounded-2xl">
              <SkillBar skill={skill} delay={index * 200} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

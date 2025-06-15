
import React from 'react';
import { Code, Palette, Zap, Target, Briefcase, Star } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', description: 'Crafting intuitive user experiences', icon: Palette },
  { name: 'Frontend Development', description: 'Modern React ', icon: Code,  },
  { name: 'Creative Direction', description: 'Leading design visions', icon: Target,  },
  { name: 'Prototyping', description: 'Rapid concept validation', icon: Zap,  },
  { name: 'Brand Identity', description: 'Visual storytelling & branding', icon: Star,  },
  { name: 'Prototype', description: 'End-to-end delivery', icon: Briefcase, }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'text-primary';
    case 'Advanced':
      return 'text-accent';
    default:
      return 'text-electric-cyan';
  }
};

const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const IconComponent = skill.icon;
  
  return (
    <div 
      className="glass-morphism p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-">
        <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="font-space text-xl font-semibold mb-2">{skill.name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
          <span className={`text-sm font-medium px-3 py-1 rounded-full bg-muted/50 ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
        </div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

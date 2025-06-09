
import React from 'react';

const projects = [
  {
    title: 'Quantum Dashboard',
    description: 'Next-generation analytics platform with AI-powered insights',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    tags: ['UI/UX', 'React', 'AI'],
    color: 'from-primary to-accent'
  },
  {
    title: 'Neural Interface',
    description: 'Immersive VR experience design for brain-computer interaction',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    tags: ['VR/AR', 'Design', '3D'],
    color: 'from-accent to-electric-cyan'
  },
  {
    title: 'Crypto Vault',
    description: 'Secure cryptocurrency wallet with biometric authentication',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Fintech', 'Security', 'Mobile'],
    color: 'from-electric-cyan to-primary'
  },
  {
    title: 'Smart Cities',
    description: 'IoT management platform for urban infrastructure',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
    tags: ['IoT', 'Data Viz', 'Smart City'],
    color: 'from-primary via-accent to-electric-cyan'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass-morphism hover:scale-105 transition-all duration-500">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="font-space text-xl font-bold group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Holographic accent */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of projects that push boundaries and redefine possibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

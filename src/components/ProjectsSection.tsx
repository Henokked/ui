
import React from 'react';

const projects = [
  {
    title: 'Pulse Play',
    description: 'A freindly mobile app offering wide variety of movies',
    image: `/pulseplay.jpg`,
    link : `https://www.behance.net/gallery/215565289/Pulse-Play-Movie-Streaming-App`,
    tags: ['UI/UX', 'Ui', 'Mobile app'],
    color: 'from-primary to-accent'
  },
  {
    title: 'Sparex',
    description: 'Your go to app for finding genuine spare parts fast, reliable, and hassle-free',
    image: '/sparex.jpg',
    link : `https://www.behance.net/gallery/165564311/Mobile-spare-part-app`,
    tags: ['Mobile', 'Design', 'UI/UX'],
    color: 'from-accent to-electric-cyan'
  },
  {
    title: 'Jera It Solutions',
    description: 'A startup thats making world a better place',
    image: `/jprofile.png`,
    link: `https://www.behance.net/gallery/216917987/Startup-landing-page`,
    tags: ['Fintech', 'Security', 'Website'],
    color: 'from-electric-cyan to-primary'
  },
  {
    title: 'Oozy ',
    description: 'Your smart, personal AI assistant helping you organize tasks, answer questions, and stay productive effortlessly, all in one place.',
    image: '/cover.jpg',
    link: `https://www.behance.net/gallery/214964257/AI-app`,
    tags: ['AI', 'Chat', 'App'],
    color: 'from-primary via-accent to-electric-cyan'
  },
  {
    title: 'MyCampus',
    description: 'an all-in-one mobile application designed to streamline and simplify the daily life of university students.',
    image: '/main.png',
    link: `https://www.behance.net/gallery/228512491/My-campus-Your-Campus-Companion`,
    tags: ['University', 'Chat', 'App'],
    color: 'from-primary via-accent to-electric-cyan'
  }

];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass-morphism hover:scale-105 transition-all duration-500">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      </div>
        </a>
      
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


import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="font-space text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="text-gradient">Digital</span>
            <br />
            <span className="text-foreground">Craftsman</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating extraordinary digital experiences through innovative design and cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-glow glass-morphism px-8 py-4 rounded-full text-lg font-semibold text-primary border border-primary/20 hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button className="glass-morphism px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Geometric accent line */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;

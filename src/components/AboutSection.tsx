
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-space text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a digital craftsman passionate about creating exceptional user experiences 
                that bridge the gap between imagination and reality. With a keen eye for detail 
                and a love for innovative technology.
              </p>
              <p>
                My work spans across UI/UX design, front-end development, and creative direction, 
                always pushing the boundaries of what's possible in the digital realm.
              </p>
            </div>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-morphism p-8 rounded-3xl relative">
              {/* Futuristic avatar placeholder */}
              <div className="w-64 h-64 mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-electric-cyan/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-gradient bg-[length:400%_400%]"></div>
                <div className="absolute inset-4 border border-primary/30 rounded-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-primary/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              {/* Holographic accent */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent to-electric-cyan rounded-full animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

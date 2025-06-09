
import React, { useState } from 'react';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-morphism p-8 rounded-3xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <input 
                type="text"
                className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Project discussion"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button 
              className="w-full btn-glow glass-morphism py-4 rounded-xl text-lg font-semibold text-primary border border-primary/20 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Send Message</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-electric-cyan/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
          
          {/* Alternative contact methods */}
          <div className="mt-12 flex justify-center space-x-8">
            <a 
              href="mailto:hello@example.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-sm">✉</span>
              </div>
              <span className="text-sm font-medium">hello@example.com</span>
            </a>
            <a 
              href="#"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-sm">🐦</span>
              </div>
              <span className="text-sm font-medium">@username</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

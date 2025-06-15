
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
            <div className="space-y-3 text-muted-foreground text-lg leading-relaxed">
              <p>
                I’m Henok a UI/UX designer passionate about transforming ideas into meaningful digital experiences. With a strong focus on storytelling, user behavior, and visual clarity, I craft interfaces that are not only aesthetically engaging but also intuitive and purposeful. Whether it’s a landing page or a complex web app, I aim to design journeys that feel seamless, inspire interaction, and leave a lasting impression
              </p>
              <p>
                My work spans across UI/UX design, front-end development, and creative direction, 
                always pushing the boundaries of what's possible in the digital realm.
              </p>
            </div>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan">14+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
          
         <div className="flex justify-center items-center">
  <div className="relative w-64 h-50 rounded-full border-8 border-gradient-to-br from-primary via-accent to-electric-cyan overflow-hidden shadow-xl">
    {/* Replace the src below with your profile image */}
    <img
      src="/profile.png"
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
    {/* Optional: Holographic accent */}
    {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent to-electric-cyan rounded-full animate-glow"></div> */}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

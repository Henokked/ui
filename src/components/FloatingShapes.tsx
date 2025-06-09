
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      <div 
        className="floating-shape w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10"
        style={{
          top: '10%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '8s'
        }}
      />
      <div 
        className="floating-shape w-24 h-24 bg-gradient-to-br from-accent/10 to-electric-cyan/10"
        style={{
          top: '20%',
          right: '15%',
          animationDelay: '2s',
          animationDuration: '6s'
        }}
      />
      <div 
        className="floating-shape w-40 h-40 bg-gradient-to-br from-electric-cyan/10 to-primary/10"
        style={{
          bottom: '20%',
          left: '20%',
          animationDelay: '4s',
          animationDuration: '10s'
        }}
      />
      <div 
        className="floating-shape w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10"
        style={{
          bottom: '30%',
          right: '10%',
          animationDelay: '1s',
          animationDuration: '7s'
        }}
      />
    </div>
  );
};

export default FloatingShapes;


import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@digitalcraftsman.com',
    href: 'mailto:hello@digitalcraftsman.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/digitalcraftsman',
    color: 'hover:text-blue-500'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/digitalcraftsman',
    color: 'hover:text-blue-400'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/digitalcraftsman',
    color: 'hover:text-pink-500'
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Reach out through any of these channels
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="glass-morphism p-8 rounded-3xl hover:scale-105 transition-all duration-300 group block"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-space text-xl font-semibold mb-2">{method.label}</h3>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          
          {/* Social Media */}
          <div className="text-center">
            <h3 className="font-space text-2xl font-semibold mb-8">Follow Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-morphism p-4 rounded-2xl hover:scale-110 transition-all duration-300 group ${social.color}`}
                    style={{ animationDelay: `${(index + 2) * 150}ms` }}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="glass-morphism p-6 rounded-3xl max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg">
                Available for freelance projects and collaborations
              </p>
              <p className="text-primary font-semibold mt-2">
                Let's create something amazing together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

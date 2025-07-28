import React from 'react';
import { Heart, Code, Brain, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(17,17,19)] border-t border-[rgb(63,63,63)] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[rgb(218,255,1)] rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[rgb(17,17,19)]" />
                </div>
                <span className="text-xl font-bold text-white">{portfolioData.personal.name}</span>
              </div>
              <p className="text-[rgb(161,161,170)] leading-relaxed mb-6 max-w-md">
                {portfolioData.personal.bio}
              </p>
              <div className="flex space-x-4">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={portfolioData.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="w-10 h-10 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('#about')}
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#skills')}
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#projects')}
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#blog')}
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-[rgb(161,161,170)]">AI Solutions</span>
                </li>
                <li>
                  <span className="text-[rgb(161,161,170)]">Web Development</span>
                </li>
                <li>
                  <span className="text-[rgb(161,161,170)]">Chatbot Integration</span>
                </li>
                <li>
                  <span className="text-[rgb(161,161,170)]">API Development</span>
                </li>
                <li>
                  <span className="text-[rgb(161,161,170)]">Tech Consulting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[rgb(63,63,63)] pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-[rgb(161,161,170)] text-sm mb-4 md:mb-0">
              <span>© {currentYear} {portfolioData.personal.name}. Made with</span>
              <Heart className="w-4 h-4 text-[rgb(218,255,1)]" />
              <span>and</span>
              <Code className="w-4 h-4 text-[rgb(218,255,1)]" />
              <span>in San Francisco</span>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
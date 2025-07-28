import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Brain, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['AI Generalist', 'Full Stack Developer', 'Problem Solver', 'Tech Innovator'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let index = 0;
    setIsTyping(true);
    
    const typeText = () => {
      if (index < role.length) {
        setCurrentText(role.substring(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    };

    setTimeout(typeText, 500);
  }, [currentRoleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-[rgb(17,17,19)] flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(127,74,142)] rounded-full opacity-3 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-[rgb(218,255,1)]">
                {portfolioData.personal.name}
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center mb-6">
              <h2 className="text-2xl md:text-3xl text-[rgb(218,218,218)] font-semibold">
                {currentText}
                <span className={`ml-1 ${isTyping ? 'animate-pulse' : ''}`}>|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-[rgb(161,161,170)] max-w-2xl mx-auto mb-8 leading-relaxed">
              {portfolioData.personal.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(218,255,1)]">
                {portfolioData.personal.yearsExperience}
              </div>
              <div className="text-sm text-[rgb(161,161,170)]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(218,255,1)]">
                {portfolioData.personal.projectsCompleted}
              </div>
              <div className="text-sm text-[rgb(161,161,170)]">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(218,255,1)]">
                {portfolioData.personal.clientsSatisfied}
              </div>
              <div className="text-sm text-[rgb(161,161,170)]">Happy Clients</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] transition-all duration-200 text-lg px-8 py-6"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-[rgb(218,255,1)] text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 text-lg px-8 py-6"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 animate-bounce">
        <Code className="w-8 h-8 text-[rgb(218,255,1)] opacity-30" />
      </div>
      <div className="absolute top-1/3 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <Brain className="w-8 h-8 text-[rgb(127,74,142)] opacity-30" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-bounce" style={{ animationDelay: '2s' }}>
        <Zap className="w-8 h-8 text-[rgb(218,255,1)] opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
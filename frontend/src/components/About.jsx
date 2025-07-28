import React from 'react';
import { Code, Brain, Zap, Target, Award, Coffee } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend development with modern technologies"
    },
    {
      icon: Brain,
      title: "AI Specialization",
      description: "Deep knowledge in machine learning, NLP, and intelligent system design"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Building scalable applications optimized for speed and efficiency"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Turning complex business challenges into elegant technical solutions"
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "Committed to delivering high-quality code and exceptional user experiences"
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always staying updated with the latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[rgb(17,17,19)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-[rgb(218,255,1)]">Me</span>
            </h2>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Passionate about creating intelligent solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {portfolioData.personal.tagline}
              </h3>
              
              <div className="space-y-4 text-[rgb(218,218,218)] leading-relaxed">
                <p>
                  I'm a passionate developer who bridges the gap between artificial intelligence and full-stack development. 
                  With over 5 years of experience, I've helped businesses transform their ideas into intelligent, 
                  scalable solutions that drive real results.
                </p>
                
                <p>
                  My expertise spans across modern web technologies, machine learning frameworks, and cloud platforms. 
                  I believe in writing clean, maintainable code and creating user experiences that are both intuitive 
                  and powerful.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source 
                  projects, or sharing knowledge through technical writing and mentoring.
                </p>
              </div>

              {/* Personal Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[rgb(218,255,1)]">
                    {portfolioData.personal.yearsExperience}
                  </div>
                  <div className="text-sm text-[rgb(161,161,170)]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[rgb(218,255,1)]">
                    {portfolioData.personal.projectsCompleted}
                  </div>
                  <div className="text-sm text-[rgb(161,161,170)]">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[rgb(218,255,1)]">
                    {portfolioData.personal.clientsSatisfied}
                  </div>
                  <div className="text-sm text-[rgb(161,161,170)]">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center group-hover:bg-[rgb(218,255,1)] transition-colors duration-300">
                        <highlight.icon className="w-6 h-6 text-[rgb(218,255,1)] group-hover:text-[rgb(17,17,19)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 group-hover:text-[rgb(218,255,1)] transition-colors duration-300">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-[rgb(161,161,170)] leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
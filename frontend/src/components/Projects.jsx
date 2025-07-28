import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Code, Brain, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filters = ['All', 'AI/ML', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-[rgb(17,17,19)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[rgb(218,255,1)]">Projects</span>
            </h2>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              A showcase of my latest work in AI, machine learning, and full-stack development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleProjects(6);
                }}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`
                  ${activeFilter === filter 
                    ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)]' 
                    : 'bg-transparent border-[rgb(63,63,63)] text-[rgb(218,218,218)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)]'
                  }
                  transition-all duration-200 px-6 py-2
                `}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <Card 
                key={project.id}
                className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${project.category === 'AI/ML' 
                          ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)]' 
                          : 'bg-[rgb(127,74,142)] text-white'
                        }
                      `}
                    >
                      {project.category === 'AI/ML' ? (
                        <Brain className="w-3 h-3 mr-1" />
                      ) : (
                        <Code className="w-3 h-3 mr-1" />
                      )}
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] rounded-lg flex items-center justify-center hover:bg-[rgb(166,190,21)] transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[rgb(38,40,42)] text-[rgb(218,218,218)] rounded-lg flex items-center justify-center hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-white group-hover:text-[rgb(218,255,1)] transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-[rgb(161,161,170)] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-[rgb(63,63,63)] text-[rgb(161,161,170)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                className="border-[rgb(218,255,1)] text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 px-8 py-3"
              >
                <Layers className="w-4 h-4 mr-2" />
                Load More Projects
              </Button>
            </div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[rgb(161,161,170)] text-lg">
                No projects found for "{activeFilter}" category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('AI/ML');

  const categories = Object.keys(portfolioData.skills);

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[rgb(218,218,218)] font-medium">{skill}</span>
        <span className="text-[rgb(161,161,170)] text-sm">{level}%</span>
      </div>
      <div className="w-full bg-[rgb(38,40,42)] rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-[rgb(26,28,30)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-[rgb(218,255,1)]">Skills</span>
            </h2>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  ${activeCategory === category 
                    ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)]' 
                    : 'bg-transparent border-[rgb(63,63,63)] text-[rgb(218,218,218)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)]'
                  }
                  transition-all duration-200 px-6 py-2
                `}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills List */}
            <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {activeCategory} Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioData.skills[activeCategory].map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <div className="space-y-6">
              <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    What I Do Best
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeCategory === 'AI/ML' && (
                      <div>
                        <p className="text-[rgb(218,218,218)] leading-relaxed">
                          I specialize in building intelligent systems using cutting-edge AI technologies. 
                          From natural language processing to computer vision, I create solutions that 
                          learn and adapt to user needs.
                        </p>
                        <ul className="mt-4 space-y-2 text-[rgb(161,161,170)]">
                          <li>• Machine Learning Model Development</li>
                          <li>• Deep Learning with TensorFlow & PyTorch</li>
                          <li>• Natural Language Processing</li>
                          <li>• Computer Vision Applications</li>
                          <li>• AI Integration & Deployment</li>
                        </ul>
                      </div>
                    )}
                    
                    {activeCategory === 'Frontend' && (
                      <div>
                        <p className="text-[rgb(218,218,218)] leading-relaxed">
                          I create responsive, interactive user interfaces that provide exceptional user experiences. 
                          My frontend solutions are built with modern frameworks and optimized for performance.
                        </p>
                        <ul className="mt-4 space-y-2 text-[rgb(161,161,170)]">
                          <li>• React.js & Next.js Applications</li>
                          <li>• Responsive Web Design</li>
                          <li>• Modern CSS & Tailwind</li>
                          <li>• State Management</li>
                          <li>• Performance Optimization</li>
                        </ul>
                      </div>
                    )}
                    
                    {activeCategory === 'Backend' && (
                      <div>
                        <p className="text-[rgb(218,218,218)] leading-relaxed">
                          I build robust, scalable backend systems that handle complex business logic and 
                          high-traffic applications. My backend solutions are secure, efficient, and maintainable.
                        </p>
                        <ul className="mt-4 space-y-2 text-[rgb(161,161,170)]">
                          <li>• RESTful API Development</li>
                          <li>• Microservices Architecture</li>
                          <li>• Server-side Logic</li>
                          <li>• Authentication & Security</li>
                          <li>• Performance Optimization</li>
                        </ul>
                      </div>
                    )}
                    
                    {activeCategory === 'Database' && (
                      <div>
                        <p className="text-[rgb(218,218,218)] leading-relaxed">
                          I design and implement efficient database solutions that scale with your application. 
                          From relational to NoSQL databases, I ensure data integrity and optimal performance.
                        </p>
                        <ul className="mt-4 space-y-2 text-[rgb(161,161,170)]">
                          <li>• Database Design & Modeling</li>
                          <li>• Query Optimization</li>
                          <li>• Data Migration</li>
                          <li>• Backup & Recovery</li>
                          <li>• Performance Tuning</li>
                        </ul>
                      </div>
                    )}
                    
                    {activeCategory === 'DevOps/Tools' && (
                      <div>
                        <p className="text-[rgb(218,218,218)] leading-relaxed">
                          I implement modern DevOps practices and use industry-standard tools to ensure 
                          smooth development workflows and reliable deployments.
                        </p>
                        <ul className="mt-4 space-y-2 text-[rgb(161,161,170)]">
                          <li>• Containerization with Docker</li>
                          <li>• Version Control with Git</li>
                          <li>• CI/CD Pipelines</li>
                          <li>• Cloud Deployment</li>
                          <li>• Monitoring & Logging</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Certification Card */}
              <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Certifications & Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(218,218,218)]">AWS Certified Solutions Architect</span>
                      <span className="text-[rgb(218,255,1)] text-sm">2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(218,218,218)]">Google Cloud Professional</span>
                      <span className="text-[rgb(218,255,1)] text-sm">2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(218,218,218)]">Meta Frontend Developer</span>
                      <span className="text-[rgb(218,255,1)] text-sm">2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(218,218,218)]">Deep Learning Specialization</span>
                      <span className="text-[rgb(218,255,1)] text-sm">2022</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
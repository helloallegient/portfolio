import React from 'react';
import { Brain, Code, MessageCircle, Zap, Target, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const Services = () => {
  const iconMap = {
    Brain: Brain,
    Code: Code,
    MessageCircle: MessageCircle,
    Zap: Zap,
    Target: Target
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[rgb(26,28,30)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-[rgb(218,255,1)]">Services</span>
            </h2>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Comprehensive AI and full-stack development services tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              
              return (
                <Card 
                  key={service.id}
                  className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Top accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center group-hover:bg-[rgb(218,255,1)] transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-[rgb(218,255,1)] group-hover:text-[rgb(17,17,19)]" />
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-[rgb(38,40,42)] text-[rgb(218,255,1)] border-none"
                      >
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-white group-hover:text-[rgb(218,255,1)] transition-colors duration-300">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-[rgb(161,161,170)] text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-[rgb(218,255,1)] mt-0.5 flex-shrink-0" />
                          <span className="text-[rgb(218,218,218)] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-transparent border border-[rgb(63,63,63)] text-[rgb(218,218,218)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] hover:border-[rgb(218,255,1)] transition-all duration-200"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)] max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Something Custom?
                </h3>
                <p className="text-[rgb(161,161,170)] mb-6 leading-relaxed">
                  Every project is unique. Let's discuss your specific requirements and create a 
                  tailored solution that perfectly fits your needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={scrollToContact}
                    className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] transition-all duration-200 px-8 py-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Let's Talk
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[rgb(218,255,1)] text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 px-8 py-3"
                  >
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
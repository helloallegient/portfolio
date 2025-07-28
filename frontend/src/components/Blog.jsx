import React from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

const Blog = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-20 bg-[rgb(17,17,19)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="text-[rgb(218,255,1)]">Articles</span>
            </h2>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on AI, web development, and technology trends
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioData.blog.map((post) => (
              <Card 
                key={post.id}
                className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)]"
                    >
                      {post.category}
                    </Badge>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-4 right-4 bg-[rgb(17,17,19)]/80 text-[rgb(218,218,218)] px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Post Content */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-white group-hover:text-[rgb(218,255,1)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-[rgb(161,161,170)] text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-xs text-[rgb(161,161,170)] mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-[rgb(63,63,63)] text-[rgb(161,161,170)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-colors duration-200 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 text-[rgb(218,255,1)] hover:text-[rgb(166,190,21)] transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="border-[rgb(218,255,1)] text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 px-8 py-3"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-[rgb(161,161,170)] mb-6">
                  Get the latest insights on AI, web development, and tech trends delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-lg px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(218,255,1)] transition-colors duration-200"
                  />
                  <Button
                    className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] transition-all duration-200 px-8 py-3"
                  >
                    Subscribe
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

export default Blog;
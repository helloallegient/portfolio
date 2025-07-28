import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setSubmitStatus('sending');
    
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[rgb(26,28,30)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-[rgb(218,255,1)]">Touch</span>
            </h2>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-[rgb(161,161,170)] leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with innovative teams. 
                  Whether you need AI solutions, full-stack development, or technical consulting, 
                  I'm here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-[rgb(161,161,170)]">{portfolioData.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-[rgb(161,161,170)]">{portfolioData.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-[rgb(161,161,170)]">{portfolioData.contact.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
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
                    href={portfolioData.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
              <CardHeader>
                <CardTitle className="text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[rgb(218,218,218)] mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)] transition-colors duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[rgb(218,218,218)] mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)] transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[rgb(218,218,218)] mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry"
                      className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)] transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[rgb(218,218,218)] mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)] transition-colors duration-200"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="w-full bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] transition-all duration-200 py-6"
                  >
                    {submitStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[rgb(17,17,19)] mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Failed to send message. Please try again.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
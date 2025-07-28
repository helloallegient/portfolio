// Mock data for AI + Full Stack Developer Portfolio
export const portfolioData = {
  personal: {
    name: "Amit",
    title: "AI Generalist | Full Stack Developer",
    bio: "I design intelligent systems and build scalable web apps that solve real-world problems. Blending AI with full stack development to create impactful solutions.",
    tagline: "Building the future with AI and code",
    yearsExperience: "5+",
    projectsCompleted: "50+",
    clientsSatisfied: "30+",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  
  skills: {
    "AI/ML": [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "LangChain", level: 88 },
      { name: "OpenAI APIs", level: 92 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 80 }
    ],
    "Frontend": [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 88 }
    ],
    "Backend": [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 92 },
      { name: "PHP", level: 85 },
      { name: "CodeIgniter", level: 80 },
      { name: "Django", level: 78 },
      { name: "FastAPI", level: 85 }
    ],
    "Database": [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "PostgreSQL", level: 82 }
    ],
    "DevOps/Tools": [
      { name: "Docker", level: 80 },
      { name: "GitHub", level: 95 },
      { name: "GitLab", level: 85 },
      { name: "VSCode", level: 98 },
      { name: "Figma", level: 78 }
    ]
  },
  
  projects: [
    {
      id: 1,
      name: "AI Chatbot Assistant",
      description: "Built a GPT-powered assistant using OpenAI API, integrated with a CRM system for seamless customer support and lead generation.",
      techStack: ["OpenAI", "LangChain", "React", "Node.js", "MongoDB"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description: "Developed a scalable e-commerce website with admin panel, cart system, and Razorpay integration for a fashion retailer.",
      techStack: ["PHP", "CodeIgniter 3", "MySQL", "AJAX", "Bootstrap"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      name: "AI Resume Generator",
      description: "Created an AI-powered tool that generates tailored resumes using GPT and form input, helping job seekers create professional resumes.",
      techStack: ["Next.js", "OpenAI", "Tailwind CSS", "Firebase"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      name: "Smart Analytics Dashboard",
      description: "Built a real-time analytics dashboard with ML-powered insights for business intelligence and data visualization.",
      techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      name: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      name: "Image Classification API",
      description: "Created a RESTful API for image classification using deep learning models with high accuracy and fast inference.",
      techStack: ["PyTorch", "FastAPI", "Docker", "AWS", "TensorFlow"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ],
  
  services: [
    {
      id: 1,
      name: "Custom AI Solutions",
      description: "Tailored AI systems including chatbots, recommendation engines, and predictive analytics for your business needs.",
      icon: "Brain",
      price: "Starting at $2,500",
      features: [
        "Custom AI model development",
        "API integration",
        "Training and deployment",
        "3 months support"
      ]
    },
    {
      id: 2,
      name: "Web App Development",
      description: "Full-stack web applications built with modern technologies for scalability and performance.",
      icon: "Code",
      price: "Starting at $3,000",
      features: [
        "Frontend & Backend development",
        "Database design",
        "API development",
        "6 months support"
      ]
    },
    {
      id: 3,
      name: "Chatbot Integration",
      description: "Intelligent chatbots integrated with your existing systems for enhanced customer engagement.",
      icon: "MessageCircle",
      price: "Starting at $1,500",
      features: [
        "Custom chatbot development",
        "Platform integration",
        "Training and optimization",
        "2 months support"
      ]
    },
    {
      id: 4,
      name: "API Development",
      description: "Robust RESTful APIs and microservices architecture for scalable backend systems.",
      icon: "Zap",
      price: "Starting at $2,000",
      features: [
        "RESTful API design",
        "Documentation",
        "Testing and deployment",
        "4 months support"
      ]
    },
    {
      id: 5,
      name: "Tech Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your tech stack.",
      icon: "Target",
      price: "Starting at $150/hour",
      features: [
        "Technology assessment",
        "Architecture planning",
        "Code review",
        "Best practices guidance"
      ]
    }
  ],
  
  blog: [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is reshaping the web development landscape and what developers need to know.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Amit",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["AI", "Web Development", "Future Tech"]
    },
    {
      id: 2,
      title: "Building Scalable APIs with FastAPI",
      excerpt: "A comprehensive guide to creating high-performance APIs using FastAPI and modern Python development practices.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Alex Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tags: ["Python", "FastAPI", "Backend"]
    },
    {
      id: 3,
      title: "React Performance Optimization Tips",
      excerpt: "Essential techniques for optimizing React applications and improving user experience with better performance.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Alex Rodriguez",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      tags: ["React", "Performance", "Frontend"]
    }
  ],
  
  contact: {
    email: "alex.rodriguez@example.com",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    github: "https://github.com/alexrodriguez",
    twitter: "https://twitter.com/alexrodriguez",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567"
  },
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      company: "TechCorp",
      message: "Alex delivered an exceptional AI solution that transformed our customer service. His technical expertise and attention to detail are outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b85b4e75?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      message: "Working with Alex was a game-changer for our project. He built a scalable web application that exceeded all our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director",
      company: "GrowthCo",
      message: "Alex's chatbot integration increased our lead conversion by 40%. His AI solutions are both innovative and practical.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]
};

// Helper functions for mock data
export const getProjectsByCategory = (category) => {
  return portfolioData.projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.featured);
};

export const getRecentBlogPosts = (count = 3) => {
  return portfolioData.blog.slice(0, count);
};
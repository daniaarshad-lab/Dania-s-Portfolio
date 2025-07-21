import { useState, useEffect } from 'react';
import { Github, ExternalLink, Brain, Globe, Heart, Eye, ShoppingCart, FileText, Calendar, Shirt } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import project images
import breastCancerImg from '@/assets/breast-cancer-project.jpg';
import skinLesionImg from '@/assets/skin-lesion-project.jpg';
import blindAppImg from '@/assets/blind-app-project.jpg';
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import blogImg from '@/assets/blog-project.jpg';
import universityImg from '@/assets/university-project.jpg';
import abayaStoreImg from '@/assets/abaya-store-project.jpg';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const projects = [
    {
      title: "Breast Cancer Detection System",
      category: "AI/ML",
      description: "Advanced machine learning system for early breast cancer detection using medical imaging and deep learning algorithms.",
      image: breastCancerImg,
      icon: Heart,
      tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Medical Imaging"],
      github: "https://github.com/dania-arshad/breast-cancer-detection",
      demo: "#"
    },
    {
      title: "Skin Lesion Detection System",
      category: "AI/ML",
      description: "AI-powered dermatology assistant for skin lesion analysis and early melanoma detection using computer vision.",
      image: skinLesionImg,
      icon: Eye,
      tech: ["Python", "PyTorch", "Computer Vision", "React", "REST API"],
      github: "https://github.com/dania-arshad/skin-lesion-detection",
      demo: "#"
    },
    {
      title: "AI-Assistive Blind App",
      category: "AI/ML",
      description: "Team project developing an AI-powered mobile application to assist visually impaired users with navigation and object recognition.",
      image: blindAppImg,
      icon: Brain,
      tech: ["React Native", "TensorFlow Lite", "Voice AI", "Mobile Development", "Accessibility"],
      github: "https://github.com/dania-arshad/ai-assistive-blind-app",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Full-stack e-commerce solution with advanced features including payment integration, inventory management, and analytics.",
      image: ecommerceImg,
      icon: ShoppingCart,
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      github: "https://github.com/dania-arshad/ecommerce-platform",
      demo: "#"
    },
    {
      title: "Blog Publishing Platform",
      category: "Web Application",
      description: "Modern content management system with rich text editing, user authentication, and social features for bloggers.",
      image: blogImg,
      icon: FileText,
      tech: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS", "Vercel"],
      github: "https://github.com/dania-arshad/blog-platform",
      demo: "#"
    },
    {
      title: "University Event Management",
      category: "Web Application",
      description: "Comprehensive event management system for universities with scheduling, registration, and analytics features.",
      image: universityImg,
      icon: Calendar,
      tech: ["React", "Firebase", "Material-UI", "Cloud Functions", "Real-time Database"],
      github: "https://github.com/dania-arshad/university-events",
      demo: "#"
    },
    {
      title: "Abaya Store Website",
      category: "Web Application",
      description: "Elegant e-commerce platform for Islamic fashion with custom product catalog and shopping experience.",
      image: abayaStoreImg,
      icon: Shirt,
      tech: ["React", "Node.js", "MongoDB", "PayPal Integration", "SCSS", "JWT"],
      github: "https://github.com/dania-arshad/abaya-store",
      demo: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Exploring the intersection of AI/ML and web development through innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isVisible = visibleProjects.includes(index);
            
            return (
              <Card
                key={index}
                data-index={index}
                className={`project-card glass-card hover-glow group overflow-hidden transition-all duration-700 ${
                  isVisible ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Project Image with Circular Animation */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`project-circle absolute inset-0 ${isVisible ? 'project-circle' : ''}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Project Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:border-primary transition-colors"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-primary-glow"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default Projects;
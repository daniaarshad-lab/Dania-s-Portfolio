import { useState, useEffect } from 'react';
import { Github, ExternalLink, Brain, Heart, Eye, ShoppingCart, FileText, Cloud, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import project images
import breastCancerImg from '@/assets/breast-cancer-project.jpg';
import skinLesionImg from '@/assets/skin-lesion-project.jpg';
import blindAppImg from '@/assets/blind-app-project.jpg';
import CICDImg from '@/assets/CICD-project.jpg';
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import blogImg from '@/assets/blog-project.jpg';
import universityImg from '@/assets/university-project.jpg';
import abayaStoreImg from '@/assets/abaya-store-project.jpg';
import VPNmonitoringImg from '@/assets/VPN-monitoring-project.jpg';
import AhmedDebbaghImg from '@/assets/Ahmed-Debbagh-project.jpg';
import VPNAPPImg from '@/assets/VPN-APP-project.jpg';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const projects = [
    {
      title: "Seeing The Unseen - AI Assistant for Visually Impaired",
      category: "AI Assistant APP",
      description: "Vision-based assistant empowering visually impaired users through object detection, OCR, currency recognition, person identification, and intelligent scene description with real-time audio feedback.",
      image: blindAppImg,
      icon: Brain,
      tech: ["Python", "Flutter", "FastAPI", "Gemini 2.0", "LangChain", "TensorFlow", "YOLOv4", "YOLOv11"],
      github: "https://github.com/daniaarshad-lab/seeing-the-unseen",
      supervisor: "Dr. Faisal Azam",
      highlights: [
        "YOLOv4 achieving 93% accuracy at 60 FPS",
        "Currency recognition with 95% accuracy using YOLOv11",
        "FaceNet for person identification with embeddings"
      ]
    },
    {
      title: "End-to-End DevOps CI/CD Pipeline on AWS",
      category: "DevOps",
      description: "Complete CI/CD pipeline automating build, test, and deployment workflows with monitoring, alerting, and team collaboration practices.",
      image: CICDImg,
      icon: Cloud,
      tech: ["AWS", "Docker", "DockerHub", "Jenkins", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      github: "https://github.com/daniaarshad-lab/CI-CD-Pipeline-of-MERN-Ecommerce",
      highlights: [
        "Terraform-provisioned AWS infrastructure",
        "Kubernetes container orchestration",
        "Real-time monitoring with Prometheus & Grafana"
      ]
    },
     {
      title: "VPN User Activity Monitoring Dashboard",
      category: "Cloud Computing/Web Dashboard",
      description: "Logged VPN users’ domain-level browsing activity by date and in total, linking queries to their VPN and real IPs,ensuring privacy over HTTPS traffic.",
      image: VPNmonitoringImg,
      icon: FileText,
      tech: ["Vite", "TypeScript", "React", "Cloud Functions","shadcn/ui","Tailwind CSS"],
      github: "https://github.com/daniaarshad-lab/VPN-User-Monitoring-Dashboard",
      highlights: [
        "User Connection & Disconnection Logs",
        "User Activity monitoring(Site visits)"
       
        
      ]
    },
     {
      title: "VPN App",
      category: "Cloud Computing/Full Stack",
      description: "A multi-protocol VPN client (OpenVPN, IKEv2, L2TP, IKEv3, IPsec) with multi-country servers, and a fully AWS Cloud–deployed backend.",
      image: VPNAPPImg,
      icon: FileText,
      tech: ["Flutter", "Dartt", "AWS Cloud","OpenVPN", "IKEv2", "Ubuntu","Node.js "],
      github: "https://github.com/daniaarshad-lab/VPN-APP-OpenVpn-IKEV2-L2TP-",
      highlights: [
        "OpenVPN, IKEv2, L2TP, IKEv3, and IPsec connections.",
        "Fully deployed on AWS for scalable and reliable performance."
      ]
    },
    {
      title: "Breast Cancer Detection using Neural Networks",
      category: "Data Science",
      description: "Classification model for tumor detection using the Breast Cancer Wisconsin dataset with custom neural network architecture and interactive Streamlit application.",
      image: breastCancerImg,
      icon: Heart,
      tech: ["Python", "Google Colab", "Streamlit", "Matplotlib", "NumPy", "Pandas"],
      github: "https://github.com/daniaarshad-lab/Breast-Cancer-Classification",
      colab: "https://colab.research.google.com/drive/1vDenE1sYLPl3AdgcMYYzsBvlcm5S5WtD?usp=sharing",
      highlights: [
        "Custom neural network for binary classification",
        "Interactive Streamlit web application",
        "GPU-accelerated training on Google Colab"
      ]
    },
    {
      title: "Skin Lesion Detection System",
      category: "Deep Learning",
      description: "Deep learning model to classify skin lesions using medical image datasets with ResNet-152 CNN for early detection of dermatological conditions.",
      image: skinLesionImg,
      icon: Eye,
      tech: ["Python", "TensorFlow", "Keras", "ResNet-152", "OpenCV", "NumPy"],
      github: "https://github.com/daniaarshad-lab/Skin-Lesion-Detection-System",
      colab: "https://colab.research.google.com/drive/1g9szkhb_DZ_gYVH3E92-2Zep5spaTLFK?usp=sharing",
      highlights: [
        "Transfer learning with ResNet-152",
        "Data augmentation for improved generalization",
        "Medical diagnostics application"
      ]
    },
    {
      title: "Islamic Scholar Biography Website",
      category: "Full Stack Website",
      description: "A modern, and content-rich website dedicated to presenting the life, teachings, and legacy of an Islamic scholar.",
      image: AhmedDebbaghImg,
      icon: BookOpen,
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
      github: "https://github.com/daniaarshad-lab/SheikhAhmedBiography",
      highlights: [
        "Calm, minimal designed for presence and narrative clarity",
        "CMS-driven, modular frontend with curated collections",
        "Vision-led, teacher-centric architecture "
      ]
    },
    {
      title: "Full Stack Blog Publishing Platform",
      category: "Full Stack Website",
      description: "Comprehensive tech blog platform with user authentication, article management, admin review workflow, and Row Level Security policies.",
      image: blogImg,
      icon: FileText,
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/daniaarshad-lab/blogpostwebsite",
      highlights: [
        "Role-based access control",
        "Real-time publishing pipeline",
        "Supabase RLS for secure data access"
      ]
    },
    {
      title: "Full Stack E-Commerce Platform",
      category: "Full Stack Website",
      description: "Complete e-commerce platform with user authentication, product catalog, cart, checkout system, and Google Maps integration for delivery tracking.",
      image: ecommerceImg,
      icon: ShoppingCart,
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Google Maps API", "Email Services"],
      github: "https://github.com/daniaarshad-lab/Full-Stack-E-Commerce-Website",
      highlights: [
        "Separate user and admin panels",
        "Google Maps for delivery tracking",
        "Secure transactions and order management"
      ]
    },
 
    {
      title: "University Event Management System",
      category: "Web Development",
      description: "Event management platform for universities with event creation, student registration, scheduling, and analytics features.",
      image: universityImg,
      icon: FileText,
      tech: ["HTML", "CSS", "Bootstrap","MySQL"],
      github: "https://github.com/daniaarshad-lab/sports-week",
      highlights: [
        "A multipage website for COMSATS Sports Week",
        "featuring dynamic content like a Carousel, Jumbotron, Cards, and Grids.",
        "Fully responsive"
      ]
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
      { threshold: 0.1 }
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
        <p
          className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hands-on projects in DevOps,Cloud Computing, AI/ML solutions, and Full-Stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto [grid-auto-rows:1fr]">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          const isVisible = visibleProjects.includes(index);

          return (
            <div key={index} data-index={index} className="project-card group relative h-full">
              {/* Gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

              <Card
                className={`relative glass-card rounded-3xl overflow-hidden bg-background/80 backdrop-blur-xl border-0 h-full flex flex-col transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                }}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image (fixed height) */}
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover project-image-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      {project.supervisor && (
                        <p className="text-xs text-primary mb-2">
                          Supervisor: {project.supervisor}
                        </p>
                      )}

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {project.highlights && (
                        <ul className="mb-4 space-y-1">
                          {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-xs text-muted-foreground flex items-start"
                            >
                              <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Buttons always at bottom */}
                    <div className="flex gap-2 flex-wrap mt-auto">
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

                      {project.colab && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:border-primary transition-colors"
                          asChild
                        >
                          <a href={project.colab} target="_blank" rel="noopener noreferrer">
                            Colab
                          </a>
                        </Button>
                      )}

                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-primary-glow"
                        asChild
                      >
                        <a
                          href={`/project/${project.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "")}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

  
};

export default Projects;

import { useParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Cpu, Database, Globe, Shield, Play, Pause, RotateCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import project images
import breastCancerImg from '@/assets/breast-cancer-project.jpg';
import skinLesionImg from '@/assets/skin-lesion-project.jpg';
import blindAppImg from '@/assets/blind-app-project.jpg';
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import blogImg from '@/assets/blog-project.jpg';
import universityImg from '@/assets/university-project.jpg';
import abayaStoreImg from '@/assets/abaya-store-project.jpg';

// To add your demo videos:
// 1. Place your .mp4 files in the public/videos/ folder
// 2. Name them: breast-cancer-demo.mp4, seeing-unseen-demo.mp4, blog-platform-demo.mp4

// Video Player Component
const VideoPlayer = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[600px] object-contain bg-black"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={togglePlay}
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
            >
              {isPlaying ? (
                <><Pause className="w-4 h-4 mr-2" /> Pause</>
              ) : (
                <><Play className="w-4 h-4 mr-2" /> Play</>
              )}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={restartVideo}
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
            >
              <RotateCcw className="w-4 h-4 mr-2" /> Restart
            </Button>
          </div>
        </div>
        <div className="p-4 text-center text-muted-foreground">
          {title} - Demo Video
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projectsData: Record<string, any> = {
    'breast-cancer-detection-using-neural-networks': {
      title: "Breast Cancer Detection using Neural Networks",
      category: "AI/ML Healthcare",
      description: "Classification model for tumor detection using the Breast Cancer Wisconsin dataset with custom neural network architecture.",
      longDescription: "This comprehensive AI-powered system leverages custom neural network architecture to analyze medical data for breast cancer detection. The system employs classification algorithms trained on the Breast Cancer Wisconsin dataset, achieving high accuracy in identifying potential malignant tissues. The solution includes an interactive Streamlit application for medical professionals.",
      image: breastCancerImg,
      demoVideo: "/videos/breast-cancer-demo.mp4", // Replace with your actual video file
      demoImages: [
        "/images/breast-cancer-1.jpg", // Replace with your actual images
        "/images/breast-cancer-2.jpg",
        "/images/breast-cancer-3.jpg",
        "/images/breast-cancer-4.jpg"
      ],
      tech: ["Python", "Google Colab", "Streamlit", "Matplotlib", "NumPy", "Pandas"],
      features: [
        "Custom neural network for binary classification",
        "Interactive Streamlit web application",
        "GPU-accelerated training on Google Colab",
        "Comprehensive data visualization",
        "High accuracy detection algorithms",
        "Real-time prediction interface"
      ],
      challenges: [
        "Handling medical imaging datasets",
        "Ensuring model accuracy and reliability",
        "Creating an intuitive interface for medical professionals",
        "Optimizing neural network architecture"
      ],
      github: "https://github.com/daniaarshad-lab/breast-cancer-detection",
      colab: "https://colab.research.google.com/",
      duration: "3 months",
      team: "Solo Project",
      status: "Completed"
    },
    'skin-lesion-detection-system': {
      title: "Skin Lesion Detection System",
      category: "AI/ML Dermatology",
      description: "Deep learning model to classify skin lesions using ResNet-152 CNN for early detection of dermatological conditions.",
      longDescription: "An innovative computer vision system designed to assist dermatologists in the early detection of skin lesions. The system uses ResNet-152 transfer learning and advanced image processing techniques to analyze dermoscopic images, providing accurate classification of various skin conditions.",
      image: skinLesionImg,
      tech: ["Python", "TensorFlow", "Keras", "ResNet-152", "OpenCV", "NumPy"],
      features: [
        "Transfer learning with ResNet-152",
        "Data augmentation for improved generalization",
        "Medical diagnostics application",
        "Multi-class skin lesion classification",
        "Real-time processing capabilities",
        "Detailed analysis reports"
      ],
      challenges: [
        "Handling varying image qualities and lighting conditions",
        "Balancing model sensitivity and specificity",
        "Creating an intuitive interface for medical professionals",
        "Ensuring robust performance across different skin types"
      ],
      github: "https://github.com/daniaarshad-lab/skin-lesion-detection",
      colab: "https://colab.research.google.com/",
      duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    },
    'seeing-the-unseen---ai-assistant-for-visually-impaired': {
      title: "Seeing The Unseen - AI Assistant for Visually Impaired",
      category: "AI/ML Accessibility",
      description: "Vision-based assistant empowering visually impaired users through object detection, OCR, currency recognition, and scene description.",
      longDescription: "A collaborative mobile application project focused on creating an AI-powered assistive technology for visually impaired individuals. The app combines computer vision with YOLOv4 and YOLOv11, natural language processing with Gemini 2.0, and voice interaction to provide real-time environmental awareness, object recognition, currency identification, and navigation assistance.",
      image: blindAppImg,
      demoVideo: "/videos/seeing-unseen-demo.mp4", // Replace with your actual video file
      tech: ["Python", "Flutter", "FastAPI", "Gemini 2.0", "LangChain", "TensorFlow", "YOLOv4", "YOLOv11"],
      features: [
        "YOLOv4 achieving 93% accuracy at 60 FPS",
        "Currency recognition with 95% accuracy using YOLOv11",
        "FaceNet for person identification with embeddings",
        "Voice-guided navigation system",
        "Text-to-speech for written content",
        "Real-time scene description"
      ],
      challenges: [
        "Optimizing AI models for mobile devices",
        "Ensuring fast and accurate real-time processing",
        "Creating an accessible user interface",
        "Implementing reliable voice interaction"
      ],
      github: "https://github.com/daniaarshad-lab/seeing-the-unseen",
      duration: "8 months",
      team: "4 members",
      status: "In Development"
    },
    'full-stack-e-commerce-platform': {
      title: "Full Stack E-Commerce Platform",
      category: "Full-Stack Web Application",
      description: "Complete e-commerce platform with user authentication, product catalog, cart, checkout system, and Google Maps integration.",
      longDescription: "A comprehensive e-commerce platform built with Laravel and PHP, featuring a complete shopping experience from product browsing to payment processing. The application includes advanced inventory management, separate user and admin panels, Google Maps integration for delivery tracking, and secure email services.",
      image: ecommerceImg,
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Google Maps API", "Email Services"],
      features: [
        "Separate user and admin panels",
        "Google Maps for delivery tracking",
        "Secure transactions and order management",
        "Complete shopping cart functionality",
        "User authentication and authorization",
        "Responsive design for all devices"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Managing complex state across panels",
        "Ensuring scalable database design",
        "Creating responsive and intuitive UI"
      ],
      github: "https://github.com/daniaarshad-lab/ecommerce-platform",
      duration: "5 months",
      team: "Solo Project",
      status: "Completed"
    },
    'full-stack-blog-publishing-platform': {
      title: "Full Stack Blog Publishing Platform",
      category: "Full-Stack Web Application",
      description: "Comprehensive tech blog platform with user authentication, article management, and admin review workflow.",
      longDescription: "A feature-rich blog publishing platform designed for modern content creators. Built with React, TypeScript and Supabase, the platform includes role-based access control, real-time publishing pipeline, and Row Level Security policies for secure data access.",
      image: blogImg,
      demoVideo: "/videos/blog-platform-demo.mp4", // Replace with your actual video file
      demoImages: [
        "/images/blog-1.jpg", // Replace with your actual images
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
        "/images/blog-4.jpg"
      ],
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      features: [
        "Role-based access control",
        "Real-time publishing pipeline",
        "Supabase RLS for secure data access",
        "Rich text editor with multimedia support",
        "Tag and category management",
        "Responsive design"
      ],
      challenges: [
        "Implementing SEO-friendly routing",
        "Creating a powerful yet user-friendly editor",
        "Managing user-generated content securely",
        "Optimizing performance for large content volumes"
      ],
      github: "https://github.com/daniaarshad-lab/blog-platform",
      duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    },
    'end-to-end-devops-cicd-pipeline-on-aws': {
      title: "End-to-End DevOps CI/CD Pipeline on AWS",
      category: "DevOps",
      description: "Complete CI/CD pipeline automating build, test, and deployment workflows with monitoring and alerting.",
      longDescription: "A comprehensive DevOps pipeline built on AWS infrastructure using Terraform for infrastructure provisioning. The pipeline includes Docker containerization, Jenkins for CI/CD, Kubernetes for orchestration, and Prometheus with Grafana for real-time monitoring and alerting.",
      image: blogImg,
      tech: ["AWS", "Docker", "DockerHub", "Jenkins", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      features: [
        "Terraform-provisioned AWS infrastructure",
        "Kubernetes container orchestration",
        "Real-time monitoring with Prometheus & Grafana",
        "Automated build and test workflows",
        "Docker containerization",
        "Scalable deployment architecture"
      ],
      challenges: [
        "Managing complex infrastructure as code",
        "Ensuring zero-downtime deployments",
        "Implementing comprehensive monitoring",
        "Handling security across the pipeline"
      ],
      github: "https://github.com/daniaarshad-lab/devops-cicd-pipeline",
      duration: "3 months",
      team: "Solo Project",
      status: "Completed"
    },
    'online-voting-system': {
      title: "Online Voting System",
      category: "Full-Stack Web Application",
      description: "Secure online voting platform with user authentication, candidate management, and real-time vote counting.",
      longDescription: "A secure and reliable online voting system designed for elections with features including user authentication, candidate management, real-time vote counting, and comprehensive admin dashboard for election management and monitoring.",
      image: universityImg,
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "AJAX"],
      features: [
        "Secure vote casting mechanism",
        "Real-time result tracking",
        "Admin dashboard for election control",
        "User authentication and verification",
        "Candidate management system",
        "Audit trail for transparency"
      ],
      challenges: [
        "Ensuring vote security and integrity",
        "Preventing duplicate voting",
        "Real-time vote counting accuracy",
        "Scalability for large elections"
      ],
      github: "https://github.com/daniaarshad-lab/voting-system",
      duration: "2 months",
      team: "Solo Project",
      status: "Completed"
    },
    'banking-system-application': {
      title: "Banking System Application",
      category: "Full-Stack Application",
      description: "Comprehensive banking system with account management, fund transfers, and secure authentication.",
      longDescription: "A full-featured banking system application built with Java and Spring Boot, featuring account management, secure fund transfers, detailed transaction history, and JWT-based authentication for all financial operations.",
      image: ecommerceImg,
      tech: ["Java", "Spring Boot", "MySQL", "Hibernate", "REST API", "JWT"],
      features: [
        "Secure fund transfer system",
        "Transaction history tracking",
        "Account balance management",
        "JWT-based authentication",
        "Account creation and management",
        "Statement generation"
      ],
      challenges: [
        "Implementing secure financial transactions",
        "Ensuring data consistency",
        "Building robust authentication",
        "Handling concurrent transactions"
      ],
      github: "https://github.com/daniaarshad-lab/banking-system",
      duration: "3 months",
      team: "Solo Project",
      status: "Completed"
    },
    'modest-wear-e-commerce-platform': {
      title: "Modest Wear E-Commerce Platform",
      category: "E-Commerce Web Application",
      description: "Elegant e-commerce platform for modest fashion including abayas with custom product catalog and secure checkout.",
      longDescription: "An elegant and culturally-sensitive e-commerce platform specializing in modest fashion. The website features beautiful product galleries with size and color variations, secure Stripe payment integration, and a smooth shopping experience built with React and Node.js.",
      image: abayaStoreImg,
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe"],
      features: [
        "Beautiful product galleries",
        "Size and color variations",
        "Secure payment integration",
        "Customer account management",
        "Order tracking system",
        "Wishlist functionality"
      ],
      challenges: [
        "Creating culturally appropriate design",
        "Managing complex product variations",
        "Implementing international payment processing",
        "Optimizing images for fast loading"
      ],
      github: "https://github.com/daniaarshad-lab/modest-wear",
      duration: "3 months",
      team: "Solo Project",
      status: "Completed"
    },
    'university-event-management-system': {
      title: "University Event Management System",
      category: "Full-Stack Web Application",
      description: "Event management platform for universities with event creation, student registration, and analytics.",
      longDescription: "A comprehensive event management system specifically designed for university environments. The platform handles event creation, student registration, scheduling, and provides detailed analytics for event organizers using React and Firebase.",
      image: universityImg,
      
      tech: ["React", "Firebase", "Material-UI", "Cloud Functions"],
      features: [
        "Event creation and management",
        "Student registration system",
        "Real-time analytics",
        "Calendar integration",
        "Automated notifications",
        "Multi-role user management"
      ],
      challenges: [
        "Managing complex scheduling requirements",
        "Implementing real-time updates across users",
        "Creating intuitive admin interfaces",
        "Handling large concurrent registrations"
      ],
      github: "https://github.com/daniaarshad-lab/university-events",
      duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    },
    'islamic-teaching-website': {
      title: "Islamic Teaching Website",
      category: "Educational Web Application",
      description: "Comprehensive Islamic education platform with interactive lessons, Quran recitation, and learning management features.",
      longDescription: "A beautifully designed Islamic education platform that provides comprehensive religious learning resources. The website includes Quran recitation with translation, Hadith collections, prayer time calculations, interactive quizzes, and progress tracking for students. Built with modern web technologies to create an engaging and accessible learning experience.",
      image: universityImg,
      demoVideo: "/videos/islamic-teaching-demo.mp4", // Replace with your actual video file
      demoImages: [
        "/images/islamic-1.jpg", // Replace with your actual images
        "/images/islamic-2.jpg",
        "/images/islamic-3.jpg",
        "/images/islamic-4.jpg"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
      features: [
        "Interactive Quran recitation with translations",
        "Hadith collection and search functionality",
        "Prayer time calculator with notifications",
        "Progress tracking for students",
        "Interactive quizzes and assessments",
        "Multi-language support"
      ],
      challenges: [
        "Accurate Arabic text rendering and RTL support",
        "Implementing prayer time calculations for global locations",
        "Creating an intuitive learning management system",
        "Ensuring accessibility across all devices"
      ],
      github: "https://github.com/daniaarshad-lab/islamic-teaching",
      duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    }
  };

  const project = projectsData[projectId || ''];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>

        {/* Demo Video Section */}
        {project.demoVideo && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Project Demo</h2>
            <VideoPlayer videoUrl={project.demoVideo} title={project.title} />
          </div>
        )}

        {/* Demo Images Gallery */}
        {project.demoImages && project.demoImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Project Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.demoImages.map((img: string, index: number) => (
                <Card key={index} className="glass-card overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">{challenge}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Project Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team</p>
                      <p className="font-medium">{project.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-4 h-4 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">{project.status}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Repository
                  </a>
                  {project.colab && (
                    <a 
                      href={project.colab} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Google Colab Notebook
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

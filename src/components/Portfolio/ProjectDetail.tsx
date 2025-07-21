import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Cpu, Database, Globe, Shield } from 'lucide-react';
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

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projectsData: Record<string, any> = {
    'breast-cancer': {
      title: "Breast Cancer Detection System",
      category: "AI/ML Healthcare",
      description: "Advanced machine learning system for early breast cancer detection using medical imaging and deep learning algorithms.",
      longDescription: "This comprehensive AI-powered system leverages state-of-the-art deep learning techniques to analyze medical imaging data for early breast cancer detection. The system employs convolutional neural networks (CNNs) trained on extensive datasets of mammography images, achieving high accuracy in identifying potential malignant tissues. The solution includes preprocessing pipelines for image enhancement, feature extraction modules, and a user-friendly interface for medical professionals.",
      image: breastCancerImg,
      tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Medical Imaging", "Keras", "NumPy", "Matplotlib"],
      features: [
        "Advanced CNN architecture for image classification",
        "Real-time medical image processing",
        "High accuracy detection algorithms",
        "Secure patient data handling",
        "Intuitive interface for medical professionals",
        "Comprehensive reporting system"
      ],
      challenges: [
        "Handling large medical imaging datasets",
        "Ensuring model accuracy and reliability",
        "Implementing HIPAA-compliant security measures",
        "Optimizing inference time for real-time detection"
      ],
      github: "https://github.com/dania-arshad/breast-cancer-detection",
      demo: "#",
      duration: "6 months",
      team: "Solo Project",
      status: "Completed"
    },
    'skin-lesion': {
      title: "Skin Lesion Detection System",
      category: "AI/ML Dermatology",
      description: "AI-powered dermatology assistant for skin lesion analysis and early melanoma detection using computer vision.",
      longDescription: "An innovative computer vision system designed to assist dermatologists in the early detection of skin lesions and potential melanoma. The system uses advanced image processing techniques and machine learning algorithms to analyze dermoscopic images, providing accurate classification of various skin conditions. Built with PyTorch and featuring a React-based frontend, the application offers real-time analysis capabilities.",
      image: skinLesionImg,
      tech: ["Python", "PyTorch", "Computer Vision", "React", "REST API", "OpenCV", "scikit-learn", "PIL"],
      features: [
        "Multi-class skin lesion classification",
        "Dermoscopic image analysis",
        "Real-time processing capabilities",
        "Interactive web interface",
        "Detailed analysis reports",
        "Integration with medical databases"
      ],
      challenges: [
        "Handling varying image qualities and lighting conditions",
        "Balancing model sensitivity and specificity",
        "Creating an intuitive interface for medical professionals",
        "Ensuring robust performance across different skin types"
      ],
      github: "https://github.com/dania-arshad/skin-lesion-detection",
      demo: "#",
      duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    },
    'blind-app': {
      title: "AI-Assistive Blind App",
      category: "AI/ML Accessibility",
      description: "Team project developing an AI-powered mobile application to assist visually impaired users with navigation and object recognition.",
      longDescription: "A collaborative mobile application project focused on creating an AI-powered assistive technology for visually impaired individuals. The app combines computer vision, natural language processing, and voice interaction to provide real-time environmental awareness, object recognition, and navigation assistance. Built using React Native for cross-platform compatibility and TensorFlow Lite for on-device AI processing.",
      image: blindAppImg,
      tech: ["React Native", "TensorFlow Lite", "Voice AI", "Mobile Development", "Accessibility", "Computer Vision", "NLP", "GPS"],
      features: [
        "Real-time object recognition and description",
        "Voice-guided navigation system",
        "Text-to-speech for written content",
        "Obstacle detection and avoidance",
        "Emergency assistance features",
        "Offline functionality for core features"
      ],
      challenges: [
        "Optimizing AI models for mobile devices",
        "Ensuring fast and accurate real-time processing",
        "Creating an accessible user interface",
        "Implementing reliable voice interaction",
        "Coordinating team development efforts"
      ],
      github: "https://github.com/dania-arshad/ai-assistive-blind-app",
      demo: "#",
      duration: "8 months",
      team: "4 members",
      status: "In Development"
    },
    'ecommerce': {
      title: "E-Commerce Platform",
      category: "Full-Stack Web Application",
      description: "Full-stack e-commerce solution with advanced features including payment integration, inventory management, and analytics.",
      longDescription: "A comprehensive e-commerce platform built with modern web technologies, featuring a complete shopping experience from product browsing to payment processing. The application includes advanced inventory management, real-time analytics, user authentication, and secure payment integration. Built with React frontend, Node.js backend, and MongoDB database for scalable performance.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT", "Socket.io"],
      features: [
        "Complete shopping cart functionality",
        "Secure payment processing with Stripe",
        "Advanced product search and filtering",
        "Real-time inventory management",
        "User authentication and authorization",
        "Order tracking and management",
        "Admin dashboard with analytics",
        "Responsive design for all devices"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Managing complex state with Redux",
        "Ensuring scalable database design",
        "Creating responsive and intuitive UI",
        "Handling real-time inventory updates"
      ],
      github: "https://github.com/dania-arshad/ecommerce-platform",
      demo: "#",
      duration: "5 months",
      team: "Solo Project",
      status: "Completed"
    },
    'blog': {
      title: "Blog Publishing Platform",
      category: "Full-Stack Web Application",
      description: "Modern content management system with rich text editing, user authentication, and social features for bloggers.",
      longDescription: "A feature-rich blog publishing platform designed for modern content creators. Built with Next.js for optimal performance and SEO, the platform includes a powerful rich text editor, user management system, and social interaction features. The application uses PostgreSQL with Prisma ORM for robust data management and NextAuth for secure authentication.",
      image: blogImg,
      tech: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS", "Vercel", "Rich Text Editor", "SEO"],
      features: [
        "Rich text editor with multimedia support",
        "User authentication and profiles",
        "Comment system and social interactions",
        "SEO-optimized content delivery",
        "Tag and category management",
        "Draft and publishing workflow",
        "Responsive design",
        "Real-time notifications"
      ],
      challenges: [
        "Implementing SEO-friendly routing",
        "Creating a powerful yet user-friendly editor",
        "Managing user-generated content securely",
        "Optimizing performance for large content volumes",
        "Implementing real-time features"
      ],
      github: "https://github.com/dania-arshad/blog-platform",
      demo: "#",
      duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    },
    'university': {
      title: "University Event Management",
      category: "Full-Stack Web Application",
      description: "Comprehensive event management system for universities with scheduling, registration, and analytics features.",
      longDescription: "A comprehensive event management system specifically designed for university environments. The platform handles event creation, student registration, scheduling conflicts, and provides detailed analytics for event organizers. Built with React and Firebase for real-time capabilities, the system supports multiple user roles and complex event management workflows.",
      image: universityImg,
      tech: ["React", "Firebase", "Material-UI", "Cloud Functions", "Real-time Database", "Authentication", "Analytics"],
      features: [
        "Event creation and management",
        "Student registration system",
        "Real-time capacity tracking",
        "Automated email notifications",
        "Calendar integration",
        "Analytics and reporting",
        "Multi-role user management",
        "Mobile-responsive interface"
      ],
      challenges: [
        "Managing complex scheduling requirements",
        "Implementing real-time updates across users",
        "Creating intuitive admin interfaces",
        "Handling large numbers of concurrent registrations",
        "Ensuring data consistency in real-time environment"
      ],
      github: "https://github.com/dania-arshad/university-events",
      demo: "#",
      duration: "6 months",
      team: "Solo Project",
      status: "Completed"
    },
    'abaya-store': {
      title: "Abaya Store Website",
      category: "E-Commerce Web Application",
      description: "Elegant e-commerce platform for Islamic fashion with custom product catalog and shopping experience.",
      longDescription: "An elegant and culturally-sensitive e-commerce platform specializing in Islamic fashion, particularly abayas. The website features a beautiful, culturally-appropriate design with advanced product catalog management, secure payment processing, and a smooth shopping experience. Built with React and Node.js, the platform includes custom styling and PayPal integration for global customers.",
      image: abayaStoreImg,
      tech: ["React", "Node.js", "MongoDB", "PayPal Integration", "SCSS", "JWT", "Express", "Multer"],
      features: [
        "Elegant product catalog with image galleries",
        "Size and color variation management",
        "Secure PayPal payment integration",
        "Customer account management",
        "Order tracking system",
        "Wishlist functionality",
        "Review and rating system",
        "Cultural design elements"
      ],
      challenges: [
        "Creating culturally appropriate design",
        "Managing complex product variations",
        "Implementing international payment processing",
        "Optimizing images for fast loading",
        "Ensuring mobile responsiveness for all features"
      ],
      github: "https://github.com/dania-arshad/abaya-store",
      demo: "#",
      duration: "3 months",
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

        {/* Project Image */}
        <div className="mb-12">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Action Buttons Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" className="bg-background/90 backdrop-blur-sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button className="bg-primary/90 backdrop-blur-sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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

            {/* Documentation */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Documentation</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Database className="w-4 h-4 mr-2" />
                    API Documentation
                  </a>
                  <a href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Globe className="w-4 h-4 mr-2" />
                    Deployment Guide
                  </a>
                  <a href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Overview
                  </a>
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
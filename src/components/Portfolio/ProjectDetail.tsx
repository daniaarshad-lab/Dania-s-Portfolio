// import { useParams, Link } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import { ArrowLeft, Github, ExternalLink, Calendar, Users, Cpu, Database, Globe, Shield, Play, Pause, RotateCcw } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// // Import project images
// import breastCancerImg from '@/assets/breast-cancer-project.jpg';
// import skinLesionImg from '@/assets/skin-lesion-project.jpg';
// import blindAppImg from '@/assets/blind-app-project.jpg';
// import ecommerceImg from '@/assets/ecommerce-project.jpg';
// import blogImg from '@/assets/blog-project.jpg';
// import universityImg from '@/assets/university-project.jpg';
// import CICDImg from '@/assets/CICD-project.jpg';
// // import abayaStoreImg from '@/assets/abaya-store-project.jpg';
// import VPNmonitoringImg from '@/assets/VPN-monitoring-project.jpg';
// import VPNAPPImg from '@/assets/VPN-APP-project.jpg';
// import AhmedDebbaghImg from '@/assets/Ahmed-Debbagh-project.jpg';



// // E-commerce demo images
// import ecommerceDemo1 from '@/assets/ecommerce/1.png';
// import ecommerceDemo2 from '@/assets/ecommerce/2.png';
// import ecommerceDemo3 from '@/assets/ecommerce/3.png';
// import ecommerceDemo4 from '@/assets/ecommerce/4.png';
// import ecommerceDemo5 from '@/assets/ecommerce/5.png';
// import ecommerceDemo6 from '@/assets/ecommerce/6.png';
// import ecommerceDemo7 from '@/assets/ecommerce/7.png';
// import ecommerceDemo8 from '@/assets/ecommerce/8.png';
// import ecommerceDemo9 from '@/assets/ecommerce/9.png';
// import ecommerceDemo10 from '@/assets/ecommerce/10.png';
// import ecommerceDemo11 from '@/assets/ecommerce/11.png';
// import ecommerceDemo12 from '@/assets/ecommerce/12.png';

// // University Event Management demo images
// import uniDemo1 from '@/assets/university-events/1.png';
// import uniDemo2 from '@/assets/university-events/2.png';
// import uniDemo3 from '@/assets/university-events/3.png';
// import uniDemo4 from '@/assets/university-events/4.png';
// import uniDemo5 from '@/assets/university-events/5.png';
// import uniDemo6 from '@/assets/university-events/6.png';
// import uniDemo7 from '@/assets/university-events/7.png';
// import uniDemo8 from '@/assets/university-events/8.png';
// import uniDemo9 from '@/assets/university-events/9.png';
// import uniDemo10 from '@/assets/university-events/10.png';
// import uniDemo11 from '@/assets/university-events/11.png';
// import uniDemo12 from '@/assets/university-events/12.png';
// // Blog project demo images
// import blogDemo1 from '@/assets/blog-platform/1.png';
// import blogDemo2 from '@/assets/blog-platform/2.png';
// import blogDemo3 from '@/assets/blog-platform/3.png';
// import blogDemo4 from '@/assets/blog-platform/4.png';
// import blogDemo5 from '@/assets/blog-platform/5.png';
// import blogDemo6 from '@/assets/blog-platform/6.png';
// import blogDemo7 from '@/assets/blog-platform/7.png';
// import blogDemo8 from '@/assets/blog-platform/8.png';
// import blogDemo9 from '@/assets/blog-platform/9.png';
// // Islamic Teaching Site demo images
// import islamicDemo1 from '@/assets/islamic-teaching/demo1.png';
// import islamicDemo2 from '@/assets/islamic-teaching/demo2.png';
// import islamicDemo3 from '@/assets/islamic-teaching/demo3.png';
// import islamicDemo4 from '@/assets/islamic-teaching/demo4.png';
// import islamicDemo5 from '@/assets/islamic-teaching/demo5.png';
// import islamicDemo6 from '@/assets/islamic-teaching/demo6.png';
// import islamicDemo7 from '@/assets/islamic-teaching/demo7.png';
// import islamicDemo8 from '@/assets/islamic-teaching/demo8.png';
// import islamicDemo9 from '@/assets/islamic-teaching/demo9.png';
// import islamicDemo10 from '@/assets/islamic-teaching/demo10.png';
// import islamicDemo11 from '@/assets/islamic-teaching/demo11.png';
// import islamicDemo12 from '@/assets/islamic-teaching/demo12.png';
// import islamicDemo13 from '@/assets/islamic-teaching/demo13.png';
// // Breast Cancer Detection demo images
// import bcDemo1 from '@/assets/breast-cancer/1.jpg';
// import bcDemo2 from '@/assets/breast-cancer/2.jpg';
// import bcDemo3 from '@/assets/breast-cancer/3.jpg';
// import bcDemo4 from '@/assets/breast-cancer/4.jpg';
// import bcDemo5 from '@/assets/breast-cancer/5.jpg';
// import bcDemo6 from '@/assets/breast-cancer/6.jpg';
// import bcDemo7 from '@/assets/breast-cancer/7.jpg';
// import bcDemo8 from '@/assets/breast-cancer/8.jpg';
// import bcDemo9 from '@/assets/breast-cancer/9.jpg';
// // Skin Lesion Detection demo images
// import skinDemo1 from '@/assets/skin-lesion/1.jpg';
// import skinDemo2 from '@/assets/skin-lesion/2.jpg';
// import skinDemo3 from '@/assets/skin-lesion/3.jpg';
// import skinDemo4 from '@/assets/skin-lesion/4.jpg';
// import skinDemo5 from '@/assets/skin-lesion/5.jpg';
// import skinDemo6 from '@/assets/skin-lesion/6.jpg';
// // VPN project demo images
// import vpnDemo1 from '@/assets/vpn/1.jpg';
// import vpnDemo2 from '@/assets/vpn/2.jpg';
// import vpnDemo3 from '@/assets/vpn/3.jpg';
// import vpnDemo4 from '@/assets/vpn/4.jpg';
// import vpnDemo5 from '@/assets/vpn/5.jpg';
// import vpnDemo6 from '@/assets/vpn/6.jpg';
// import vpnDemo7 from '@/assets/vpn/7.jpg';


// // VPNAPP project demo images
// import vpnappDemo1 from '@/assets/VpnAPP/1.jpg';
// import vpnappDemo2 from '@/assets/VpnAPP/2.jpg';
// import vpnappDemo3 from '@/assets/VpnAPP/3.jpg';
// import vpnappDemo4 from '@/assets/VpnAPP/4.jpg';
// import vpnappDemo5 from '@/assets/VpnAPP/5.jpg';
// import vpnappDemo6 from '@/assets/VpnAPP/6.jpg';

// // CICD project demo images
// import CICDDemo1 from '@/assets/CICD/1.jpg';
// import CICDDemo2 from '@/assets/CICD/2.jpg';
// import CICDDemo3 from '@/assets/CICD/3.jpg';
// import CICDDemo4 from '@/assets/CICD/4.jpg';
// import CICDDemo5 from '@/assets/CICD/5.jpg';
// import CICDDemo6 from '@/assets/CICD/6.jpg';
// import CICDDemo7 from '@/assets/CICD/7.jpg';
// import CICDDemo8 from '@/assets/CICD/8.jpg';
// import CICDDemo9 from '@/assets/CICD/9.jpg';
// import CICDDemo10 from '@/assets/CICD/10.jpg';
// import CICDDemo11 from '@/assets/CICD/11.jpg';
// import CICDDemo12 from '@/assets/CICD/12.jpg';
// import CICDDemo13 from '@/assets/CICD/13.jpg';


// // To add your demo videos:
// // 1. Place your .mp4 files in the public/videos/ folder
// // 2. Name them: breast-cancer-demo.mp4, seeing-unseen-demo.mp4, blog-platform-demo.mp4

// // Video Player Component
// const VideoPlayer = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const restartVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <Card className="glass-card overflow-hidden">
//       <CardContent className="p-0">
//         <div className="relative">
//           <video
//             ref={videoRef}
//             className="w-full h-auto max-h-[600px] object-contain bg-black"
//             autoPlay
//             loop
//             // muted
//             controls
//             playsInline
//           >
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Video Controls */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
//             <Button
//               variant="secondary"
//               size="sm"
//               onClick={togglePlay}
//               className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
//             >
//               {isPlaying ? (
//                 <><Pause className="w-4 h-4 mr-2" /> Pause</>
//               ) : (
//                 <><Play className="w-4 h-4 mr-2" /> Play</>
//               )}
//             </Button>
//             <Button
//               variant="secondary"
//               size="sm"
//               onClick={restartVideo}
//               className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
//             >
//               <RotateCcw className="w-4 h-4 mr-2" /> Restart
//             </Button>
//           </div>
//         </div>
//         <div className="p-4 text-center text-muted-foreground">
//           {title} - Demo Video
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const ProjectDetail = () => {
//   const { projectId } = useParams();

//   const projectsData: Record<string, any> = {
//     'breast-cancer-detection-using-neural-networks': {
//       title: "Breast Cancer Detection using Neural Networks",
//       category: "AI/ML Healthcare",
//       description: "Classification model for tumor detection using the Breast Cancer Wisconsin dataset with custom neural network architecture.",
//       longDescription: "This comprehensive AI-powered system leverages custom neural network architecture to analyze medical data for breast cancer detection. The system employs classification algorithms trained on the Breast Cancer Wisconsin dataset, achieving high accuracy in identifying potential malignant tissues. The solution includes an interactive Streamlit application for medical professionals.",
//       image: breastCancerImg,
//       demoVideo: "/videos/breast-cancer-demo.mp4", // Replace with your actual video file
//       demoImages: [
//        bcDemo1, bcDemo2, bcDemo3, bcDemo4, bcDemo5, bcDemo6, bcDemo7, bcDemo8, bcDemo9
//       ],
//       tech: ["Python", "Google Colab", "Streamlit", "Matplotlib", "NumPy", "Pandas"],
//       features: [
//         "Custom neural network for binary classification",
//         "Interactive Streamlit web application",
//         "GPU-accelerated training on Google Colab",
//         "Comprehensive data visualization",
//         "High accuracy detection algorithms",
//         "Real-time prediction interface"
//       ],
//       challenges: [
//         "Handling medical imaging datasets",
//         "Ensuring model accuracy and reliability",
//         "Creating an intuitive interface for medical professionals",
//         "Optimizing neural network architecture"
//       ],
//        github: "https://github.com/daniaarshad-lab/Breast-Cancer-Classification",
//       colab: "https://colab.research.google.com/drive/1vDenE1sYLPl3AdgcMYYzsBvlcm5S5WtD?usp=sharing",
//       // duration: "3 months",
//       team: "Solo Project",
//       status: "Completed"
//     },

//     'skin-lesion-detection-system': {
//       title: "Skin Lesion Detection System",
//       category: "AI/ML Dermatology",
//       description: "Deep learning model to classify skin lesions using ResNet-152 CNN for early detection of dermatological conditions.",
//       longDescription: "An innovative computer vision system designed to assist dermatologists in the early detection of skin lesions. The system uses ResNet-152 transfer learning and advanced image processing techniques to analyze dermoscopic images, providing accurate classification of various skin conditions.",
//       image: skinLesionImg,
//       demoImages: [
//       skinDemo1, skinDemo2, skinDemo3, skinDemo4, skinDemo5, skinDemo6
//       ],
//       tech: ["Python", "TensorFlow", "Keras", "ResNet-152", "OpenCV", "NumPy"],
//       features: [
//         "Transfer learning with ResNet-152",
//         "Data augmentation for improved generalization",
//         "Medical diagnostics application",
//         "Multi-class skin lesion classification",
//         "Real-time processing capabilities",
//         "Detailed analysis reports"
//       ],
//       challenges: [
//         "Handling varying image qualities and lighting conditions",
//         "Balancing model sensitivity and specificity",
//         "Creating an intuitive interface for medical professionals",
//         "Ensuring robust performance across different skin types"
//       ],
//       github: "https://github.com/daniaarshad-lab/Skin-Lesion-Detection-System",
//       colab: "https://colab.research.google.com/drive/1g9szkhb_DZ_gYVH3E92-2Zep5spaTLFK?usp=sharing",
//       // duration: "4 months",
//       team: "Solo Project",
//       status: "Completed"
//     },

//     'seeing-the-unseen---ai-assistant-for-visually-impaired': {
//       title: "Seeing The Unseen - AI Assistant for Visually Impaired",
//       category: "AI/ML Accessibility",
//       description: "Vision-based assistant empowering visually impaired users through object detection, OCR, currency recognition, and scene description.",
//       longDescription: "A collaborative mobile application project focused on creating an AI-powered assistive technology for visually impaired individuals. The app combines computer vision with YOLOv4 and YOLOv11, natural language processing with Gemini 2.0, and voice interaction to provide real-time environmental awareness, object recognition, currency identification, and navigation assistance.",
//       image: blindAppImg,
//       demoVideo: "/videos/SeeingTheUnseen.mp4", // Replace with your actual video file
//       tech: ["Python", "Flutter", "FastAPI", "Gemini 2.0", "LangChain", "TensorFlow", "YOLOv4", "YOLOv11"],
//       features: [
//         "YOLOv4 achieving 93% accuracy at 60 FPS",
//         "Currency recognition with 95% accuracy using YOLOv11",
//         "FaceNet for person identification with embeddings",
//         "Voice-guided navigation system",
//         "Text-to-speech for written content",
//         "Real-time scene description"
//       ],
//       challenges: [
//         "Optimizing AI models for mobile devices",
//         "Ensuring fast and accurate real-time processing",
//         "Creating an accessible user interface",
//         "Implementing reliable voice interaction"
//       ],
//       github: "https://github.com/daniaarshad-lab/seeing-the-unseen",
//       // duration: "8 months",
//       team: "2 members",
//       status: "Completed"
//     },

//     'full-stack-e-commerce-platform': {
//       title: "Full Stack E-Commerce Platform",
//       category: "Full-Stack Web Application",
//       description: "Complete e-commerce platform with user authentication, product catalog, cart, checkout system, and Google Maps integration.",
//       longDescription: "A comprehensive e-commerce platform built with Laravel and PHP, featuring a complete shopping experience from product browsing to payment processing. The application includes advanced inventory management, separate user and admin panels, Google Maps integration for delivery tracking, and secure email services.",
//       image: ecommerceImg,
//       demoImages: [ecommerceDemo1, ecommerceDemo2, ecommerceDemo3, ecommerceDemo4, ecommerceDemo5, ecommerceDemo6, ecommerceDemo7, ecommerceDemo8, ecommerceDemo9, ecommerceDemo10, ecommerceDemo11, ecommerceDemo12],
//       tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Google Maps API", "Email Services"],
//       features: [
//         "Separate user and admin panels",
//         "Google Maps for delivery tracking",
//         "Secure transactions and order management",
//         "Complete shopping cart functionality",
//         "User authentication and authorization",
//         "Responsive design for all devices"
//       ],
//       challenges: [
//         "Implementing secure payment processing",
//         "Managing complex state across panels",
//         "Ensuring scalable database design",
//         "Creating responsive and intuitive UI"
//       ],
//       github: "https://github.com/daniaarshad-lab/Full-Stack-E-Commerce-Website",
//       // duration: "5 months",
//       team: "Solo Project",
//       status: "Completed"
//     },

//     'full-stack-blog-publishing-platform': {
//       title: "Full Stack Blog Publishing Platform",
//       category: "Full-Stack Web Application",
//       description: "Comprehensive tech blog platform with user authentication, article management, and admin review workflow.",
//       longDescription: "A feature-rich blog publishing platform designed for modern content creators. Built with React, TypeScript and Supabase, the platform includes role-based access control, real-time publishing pipeline, and Row Level Security policies for secure data access.",
//       image: blogImg,
//      demoVideo: "/videos/blog-platform-demo.mp4", // Replace with your actual video file
//       demoImages: [
//         blogDemo1, blogDemo2, blogDemo3, blogDemo4,blogDemo5, blogDemo6, blogDemo7, blogDemo8,blogDemo9
//       ],
//       tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
//       features: [
//         "Role-based access control",
//         "Real-time publishing pipeline",
//         "Supabase RLS for secure data access",
//         "Rich text editor with multimedia support",
//         "Tag and category management",
//         "Responsive design"
//       ],
//       challenges: [
//         "Implementing SEO-friendly routing",
//         "Creating a powerful yet user-friendly editor",
//         "Managing user-generated content securely",
//         "Optimizing performance for large content volumes"
//       ],
//       github: "https://github.com/daniaarshad-lab/blogpostwebsite",
//       // duration: "4 months",
//       team: "Solo Project",
//       status: "Completed"
//     },

//     'end-to-end-devops-cicd-pipeline-on-aws': {
//       title: "End-to-End DevOps CI/CD Pipeline on AWS",
//       category: "DevOps",
//       description: "Complete CI/CD pipeline automating build, test, and deployment workflows with monitoring and alerting.",
//       longDescription: "A comprehensive DevOps pipeline built on AWS infrastructure using Terraform for infrastructure provisioning. The pipeline includes Docker containerization, Jenkins for CI/CD, Kubernetes for orchestration, and Prometheus with Grafana for real-time monitoring and alerting.",
//       image: CICDImg,
//        demoImages: [
//        CICDDemo1, CICDDemo2, CICDDemo3, CICDDemo4, CICDDemo5, CICDDemo6, CICDDemo7, CICDDemo8, CICDDemo9, CICDDemo10, CICDDemo11, CICDDemo12, CICDDemo13
//       ],
//       tech: ["AWS", "Docker", "DockerHub", "Jenkins", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
//       features: [
//         "Terraform-provisioned AWS infrastructure",
//         "Kubernetes container orchestration",
//         "Real-time monitoring with Prometheus & Grafana",
//         "Automated build and test workflows",
//         "Docker containerization",
//         "Scalable deployment architecture"
//       ],
//       challenges: [
//         "Managing complex infrastructure as code",
//         "Ensuring low downtime deployments",
//         "Implementing comprehensive monitoring",
//         "Handling security across the pipeline"
//       ],
//       github: "https://github.com/daniaarshad-lab/CI-CD-Pipeline-of-MERN-Ecommerce",
//       // duration: "3 months",
//       team: "Solo Project",
//       status: "Completed"
//     },

//    'vpn-app': {
//       title: "Vpn App",
//       category: "Cloud & Full Stack App",
//       description: "A multi-protocol VPN client (OpenVPN, IKEv2, L2TP, IKEv3, IPsec) with multi-country servers, and a fully AWS Cloud–deployed backend.",
//       longDescription: "The system captures and logs VPN users’ domain-level browsing activity using DNS queries, recording which domains are accessed without capturing full URLs, ensuring privacy over HTTPS traffic. Each DNS query is linked to the user’s VPN IP and real public IP, enabling accurate user activity mapping. Logs are organized by date for detailed day-wise analysis and also aggregated overall for summary reporting. This allows administrators to monitor browsing patterns, troubleshoot issues, and maintain accountability across the VPN network.",
//       image: VPNAPPImg,
//       demoImages: [
//        vpnappDemo1, vpnappDemo2, vpnappDemo3, vpnappDemo4, vpnappDemo5, vpnappDemo6
//       ],
//      tech: ["Flutter", "Dartt", "AWS Cloud"],
//      features: [
//        "Supports Android + IOS ",
//        "Supports multiple VPN protocols including OpenVPN, IKEv2, L2TP, IKEv3, and IPsec",
//        "Connect to servers across multiple countries with a single click",
//        "Real-time bandwidth, data usage, and connection statistics display"
// ],
//      challenges: [
//       "Ensuring seamless support for multiple VPN protocols simultaneously",
//       "Handling connections across multiple countries without latency or drops",
//       "Accurately tracking bandwidth and usage data in real-time",
//       "Maintaining privacy and security while logging connection activity"
// ],

//       github: "https://github.com/daniaarshad-lab/VPN-APP-OpenVpn-IKEV2-L2TP-",
//       // duration: "3 months",
//       team: "2 Members",
//       status: "Completed"
//     },

//     'vpn-user-activity-monitoring-dashboard': {
//       title: "VPN User Activity Monitoring Dashboard",
//       category: "Web Application",
//       description: "Logged VPN users’ domain-level browsing activity by date and in total, linking queries to their VPN and real IPs.",
//       longDescription: "The system captures and logs VPN users’ domain-level browsing activity using DNS queries, recording which domains are accessed without capturing full URLs, ensuring privacy over HTTPS traffic. Each DNS query is linked to the user’s VPN IP and real public IP, enabling accurate user activity mapping. Logs are organized by date for detailed day-wise analysis and also aggregated overall for summary reporting. This allows administrators to monitor browsing patterns, troubleshoot issues, and maintain accountability across the VPN network.",
//       image: VPNmonitoringImg,
//       demoVideo: "/videos/vpn-frontend.mp4", // Replace with your actual video file
//       demoImages: [
//        vpnDemo1, vpnDemo2, vpnDemo3, vpnDemo4, vpnDemo5, vpnDemo6, vpnDemo7
//       ],
//       tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe"],
//       features: [
//         "Real-time VPN connection logging",
//          "User ↔ VPN IP ↔ real IP mapping",
//          "DNS-based domain activity tracking",
//          "Geolocation of VPN users",
//          "Time-stamped event logging",
//          "Web dashboard and API access"
//       ],
//       challenges: [
//         "Accurately linking VPN IPs to real IPs",
//         "Capturing DNS activity without full URLs",
//         "Handling privacy and security concerns",
//         "Displaying large datasets efficiently on the dashboard"
//       ],
//       github: "https://github.com/daniaarshad-lab/VPN-User-Monitoring-Dashboard",
//       // duration: "3 months",
//       team: "Solo Project",
//       status: "Completed"
//     },

//     'university-event-management-system': {
//       title: "University Event Management System",
//       category: "Full-Stack Web Application",
//       description: "Event management platform for universities with event creation, student registration, and analytics.",
//       longDescription: "A comprehensive event management system specifically designed for university environments. The platform handles event creation, student registration, scheduling, and provides detailed analytics for event organizers using React and Firebase.",
//       image: universityImg,
//       demoImages: [uniDemo1, uniDemo2, uniDemo3, uniDemo4, uniDemo5, uniDemo6, uniDemo7, uniDemo8, uniDemo9, uniDemo10, uniDemo11, uniDemo12],
//       tech: ["HTML", "CSS", "Bootstrap","MySQL"],
//       features: [
//         "Event creation and management",
//         "Student registration ",
//         "Calendar integration"
//       ],
//       challenges: [
//         "Dsiplaying all the events in view",
//         "Creating intuitive interfaces"
//       ],
//       github: "https://github.com/daniaarshad-lab/sports-week",
//       // duration: "4 months",
//       team: "Solo Project",
//       status: "Completed"
//     },


//     'islamic-scholar-biography-website': {
//       title: "Islamic Scholar Biography Website",
//       category: "Educational Web Application",
//       description: "Comprehensive Islamic education platform with interactive lessons, Quran recitation, and learning management features.",
//       longDescription: "A beautifully designed Islamic education platform that provides comprehensive religious learning resources. The website includes Quran recitation with translation, Hadith collections, prayer time calculations, interactive quizzes, and progress tracking for students. Built with modern web technologies to create an engaging and accessible learning experience.",
//       image: AhmedDebbaghImg,
//       demoVideo: "/videos/islamic-teaching-demo.mp4", // Replace with your actual video file
//       demoImages: [
//         islamicDemo1, islamicDemo2, islamicDemo3, islamicDemo4, islamicDemo5, islamicDemo6, islamicDemo7, islamicDemo8, islamicDemo9, islamicDemo10,islamicDemo11,islamicDemo11,islamicDemo12,islamicDemo13
//       ],
//       tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
//       features: [
//         "Calm, minimal designed for presence and narrative clarity",
//         "CMS-driven, modular frontend with curated collections",
//         "Vision-led, teacher-centric architecture "
//       ],
//     challenges: [
//   "Understanding the user’s requirements and the essence of each scholar’s life",
//   "Translating complex biographical and spiritual content into a clear, engaging website",
//   "Selecting typography, fonts, and colors that reflect Islamic heritage while remaining modern",
//   "Designing layouts that incorporate aesthetic shapes and patterns without feeling clichéd",
//   "Balancing traditional Islamic design elements with contemporary web design trends",
//   "Ensuring readability, accessibility, and a smooth user experience across devices"
// ],
//      github: "https://github.com/daniaarshad-lab/SheikhAhmedBiography",
//       // duration: "4 months",
//       team: "Solo Project",
//       status: "Completed"
//     }
//   };

//   const project = projectsData[projectId || ''];

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
//           <Link to="/">
//             <Button>Return Home</Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
//       <div className="container mx-auto px-6 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Portfolio
//           </Link>
          
//           <div className="text-center mb-12">
//             <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
//               {project.category}
//             </Badge>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
//               {project.title}
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               {project.description}
//             </p>
//           </div>
//         </div>

//         {/* Demo Video Section */}
//         {project.demoVideo && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold mb-6 text-center">Project Demo</h2>
//             <VideoPlayer videoUrl={project.demoVideo} title={project.title} />
//           </div>
//         )}

//         {/* Demo Images Gallery */}
//         {project.demoImages && project.demoImages.length > 0 && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold mb-6 text-center">Project Screenshots</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {project.demoImages.map((img: string, index: number) => (
//                 <Card key={index} className="glass-card overflow-hidden group">
//                   <CardContent className="p-0">
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={img}
//                         alt={`${project.title} screenshot ${index + 1}`}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Project Details Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Overview */}
//             <Card className="glass-card">
//               <CardContent className="p-8">
//                 <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {project.longDescription}
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Features */}
//             <Card className="glass-card">
//               <CardContent className="p-8">
//                 <h2 className="text-2xl font-bold mb-6">Key Features</h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {project.features.map((feature: string, index: number) => (
//                     <div key={index} className="flex items-start">
//                       <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                       <p className="text-muted-foreground">{feature}</p>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Challenges */}
//             <Card className="glass-card">
//               <CardContent className="p-8">
//                 <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
//                 <div className="space-y-4">
//                   {project.challenges.map((challenge: string, index: number) => (
//                     <div key={index} className="flex items-start">
//                       <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                         <div className="w-2 h-2 bg-primary rounded-full"></div>
//                       </div>
//                       <p className="text-muted-foreground">{challenge}</p>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Project Info */}
//             <Card className="glass-card">
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Project Information</h3>
//                 <div className="space-y-4">
//                   {/* <div className="flex items-center">
//                     <Calendar className="w-4 h-4 mr-3 text-primary" />
//                     <div>
//                       <p className="text-sm text-muted-foreground">Duration</p>
//                       <p className="font-medium">{project.duration}</p>
//                     </div>
//                   </div> */}
//                   <div className="flex items-center">
//                     <Users className="w-4 h-4 mr-3 text-primary" />
//                     <div>
//                       <p className="text-sm text-muted-foreground">Team</p>
//                       <p className="font-medium">{project.team}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <Cpu className="w-4 h-4 mr-3 text-primary" />
//                     <div>
//                       <p className="text-sm text-muted-foreground">Status</p>
//                       <p className="font-medium">{project.status}</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Technologies */}
//             <Card className="glass-card">
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech: string, index: number) => (
//                     <Badge key={index} variant="secondary" className="text-xs">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Links */}
//             <Card className="glass-card">
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Project Links</h3>
//                 <div className="space-y-3">
//                   <a 
//                     href={project.github} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center text-primary hover:text-primary/80 transition-colors"
//                   >
//                     <Github className="w-4 h-4 mr-2" />
//                     GitHub Repository
//                   </a>
//                   {project.colab && (
//                     <a 
//                       href={project.colab} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="flex items-center text-primary hover:text-primary/80 transition-colors"
//                     >
//                       <Globe className="w-4 h-4 mr-2" />
//                       Google Colab Notebook
//                     </a>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;




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
import CICDImg from '@/assets/CICD-project.jpg';
// import abayaStoreImg from '@/assets/abaya-store-project.jpg';
import VPNmonitoringImg from '@/assets/VPN-monitoring-project.jpg';
import VPNAPPImg from '@/assets/VPN-APP-project.jpg';
import AhmedDebbaghImg from '@/assets/Ahmed-Debbagh-project.jpg';



// E-commerce demo images
import ecommerceDemo1 from '@/assets/ecommerce/1.png';
import ecommerceDemo2 from '@/assets/ecommerce/2.png';
import ecommerceDemo3 from '@/assets/ecommerce/3.png';
import ecommerceDemo4 from '@/assets/ecommerce/4.png';
import ecommerceDemo5 from '@/assets/ecommerce/5.png';
import ecommerceDemo6 from '@/assets/ecommerce/6.png';
import ecommerceDemo7 from '@/assets/ecommerce/7.png';
import ecommerceDemo8 from '@/assets/ecommerce/8.png';
import ecommerceDemo9 from '@/assets/ecommerce/9.png';
import ecommerceDemo10 from '@/assets/ecommerce/10.png';
import ecommerceDemo11 from '@/assets/ecommerce/11.png';
import ecommerceDemo12 from '@/assets/ecommerce/12.png';

// University Event Management demo images
import uniDemo1 from '@/assets/university-events/1.png';
import uniDemo2 from '@/assets/university-events/2.png';
import uniDemo3 from '@/assets/university-events/3.png';
import uniDemo4 from '@/assets/university-events/4.png';
import uniDemo5 from '@/assets/university-events/5.png';
import uniDemo6 from '@/assets/university-events/6.png';
import uniDemo7 from '@/assets/university-events/7.png';
import uniDemo8 from '@/assets/university-events/8.png';
import uniDemo9 from '@/assets/university-events/9.png';
import uniDemo10 from '@/assets/university-events/10.png';
import uniDemo11 from '@/assets/university-events/11.png';
import uniDemo12 from '@/assets/university-events/12.png';
// Blog project demo images
import blogDemo1 from '@/assets/blog-platform/1.png';
import blogDemo2 from '@/assets/blog-platform/2.png';
import blogDemo3 from '@/assets/blog-platform/3.png';
import blogDemo4 from '@/assets/blog-platform/4.png';
import blogDemo5 from '@/assets/blog-platform/5.png';
import blogDemo6 from '@/assets/blog-platform/6.png';
import blogDemo7 from '@/assets/blog-platform/7.png';
import blogDemo8 from '@/assets/blog-platform/8.png';
import blogDemo9 from '@/assets/blog-platform/9.png';
// Islamic Teaching Site demo images
import islamicDemo1 from '@/assets/islamic-teaching/demo1.png';
import islamicDemo2 from '@/assets/islamic-teaching/demo2.png';
import islamicDemo3 from '@/assets/islamic-teaching/demo3.png';
import islamicDemo4 from '@/assets/islamic-teaching/demo4.png';
import islamicDemo5 from '@/assets/islamic-teaching/demo5.png';
import islamicDemo6 from '@/assets/islamic-teaching/demo6.png';
import islamicDemo7 from '@/assets/islamic-teaching/demo7.png';
import islamicDemo8 from '@/assets/islamic-teaching/demo8.png';
import islamicDemo9 from '@/assets/islamic-teaching/demo9.png';
import islamicDemo10 from '@/assets/islamic-teaching/demo10.png';
import islamicDemo11 from '@/assets/islamic-teaching/demo11.png';
import islamicDemo12 from '@/assets/islamic-teaching/demo12.png';
import islamicDemo13 from '@/assets/islamic-teaching/demo13.png';
// Breast Cancer Detection demo images
import bcDemo1 from '@/assets/breast-cancer/1.jpg';
import bcDemo2 from '@/assets/breast-cancer/2.jpg';
import bcDemo3 from '@/assets/breast-cancer/3.jpg';
import bcDemo4 from '@/assets/breast-cancer/4.jpg';
import bcDemo5 from '@/assets/breast-cancer/5.jpg';
import bcDemo6 from '@/assets/breast-cancer/6.jpg';
import bcDemo7 from '@/assets/breast-cancer/7.jpg';
import bcDemo8 from '@/assets/breast-cancer/8.jpg';
import bcDemo9 from '@/assets/breast-cancer/9.jpg';
// Skin Lesion Detection demo images
import skinDemo1 from '@/assets/skin-lesion/1.jpg';
import skinDemo2 from '@/assets/skin-lesion/2.jpg';
import skinDemo3 from '@/assets/skin-lesion/3.jpg';
import skinDemo4 from '@/assets/skin-lesion/4.jpg';
import skinDemo5 from '@/assets/skin-lesion/5.jpg';
import skinDemo6 from '@/assets/skin-lesion/6.jpg';
// VPN project demo images
import vpnDemo1 from '@/assets/vpn/1.jpg';
import vpnDemo2 from '@/assets/vpn/2.jpg';
import vpnDemo3 from '@/assets/vpn/3.jpg';
import vpnDemo4 from '@/assets/vpn/4.jpg';
import vpnDemo5 from '@/assets/vpn/5.jpg';
import vpnDemo6 from '@/assets/vpn/6.jpg';
import vpnDemo7 from '@/assets/vpn/7.jpg';


// VPNAPP project demo images
import vpnappDemo1 from '@/assets/VpnAPP/1.jpg';
import vpnappDemo2 from '@/assets/VpnAPP/2.jpg';
import vpnappDemo3 from '@/assets/VpnAPP/3.jpg';
import vpnappDemo4 from '@/assets/VpnAPP/4.jpg';
import vpnappDemo5 from '@/assets/VpnAPP/5.jpg';
import vpnappDemo6 from '@/assets/VpnAPP/6.jpg';

// CICD project demo images
import CICDDemo1 from '@/assets/CICD/1.jpg';
import CICDDemo2 from '@/assets/CICD/2.jpg';
import CICDDemo3 from '@/assets/CICD/3.jpg';
import CICDDemo4 from '@/assets/CICD/4.jpg';
import CICDDemo5 from '@/assets/CICD/5.jpg';
import CICDDemo6 from '@/assets/CICD/6.jpg';
import CICDDemo7 from '@/assets/CICD/7.jpg';
import CICDDemo8 from '@/assets/CICD/8.jpg';
import CICDDemo9 from '@/assets/CICD/9.jpg';
import CICDDemo10 from '@/assets/CICD/10.jpg';
import CICDDemo11 from '@/assets/CICD/11.jpg';
import CICDDemo12 from '@/assets/CICD/12.jpg';
import CICDDemo13 from '@/assets/CICD/13.jpg';


// Video Player Component
const VideoPlayer = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <iframe
            ref={videoRef}
            src={videoUrl}
            title={title}
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
      demoVideo: "https://www.youtube.com/embed/ZNXKuDDY2hI",
      demoImages: [
       bcDemo1, bcDemo2, bcDemo3, bcDemo4, bcDemo5, bcDemo6, bcDemo7, bcDemo8, bcDemo9
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
       github: "https://github.com/daniaarshad-lab/Breast-Cancer-Classification",
      colab: "https://colab.research.google.com/drive/1vDenE1sYLPl3AdgcMYYzsBvlcm5S5WtD?usp=sharing",
      team: "Solo Project",
      status: "Completed"
    },

    'skin-lesion-detection-system': {
      title: "Skin Lesion Detection System",
      category: "AI/ML Dermatology",
      description: "Deep learning model to classify skin lesions using ResNet-152 CNN for early detection of dermatological conditions.",
      longDescription: "An innovative computer vision system designed to assist dermatologists in the early detection of skin lesions. The system uses ResNet-152 transfer learning and advanced image processing techniques to analyze dermoscopic images, providing accurate classification of various skin conditions.",
      image: skinLesionImg,
      demoImages: [
      skinDemo1, skinDemo2, skinDemo3, skinDemo4, skinDemo5, skinDemo6
      ],
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
      github: "https://github.com/daniaarshad-lab/Skin-Lesion-Detection-System",
      colab: "https://colab.research.google.com/drive/1g9szkhb_DZ_gYVH3E92-2Zep5spaTLFK?usp=sharing",
      team: "Solo Project",
      status: "Completed"
    },

    'seeing-the-unseen---ai-assistant-for-visually-impaired': {
      title: "Seeing The Unseen - AI Assistant for Visually Impaired",
      category: "AI/ML Accessibility",
      description: "Vision-based assistant empowering visually impaired users through object detection, OCR, currency recognition, and scene description.",
      longDescription: "A collaborative mobile application project focused on creating an AI-powered assistive technology for visually impaired individuals. The app combines computer vision with YOLOv4 and YOLOv11, natural language processing with Gemini 2.0, and voice interaction to provide real-time environmental awareness, object recognition, currency identification, and navigation assistance.",
      image: blindAppImg,
      demoVideo: "https://www.youtube.com/embed/KdIraVV9ne0",
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
      team: "2 members",
      status: "Completed"
    },

     'end-to-end-devops-cicd-pipeline-on-aws': {
      title: "End-to-End DevOps CI/CD Pipeline on AWS",
      category: "DevOps",
      description: "Complete CI/CD pipeline automating build, test, and deployment workflows with monitoring and alerting.",
      longDescription: "A comprehensive DevOps pipeline built on AWS infrastructure using Terraform for infrastructure provisioning. The pipeline includes Docker containerization, Jenkins for CI/CD, Kubernetes for orchestration, and Prometheus with Grafana for real-time monitoring and alerting.",
      image: CICDImg,
       demoImages: [
       CICDDemo1, CICDDemo2, CICDDemo3, CICDDemo4, CICDDemo5, CICDDemo6, CICDDemo7, CICDDemo8, CICDDemo9, CICDDemo10, CICDDemo11, CICDDemo12, CICDDemo13
      ],
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
        "Ensuring low downtime deployments",
        "Implementing comprehensive monitoring",
        "Handling security across the pipeline"
      ],
      github: "https://github.com/daniaarshad-lab/CI-CD-Pipeline-of-MERN-Ecommerce",
      // duration: "3 months",
      team: "Solo Project",
      status: "Completed"
    },

   'vpn-app': {
      title: "Vpn App",
      category: "Cloud & Full Stack App",
      description: "A multi-protocol VPN client (OpenVPN, IKEv2, L2TP, IKEv3, IPsec) with multi-country servers, and a fully AWS Cloud–deployed backend.",
      longDescription: "The system captures and logs VPN users’ domain-level browsing activity using DNS queries, recording which domains are accessed without capturing full URLs, ensuring privacy over HTTPS traffic. Each DNS query is linked to the user’s VPN IP and real public IP, enabling accurate user activity mapping. Logs are organized by date for detailed day-wise analysis and also aggregated overall for summary reporting. This allows administrators to monitor browsing patterns, troubleshoot issues, and maintain accountability across the VPN network.",
      image: VPNAPPImg,
      demoImages: [
       vpnappDemo1, vpnappDemo2, vpnappDemo3, vpnappDemo4, vpnappDemo5, vpnappDemo6
      ],
     tech: ["Flutter", "Dartt", "AWS Cloud"],
     features: [
       "Supports Android + IOS ",
       "Supports multiple VPN protocols including OpenVPN, IKEv2, L2TP, IKEv3, and IPsec",
       "Connect to servers across multiple countries with a single click",
       "Real-time bandwidth, data usage, and connection statistics display"
],
     challenges: [
      "Ensuring seamless support for multiple VPN protocols simultaneously",
      "Handling connections across multiple countries without latency or drops",
      "Accurately tracking bandwidth and usage data in real-time",
      "Maintaining privacy and security while logging connection activity"
],

      github: "https://github.com/daniaarshad-lab/VPN-APP-OpenVpn-IKEV2-L2TP-",
      // duration: "3 months",
      team: "2 Members",
      status: "Completed"
    },

    'full-stack-blog-publishing-platform': {
      title: "Full Stack Blog Publishing Platform",
      category: "Full-Stack Web Application",
      description: "Comprehensive tech blog platform with user authentication, article management, and admin review workflow.",
      longDescription: "A feature-rich blog publishing platform designed for modern content creators. Built with React, TypeScript and Supabase, the platform includes role-based access control, real-time publishing pipeline, and Row Level Security policies for secure data access.",
      image: blogImg,
      demoVideo: "https://www.youtube.com/embed/wWsZ2i46cP8",
      demoImages: [
        blogDemo1, blogDemo2, blogDemo3, blogDemo4,blogDemo5, blogDemo6, blogDemo7, blogDemo8,blogDemo9
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
      github: "https://github.com/daniaarshad-lab/blogpostwebsite",
      team: "Solo Project",
      status: "Completed"
    },

    'islamic-scholar-biography-website': {
      title: "Islamic Scholar Biography Website",
      category: "Educational Web Application",
      description: "Comprehensive Islamic education platform with interactive lessons, Quran recitation, and learning management features.",
      longDescription: "A beautifully designed Islamic education platform that provides comprehensive religious learning resources. The website includes Quran recitation with translation, Hadith collections, prayer time calculations, interactive quizzes, and progress tracking for students. Built with modern web technologies to create an engaging and accessible learning experience.",
      image: AhmedDebbaghImg,
      demoVideo: "https://www.youtube.com/embed/UJhRsvqlxEM",
      demoImages: [
        islamicDemo1, islamicDemo2, islamicDemo3, islamicDemo4, islamicDemo5, islamicDemo6, islamicDemo7, islamicDemo8, islamicDemo9, islamicDemo10,islamicDemo11,islamicDemo11,islamicDemo12,islamicDemo13
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
      features: [
        "Calm, minimal designed for presence and narrative clarity",
        "CMS-driven, modular frontend with curated collections",
        "Vision-led, teacher-centric architecture "
      ],
    challenges: [
  "Understanding the user’s requirements and the essence of each scholar’s life",
  "Translating complex biographical and spiritual content into a clear, engaging website",
  "Selecting typography, fonts, and colors that reflect Islamic heritage while remaining modern",
  "Designing layouts that incorporate aesthetic shapes and patterns without feeling clichéd",
  "Balancing traditional Islamic design elements with contemporary web design trends",
  "Ensuring readability, accessibility, and a smooth user experience across devices"
],
     github: "https://github.com/daniaarshad-lab/SheikhAhmedBiography",
      team: "Solo Project",
      status: "Completed"
    },


        'full-stack-e-commerce-platform': {
      title: "Full Stack E-Commerce Platform",
      category: "Full-Stack Web Application",
      description: "Complete e-commerce platform with user authentication, product catalog, cart, checkout system, and Google Maps integration.",
      longDescription: "A comprehensive e-commerce platform built with Laravel and PHP, featuring a complete shopping experience from product browsing to payment processing. The application includes advanced inventory management, separate user and admin panels, Google Maps integration for delivery tracking, and secure email services.",
      image: ecommerceImg,
      demoImages: [ecommerceDemo1, ecommerceDemo2, ecommerceDemo3, ecommerceDemo4, ecommerceDemo5, ecommerceDemo6, ecommerceDemo7, ecommerceDemo8, ecommerceDemo9, ecommerceDemo10, ecommerceDemo11, ecommerceDemo12],
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
      github: "https://github.com/daniaarshad-lab/Full-Stack-E-Commerce-Website",
      // duration: "5 months",
      team: "Solo Project",
      status: "Completed"
    },

    'university-event-management-system': {
      title: "University Event Management System",
      category: "Full-Stack Web Application",
      description: "Event management platform for universities with event creation, student registration, and analytics.",
      longDescription: "A comprehensive event management system specifically designed for university environments. The platform handles event creation, student registration, scheduling, and provides detailed analytics for event organizers using React and Firebase.",
      image: universityImg,
      demoImages: [uniDemo1, uniDemo2, uniDemo3, uniDemo4, uniDemo5, uniDemo6, uniDemo7, uniDemo8, uniDemo9, uniDemo10, uniDemo11, uniDemo12],
      tech: ["HTML", "CSS", "Bootstrap","MySQL"],
      features: [
        "Event creation and management",
        "Student registration ",
        "Calendar integration"
      ],
      challenges: [
        "Dsiplaying all the events in view",
        "Creating intuitive interfaces"
      ],
      github: "https://github.com/daniaarshad-lab/sports-week",
      // duration: "4 months",
      team: "Solo Project",
      status: "Completed"
    },

    'vpn-user-activity-monitoring-dashboard': {
      title: "VPN User Activity Monitoring Dashboard",
      category: "Web Application",
      description: "Logged VPN users’ domain-level browsing activity by date and in total, linking queries to their VPN and real IPs.",
      longDescription: "The system captures and logs VPN users’ domain-level browsing activity using DNS queries, recording which domains are accessed without capturing full URLs, ensuring privacy over HTTPS traffic. Each DNS query is linked to the user’s VPN IP and real public IP, enabling accurate user activity mapping. Logs are organized by date for detailed day-wise analysis and also aggregated overall for summary reporting. This allows administrators to monitor browsing patterns, troubleshoot issues, and maintain accountability across the VPN network.",
      image: VPNmonitoringImg,
      demoVideo: "https://www.youtube.com/embed/gMtnvONgz-o",
      demoImages: [
       vpnDemo1, vpnDemo2, vpnDemo3, vpnDemo4, vpnDemo5, vpnDemo6, vpnDemo7
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: [
        "Real-time VPN connection logging",
         "User ↔ VPN IP ↔ real IP mapping",
         "DNS-based domain activity tracking",
         "Geolocation of VPN users",
         "Time-stamped event logging",
         "Web dashboard and API access"
      ],
      challenges: [
        "Accurately linking VPN IPs to real IPs",
        "Capturing DNS activity without full URLs",
        "Handling privacy and security concerns",
        "Displaying large datasets efficiently on the dashboard"
      ],
      github: "https://github.com/daniaarshad-lab/VPN-User-Monitoring-Dashboard",
      team: "Solo Project",
      status: "Completed"
    },
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

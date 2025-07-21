import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/dania-profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 animate-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-bounce-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_50px_rgba(124,58,237,0.5)] float-animation">
                <img 
                  src={profileImage} 
                  alt="Dania Arshad - Software Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">
              Dania Arshad
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer specializing in AI/ML integration, 
              creating innovative solutions that bridge technology and human needs.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-glow group"
              asChild
            >
              <a href="https://linkedin.com/in/dania-arshad" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-glow group"
              asChild
            >
              <a href="https://github.com/dania-arshad" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-glow group"
              asChild
            >
              <a href="mailto:dania.arshad@email.com">
                <Mail className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Contact
              </a>
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform shadow-lg hover:shadow-primary/50"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
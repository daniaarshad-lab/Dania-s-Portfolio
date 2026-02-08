import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/daniaarshad-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background/10 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/dania-arshad-se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background/10 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:dania.arshad@email.com"
              className="w-12 h-12 bg-background/10 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© 2024 Dania Arshad. Made with</span>
            {/* <Heart className="w-4 h-4 text-red-500 animate-pulse" /> */}
            <span>and lots of code.</span>
          </div>
          
          <p className="text-sm text-muted-foreground mt-2">
            All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Code, FileText, Palette, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: "Development",
      icon: Code,
      items: ["React", "Node.js", "Python", "TypeScript", "Full-Stack Development"]
    },
    {
      category: "AI/ML",
      icon: Award,
      items: ["TensorFlow", "PyTorch", "Computer Vision", "Deep Learning", "Medical AI"]
    },
    {
      category: "Design & Documentation",
      icon: Palette,
      items: ["UI/UX Design", "Technical Writing", "System Architecture", "API Documentation"]
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Passionate software engineer bridging the gap between cutting-edge AI/ML and beautiful web experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <Card className="glass-card hover-glow mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Academic Foundation</p>
                </div>
              </div>
              <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
                <h4 className="text-xl font-semibold mb-2">Bachelor of Science in Software Engineering</h4>
                <p className="text-primary font-medium mb-2">COMSATS University Islamabad, Wah Cantt Campus</p>
                <p className="text-muted-foreground">
                  Comprehensive education in software development, algorithms, data structures, and modern programming paradigms.
                  Specialized in AI/ML applications and full-stack web development.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-card hover-glow animate-fade-in" 
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary/60 rounded-full mr-2"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expertise Section */}
          <Card className="glass-card hover-glow animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Design & Documentation</h3>
                  <p className="text-muted-foreground">Beyond Code</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-primary" />
                    Design Excellence
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Crafting intuitive user interfaces and experiences that seamlessly blend functionality with aesthetics. 
                    Focus on modern, responsive designs that engage users and drive results.
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Technical Documentation
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Creating comprehensive technical documentation, API references, and system architecture guides. 
                    Ensuring knowledge transfer and maintainable codebases for future developers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default About;
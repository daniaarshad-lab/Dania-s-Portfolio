import { Code, FileText, Palette, GraduationCap, Award, BookOpen, Database, Cloud, Terminal, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const technicalSkills = [
    {
      category: "AI & ML",
      icon: Award,
      items: ["TensorFlow", "Keras", "PyTorch", "YOLO", "ResNet", "Custom Neural Networks", "Image Classification"]
    },
    {
      category: "Development",
      icon: Code,
      items: ["React", "TypeScript", "Laravel", "Django", "FastAPI", "Node.js"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "Supabase", "SQLite3", "MongoDB"]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana"]
    },
    {
      category: "Languages",
      icon: Terminal,
      items: ["Python", "JavaScript", "C++", "Java", "PHP", "HTML/CSS"]
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "Jira", "VS Code", "Google Colab", "Linux", "Android Studio"]
    }
  ];

  const otherSkills = [
    "Technical Documentation",
    "UML Modeling",
    "Lucidchart",
    "Visual Paradigm",
    "Canva",
    "Agile Practices",
    "Team Collaboration"
  ];

  const interpersonalSkills = [
    "Ethical awareness in handling data and systems",
    "Effective time management and accountability",
    "Team collaboration with initiative-taking attitude",
    "Curiosity and commitment to continuous learning",
    "Strong attention to accuracy and quality",
    "Leadership skills as Class Representative"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Dania, a Software Engineer who loves building AI-powered and automated systems that solve real problems. I work with AI/ML, DevOps, and full-stack technologies to turn ideas into scalable, real-world solutions, focusing on smart systems that eliminate manual work and integrate AI efficiently.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed mt-4" style={{ animationDelay: '0.3s' }}>
            I understand and drive the entire Software Development Life Cycle — from gathering requirements and understanding client needs to designing system architecture and creating clear, detailed documentation. I enjoy building the foundation that makes great software possible.
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
                <p className="text-muted-foreground mb-2">2022 - 2026 (Expected Graduation: January 2026)</p>
                <p className="text-primary font-semibold mb-2">CGPA: 3.7/4</p>
                <p className="text-muted-foreground text-sm">
                  Comprehensive education in software development, algorithms, data structures, AI/ML, and modern programming paradigms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills Grid - Modern Smooth Boxes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 glow-text">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative animate-fade-in" 
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                    
                    <Card className="relative glass-card rounded-3xl overflow-hidden border-0 bg-background/80 backdrop-blur-xl">
                      <CardContent className="p-6">
                        {/* Icon and category header */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary-glow/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                            <IconComponent className="w-7 h-7 text-primary" />
                          </div>
                          <h4 className="text-lg font-bold text-foreground">{skillGroup.category}</h4>
                        </div>
                        
                        {/* Skills pills */}
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-4 py-2 bg-gradient-to-r from-primary/15 to-primary-glow/10 text-foreground/90 text-sm rounded-full border border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Other Skills & Documentation */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary-glow/50 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
              <Card className="relative glass-card rounded-3xl overflow-hidden border-0 bg-background/80 backdrop-blur-xl h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary-glow/20 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-primary/20">
                      <FileText className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Documentation & Design</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {otherSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-background/80 to-background/60 border border-primary/30 text-foreground/80 text-sm rounded-full hover:border-primary/60 hover:scale-105 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary-glow/50 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
              <Card className="relative glass-card rounded-3xl overflow-hidden border-0 bg-background/80 backdrop-blur-xl h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary-glow/20 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-primary/20">
                      <BookOpen className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Interpersonal Skills</h4>
                  </div>
                  <ul className="space-y-3">
                    {interpersonalSkills.map((skill, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start group/item hover:text-foreground transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default About;

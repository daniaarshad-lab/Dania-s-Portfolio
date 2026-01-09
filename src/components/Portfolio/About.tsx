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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experienced in AI/ML, DevOps, and Full Stack Development
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
                <p className="text-muted-foreground text-sm">
                  Comprehensive education in software development, algorithms, data structures, AI/ML, and modern programming paradigms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card hover-glow animate-fade-in" 
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-semibold">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Other Skills & Documentation */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="glass-card hover-glow animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Documentation & Design</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-background/50 border border-primary/20 text-muted-foreground text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Interpersonal Skills</h4>
                </div>
                <ul className="space-y-2">
                  {interpersonalSkills.map((skill, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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

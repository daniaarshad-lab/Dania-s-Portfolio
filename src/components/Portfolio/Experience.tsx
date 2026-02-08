import { Briefcase, Calendar, MapPin, Bot, Ship, Atom, Scale, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer with AI/ML Integration",
      company: "HealOra Ltd",
      someprojects:"Some Projects Led & Delivered in Collaboration",
      location: "England,UK (Remote)",
      period: "Jan 2025 - Jan 2026",
      type: "Remote Job",
      projects: [
        {
          name: "MS Teams Meeting Intelligence Bot",
          tech: "Python | OpenAI Whisper | Google Gemini | Jira REST API",
          description: "Designed an AI bot that joins Microsoft Teams meetings autonomously, transcribes with Whisper, generates Agile user stories using Gemini, and automates Jira issue creation."
        },
        {
          name: "Cruise Company Data Automation System",
          tech: "Python | Django | MySQL | REST APIs | React | Bootstrap",
          description: "Developed end-to-end web application for cruise company with booking management, role-based access control, and interactive dashboards."
        },
        // {
        //   name: "Quantum vs Classical Model Simulation",
        //   tech: "Python | Qiskit | NumPy | Matplotlib",
        //   description: "Conducted comparative study between classical computational models and quantum simulations for complex problem-solving."
        // }
      ],
      icon: Bot
    },
    {
      title: "IT Internee",
      company: "Federal Shariat Court",
      location: "Islamabad",
      period: "July - Sept 2025",
      type: "Internship",
      projects: [
        {
          name: "Judicial Web & Case Law Management System",
          tech: "React | Node.js | MySQL",
          description: "Developed official judicial and Case Law Management System with advanced filtering, handling historical data from 1980-2025 with court's standards."
        }
      ],
      icon: Scale
    }
  ];

  const achievements = [
    "Winner, VISIO Spark 2025 (All Pakistan Level)",
    "Winner, Open House & Job Fair 2025",
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Curved decorative shape */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden -translate-y-1/2">
        <svg className="w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path fill="hsl(var(--primary) / 0.03)" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building innovative solutions with CI/CD Pipeline ,AI & ML integration and full-stack development
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div 
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                
                <Card className="relative glass-card rounded-3xl overflow-hidden border-0 bg-background/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full mb-2 inline-block">
                            {exp.type}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-primary font-semibold">
                            {exp.company}
                          </h4>
                           <h4 className="text-xl font-bold text-foreground mb-1">
                            {exp.someprojects}
                          </h4>

                          
                        </div>
                        <div className="flex flex-col md:items-end text-muted-foreground mt-2 md:mt-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Projects */}
                      <div className="space-y-4">
                        {exp.projects.map((project, projIndex) => (
                          <div 
                            key={projIndex}
                            className="bg-background/50 rounded-lg p-4 border border-primary/10"
                          >
                            <h5 className="font-semibold text-foreground mb-1">{project.name}</h5>
                            <p className="text-xs text-primary mb-2">{project.tech}</p>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            );
          })}

          {/* Achievements Section */}
          <Card className="glass-card hover-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-background/50 rounded-lg p-4 border border-primary/10"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Experience;
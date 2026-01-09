import { Briefcase, Calendar, MapPin, Bot, Ship, Atom, Scale, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer with AI/ML Integration",
      company: "HealOra Ltd",
      location: "Remote",
      period: "Jan - Dec 2025",
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
        {
          name: "Quantum vs Classical Model Simulation",
          tech: "Python | Qiskit | NumPy | Matplotlib",
          description: "Conducted comparative study between classical computational models and quantum simulations for complex problem-solving."
        }
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
          description: "Developed official judicial web pages and Case Law Management System with advanced filtering, handling historical data from 1980-2025 with government web standards."
        }
      ],
      icon: Scale
    }
  ];

  const achievements = [
    "Winner, VISIO Spark 2025 (All Pakistan Level)",
    "Winner, Open House & Job Fair 2025",
    "1st Position with 4.0/4.0 GPA in 5th, 6th, and 7th semesters",
    "Class Representative throughout university journey"
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building innovative solutions with AI/ML integration and full-stack development
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover-glow animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
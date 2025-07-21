import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Healora",
      location: "United Kingdom",
      period: "2023 - 2024",
      description: "Integrated AI/ML solutions into healthcare applications, developing full-stack features for patient management systems and implementing machine learning models for predictive healthcare analytics.",
      skills: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "AI/ML Integration"]
    },
    {
      title: "Freelance Software Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 - Present",
      description: "Developing custom web applications and AI-powered solutions for diverse clients. Specializing in e-commerce platforms, content management systems, and ML integration projects.",
      skills: ["Full Stack Development", "AI/ML", "E-commerce", "CMS Development", "Client Management"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building innovative solutions and gaining valuable experience in AI/ML and full-stack development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
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
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
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
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Experience;
import Navbar from '@/components/Portfolio/Navbar';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Experience from '@/components/Portfolio/Experience';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Decorative curved shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Top right blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl animate-pulse" />
        
        {/* Bottom left blob */}
        <div className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Middle floating orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Curved wave shape at bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="hsl(var(--primary) / 0.1)" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <div id="home">
        <Hero />
      </div>
      
      {/* Curved section divider */}
      <div className="relative h-24 -mt-12">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path fill="hsl(var(--primary) / 0.05)" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,96L1360,96C1280,96,1120,96,960,96C800,96,640,96,480,96C320,96,160,96,80,96L0,96Z" />
        </svg>
      </div>

      <About />
      
      {/* Curved section divider */}
      <div className="relative h-24 -mt-12">
        <svg className="absolute bottom-0 w-full h-24 rotate-180" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path fill="hsl(var(--primary) / 0.03)" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,96L1380,96C1320,96,1200,96,1080,96C960,96,840,96,720,96C600,96,480,96,360,96C240,96,120,96,60,96L0,96Z" />
        </svg>
      </div>

      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

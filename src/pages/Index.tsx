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
      
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/8 via-primary/4 to-transparent blur-3xl" />
      </div>

      <div id="home">
        <Hero />
      </div>

      {/* Curved section divider after Hero */}
      <div className="relative h-24 -mt-6">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--primary))" 
            fillOpacity="0.15"
            d="M0,60 C200,100 400,20 720,50 C1040,80 1240,30 1440,60 L1440,100 L0,100 Z" 
          />
          <path 
            fill="hsl(var(--primary))" 
            fillOpacity="0.08"
            d="M0,70 C300,100 600,40 900,70 C1200,100 1350,50 1440,70 L1440,100 L0,100 Z" 
          />
        </svg>
      </div>

      <About />

      {/* Curved section divider after About */}
      <div className="relative h-20 -mt-4">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--primary))" 
            fillOpacity="0.12"
            d="M0,40 C360,80 720,10 1080,50 C1260,70 1380,40 1440,30 L1440,80 L0,80 Z" 
          />
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

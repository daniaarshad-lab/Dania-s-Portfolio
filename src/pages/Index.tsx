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
      <div className="relative h-20 -mt-10 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="hsl(var(--primary) / 0.04)" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <About />

      {/* Curved section divider after About */}
      <div className="relative h-16 -mt-8 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path fill="hsl(var(--primary) / 0.03)" d="M0,32 C480,64 960,0 1440,32 L1440,64 L0,64 Z" />
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

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
      
      {/* Subtle background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-primary/5 via-transparent to-primary/3" />

      <div id="home">
        <Hero />
      </div>

      <About />

      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

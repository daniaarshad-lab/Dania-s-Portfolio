import Hero from '@/components/Portfolio/Hero';
import Experience from '@/components/Portfolio/Experience';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

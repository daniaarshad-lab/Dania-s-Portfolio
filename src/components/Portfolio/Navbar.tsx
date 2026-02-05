import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Signature Style */}
          <button
            onClick={() => scrollToSection('#home')}
            className="group relative hover:scale-105 transition-transform"
          >
            <svg width="56" height="40" viewBox="0 0 56 40" className="overflow-visible">
              {/* D letter - elegant signature curve */}
              <path
                d="M6 8 C6 8, 6 32, 6 32 M6 8 C6 8, 18 6, 24 12 C30 18, 30 24, 24 30 C18 36, 6 32, 6 32"
                stroke="url(#logoGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* A letter - handwritten signature style */}
              <path
                d="M34 32 Q40 8, 46 32 M37 24 L45 24"
                stroke="url(#logoGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Signature underline flourish */}
              <path
                d="M4 36 Q28 42, 52 34"
                stroke="url(#logoGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
                </linearGradient>
              </defs>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform rounded-full px-6"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 bg-gradient-to-r from-primary to-primary-glow rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check if dark mode is enabled
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      setIsDarkMode(!isDarkMode);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glassmorphism border-none' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-portfolio-purple via-portfolio-teal to-portfolio-coral bg-clip-text text-transparent">
          Salma<span className="text-gray-800 dark:text-white">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-gray-600 hover:text-portfolio-purple dark:text-gray-300 dark:hover:text-portfolio-purple-light transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-purple to-portfolio-teal group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-portfolio-coral" />
            ) : (
              <Moon className="h-5 w-5 text-portfolio-purple" />
            )}
          </button>
          
          <Button asChild className="rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:shadow-lg transition-all duration-300">
            <a href="#contact">
              Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-portfolio-coral" />
            ) : (
              <Moon className="h-4 w-4 text-portfolio-purple" />
            )}
          </button>
          
          <button 
            className="text-gray-700 dark:text-gray-200 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 glassmorphism py-4 animate-fadeIn border-t border-white/10">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-medium text-gray-600 hover:text-portfolio-purple dark:text-gray-300 dark:hover:text-portfolio-purple-light py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full mt-2 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

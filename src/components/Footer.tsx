
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 bg-gray-50 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-portfolio-blue dark:text-portfolio-blue-light mb-2">
              Salma<span className="text-gray-800 dark:text-white">.dev</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Salma Mukhtar. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-portfolio-blue-light text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-portfolio-blue-light text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-portfolio-blue-light text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-portfolio-blue-light text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/salmamokhtaar"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-portfolio-blue-light dark:hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/salma-mokhtaar-0b4a11253/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-portfolio-blue-light dark:hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:salmam.mohyadiin@gmail.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-portfolio-blue-light dark:hover:text-gray-900"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Credit line */}
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>Designed and built with passion by Salma Mukhtar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

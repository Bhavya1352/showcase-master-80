
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-gradient">
            Bhavya Mishra
          </a>
          <nav className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;

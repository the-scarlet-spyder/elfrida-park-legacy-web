
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };
  
  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Services", 
      children: [
        { name: "Real Estate", path: "/services/real-estate" },
        { name: "Event Management", path: "/services/events" },
        { name: "Advisory Services", path: "/services/advisory" }
      ]
    },
    { name: "About", path: "/about" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3",
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ebd4b774-c523-499b-8523-ec2e0b49f0fb.png" 
            alt="Elfrida Limited" 
            className="h-12"
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.children ? (
                <div className="group relative">
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className={cn(
                      "flex items-center gap-1 px-2 py-1 text-sm font-medium",
                      isScrolled ? "text-ash-lighter" : "text-white",
                      activeDropdown === link.name ? "text-gold" : ""
                    )}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  <div className={cn(
                    "absolute top-full left-0 w-48 bg-black-light shadow-lg shadow-gold/10 rounded-md overflow-hidden transition-all duration-300 transform origin-top",
                    activeDropdown === link.name ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                  )}>
                    {link.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.path}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm text-ash-light hover:text-gold hover:bg-black-light transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={link.path}
                  className={cn(
                    "px-2 py-1 text-sm font-medium transition-colors duration-200",
                    isScrolled ? "text-ash-lighter hover:text-gold" : "text-white hover:text-gold-light"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-primary ml-4 hover:shadow-gold/20 hover:shadow-md">
            Get in Touch
          </Link>
        </div>
        
        {/* Mobile Nav Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      <div className={cn(
        "fixed inset-0 bg-black z-40 pt-20 pb-6 px-4 transition-transform duration-300 lg:hidden overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.children ? (
                <div>
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full py-2 text-lg font-medium text-ash-lighter"
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      size={18} 
                      className={cn(
                        "transition-transform", 
                        activeDropdown === link.name ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <div className={cn(
                    "pl-4 space-y-2 transition-all duration-300",
                    activeDropdown === link.name ? "max-h-96 opacity-100 my-2" : "max-h-0 opacity-0 overflow-hidden"
                  )}>
                    {link.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.path}
                        onClick={closeMenu}
                        className="block py-2 text-ash-light hover:text-gold"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={link.path}
                  onClick={closeMenu}
                  className="block py-2 text-lg font-medium text-ash-lighter hover:text-gold"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="btn-primary mt-4 w-full"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

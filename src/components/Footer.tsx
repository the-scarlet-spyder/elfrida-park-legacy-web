
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkgrey-dark text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/ebd4b774-c523-499b-8523-ec2e0b49f0fb.png" 
                alt="Elfrida Limited" 
                className="h-12 mb-4" 
              />
            </Link>
            <p className="text-darkgrey-lightest text-sm leading-relaxed">
              Nurturing Dreams, Building Legacies. Elfrida Limited offers integrated solutions in Real Estate, Event Management, and Strategic Advisory Services.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.instagram.com/elfridasltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/elfridas-ltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/services/events" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/services/advisory" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-darkgrey-lightest hover:text-gold hover:pl-1 transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-darkgrey-lightest">
                  123 Lagos Business District, Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href="tel:09160002771" className="text-darkgrey-lightest hover:text-gold transition-colors">
                  09160002771
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href="tel:09160002772" className="text-darkgrey-lightest hover:text-gold transition-colors">
                  09160002772
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:info@elfridas.com" className="text-darkgrey-lightest hover:text-gold transition-colors">
                  info@elfridas.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-gold">Stay Connected</h3>
            <p className="text-darkgrey-lightest text-sm mb-4">Subscribe to receive updates on our latest offerings and impact stories.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 rounded-md bg-darkgrey border border-darkgrey-light text-white placeholder-darkgrey-lightest focus:outline-none focus:ring-1 focus:ring-gold"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-dark text-darkgrey py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-darkgrey-light/30 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-darkgrey-lightest text-sm">
              © {currentYear} Elfrida Limited. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-darkgrey-lightest hover:text-gold text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-darkgrey-lightest hover:text-gold text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

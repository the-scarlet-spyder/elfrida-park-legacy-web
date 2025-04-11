
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-earth-dark text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/ebd4b774-c523-499b-8523-ec2e0b49f0fb.png" 
                alt="Elfrida Park Limited" 
                className="h-12 mb-4" 
              />
            </Link>
            <p className="text-earth-lighter text-sm leading-relaxed">
              Nurturing Dreams, Building Legacies. Elfrida Park Limited offers integrated solutions in Real Estate, Event Management, and Strategic Advisory Services.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/services/events" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/services/advisory" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-earth-lighter hover:text-gold hover:pl-1 transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-earth-lighter">
                  123 Lagos Business District, Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href="tel:+2341234567890" className="text-earth-lighter hover:text-gold transition-colors">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:info@elfridapark.com" className="text-earth-lighter hover:text-gold transition-colors">
                  info@elfridapark.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Stay Connected</h3>
            <p className="text-earth-lighter text-sm mb-4">Subscribe to receive updates on our latest offerings and impact stories.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 rounded-md bg-earth-dark border border-earth text-white placeholder-earth-light focus:outline-none focus:ring-1 focus:ring-gold"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-dark text-white py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-earth/30 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-earth-lighter text-sm">
              © {currentYear} Elfrida Park Limited. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-earth-lighter hover:text-gold text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-earth-lighter hover:text-gold text-sm">
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

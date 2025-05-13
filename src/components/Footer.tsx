import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="w-7 h-7 text-primary-500" />
              <span className="font-serif text-xl font-bold">BEMBELLY & ASSOCIES</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Providing exceptional legal services with integrity and dedication since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary-300 hover:text-primary-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {['Corporate Law', 'Litigation', 'Real Estate', 'Family Law', 'Intellectual Property'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-secondary-300 hover:text-primary-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-secondary-300">
                  123 Legal Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-2" />
                <a href="tel:+12125551234" className="text-secondary-300 hover:text-primary-500 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-2" />
                <a href="mailto:info@robertson-law.com" className="text-secondary-300 hover:text-primary-500 transition-colors">
                  info@robertson-law.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-6 border-t border-secondary-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-secondary-400 text-sm">
            © {currentYear} Robertson & Associates. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <Link to="/privacy" className="text-secondary-400 text-sm hover:text-primary-500 transition-colors mx-2">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-400 text-sm hover:text-primary-500 transition-colors mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

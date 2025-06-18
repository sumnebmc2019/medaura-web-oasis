
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/c32d644c-a705-4d19-8b80-8b00a03027dc.png" 
              alt="MedAura India" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Leading healthcare provider in India, offering world-class medical tourism services and comprehensive healthcare solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-gray-300 hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/medical-tourism" className="text-gray-300 hover:text-white">Medical Tourism</NavLink></li>
              <li><NavLink to="/services" className="text-gray-300 hover:text-white">Services</NavLink></li>
              <li><NavLink to="/gallery" className="text-gray-300 hover:text-white">Gallery</NavLink></li>
              <li><NavLink to="/blogs" className="text-gray-300 hover:text-white">Blogs</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Total Knee Replacement</span></li>
              <li><span className="text-gray-300">Aura Rejuvenation</span></li>
              <li><span className="text-gray-300">Cardiac Surgery</span></li>
              <li><span className="text-gray-300">Orthopedic Care</span></li>
              <li><NavLink to="/store" className="text-gray-300 hover:text-white">Medical Store</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">123 Healthcare Avenue, Medical District, New Delhi, India 110001</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+91 12345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">info@medauraindia.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 MedAura India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-300 text-sm hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-gray-300 text-sm hover:text-white cursor-pointer">Terms of Service</span>
            <span className="text-gray-300 text-sm hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

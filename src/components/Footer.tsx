
import React from 'react';
import { Link } from 'react-router-dom';
import { MicroscopeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MicroscopeIcon className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">AnemiaDetect</span>
            </div>
            <p className="text-gray-600 text-sm">
              Advanced anemia detection through conjunctiva analysis using cutting-edge image processing technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About</Link></li>
              <li><Link to="/technology" className="text-gray-600 hover:text-primary text-sm">Technology</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/research" className="text-gray-600 hover:text-primary text-sm">Research</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-primary text-sm">Try Demo</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Email: info@anemiadetect.edu</li>
              <li className="text-gray-600 text-sm">Phone: +1 (123) 456-7890</li>
              <li className="text-gray-600 text-sm">University Research Lab</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AnemiaDetect. All rights reserved. College Research Project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

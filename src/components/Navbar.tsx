
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MicroscopeIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MicroscopeIcon className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-bold text-gray-900">AnemiaDetect</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
          <Link to="/technology" className="text-gray-700 hover:text-primary transition-colors">Technology</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/demo">
            <Button>Try Demo</Button>
          </Link>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

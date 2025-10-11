import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#333] py-6 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-300 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} NEGO. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/privacy-policy" 
              className="relative group text-gray-300 hover:text-[#C2A68C] transition-all duration-300"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C2A68C] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/terms" 
              className="relative group text-gray-300 hover:text-[#C2A68C] transition-all duration-300"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C2A68C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
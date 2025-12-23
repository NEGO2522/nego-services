import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['Services', 'About', 'Previous Builds'];

  return (
    <nav className="bg-transparent  py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <div className="w-3 h-3 rounded-full bg-[#C2A68C]"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] bg-clip-text text-transparent hover:opacity-80 transition-opacity">NEGO</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link 
                to={item === 'Previous Builds' ? '/projects' : `/${item.toLowerCase()}`}
                className="relative group text-[#F5F5F0] hover:text-[#C2A68C] transition-colors duration-300 text-sm font-medium tracking-wider"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C2A68C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium text-sm hover:shadow-lg hover:shadow-[#C2A68C]/20 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <motion.button 
            className="p-2 rounded-lg hover:bg-[#1F1F1F] transition-colors"
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            onClick={toggleMenu}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="w-full text-center"
              >
                <Link 
                  to={item === 'Previous Builds' ? '/projects' : `/${item.toLowerCase()}`}
                  className="block py-4 text-2xl text-[#F5F5F0] hover:text-[#C2A68C] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full px-8 mt-4"
            >
              <Link 
                to="/contact"
                className="block w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
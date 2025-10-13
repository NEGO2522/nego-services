import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent  py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#C2A68C]"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] bg-clip-text text-transparent hover:opacity-80 transition-opacity">NEGO</span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-10">
          {['Services', 'About', 'Pricing'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link 
                to={`/${item.toLowerCase()}`}
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
            transition={{ delay: 0.3 }}
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
        
        <div className="md:hidden">
          <motion.button 
            className="p-2 rounded-lg hover:bg-[#1F1F1F] transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
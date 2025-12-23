import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #1F1F1F 1px, transparent 1px), linear-gradient(to bottom, #1F1F1F 1px, transparent 1px)',
            backgroundSize: '128px 128px',
            opacity: 0.2
          }}
        ></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C2A68C]/10 via-black to-[#E6D8C3]/10"></div>

      <Helmet>
        <title>About Us - NEGO</title>
        <meta name="description" content="Learn about NEGO – who we are, our mission, and our impact." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-6 pt-8 pb-20 relative z-10">
        {/* Page header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-[#C2A68C] uppercase tracking-wider mb-3 inline-block">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-[#C2A68C]">NEGO</span></h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] mx-auto"></div>
        </motion.div>

        {/* Content adapted from Landing.jsx About section */}
        <motion.section 
          className="py-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C2A68C]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#E6D8C3]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Transforming Ideas Into <span className="text-[#C2A68C]">Digital Reality</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  NEGO is a full-stack tech service hub dedicated to helping businesses and students transform their innovative ideas into reality. With our expertise in cutting-edge technologies and passion for problem-solving, we deliver high-quality, scalable solutions tailored to your unique needs.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { number: '10+', label: 'Projects Completed' },
                    { number: '85%', label: 'Client Satisfaction' },
                    { number: '1+', label: 'Years Experience' },
                    { number: '100%', label: 'Dedication' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-[#1A1A1A] p-4 rounded-xl border border-[#252525] hover:border-[#C2A68C]/30 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="text-2xl font-bold text-[#C2A68C] mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 mt-6 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full hover:shadow-lg hover:shadow-[#C2A68C]/30 transition-all duration-300 group"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#C2A68C]/20 bg-[#1A1A1A]"
                initial={{ opacity: 0, x: 30, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src="/favicon.png" 
                  alt="NEGO Team" 
                  className="w-full h-full  transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div 
                    className="bg-[#C2A68C] text-[#0A0A0A] px-4 py-2 rounded-full inline-flex items-center text-sm font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="w-2 h-2 bg-[#0A0A0A] rounded-full mr-2"></span>
                    Our Mission
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Empowering Innovation Through Technology</h3>
                  <p className="text-gray-300">Delivering exceptional solutions that drive business growth and success.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

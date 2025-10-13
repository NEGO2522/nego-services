import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaMobile, FaRobot, FaDatabase, FaLock } from 'react-icons/fa';

const Services = () => {
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
        <title>Our Services - NEGO</title>
        <meta name="description" content="Explore NEGO's full range of services: web, mobile, AI/ML, data, design, and cloud." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-6 pt-8 pb-20 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-[#C2A68C] uppercase tracking-wider mb-4 inline-block">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Offer</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] mx-auto"></div>
        </motion.div>

        {/* Services grid (ported from Landing.jsx) */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaCode className="text-3xl" />, 
                title: "Web Development", 
                description: "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
                features: ["Responsive Design", "E-commerce", "Web Apps"],
                delay: 0.1,
                locked: false
              },
              { 
                icon: <FaMobile className="text-3xl" />, 
                title: "App Development", 
                description: "Cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
                features: ["iOS & Android", "React Native", "Flutter"],
                delay: 0.2,
                locked: true
              },
              { 
                icon: <FaRobot className="text-3xl" />, 
                title: "AI/ML Solutions", 
                description: "Cutting-edge artificial intelligence and machine learning solutions to solve complex business challenges.",
                features: ["Predictive Analytics", "Computer Vision", "NLP"],
                delay: 0.3,
                locked: true
              },
              { 
                icon: <FaDatabase className="text-3xl" />, 
                title: "Data Analysis", 
                description: "Data-driven insights and visualizations to help you make informed business decisions.",
                features: ["Data Visualization", "Big Data", "Business Intelligence"],
                delay: 0.4,
                locked: true
              },
              { 
                icon: <FaCode className="text-3xl" />, 
                title: "UI/UX Design", 
                description: "Beautiful and intuitive user interfaces designed to enhance user experience and engagement.",
                features: ["User Research", "Wireframing", "Prototyping"],
                delay: 0.5,
                locked: true
              },
              { 
                icon: <FaCode className="text-3xl" />, 
                title: "Cloud Solutions", 
                description: "Scalable and secure cloud infrastructure tailored to your business needs.",
                features: ["AWS", "Azure", "Google Cloud"],
                delay: 0.6,
                locked: true
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className={`service-card group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-8 rounded-2xl border border-[#252525] transition-all duration-500 overflow-hidden ${service.locked ? 'opacity-80 cursor-not-allowed' : 'hover:border-[#C2A68C]/30'}`}
                data-delay={service.delay}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                aria-disabled={service.locked}
                title={service.locked ? 'Locked' : undefined}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C2A68C]/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
                {service.locked && (
                  <div className="absolute inset-0 z-20 bg-black/30 backdrop-blur-[1px] flex items-center justify-center">
                    <FaLock size={36} className="text-gray-300" />
                  </div>
                )}
                
                <div className={`relative z-10 ${service.locked ? 'blur-[1px]' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.locked ? 'bg-[#111] text-[#555] border border-[#222]' : 'bg-[#C2A68C]/10 text-[#C2A68C] group-hover:bg-[#C2A68C] group-hover:text-[#0A0A0A] transition-colors duration-300'}`}>
                    {service.icon}
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-3 ${service.locked ? 'text-gray-400' : 'text-white group-hover:text-[#C2A68C] transition-colors'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-4 leading-relaxed ${service.locked ? 'text-gray-500' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.features.map((feature, i) => (
                      <span key={i} className={`text-xs px-3 py-1 rounded-full border ${service.locked ? 'bg-[#111] text-gray-500 border-[#222]' : 'bg-[#1F1F1F] text-gray-300 border-[#333]'}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Overlay above blocks interactions when locked */}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full hover:shadow-lg hover:shadow-[#C2A68C]/30 transition-all duration-300 group"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Free Consultation
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

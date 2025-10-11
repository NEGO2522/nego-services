import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaMobile, FaRobot, FaDatabase, FaArrowUp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Initialize GSAP animations and scroll effects
  useEffect(() => {
    // Scroll to top button visibility
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // GSAP animations
    gsap.utils.toArray('.parallax-bg').forEach(section => {
      gsap.fromTo(section,
        { y: '0%' },
        {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        }
      );
    });

    // Fade in up animation for sections
    gsap.utils.toArray('.fade-up').forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Scale in animation for service cards
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.fromTo(card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation for the scroll indicator
  useEffect(() => {
    let isMounted = true;
    
    const animateScroll = async () => {
      while (isMounted) {
        await controls.start({ 
          y: [0, 10, 0],
          transition: { duration: 1.5, repeat: Infinity }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    };
    
    if (isMounted) {
      animateScroll();
    }
    
    return () => {
    };
  }, [controls]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background grid with parallax */}
      <div className="absolute inset-0 overflow-hidden parallax-bg">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #1F1F1F 1px, transparent 1px), linear-gradient(to bottom, #1F1F1F 1px, transparent 1px)',
            backgroundSize: '128px 128px',
            opacity: 0.2
          }}
        ></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#C2A68C] opacity-20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <Helmet>
        <title>NEGO - Building Smart Tech Solutions</title>
        <meta name="description" content="NEGO is a full-stack tech service hub helping businesses and students bring their ideas to life" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Navigation Bar */}
      <Navbar />

      <main id="home" className="container mx-auto px-6 pt-4 pb-16 md:pb-24 relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="flex flex-col items-center justify-center min-h-[40vh] text-center fade-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Animated gradient circle */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#C2A68C] bg-[#C2A68C]/10 rounded-full backdrop-blur-sm border border-[#C2A68C]/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="relative flex h-3 w-3 mr-2 float-left mt-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2A68C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C2A68C]"></span>
                </span>
                We're open for business
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] bg-clip-text text-transparent">Building</span>
                <br />
                <span className="text-white">Digital Future</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We create exceptional digital experiences that drive growth and innovation for businesses in the modern world.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C2A68C]/30"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
                
                <motion.a 
                  href="#services"
                  className="group flex items-center text-gray-300 hover:text-white font-medium transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">Explore Services</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '95%', label: 'Client Satisfaction' },
                  { number: '10+', label: 'Years Experience' },
                  { number: '100%', label: 'Dedication' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#C2A68C] mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
        </motion.section>

        {/* Services Section */}
        <motion.section 
          id="services"
          className="py-32 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-[#C2A68C] uppercase tracking-wider mb-4 inline-block">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Offer</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                { 
                  icon: <FaCode className="text-3xl" />, 
                  title: "Web Development", 
                  description: "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
                  features: ["Responsive Design", "E-commerce", "Web Apps"],
                  delay: 0.1
                },
                { 
                  icon: <FaMobile className="text-3xl" />, 
                  title: "App Development", 
                  description: "Cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
                  features: ["iOS & Android", "React Native", "Flutter"],
                  delay: 0.2
                },
                { 
                  icon: <FaRobot className="text-3xl" />, 
                  title: "AI/ML Solutions", 
                  description: "Cutting-edge artificial intelligence and machine learning solutions to solve complex business challenges.",
                  features: ["Predictive Analytics", "Computer Vision", "NLP"],
                  delay: 0.3
                },
                { 
                  icon: <FaDatabase className="text-3xl" />, 
                  title: "Data Analysis", 
                  description: "Data-driven insights and visualizations to help you make informed business decisions.",
                  features: ["Data Visualization", "Big Data", "Business Intelligence"],
                  delay: 0.4
                },
                { 
                  icon: <FaCode className="text-3xl" />, 
                  title: "UI/UX Design", 
                  description: "Beautiful and intuitive user interfaces designed to enhance user experience and engagement.",
                  features: ["User Research", "Wireframing", "Prototyping"],
                  delay: 0.5
                },
                { 
                  icon: <FaCode className="text-3xl" />, 
                  title: "Cloud Solutions", 
                  description: "Scalable and secure cloud infrastructure tailored to your business needs.",
                  features: ["AWS", "Azure", "Google Cloud"],
                  delay: 0.6
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-card group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-8 rounded-2xl border border-[#252525] hover:border-[#C2A68C]/30 transition-all duration-500 overflow-hidden"
                  data-delay={service.delay}
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C2A68C]/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#C2A68C]/10 rounded-xl flex items-center justify-center mb-6 text-[#C2A68C] group-hover:bg-[#C2A68C] group-hover:text-[#0A0A0A] transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C2A68C] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-[#1F1F1F] text-gray-300 px-3 py-1 rounded-full border border-[#333]">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-sm text-[#C2A68C] group-hover:text-white transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
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
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about"
          className="py-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C2A68C]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#E6D8C3]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block text-sm font-medium text-[#C2A68C] uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Who We Are
              </motion.span>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                About <span className="text-[#C2A68C]">NEGO</span>
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                    { number: '50+', label: 'Projects Completed' },
                    { number: '95%', label: 'Client Satisfaction' },
                    { number: '10+', label: 'Years Experience' },
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
                  href="#contact"
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
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src="/src/assets/favicon.png" 
                  alt="NEGO Team" 
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
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
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C2A68C]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaMobile, FaRobot, FaDatabase, FaArrowUp, FaStar } from 'react-icons/fa';
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
          className="fade-up min-h-[50vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-7xl mx-auto">
            {/* Animated gradient circle */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            
            <motion.div 
              className="relative z-10 grid md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Left column: content */}
              <div className="text-center md:text-left">
                <motion.div 
                  className="inline-block px-4 py-2 mb-5 text-sm font-medium text-[#C2A68C] bg-[#C2A68C]/10 rounded-full backdrop-blur-sm border border-[#C2A68C]/20"
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
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.1]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] bg-clip-text text-transparent">Build. Launch.</span>
                  <br />
                  Grow.
                </motion.h1>

                <motion.p 
                  className="text-base md:text-lg text-gray-300 mb-8 max-w-xl md:max-w-2xl md:mx-0 mx-auto leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Senior-led team crafting fast, clean websites that convert. Clear plans, honest updates, on-time delivery.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <motion.a 
                    href="https://wa.me/918789925958" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-7 py-3.5 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C2A68C]/30"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Let's Talk
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.a>
                  
                  <motion.a 
                    href="/services"
                    className="group flex items-center text-gray-300 hover:text-white font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Explore Services</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Trust badges */}
                <motion.div 
                  className="flex flex-wrap md:justify-start justify-center gap-3 mt-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  {[
                    'On‑time delivery',
                    'Transparent pricing',
                    'Senior-led team',
                    'Fast communication'
                  ].map((badge, i) => (
                    <span key={i} className="text-xs md:text-sm bg-[#1A1A1A] text-gray-300 px-3.5 py-1.5 rounded-full border border-[#252525]">
                      {badge}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right column: glass card */}
              <div className="hidden md:block">
                <motion.div 
                  className="relative rounded-2xl border border-[#2a2a2a] bg-[#111111]/60 backdrop-blur-md p-6 overflow-hidden h-full"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C2A68C]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#E6D8C3]/10 rounded-full blur-3xl"></div>

                  <div className="relative z-10 space-y-5 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">Our Projects</h3>
                      <a href="/projects" className="text-xs px-2 py-1 rounded-full bg-[#C2A68C]/10 text-[#C2A68C] border border-[#C2A68C]/20 hover:bg-[#C2A68C]/20 transition-colors">View All</a>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      {/* Project 1 */}
                      <a 
                        href="https://lathishop.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#252525] p-4 hover:border-[#C2A68C]/40 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <img 
                              src="https://lathishop.com/assets/Logo.png" 
                              alt="Lathi logo" 
                              className="w-8 h-8 rounded-full object-cover border border-[#333]"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-white truncate">Lathi E-commerce</h4>
                              <p className="text-xs text-gray-400 truncate">E-commerce Platform</p>
                            </div>
                            <span className="text-xs text-green-400">Live</span>
                          </div>
                          <p className="text-xs text-gray-300 line-clamp-2 mb-2">A modern e-commerce platform with seamless checkout and inventory management.</p>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300">React</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300">Node.js</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300">MongoDB</span>
                          </div>
                        </div>
                      </a>

                      {/* Project 2 */}
                      <a 
                        href="https://sted-founder.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <div className="rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#252525] p-4 hover:border-[#C2A68C]/40 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#1E1E1E] border border-[#333] flex items-center justify-center">
                              <span className="text-xs font-medium text-[#C2A68C]">ST</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-white truncate">STED</h4>
                              <p className="text-xs text-gray-400 truncate">Student Talent Enhancement</p>
                            </div>
                            <span className="text-xs text-green-400">Live</span>
                          </div>
                          <p className="text-xs text-gray-300 line-clamp-2 mb-2">Student Talent Enhancement and Development platform connecting students with industry mentors.</p>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300">React</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300">Firebase</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300">Material-UI</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
        </motion.section>

        {/* Why Choose NEGO */}
        <motion.section 
          className="py-24 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-[#C2A68C] uppercase tracking-wider mb-4 inline-block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built For Impact</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Quality First', desc: 'Pixel-perfect execution with robust engineering practices.' },
                { title: 'Fast Delivery', desc: 'Agile sprints and clear milestones to ship on time.' },
                { title: 'Scalable Tech', desc: 'Future-ready architectures that grow with your business.' },
                { title: 'Clear Communication', desc: 'Transparent updates and proactive collaboration.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-6 rounded-2xl border border-[#252525] hover:border-[#C2A68C]/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.6 }}
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#C2A68C]/5 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C2A68C]">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Client Logos */}
        <motion.section 
          className="py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#252525] bg-[#0F0F0F]/60 p-8">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#C2A68C]/10 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E6D8C3]/10 blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center">
                <span className="inline-block text-xs font-semibold tracking-widest text-[#C2A68C] uppercase">Trusted by</span>
                <h3 className="mt-2 text-lg md:text-xl text-gray-300">Teams building for the future</h3>
              </div>

              <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2.5">
                {[
                  { name: 'Lathi', url: 'https://www.lathishop.com', rating: 4.7 },
                  { name: 'Campus Leauge', url: 'https://www.campusleauge.in', rating: 4.5 },
                  { name: 'STED', url: 'https://sted-founder.vercel.app', rating: 4.6 },
                  { name: 'And many more', url: '#' },
                ].map((c) => (
                  c.url === '#'
                    ? (
                        <span
                          key={c.name}
                          className="px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#121212] text-gray-400 text-xs sm:text-sm"
                        >
                          {c.name}
                        </span>
                      )
                    : (
                        <a
                          key={c.name}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden pl-3 pr-2.5 py-1.5 rounded-full border border-[#2a2a2a] bg-[#141414] text-gray-200 text-xs sm:text-sm hover:text-white transition-all flex items-center gap-1.5"
                          aria-label={c.name}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#C2A68C]/0 via-[#C2A68C]/10 to-[#E6D8C3]/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span className="relative z-10 flex items-center gap-2">
                            {c.name}
                            {typeof c.rating === 'number' && (
                              <span className="ml-1 inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-300 bg-[#1b1b1b] border border-[#2a2a2a] px-1.5 py-0.5 rounded-full">
                                <FaStar className="text-[#C2A68C]" size={10} />
                                {c.rating.toFixed(1)}
                                <span className="opacity-60">/5</span>
                              </span>
                            )}
                            <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <path d="M15 3h6v6"/>
                              <path d="M10 14L21 3"/>
                            </svg>
                          </span>
                        </a>
                      )
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonial Highlight */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="relative rounded-2xl border border-[#252525] bg-gradient-to-br from-[#121212] to-[#0F0F0F] p-10">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#C2A68C] text-[#0A0A0A] flex items-center justify-center font-bold text-xl">NE</div>
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                “NEGO delivered beyond expectations. The collaboration was smooth, timelines were clear, and the final product is fast and beautiful.”
              </blockquote>
              <div className="mt-4 text-gray-400">— Happy Client</div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-[#252525] bg-gradient-to-r from-[#151515] via-[#101010] to-[#151515] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Ready to build something great?</h3>
                <p className="text-gray-400 mt-2">Tell us about your idea and we’ll craft a plan to bring it to life.</p>
              </div>
              <motion.a 
                href="https://wa.me/918789925958"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full hover:shadow-lg hover:shadow-[#C2A68C]/30 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>
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
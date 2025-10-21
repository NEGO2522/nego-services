import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaServer, FaMobile, FaRobot, FaDatabase } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Lathi E-commerce',
      description: 'A modern e-commerce platform with seamless checkout and inventory management system built with MERN stack.',
      image: 'https://lathishop.com/assets/Logo.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'live',
      links: {
        live: 'https://lathishop.com',
        github: '#'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Campus League',
      description: 'A platform for college students to participate in coding competitions and hackathons.',
      image: 'https://www.campusleauge.in/football-icon.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      status: 'live',
      links: {
        live: 'https://www.campusleauge.in',
        github: '#'
      },
      featured: true
    },
    {
      id: 4,
      title: 'STED Platform',
      description: 'Student Talent Enhancement and Development platform connecting students with industry mentors.',
      image: null,
      tags: ['React', 'Firebase', 'Material-UI'],
      status: 'live',
      links: {
        live: 'https://sted-founder.vercel.app',
        github: '#'
      },
      featured: true
    }
  ];

  // Initialize GSAP animations
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

    // Fade in animations
    gsap.utils.toArray('.fade-up').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Stagger animations for project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'live':
        return <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Live</span>;
      case 'in-progress':
        return <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">In Progress</span>;
      case 'planned':
        return <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Planned</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background grid with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #1F1F1F 1px, transparent 1px), linear-gradient(to bottom, #1F1F1F 1px, transparent 1px)',
            backgroundSize: '128px 128px',
            opacity: 0.2,
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
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <Helmet>
        <title>Previous Builds - NEGO</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Navigation Bar */}
      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20 fade-up">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Case <span className="bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] bg-clip-text text-transparent">Studies</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A closer look at the digital solutions we’ve delivered — designed for impact and built to perform.
          </motion.p>
        </section>

        {/* Projects Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="project-card group relative rounded-2xl border border-[#2a2a2a] bg-[#111111]/60 backdrop-blur-md p-6 overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C2A68C]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#E6D8C3]/10 rounded-full blur-3xl"></div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-10 h-10 rounded-full object-cover border border-[#333]"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-[#1E1E1E] border border-[#333] flex items-center justify-center">
                            <span className="text-sm font-medium text-[#C2A68C]">
                              {project.title
                                .split(' ')
                                .map((word) => word[0])
                                .join('')
                                .substring(0, 2)
                                .toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          {getStatusBadge(project.status)}
                        </div>
                      </div>
                      {project.featured && (
                        <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-[#C2A68C]/10 text-[#C2A68C] border border-[#C2A68C]/20">
                          <FaStar className="mr-1" size={10} /> Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[#141414] border border-[#2a2a2a] text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-[#252525] flex items-center justify-between">
                      {project.status === 'live' && project.links.live ? (
                        <div
                          className="group flex items-center text-[#C2A68C] hover:text-[#E6D8C3] transition-colors"
                          title="Visit Live Site"
                        >
                          <div className="flex items-center">
                            <div className="relative">
                              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                              <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                            </div>
                            <span className="text-xs font-medium">Live</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500">
                          {project.status === 'in-progress' ? 'In Development' : 'Coming Soon'}
                        </span>
                      )}
                      <div className="flex items-center space-x-1">
                        <FaCode className="text-gray-500" size={12} />
                        <FaServer className="text-gray-500" size={12} />
                        {project.tags.includes('React Native') && <FaMobile className="text-gray-500" size={12} />}
                        {project.tags.includes('OpenAI') && <FaRobot className="text-gray-500" size={12} />}
                        {project.tags.includes('MongoDB') || project.tags.includes('PostgreSQL') ? (
                          <FaDatabase className="text-gray-500" size={12} />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-[#252525] p-8 md:p-12 text-center mb-20 fade-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help bring your ideas to life with our expertise and innovative solutions.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full hover:shadow-lg hover:shadow-[#C2A68C]/30 transition-all duration-300"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
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
          <FaExternalLinkAlt className="w-5 h-5 transform rotate-90" />
        </motion.button>
      )}
    </div>
  );
};

export default Projects;

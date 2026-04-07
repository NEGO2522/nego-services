import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const GridBg = ({ opacity = 0.5, size = 48 }) => (
  <div className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,${opacity * 0.1}) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,${opacity * 0.1}) 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`
    }} />
);

const SectionLabel = ({ children }) => (
  <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-6 border border-black/5">
    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
    {children}
  </p>
);

const PROJECTS_LIST = [
  { id: '1', title: 'Lathi E-commerce', desc: 'A modern e-commerce platform with seamless checkout and inventory management system built with MERN stack.', tags: ['React', 'Node.js', 'MongoDB'], status: 'live', link: 'https://lathishop.com', icon: '🛍️' },
  { id: '2', title: 'Campus League', desc: 'A platform for college students to participate in coding competitions and hackathons.', tags: ['React', 'Node', 'Sockets'], status: 'live', link: 'https://www.campusleauge.in', icon: '⚽' },
  { id: '3', title: 'STED Platform', desc: 'Student Talent Enhancement and Development platform connecting students with industry mentors.', tags: ['React', 'Firebase', 'MUI'], status: 'live', link: 'https://sted-founder.vercel.app', icon: '🎓' },
  { id: '4', title: 'Linkaura', desc: 'Modern connectivity and digital networking platform (from Brain Forge) built for seamless user interaction.', tags: ['React', 'Node.js'], status: 'live', link: 'https://linkaura.in', icon: '✨' },
];

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-black selection:text-white pb-0">
      <Helmet>
        <title>Previous Builds — NEGO</title>
        <meta name="description" content="Explore NEGO's portfolio of web applications, mobile apps, and SaaS platforms." />
      </Helmet>

      <Navbar />

      <main className="relative pt-36 pb-24 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <GridBg opacity={0.6} size={48} />
        </motion.div>
        
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 80% 90% at 50% -10%, #fff 0%, transparent 80%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Hero Header */}
          <div className="mb-24 grid md:grid-cols-12 gap-10 items-end">
            <motion.div 
              className="md:col-span-8 flex flex-col items-start text-left"
              initial="hidden" animate="show" variants={fadeUp(0)}
            >
              <SectionLabel>Our Portfolio</SectionLabel>
              <h1 className="font-black text-black leading-[1.02] tracking-tight mb-7"
                style={{ fontSize: 'clamp(3.5rem, 6.5vw, 5.5rem)', letterSpacing: '-0.045em' }}>
                Previous <br className="hidden md:block"/>
                <span className="text-black/30">Builds.</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-black/50 max-w-xl leading-[1.75]">
                A closer look at the digital solutions we've delivered — designed for impact and built to perform.
              </p>
            </motion.div>
            
            <motion.div 
              className="hidden md:flex md:col-span-4 justify-end items-center pb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-white border border-black/8 shadow-sm">
                <div className="absolute inset-2 border border-dashed border-black/20 rounded-full animate-[spin_24s_linear_infinite_reverse]" />
                <div className="text-center relative z-10">
                  <div className="text-[32px] font-black text-black leading-none mb-1">{PROJECTS_LIST.length}</div>
                  <div className="text-[8px] uppercase tracking-widest font-bold text-black/40">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-32">
            {PROJECTS_LIST.map((p, i) => (
              <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-[2rem] p-8 md:p-10 bg-white border border-black/8 overflow-hidden h-full flex flex-col transition-all duration-500"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.03)' }}
                  whileHover={{ y: -6, boxShadow: '0 24px 72px rgba(0,0,0,0.08)', borderColor: 'rgba(0,0,0,0.15)' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at top right, rgba(0,0,0,0.02) 0%, transparent 60%)' }} />

                  {/* Top Row: Icon & Visit Arrow */}
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-black/4 flex items-center justify-center text-3xl group-hover:bg-black/8 transition-colors duration-500 grayscale opacity-80 group-hover:opacity-100">
                      {p.icon}
                    </div>
                    
                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="19" x2="19" y2="5"></line>
                        <polyline points="10 5 19 5 19 14"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-bold text-black text-[24px] leading-none shrink-0 border-b border-transparent group-hover:border-black/20 transition-colors">
                        {p.title}
                      </h3>
                      {p.status === 'live' && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-700 text-[9px] font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    
                    <p className="leading-[1.7] text-black/50 text-[15px] mb-8 max-w-md">
                      {p.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10.5px] px-3.5 py-1.5 rounded-full border border-black/8 text-black/50 bg-black/[0.02] font-semibold group-hover:border-black/20 group-hover:text-black/70 transition-colors tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* Unified Bold CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[3rem] p-12 md:p-20 bg-black text-white flex flex-col items-center text-center overflow-hidden"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.18)' }}>
            
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] pointer-events-none rounded-[100%]" />

            <h2 className="relative font-black text-white leading-[1.05] mb-6 text-[clamp(2.5rem,5vw,4rem)] tracking-tight max-w-2xl">
              Impressed by what you see? Let's build together.
            </h2>

            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 mt-4 rounded-full font-bold text-black bg-white text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: '#f5f5f5' }} whileTap={{ scale: 0.98 }}
              style={{ boxShadow: '0 12px 40px rgba(255,255,255,0.15)' }}>
              Start your project
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

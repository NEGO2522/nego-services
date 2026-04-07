import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
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

const SERVICES_LIST = [
  { n: '01', title: 'Custom Websites', desc: 'Pixel-perfect, fast-loading, and built to convert. We design tailored web experiences that perfectly capture your brand identity.', tags: ['React', 'Next.js', 'SEO'], icon: '🌐', span: 'lg:col-span-2', featured: true },
  { n: '02', title: 'Web Apps', desc: 'Secure, scalable React applications with robust backends and clean APIs.', tags: ['Node.js', 'Supabase'], icon: '⚡', span: 'lg:col-span-1' },
  { n: '03', title: 'E-commerce', desc: 'End-to-end shopping experiences with Razorpay/Stripe integrations.', tags: ['Cart', 'Payments'], icon: '🛒', span: 'lg:col-span-1' },
  { n: '04', title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps delivering smooth native performance with React Native.', tags: ['iOS', 'Android'], icon: '📱', span: 'lg:col-span-1' },
  { n: '05', title: 'Portfolios & Personal', desc: 'Stunning, high-impact portfolio websites and personal projects that make you stand out to recruiters and clients.', tags: ['Framer Motion', '3D', 'Unique'], icon: '✨', span: 'lg:col-span-1' },
  { n: '06', title: 'SaaS Platforms', desc: 'Complex subscriber platforms built with Stripe billing.', tags: ['Auth', 'Billing'], icon: '🚀', span: 'lg:col-span-1' },
  { n: '07', title: 'Pre-built Projects', desc: 'Accelerate your launch with production-ready codebases. Purchase high-quality, scalable web templates and complete project kits.', tags: ['Templates', 'Ready-to-ship'], icon: '📦', span: 'lg:col-span-2' },
  { n: '08', title: 'Performance Optimization', desc: 'We take slow, bloated websites and rewrite them to achieve perfect 99+ Lighthouse scores. Fast load times mean higher conversions and better Google rankings.', tags: ['Core Web Vitals', 'Caching', 'CDN'], icon: '🏆', span: 'lg:col-span-3', featuredBanner: true },
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services — NEGO';
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-black selection:text-white pb-0">
      <Navbar />

      <main className="relative pt-36 pb-24 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <GridBg opacity={0.6} size={48} />
        </motion.div>
        
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 80% 90% at 50% -10%, #fff 0%, transparent 80%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Hero Header */}
          <div className="mb-24 grid lg:grid-cols-12 gap-10 items-end">
            <motion.div 
              className="lg:col-span-8 flex flex-col items-start text-left"
              initial="hidden" animate="show" variants={fadeUp(0)}
            >
              <SectionLabel>Our Capabilities</SectionLabel>
              <h1 className="font-black text-black leading-[1.02] tracking-tight mb-7"
                style={{ fontSize: 'clamp(3.5rem, 6.5vw, 5.5rem)', letterSpacing: '-0.045em' }}>
                We build <br className="hidden md:block"/>
                <span className="text-black/30">digital excellence.</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-black/50 max-w-xl leading-[1.75]">
                As a senior-led engineering team, we don't believe in templates or junior output. Every service we offer is executed with pixel-perfection and rigorous performance standards.
              </p>
            </motion.div>
            
            {/* Decorative Right Side Graphic */}
            <motion.div 
              className="hidden lg:flex lg:col-span-4 justify-end items-center pb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-white border border-black/8"
                   style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.05)' }}>
                {/* Rotating dashed ring */}
                <div className="absolute inset-2 border border-dashed border-black/20 rounded-full animate-[spin_24s_linear_infinite]" />
                {/* Center text */}
                <div className="text-center relative z-10 bg-white w-24 h-24 rounded-full flex flex-col items-center justify-center border border-black/4 shadow-sm">
                  <div className="text-2xl font-black text-black leading-none mb-1">100%</div>
                  <div className="text-[8px] uppercase tracking-widest font-bold text-black/40">In-house</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bento Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-32">
            {SERVICES_LIST.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl p-8 bg-white border border-black/8 overflow-hidden cursor-default transition-all duration-500 ${s.span} flex ${s.featuredBanner ? 'flex-col md:flex-row items-center gap-10' : 'flex-col'}`}
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.03)' }}
                whileHover={{ y: -6, boxShadow: '0 24px 72px rgba(0,0,0,0.08)', borderColor: 'rgba(0,0,0,0.15)' }}
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(0,0,0,0.03) 0%, transparent 60%)' }} />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-black/4 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-black/8 grayscale opacity-80 group-hover:opacity-100 ${s.featured && 'w-16 h-16 text-4xl'}`}>
                      {s.icon}
                    </div>
                    <span className="text-[12px] font-black text-black/15 group-hover:text-black/30 transition-colors tracking-widest">{s.n}</span>
                  </div>
                  
                  <h3 className={`font-bold text-black mb-3 leading-snug ${s.featured || s.featuredBanner ? 'text-[24px]' : 'text-[18px]'}`}>
                    {s.title}
                  </h3>
                  <p className={`leading-[1.7] text-black/50 mb-auto pb-8 ${s.featured || s.featuredBanner ? 'text-[15px]' : 'text-[13px]'}`}>
                    {s.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.tags.map(t => (
                      <span key={t} className="text-[10px] px-3 py-1.5 rounded-full border border-black/8 text-black/45 bg-black/[0.02] font-semibold group-hover:border-black/20 group-hover:text-black/60 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Decorative Elements for featured cards */}
                {s.featured && (
                  <div className="hidden md:block absolute -right-10 -bottom-10 w-64 h-64 border border-black/5 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                )}

                {s.featuredBanner && (
                  <div className="w-full md:w-1/3 flex-shrink-0 relative h-48 md:h-full min-h-[200px] bg-[#050505] rounded-2xl flex items-center justify-center overflow-hidden border border-black/10 group-hover:border-black/30 transition-colors">
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '12px 12px', opacity: 0.2 }} />
                    <div className="relative text-center">
                      <div className="text-[64px] font-black text-white leading-none tracking-tighter group-hover:scale-110 transition-transform duration-700">99</div>
                      <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-2">Lighthouse Score</div>
                    </div>
                  </div>
                )}
              </motion.div>
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
            
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] pointer-events-none rounded-[100%]" />

            <h2 className="relative font-black text-white leading-[1.05] mb-6 text-[clamp(2.5rem,5vw,4rem)] tracking-tight max-w-2xl">
              Don't compromise on quality. Build it right.
            </h2>
            <p className="relative text-[16px] md:text-[18px] font-light leading-[1.8] text-white/60 mb-10 max-w-xl mx-auto">
              Ready to ship a premium digital experience? We're taking on select new projects. Drop us a message for a clear scope and timeline.
            </p>

            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-black bg-white text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: '#f5f5f5' }} whileTap={{ scale: 0.98 }}
              style={{ boxShadow: '0 12px 40px rgba(255,255,255,0.15)' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 flex-shrink-0" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-green-500 flex-shrink-0" />
              </span>
              Let's Talk Project Scope
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

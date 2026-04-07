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

const STATS = [
  { label: 'Projects Shipped',    value: '10+'  },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Years Experience',    value: '1+'   },
  { label: 'Lines of Code',       value: '1M+'  },
];

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-black selection:text-white">
      <Helmet>
        <title>About Us — NEGO</title>
        <meta name="description" content="Learn about NEGO – who we are, our mission, and our impact." />
      </Helmet>

      <Navbar />

      <main className="relative pt-36 pb-24 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <GridBg opacity={0.6} size={48} />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 80% 90% at 50% -10%, #fff 0%, transparent 80%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Hero row */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <motion.div
              className="lg:col-span-6 flex flex-col items-start text-left"
              initial="hidden" animate="show" variants={fadeUp(0)}
            >
              <SectionLabel>Who We Are</SectionLabel>
              <h1 className="font-black text-black leading-[1.05] tracking-tight mb-8"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-0.04em' }}>
                Transforming ideas into{' '}
                <br className="hidden md:block" />
                <span className="text-black/25">digital reality.</span>
              </h1>

              <div className="space-y-5 text-[16px] md:text-[17px] text-black/50 leading-[1.8] max-w-lg mb-10">
                <p>
                  NEGO is a full-stack tech engineering hub dedicated to helping businesses, creators, and founders transform their innovative ideas into production-ready platforms.
                </p>
                <p>
                  We don't just write code — we architect solutions. With our expertise in cutting-edge web and mobile technologies, we deliver highly scalable, pixel-perfect software tailored strictly to your unique business logic. No templates. No shortcuts.
                </p>
              </div>

              <motion.a
                href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-black hover:bg-black/80 transition-colors text-[14px]"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Connect with our team
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Right — stat bento */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black/5 blur-3xl pointer-events-none rounded-full" />
              {STATS.map((stat, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative p-8 md:p-10 bg-white border border-black/8 rounded-[2rem] flex flex-col justify-end overflow-hidden group hover:border-black/20 transition-colors ${i === 0 || i === 3 ? 'aspect-square' : 'aspect-[4/3]'}`}
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
                  <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }} />
                  <div className="relative text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none text-black mb-3 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="relative text-[12px] font-bold uppercase tracking-widest text-black/35">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

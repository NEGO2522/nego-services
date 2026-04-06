import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────── */
const fadeUp = (delay = 0, y = 32) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
});

/* ─────────────────────────────────────────
   BACKGROUND PATTERNS
───────────────────────────────────────── */
const GridBg = ({ opacity = 1, size = 48, color = '#e8e8e8' }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
      opacity,
    }}
  />
);

const DotGrid = ({ opacity = 0.5, size = 24 }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, #c8c8c8 1.5px, transparent 1.5px)',
      backgroundSize: `${size}px ${size}px`,
      opacity,
    }}
  />
);

/* ─────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────── */
const WORDS = ['Websites', 'Web Apps', 'Mobile Apps', 'E-commerce', 'SaaS Platforms'];

const Typewriter = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = WORDS[idx];
    let t;
    if (!del && text.length < word.length)
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 65);
    else if (!del && text.length === word.length)
      t = setTimeout(() => setDel(true), 2200);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 32);
    else { setDel(false); setIdx(p => (p + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span>
      <span style={{ color: '#000' }}>{text}</span>
      <span className="ml-1 inline-block w-[3px] h-[0.82em] bg-black align-middle animate-pulse rounded-sm" />
    </span>
  );
};

/* ─────────────────────────────────────────
   HERO VISUAL — right side
───────────────────────────────────────── */

/* Mini bar chart */
const MiniChart = () => {
  const bars = [40, 65, 45, 80, 55, 95, 70];
  return (
    <div className="flex items-end gap-1 h-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{ height: `${h}%`, originY: 1, background: h > 80 ? '#000' : '#e0e0e0' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
};

const HeroVisual = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2500);
    return () => clearInterval(id);
  }, []);

  const messages = [
    'New project inquiry received ✦',
    'Build complete — deployed to Vercel ✦',
    'Client approved weekly demo ✦',
    'Lighthouse score: 98/100 ✦',
  ];

  return (
    <div className="relative w-full select-none" style={{ maxWidth: 420 }}>

      {/* ── Main dashboard card ── */}
      <motion.div
        initial={{ opacity: 0, y: 28, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl bg-white overflow-hidden"
        style={{
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        {/* Card header */}
        <div className="px-5 py-4 border-b border-black/6 flex items-center justify-between bg-neutral-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white text-[10px] font-black">N</span>
            </div>
            <div>
              <div className="text-[12px] font-bold text-black">NEGO Dashboard</div>
              <div className="text-[10px] text-black/35">Project overview</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-black/8 bg-white text-[10px] font-semibold text-black/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-black/6 border-b border-black/6">
          {[{ v: '10+', l: 'Projects' }, { v: '100%', l: 'On-Time' }, { v: '5.0★', l: 'Rating' }].map((s, i) => (
            <motion.div key={s.l} className="py-4 text-center"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
              <div className="text-[15px] font-black text-black">{s.v}</div>
              <div className="text-[9px] uppercase tracking-widest text-black/32 mt-0.5">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Revenue chart */}
        <div className="px-5 pt-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[11px] font-bold text-black">Revenue Growth</div>
              <div className="text-[9px] text-black/30">Last 7 weeks</div>
            </div>
            <div className="text-[11px] font-black text-black">+47%
              <span className="text-[9px] text-green-600 font-semibold ml-1">↑</span>
            </div>
          </div>
          <MiniChart />
        </div>

        {/* Active projects */}
        <div className="px-5 pb-4 pt-1">
          <div className="text-[9px] uppercase tracking-widest text-black/28 mb-2.5">Active projects</div>
          {[
            { name: 'Lathi Shop', tag: 'E-commerce', pct: 82 },
            { name: 'Campus League', tag: 'EdTech', pct: 61 },
            { name: 'STED Platform', tag: 'SaaS', pct: 45 },
          ].map((p, i) => (
            <motion.div key={p.name} className="flex items-center gap-3 mb-2 last:mb-0"
              initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.1 }}>
              <div className="w-6 h-6 rounded-lg bg-black/5 flex items-center justify-center text-[9px] font-black text-black flex-shrink-0">{p.name[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-0.5">
                  <span className="text-[10px] font-semibold text-black truncate">{p.name}</span>
                  <span className="text-[9px] text-black/35">{p.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-black/6 overflow-hidden">
                  <motion.div className="h-full bg-black rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${p.pct}%` }}
                    transition={{ delay: 0.9 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Live activity ticker ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-3 rounded-xl px-4 py-3 flex items-center gap-3 bg-white"
        style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
      >
        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={tick}
            className="text-[11px] font-medium text-black/55 truncate"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            {messages[tick % messages.length]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* ── Floating metric card ── */}
      <motion.div
        className="absolute -top-5 -right-6 rounded-2xl bg-black text-white px-4 py-3 flex items-center gap-3"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.28)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 1.0, duration: 0.4 },
          scale: { delay: 1.0, duration: 0.4 },
          y: { delay: 1.4, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="text-2xl font-black leading-none">98</div>
        <div>
          <div className="text-[8px] text-white/40 uppercase tracking-widest">Lighthouse</div>
          <div className="text-[10px] font-semibold text-white/90">Performance</div>
        </div>
      </motion.div>

      {/* ── Tech stack pill ── */}
      <motion.div
        className="absolute -left-6 top-1/3 flex flex-col gap-1.5 p-2.5 rounded-2xl bg-white"
        style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 8px 28px rgba(0,0,0,0.1)' }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.5 },
          x: { delay: 1.1, duration: 0.5 },
          y: { delay: 1.6, duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {['⚛️', '🔥', '🚀'].map((emoji, i) => (
          <div key={i} className="w-8 h-8 rounded-xl bg-black/4 flex items-center justify-center text-sm grayscale opacity-80">
            {emoji}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────
   SERVICES
───────────────────────────────────────── */
const SERVICES = [
  { n: '01', title: 'Custom Websites', desc: 'Pixel-perfect, fast-loading websites built to rank on Google and convert visitors into customers.', tags: ['React', 'Next.js', 'SEO'], icon: '🌐' },
  { n: '02', title: 'Web Applications', desc: 'Full-stack apps with auth, databases, real-time data and clean APIs — from MVP to production.', tags: ['Node.js', 'MongoDB', 'Firebase'], icon: '⚡' },
  { n: '03', title: 'E-commerce Stores', desc: 'End-to-end stores with cart, payments, inventory management and a powerful admin panel.', tags: ['Cart', 'Payments', 'Admin'], icon: '🛒' },
  { n: '04', title: 'Mobile Apps', desc: 'Cross-platform Android & iOS apps with native-like feel, smooth UX and fast performance.', tags: ['React Native', 'iOS', 'Android'], icon: '📱' },
  { n: '05', title: 'SaaS Platforms', desc: 'Subscription products with billing, user management, dashboards and scalable architecture.', tags: ['Auth', 'Billing', 'Scalable'], icon: '🚀' },
  { n: '06', title: 'Speed & SEO', desc: 'Take any existing site to Lighthouse 95+. Core Web Vitals, CDN, caching — guaranteed results.', tags: ['Performance', 'Core Web Vitals', 'CDN'], icon: '🏆' },
];

/* ─────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────── */
const STEPS = [
  { n: '01', title: 'Discovery Call', desc: 'A quick 30-minute call to understand your idea, goals, budget and timeline.', time: '~30 min' },
  { n: '02', title: 'Proposal & Plan', desc: 'Detailed scope, cost breakdown and project roadmap delivered within 24 hours.', time: '24 hrs' },
  { n: '03', title: 'Build with Weekly Demos', desc: 'We ship in sprints and show live demos every week. You\'re always in the loop.', time: 'Weekly' },
  { n: '04', title: 'Launch & Support', desc: 'We go live, crush any remaining bugs, and stay available post-launch.', time: 'Ongoing' },
];

/* ─────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────── */
const SectionLabel = ({ children, light = false }) => (
  <p className={`text-[10px] font-semibold tracking-[0.25em] uppercase mb-3 flex items-center gap-2 ${light ? 'text-white/35' : 'text-black/35'}`}>
    <span className={`w-5 h-px rounded ${light ? 'bg-white/30' : 'bg-black/25'}`} />
    {children}
  </p>
);

/* ─────────────────────────────────────────
   NUMBER COUNTER
───────────────────────────────────────── */
const AnimatedStat = ({ value, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="text-center px-6 py-5">
      <motion.div
        className="text-2xl font-black text-black"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
        {value}
      </motion.div>
      <div className="text-[10px] uppercase tracking-widest text-black/35 mt-0.5">{label}</div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LANDING PAGE
═══════════════════════════════════════════ */
const Landing = () => {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    document.title = 'NEGO · Build. Launch. Grow.';
    // inject Google Fonts if not already present
    if (!document.getElementById('nego-fonts')) {
      const link = document.createElement('link');
      link.id = 'nego-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const unsub = scrollY.on('change', v => setShowTop(v > 500));
    return () => unsub();
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      <Navbar />

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden" style={{ position: 'relative' }}>
        {/* Layered background */}
        <GridBg opacity={0.65} size={48} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 30%, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.5) 55%, rgba(255,255,255,0) 100%)' }} />

        {/* Decorative blobs */}
        <motion.div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />

        {/* Corner crosshairs */}
        {[['top-[80px] left-[40px]'], ['top-[80px] right-[40px]'], ['bottom-[40px] left-[40px]'], ['bottom-[40px] right-[40px]']].map(([cls], i) => (
          <div key={i} className={`absolute ${cls} w-4 h-4 pointer-events-none opacity-30`}>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-black" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black" />
          </div>
        ))}

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 xl:gap-28 items-center">

            {/* ── LEFT ── */}
            <div>
              {/* Availability badge */}
              <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/8 text-xs font-medium text-black/50 bg-white mb-7"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-60" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Available for new projects
              </motion.div>

              {/* Main headline */}
              <motion.h1 variants={fadeUp(0.14)} initial="hidden" animate="show"
                className="font-black leading-[1.03] mb-6 text-black"
                style={{ fontSize: 'clamp(3rem, 6vw, 4.8rem)', letterSpacing: '-0.045em' }}>
                We Build<br />
                <span className="relative">
                  <Typewriter />
                </span>
                <br />
                <span style={{ color: 'rgba(0,0,0,0.16)' }}>That Actually</span>
                <br />
                Convert.
              </motion.h1>

              <motion.p variants={fadeUp(0.22)} initial="hidden" animate="show"
                className="leading-[1.78] mb-9 max-w-[440px]"
                style={{ fontSize: '15px', color: 'rgba(0,0,0,0.46)' }}>
                Senior-led team. Clean code. Weekly demos. We take your idea from wireframe to live product — transparent pricing, on-time delivery, always.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp(0.3)} initial="hidden" animate="show"
                className="flex flex-wrap gap-3 items-center mb-10">
                <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold text-white bg-black"
                  whileHover={{ scale: 1.04, backgroundColor: '#1a1a1a' }} whileTap={{ scale: 0.97 }}
                  style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.24)' }}>
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <Link to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-medium border border-black/10 hover:border-black/30 text-black/55 hover:text-black transition-all duration-200">
                  View Our Work
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp(0.38)} initial="hidden" animate="show"
                className="inline-flex divide-x divide-black/8 border border-black/8 rounded-2xl overflow-hidden bg-white"
                style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
                {[{ value: '10+', label: 'Projects' }, { value: '100%', label: 'On-Time' }, { value: '5.0★', label: 'Rating' }].map(s => (
                  <AnimatedStat key={s.label} {...s} />
                ))}
              </motion.div>

              {/* Social proof avatars */}
              <motion.div variants={fadeUp(0.45)} initial="hidden" animate="show"
                className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-2">
                  {['L', 'C', 'S'].map((l, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-black border-2 border-white flex items-center justify-center text-[9px] font-black text-white">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-black text-[9px]" />)}
                  </div>
                  <div className="text-[11px] text-black/38 mt-0.5">Trusted by 10+ businesses</div>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT — Hero Visual ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col items-center justify-center">
              <HeroVisual />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-black/20" />
          <div className="text-[8px] text-black/22 tracking-widest uppercase">Scroll</div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          TECH MARQUEE
      ════════════════════════════════════ */}
      <div className="border-y border-black/6 overflow-hidden" style={{ background: '#f9f9f9' }}>
        <DotGrid opacity={0.35} size={22} />
        <div className="relative z-10 py-5">
          <p className="text-center text-[9px] tracking-[0.32em] uppercase text-black/22 mb-4">Our tech stack</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f9f9f9, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f9f9f9, transparent)' }} />
            <motion.div className="flex gap-2.5 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
              {[...['React', 'Next.js', 'Node.js', 'Firebase', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite', 'Vercel', 'PostgreSQL', 'Express.js'],
                ...['React', 'Next.js', 'Node.js', 'Firebase', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite', 'Vercel', 'PostgreSQL', 'Express.js']].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-medium border border-black/7 bg-white text-black/50 whitespace-nowrap"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <span className="w-1 h-1 rounded-full bg-black/20" />{t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          WHY NEGO — VALUE PROPS
      ════════════════════════════════════ */}
      <section className="relative py-24 border-b border-black/6 overflow-hidden">
        <GridBg opacity={0.4} size={48} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 50%, rgba(255,255,255,0.9), transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Why NEGO</SectionLabel>
              <h2 className="font-black text-black leading-[1.04] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', letterSpacing: '-0.038em' }}>
                The difference is<br />in the details.
              </h2>
              <p className="text-[14px] leading-[1.78] text-black/44 max-w-md">
                We're not an agency with 100 clients. We're a focused, senior-led team that treats every project like our own. You get direct access to the people building your product.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'Senior-Led Team', desc: 'No juniors. Every line of code reviewed by experienced developers.' },
                { icon: '📊', title: 'Weekly Demos', desc: 'You see real progress every week. No black boxes, no surprises.' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'Fixed-scope quotes. What we quote is what you pay. No hidden fees.' },
                { icon: '🔒', title: 'Post-Launch Support', desc: 'We stay with you after go-live. Bugs get fixed, period.' },
              ].map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                  className="p-5 rounded-2xl border border-black/7 bg-white transition-all duration-300"
                  style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                  <div className="text-2xl mb-3 grayscale opacity-80">{item.icon}</div>
                  <h4 className="font-bold text-black text-[13px] mb-1.5">{item.title}</h4>
                  <p className="text-[12px] leading-[1.65] text-black/42">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SERVICES
      ════════════════════════════════════ */}
      <section className="relative py-28 border-b border-black/6 overflow-hidden">
        <GridBg opacity={0.35} size={48} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.9), transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>What We Build</SectionLabel>
              <h2 className="font-black text-black leading-[1.03]"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', letterSpacing: '-0.04em' }}>
                Every digital product<br />your business needs.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Link to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold border border-black/10 text-black/55 hover:text-black hover:border-black/30 transition-all duration-200">
                See all services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Top 2 featured cards ── */}
          <div className="grid lg:grid-cols-2 gap-4 mb-4">
            {SERVICES.slice(0, 2).map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-8 overflow-hidden cursor-default bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>

                {/* Animated bg on hover */}
                <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)' }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-white/10 flex items-center justify-center text-2xl transition-all duration-300 grayscale opacity-80 group-hover:opacity-100">
                      {s.icon}
                    </div>
                    <span className="text-[11px] font-black text-black/14 group-hover:text-white/20 transition-colors tracking-widest">{s.n}</span>
                  </div>
                  <h3 className="text-[20px] font-black text-black group-hover:text-white transition-colors duration-300 mb-3 leading-tight">{s.title}</h3>
                  <p className="text-[14px] leading-[1.72] text-black/44 group-hover:text-white/55 transition-colors duration-300 mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] px-3 py-1 rounded-full border border-black/8 group-hover:border-white/15 text-black/44 group-hover:text-white/44 transition-all font-medium bg-black/3 group-hover:bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow reveal on hover */}
                <div className="absolute bottom-6 right-6 w-9 h-9 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom 4 compact cards ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(2).map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}>

                {/* Hover fill */}
                <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: '#000' }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-black/5 group-hover:bg-white/10 flex items-center justify-center text-xl transition-all duration-300 grayscale opacity-80 group-hover:opacity-100">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-black text-black/12 group-hover:text-white/18 transition-colors tracking-widest">{s.n}</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-black group-hover:text-white transition-colors duration-300 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-[12px] leading-[1.65] text-black/40 group-hover:text-white/48 transition-colors duration-300 mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {s.tags.map(t => (
                      <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-black/7 group-hover:border-white/14 text-black/38 group-hover:text-white/38 transition-all font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════
          CLIENTS / SOCIAL PROOF
      ════════════════════════════════════ */}
      <section className="relative py-24 border-b border-black/6 overflow-hidden" style={{ background: '#fafafa' }}>
        <DotGrid opacity={0.38} size={28} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <motion.div className="text-center mb-14" variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionLabel>Real Projects. Real Results.</SectionLabel>
            <h2 className="font-black text-black leading-[1.04] mb-3"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.038em' }}>
              Work we're proud of.
            </h2>
            <p className="text-[14px] text-black/38 max-w-sm mx-auto leading-[1.72]">
              Products shipped for real clients — from e-commerce to AI tools and student platforms.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'Lathi Shop',
                tag: 'E-commerce',
                rating: '4.7',
                url: 'https://www.lathishop.com',
                desc: 'Full e-commerce store with cart, Razorpay payments, inventory & admin panel.',
                tech: ['React', 'Node.js', 'Payments'],
                emoji: '🛒',
              },
              {
                name: 'Campus League',
                tag: 'EdTech · Sports',
                rating: '4.5',
                url: 'https://www.campusleauge.in',
                desc: 'Student sports league platform with live scores, team management & scheduling.',
                tech: ['React', 'Firebase', 'Real-time'],
                emoji: '🏆',
              },
              {
                name: 'STED',
                tag: 'Student Platform',
                rating: '4.6',
                url: 'https://sted-founder.vercel.app',
                desc: 'EdTech platform connecting student founders with resources and mentors.',
                tech: ['Next.js', 'Supabase', 'Auth'],
                emoji: '🚀',
              },
              {
                name: 'Brain Forge',
                tag: 'AI Tool',
                rating: '4.8',
                url: 'https://github.com/NEGO2522/Brain-Forge',
                desc: 'AI-powered knowledge & productivity tool for students and professionals.',
                tech: ['React', 'Gemini AI', 'GPT'],
                emoji: '🧠',
              },
              {
                name: 'SayIt App',
                tag: 'Social · Audio',
                rating: '4.5',
                url: 'https://github.com/NEGO2522/sayit-app',
                desc: 'Voice-based social sharing app built with TypeScript and real-time audio.',
                tech: ['TypeScript', 'React', 'Audio API'],
                emoji: '🎙️',
              },
              {
                name: 'Nova Voice Tutor',
                tag: 'AI · EdTech',
                rating: '4.7',
                url: 'https://github.com/NEGO2522/nova-voice-tutor',
                desc: 'Voice-enabled AI tutor using Amazon Nova Lite for interactive learning.',
                tech: ['TypeScript', 'AWS Nova', 'AI'],
                emoji: '🤖',
              },
            ].map((c, i) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: '0 20px 56px rgba(0,0,0,0.13)' }}
                className="group flex flex-col gap-4 p-5 rounded-2xl border border-black/8 bg-white transition-all duration-250"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-black group-hover:text-white flex items-center justify-center text-2xl transition-all duration-300 flex-shrink-0 grayscale opacity-80 group-hover:opacity-100">
                    {c.emoji}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full border border-black/8 text-black/40 group-hover:border-black/20 transition-colors font-medium">
                    <FaStar size={7} className="text-black/35" />
                    {c.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="text-[14px] font-bold text-black">{c.name}</div>
                    <div className="text-[9px] px-2 py-0.5 rounded-full bg-black/5 text-black/45 font-medium">{c.tag}</div>
                  </div>
                  <p className="text-[12px] leading-[1.65] text-black/42">{c.desc}</p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {c.tech.map(t => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border border-black/7 text-black/38 font-medium group-hover:border-black/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit link */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-black/30 group-hover:text-black transition-colors">
                  <span>View project</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════
          PROCESS
      ════════════════════════════════════ */}
      <section className="relative py-28 border-b border-black/6 overflow-hidden">
        <GridBg opacity={0.42} size={48} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 80% at 5% 50%, rgba(255,255,255,0.92), transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:sticky lg:top-28">
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="font-black text-black leading-[1.04] mb-5"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)', letterSpacing: '-0.038em' }}>
                From idea<br />to live product.
              </h2>
              <p className="text-[14px] leading-[1.78] text-black/44 mb-8 max-w-sm">
                No endless back-and-forth. No surprise invoices. Simple, transparent execution with weekly visibility.
              </p>
              <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold bg-black text-white"
                whileHover={{ scale: 1.04, backgroundColor: '#1a1a1a' }} whileTap={{ scale: 0.97 }}
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                Book a Free Call →
              </motion.a>
            </motion.div>

            <div className="flex flex-col">
              {STEPS.map((s, i) => (
                <motion.div key={s.n}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 pb-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-black/14 bg-white flex items-center justify-center text-[11px] font-black text-black flex-shrink-0"
                      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                      {s.n}
                    </div>
                    {i < 3 && <div className="w-px flex-1 mt-3" style={{ background: 'linear-gradient(to bottom, #d0d0d0, transparent)' }} />}
                  </div>
                  <div className="pt-2.5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-black text-[15px]">{s.title}</h4>
                      <span className="text-[10px] px-2.5 py-1 rounded-full border border-black/8 text-black/35 font-medium">{s.time}</span>
                    </div>
                    <p className="text-[13px] leading-[1.72] text-black/42 max-w-sm">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          TESTIMONIAL
      ════════════════════════════════════ */}
      <section className="relative py-20 border-b border-black/6 overflow-hidden" style={{ background: '#fafafa' }}>
        <DotGrid opacity={0.38} size={32} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-4">
            <SectionLabel>Client Love</SectionLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-black/8 p-10 md:p-14 bg-white overflow-hidden"
            style={{ boxShadow: '0 8px 56px rgba(0,0,0,0.08)' }}>
            {/* Corner grid accent */}
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                maskImage: 'linear-gradient(to bottom-left, black 20%, transparent 60%)',
                WebkitMaskImage: 'linear-gradient(to bottom-left, black 20%, transparent 60%)',
                opacity: 0.7,
              }} />

            <div className="text-[64px] leading-none text-black/7 mb-3 font-serif">"</div>
            <p className="text-[17px] md:text-[19px] font-light leading-[1.75] text-black/62 mb-7 max-w-xl mx-auto">
              NEGO didn't just build us a website — they built us a growth engine. The team was incredibly responsive, demos every week, and the final product launched ahead of schedule.
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-black text-xs" />)}
            </div>
            <div className="text-[12px] text-black/30">— Founder, Lathi Shop  ·  Jaipur, India</div>
          </motion.div>
        </div>
      </section>


      <Footer />

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.28)' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;

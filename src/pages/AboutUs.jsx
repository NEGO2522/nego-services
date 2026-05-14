import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

const pageFlip = (i = 0) => ({
  hidden: { opacity: 0, x: 48, rotateY: -12, transformPerspective: 900 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformPerspective: 900,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  },
});

const STATS = [
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Team Members', value: '10' },
  { label: 'Started In', value: '2025' },
  { label: 'Happy Clients', value: '10+' },
];

const VALUES = [
  {
    title: 'Built from scratch',
    desc: 'We never use templates. Every project is written fresh for your exact business — no copy-paste, no shortcuts.',
  },
  {
    title: 'Real people, real work',
    desc: 'You talk to the same people who are actually building your product. No middlemen, no handoffs.',
  },
  {
    title: 'You always know what\'s going on',
    desc: 'We share progress regularly so there are no surprises. You stay in the loop at every step.',
  },
  {
    title: 'We don\'t disappear after launch',
    desc: 'If something breaks after we ship, we fix it. Simple as that. We stick around.',
  },
];

// What we build — pulled from real services & projects
const WHAT_WE_DO = [
  { tag: 'Web', title: 'Business Websites', desc: 'Clean, fast sites for shops, offices, clinics, coaches — anything local or online.' },
  { tag: 'E-commerce', title: 'Online Stores', desc: 'Full stores with product pages, cart, UPI/Razorpay payments and an admin panel to manage orders.' },
  { tag: 'EdTech', title: 'Platforms & Portals', desc: 'Student portals, coaching dashboards, league management — we\'ve built and shipped them.' },
  { tag: 'AI', title: 'AI-Powered Tools', desc: 'Apps that use GPT, Gemini, or AWS AI to actually do something useful for your users.' },
];

const CONTACT = [
  {
    label: 'WhatsApp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    lines: ['+91 94139 73399', '+91 97192 14408'],
    href: 'https://wa.me/919413973399',
  },
  {
    label: 'Email',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    lines: ['borbreak@gmail.com'],
    href: 'mailto:borbreak@gmail.com',
  },
];

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div
      className="min-h-screen bg-white selection:bg-black selection:text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Helmet>
        <title>About Us — NEGO</title>
        <meta name="description" content="NEGO — Next Generation services. A 10-member team building real web products since 2025." />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 px-5 sm:px-8 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none" initial={false}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.6) 60%, transparent 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/6 border border-black/8 text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Who We Are
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <motion.h1
                variants={fadeUp(0.06)} initial="hidden" animate="show"
                className="font-black text-black leading-[1.04] mb-6"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 4.4rem)', letterSpacing: '-0.04em' }}
              >
                Next Generation.<br />
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>Real products.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp(0.12)} initial="hidden" animate="show"
                className="text-[15px] sm:text-[16px] text-black/48 leading-[1.8] mb-5"
              >
                NEGO stands for Next Generation. We're a 10-member team that started in 2025 with one goal — build things that actually work for people.
              </motion.p>
              <motion.p
                variants={fadeUp(0.18)} initial="hidden" animate="show"
                className="text-[15px] sm:text-[16px] text-black/48 leading-[1.8] mb-8"
              >
                We work with local businesses, student founders, and early-stage startups — building websites, stores, platforms, and AI tools. No filler, no fluff.
              </motion.p>

              <motion.a
                variants={fadeUp(0.24)} initial="hidden" animate="show"
                href="https://wa.me/919413973399"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white bg-black text-[14px] w-full sm:w-auto justify-center sm:justify-start"
                style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.22)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-2 w-2 bg-green-400" />
                </span>
                Talk to us on WhatsApp
              </motion.a>
            </div>

            {/* Right — What makes us different */}
            <div className="flex flex-col gap-3">
              {[
                { num: '01', line: '10 members, 0 middlemen.', sub: 'You talk directly to the people building your product.' },
                { num: '02', line: 'Started in 2025, already shipped 10+ projects.', sub: 'We move fast and we actually finish things.' },
                { num: '03', line: 'No templates. Ever.', sub: 'Every project is written from scratch for your exact needs.' },
                { num: '04', line: "We don't ghost after launch.", sub: 'Support, fixes, updates — we stick around.' },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-black/6 bg-white/70 transition-all duration-200"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                >
                  <span className="text-[10px] font-black text-black/20 tracking-widest mt-0.5 flex-shrink-0">{item.num}</span>
                  <div>
                    <p className="font-bold text-black text-[14px] sm:text-[15px] leading-snug mb-1" style={{ letterSpacing: '-0.02em' }}>
                      {item.line}
                    </p>
                    <p className="text-[12px] text-black/40 leading-[1.6]">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6" style={{
        background: '#ffffff',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">What we do</p>
            <h2
              className="font-black text-black leading-[1.04]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.035em' }}
            >
              Things we build<br />
              <span style={{ color: 'rgba(0,0,0,0.2)' }}>and ship.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_WE_DO.map((item, i) => (
              <motion.div
                key={item.title}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
                className="bg-white/80 backdrop-blur-sm border border-black/8 rounded-2xl p-6 sm:p-8 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transformOrigin: 'left center' }}
              >
                <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/5 text-black/35 mb-4 inline-block">
                  {item.tag}
                </span>
                <h3 className="font-bold text-black text-[17px] mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p className="text-[13px] text-black/45 leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">How we work</p>
            <h2
              className="font-black text-black leading-[1.04]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.035em' }}
            >
              A few things we<br />
              <span style={{ color: 'rgba(0,0,0,0.2)' }}>take seriously.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                className="bg-white/80 backdrop-blur-sm border border-black/8 rounded-2xl p-6 sm:p-8 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transformOrigin: 'left center' }}
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-4">
                  <span className="text-white font-black text-[11px]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-bold text-black text-[16px] mb-2">{v.title}</h3>
                <p className="text-[13px] text-black/45 leading-[1.7]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">Get in touch</p>
            <h2
              className="font-black text-black leading-[1.04]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.035em' }}
            >
              Reach us directly.
            </h2>
            <p className="text-[14px] text-black/40 mt-3 max-w-sm leading-[1.7] mx-auto">
              WhatsApp is the fastest way to reach us. We reply the same day.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">

            {/* WhatsApp card */}
            <motion.div
              variants={pageFlip(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
              className="flex-1 bg-white border border-black/8 rounded-2xl p-6 transition-all duration-300"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transformOrigin: 'left center' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black/60 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-black/35">WhatsApp</p>
              </div>

              {/* Numbers */}
              <div className="flex flex-col gap-2 mb-5">
                {['+91 94139 73399', '+91 97192 14408'].map((num, i) => (
                  <a
                    key={num}
                    href={`https://wa.me/91${num.replace(/\s/g, '').slice(-10)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-black/3 border border-black/6 hover:bg-black hover:text-white hover:border-black transition-all duration-200 group"
                  >
                    <span className="text-[14px] font-semibold text-black group-hover:text-white">{num}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/30 group-hover:text-white/70">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>

              <span className="text-[11px] text-black/30 font-medium">Tap any number to open WhatsApp</span>
            </motion.div>

            {/* Email card */}
            <motion.div
              variants={pageFlip(1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
              className="flex-1 bg-white border border-black/8 rounded-2xl p-6 transition-all duration-300"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transformOrigin: 'left center' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black/60 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-black/35">Email</p>
              </div>

              {/* Email address */}
              <a
                href="mailto:borbreak@gmail.com"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-black/3 border border-black/6 hover:bg-black hover:text-white hover:border-black transition-all duration-200 group mb-5"
              >
                <span className="text-[14px] font-semibold text-black group-hover:text-white">borbreak@gmail.com</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/30 group-hover:text-white/70">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <span className="text-[11px] text-black/30 font-medium">We reply within 24 hours</span>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
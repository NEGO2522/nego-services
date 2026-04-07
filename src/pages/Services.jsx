import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

const SERVICES_LIST = [
  { n: '01', title: 'Custom Websites', desc: 'Pixel-perfect, fast-loading, and built to convert. Tailored web experiences that capture your brand perfectly.', tags: ['React', 'Next.js', 'SEO'], icon: '🌐', big: true },
  { n: '02', title: 'Web Applications', desc: 'Secure, scalable React apps with robust backends and clean APIs.', tags: ['Node.js', 'Supabase', 'Firebase'], icon: '⚡' },
  { n: '03', title: 'E-commerce Stores', desc: 'End-to-end shopping with Razorpay/Stripe, cart, inventory & admin panel.', tags: ['Cart', 'Payments', 'Admin'], icon: '🛒' },
  { n: '04', title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps with native-like performance.', tags: ['React Native', 'iOS', 'Android'], icon: '📱' },
  { n: '05', title: 'SaaS Platforms', desc: 'Subscription products with auth, billing dashboards and scalable architecture.', tags: ['Auth', 'Billing', 'Scalable'], icon: '🚀' },
  { n: '06', title: 'Speed & SEO', desc: 'Take any site to Lighthouse 95+. Core Web Vitals, CDN, caching — guaranteed.', tags: ['Performance', 'Core Web Vitals', 'CDN'], icon: '🏆', dark: true },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services — NEGO';
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-14 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.96) 0%, transparent 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/6 border border-black/8 text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Our Capabilities
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-20">
            <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show">
              <h1 className="font-black text-black leading-[1.03]"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-0.045em' }}>
                We build<br />
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>digital excellence.</span>
              </h1>
            </motion.div>
            <motion.p variants={fadeUp(0.14)} initial="hidden" animate="show"
              className="text-[14px] sm:text-[15px] text-black/45 max-w-sm leading-[1.78] lg:pb-2">
              Senior-led team. No templates. No junior output. Pixel-perfect, performance-first, every time.
            </motion.p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_LIST.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: s.dark ? '0 20px 60px rgba(0,0,0,0.35)' : '0 16px 48px rgba(0,0,0,0.1)' }}
                className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                  s.dark ? 'bg-black text-white' : 'bg-white border border-black/8'
                } ${s.big ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ boxShadow: s.dark ? '0 8px 32px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.05)' }}>

                {/* Number */}
                <span className={`text-[10px] font-black tracking-widest mb-5 ${s.dark ? 'text-white/20' : 'text-black/15'}`}>{s.n}</span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 grayscale transition-all duration-300 group-hover:grayscale-0 ${s.dark ? 'bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`}>
                  {s.icon}
                </div>

                {/* Text */}
                <h3 className={`font-bold text-[17px] sm:text-[18px] mb-2.5 leading-snug ${s.dark ? 'text-white' : 'text-black'}`}>{s.title}</h3>
                <p className={`text-[13px] leading-[1.7] mb-6 flex-1 ${s.dark ? 'text-white/50' : 'text-black/45'}`}>{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                      s.dark ? 'border-white/15 text-white/40' : 'border-black/8 text-black/40 group-hover:border-black/20'
                    }`}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process strip ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">Our process</p>
            <h2 className="font-black text-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.035em' }}>
              How we deliver.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Discovery call', time: '~30 min', desc: 'We learn your idea, goals and timeline.' },
              { n: '02', title: 'Proposal', time: '24 hrs', desc: 'Fixed quote, scope & roadmap delivered.' },
              { n: '03', title: 'Build + demos', time: 'Weekly', desc: 'We ship in sprints with live demos every week.' },
              { n: '04', title: 'Launch', time: 'Ongoing', desc: 'Go live, squash bugs, ongoing support.' },
            ].map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.09 }}
                className="bg-white border border-black/8 rounded-2xl p-5 sm:p-6"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-black/15 tracking-widest">{step.n}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-black/5 text-black/40 font-medium">{step.time}</span>
                </div>
                <h4 className="font-bold text-black text-[15px] mb-1.5">{step.title}</h4>
                <p className="text-[12px] text-black/42 leading-[1.65]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-black rounded-3xl overflow-hidden p-8 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative">
              <h2 className="font-black text-white leading-[1.06] mb-3"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 3rem)', letterSpacing: '-0.04em' }}>
                Don't compromise.<br />Build it right.
              </h2>
              <p className="text-[14px] text-white/45 max-w-xs leading-[1.72]">
                We're taking on select new projects. Reach out for a clear scope and timeline.
              </p>
            </div>
            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-black bg-white text-[14px] flex-shrink-0 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-green-500" />
              </span>
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

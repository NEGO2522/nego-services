import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

const STATS = [
  { label: 'Projects Shipped', value: '10+', icon: '🚀' },
  { label: 'Client Satisfaction', value: '100%', icon: '⭐' },
  { label: 'Years Experience', value: '1+', icon: '📅' },
  { label: 'Lines of Code', value: '1M+', icon: '💻' },
];

const VALUES = [
  { title: 'No templates, ever', desc: 'Every product is engineered from scratch for your exact requirements.' },
  { title: 'Senior-only execution', desc: 'No junior handoffs. The people you talk to are the ones building it.' },
  { title: 'Weekly transparency', desc: "Live demos every week so you always know what's happening." },
  { title: 'Post-launch care', desc: 'We stick around after go-live. Bugs get fixed, full stop.' },
];

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>About Us — NEGO</title>
        <meta name="description" content="Learn about NEGO – who we are, our mission, and our impact." />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 px-5 sm:px-8 overflow-hidden">
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 pointer-events-none"
          initial={false}
        >
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.6) 60%, transparent 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Tag */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/6 border border-black/8 text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Who We Are
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left */}
            <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show">
              <h1 className="font-black text-black leading-[1.04] mb-6"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 4.4rem)', letterSpacing: '-0.04em' }}>
                Transforming ideas into{' '}
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>digital reality.</span>
              </h1>
              <p className="text-[15px] sm:text-[16px] text-black/48 leading-[1.8] mb-5">
                NEGO is a full-stack engineering hub helping businesses, creators, and founders turn ideas into production-ready platforms.
              </p>
              <p className="text-[15px] sm:text-[16px] text-black/48 leading-[1.8] mb-8">
                We don't just write code — we architect solutions. Highly scalable, pixel-perfect software tailored to your business logic. No shortcuts.
              </p>
              <motion.a
                href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white bg-black text-[14px] w-full sm:w-auto justify-center sm:justify-start"
                style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.22)' }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-2 w-2 bg-green-400" />
                </span>
                Connect with our team
              </motion.a>
            </motion.div>

            {/* Right — Stats grid */}
            <motion.div
              variants={fadeUp(0.14)} initial="hidden" animate="show"
              className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                  className="bg-white border border-black/8 rounded-2xl p-5 sm:p-7 flex flex-col gap-2"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <span className="text-2xl grayscale opacity-70">{stat.icon}</span>
                  <div className="font-black text-black leading-none mt-1"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.03em' }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-black/32">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-5 sm:px-8 py-16 sm:py-24 border-t border-black/6" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-14">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">How we work</p>
            <h2 className="font-black text-black leading-[1.04]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.035em' }}>
              Built on principles,<br />not promises.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                className="bg-white border border-black/8 rounded-2xl p-6 sm:p-8 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
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

      {/* ── CTA ── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black rounded-3xl p-8 sm:p-14 text-center"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
            <h2 className="font-black text-white leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', letterSpacing: '-0.04em' }}>
              Ready to build something real?
            </h2>
            <p className="text-[14px] text-white/45 mb-8 max-w-sm mx-auto leading-[1.72]">
              Drop us a message on WhatsApp and we'll scope your project in 24 hours.
            </p>
            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-[14px]"
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

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const pageFlip = (i = 0) => ({
  hidden: { opacity: 0, x: 48, rotateY: -12, transformPerspective: 900 },
  show: {
    opacity: 1, x: 0, rotateY: 0, transformPerspective: 900,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  },
});

const CONTACT_ITEMS = [
  {
    icon: <FaWhatsapp size={18} />,
    label: 'WhatsApp',
    value: '+91 94139 73399',
    href: 'https://wa.me/919413973399',
    hover: 'hover:bg-green-500 hover:text-white hover:border-green-500',
  },
  {
    icon: <FaWhatsapp size={18} />,
    label: 'WhatsApp',
    value: '+91 97192 14408',
    href: 'https://wa.me/919719214408',
    hover: 'hover:bg-green-500 hover:text-white hover:border-green-500',
  },
  {
    icon: <FaEnvelope size={16} />,
    label: 'Email',
    value: 'borbreak@gmail.com',
    href: 'mailto:borbreak@gmail.com',
    hover: 'hover:bg-black hover:text-white hover:border-black',
  },
];

const SOCIALS = [
  {
    icon: <FaInstagram size={18} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/ai.bykshitij/',
  },
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kshitij-jain-422025342/',
  },
];

export default function ContactUs() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Contact — NEGO</title>
        <meta name="description" content="Reach out to NEGO. We reply within hours on WhatsApp." />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-12 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.97) 0%, transparent 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/6 border border-black/8 text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Get In Touch
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp(0.06)} initial="hidden" animate="show"
            className="font-black text-black leading-[1.04] mb-4"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 4.6rem)', letterSpacing: '-0.045em' }}>
            Let's start your<br />
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>next project.</span>
          </motion.h1>

          <motion.p variants={fadeUp(0.12)} initial="hidden" animate="show"
            className="text-[15px] text-black/45 max-w-md leading-[1.78] mb-10">
            We reply within a few hours on WhatsApp. Drop us a message and we'll scope your idea for free.
          </motion.p>

          {/* Quick action buttons */}
          <motion.div variants={fadeUp(0.18)} initial="hidden" animate="show"
            className="flex flex-col sm:flex-row gap-3 mb-16">
            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-black text-white font-semibold text-[14px]"
              style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.22)' }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <FaWhatsapp size={18} />
              WhatsApp Us
            </motion.a>
            <motion.a href="mailto:borbreak@gmail.com"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white border border-black/10 text-black font-semibold text-[14px]"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <FaEnvelope size={16} />
              Send Email
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">

          {/* Left — Black NEGO card */}
          <motion.div
            variants={pageFlip(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-7 sm:p-10 flex flex-col justify-between min-h-[300px]"
            style={{
              background: 'linear-gradient(135deg, #111 0%, #000 60%, #1a1a1a 100%)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
            }}
          >
            {/* Dot texture */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,255,255,0.06), transparent)' }} />

            {/* Top row */}
            <div className="relative flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <span className="text-black font-black text-sm">N</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-white/25 uppercase">Next Generation</span>
            </div>

            {/* Numbers */}
            <div className="relative flex flex-col gap-3 my-6">
              {[
                { num: '+91 9413 9733 99', href: 'https://wa.me/919413973399' },
                { num: '+91 9719 2144 08', href: 'https://wa.me/919719214408' },
              ].map((n) => (
                <a key={n.num} href={n.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-fit">
                  <div className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-200">
                    <FaWhatsapp size={13} className="text-white/50 group-hover:text-white" />
                  </div>
                  <span className="font-mono font-bold text-white/80 group-hover:text-white transition-colors"
                    style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', letterSpacing: '0.04em' }}>
                    {n.num}
                  </span>
                </a>
              ))}

              {/* Email */}
              <a href="mailto:borbreak@gmail.com"
                className="flex items-center gap-3 group w-fit mt-1">
                <div className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-200">
                  <FaEnvelope size={12} className="text-white/50 group-hover:text-black" />
                </div>
                <span className="font-mono text-white/40 text-[13px] group-hover:text-white/80 transition-colors break-all">
                  borbreak@gmail.com
                </span>
              </a>
            </div>

            {/* Bottom row */}
            <div className="relative flex items-center justify-between pt-5 border-t border-white/8">
              <span className="font-mono text-white/40 text-[11px] tracking-widest uppercase">NEGO · Jaipur</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-white/40">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Direct lines + socials */}
          <motion.div
            variants={pageFlip(1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white border border-black/8 rounded-3xl p-7 sm:p-10 flex flex-col justify-between"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-6">Direct lines</p>
              <div className="flex flex-col gap-4">
                {CONTACT_ITEMS.map((c) => (
                  <a key={c.value} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className={`w-11 h-11 rounded-full bg-black/5 border border-black/6 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${c.hover}`}>
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-black/35 mb-0.5">{c.label}</div>
                      <div className="text-[14px] font-bold text-black group-hover:opacity-60 transition-opacity truncate">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 pt-6 border-t border-black/6">
              <p className="text-[10px] font-bold tracking-widest uppercase text-black/25 mb-4">Follow us</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/4 border border-black/8 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 text-[12px] font-semibold">
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const TEAM = [
  { initials: 'KJ', name: 'Kshitij Jain',  role: 'Co-Founder', wa: '919413973399',  email: 'nextgenova28@gmail.com' },
  { initials: 'HA', name: 'Harsh Agrawal', role: 'Co-Founder', wa: '919719214408',  email: 'harshagrawal7878@gmail.com' },
  { initials: 'MK', name: 'Manish Kumar',  role: 'Co-Founder', wa: '918789925958',  email: '2024btechaimlkshitij18489@poornima.edu.in' },
];

export default function ContactUs() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Contact & Team — NEGO</title>
        <meta name="description" content="Reach out to NEGO. Meet the engineering team behind the code." />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-12 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
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

          {/* Quick action buttons — mobile-first */}
          <motion.div variants={fadeUp(0.18)} initial="hidden" animate="show"
            className="flex flex-col sm:flex-row gap-3 mb-16">
            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-black text-white font-semibold text-[14px]"
              style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.22)' }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <FaWhatsapp size={18} />
              WhatsApp Us
            </motion.a>
            <motion.a href="mailto:nextgenova28@gmail.com"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white border border-black/10 text-black font-semibold text-[14px]"
              whileHover={{ scale: 1.03, borderColor: 'rgba(0,0,0,0.3)' }} whileTap={{ scale: 0.97 }}>
              <FaEnvelope size={16} />
              Send Email
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Contact card + details ── */}
      <section className="px-5 sm:px-8 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          {/* Black NEGO card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-7 sm:p-10 flex flex-col justify-between min-h-[240px] sm:min-h-[280px]"
            style={{
              background: 'linear-gradient(135deg, #111 0%, #000 60%, #1a1a1a 100%)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
            }}>
            <div className="absolute inset-0 pointer-events-none opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,255,255,0.06), transparent)' }} />

            {/* Top */}
            <div className="relative flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <span className="text-black font-black text-sm">N</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-white/25 uppercase">Business</span>
            </div>

            {/* Contact info */}
            <div className="relative mt-auto">
              <a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
                className="block font-mono font-bold text-white/90 mb-1.5 hover:text-white transition-colors"
                style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', letterSpacing: '0.05em' }}>
                +91 9413 9733 99
              </a>
              <a href="mailto:nextgenova28@gmail.com"
                className="block font-mono text-white/40 text-[13px] hover:text-white/70 transition-colors break-all">
                nextgenova28@gmail.com
              </a>
            </div>

            {/* Bottom */}
            <div className="relative flex items-center justify-between mt-6 pt-5 border-t border-white/8">
              <span className="font-mono text-white/50 text-[11px] tracking-widest uppercase">NEGO · Jaipur</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-white/40">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Contact list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white border border-black/8 rounded-3xl p-7 sm:p-10"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-6">Direct lines</p>
            <div className="flex flex-col gap-5">
              {[
                { icon: <FaWhatsapp size={18} />, label: 'WhatsApp (Primary)', value: '+91 94139 73399', href: 'https://wa.me/919413973399', hoverBg: 'hover:bg-green-500 hover:text-white' },
                { icon: <FaWhatsapp size={18} />, label: 'WhatsApp (Secondary)', value: '+91 77429 71455', href: 'https://wa.me/917742971455', hoverBg: 'hover:bg-green-500 hover:text-white' },
                { icon: <FaEnvelope size={16} />, label: 'Email', value: 'nextgenova28@gmail.com', href: 'mailto:nextgenova28@gmail.com', hoverBg: 'hover:bg-black hover:text-white' },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <div className={`w-11 h-11 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${c.hoverBg}`}>
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-black/35 mb-0.5">{c.label}</div>
                    <div className="text-[14px] font-bold text-black group-hover:opacity-70 transition-opacity truncate">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 pt-6 border-t border-black/6">
              <p className="text-[10px] font-bold tracking-widest uppercase text-black/25 mb-4">Follow us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/next.genova/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/8 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.linkedin.com/company/netgenova" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/8 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">The Founders</p>
            <h2 className="font-black text-black" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', letterSpacing: '-0.04em' }}>
              Meet the team.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {TEAM.map((m, i) => (
              <motion.div key={m.initials}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.1)' }}
                className="bg-white border border-black/8 rounded-2xl p-7 text-center transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-black flex items-center justify-center text-white font-black text-xl sm:text-2xl mb-4"
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                  {m.initials}
                </div>
                <h3 className="font-bold text-black text-[16px] mb-0.5">{m.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/35 mb-5">{m.role}</p>
                <div className="flex justify-center gap-3">
                  <a href={`https://wa.me/${m.wa}`} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-green-500 hover:text-white transition-colors">
                    <FaWhatsapp size={16} />
                  </a>
                  <a href={`mailto:${m.email}`}
                    className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                    <FaEnvelope size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

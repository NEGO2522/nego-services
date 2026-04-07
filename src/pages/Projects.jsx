import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const PROJECTS_LIST = [
  {
    id: '1', title: 'Lathi Shop', tag: 'E-commerce', rating: '4.7',
    desc: 'Full e-commerce store with cart, Razorpay payments, inventory & admin panel.',
    tech: ['React', 'Node.js', 'MongoDB'], status: 'live', link: 'https://lathishop.com', emoji: '🛒',
  },
  {
    id: '2', title: 'Campus League', tag: 'EdTech · Sports', rating: '4.5',
    desc: 'Student sports league platform with live scores, team management & scheduling.',
    tech: ['React', 'Firebase', 'Real-time'], status: 'live', link: 'https://www.campusleauge.in', emoji: '🏆',
  },
  {
    id: '3', title: 'STED Platform', tag: 'Student Platform', rating: '4.6',
    desc: 'EdTech platform connecting student founders with resources and mentors.',
    tech: ['Next.js', 'Supabase', 'Auth'], status: 'live', link: 'https://sted-founder.vercel.app', emoji: '🚀',
  },
  {
    id: '4', title: 'Brain Forge', tag: 'AI Tool', rating: '4.8',
    desc: 'AI-powered knowledge & productivity tool for students and professionals.',
    tech: ['React', 'Gemini AI', 'GPT'], status: 'live', link: 'https://github.com/NEGO2522/Brain-Forge', emoji: '🧠',
  },
  {
    id: '5', title: 'SayIt App', tag: 'Social · Audio', rating: '4.5',
    desc: 'Voice-based social sharing app built with TypeScript and real-time audio.',
    tech: ['TypeScript', 'React', 'Audio API'], status: 'live', link: 'https://github.com/NEGO2522/sayit-app', emoji: '🎙️',
  },
  {
    id: '6', title: 'Nova Voice Tutor', tag: 'AI · EdTech', rating: '4.7',
    desc: 'Voice-enabled AI tutor using Amazon Nova Lite for interactive learning.',
    tech: ['TypeScript', 'AWS Nova', 'AI'], status: 'live', link: 'https://github.com/NEGO2522/nova-voice-tutor', emoji: '🤖',
  },
];

export default function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Projects — NEGO</title>
        <meta name="description" content="Explore NEGO's portfolio of web applications, mobile apps, and SaaS platforms." />
      </Helmet>

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
              Our Portfolio
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show">
              <h1 className="font-black text-black leading-[1.03]"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-0.045em' }}>
                Things we've<br />
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>shipped.</span>
              </h1>
            </motion.div>
            <motion.div variants={fadeUp(0.12)} initial="hidden" animate="show"
              className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['⭐', '⭐', '⭐', '⭐', '⭐'].map((s, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-black border-2 border-white flex items-center justify-center text-[9px]">
                    <FaStar className="text-white" size={8} />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold text-black text-[15px]">4.7 avg rating</div>
                <div className="text-[11px] text-black/40">across {PROJECTS_LIST.length} live projects</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS_LIST.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,0.12)' }}
              className="group flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border border-black/8 bg-white transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>

              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-black flex items-center justify-center text-2xl transition-all duration-300 grayscale group-hover:grayscale-0">
                  {p.emoji}
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  {p.status === 'live' && (
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-[9px] font-bold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border border-black/8 text-black/40 font-medium">
                    <FaStar size={7} />
                    {p.rating}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-bold text-black text-[15px]">{p.title}</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/5 text-black/45 font-medium">{p.tag}</span>
                </div>
                <p className="text-[12px] sm:text-[13px] leading-[1.65] text-black/45">{p.desc}</p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border border-black/7 text-black/38 font-medium group-hover:border-black/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              {/* Visit */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-black/28 group-hover:text-black transition-colors">
                View project
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-black rounded-3xl overflow-hidden p-8 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative">
              <h2 className="font-black text-white leading-[1.06] mb-3"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}>
                Impressed? Let's<br />build yours next.
              </h2>
              <p className="text-[14px] text-white/40 max-w-xs leading-[1.72]">
                Every project starts with a free scoping call on WhatsApp.
              </p>
            </div>
            <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-black bg-white text-[14px] flex-shrink-0 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-green-500" />
              </span>
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

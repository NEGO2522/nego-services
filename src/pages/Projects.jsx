import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const pageFlip = (i = 0) => ({
  hidden: { opacity: 0, x: 60, rotateY: -14, transformPerspective: 1000 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformPerspective: 1000,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  },
});

const PROJECTS_LIST = [
  {
    id: '1',
    title: 'Lathi Shop',
    tag: 'E-commerce',
    rating: '4.7',
    desc: 'A full-featured e-commerce store built for a traditional lathi & sports equipment brand. Includes product catalog, cart, Razorpay payment integration, inventory management, and a clean admin panel for order tracking.',
    highlights: ['Razorpay & UPI payments', 'Inventory & order management', 'Admin dashboard', 'Mobile-first storefront', 'Product search & filter'],
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://lathishop.com',
    screenshot: '/screenshots/lathishop.png',
    emoji: '🛒',
  },
  {
    id: '2',
    title: 'Campus League',
    tag: 'EdTech · Sports',
    rating: '4.5',
    desc: 'A student sports league platform that brings college tournaments online. Teams register, fixtures are generated, scores update in real-time, and students track standings — all from their phone.',
    highlights: ['Live score updates', 'Team registration & management', 'Auto fixture generation', 'Standings & leaderboard', 'Firebase real-time sync'],
    tech: ['React', 'Firebase', 'Real-time'],
    link: 'https://www.campusleauge.in',
    screenshot: '/screenshots/campusleague.png',
    emoji: '🏆',
  },
  {
    id: '3',
    title: 'STED Platform',
    tag: 'Student Platform',
    rating: '4.6',
    desc: 'An EdTech platform connecting student founders with mentors, resources, and a community. Built with Supabase for real-time data and authentication — helping early-stage student startups get off the ground.',
    highlights: ['Mentor-student matching', 'Resource library', 'Auth & user profiles', 'Community feed', 'Supabase backend'],
    tech: ['Next.js', 'Supabase', 'Auth'],
    link: 'https://sted-founder.vercel.app',
    screenshot: '/screenshots/sted.png',
    emoji: '🚀',
  },
  {
    id: '4',
    title: 'Brain Forge',
    tag: 'AI Tool',
    rating: '4.8',
    desc: 'An AI-powered knowledge and productivity tool for students and professionals. Combines GPT and Gemini AI to help users summarise content, generate notes, and build a personal knowledge base.',
    highlights: ['GPT + Gemini AI integration', 'Smart note generation', 'Personal knowledge base', 'Content summariser', 'Export & share'],
    tech: ['React', 'Gemini AI', 'GPT'],
    link: 'https://github.com/NEGO2522/Brain-Forge',
    screenshot: '/screenshots/brainforge.png',
    emoji: '🧠',
  },
  {
    id: '5',
    title: 'SayIt App',
    tag: 'Social · Audio',
    rating: '4.5',
    desc: 'A voice-based social sharing app where users record and share short audio posts. Built with TypeScript and the Web Audio API — think Twitter but for your voice.',
    highlights: ['Voice recording & playback', 'Social feed', 'Real-time audio processing', 'TypeScript codebase', 'Web Audio API'],
    tech: ['TypeScript', 'React', 'Audio API'],
    link: 'https://github.com/NEGO2522/sayit-app',
    screenshot: '/screenshots/sayit.png',
    emoji: '🎙️',
  },
  {
    id: '6',
    title: 'Nova Voice Tutor',
    tag: 'AI · EdTech',
    rating: '4.7',
    desc: 'A voice-enabled AI tutor powered by Amazon Nova Lite. Students ask questions out loud and get intelligent spoken responses — making learning feel like a real conversation with a tutor.',
    highlights: ['Amazon Nova Lite AI', 'Voice input & output', 'Interactive Q&A', 'Subject-aware responses', 'TypeScript + AWS'],
    tech: ['TypeScript', 'AWS Nova', 'AI'],
    link: 'https://github.com/NEGO2522/nova-voice-tutor',
    screenshot: '/screenshots/novavoice.png',
    emoji: '🤖',
  },
];

// Screenshot component — just shows the static PNG you provide
const ProjectScreenshot = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-black/4 border border-black/6"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Browser chrome bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-black/5 backdrop-blur-sm border-b border-black/6">
        <span className="w-2 h-2 rounded-full bg-black/20" />
        <span className="w-2 h-2 rounded-full bg-black/20" />
        <span className="w-2 h-2 rounded-full bg-black/20" />
        <span className="ml-2 flex-1 h-4 rounded-full bg-black/6 text-[9px] text-black/25 flex items-center px-2 truncate">
          {title.toLowerCase().replace(' ', '')}
        </span>
      </div>

      {/* Skeleton while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 top-8 flex flex-col gap-2 p-4 animate-pulse">
          <div className="h-4 bg-black/5 rounded w-3/4" />
          <div className="h-4 bg-black/5 rounded w-1/2" />
          <div className="h-20 bg-black/5 rounded mt-2" />
          <div className="h-4 bg-black/5 rounded w-2/3" />
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 top-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl mb-2 opacity-30">🖼️</div>
            <p className="text-[11px] text-black/25">Screenshot coming soon</p>
          </div>
        </div>
      )}

      {/* Static PNG screenshot */}
      <img
        src={src}
        alt={`${title} screenshot`}
        className="absolute w-full object-cover object-top transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0, top: '28px', height: 'calc(100% - 28px)' }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.96) 0%, transparent 100%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/6 border border-black/8 text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Our Portfolio
            </span>
          </motion.div>

          <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show">
            <h1
              className="font-black text-black leading-[1.03]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-0.045em' }}
            >
              Things we've<br />
              <span style={{ color: 'rgba(0,0,0,0.2)' }}>shipped.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-24 border-t border-black/6">
        <div className="max-w-6xl mx-auto">
          {PROJECTS_LIST.map((p, i) => (
            <motion.div
              key={p.id}
              variants={pageFlip(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className={`py-12 sm:py-16 ${i !== PROJECTS_LIST.length - 1 ? 'border-b border-black/6' : ''}`}
              style={{ transformOrigin: 'left center' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                {/* Left — content */}
                <div className={`flex flex-col gap-6 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Top meta row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-black/5 text-black/45 font-semibold">
                      {p.tag}
                    </span>
                  </div>

                  {/* Title — icon is B&W (emoji rendered as text, icon box is grayscale) */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: 'rgba(0,0,0,0.06)',
                        filter: 'grayscale(1)',
                      }}
                    >
                      {p.emoji}
                    </div>
                    <h2
                      className="font-black text-black leading-tight"
                      style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.035em' }}
                    >
                      {p.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-black/50 leading-[1.8]">
                    {p.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-[12px] text-black/55 font-medium">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                          <circle cx="7" cy="7" r="7" fill="rgba(0,0,0,0.07)" />
                          <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech + CTA */}
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border border-black/8 text-black/38 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-[12px] font-bold hover:bg-black/85 transition-colors"
                    >
                      View Project
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right — screenshot */}
                <motion.div
                  className={`${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <ProjectScreenshot src={p.screenshot} title={p.title} />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-black rounded-3xl overflow-hidden p-8 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative">
              <h2
                className="font-black text-white leading-[1.06] mb-3"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}
              >
                Impressed? Let's<br />build yours next.
              </h2>
              <p className="text-[14px] text-white/40 max-w-xs leading-[1.72]">
                Every project starts with a free scoping call on WhatsApp.
              </p>
            </div>
            <motion.a
              href="https://wa.me/919413973399"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-black bg-white text-[14px] flex-shrink-0 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
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
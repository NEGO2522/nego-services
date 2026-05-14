import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
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
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  },
});

const SECTIONS = [
  {
    id: 'accept',
    title: 'Acceptance of Terms',
    content: 'By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    id: 'use',
    title: 'Use of Services',
    items: [
      'You agree to use the services only for lawful purposes.',
      'You will not attempt to disrupt or compromise service integrity.',
      'You are responsible for the accuracy of information you provide.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    content: 'All content, trademarks, and materials are the property of NEGO or its licensors and protected by applicable laws. Unauthorized use is strictly prohibited.',
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: 'NEGO will not be liable for any indirect, incidental, or consequential damages arising from the use of our services.',
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: 'We may update these terms from time to time. Continued use of the services after any changes constitutes your acceptance of the new terms.',
  },
  {
    id: 'contact',
    title: 'Contact',
    content: 'For any questions regarding these Terms, feel free to reach out to us directly on WhatsApp or via email.',
    cta: true,
  },
];

const Terms_Services = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Terms of Service — NEGO</title>
        <meta name="description" content="Read NEGO's Terms of Service." />
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
              Legal
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.06)} initial="hidden" animate="show"
            className="font-black text-black leading-[1.04] mb-4"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 4.6rem)', letterSpacing: '-0.045em' }}
          >
            Terms of<br />
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>Service.</span>
          </motion.h1>

          <motion.div variants={fadeUp(0.12)} initial="hidden" animate="show"
            className="flex items-center gap-3">
            <p className="text-[14px] text-black/40 leading-[1.7]">
              The rules and conditions that govern your use of our products and services.
            </p>
            <span className="flex-shrink-0 text-[10px] px-3 py-1.5 rounded-full border border-black/10 text-black/35 font-semibold whitespace-nowrap">
              Last updated: Oct 2025
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28 border-t border-black/6">
        <div className="max-w-6xl mx-auto pt-10 grid lg:grid-cols-12 gap-10">

          {/* Sticky TOC */}
          <aside className="lg:col-span-3">
            <motion.div
              variants={fadeUp(0.1)} initial="hidden" animate="show"
              className="sticky top-24 bg-white border border-black/8 rounded-2xl p-5"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">On this page</p>
              <nav className="flex flex-col gap-2">
                {SECTIONS.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => handleScroll(e, s.id)}
                    className="flex items-center gap-3 group text-[12px] font-medium text-black/45 hover:text-black transition-colors duration-150"
                  >
                    <span className="w-5 h-5 rounded-md bg-black/5 flex items-center justify-center text-[9px] font-black text-black/30 group-hover:bg-black group-hover:text-white transition-all duration-150 flex-shrink-0">
                      {i + 1}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </motion.div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-9 flex flex-col gap-4">
            {SECTIONS.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white border border-black/8 rounded-2xl p-6 sm:p-8"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transformOrigin: 'left center' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-black text-[11px]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-bold text-black text-[17px] sm:text-[19px] mb-3"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {s.title}
                    </h2>

                    {s.items ? (
                      <ul className="flex flex-col gap-2">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[13px] text-black/50 leading-[1.7]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                              <circle cx="7" cy="7" r="7" fill="rgba(0,0,0,0.07)" />
                              <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="rgba(0,0,0,0.5)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[13px] text-black/50 leading-[1.75]">{s.content}</p>
                    )}

                    {s.cta && (
                      <div className="flex flex-wrap gap-3 mt-5">
                        <motion.a
                          href="https://wa.me/919413973399"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-[12px] font-bold hover:bg-black/85 transition-colors"
                          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        >
                          WhatsApp Us
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.a>
                        <motion.a
                          href="mailto:borbreak@gmail.com"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-black text-[12px] font-bold hover:border-black/30 transition-colors"
                          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        >
                          Send Email
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms_Services;
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const injectFont = () => {
  if (document.getElementById('pricing-fonts')) return;
  const l = document.createElement('link');
  l.id = 'pricing-fonts';
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap';
  document.head.appendChild(l);
};

const PLANS = [
  {
    index: '01', name: 'Starter', subtitle: 'Landing pages & brochure sites',
    price: '₹15,000', timeline: '7–10 days',
    ideal: 'Freelancers, local businesses, early-stage founders who need a polished web presence fast.',
    deliverables: ['Up to 5 custom pages', 'Mobile-first responsive design', 'Contact form + WhatsApp integration', 'On-page SEO setup', 'Google Analytics connected', 'Deployed & domain configured'],
    notIncluded: ['Backend / database', 'Admin panel', 'Payment gateway'],
    popular: true,
  },
  {
    index: '02', name: 'Growth', subtitle: 'Web apps, stores & full-stack products',
    price: '₹40,000', timeline: '3–4 weeks',
    ideal: 'Startups and businesses that need a working product — not just a website.',
    deliverables: ['Up to 15 pages / screens', 'Custom backend + database', 'Payment gateway (Razorpay / Stripe)', 'Admin panel & dashboard', 'User authentication', 'Advanced SEO + sitemap', '1 month post-launch support'],
    notIncluded: ['Mobile apps (iOS / Android)'],
  },
  {
    index: '03', name: 'Scale', subtitle: 'SaaS platforms, mobile apps & complex systems',
    price: 'Custom', timeline: '6–12 weeks',
    ideal: 'Founders building serious products that need architecture, scalability, and a team that acts like a partner.',
    deliverables: ['Unlimited screens & modules', 'Mobile app (Android + iOS)', 'Subscription billing & auth', 'Real-time features & APIs', 'CI/CD pipeline setup', 'Weekly sprint demos', '3 months post-launch support', 'Dedicated project manager'],
    notIncluded: [],
  },
];

const FAQS = [
  { q: 'Any hidden charges?', a: 'Never. You get a fixed-scope quote before we start. The number we write is the number you pay.' },
  { q: 'Payment terms?', a: '50% upfront, 50% on delivery. For larger projects we break it into milestones.' },
  { q: 'Changes after launch?', a: 'Small tweaks in the first 30 days are on us. Bigger changes get a fair maintenance quote.' },
  { q: 'International clients?', a: 'Absolutely. We work globally and accept international transfers and Stripe.' },
];

const PlanRow = ({ plan, isOpen, onToggle }) => (
  <div className="border-b border-black/10 last:border-b-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
    {/* Header */}
    <button onClick={onToggle} className="w-full text-left"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1.5rem 0' }}>
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Index — hidden on very small screens */}
        <span className="hidden sm:block flex-shrink-0 w-9 text-[12px] text-black/22 font-semibold"
          style={{ fontFamily: "'DM Serif Display', serif" }}>{plan.index}</span>

        {/* Name block */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="font-black text-black leading-none"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 5vw, 2rem)', letterSpacing: '-0.02em' }}>
              {plan.name}
            </span>
            {plan.popular && (
              <span className="px-2.5 py-0.5 rounded-full text-white text-[9px] font-bold tracking-widest uppercase bg-black flex-shrink-0">
                Popular
              </span>
            )}
          </div>
          <p className="text-[12px] sm:text-[13px] text-black/38 mt-0.5 truncate">{plan.subtitle}</p>
        </div>

        {/* Price */}
        <span className="flex-shrink-0 font-black text-black"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1rem, 3.5vw, 1.5rem)', letterSpacing: '-0.02em' }}>
          {plan.price}
        </span>

        {/* Toggle */}
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black/12 flex items-center justify-center">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </div>
    </button>

    {/* Expandable */}
    <motion.div initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: 'hidden' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 sm:pb-10">
        {/* Ideal for */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">Ideal for</p>
          <p className="text-[13px] leading-[1.75] text-black/55">{plan.ideal}</p>
          <p className="text-[12px] text-black/35 mt-4">
            ⏱ Delivery: <strong className="text-black">{plan.timeline}</strong>
          </p>
        </div>

        {/* Included */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">What's included</p>
          <ul className="flex flex-col gap-2">
            {plan.deliverables.map(d => (
              <li key={d} className="flex items-start gap-2.5 text-[13px] text-black/65">
                <span className="w-4 h-4 rounded-full bg-black flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <svg width="7" height="7" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Not included + CTA */}
        <div className="flex flex-col">
          {plan.notIncluded.length > 0 && (
            <div className="mb-6">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">Not in this plan</p>
              <ul className="flex flex-col gap-2">
                {plan.notIncluded.map(d => (
                  <li key={d} className="flex items-center gap-2.5 text-[13px] text-black/28">
                    <span className="w-4 h-px bg-black/20 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-3 rounded-full bg-black text-white text-[13px] font-semibold mt-auto w-full sm:w-auto">
            {plan.price === 'Custom' ? 'Get a quote' : `Start with ${plan.name}`}
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  </div>
);

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    document.title = 'Pricing · NEGO';
    injectFont();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section ref={containerRef} className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 overflow-hidden border-b border-black/8">
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none"
          initial={false}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(0,0,0,0.04) 47px, rgba(0,0,0,0.04) 48px)',
          }} />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[10px] font-semibold tracking-[0.28em] uppercase text-black/30 mb-4">
            Rate Card — 2025
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-black text-black leading-[1.02] mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.4rem, 8vw, 5rem)', letterSpacing: '-0.035em' }}>
            What does<br />
            <em className="italic" style={{ color: 'rgba(0,0,0,0.25)' }}>good work</em> cost?
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[14px] sm:text-[15px] text-black/45 max-w-md leading-[1.78] mb-8">
            Three clear tiers. No retainers. No hidden line items. Tap any plan to see exactly what you get.
          </motion.p>

          {/* Trust pills — wrap nicely on mobile */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-x-5 gap-y-2">
            {['Fixed-price quotes', '50% to start', '100% on-time', 'Source code yours'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-black/35">
                <span className="w-1.5 h-1.5 rounded-full bg-black/25 flex-shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Column header — only desktop */}
          <div className="hidden sm:flex items-center gap-5 py-4 border-b border-black/8">
            <span className="w-9 text-[9px] font-semibold tracking-[0.22em] uppercase text-black/22">#</span>
            <span className="flex-1 text-[9px] font-semibold tracking-[0.22em] uppercase text-black/22">Plan</span>
            <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-black/22 mr-12">Starting at</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {PLANS.map((plan, i) => (
              <PlanRow key={plan.index} plan={plan} isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Always included ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 mt-8 border-t border-b border-black/7" style={{ background: '#f9f9f7' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">In every project</p>
            <h2 className="font-black text-black leading-[1.1]"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '-0.03em' }}>
              The baseline,<br className="sm:hidden" /> non-negotiable.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { n: '01', title: 'Weekly demos', desc: 'Real progress, every week.' },
              { n: '02', title: 'Direct access', desc: 'Talk to who builds it.' },
              { n: '03', title: 'Code handover', desc: 'Everything is yours.' },
              { n: '04', title: 'Deployed live', desc: 'Hosting + SSL, done.' },
            ].map((item, i) => (
              <motion.div key={item.n}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-black/8 rounded-2xl p-4 sm:p-5 transition-all"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <p className="text-[9px] font-bold tracking-[0.15em] text-black/20 mb-2">{item.n}</p>
                <p className="font-bold text-black text-[13px] sm:text-[14px] mb-1">{item.title}</p>
                <p className="text-[11px] sm:text-[12px] text-black/42 leading-[1.6]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-black/28 mb-3">FAQ</p>
            <h2 className="font-black text-black"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.03em' }}>
              The questions we always get.
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <motion.div key={faq.q}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="py-5 sm:py-6 border-b border-black/8 flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-8">
                <p className="text-[14px] font-bold text-black">{faq.q}</p>
                <p className="text-[13px] sm:text-[14px] text-black/48 leading-[1.7]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/28 mb-3">Not sure where to start?</p>
            <h2 className="font-black text-white leading-[1.12]"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', letterSpacing: '-0.03em', maxWidth: 380 }}>
              Tell us what you're building. We'll figure out the rest.
            </h2>
          </div>
          <motion.a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-black text-[14px] font-bold flex-shrink-0 w-full sm:w-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-green-500" />
            </span>
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

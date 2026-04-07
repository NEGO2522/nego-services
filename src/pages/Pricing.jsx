import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Google Font injection ── */
const injectFont = () => {
  if (document.getElementById('pricing-fonts')) return;
  const l = document.createElement('link');
  l.id = 'pricing-fonts';
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap';
  document.head.appendChild(l);
};

/* ── Data ── */
const PLANS = [
  {
    index: '01',
    name: 'Starter',
    subtitle: 'Landing pages & brochure sites',
    price: '₹15,000',
    timeline: '7–10 days',
    ideal: 'Freelancers, local businesses, early-stage founders who need a polished web presence fast.',
    deliverables: [
      'Up to 5 custom pages',
      'Mobile-first responsive design',
      'Contact form + WhatsApp integration',
      'On-page SEO setup',
      'Google Analytics connected',
      'Deployed & domain configured',
    ],
    notIncluded: ['Backend / database', 'Admin panel', 'Payment gateway'],
  },
  {
    index: '02',
    name: 'Growth',
    subtitle: 'Web apps, stores & full-stack products',
    price: '₹40,000',
    timeline: '3–4 weeks',
    ideal: 'Startups and businesses that need a working product — not just a website.',
    deliverables: [
      'Up to 15 pages / screens',
      'Custom backend + database',
      'Payment gateway (Razorpay / Stripe)',
      'Admin panel & dashboard',
      'User authentication',
      'Advanced SEO + sitemap',
      '1 month post-launch support',
    ],
    notIncluded: ['Mobile apps (iOS / Android)'],
    popular: true,
  },
  {
    index: '03',
    name: 'Scale',
    subtitle: 'SaaS platforms, mobile apps & complex systems',
    price: 'Custom',
    timeline: '6–12 weeks',
    ideal: 'Founders building serious products that need architecture, scalability, and a team that acts like a partner.',
    deliverables: [
      'Unlimited screens & modules',
      'Mobile app (Android + iOS)',
      'Subscription billing & auth',
      'Real-time features & APIs',
      'CI/CD pipeline setup',
      'Weekly sprint demos',
      '3 months post-launch support',
      'Dedicated project manager',
    ],
    notIncluded: [],
  },
];

const FAQS = [
  { q: 'Any hidden charges?', a: 'Never. You get a fixed-scope quote before we start. The number we write is the number you pay.' },
  { q: 'Payment terms?', a: '50% upfront, 50% on delivery. For larger projects we break it into milestones.' },
  { q: 'Changes after launch?', a: 'Small tweaks in the first 30 days are on us. Bigger changes get a fair maintenance quote.' },
  { q: 'International clients?', a: 'Absolutely. We work globally and accept international transfers and Stripe.' },
];

/* ── Accordion row ── */
const PlanRow = ({ plan, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="border-b border-black/10 last:border-b-0"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left group"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <div className="grid items-center gap-4 py-7 px-0"
          style={{ gridTemplateColumns: '3rem 1fr auto auto' }}>

          {/* Index */}
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '13px',
              color: 'rgba(0,0,0,0.22)',
              letterSpacing: '0.05em',
            }}
          >
            {plan.index}
          </span>

          {/* Name + subtitle */}
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  letterSpacing: '-0.02em',
                  color: '#000',
                  lineHeight: 1,
                }}
              >
                {plan.name}
              </span>
              {plan.popular && (
                <span
                  className="px-3 py-1 rounded-full text-white"
                  style={{
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    background: '#000',
                  }}
                >
                  Most popular
                </span>
              )}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.38)', marginTop: '3px', fontWeight: 400 }}>
              {plan.subtitle}
            </p>
          </div>

          {/* Price */}
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: '#000',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            {plan.price}
          </span>

          {/* Toggle arrow */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* Expandable detail */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div
          ref={contentRef}
          className="grid gap-8 pb-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', paddingLeft: '3rem' }}
        >
          {/* Ideal for */}
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', fontWeight: 600, marginBottom: '10px' }}>
              Ideal for
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(0,0,0,0.55)' }}>{plan.ideal}</p>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.35)', marginBottom: '6px' }}>
                ⏱ Delivery: <strong style={{ color: '#000' }}>{plan.timeline}</strong>
              </p>
            </div>
          </div>

          {/* What's included */}
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', fontWeight: 600, marginBottom: '10px' }}>
              What's included
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {plan.deliverables.map((d) => (
                <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(0,0,0,0.65)' }}>
                  <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#000', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Not included + CTA */}
          <div>
            {plan.notIncluded.length > 0 && (
              <>
                <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', fontWeight: 600, marginBottom: '10px' }}>
                  Not in this plan
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                  {plan.notIncluded.map((d) => (
                    <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(0,0,0,0.3)' }}>
                      <span style={{ width: 16, height: '1px', background: 'rgba(0,0,0,0.2)', flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <motion.a
              href="https://wa.me/919413973399"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '100px',
                background: '#000',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              {plan.price === 'Custom' ? 'Get a quote' : `Start with ${plan.name}`}
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════
   PAGE
══════════════════════════════════════ */
const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(1); // Growth open by default
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    document.title = 'Pricing · NEGO';
    injectFont();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#000', fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        ref={containerRef}
        style={{
          position: 'relative',
          paddingTop: '10rem',
          paddingBottom: '6rem',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        {/* Animated ruled lines background */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y: bgY,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(0,0,0,0.04) 47px, rgba(0,0,0,0.04) 48px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.3)',
              marginBottom: '1.5rem',
            }}
          >
            Rate Card — 2025
          </motion.p>

          {/* Big headline */}
          <div style={{ maxWidth: '720px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                letterSpacing: '-0.035em',
                lineHeight: 1.02,
                color: '#000',
                marginBottom: '1.5rem',
              }}
            >
              What does<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(0,0,0,0.3)' }}>good work</em> cost?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(0,0,0,0.45)', maxWidth: '460px' }}
            >
              Three clear tiers. No retainers. No hidden line items. Click any plan to see exactly what you get.
            </motion.p>
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginTop: '2.5rem',
            }}
          >
            {['Fixed-price quotes', '50% to start', '100% on-time record', 'Source code yours'].map((t) => (
              <span key={t} style={{ fontSize: '12px', color: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(0,0,0,0.25)', display: 'inline-block' }} />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Accordion plans ── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Column labels */}
        <div
          className="hidden sm:grid"
          style={{
            gridTemplateColumns: '3rem 1fr auto auto',
            gap: '1rem',
            padding: '1.25rem 0',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {['#', 'Plan', 'Starting at', ''].map((label, i) => (
            <span
              key={i}
              style={{
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.25)',
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Plan rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {PLANS.map((plan, i) => (
            <PlanRow
              key={plan.index}
              plan={plan}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </section>

      {/* ── Always included ── */}
      <section
        style={{
          marginTop: '5rem',
          padding: '4rem 2rem',
          background: '#f9f9f7',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '3rem', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: '320px' }}>
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: '0.75rem' }}>
                In every project
              </p>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#000',
                }}
              >
                The baseline,<br />non-negotiable.
              </h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', flex: 1, justifyContent: 'flex-end', minWidth: '280px' }}>
              {[
                { n: '01', title: 'Weekly demos', desc: 'You see real progress, every week. No black boxes.' },
                { n: '02', title: 'Direct access', desc: 'Chat with the person writing your code, not a PM layer.' },
                { n: '03', title: 'Source code handover', desc: 'Everything we build is yours. No lock-in.' },
                { n: '04', title: 'Deployed & live', desc: 'We set up hosting, domain, SSL — all done for you.' },
              ].map((item) => (
                <motion.div
                  key={item.n}
                  whileHover={{ y: -3 }}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    width: '200px',
                    flexShrink: 0,
                  }}
                >
                  <p style={{ fontSize: '10px', color: 'rgba(0,0,0,0.2)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#000', marginBottom: '0.4rem' }}>{item.title}</p>
                  <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'rgba(0,0,0,0.42)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)', marginBottom: '0.75rem' }}>
          FAQ
        </p>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            letterSpacing: '-0.03em',
            color: '#000',
            marginBottom: '2.5rem',
          }}
        >
          The questions we always get.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                padding: '1.75rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#000', lineHeight: 1.5 }}>{faq.q}</p>
              <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.48)', lineHeight: 1.7 }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: '0 2rem 6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            background: '#000',
            borderRadius: '24px',
            padding: 'clamp(2.5rem, 6vw, 4rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div>
            <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>
              Not sure where to start?
            </p>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                letterSpacing: '-0.03em',
                color: '#fff',
                lineHeight: 1.15,
                maxWidth: '400px',
              }}
            >
              Tell us what you're building. We'll figure out the rest.
            </h2>
          </div>
          <motion.a
            href="https://wa.me/919413973399"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, background: '#f0f0f0' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '1rem 2rem',
              borderRadius: '100px',
              background: '#fff',
              color: '#000',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              flexShrink: 0,
              letterSpacing: '0.01em',
            }}
          >
            <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
              <span style={{
                position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e', opacity: 0.6,
                animation: 'ping 1.2s cubic-bezier(0,0,0.2,1) infinite',
              }} />
              <span style={{ position: 'relative', borderRadius: '50%', width: 8, height: 8, background: '#22c55e' }} />
            </span>
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </section>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Pricing;

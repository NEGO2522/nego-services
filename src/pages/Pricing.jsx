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

// Page flip variant — same as Services page
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

const PLANS = [
  {
    index: '01',
    name: 'Business Website',
    subtitle: 'Shops, offices, clinics, salons & service businesses',
    timeline: '7–14 days',
    ideal: 'Perfect for local businesses that just need a clean, professional online presence — no complexity, no bloat. Just a site that works.',
    deliverables: [
      'Up to 10 custom pages',
      'Mobile-first responsive design',
      'Contact form + WhatsApp button',
      'Google Maps integration',
      'On-page SEO setup',
      'Google Analytics connected',
      'Domain + Hosting setup',
    ],
    addons: ['Photo Gallery', 'Testimonials section', 'Blog / News section', 'Booking Form'],
    notIncluded: ['Payment gateway', 'Admin panel', 'E-commerce features'],
    popular: true,
    tag: 'Most Popular',
  },
  {
    index: '02',
    name: 'Online Store',
    subtitle: 'Jewellery, clothes, food, handicrafts — anything',
    timeline: '2–4 weeks',
    ideal: 'For businesses that want to sell online — from a simple WhatsApp catalog to a full store with payments, orders, and inventory.',
    deliverables: [
      'Product catalog (unlimited items)',
      'Search, filter & categories',
      'Cart & checkout flow',
      'Razorpay / UPI / Stripe integration',
      'Order management panel',
      'Inventory tracking',
      'Mobile-ready storefront',
      '1 month post-launch support',
    ],
    addons: ['WhatsApp order button (no gateway)', 'COD option', 'Coupon & discount system'],
    notIncluded: ['Mobile app (Android / iOS)'],
    tag: 'Best Value',
  },
  {
    index: '03',
    name: 'Portfolio & Restaurant',
    subtitle: 'Freelancers, artists, doctors, lawyers, dhabas & cafes',
    timeline: '7–14 days',
    ideal: 'Whether you want to showcase your work or give customers a digital menu and table booking — this covers both beautifully.',
    deliverables: [
      'Up to 8 custom pages',
      'Portfolio grid / digital menu',
      'About + contact section',
      'Photo gallery',
      'Mobile responsive',
      'WhatsApp order / enquiry button',
      'Google Maps integration',
    ],
    addons: ['Table booking form', 'Resume / menu PDF download', 'Testimonials', 'Blog section'],
    notIncluded: ['Online payment', 'Admin panel'],
    tag: null,
  },
  {
    index: '04',
    name: 'School & Institute',
    subtitle: 'Schools, coaching centres, colleges & institutes',
    timeline: '2–3 weeks',
    ideal: 'Built for schools and coaching centres that want to manage admissions, notices, and results online — all in one place.',
    deliverables: [
      'Up to 10 pages',
      'Admissions / enquiry form',
      'Notice board section',
      'Faculty & staff page',
      'Photo gallery',
      'Course / subject listing',
      'Fee structure page',
      'Mobile responsive',
    ],
    addons: ['Results board', 'Student login portal', 'Online fee payment', 'Blog / news section'],
    notIncluded: ['Full ERP / school management system'],
    tag: 'New',
  },
];

const FAQS = [
  { q: 'Is the price fixed or does it vary?', a: 'Price depends on your exact requirements. We talk first, understand what you need, and then send you a clear, honest estimate — no hidden charges ever.' },
  { q: 'How does payment work?', a: '50% upfront to get started, 50% on delivery. For larger projects we split it across milestones.' },
  { q: 'What if I need changes after launch?', a: 'Small tweaks within the first 30 days are on us. Bigger changes get a fair, transparent maintenance estimate.' },
  { q: 'Do I need to arrange domain and hosting separately?', a: 'No. We handle domain registration and hosting setup for you — no need to go anywhere else.' },
  { q: 'How long does it take?', a: 'Basic websites are ready in 7–14 days. Online stores and more complex sites take 2–4 weeks.' },
];

const PlanRow = ({ plan, isOpen, onToggle, index }) => (
  <motion.div
    variants={pageFlip(index)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-40px' }}
    className="border-b border-black/10 last:border-b-0"
    style={{ fontFamily: "'DM Sans', sans-serif", transformOrigin: 'left center' }}
  >
    {/* Header */}
    <button
      onClick={onToggle}
      className="w-full text-left"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1.5rem 0' }}
    >
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Index */}
        <span
          className="hidden sm:block flex-shrink-0 w-9 text-[12px] text-black/22 font-semibold"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {plan.index}
        </span>

        {/* Name block */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span
              className="font-black text-black leading-none"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 5vw, 2rem)', letterSpacing: '-0.02em' }}
            >
              {plan.name}
            </span>
            {plan.tag && (
              <span className="px-2.5 py-0.5 rounded-full text-white text-[9px] font-bold tracking-widest uppercase bg-black flex-shrink-0">
                {plan.tag}
              </span>
            )}
          </div>
          <p className="text-[12px] sm:text-[13px] text-black/38 mt-0.5 truncate">{plan.subtitle}</p>
        </div>

        {/* Timeline */}
        <span
          className="hidden sm:block flex-shrink-0 text-[12px] text-black/35 font-medium"
        >
          {plan.timeline}
        </span>

        {/* Toggle */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black/12 flex items-center justify-center"
        >
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </div>
    </button>

    {/* Expandable */}
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: 'hidden' }}
    >
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
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">Kya milega</p>
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

        {/* Add-ons + Not included + CTA */}
        <div className="flex flex-col gap-5">
          {/* Add-ons */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">Add-on options</p>
            <ul className="flex flex-col gap-2">
              {plan.addons.map(d => (
                <li key={d} className="flex items-center gap-2.5 text-[13px] text-black/45">
                  <span className="w-3.5 h-3.5 rounded-full border border-black/20 flex-shrink-0 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-black/30" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Not included */}
          {plan.notIncluded.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">Is plan mein nahi</p>
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

          {/* CTA */}
          <motion.a
            href="https://wa.me/919413973399"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-3 rounded-full bg-black text-white text-[13px] font-semibold mt-auto w-full sm:w-auto"
          >
            {plan.price === 'Custom' ? 'Get an estimate' : `Get an estimate →`}
          </motion.a>
        </div>
      </div>
    </motion.div>
  </motion.div>
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
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" initial={false}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(0,0,0,0.04) 47px, rgba(0,0,0,0.04) 48px)',
          }} />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[10px] font-semibold tracking-[0.28em] uppercase text-black/30 mb-4"
          >
            Pricing — 2025
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
            className="font-black text-black leading-[1.02] mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.4rem, 8vw, 5rem)', letterSpacing: '-0.035em' }}
          >
            Your work sets<br />
            <em className="italic" style={{ color: 'rgba(0,0,0,0.25)' }}>the price.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[14px] sm:text-[15px] text-black/45 max-w-md leading-[1.78] mb-8"
          >
            No fixed price list — because every project is different. Pick your service, message us on WhatsApp, and we'll send you a clear, honest estimate.
          </motion.p>

          {/* Trust pills */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-x-5 gap-y-2">
            {['No hidden charges', '50% upfront, 50% on delivery', 'Source code is yours', 'Free 30-day support'].map(t => (
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
          {/* Column header — desktop only */}
          <div className="hidden sm:flex items-center gap-5 py-4 border-b border-black/8">
            <span className="w-9 text-[9px] font-semibold tracking-[0.22em] uppercase text-black/22">#</span>
            <span className="flex-1 text-[9px] font-semibold tracking-[0.22em] uppercase text-black/22">Service</span>
            <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-black/22 mr-12">Timeline</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {PLANS.map((plan, i) => (
              <PlanRow
                key={plan.index}
                plan={plan}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Always included ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 mt-8 border-t border-b border-black/7" style={{ background: '#f9f9f7' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/28 mb-3">In every project</p>
            <h2
              className="font-black text-black leading-[1.1]"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '-0.03em' }}
            >
              The things we<br className="sm:hidden" /> never skip.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { n: '01', title: 'Weekly updates', desc: 'Real progress, every week.' },
              { n: '02', title: 'Direct access', desc: 'Talk to who builds it.' },
              { n: '03', title: 'Code handover', desc: 'Everything is yours.' },
              { n: '04', title: 'Live deploy', desc: 'Hosting + SSL, done.' },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -3 }}
                className="bg-white border border-black/8 rounded-2xl p-4 sm:p-5 transition-all"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transformOrigin: 'left center' }}
              >
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
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-black/28 mb-3">FAQ</p>
            <h2
              className="font-black text-black"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.03em' }}
            >
              The questions we always get.
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="py-5 sm:py-6 border-b border-black/8 flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-8"
                style={{ transformOrigin: 'left center' }}
              >
                <p className="text-[14px] font-bold text-black">{faq.q}</p>
                <p className="text-[13px] sm:text-[14px] text-black/48 leading-[1.7]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto bg-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
        >
          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/28 mb-3">Not sure where to start?</p>
            <h2
              className="font-black text-white leading-[1.12]"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', letterSpacing: '-0.03em', maxWidth: 380 }}
            >
              Tell us what you need — we'll send you a clear estimate.
            </h2>
          </div>
          <motion.a
            href="https://wa.me/919413973399"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-black text-[14px] font-bold flex-shrink-0 w-full sm:w-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-green-500" />
            </span>
            WhatsApp us now
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
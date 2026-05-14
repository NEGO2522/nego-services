import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

// Page flip variant — book ka page paltne jaisi feel
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

// SVG Icons — clean, professional, monochrome
const Icons = {
  Business: ({ color = 'currentColor' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
  Store: ({ color = 'currentColor' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Portfolio: ({ color = 'currentColor' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  Restaurant: ({ color = 'currentColor' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  School: ({ color = 'currentColor' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Domain: ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Hosting: ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Payment: ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  SSL: ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Photo: ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  Maintenance: ({ color = 'currentColor' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const CATEGORIES = [
  {
    id: 'business',
    label: 'Business Website',
    IconComp: Icons.Business,
    desc: 'Professional websites for shops, offices, clinics, salons, and service businesses.',
    websites: [
      {
        title: 'Basic Business Site',
        pages: '1–5 Pages',
        desc: 'Home, About, Services, Contact. Perfect for local shops & service providers.',
        features: ['Contact Form', 'Google Maps', 'Mobile Friendly', 'WhatsApp Button'],
        tag: 'Most Popular',
        dark: false,
      },
      {
        title: 'Pro Business Site',
        pages: '5–10 Pages',
        desc: 'Full website with gallery, testimonials, blog, and booking form.',
        features: ['Photo Gallery', 'Testimonials', 'Blog Section', 'Booking Form', 'SEO Ready'],
        tag: null,
        dark: false,
      },
    ],
  },
  {
    id: 'ecommerce',
    label: 'Online Store',
    IconComp: Icons.Store,
    desc: 'Sell your products online — jewellery, clothes, food, anything.',
    websites: [
      {
        title: 'Basic Store',
        pages: 'Up to 50 Products',
        desc: 'Simple product listing with WhatsApp order button. No payment gateway needed.',
        features: ['Product Catalog', 'WhatsApp Order', 'Search & Filter', 'Mobile Ready'],
        tag: null,
        dark: false,
      },
      {
        title: 'Full E-commerce',
        pages: 'Unlimited Products',
        desc: 'Complete online shop with cart, payments, and admin panel to manage orders.',
        features: ['Cart & Checkout', 'Razorpay / UPI', 'Order Management', 'Admin Panel', 'Inventory'],
        tag: 'Best Value',
        dark: true,
      },
    ],
  },
  {
    id: 'portfolio-restaurant',
    label: 'Portfolio & Restaurant',
    IconComp: Icons.Portfolio,
    desc: 'For freelancers, artists, doctors, lawyers — and dhabas, cafes, restaurants, cloud kitchens.',
    websites: [
      {
        title: 'Personal Portfolio',
        pages: '3–5 Pages',
        desc: 'Clean, impressive site to showcase your work and get more clients.',
        features: ['Portfolio Grid', 'About Me', 'Contact Form', 'Resume Download'],
        tag: null,
        dark: false,
      },
      {
        title: 'Restaurant Website',
        pages: '4–6 Pages',
        desc: 'Menu, gallery, table booking, and location — everything your customers need.',
        features: ['Digital Menu', 'Table Booking', 'Photo Gallery', 'Google Maps', 'WhatsApp Order'],
        tag: null,
        dark: false,
      },
    ],
  },
  {
    id: 'school',
    label: 'School & Institute',
    IconComp: Icons.School,
    desc: 'Schools, coaching centers, colleges aur institutes ke liye complete website.',
    websites: [
      {
        title: 'School Website',
        pages: '5–8 Pages',
        desc: 'Admissions, gallery, notices, faculty page — sab kuch ek jagah.',
        features: ['Admissions Form', 'Notice Board', 'Photo Gallery', 'Faculty Page', 'Mobile Ready'],
        tag: null,
        dark: false,
      },
      {
        title: 'Coaching Centre',
        pages: '4–6 Pages',
        desc: 'Course listing, fee structure, results board aur enquiry form.',
        features: ['Course Listing', 'Fee Structure', 'Results Board', 'Enquiry Form', 'WhatsApp Button'],
        tag: 'New',
        dark: true,
      },
    ],
  },
];

const ADD_ONS = [
  { IconComp: Icons.Domain,      title: 'Domain (.com / .in)',  desc: 'Your website address, e.g. yourbusiness.com' },
  { IconComp: Icons.Hosting,     title: 'Hosting',              desc: 'Server to keep your website live 24/7' },
  { IconComp: Icons.Payment,     title: 'Payment Integration',  desc: 'Razorpay / UPI / Stripe for online payments' },
];

export default function Services() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services — NEGO';
  }, []);

  // Smooth scroll to section with page-flip feel
  const handlePillClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
              Website Services
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
            <motion.div variants={fadeUp(0.06)} initial="hidden" animate="show">
              <h1 className="font-black text-black leading-[1.03]"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-0.045em' }}>
                Websites for<br />
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>every business.</span>
              </h1>
            </motion.div>
            <motion.p variants={fadeUp(0.14)} initial="hidden" animate="show"
              className="text-[14px] sm:text-[15px] text-black/45 max-w-sm leading-[1.78] lg:pb-2">
              We build fast, professional websites for local businesses in Jaipur and beyond. Pick your category below.
            </motion.p>
          </div>

          {/* Category pills — smooth scroll on click */}
          <motion.div variants={fadeUp(0.2)} initial="hidden" animate="show"
            className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => handlePillClick(e, cat.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-[12px] font-semibold text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <cat.IconComp color="currentColor" />
                {cat.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Categories ── */}
      {CATEGORIES.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6 ${ci % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}
          // Scroll-margin so sticky navbar doesn't cover the section
          style={{ scrollMarginTop: '72px' }}
        >
          <div className="max-w-6xl mx-auto">

            {/* Section header — fade up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-black/6 flex items-center justify-center text-black/70 flex-shrink-0">
                  <cat.IconComp color="currentColor" />
                </div>
                <h2 className="font-black text-black" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em' }}>
                  {cat.label}
                </h2>
              </div>
              <p className="text-[14px] text-black/40 max-w-lg leading-[1.7] pl-12">{cat.desc}</p>
            </motion.div>

            {/* Cards — page flip animation on scroll into view */}
            <div className={`grid gap-4 ${cat.websites.length === 1 ? 'grid-cols-1 max-w-lg' : 'sm:grid-cols-2'}`}>
              {cat.websites.map((w, i) => (
                <motion.div
                  key={w.title}
                  variants={pageFlip(i)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{
                    y: -4,
                    boxShadow: w.dark ? '0 20px 60px rgba(0,0,0,0.35)' : '0 16px 48px rgba(0,0,0,0.1)',
                  }}
                  className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                    w.dark ? 'bg-black text-white' : 'bg-white border border-black/8'
                  }`}
                  style={{
                    boxShadow: w.dark ? '0 8px 32px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.05)',
                    transformOrigin: 'left center',
                  }}
                >
                  {/* Tag badge */}
                  {w.tag && (
                    <span className={`absolute top-5 right-5 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      w.dark ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>{w.tag}</span>
                  )}

                  {/* Pages label */}
                  <span className={`text-[10px] font-black tracking-widest mb-4 block ${w.dark ? 'text-white/25' : 'text-black/20'}`}>
                    {w.pages}
                  </span>

                  <h3
                    className={`font-black text-[20px] sm:text-[22px] mb-2.5 leading-snug ${w.dark ? 'text-white' : 'text-black'}`}
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {w.title}
                  </h3>

                  <p className={`text-[13px] leading-[1.7] mb-6 flex-1 ${w.dark ? 'text-white/50' : 'text-black/45'}`}>{w.desc}</p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 mb-7">
                    {w.features.map(f => (
                      <li key={f} className={`flex items-center gap-2.5 text-[12px] font-medium ${w.dark ? 'text-white/65' : 'text-black/55'}`}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                          <circle cx="7" cy="7" r="7" fill={w.dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.07)'} />
                          <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke={w.dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-5 border-t border-dashed" style={{ borderColor: w.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>
                    <a
                      href="https://wa.me/919413973399"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[12px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 ${
                        w.dark
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-black text-white hover:bg-black/85'
                      }`}
                    >
                      Get Quote →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Add-ons ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">Extra Services</p>
            <h2 className="font-black text-black mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.035em' }}>
              Add-ons & Extras
            </h2>
            <p className="text-[14px] text-black/40 max-w-md leading-[1.7]">
              Everything you need to go fully online — domain, hosting, payments, and more.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map((a, i) => (
              <motion.div
                key={a.title}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="bg-white border border-black/8 rounded-2xl p-5 sm:p-6 flex items-start gap-4"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
              >
                <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black/60 flex-shrink-0 mt-0.5">
                  <a.IconComp color="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-[14px] mb-1">{a.title}</h4>
                  <p className="text-[12px] text-black/40 leading-[1.6]">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 border-t border-black/6" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/30 mb-3">Our process</p>
            <h2 className="font-black text-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.035em' }}>
              How we work.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Call / Chat', time: '~30 min',   desc: 'Tell us your business and what you need.' },
              { n: '02', title: 'Quote',       time: '24 hrs',    desc: 'We send a clear price and timeline — no surprises.' },
              { n: '03', title: 'We Build',    time: '7–21 days', desc: 'We design and build. You review and approve.' },
              { n: '04', title: 'Go Live',     time: 'Ongoing',   desc: 'Your site launches. We handle domain & hosting.' },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                variants={pageFlip(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="bg-white border border-black/8 rounded-2xl p-5 sm:p-6"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
              >
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-black rounded-3xl overflow-hidden p-8 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative">
              <h2 className="font-black text-white leading-[1.06] mb-3"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 3rem)', letterSpacing: '-0.04em' }}>
                Ready to go online?<br />Let's build it.
              </h2>
              <p className="text-[14px] text-white/45 max-w-xs leading-[1.72]">
                WhatsApp karo — seedha baat karte hain. Free consultation, no commitment.
              </p>
            </div>
            <motion.a
              href="https://wa.me/919413973399"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-black bg-white text-[14px] flex-shrink-0 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-green-500" />
              </span>
              WhatsApp Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
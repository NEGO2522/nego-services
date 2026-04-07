import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    /* Outer wrapper — matches landing page background so rounded footer "floats" */
    <div className="bg-[#fafafa] px-4 pb-6 pt-0">
      <motion.footer
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-black"
        style={{
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset, 0 12px 48px rgba(0,0,0,0.12)',
        }}
      >
        {/* Subtle dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Top gradient accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent 100%)',
          }}
        />

        {/* Corner cross marks */}
        {[
          'top-5 left-5',
          'top-5 right-5',
        ].map((cls, i) => (
          <div key={i} className={`absolute ${cls} w-3 h-3 pointer-events-none opacity-20`}>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
          </div>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-14">

          {/* Top section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">

            {/* Brand */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-[280px]"
            >
              <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors shadow-lg">
                  <span className="text-black font-black text-sm">N</span>
                </div>
                <span className="text-white font-bold text-[16px] tracking-tight">
                  NEGO<span className="text-white/30">.</span>
                </span>
              </Link>
              <p className="text-[13px] leading-[1.72] text-white/45">
                Senior-led team turning ideas into fast, well-built digital products. Clean code, on-time delivery.
              </p>

              {/* Social / contact row */}
              <div className="flex items-center gap-2 mt-6">
                <motion.a
                  href="https://wa.me/919413973399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-semibold text-black bg-white"
                  whileHover={{ scale: 1.05, backgroundColor: '#e8e8e8' }}
                  whileTap={{ scale: 0.97 }}
                  style={{ boxShadow: '0 2px 12px rgba(255,255,255,0.15)' }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>

            {/* Links columns */}
            <div className="flex gap-8 sm:gap-12 lg:gap-16 flex-wrap">
              <motion.div
                variants={fadeUp(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-5">Company</p>
                <div className="flex flex-col gap-3">
                  {[
                    ['About', '/about'],
                    ['Services', '/services'],
                    ['Projects', '/projects'],
                    ['Contact', '/contact'],
                  ].map(([label, to]) => (
                    <Link
                      key={label}
                      to={to}
                      className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.14)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-5">Legal</p>
                <div className="flex flex-col gap-3">
                  {[
                    ['Privacy Policy', '/privacy-policy'],
                    ['Terms of Service', '/terms'],
                  ].map(([label, to]) => (
                    <Link
                      key={label}
                      to={to}
                      className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-5">Services</p>
                <div className="flex flex-col gap-3">
                  {[
                    'Custom Websites',
                    'Web Applications',
                    'Mobile Apps',
                    'E-commerce',
                  ].map(label => (
                    <Link
                      key={label}
                      to="/services"
                      className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-8"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }}
          />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/28">
            <span>© {year} NEGO Services. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Built with
              <span className="text-white/50">♥</span>
              in Jaipur, India
            </span>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

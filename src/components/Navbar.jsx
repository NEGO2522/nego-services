import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      {/* Floating Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4"
      >
        <motion.nav
          animate={{
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
            boxShadow: scrolled
              ? '0 4px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8) inset'
              : '0 2px 16px rgba(0,0,0,0.06)',
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: scrolled
              ? 'rgba(255,255,255,0.88)'
              : 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '860px',
          }}
        >
          <div className="px-4 h-14 flex items-center justify-between gap-4">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-white font-black text-sm tracking-tight">N</span>
              </div>
              <span className="font-bold text-[15px] text-black tracking-tight">
                NEGO<span className="text-neutral-300">.</span>
              </span>
            </Link>

            {/* Desktop links — centered */}
            <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="relative px-4 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 group"
                    style={{ color: active ? '#000' : '#6b7280' }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-black/6"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 group-hover:text-black transition-colors duration-150">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <Link
                to="/contact"
                className="text-sm font-medium text-neutral-500 hover:text-black transition-colors px-3 py-1.5"
              >
                Contact
              </Link>
              <motion.a
                href="https://wa.me/919413973399"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-black"
                whileHover={{ scale: 1.04, backgroundColor: '#1a1a1a' }}
                whileTap={{ scale: 0.97 }}
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-[1.5px] bg-black rounded-full"
                style={{ width: 18 }}
                animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
              />
              <motion.span
                className="block h-[1.5px] bg-black rounded-full"
                style={{ width: 14 }}
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              />
              <motion.span
                className="block h-[1.5px] bg-black rounded-full"
                style={{ width: 18 }}
                animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
              />
            </button>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mob-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #d4d4d4 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                opacity: 0.5,
              }}
            />

            <div className="relative z-10 flex flex-col justify-center flex-1 h-full px-8 gap-1">
              {/* Logo in menu */}
              <div className="flex items-center gap-2.5 mb-10">
                <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center">
                  <span className="text-white font-black text-sm">N</span>
                </div>
                <span className="font-bold text-lg text-black tracking-tight">NEGO<span className="text-neutral-300">.</span></span>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.to}
                    className="block py-4 text-[2.6rem] font-black text-black tracking-tight leading-none border-b border-neutral-100 hover:pl-3 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + navLinks.length * 0.07 }}
              >
                <Link
                  to="/contact"
                  className="block py-4 text-[2.6rem] font-black text-black tracking-tight leading-none border-b border-neutral-100 hover:pl-3 transition-all duration-200"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                className="mt-10"
              >
                <a
                  href="https://wa.me/919413973399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-black text-white font-bold text-lg"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Start a Project
                </a>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-neutral-400 text-xs z-10">
              © {new Date().getFullYear()} NEGO Services
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

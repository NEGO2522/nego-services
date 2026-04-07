import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const GridBg = ({ opacity = 0.5, size = 48 }) => (
  <div className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,${opacity * 0.1}) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,${opacity * 0.1}) 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`
    }} />
);

const SectionLabel = ({ children }) => (
  <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-6 border border-black/5">
    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
    {children}
  </p>
);

export default function ContactUs() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-black selection:text-white">
      <Helmet>
        <title>Contact & Team — NEGO</title>
        <meta name="description" content="Reach out to NEGO. Meet the engineering team behind the code." />
      </Helmet>

      <Navbar />

      <main className="relative pt-36 pb-24 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <GridBg opacity={0.6} size={48} />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 80% 90% at 50% -10%, #fff 0%, transparent 80%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Hero Header */}
          <motion.div className="mb-16" initial="hidden" animate="show" variants={fadeUp(0)}>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-black text-black leading-[1.02] tracking-tight mb-4"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              Let's start your{' '}
              <br className="hidden md:block" />
              <span className="text-black/30">next project.</span>
            </h1>
          </motion.div>

          {/* Contact card + direct lines */}
          <div className="grid lg:grid-cols-12 gap-16 mb-24 items-center">

            {/* AMEX-style card */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, rotateY: 15, x: -30 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.div
                className="relative w-full max-w-[500px] aspect-[1.586/1] rounded-[24px] p-8 flex flex-col justify-between mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #1f1f1f 0%, #0d0d0d 50%, #171717 100%)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2)',
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-[24px] pointer-events-none opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, transparent 60%)', backgroundSize: '100% 100%' }} />

                {/* Top row */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="text-white font-black tracking-widest text-xl opacity-90">
                    NEGO
                    <span className="block text-[8px] font-semibold text-white/50 uppercase tracking-[0.3em] mt-1">Business Platinum</span>
                  </div>
                  <div className="w-12 h-10 rounded-md border border-[#888] flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #d4af37 0%, #aa8529 50%, #e5c158 100%)' }}>
                    <div className="absolute inset-0 border-[0.5px] border-black/30 w-full h-1/2 top-1/4" />
                    <div className="absolute inset-0 border-[0.5px] border-black/30 w-1/3 h-full left-1/3" />
                  </div>
                </div>

                {/* Contact details */}
                <div className="mb-2 relative z-10">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 font-mono text-[22px] md:text-[28px] tracking-widest font-bold mb-2">
                    <a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer">+91 9413 9733 99</a>
                  </div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 font-mono text-[14px] md:text-[16px] tracking-wider pb-4">
                    <a href="mailto:nextgenova28@gmail.com">nextgenova28@gmail.com</a>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end relative z-10">
                  <div className="font-mono text-white/80 tracking-widest uppercase text-sm font-semibold">NEXTGENOVA HQ</div>
                  <div className="text-right">
                    <div className="text-[8px] text-white/50 uppercase tracking-widest mb-1">Valid Thru</div>
                    <div className="font-mono text-white/90 font-bold tracking-widest text-sm">∞/∞</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Direct lines */}
            <motion.div
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
              initial="hidden" animate="show" variants={fadeUp(0.2)}
            >
              <h2 className="text-2xl font-bold text-black mb-2">Direct Lines</h2>
              <div className="bg-white rounded-[2rem] p-8 border border-black/8 shadow-sm">
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                      <FaWhatsapp size={20} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black/40">WhatsApp (Primary)</div>
                      <a href="https://wa.me/919413973399" target="_blank" rel="noopener noreferrer"
                        className="text-lg font-bold text-black hover:opacity-70 transition-opacity">
                        +91 94139 73399
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                      <FaWhatsapp size={20} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black/40">WhatsApp (Secondary)</div>
                      <a href="https://wa.me/917742971455" target="_blank" rel="noopener noreferrer"
                        className="text-lg font-bold text-black hover:opacity-70 transition-opacity">
                        +91 77429 71455
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black/40">Email Address</div>
                      <a href="mailto:nextgenova28@gmail.com"
                        className="text-lg font-bold text-black hover:opacity-70 transition-opacity break-all">
                        nextgenova28@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <hr className="border-t border-black/10 my-24 border-dashed" />

          {/* Team */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <SectionLabel>The Founders</SectionLabel>
              <h2 className="text-[3rem] font-black tracking-tight text-black leading-none">Meet the Team.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { initials: 'KJ', name: 'Kshitij Jain',  wa: '919413973399',  email: 'nextgenova28@gmail.com'                          },
                { initials: 'HA', name: 'Harsh Agrawal', wa: '919719214408',  email: 'harshagrawal7878@gmail.com'                      },
                { initials: 'MK', name: 'Manish Kumar',  wa: '918789925958',  email: '2024btechaimlkshitij18489@poornima.edu.in'       },
              ].map((m, i) => (
                <motion.div key={m.initials}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-[2rem] p-8 border border-black/8 text-center group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl hover:border-black/15"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-black flex items-center justify-center text-white text-3xl font-black mb-6 shadow-xl shadow-black/20 group-hover:scale-105 transition-transform duration-500">
                    {m.initials}
                  </div>
                  <h3 className="text-xl font-black text-black">{m.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40 mt-1 mb-6">Team Member</p>
                  <div className="flex justify-center gap-4">
                    <a href={`https://wa.me/${m.wa}`} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-green-500 hover:text-white transition-colors">
                      <FaWhatsapp size={18} />
                    </a>
                    <a href={`mailto:${m.email}`}
                      className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                      <FaEnvelope size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-10 border border-black/8 shadow-sm"
          >
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/next.genova/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/5 border border-black/8 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/netgenova" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/5 border border-black/8 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

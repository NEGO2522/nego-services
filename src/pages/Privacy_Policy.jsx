import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy_Policy = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
            backgroundSize: '128px 128px',
            opacity: 0.2
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#C2A68C]/10 via-black to-[#E6D8C3]/10"></div>

      <Helmet>
        <title>Privacy Policy - NEGO</title>
        <meta name="description" content="Read NEGO's Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] py-6 md:py-12 relative z-10">
        <section className="max-w-7xl mx-auto px-6">
          {/* Hero header */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-gradient-to-r from-[#151515] via-[#101010] to-[#151515] p-8 md:p-10 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C2A68C]/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#E6D8C3]/10 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#C2A68C] uppercase">Legal</span>
                  <h1 className="text-3xl md:text-5xl font-bold mt-2">Privacy Policy</h1>
                  <p className="text-gray-300 mt-3 max-w-2xl">Understand how we collect, use, and protect your data across our products and services.</p>
                </div>
                <div className="shrink-0">
                  <span className="px-3 py-1 rounded-full bg-[#C2A68C]/10 text-[#C2A68C] text-xs border border-[#C2A68C]/30">Last updated: Oct 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Table of contents */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6">
                  <h3 className="text-sm font-semibold text-gray-200 mb-4 tracking-wider">On this page</h3>
                  <nav className="space-y-3 text-sm">
                    {[
                      { id: 'intro', label: 'Introduction' },
                      { id: 'collect', label: 'Information We Collect' },
                      { id: 'use', label: 'How We Use Information' },
                      { id: 'cookies', label: 'Cookies & Tracking' },
                      { id: 'sharing', label: 'Data Sharing' },
                      { id: 'security', label: 'Data Security' },
                      { id: 'rights', label: 'Your Rights' },
                      { id: 'contact', label: 'Contact Us' },
                    ].map((item, i) => (
                      <a key={item.id} href={`#${item.id}`} className="group flex items-center text-gray-400 hover:text-white transition-colors">
                        <span className="w-6 h-6 mr-3 rounded-md bg-[#1d1d1d] border border-[#2a2a2a] text-xs flex items-center justify-center text-gray-400 group-hover:text-[#C2A68C] group-hover:border-[#3a3a3a]">{i+1}</span>
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 space-y-6">
              {[
                { id: 'intro', title: 'Introduction', content: (
                  <p className="text-gray-300 leading-relaxed">This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
                )},
                { id: 'collect', title: 'Information We Collect', content: (
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Personal identification information such as name, email, and contact details.</li>
                    <li>Usage data, analytics, and cookies to improve performance and user experience.</li>
                    <li>Communication records when you contact us.</li>
                  </ul>
                )},
                { id: 'use', title: 'How We Use Information', content: (
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>To provide, operate, and maintain our services.</li>
                    <li>To improve, personalize, and expand our offerings.</li>
                    <li>To communicate with you for support and updates.</li>
                    <li>To comply with legal obligations.</li>
                  </ul>
                )},
                { id: 'cookies', title: 'Cookies & Tracking', content: (
                  <p className="text-gray-300 leading-relaxed">We use cookies and similar tracking technologies to monitor activity on our site and hold certain information. You can control cookies through your browser settings.</p>
                )},
                { id: 'sharing', title: 'Data Sharing', content: (
                  <p className="text-gray-300 leading-relaxed">We do not sell your personal information. We may share information with service providers who assist in our operations, subject to confidentiality obligations.</p>
                )},
                { id: 'security', title: 'Data Security', content: (
                  <p className="text-gray-300 leading-relaxed">We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
                )},
                { id: 'rights', title: 'Your Rights', content: (
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Access, update, or delete your personal information.</li>
                    <li>Opt-out of certain data processing activities.</li>
                    <li>Withdraw consent where processing is based on consent.</li>
                  </ul>
                )},
                { id: 'contact', title: 'Contact Us', content: (
                  <div>
                    <p className="text-gray-300 leading-relaxed">If you have any questions about this Privacy Policy or our practices, please visit our contact page.</p>
                    <div className="mt-4">
                      <motion.a href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#0A0A0A] font-medium rounded-full hover:shadow-lg hover:shadow-[#C2A68C]/30 transition-all duration-300" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        Contact Us
                      </motion.a>
                    </div>
                  </div>
                )},
              ].map((section, idx) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6 md:p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.05 * idx }}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#C2A68C]/5"></div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#1d1d1d] border border-[#2a2a2a] text-xs flex items-center justify-center text-[#C2A68C] font-semibold">{idx+1}</span>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{section.title}</h2>
                      {section.content}
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy_Policy;

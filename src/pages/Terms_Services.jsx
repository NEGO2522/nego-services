import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms_Services = () => {
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
        <title>Terms of Service - NEGO</title>
        <meta name="description" content="Read NEGO's Terms of Service" />
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
                  <h1 className="text-3xl md:text-5xl font-bold mt-2">Terms of Service</h1>
                  <p className="text-gray-300 mt-3 max-w-2xl">The rules and conditions that govern your use of our products and services.</p>
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
                      { id: 'accept', label: 'Acceptance of Terms' },
                      { id: 'use', label: 'Use of Services' },
                      { id: 'ip', label: 'Intellectual Property' },
                      { id: 'liability', label: 'Limitation of Liability' },
                      { id: 'changes', label: 'Changes to Terms' },
                      { id: 'contact', label: 'Contact' },
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
                { id: 'accept', title: 'Acceptance of Terms', content: (
                  <p className="text-gray-300 leading-relaxed">By accessing or using our services, you agree to be bound by these Terms of Service.</p>
                )},
                { id: 'use', title: 'Use of Services', content: (
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>You agree to use the services only for lawful purposes.</li>
                    <li>You will not attempt to disrupt or compromise service integrity.</li>
                    <li>You are responsible for the accuracy of information you provide.</li>
                  </ul>
                )},
                { id: 'ip', title: 'Intellectual Property', content: (
                  <p className="text-gray-300 leading-relaxed">All content, trademarks, and materials are the property of NEGO or its licensors and protected by applicable laws.</p>
                )},
                { id: 'liability', title: 'Limitation of Liability', content: (
                  <p className="text-gray-300 leading-relaxed">NEGO will not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
                )},
                { id: 'changes', title: 'Changes to Terms', content: (
                  <p className="text-gray-300 leading-relaxed">We may update these terms from time to time. Continued use of the services constitutes acceptance of the changes.</p>
                )},
                { id: 'contact', title: 'Contact', content: (
                  <div>
                    <p className="text-gray-300 leading-relaxed">For any questions regarding these Terms, please reach out via our contact page.</p>
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

export default Terms_Services;

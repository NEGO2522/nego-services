import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp, FaExternalLinkAlt, FaInstagram } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background grid */}
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
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C2A68C]/10 via-black to-[#E6D8C3]/10"></div>
      
      <Helmet>
        <title>Contact Us - NEGO</title>
        <meta name="description" content="Get in touch with NEGO for your tech solutions and inquiries" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Navigation Bar */}
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] py-8 md:py-16 flex items-center">
        {/* Contact Section */}
        <section className="relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-[#1a1a1a] rounded-2xl shadow-lg border border-[#333] p-6 relative z-10">
                <form className="space-y-4">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-[#C2A68C] mb-2">Get in Touch</h2>
                      <p className="text-gray-400">Reach out to us through any of the following methods</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-[#2d2d2d] p-4 rounded-lg">
                        <p className="text-sm text-gray-300 mb-3">Or contact us directly:</p>
                        <div className="space-y-3">
                          <a 
                            href="mailto:nextgenova28@gmail.com" 
                            className="flex items-center text-sm text-gray-300 hover:text-[#C2A68C] transition-colors"
                          >
                            <FaEnvelope className="mr-2 text-[#C2A68C]" />
                            nextgenova28@gmail.com
                          </a>
                          
                          <div className="flex flex-col space-y-2">
                            <a 
                              href="https://wa.me/919413973399" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-300 hover:text-[#25D366] transition-colors"
                            >
                              <FaWhatsapp className="mr-2 text-[#25D366]" />
                              +91 94139 73399
                            </a>
                            <a 
                              href="https://wa.me/918789925958" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-300 hover:text-[#25D366] transition-colors"
                            >
                              <FaWhatsapp className="mr-2 text-[#25D366]" />
                              +91 87899 25958
                            </a>
                            <a 
                              href="https://wa.me/919719214408" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-300 hover:text-[#25D366] transition-colors"
                            >
                              <FaWhatsapp className="mr-2 text-[#25D366]" />
                              +91 9719214408
                            </a>
                          </div>

                          <div className="flex space-x-4 pt-4 justify-center">
                            <a 
                              href="https://www.instagram.com/next.genova/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-[#E1306C] transition-colors"
                              title="Instagram"
                            >
                              <FaInstagram size={20} />
                            </a>
                            <a 
                              href="https://www.linkedin.com/company/netgenova" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-500 hover:text-[#0077b5] transition-colors"
                              title="LinkedIn"
                            >
                              <FaLinkedin size={20} />
                            </a>
                            <a 
                              href="https://wa.me/918789925958" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-[#25D366] transition-colors"
                              title="WhatsApp"
                            >
                              <FaWhatsapp size={20} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <motion.a
                    href="https://wa.me/918789925958"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                  </motion.a>

                  {/* Connect with our Team */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-[#C2A68C] mb-6 text-center">Connect with our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Team Member 1 */}
                      <div className="bg-[#2d2d2d] p-6 rounded-xl shadow-lg border border-[#3d3d3d] hover:border-[#C2A68C]/50 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-24 h-24 rounded-full bg-[#C2A68C] flex items-center justify-center text-3xl font-bold text-[#1a1a1a] mb-3">
                            KJ
                          </div>
                          <div className="w-full">
                            <h4 className="text-xl font-semibold text-white mb-1">Kshitij Jain</h4>
                            <p className="text-[#C2A68C] font-medium mb-4">Team Member</p>
                            <div className="flex justify-center space-x-4">
                              <a 
                                href="https://wa.me/919413973399" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#25D366] hover:text-[#128C7E] transition-all transform hover:scale-110"
                                title="WhatsApp"
                              >
                                <FaWhatsapp size={18} />
                              </a>
                              <a 
                                href="mailto:nextgenova28@gmail.com" 
                                className="text-gray-400 hover:text-[#C2A68C] transition-all transform hover:scale-110"
                                title="Email"
                              >
                                <FaEnvelope size={18} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Team Member 2 */}
                      <div className="bg-[#2d2d2d] p-6 rounded-xl shadow-lg border border-[#3d3d3d] hover:border-[#C2A68C]/50 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-24 h-24 rounded-full bg-[#C2A68C] flex items-center justify-center text-3xl font-bold text-[#1a1a1a] mb-3">
                            MK
                          </div>
                          <div className="w-full">
                            <h4 className="text-xl font-semibold text-white mb-1">Manish Kumar</h4>
                            <p className="text-[#C2A68C] font-medium mb-4">Team Member</p>
                            <div className="flex justify-center space-x-4">
                              <a 
                                href="https://wa.me/918789925958" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#25D366] hover:text-[#128C7E] transition-all transform hover:scale-110"
                                title="WhatsApp"
                              >
                                <FaWhatsapp size={18} />
                              </a>
                              <a 
                                href="mailto:nextgenova28@gmail.com" 
                                className="text-gray-400 hover:text-[#C2A68C] transition-all transform hover:scale-110"
                                title="Email"
                              >
                                <FaEnvelope size={18} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Team Member 3 */}
                      <div className="bg-[#2d2d2d] p-6 rounded-xl shadow-lg border border-[#3d3d3d] hover:border-[#C2A68C]/50 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-24 h-24 rounded-full bg-[#C2A68C] flex items-center justify-center text-3xl font-bold text-[#1a1a1a] mb-3">
                            HA
                          </div>
                          <div className="w-full">
                            <h4 className="text-xl font-semibold text-white mb-1">Harsh Agrawal</h4>
                            <p className="text-[#C2A68C] font-medium mb-4">Team Member</p>
                            <div className="flex justify-center space-x-4">
                              <a 
                                href="https://wa.me/919719214408" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#25D366] hover:text-[#128C7E] transition-all transform hover:scale-110"
                                title="WhatsApp"
                              >
                                <FaWhatsapp size={18} />
                              </a>
                              <a 
                                href="mailto:harshagrawal7878@gmail.com" 
                                className="text-gray-400 hover:text-[#C2A68C] transition-all transform hover:scale-110"
                                title="Email"
                              >
                                <FaEnvelope size={18} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                
                {/* Thank You Message */}
                <div className="mt-8 text-center">
                  <div className="bg-[#2d2d2d] p-6 rounded-xl border border-[#3d3d3d]">
                    <h3 className="text-xl font-semibold text-[#C2A68C] mb-3">Thank You for Choosing Us!</h3>
                    <p className="text-gray-300">We're honored to be your success partner. Our team is committed to providing you with the best service and support.</p>
                  </div>
                </div>
              </div>
            
              {/* Contact Info Card */}
              <div className="space-y-6 lg:col-span-2 relative z-10">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-[#333] text-white relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-[#C2A68C] flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Our Location
                  </h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-[#C2A68C] mt-1 mr-3 flex-shrink-0" />
                      <p>Poornima University,<br />IS-2027-34, Ramchandrapura,<br />Vidhani, Sitapura Extension,<br />Jaipur, Rajasthan 303905</p>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-[#C2A68C] mr-3" />
                      <a 
                        href="mailto:nextgenova28@gmail.com" 
                        className="hover:text-[#C2A68C] transition-colors relative z-10"
                        style={{ position: 'relative', zIndex: 10 }}
                      >
                        nextgenova28@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="text-[#C2A68C] mr-3" />
                      <a 
                        href="tel:+91 8789925958" 
                        className="hover:text-[#C2A68C] transition-colors relative z-10"
                        style={{ position: 'relative', zIndex: 10 }}
                      >
                        +91 8789925958
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaGlobe className="text-[#C2A68C] mr-3" />
                      <a 
                        href="https://nego-services.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-[#C2A68C] transition-colors relative z-10"
                        style={{ position: 'relative', zIndex: 10 }}
                      >
                        NextGenOva
                      </a>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="mt-8 relative z-10">
                    <h4 className="text-lg font-semibold mb-4 text-[#C2A68C]">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/next.genova/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-white hover:bg-[#E1306C] transition-all duration-300 transform hover:scale-110 cursor-pointer relative z-10" 
                        aria-label="Instagram"
                        style={{ position: 'relative', zIndex: 10 }}
                      >
                        <FaInstagram size={18} className="relative z-10" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/netgenova" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300 transform hover:scale-110 cursor-pointer relative z-10" 
                        aria-label="LinkedIn"
                        style={{ position: 'relative', zIndex: 10 }}
                      >
                        <FaLinkedin size={18} className="relative z-10" />
                      </a>
                      <a 
                        href="https://wa.me/918789925958" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-white hover:bg-[#25D366] transition-all duration-300 transform hover:scale-110 cursor-pointer relative z-10" 
                        aria-label="WhatsApp"
                        style={{ position: 'relative', zIndex: 10 }}
                      >
                        <FaWhatsapp size={18} className="relative z-10" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-[#333] overflow-hidden">
                  <h3 className="text-xl font-bold mb-4 text-[#C2A68C] flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Find Us on Map
                  </h3>
                  <div className="relative h-96 w-full rounded-xl overflow-hidden mt-2 bg-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-pulse text-gray-500">Loading map...</div>
                    </div>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.35823912499!2d75.8493118!3d26.9224452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0b0c1f9a5%3A0x4c1e8e1f0e3e3e1d!2sPoornima%20University!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%"
                      style={{ border: 0, position: 'relative', zIndex: 10 }} 
                      allowFullScreen
                      loading="eager"
                      title="Poornima University Location"
                      className="rounded-lg"
                      aria-label="Interactive Map of Our Location"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 z-20">
                      <motion.a 
                        href="https://maps.google.com/maps?q=Poornima+University&ll=26.9224452,75.8493118&z=15" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#C2A68C] hover:bg-[#E6D8C3] text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="mr-2" /> Open in Google Maps
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
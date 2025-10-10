"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mqayyqwl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Ready to discuss your electrical requirements?"
        image="/images/hero-van.jpg"
        height="h-[400px]"
      />

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-bg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-text">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-text mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                      placeholder="07702 071515"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-text mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition bg-white"
                    >
                      <option value="">Please select...</option>
                      <option value="Fleet Electrical Installations">Fleet Electrical Installations</option>
                      <option value="Vehicle Tracking Systems">Vehicle Tracking Systems</option>
                      <option value="Camera & DVR Systems">Camera & DVR Systems</option>
                      <option value="Lighting Installations">Lighting Installations</option>
                      <option value="Solar & Power Systems">Solar & Power Systems</option>
                      <option value="Motorhome Electrics">Motorhome Electrics</option>
                      <option value="Electrical Servicing">Electrical Servicing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition shadow-lg flex items-center justify-center gap-2 ${
                      status === 'submitting' 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-primary text-white hover:bg-opacity-90 hover:shadow-xl'
                    }`}
                    whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="font-semibold">Thank you! We'll be in touch soon.</p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="font-semibold">Something went wrong. Please try again or call us directly.</p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Details Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-text">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-text mb-1">Phone</h4>
                      <a 
                        href="tel:07702071515" 
                        className="text-muted hover:text-primary transition"
                      >
                        07702 071515
                      </a>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-text mb-1">Email</h4>
                      <a 
                        href="mailto:fealelectricalautomotiveltd@gmail.com" 
                        className="text-muted hover:text-primary transition break-all"
                      >
                        fealelectricalautomotiveltd@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-text mb-1">Address</h4>
                      <p className="text-muted">
                        Unit 4 & 5, The Courtyard<br />
                        Haslingden, BB4 4QN
                      </p>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-text mb-1">Opening Hours</h4>
                      <div className="text-muted space-y-1">
                        <p>Monday - Friday: 8am - 5pm</p>
                        <p>Saturday: By appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Why Contact FEAL?</h4>
                <ul className="space-y-3 opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Free quotes for fleet and commercial work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Mobile service available UK-wide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Fast turnaround on installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Full documentation and support</span>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <motion.div
                className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.8!2d-2.3227!3d53.7054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQyJzE5LjQiTiAywrAxOScyMS43Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FEAL Electrical Automotive Location"
                ></iframe>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Prefer to Call?</h2>
            <p className="text-xl mb-6 opacity-90">
              Speak directly with our team for immediate assistance
            </p>
            <motion.a
              href="tel:07702071515"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 inline mr-2" />
              07702 071515
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
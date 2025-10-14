"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { MapPin, Shield, BarChart3, Smartphone, Settings, CheckCircle, Wrench, Truck } from 'lucide-react';

const trackingSolutions = [
  {
    icon: MapPin,
    title: 'GPS Tracking Systems',
    description: 'Live location data, journey history, and instant alerts for theft, tampering, or unauthorised movement.'
  },
  {
    icon: Shield,
    title: 'Immobilisation Technology',
    description: 'Remote engine shutdown and restart capability for advanced security and insurance compliance.'
  },
  {
    icon: BarChart3,
    title: 'Fleet Management & Telematics',
    description: 'Driver behaviour, mileage, and fuel reports to improve efficiency and reduce costs.'
  },
  {
    icon: Smartphone,
    title: 'ScorpionTrack-Approved Installations',
    description: 'FEAL is an approved installer of ScorpionTrack systems — including S5 and S7 models with optional immobilisation and mobile app control.'
  },
  {
    icon: Settings,
    title: 'Subscription Management & Support',
    description: 'We handle activation, renewals, and ongoing system monitoring for your convenience.'
  }
];

const whyChoose = [
  'Thatcham-approved systems professionally installed and tested',
  'Full certification for insurance and compliance purposes',
  'Integration with fleet camera and electrical systems available',
  'Nationwide mobile fitting or in-house installations',
  'Trusted by operators, builders, and individual vehicle owners'
];

export default function TrackersPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="FEAL Trackers"
        subtitle="Advanced Vehicle Tracking, Telematics & Immobilisation Solutions"
        image="/images/hero-van.jpg"
        height="h-[450px]"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Protect. Monitor. Control.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              FEAL Trackers provides advanced vehicle tracking and telematics systems for fleets, businesses, and private owners across the UK.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              We supply and fit Thatcham-approved tracking and immobilisation technology, designed to protect vehicles, improve security, and optimise operational efficiency.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether you manage a nationwide fleet or a single vehicle, FEAL delivers fully installed systems with live data, driver monitoring, and recovery support — all backed by professional documentation and technical aftercare.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Complete Tracking Solutions Section */}
      <section className="py-20 bg-bg relative overflow-hidden">
        {/* Subtle background decoration */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <Container>
          <motion.h3 
            className="text-3xl font-bold text-center mb-4 text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Complete Tracking Solutions
          </motion.h3>
          <motion.p
            className="text-center text-muted text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide a full range of vehicle tracking systems and upgrades to suit every application — from single-vehicle protection to integrated fleet management platforms.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {trackingSolutions.slice(0, 3).map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-primary relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-primary mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.08 + 0.2
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="w-12 h-12" />
                    </motion.div>
                    
                    <h4 className="font-bold text-lg mb-3 text-text">
                      {solution.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* ScorpionTrack and Subscription - Full Width Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 relative z-10">
            {trackingSolutions.slice(3).map((solution, index) => {
              const IconComponent = solution.icon;
              const realIndex = index + 3;
              return (
                <motion.div
                  key={realIndex}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-primary relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-primary mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.08 + 0.2
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="w-12 h-12" />
                    </motion.div>
                    
                    <h4 className="font-bold text-lg mb-3 text-text">
                      {solution.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose FEAL Trackers Section */}
      <section className="py-16 bg-white border-t-2 border-accent">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-text text-center">
              Why Choose FEAL Trackers
            </h3>
            
            <div className="bg-bg p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {whyChoose.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-muted">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Integrated Security & Fleet Solutions Section */}
      <section className="py-16 bg-bg">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-text">
                Integrated Security & Fleet Solutions
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                FEAL Trackers integrates seamlessly with FEAL Fleet electrical and camera systems, providing total visibility and control.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Our team can design complete electrical and tracking setups for commercial fleets, ensuring all systems work together for safety, efficiency, and compliance.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Wrench className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-4 text-text">System Upgrades & Servicing</h4>
              <p className="text-muted mb-4">
                <strong>Already have a tracker installed?</strong>
              </p>
              <p className="text-muted mb-4">
                We offer full diagnostic testing, firmware updates, and replacement of legacy units to ensure ongoing reliability and insurance compliance.
              </p>
              <p className="text-muted">
                Our team can also integrate immobilisation or telematics upgrades into existing systems.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section with Contact Details */}
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
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay Connected. Stay Secure.
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              FEAL Trackers gives you 24/7 visibility, control, and confidence in your vehicles — wherever they are in the UK.
            </motion.p>

            {/* Contact Details */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg">📞 07702 071515</p>
              <p className="text-lg">✉ fealelectricalautomotiveltd@gmail.com</p>
              <p className="text-lg">📍 Unit 4–5, The Courtyard, Haslingden, BB4 4QN</p>
            </motion.div>
            
            <motion.a 
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
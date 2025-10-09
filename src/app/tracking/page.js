"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { MapPin, Shield, BarChart3, Gauge, CheckCircle, Settings } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Real-time Vehicle Tracking',
    description: 'Live location data for complete visibility of your fleet or vehicle.'
  },
  {
    icon: Shield,
    title: 'Anti-theft Protection & Recovery Support',
    description: 'Insurance-approved systems with rapid recovery assistance.'
  },
  {
    icon: BarChart3,
    title: 'Driver Behaviour & Mileage Reports',
    description: 'Detailed insights to improve efficiency and reduce costs.'
  },
  {
    icon: Gauge,
    title: 'Fleet & Specialist Vehicle Management',
    description: 'Comprehensive monitoring for commercial and specialist operations.'
  },
  {
    icon: CheckCircle,
    title: 'Insurance-Approved Systems',
    description: 'Certified tracking solutions that may reduce your premiums.'
  },
  {
    icon: Settings,
    title: 'Fully Installed & Configured',
    description: 'Professional installation and setup by our qualified engineers.'
  }
];

export default function TrackingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Vehicle Tracking & Telematics"
        subtitle="Stay connected. Stay protected."
        image="/images/hero-van.jpg"
        height="h-[400px]"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Professional Vehicle Tracking Solutions
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              FEAL supply, fit and service tracking and telematics systems for all vehicle types — from single vans and company cars to full national fleets, specialist builds and motorhomes.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Our <strong>vehicle tracking UK</strong> installations improve security, efficiency and visibility with live location data, route monitoring and driver insights. As a trusted <strong>auto electrician Haslingden</strong>, we deliver professional <strong>fleet electrical installations</strong> with complete documentation and support.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
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
            className="text-3xl font-bold text-center mb-16 text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Benefits of Vehicle Tracking
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-primary relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated background accent */}
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
                        duration: 0.4, 
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="w-12 h-12" />
                    </motion.div>
                    
                    <h4 className="font-bold text-lg mb-3 text-text">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom accent line that grows on hover */}
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

      {/* Who We Serve Section */}
      <section className="py-16 bg-white border-t-2 border-accent">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-text">
                For Every Vehicle Type
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Whether it's one van, a 100-vehicle fleet or a custom-built vehicle, FEAL provides the right tracking solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Single Vehicles & Company Cars</h4>
                    <p className="text-muted">Individual tracking for vans, cars and specialist vehicles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Full National Fleets</h4>
                    <p className="text-muted">Scalable solutions for commercial operations of any size</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Motorhomes & Leisure Vehicles</h4>
                    <p className="text-muted">Security and peace of mind for your investment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-primary text-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-4">Mobile Installation Available</h4>
              <p className="mb-4 opacity-90">
                Our <strong>mobile auto electrician Lancashire</strong> team can install tracking systems at your location:
              </p>
              <ul className="space-y-2 opacity-90 mb-6">
                <li>• Workshop installations in Haslingden</li>
                <li>• Mobile service across Lancashire & UK</li>
                <li>• Fleet installs at your depot</li>
                <li>• Minimal vehicle downtime</li>
              </ul>
              <p className="text-sm opacity-75">
                All installations include full setup, testing, and documentation. We also provide <strong>motorhome electrical upgrades</strong> alongside tracking installations.
              </p>
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
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Track Your Vehicles?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to discuss tracking and telematics solutions for your vehicle or fleet
            </motion.p>
            
            <motion.a 
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { Truck, Battery, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Projects"
        subtitle="Professional Electrical Solutions Across the UK"
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
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Our Work
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              FEAL delivers professional electrical installations, tracking systems, and off-grid power solutions across two core divisions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FEAL Fleet & FEAL Off-Grid Sections */}
      <section className="py-20 bg-bg">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* FEAL Fleet */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary group hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon Header */}
              <div className="bg-primary/5 p-8 text-center">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Truck className="w-20 h-20 text-primary mx-auto" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-text">FEAL Fleet</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Professional electrical installations for commercial vehicles, vans, and trucks. From camera systems and lighting to tracking and telematics — built for safety, compliance, and reliability.
                </p>
                
                <ul className="space-y-2 text-muted mb-6">
                  <li>• Vehicle tracking & telematics</li>
                  <li>• 360° camera & DVR systems</li>
                  <li>• Commercial lighting installations</li>
                  <li>• Fleet-wide electrical servicing</li>
                  <li>• Bespoke electrical builds</li>
                </ul>

                <motion.a
                  href="/fleet"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-md"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View FEAL Fleet
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* FEAL Off-Grid */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-accent group hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon Header */}
              <div className="bg-accent/5 p-8 text-center">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Battery className="w-20 h-20 text-accent mx-auto" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-text">FEAL Off-Grid</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Complete off-grid power systems for campervans, motorhomes, and leisure vehicles. Solar, batteries, inverters, and lighting — engineered for independence and reliability.
                </p>
                
                <ul className="space-y-2 text-muted mb-6">
                  <li>• Solar panel & charging systems</li>
                  <li>• Battery & inverter installations</li>
                  <li>• Split-charge & DC-DC systems</li>
                  <li>• Interior LED lighting</li>
                  <li>• Custom off-grid builds</li>
                </ul>

                <motion.a
                  href="/off-grid"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-md"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View FEAL Off-Grid
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-text">
              Professional Standards on Every Project
            </h3>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Every FEAL installation is fully documented with job numbers, testing certificates, and photographic proof for complete traceability and peace of mind.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              We serve fleet operators, bodybuilders, specialist vehicle owners, and leisure vehicle enthusiasts across the UK.
            </p>
          </motion.div>
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
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch to discuss your electrical requirements
            </motion.p>
            
            <motion.a 
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
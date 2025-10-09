"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Container from '@/components/Container';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="If it's electrical, we supply and fit it"
        image="/images/hero-van.jpg"
        height="h-[400px]"
      />

      {/* Services Grid */}
      <section className="py-20 bg-bg">
        <Container>
          <motion.div 
            className="text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-text">
              Complete Auto-Electrical Solutions
            </h2>
            <p className="text-muted text-lg">
              From telematics to lighting, we handle every aspect of commercial vehicle electrical installations with precision and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-text">
              Need a Custom Solution?
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Every fleet is different. We work with you to design and implement electrical systems tailored to your specific requirements.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 148, 207, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Requirements
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
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
                Professional Installation, Every Time
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Certified Installers</h4>
                    <p className="text-muted">Trained and experienced technicians on every job</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Quality Equipment</h4>
                    <p className="text-muted">We only supply and fit premium, reliable products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Full Documentation</h4>
                    <p className="text-muted">Complete records and certificates for every installation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-primary text-white p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-4">Fleet Managers & Bodybuilders</h4>
              <p className="mb-4 opacity-90">
                We understand the demands of fleet operations. Our installations are designed for:
              </p>
              <ul className="space-y-2 opacity-90">
                <li>• Minimal vehicle downtime</li>
                <li>• Reliable, long-term performance</li>
                <li>• Clear documentation for compliance</li>
                <li>• Scalable solutions for growing fleets</li>
              </ul>
              <motion.a
                href="/fleet"
                className="inline-block mt-6 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Fleet Partnerships
              </motion.a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
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
        subtitle="If it's electrical, we supply, fit and service it"
        image="/images/hero-van.jpg"
        height="h-[400px]"
      />

      {/* Services Introduction */}
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
              Complete Electrical Solutions
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              We provide complete electrical solutions for fleets, specialist vehicles and leisure vehicles. As your trusted <strong>auto electrician Haslingden</strong>, we deliver professional <strong>fleet electrical installations</strong> and <strong>motorhome electrical upgrades</strong> with full documentation and support.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-bg">
        <Container>
          <motion.h3 
            className="text-2xl font-bold text-center mb-12 text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services Include:
          </motion.h3>

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
        </Container>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-text">
              Who We Work With
            </h3>
            <p className="text-lg text-muted leading-relaxed">
              We work primarily with fleet, commercial and specialist operators, while also supporting tradespeople and motorhome owners who want professional, documented electrical work. Our <strong>mobile auto electrician Lancashire</strong> team brings workshop-quality service to your location, with <strong>vehicle tracking UK</strong> installations and complete electrical systems.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-bg border-t-2 border-accent">
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
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Certified Installers</h4>
                    <p className="text-muted">Trained and experienced technicians on every job</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Quality Equipment</h4>
                    <p className="text-muted">We only supply and fit premium, reliable products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Full Documentation</h4>
                    <p className="text-muted">Complete records and certificates for every installation</p>
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
                className="inline-block mt-6 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Fleet Partnerships
              </motion.a>
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
              Need a Custom Solution?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every fleet is different. We work with you to design and implement electrical systems tailored to your specific requirements.
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
              Discuss Your Requirements
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
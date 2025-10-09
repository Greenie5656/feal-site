"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { Sun, Battery, Zap, Lightbulb, Shield, Wrench } from 'lucide-react';

const installations = [
  {
    icon: Sun,
    title: 'Solar Panel & Charging Systems',
    description: 'Off-grid power solutions with solar panels, charge controllers and battery management.'
  },
  {
    icon: Battery,
    title: 'Dual Battery & Split-Charge Setups',
    description: 'Professional dual-battery installations to power your leisure systems independently.'
  },
  {
    icon: Zap,
    title: 'Inverters & 12V/240V Power Management',
    description: 'Complete power systems for running appliances and devices on the road.'
  },
  {
    icon: Lightbulb,
    title: 'Interior & External Lighting',
    description: 'Energy-efficient LED lighting for living areas, load spaces and exterior.'
  },
  {
    icon: Shield,
    title: 'Vehicle Tracking & Security Systems',
    description: 'Protect your investment with GPS tracking and alarm installations.'
  },
  {
    icon: Wrench,
    title: 'Electrical Servicing & Upgrades',
    description: 'Maintenance, diagnostics and system upgrades for existing installations.'
  }
];

export default function MotorhomesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Motorhomes & Campervans"
        subtitle="Power, lighting and comfort — professionally installed"
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
              Professional Electrical Systems for Your Motorhome
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Alongside our fleet and specialist vehicle work, we also supply, fit and service electrical systems for motorhomes and campervans.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether you're upgrading your solar setup, adding a reversing camera or fitting a full off-grid system, FEAL applies the same professional standards as our <strong>fleet electrical installations</strong>. As a trusted <strong>auto electrician Haslingden</strong>, we deliver expert <strong>motorhome electrical upgrades</strong> with complete documentation and quality assurance.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Installations & Services Section */}
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
            Typical Installations & Services
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {installations.map((installation, index) => {
              const IconComponent = installation.icon;
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
                      {installation.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {installation.description}
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

      {/* Professional Standards Section */}
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
                Fleet-Grade Standards for Every Motorhome
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                All installations are documented, tested and dual signed-off — the same process we use for commercial fleet work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Professional Installation</h4>
                    <p className="text-muted">Qualified auto-electricians with commercial vehicle experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Full Documentation</h4>
                    <p className="text-muted">Complete records, diagrams and certifications provided</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Quality Components</h4>
                    <p className="text-muted">Premium products built to last in demanding conditions</p>
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
              <h4 className="text-2xl font-bold mb-4">Workshop & Mobile Service</h4>
              <p className="mb-4 opacity-90">
                Our <strong>mobile auto electrician Lancashire</strong> team brings professional service to your location:
              </p>
              <ul className="space-y-2 opacity-90 mb-6">
                <li>• Workshop installations in Haslingden</li>
                <li>• Mobile service across the UK</li>
                <li>• Home driveway installs available</li>
                <li>• Storage site and dealership visits</li>
              </ul>
              <p className="text-sm opacity-75">
                We also install <strong>vehicle tracking UK</strong> systems to protect your motorhome investment, alongside full electrical upgrades and servicing.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Choose FEAL Section */}
      <section className="py-16 bg-bg">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-text">
              Why Motorhome Owners Choose FEAL
            </h3>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Unlike typical auto-electricians, we bring commercial fleet experience to every motorhome project. That means better planning, higher quality work, and the confidence that your electrical system is safe, reliable and built to last.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="font-bold text-lg mb-2 text-primary">Commercial Experience</h4>
                <p className="text-muted text-sm">Systems built to fleet standards for long-term reliability</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="font-bold text-lg mb-2 text-primary">Proper Documentation</h4>
                <p className="text-muted text-sm">Full installation records for warranty and resale value</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="font-bold text-lg mb-2 text-primary">Professional Service</h4>
                <p className="text-muted text-sm">Clear quotes, timely work, and ongoing support</p>
              </motion.div>
            </div>
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
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Upgrade Your Motorhome?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to discuss your electrical requirements and get a professional quote
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
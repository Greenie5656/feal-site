"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { Compass, Users, Award, MapPin, Target } from 'lucide-react';

const values = [
  {
    letter: 'F',
    word: 'Fairness',
    description: 'Honest pricing and transparent service on every job'
  },
  {
    letter: 'E',
    word: 'Efficiency',
    description: 'Fast turnaround without compromising on quality'
  },
  {
    letter: 'A',
    word: 'Accuracy',
    description: 'Precision installations with full documentation'
  },
  {
    letter: 'L',
    word: 'Loyalty',
    description: 'Long-term partnerships built on trust and reliability'
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About FEAL"
        subtitle="Electrical Solutions You Can Trust"
        image="/images/hero-van.jpg"
        height="h-[400px]"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text text-center">
              Specialist Auto-Electrical Solutions
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              FEAL Electrical Automotive Ltd provides professional electrical, tracking, and off-grid installation services across the UK. Based in Haslingden, Lancashire, we work with fleet operators, specialist vehicle builders, and leisure vehicle owners who demand quality, compliance, and reliability.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Our team combines technical expertise with precise workmanship to deliver installations built for performance and long-term dependability.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission Statement Section - NEW */}
      <section className="py-20 bg-bg relative overflow-hidden">
        {/* Subtle background decoration */}
        <motion.div
          className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <Container>
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Target className="w-10 h-10 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-text text-center">
                Our Mission
              </h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-accent relative">
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <div className="relative z-10 space-y-6">
                <p className="text-xl md:text-2xl text-text leading-relaxed font-semibold">
                  FEAL Electrical Automotive Ltd exists to set the benchmark for quality and professionalism in auto-electrical installation and support.
                </p>

                <p className="text-lg text-muted leading-relaxed">
                  Our mission is to deliver reliable, compliant, and fully documented electrical solutions for fleets, commercial vehicles, and specialist builds across the UK.
                </p>

                <div className="pt-4 border-t-2 border-accent/20">
                  <p className="text-lg text-muted leading-relaxed">
                    We believe success starts with people — our customers and our team. By investing in skill, pride, and purpose, we aim to build a business that transforms standards in our industry and creates lasting opportunities for everyone involved.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Background Section */}
      <section className="py-20 bg-white relative overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-primary" />
                <h3 className="text-3xl font-bold text-text">
                  Our Background
                </h3>
              </div>
              <p className="text-lg text-muted leading-relaxed mb-4">
                FEAL was founded by the team behind <strong>TruNorth Refrigeration</strong>, one of the North West's leading refrigeration specialists for commercial fleet vehicles.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-4">
                After years of working alongside major bodybuilders and operators, we saw the need for a dedicated auto-electrical division focused on precision, traceability and fast turnaround.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                FEAL carries forward the same reliability and workmanship that made TruNorth a trusted name in the refrigeration industry.
              </p>
            </motion.div>

            <motion.div
              className="bg-primary text-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-4">Built on Experience</h4>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span>Years of commercial fleet expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span>Trusted by major bodybuilders and operators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span>Precision and traceability as standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span>Fast turnaround without compromise</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What FEAL Stands For Section */}
      <section className="py-16 bg-bg border-t-2 border-accent">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Compass className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-bold text-text">
                What FEAL Stands For
              </h3>
            </div>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-4">
              FEAL stands for <strong>Fleet Electrical Automotive Ltd</strong> — a name that defines exactly what we do.
            </p>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              It also represents our values: <strong>Fairness, Efficiency, Accuracy and Loyalty.</strong>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-primary hover:shadow-xl transition-all relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10 text-center">
                  <motion.div 
                    className="text-6xl font-bold text-primary mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.08 + 0.2
                    }}
                  >
                    {value.letter}
                  </motion.div>
                  <h4 className="font-bold text-xl mb-2 text-text">
                    {value.word}
                  </h4>
                  <p className="text-muted text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted leading-relaxed">
              The compass in our logo symbolises direction and dependability — qualities that guide every installation and service we deliver.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Workshop Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-bg p-8 rounded-lg shadow-lg border-t-4 border-primary"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-text">Our Workshop</h3>
              <p className="text-lg text-muted mb-6">
                Our workshop at <strong>Unit 4 & 5, The Courtyard, Haslingden (BB4 4QN)</strong> is fully equipped for both individual vehicles and multi-fleet projects.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-muted">Fully equipped workshop facilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-muted">Individual vehicle and fleet capacity</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-muted">Convenient Haslingden location</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-muted">Mobile service available UK-wide</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-text">
                Quality as Procedure
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Every installation is checked, photographed and dual signed-off by qualified auto-electricians — so quality isn't a promise, it's procedure.
              </p>
              <div className="bg-primary text-white p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Our Process Guarantees:</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• Job numbers linked to vehicle VIN and registration</li>
                  <li>• Photographic documentation at every stage</li>
                  <li>• Dual sign-off by Lead Installer and QC Engineer</li>
                  <li>• Complete records for audit and warranty</li>
                </ul>
              </div>
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
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experience the FEAL Difference
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional auto-electrical services built on family values and commercial expertise
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
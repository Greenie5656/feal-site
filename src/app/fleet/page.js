"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { FileText, Users, Camera, Wrench, MapPin, MessageSquare } from 'lucide-react';

const partnershipFeatures = [
  {
    icon: FileText,
    title: 'Job Tracking for Each Vehicle',
    description: 'Unique job numbers linked to VIN, registration and purchase orders for complete traceability.'
  },
  {
    icon: Users,
    title: 'Dual Technician Sign-Off',
    description: 'Lead Installer and QC Engineer approval on every vehicle before release.'
  },
  {
    icon: Camera,
    title: 'Full Photographic Documentation',
    description: 'Complete visual records at every stage for audit, warranty and compliance.'
  },
  {
    icon: Wrench,
    title: 'Preventative Servicing & Support',
    description: 'Ongoing maintenance and diagnostics to keep your fleet running reliably.'
  },
  {
    icon: MapPin,
    title: 'Flexible On-Site or Workshop Installs',
    description: 'Our mobile auto electrician Lancashire team or in-house at our Haslingden workshop.'
  },
  {
    icon: MessageSquare,
    title: 'Fast Turnaround & Reliable Communication',
    description: 'Clear timelines, regular updates and responsive support throughout every project.'
  }
];

export default function FleetPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Fleet & Specialist Vehicle Partnerships"
        subtitle="Your Electrical Partner for Fleet and Specialist Vehicle Success"
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Scalable Electrical Solutions for Your Fleet
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              We understand the demands of modern fleet and specialist vehicle operations — tight schedules, compliance requirements and the need for dependable support.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              FEAL provides a scalable supply, fit and servicing solution that integrates seamlessly with your production or maintenance schedule. As a trusted <strong>auto electrician Haslingden</strong>, we deliver professional <strong>fleet electrical installations</strong> with complete documentation, whether you need in-house installs or mobile fitting at your site.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Partnership Model Section */}
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
            Our Partnership Model
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {partnershipFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
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
                      {feature.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
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

          <motion.div
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-text font-semibold">
              From one van to one hundred, FEAL delivers traceable, service-backed quality you can rely on.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Who We Work With Section */}
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
                Trusted by Fleet Operators & Bodybuilders
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                We work with national fleet operators, specialist vehicle builders, and commercial operations who demand consistent quality and reliable turnaround.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Fleet Managers</h4>
                    <p className="text-muted">Multi-vehicle installations with consistent standards across your fleet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Bodybuilders & Converters</h4>
                    <p className="text-muted">Integration with your production schedule and quality standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-semibold text-lg text-text">Specialist Vehicle Operators</h4>
                    <p className="text-muted">Custom electrical solutions for unique operational requirements</p>
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
              <h4 className="text-2xl font-bold mb-4">Flexible Service Options</h4>
              <p className="mb-4 opacity-90">
                We deliver with precision and consistency, whether at our workshop or your location:
              </p>
              <ul className="space-y-3 opacity-90 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Workshop Installations:</strong> Fully equipped facility in Haslingden for complex builds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Mobile Service:</strong> Our mobile auto electrician Lancashire team brings workshop-quality to your site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Depot Installations:</strong> Work alongside your team at your facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">•</span>
                  <span><strong>Bodybuilder Integration:</strong> Seamless fit with your production flow</span>
                </li>
              </ul>
              <p className="text-sm opacity-75">
                From <strong>vehicle tracking UK</strong> systems to complete electrical conversions, we deliver professional <strong>fleet electrical installations</strong> with minimal downtime.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What We Install Section */}
      <section className="py-16 bg-bg">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-text text-center">
              Comprehensive Fleet Electrical Services
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="font-bold text-xl mb-4 text-primary">Installations</h4>
                <ul className="space-y-2 text-muted">
                  <li>• Vehicle tracking and telematics systems</li>
                  <li>• 360° camera and DVR installations</li>
                  <li>• Reverse and side marker lighting</li>
                  <li>• Interior and load-area LED lighting</li>
                  <li>• Solar and auxiliary power systems</li>
                  <li>• Dual-battery and split-charge setups</li>
                  <li>• Custom electrical builds and retrofits</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="font-bold text-xl mb-4 text-primary">Servicing & Support</h4>
                <ul className="space-y-2 text-muted">
                  <li>• Preventative electrical maintenance</li>
                  <li>• Diagnostics and fault-finding</li>
                  <li>• System repairs and upgrades</li>
                  <li>• Fleet-wide servicing programs</li>
                  <li>• Emergency callout support</li>
                  <li>• Warranty and documentation</li>
                  <li>• Technical consultation</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-text leading-relaxed">
                <strong>Need something specific?</strong> We work with you to design and implement electrical solutions tailored to your fleet's exact operational requirements.
              </p>
            </motion.div>
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
              Partner with FEAL for Your Fleet
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discuss your fleet's electrical requirements and discover how we can support your operations
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
              Discuss Fleet Partnership
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
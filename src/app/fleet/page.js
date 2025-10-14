"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { FileText, Users, Camera, Wrench, MapPin, MessageSquare, Truck, Building2, Settings } from 'lucide-react';

const accountabilityFeatures = [
  {
    icon: FileText,
    title: 'Job Tracking for Each Vehicle',
    description: 'Each vehicle receives a unique job number linked to VIN, registration, and purchase order for complete traceability.'
  },
  {
    icon: Users,
    title: 'Dual Technician Sign-Off',
    description: 'Lead Installer and QC Engineer approval on every vehicle before release.'
  },
  {
    icon: Camera,
    title: 'Full Photographic Documentation',
    description: 'Complete visual records at every stage for audit, warranty, and compliance.'
  },
  {
    icon: Wrench,
    title: 'Preventative Servicing & Support',
    description: 'Ongoing maintenance and diagnostics to keep your fleet running reliably.'
  },
  {
    icon: MapPin,
    title: 'Flexible On-Site or Workshop Installs',
    description: 'Mobile fitting anywhere in the UK, or workshop builds at our Haslingden HQ.'
  },
  {
    icon: MessageSquare,
    title: 'Fast Turnaround & Reliable Communication',
    description: 'Clear timelines, regular updates, and responsive support throughout every project.'
  }
];

export default function FleetPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="FEAL Fleet"
        subtitle="Electrical Systems Engineered for Commercial Performance"
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
              Fleet Electrical Solutions You Can Rely On
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              FEAL Fleet delivers professional electrical installations for vans, trucks, and specialist commercial vehicles — built for safety, compliance, and reliability.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              We understand the pressures of modern fleet operations: strict deadlines, site compliance, and the need for dependable aftercare.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Our scalable supply, fit, and servicing solutions integrate seamlessly with your production or maintenance schedule.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              FEAL delivers fully documented installations across the UK — available as in-house builds or mobile fitting at your site.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Built for Fleet Accountability Section */}
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
            Built for Fleet Accountability
          </motion.h3>
          <motion.p
            className="text-center text-muted text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Every FEAL installation is backed by a structured process that ensures consistency, traceability, and safety from start to finish.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {accountabilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
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
                      {feature.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
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
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl text-text font-semibold">
              From one van to one hundred, FEAL delivers traceable, service-backed quality you can rely on.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-t-2 border-accent">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-text">
              Trusted by Fleet Operators & Bodybuilders
            </h3>
            <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              We work with national fleet operators, specialist vehicle builders, and commercial operations who demand consistent quality and reliable turnaround.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-text">Fleet Managers</h4>
              <p className="text-muted">Multi-vehicle installations with consistent standards across every vehicle.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-text">Bodybuilders & Converters</h4>
              <p className="text-muted">Integration with your production schedule and quality standards.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-text">Specialist Vehicle Operators</h4>
              <p className="text-muted">Custom electrical solutions tailored to unique operational requirements.</p>
            </motion.div>
          </div>

          {/* Flexible Service Options */}
          <motion.div
            className="bg-primary text-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-2xl font-bold mb-4">Flexible Service Options</h4>
            <p className="mb-4 opacity-90">
              We deliver precision installations wherever your operation requires them:
            </p>
            <ul className="space-y-3 opacity-90 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-accent text-xl">•</span>
                <span><strong>Workshop Installations</strong> – Fully equipped facility in Haslingden for complex builds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent text-xl">•</span>
                <span><strong>Mobile Service</strong> – Our mobile team delivers workshop-quality work at your site.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent text-xl">•</span>
                <span><strong>Depot Installations</strong> – Work alongside your team at your facility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent text-xl">•</span>
                <span><strong>Bodybuilder Integration</strong> – Seamless coordination with your production flow.</span>
              </li>
            </ul>
            <p className="text-sm opacity-75">
              From advanced tracking systems to full electrical conversions, FEAL provides professional fleet installations with minimal downtime.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Comprehensive Systems Section */}
      <section className="py-16 bg-bg">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-text text-center">
              Comprehensive Fleet Electrical Systems & Servicing
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="font-bold text-xl mb-4 text-primary">Installations</h4>
                <ul className="space-y-2 text-muted">
                  <li>• Vehicle tracking and telematics systems</li>
                  <li>• 360° camera and DVR systems</li>
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
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4 className="font-bold text-xl mb-4 text-primary">Servicing & Support</h4>
                <ul className="space-y-2 text-muted">
                  <li>• Preventative electrical maintenance</li>
                  <li>• Diagnostics and fault-finding</li>
                  <li>• System repairs and upgrades</li>
                  <li>• Fleet-wide servicing programmes</li>
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
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-text leading-relaxed">
                <strong>Need something specific?</strong> We design and implement bespoke electrical solutions tailored to your fleet's exact operational requirements.
              </p>
            </motion.div>
          </motion.div>
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
              Partner with FEAL for Your Fleet
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Speak to our team about your next installation project or nationwide service contract.
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
              Get In Touch
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
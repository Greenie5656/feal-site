"use client";
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { Sun, Battery, Zap, Lightbulb, Camera, Wrench, CheckCircle, MapPin, Truck, Building } from 'lucide-react';

const offGridExpertise = [
  {
    icon: Sun,
    title: 'Solar & Charging Systems',
    description: 'Roof-mounted or portable solar arrays with high-efficiency charge controllers and monitoring.'
  },
  {
    icon: Battery,
    title: 'Battery & Inverter Installations',
    description: 'Custom 12V and 240V systems for continuous, safe, and reliable power on the move.'
  },
  {
    icon: Zap,
    title: 'Split-Charge & DC-DC Systems',
    description: 'Automatic charging from vehicle alternators to maximise battery performance.'
  },
  {
    icon: Lightbulb,
    title: 'Interior & Ambient Lighting',
    description: 'LED lighting layouts designed for energy efficiency and comfort.'
  },
  {
    icon: Camera,
    title: 'Camera & Parking Systems',
    description: 'Rear-view and multi-camera setups for safety and visibility.'
  },
  {
    icon: Wrench,
    title: 'Electrical Health Checks & Servicing',
    description: 'Diagnostic testing, system repairs, and upgrade options for existing setups.'
  }
];

const whyChoose = [
  'Professionally installed systems with full testing and certification',
  'Clean, secure wiring looms designed for long-term safety',
  'Modern, efficient components from trusted manufacturers',
  'Options for new conversions or upgrades to existing builds',
  'Mobile installation service or workshop fitting available nationwide'
];

export default function OffGridPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="FEAL Off-Grid"
        subtitle="Power Anywhere — Complete Electrical Systems for Campervans, Motorhomes & Leisure Vehicles"
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
              Off-Grid Power Systems Built for Reliability
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              FEAL Off-Grid provides professional electrical supply, fit, and servicing solutions for campervans, motorhomes, caravans, and specialist leisure vehicles across the UK.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Our systems are engineered for independence, safety, and long-term reliability — from full solar installations to battery and inverter setups that keep you powered wherever the road takes you.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Every FEAL installation is carried out to professional standards with full documentation, safety testing, and aftercare support.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Off-Grid Electrical Expertise Section */}
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
            Off-Grid Electrical Expertise
          </motion.h3>
          <motion.p
            className="text-center text-muted text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We design and install complete power systems to meet the specific demands of off-grid living and leisure travel.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {offGridExpertise.map((item, index) => {
              const IconComponent = item.icon;
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
                      {item.title}
                    </h4>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
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
        </Container>
      </section>

      {/* Why Choose FEAL Off-Grid Section */}
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
              Why Vehicle Owners Choose FEAL Off-Grid
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

      {/* Bespoke Power Solutions Section */}
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
                Bespoke Power Solutions
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Whether you're building a new conversion or upgrading your existing van, FEAL Off-Grid designs systems tailored to your exact layout, usage, and travel requirements.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                We can integrate solar, batteries, inverters, and vehicle charging systems into one seamless electrical setup — fully documented and built to withstand the demands of off-grid travel.
              </p>
            </motion.div>

            <motion.div
              className="bg-primary text-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-2xl font-bold mb-4">Our Installation Options</h4>
              <ul className="space-y-4 opacity-90">
                <li className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Workshop Installations</strong> – Complex or full-system builds completed at our Haslingden facility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Mobile Service</strong> – Our mobile engineers bring professional fitting to your location anywhere in the UK.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Custom Builds</strong> – Designed for new conversions, restorations, and bespoke leisure projects.
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Commitment Section */}
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
              Our Commitment to Quality
            </h3>
            <p className="text-lg text-muted leading-relaxed mb-6">
              FEAL Off-Grid uses only high-quality components and safe installation practices, ensuring every system meets our internal engineering and compliance standards.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Each project is fully documented with job numbers, testing certificates, and photographic proof for complete peace of mind.
            </p>
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
              Power Your Next Journey
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Speak to our team about your off-grid power or electrical installation requirements today.
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
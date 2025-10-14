"use client";
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import FeatureBox from '@/components/FeatureBox';
import Container from '@/components/Container';
import { features, partners } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero-van.jpg)` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            FEAL Electrical Automotive Ltd
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-4 max-w-4xl text-gray-100 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lancashire
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl mb-6 max-w-3xl text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            FEAL Electrical Automotive Ltd<br />
            Delivering professional electrical systems and installation services for fleets, commercial builds, and off-grid leisure vehicles.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center text-base md:text-lg mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="tel:07702071515" className="flex items-center gap-2 hover:text-accent transition font-semibold">
              <Phone className="w-5 h-5" /> 07702 071515
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="tel:07850172376" className="flex items-center gap-2 hover:text-accent transition font-semibold">
              <Phone className="w-5 h-5" /> 07850 172376
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="mailto:fealelectricalautomotiveltd@gmail.com" className="flex items-center gap-2 hover:text-accent transition font-semibold">
              <Mail className="w-5 h-5" /> fealelectricalautomotiveltd@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Choose FEAL?
            </motion.h2>
            <motion.p 
              className="text-muted text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specialist electrical solutions for fleets, commercial vehicles, and off-grid systems — trusted by operators and owners across the UK.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, index) => (
              <FeatureBox 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted By Leading Fleets
          </motion.h2>

          <motion.p
            className="text-center text-muted text-lg mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted by national fleet operators including Wellocks, Sainsbury's, Brakes and Solomon Commercials.
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="text-muted text-2xl font-semibold hover:text-primary transition cursor-default"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  color: '#2d94cf',
                  transition: { duration: 0.2 }
                }}
              >
                {partner}
              </motion.div>
            ))}
          </div>

          {/* Animated divider line */}
          <motion.div
            className="mt-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </Container>
      </section>

      {/* Supporting All Vehicle Owners Section */}
      <section className="py-16 bg-bg">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Supporting All Vehicle Owners
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              While our main focus is on fleets and specialist vehicles, we also support tradespeople, individual van owners and motorhome users. From cameras and lighting to solar or tracking systems, FEAL brings the same high standards to every job.
            </motion.p>
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
              Ready to Get Started?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to discuss your electrical requirements
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
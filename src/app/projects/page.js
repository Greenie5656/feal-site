"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const recentWork = [
  "Wellocks Mercedes Fleet – 360° camera and DVR systems",
  "Brakes Vans – LED lighting upgrades",
  "Solomon Commercials – custom electrical installs",
  "Sainsbury's Fleet – electrical prep and safety lighting",
  "Specialist Vehicle Conversion – electrical fit-out",
  "Motorhome – solar and tracking system"
];

const projects = [
  {
    id: 1,
    image: "/images/projects/1.jpg",
    title: "Smart Network & Power Distribution",
    description: "Precision network and power distribution setup installed for vehicle systems integration — part of FEAL's smart wiring solutions for fleet and specialist builds."
  },
  {
    id: 2,
    image: "/images/projects/2.jpg",
    title: "Professional Internal Wiring",
    description: "Clean and secure internal wiring installation for a commercial vehicle — demonstrating FEAL's attention to detail and adherence to professional routing standards."
  },
  {
    id: 3,
    image: "/images/projects/3.jpg",
    title: "Dual Lithium Battery System",
    description: "Dual lithium battery installation with power management and isolation system — designed for efficient energy use in motorhomes and specialist vehicles."
  },
  {
    id: 4,
    image: "/images/projects/4.jpg",
    title: "Complete Motorhome Electrical Fit-Out",
    description: "Completed motorhome electrical fit-out including lighting, TV lift mechanism, power sockets and integrated kitchen electrics — comfort powered by precision."
  },
  {
    id: 5,
    image: "/images/projects/5.jpg",
    title: "Inverter & Charging System",
    description: "Professional inverter and charging system installation — FEAL ensures safe, efficient 12V to 240V conversion for commercial and leisure vehicles."
  },
  {
    id: 6,
    image: "/images/projects/6.jpg",
    title: "High-End Leisure Vehicle Interior",
    description: "High-end leisure vehicle interior showcasing FEAL's hidden electrical design — seamless power integration for modern off-grid living."
  },
  {
    id: 7,
    image: "/images/projects/7.jpg",
    title: "Labelled Distribution Board",
    description: "Fully labelled and tested distribution board — part of FEAL's safety-first approach to electrical system installation and servicing."
  },
  {
    id: 8,
    image: "/images/projects/8.jpg",
    title: "Under-Floor Electrical Control",
    description: "Compact electrical control system fitted beneath the vehicle floor — maximising space while maintaining easy access for servicing and diagnostics."
  },
  {
    id: 9,
    image: "/images/projects/9.jpg",
    title: "12V Relay Bank System",
    description: "12V relay bank installation providing controlled power distribution across multiple onboard systems for specialist or emergency vehicles."
  },
  {
    id: 10,
    image: "/images/projects/10.jpg",
    title: "Intelligent Control Module",
    description: "Intelligent control module with illuminated fuse diagnostics — installed as part of FEAL's advanced wiring and safety systems for commercial vehicles."
  }
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (index) => {
    setImageIndex(index);
    setSelectedImage(projects[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % projects.length;
    setImageIndex(newIndex);
    setSelectedImage(projects[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (imageIndex - 1 + projects.length) % projects.length;
    setImageIndex(newIndex);
    setSelectedImage(projects[newIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Projects & Gallery"
        subtitle="Recent electrical installations across fleet, specialist and leisure vehicles"
        image="/images/hero-van.jpg"
        height="h-[400px]"
      />

      {/* Recent Work Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Recent Work
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              As a trusted <strong>auto electrician Haslingden</strong>, we deliver professional <strong>fleet electrical installations</strong>, <strong>vehicle tracking UK</strong> systems, and <strong>motorhome electrical upgrades</strong> with complete documentation and quality assurance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {recentWork.map((work, index) => (
              <motion.div
                key={index}
                className="bg-bg p-4 rounded-lg border-l-4 border-primary hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-muted font-medium">{work}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-muted mt-8 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every project is fully photographed and dual signed-off for quality assurance.
          </motion.p>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-bg">
        <Container>
          <motion.h3 
            className="text-3xl font-bold text-center mb-16 text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Project Gallery
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all bg-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                onClick={() => openLightbox(index)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View text on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">View Project</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-accent transition z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-accent transition z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full h-[70vh] mb-6">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 leading-relaxed">{selectedImage.description}</p>
                <p className="text-accent text-sm mt-3">
                  Image {imageIndex + 1} of {projects.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Start Your Project?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to discuss your electrical requirements and see how FEAL can help
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
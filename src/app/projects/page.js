"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import { Truck, Battery, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Project data organized by category
const offGridProjects = [
  {
    id: 1,
    image: '/images/projects/off_grid_1.jpg',
    title: 'Modern Campervan Interior',
    description: 'Modern, space-efficient campervan interior featuring a sleek built-in kitchen with twin gas hobs, LED lighting, and a pop-up flat-screen display. A clean and practical example of FEAL\'s electrical craftsmanship, combining functionality with a refined, contemporary design for off-grid living.',
    category: 'Off-Grid'
  },
  {
    id: 2,
    image: '/images/projects/off_grid_2.jpg',
    title: 'Victron Power System',
    description: 'Professional Victron off-grid electrical installation featuring dual 12.8V 200Ah lithium batteries, smart chargers, and precision wiring for efficient power management. A clean, reliable setup engineered by FEAL to deliver dependable off-grid performance for campervans, motorhomes, and specialist vehicles.',
    category: 'Off-Grid'
  },
  {
    id: 3,
    image: '/images/projects/off_grid_3.jpg',
    title: 'Hager Consumer Unit Installation',
    description: 'Precision-installed Hager consumer unit showcasing FEAL\'s commitment to safe, compliant electrical distribution. Each circuit is neatly wired and labelled, providing reliable protection and professional-grade power management for off-grid, fleet, and specialist vehicle systems.',
    category: 'Off-Grid'
  }
];

const fleetProjects = [
  {
    id: 4,
    images: [
      '/images/projects/fleet_1_1.jpg',
      '/images/projects/fleet_1_2.jpg',
      '/images/projects/fleet_1_3.jpg'
    ],
    title: 'Multi-Vehicle Fleet Installation',
    description: 'Fleet vans lined up in FEAL\'s workshop, each prepared for electrical installation and system integration. The image reflects FEAL\'s capability to handle multiple vehicles simultaneously with precision, efficiency, and a focus on consistent, professional standards across every project.',
    category: 'Fleet'
  },
  {
    id: 5,
    image: '/images/projects/fleet_2.jpg',
    title: 'Precision Wiring & Fuse Assembly',
    description: 'Detailed view of FEAL\'s precision wiring and fuse assembly, demonstrating clean routing, high-current protection, and professional-grade component integration. Built for reliability and safety, this installation reflects FEAL\'s commitment to quality workmanship and long-term system performance.',
    category: 'Fleet'
  },
  {
    id: 6,
    image: '/images/projects/fleet_3.jpg',
    title: 'High-Quality System Installation',
    description: 'High-quality electrical system installation by FEAL, featuring precision-mounted components, neatly routed cabling, and secure fuse protection. Designed for performance and safety, this setup reflects FEAL\'s meticulous attention to detail and engineering standards across every project.',
    category: 'Fleet'
  },
  {
    id: 7,
    image: '/images/projects/fleet_4.jpg',
    title: 'Rear Corner Lighting & Sensor Installation',
    description: 'Close-up of a rear corner installation featuring FEAL\'s integrated lighting and sensor fitting. The clean finish and precision mounting demonstrate FEAL\'s focus on detail, durability, and professional integration for fleet and specialist vehicle builds.',
    category: 'Fleet'
  },
  {
    id: 8,
    images: [
      '/images/projects/fleet_5_1.jpg',
      '/images/projects/fleet_5_2.jpg',
      '/images/projects/fleet_5_3.jpg',
      '/images/projects/fleet_5_4.jpg'
    ],
    title: 'LED Work Light & Rear Lighting System',
    description: 'Rear vehicle setup featuring three mounted LED work lights, integrated tail and marker lights, and number plate illumination. All wiring is professionally routed and sealed, providing a clean, durable, and reliable electrical installation designed for daily operational use.',
    category: 'Fleet'
  },
  {
    id: 9,
    image: '/images/projects/fleet_6.jpg',
    title: 'Interior LED Lighting Installation',
    description: 'Interior electrical installation featuring bright LED ceiling lighting and door-activated switches for automatic illumination. Wiring is neatly routed and securely clipped along the upper panel, providing a clean, reliable, and professionally finished electrical setup within the insulated compartment.',
    category: 'Fleet'
  }
];

export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project, imageIndex = 0) => {
    setSelectedImage(project);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImage.images.length) % selectedImage.images.length);
    }
  };

  const getCurrentImage = () => {
    if (!selectedImage) return '';
    return selectedImage.images ? selectedImage.images[currentImageIndex] : selectedImage.image;
  };

  const hasMultipleImages = () => {
    return selectedImage?.images && selectedImage.images.length > 1;
  };

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

      {/* FEAL Fleet & FEAL Off-Grid Overview Sections */}
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

      {/* Project Gallery Divider */}
      <section className="py-12 bg-white">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-text">
              Featured Projects
            </h2>
            <p className="text-lg text-muted">
              Explore our recent installations showcasing FEAL's precision engineering and professional craftsmanship
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FEAL Off-Grid Projects Gallery */}
      <section className="py-20 bg-bg relative overflow-hidden">
        {/* Subtle background decoration */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
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

        <Container>
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Battery className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text">FEAL Off-Grid Projects</h2>
              <p className="text-muted">Campervan, motorhome and off-grid power installations</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {offGridProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border-t-4 border-accent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                whileHover={{ y: -8 }}
                onClick={() => openLightbox(project)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-accent text-white px-6 py-3 rounded-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-text group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEAL Fleet Projects Gallery */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Truck className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text">FEAL Fleet Projects</h2>
              <p className="text-muted">Commercial vehicle electrical systems and installations</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {fleetProjects.map((project, index) => {
              const displayImage = project.images ? project.images[0] : project.image;
              const hasMultiple = project.images && project.images.length > 1;

              return (
                <motion.div
                  key={project.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border-t-4 border-primary"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1
                  }}
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(project)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={displayImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Multiple Images Indicator */}
                    {hasMultiple && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <span>{project.images.length} photos</span>
                      </div>
                    )}
                    
                    {/* View Details Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
                        {hasMultiple ? 'View Gallery' : 'View Details'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-bold text-xl mb-2 text-text group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition p-2 bg-black/50 rounded-full z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            {hasMultipleImages() && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition p-3 bg-black/50 rounded-full z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Next Button */}
            {hasMultipleImages() && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition p-3 bg-black/50 rounded-full z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image Container */}
            <motion.div
              className="max-w-6xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* Image */}
                <div className="relative h-[60vh] bg-gray-100">
                  <Image
                    src={getCurrentImage()}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="object-contain"
                    key={currentImageIndex}
                  />
                  
                  {/* Image Counter */}
                  {hasMultipleImages() && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {currentImageIndex + 1} / {selectedImage.images.length}
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {hasMultipleImages() && (
                  <div className="flex gap-2 p-4 bg-gray-100 overflow-x-auto">
                    {selectedImage.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                          idx === currentImageIndex 
                            ? 'border-primary shadow-lg' 
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${selectedImage.title} ${idx + 1}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="p-8">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                    selectedImage.category === 'Off-Grid' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {selectedImage.category}
                  </span>
                  <h3 className="font-bold text-3xl mb-4 text-text">
                    {selectedImage.title}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional Info Section */}
      <section className="py-16 bg-bg">
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
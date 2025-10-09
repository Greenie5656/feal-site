"use client";
import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, image, ctaText, ctaLink, height = "h-[500px]" }) {
  return (
    <section
      className={`relative ${height} bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
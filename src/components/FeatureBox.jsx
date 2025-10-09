"use client";
import { motion } from 'framer-motion';

export default function FeatureBox({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all border-t-4 border-accent relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
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
          className="text-5xl mb-4 text-center"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="font-bold text-xl mb-3 text-center text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-muted text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          {description}
        </motion.p>
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
}
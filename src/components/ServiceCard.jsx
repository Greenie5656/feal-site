"use client";
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-primary transition-all relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative z-10">
        <motion.div 
          className="text-4xl mb-3"
          whileHover={{ 
            scale: 1.2,
            rotate: 10,
            transition: { duration: 0.3, type: "spring", stiffness: 300 }
          }}
        >
          {icon}
        </motion.div>
        
        <h3 className="font-bold text-xl mb-2 text-text group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted leading-relaxed">
          {description}
        </p>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
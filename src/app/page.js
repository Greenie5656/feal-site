"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center">
      <motion.h1
        className="text-5xl font-heading mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        FEAL Motion Test
      </motion.h1>

      <motion.button
        className="px-6 py-3 rounded bg-primary text-white font-medium"
        whileHover={{ scale: 1.1, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Hover Me 🚀
      </motion.button>
    </main>
  );
}

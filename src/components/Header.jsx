"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'FEAL Fleet', href: '/fleet' },
    { name: 'FEAL Off-Grid', href: '/off-grid' },
    { name: 'FEAL Trackers', href: '/trackers' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 border-b-2 border-accent">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="block focus:outline-none focus:ring-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="focus:outline-none"
            >
              <Image 
                src="/Logo-nobg.png" 
                alt="FEAL Logo" 
                width={120} 
                height={60}
                className="object-contain"
                style={{ height: 'auto' }}  
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <Link 
                  href={link.href}
                  className="text-gray-800 font-semibold hover:text-primary transition-colors relative group"
                >
                  <span className="block">
                    {link.name}
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden border-l-2 border-accent overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition z-10"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo in Menu */}
              <div className="p-6 border-b-2 border-accent bg-bg sticky top-0 z-10">
                <Image 
                  src="/Logo-nobg.png" 
                  alt="FEAL Logo" 
                  width={120} 
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col p-6 space-y-2 pb-64">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-5 py-4 text-gray-800 text-lg font-semibold active:bg-primary active:text-white hover:bg-primary hover:text-white rounded-lg transition-all hover:translate-x-2 border-l-4 border-transparent hover:border-accent active:scale-95"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Contact Info in Mobile Menu */}
              <div className="px-6 pb-6 text-gray-800 text-sm border-t-2 border-accent pt-6 bg-bg mx-4 mb-4 rounded-lg">
                <p className="font-bold mb-3 text-primary text-base">Get In Touch</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>07702 071515</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>07850 172376</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-xs">fealelectricalautomotiveltd@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'OUR STORY', href: '/about' },
  { name: 'SIGNATURE SUITES', href: '/rooms' },
  { name: 'EXPERIENCES', href: '/experiences' },
  { name: 'DINING', href: '/dining' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed w-full top-0 z-50 transition-all duration-700 text-[#f8f6f0]',
          scrolled ? 'py-3 bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif tracking-[0.15em] uppercase z-50 relative font-light">
            Aura
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex gap-8 items-center text-[11px] tracking-[0.15em] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#b09677] transition-colors pb-1 border-b border-transparent hover:border-[#b09677]"
                >
                  <span className="relative z-10 group-hover:text-[#b09677] transition-colors duration-500">{link.name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#b09677] transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <Link 
              href="/booking" 
              className="ml-4 px-6 py-3 border border-[#f8f6f0]/30 hover:border-[#f8f6f0] transition-colors text-[11px] tracking-[0.15em] uppercase"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-[#f8f6f0] relative"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={cn("block w-6 h-[1px] bg-current transition-transform duration-300", mobileMenuOpen && "translate-y-2.5 rotate-45")}></span>
              <span className={cn("block w-6 h-[1px] bg-current transition-opacity duration-300", mobileMenuOpen && "opacity-0")}></span>
              <span className={cn("block w-6 h-[1px] bg-current transition-transform duration-300", mobileMenuOpen && "-translate-y-0.5 -rotate-45")}></span>
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#0a0a0a] text-[#f8f6f0] z-40 flex flex-col px-8 sm:px-12"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1714]/40 pointer-events-none"></div>
            <nav className="flex flex-col flex-1 justify-center relative z-10 -mt-10">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#b09677] font-medium mb-8">Navigation</span>
              <div className="flex flex-col gap-4">
                {[...navLinks].map((link, i) => (
                  <div key={link.name} className="overflow-hidden py-1">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-serif text-[28px] sm:text-[36px] font-light leading-none transition-all duration-500 hover:text-[#b09677]"
                      >
                        {link.name === 'HOME' ? 'Home' : link.name.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 pt-10 border-t border-white/10 w-full max-w-xs"
              >
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-4 px-8 py-4 border border-[#b09677]/40 text-[#b09677] hover:bg-[#b09677] hover:text-[#0a0a0a] transition-all duration-300 text-[10px] tracking-[0.2em] uppercase font-medium w-full justify-center group"
                >
                  BOOK NOW
                  <span className="text-lg leading-none font-light group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

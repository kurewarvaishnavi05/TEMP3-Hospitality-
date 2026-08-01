'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <h2 className="text-[6rem] sm:text-[8rem] lg:text-[12rem] font-serif text-accent uppercase tracking-widest leading-none mb-12">Aura</h2>
          <p className="text-muted max-w-lg font-sans mb-10 leading-[1.8] font-light">
            Experience the pinnacle of luxury and serenity. Join our exclusive newsletter for curated offers and destination stories.
          </p>
          <div className="relative w-full max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="w-full bg-transparent border-b border-white/20 px-4 py-4 text-xs font-sans tracking-[0.2em] text-center text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
            />
            <button 
              className="absolute right-0 top-0 bottom-0 px-4 text-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 justify-items-center md:justify-items-start border-t border-white/10 pt-16">


          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-4">Discover</h4>
            <Link href="/rooms" className="text-muted hover:text-accent font-sans text-sm transition-colors">Signature Suites</Link>
            <Link href="/dining" className="text-muted hover:text-accent font-sans text-sm transition-colors">Fine Dining</Link>
            <Link href="/spa" className="text-muted hover:text-accent font-sans text-sm transition-colors">Spa & Wellness</Link>
            <Link href="/experiences" className="text-muted hover:text-accent font-sans text-sm transition-colors">Experiences</Link>
            <Link href="/gallery" className="text-muted hover:text-accent font-sans text-sm transition-colors">Gallery</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="flex items-start gap-3 text-muted text-sm group cursor-pointer hover:text-accent transition-colors">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>123 Luxury Avenue, Paradise Island, Maldives 99999</span>
            </div>
            <div className="flex items-center gap-3 text-muted text-sm group cursor-pointer hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-muted text-sm group cursor-pointer hover:text-accent transition-colors">
              <Mail size={16} />
              <span>reservations@aurahotel.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="flex items-center gap-6 text-muted">
            <p className="text-xs font-sans tracking-widest">&copy; {new Date().getFullYear()} AURA LUXURY HOTEL. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

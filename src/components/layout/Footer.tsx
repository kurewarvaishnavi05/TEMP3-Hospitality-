'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-8 text-white text-sm font-sans relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 relative z-10">
          
          {/* Col 1: Logo & Info */}
          <div className="flex flex-col">
            <h2 className="text-5xl font-serif text-[#d4b483] tracking-[0.3em] mb-8 drop-shadow-sm">A U R A</h2>
            <p className="text-white/70 text-xs mb-8 leading-loose font-light">
              Building hospitality brands and experiences that create a lasting impact.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#d4b483] rotate-45 shrink-0"></div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4b483] font-semibold">Meaningful Hospitality</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#d4b483] rotate-45 shrink-0"></div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4b483] font-semibold">Memorable Experiences</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#d4b483] rotate-45 shrink-0"></div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4b483] font-semibold">Modern Luxury</span>
              </li>
            </ul>
            <div className="flex gap-5 mt-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-[#d4b483] hover:border-[#d4b483] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-black transition-colors duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-[#d4b483] hover:border-[#d4b483] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-black transition-colors duration-300"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-[#d4b483] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Quick Links</h4>
            <div className="w-full flex items-center gap-2 mb-8 opacity-40">
              <div className="w-1.5 h-1.5 bg-[#d4b483] rotate-45"></div>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <Link href="/" className="text-white/60 hover:text-white text-xs transition-all duration-300 hover:translate-x-2">Home</Link>
              <Link href="/about" className="text-white/60 hover:text-white text-xs transition-all duration-300 hover:translate-x-2">About Us</Link>
              <Link href="/rooms" className="text-white/60 hover:text-white text-xs transition-all duration-300 hover:translate-x-2">Signature Suites</Link>
              <Link href="/experiences" className="text-white/60 hover:text-white text-xs transition-all duration-300 hover:translate-x-2">Experiences</Link>
              <Link href="/dining" className="text-white/60 hover:text-white text-xs transition-all duration-300 hover:translate-x-2">Dining</Link>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col lg:pl-4">
            <h4 className="text-[#d4b483] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Contact</h4>
            <div className="w-full flex items-center gap-2 mb-8 opacity-40">
              <div className="w-1.5 h-1.5 bg-[#d4b483] rotate-45"></div>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <MapPin size={14} className="text-[#d4b483] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white/70 text-xs leading-loose group-hover:text-white transition-colors duration-300">Paradise Island, Maldives<br/>99999</span>
              </div>
              <div className="flex items-center gap-4 group">
                <Mail size={14} className="text-[#d4b483] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:corporate@aurahotels.com" className="text-white/70 text-xs hover:text-white transition-all duration-300 hover:translate-x-1">corporate@aurahotels.com</a>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone size={14} className="text-[#d4b483] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+18001234567" className="text-white/70 text-xs hover:text-white transition-all duration-300 hover:translate-x-1">+1 (800) 123-4567</a>
              </div>
            </div>
          </div>

          {/* Col 4: Buttons & Copyright info */}
          <div className="flex flex-col items-start lg:items-end w-full">
            <Link href="/partner" className="w-full sm:w-64 flex items-center justify-between bg-[#f8f5f0] text-black px-6 py-4 mb-4 hover:bg-[#d4b483] transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Partner</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link href="/careers" className="w-full sm:w-64 flex items-center justify-between border border-[#d4b483] text-[#d4b483] px-6 py-4 mb-16 hover:bg-[#d4b483] hover:text-black transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Careers</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <p className="text-white/40 text-[9px] leading-relaxed mb-4 text-left lg:text-right max-w-[280px]">
              &copy; {new Date().getFullYear()} Aura Hospitality & Entertainment LLP. All Rights Reserved.
            </p>
            <p className="text-white/40 text-[9px] leading-relaxed text-left lg:text-right max-w-[280px]">
              Aura Hotels is the flagship hospitality brand of Aura Hospitality & Entertainment LLP.
            </p>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/40 text-[10px] flex items-center gap-2">
            &copy; {new Date().getFullYear()} Aura Hotels. <span className="opacity-40">|</span> Website managed and maintained by BizLeap.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

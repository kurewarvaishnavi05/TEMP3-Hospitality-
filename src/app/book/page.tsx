'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, User, Search, MapPin, CheckCircle2, Bed, Star, Coffee, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [destination, setDestination] = useState('maldives');
  const [roomType, setRoomType] = useState('any');

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#f4eee6] min-h-screen text-[#121210] overflow-hidden">
      {/* Hero Section */}
      <section ref={container} className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c53?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Resort view"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/50"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#c4b197] font-bold mb-6 block"
          >
            Aura Resorts & Hotels
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] font-light text-white"
          >
            Reserve Your Stay
          </motion.h1>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative z-20 -mt-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-12">
          
          {/* Main Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full xl:w-2/3 bg-white p-8 md:p-12 shadow-2xl shadow-black/5"
          >
            <div className="mb-10 border-b border-[#e2dcd2] pb-6">
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#3a3a3a] mb-2 font-light">Your Details</h2>
              <p className="text-[#3a3a3a]/60 text-sm">Select your preferences to find the perfect luxury experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
              {/* Destination */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a3a]/60 font-semibold flex items-center gap-2">
                  <MapPin size={14} className="text-[#b09677]" /> Destination
                </label>
                <div className="relative border-b border-[#e2dcd2] pb-2">
                  <select 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent outline-none font-serif text-lg text-[#3a3a3a] cursor-pointer appearance-none"
                  >
                    <option value="maldives">Aura Maldives Resort & Spa</option>
                    <option value="dubai">Aura Sky Tower Dubai</option>
                    <option value="swiss">Aura Alpine Retreat Switzerland</option>
                  </select>
                </div>
              </div>

              {/* Suite Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a3a]/60 font-semibold flex items-center gap-2">
                  <Bed size={14} className="text-[#b09677]" /> Accommodation
                </label>
                <div className="relative border-b border-[#e2dcd2] pb-2">
                  <select 
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-transparent outline-none font-serif text-lg text-[#3a3a3a] cursor-pointer appearance-none"
                  >
                    <option value="any">Any Available Suite</option>
                    <option value="deluxe">Deluxe Ocean View</option>
                    <option value="villa">Private Pool Villa</option>
                    <option value="presidential">Presidential Suite</option>
                  </select>
                </div>
              </div>

              {/* Check In */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a3a]/60 font-semibold flex items-center gap-2">
                  <Calendar size={14} className="text-[#b09677]" /> Check In
                </label>
                <div className="relative border-b border-[#e2dcd2] pb-2">
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent outline-none font-serif text-lg text-[#3a3a3a] cursor-pointer"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a3a]/60 font-semibold flex items-center gap-2">
                  <Calendar size={14} className="text-[#b09677]" /> Check Out
                </label>
                <div className="relative border-b border-[#e2dcd2] pb-2">
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent outline-none font-serif text-lg text-[#3a3a3a] cursor-pointer"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a3a]/60 font-semibold flex items-center gap-2">
                  <User size={14} className="text-[#b09677]" /> Guests
                </label>
                <div className="relative border-b border-[#e2dcd2] pb-2">
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent outline-none font-serif text-lg text-[#3a3a3a] cursor-pointer appearance-none"
                  >
                    <option value="1">1 Adult, 0 Children</option>
                    <option value="2">2 Adults, 0 Children</option>
                    <option value="3">2 Adults, 1 Child</option>
                    <option value="4">2 Adults, 2 Children</option>
                    <option value="5">4 Adults (Two Rooms)</option>
                  </select>
                </div>
              </div>

            </div>

            <button 
              className="w-full py-5 bg-[#0a0a0a] text-[#f8f6f0] hover:bg-[#b09677] transition-colors duration-500 flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.2em] font-medium"
            >
              <Search size={16} />
              Check Availability & Rates
            </button>
            <p className="text-center text-[11px] text-[#3a3a3a]/50 mt-4">No payment is required to check availability.</p>

          </motion.div>

          {/* Sidebar / Book Direct Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full xl:w-1/3 bg-[#f8f5f0] p-8 md:p-12 border border-[#e2dcd2]"
          >
            <h3 className="font-serif text-[24px] text-[#3a3a3a] mb-8 font-light">Book Direct Benefits</h3>
            <div className="flex flex-col gap-8">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#e2dcd2] text-[#b09677]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#3a3a3a] uppercase tracking-widest mb-2">Best Rate Guarantee</h4>
                  <p className="text-[#3a3a3a]/70 text-sm leading-relaxed">Find a lower price elsewhere? We'll match it and give you an additional 10% off your stay.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#e2dcd2] text-[#b09677]">
                  <Coffee size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#3a3a3a] uppercase tracking-widest mb-2">Complimentary Breakfast</h4>
                  <p className="text-[#3a3a3a]/70 text-sm leading-relaxed">Enjoy our signature buffet breakfast for two, completely on the house, every morning of your stay.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#e2dcd2] text-[#b09677]">
                  <Star size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#3a3a3a] uppercase tracking-widest mb-2">Exclusive Upgrades</h4>
                  <p className="text-[#3a3a3a]/70 text-sm leading-relaxed">Priority for complimentary room upgrades, early check-in, and late check-out when available.</p>
                </div>
              </div>

            </div>
            
            <div className="mt-12 pt-8 border-t border-[#e2dcd2]">
              <p className="text-[#3a3a3a]/60 text-sm mb-4">Need assistance with your booking?</p>
              <a href="tel:+18001234567" className="text-[#b09677] text-lg font-serif block hover:text-[#0a0a0a] transition-colors">+1 (800) 123-4567</a>
              <a href="mailto:reservations@aurahotels.com" className="text-[#3a3a3a] text-sm hover:text-[#b09677] transition-colors mt-2 block">reservations@aurahotels.com</a>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
}

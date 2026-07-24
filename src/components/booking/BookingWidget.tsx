'use client';

import { useState } from 'react';
import { Calendar, User, Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-30"
    >
      <div className="glass rounded-none p-2 lg:p-4 flex flex-col lg:flex-row items-center gap-4 border border-white/10 shadow-2xl">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Destination */}
          <div className="relative group px-4 py-2">
            <label className="text-[10px] uppercase tracking-widest text-muted block mb-1">Destination</label>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin size={16} className="text-accent" />
              <select className="bg-transparent text-sm w-full outline-none appearance-none cursor-pointer font-serif">
                <option value="maldives" className="text-black">Aura Maldives</option>
                <option value="dubai" className="text-black">Aura Dubai</option>
                <option value="swiss" className="text-black">Aura Alps</option>
              </select>
            </div>
            <div className="absolute left-0 bottom-0 w-[1px] h-full bg-white/10 hidden lg:block"></div>
          </div>

          {/* Check In */}
          <div className="relative group px-4 py-2 border-l border-white/5 lg:border-none">
            <label className="text-[10px] uppercase tracking-widest text-muted block mb-1">Check In</label>
            <div className="flex items-center gap-2 text-foreground">
              <Calendar size={16} className="text-accent" />
              <input 
                type="date" 
                className="bg-transparent text-sm w-full outline-none cursor-pointer font-serif"
                onChange={(e) => setCheckIn(e.target.value)}
                value={checkIn}
              />
            </div>
            <div className="absolute left-0 bottom-0 w-[1px] h-full bg-white/10 hidden lg:block"></div>
          </div>

          {/* Check Out */}
          <div className="relative group px-4 py-2 border-t border-white/5 lg:border-none lg:border-t-0">
            <label className="text-[10px] uppercase tracking-widest text-muted block mb-1">Check Out</label>
            <div className="flex items-center gap-2 text-foreground">
              <Calendar size={16} className="text-accent" />
              <input 
                type="date" 
                className="bg-transparent text-sm w-full outline-none cursor-pointer font-serif"
                onChange={(e) => setCheckOut(e.target.value)}
                value={checkOut}
              />
            </div>
            <div className="absolute left-0 bottom-0 w-[1px] h-full bg-white/10 hidden lg:block"></div>
          </div>

          {/* Guests */}
          <div className="relative group px-4 py-2 border-t border-l border-white/5 lg:border-none">
            <label className="text-[10px] uppercase tracking-widest text-muted block mb-1">Guests</label>
            <div className="flex items-center gap-2 text-foreground">
              <User size={16} className="text-accent" />
              <select 
                className="bg-transparent text-sm w-full outline-none appearance-none cursor-pointer font-serif"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1" className="text-black">1 Adult</option>
                <option value="2" className="text-black">2 Adults</option>
                <option value="3" className="text-black">3 Adults</option>
                <option value="4" className="text-black">4 Adults</option>
              </select>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button 
          className="w-full lg:w-auto px-8 py-4 bg-accent text-background hover:bg-white transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-widest flex-shrink-0"
          data-magnetic="true"
        >
          <Search size={16} />
          <span>Check Availability</span>
        </button>

      </div>
    </motion.div>
  );
}

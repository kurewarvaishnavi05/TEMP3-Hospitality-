'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const suites = [
  {
    name: 'The Royal Suite',
    desc: 'Our most expansive and luxurious offering, featuring panoramic views, a private terrace, and uncompromising elegance in every detail.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop',
    size: '150 sq m / 1,614 sq ft',
    view: 'Panoramic Ocean',
    guests: 'Up to 3 guests'
  },
  {
    name: 'The Penthouse',
    desc: 'A breathtaking sanctuary situated on our highest floor. Floor-to-ceiling windows bathe the space in natural light.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    size: '120 sq m / 1,291 sq ft',
    view: 'Cityscape & Ocean',
    guests: 'Up to 4 guests'
  },
  {
    name: 'Ocean View Suite',
    desc: 'Wake up to the sound of waves. This suite perfectly balances coastal tranquility with modern sophistication.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    size: '90 sq m / 968 sq ft',
    view: 'Oceanfront',
    guests: 'Up to 2 guests'
  }
];

export default function RoomsPage() {
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
      <section ref={container} className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Suite"
            fill
            priority
            className="object-cover opacity-80"
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
            Accommodations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] font-light text-white"
          >
            Signature Suites
          </motion.h1>
        </div>
      </section>

      {/* Suites List */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {suites.map((suite, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={suite.name} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 mb-32 last:mb-0`}
              >
                <div className="w-full lg:w-[55%] h-[60vh] min-h-[500px] relative overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={suite.image} 
                      alt={suite.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                
                <div className="w-full lg:w-[45%] flex flex-col items-start bg-surface/80 lg:bg-transparent p-6 lg:p-0">
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl lg:text-5xl font-serif text-[#3a3a3a] leading-[1.1] mb-6 font-light"
                  >
                    {suite.name}
                  </motion.h2>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-col gap-3 mb-8 text-[#b09677] text-[11px] tracking-[0.15em] uppercase font-bold"
                  >
                    <span>{suite.size}</span>
                    <span>{suite.view}</span>
                    <span>{suite.guests}</span>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#3a3a3a]/70 font-sans font-light leading-[1.8] max-w-md text-sm mb-12"
                  >
                    {suite.desc}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Link 
                      href="/booking"
                      className="inline-block px-8 py-4 bg-[#b09677] text-white hover:bg-[#0a0a0a] transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-medium"
                    >
                      Book This Suite
                    </Link>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
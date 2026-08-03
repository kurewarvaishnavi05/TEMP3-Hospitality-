'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "An unparalleled experience. The attention to detail and personalized service made our stay truly unforgettable. The ocean villa exceeded all expectations.",
    author: "Elena Rodriguez",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1542314831-c53cd4b85ca4?q=80&w=2070&auto=format&fit=crop", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The culinary journey at Aura is spectacular. Every meal was a masterpiece, perfectly complemented by the breathtaking architecture and sunset views.",
    author: "James Chen",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "A sanctuary of tranquility. The wellness spa treatments combined with the serene environment provided the perfect escape from city life.",
    author: "Sarah Sterling",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNextClick = () => {
    next();
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next, currentIndex]);

  return (
    <section className="relative h-screen min-h-[800px] w-full bg-[#0D0D0D] overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={testimonials[currentIndex].image}
            alt="Hospitality background"
            fill
            className="object-cover"
            priority
          />
          {/* Removed overlay to make image clearly visible as requested */}
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center h-full justify-center">
        
        {/* Quotation Marks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#D4B483]/40 font-serif text-[12rem] leading-[0.5] h-24 mb-16 select-none -ml-4"
        >
          &ldquo;
        </motion.div>

        <div className="w-full max-w-5xl relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-[#D4B483] fill-[#D4B483]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-3xl md:text-5xl font-serif text-[#F8F5F0] leading-relaxed mb-16">
                {testimonials[currentIndex].quote}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden relative border border-[#D4B483]/30">
                  <Image 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-[#F8F5F0] font-sans text-lg font-semibold tracking-wide">
                    {testimonials[currentIndex].author}
                  </span>
                  <span className="block text-[#D4B483] text-xs uppercase tracking-widest mt-1 font-semibold">
                    {testimonials[currentIndex].country}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Progress */}
        <div className="absolute bottom-16 left-0 right-0 px-6 lg:px-24 w-full flex items-center justify-between">
          <button 
            onClick={prev}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F8F5F0] hover:text-[#0D0D0D] transition-colors duration-500 backdrop-blur-md"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className="relative h-1 w-16 bg-white/20 rounded-full overflow-hidden cursor-pointer" 
                onClick={() => { setCurrentIndex(idx); setIsAutoPlaying(false); }}
              >
                {idx === currentIndex && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: isAutoPlaying ? 6 : 0, ease: "linear" }}
                    className="absolute inset-0 bg-[#D4B483] origin-left"
                  />
                )}
                {idx < currentIndex && (
                   <div className="absolute inset-0 bg-[#D4B483]" />
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={handleNextClick}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F8F5F0] hover:text-[#0D0D0D] transition-colors duration-500 backdrop-blur-md"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

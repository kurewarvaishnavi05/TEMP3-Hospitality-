'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const feed = [
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop", 
    likes: "2.4k", comments: 142, caption: "Morning tranquility at the spa."
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", 
    likes: "1.8k", comments: 89, caption: "Culinary perfection by our Executive Chef."
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop", 
    likes: "3.1k", comments: 210, caption: "Sunset views from the Infinity Pool."
  },
  {
    src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=800&auto=format&fit=crop", 
    likes: "4.5k", comments: 320, caption: "The Ocean Suite awaits."
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", 
    likes: "1.2k", comments: 56, caption: "Private dining under the stars."
  },
];

export function InstagramFeed() {
  return (
    <section className="py-32 bg-[#F8F5F0] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#D4B483] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block"
        >
          Social Experience
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-[#0D0D0D] mb-8"
        >
          Follow Our Journey
        </motion.h2>
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#" 
          className="group flex items-center gap-3 text-xs uppercase tracking-widest text-[#0D0D0D] font-semibold hover:text-[#D4B483] transition-colors duration-300"
        >
          Follow on Instagram 
          <motion.span 
            className="inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >→</motion.span>
        </motion.a>
      </div>

      <div className="w-full relative flex overflow-x-hidden">
        {/* Infinite scrolling marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex w-max"
        >
          {[...feed, ...feed, ...feed].map((item, i) => (
            <div 
              key={i}
              className="w-[300px] md:w-[400px] aspect-[4/5] relative group mx-3 overflow-hidden cursor-pointer bg-[#0D0D0D]"
            >
              <Image 
                src={item.src} 
                alt={item.caption} 
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover transition-transform duration-1000 ease-[0.19,1,0.22,1] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0D0D0D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                <InstagramIcon className="text-[#F8F5F0] w-12 h-12 mb-6 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                
                <p className="text-[#F8F5F0] font-sans text-sm font-medium mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                  {item.caption}
                </p>
                
                <div className="flex items-center gap-6 text-[#F8F5F0] text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="flex items-center gap-2">
                    <Heart size={16} className="fill-[#F8F5F0]" /> {item.likes}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle size={16} className="fill-[#F8F5F0]" /> {item.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

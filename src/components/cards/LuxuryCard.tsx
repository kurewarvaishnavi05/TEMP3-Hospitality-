'use client';

import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LuxuryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
  className?: string;
}

export function LuxuryCard({ title, description, image, link, category, className }: LuxuryCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Values for spotlight
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);

    // Values for 3D tilt
    const xPct = (e.clientX - left) / width - 0.5;
    const yPct = (e.clientY - top) / height - 0.5;
    rotateX.set(yPct * 10); // max 10 deg tilt
    rotateY.set(xPct * -10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className={cn("w-full relative h-[500px]", className)}
    >
      <Link 
        href={link}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="block relative w-full h-full overflow-hidden group border border-white/5 bg-surface"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full h-full relative z-10 origin-center"
        >
          {/* Spotlight background */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20 mix-blend-overlay"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  rgba(212, 175, 55, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />
            <Image 
              src={image} 
              alt={title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-[0.19,1,0.22,1]" 
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end">
            {category && (
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3 block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {category}
              </span>
            )}
            <h3 className="text-3xl font-serif text-white mb-2">{title}</h3>
            
            <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
              <p className="text-sm font-sans text-white/70 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white group-hover:text-accent transition-colors">
              <span>Explore</span>
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

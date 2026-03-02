"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pb-20 text-center text-white overflow-hidden px-4">
      
      <motion.div
        {...motionProps}
        className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-space-grotesk text-xs text-cyan-400 font-medium tracking-widest uppercase">
          Sys.Status: Online | Latency: 12ms
        </span>
      </motion.div>

      <motion.h1
        {...motionProps}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="font-montserrat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none px-2"
      >
        CTRLR.CLUB SYSTEM
      </motion.h1>
      
      <motion.p
        {...motionProps}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mt-6 font-space-grotesk text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl px-4 uppercase tracking-wider"
      >
        Neuro-Training Interface for Competitive Controller Reflex
      </motion.p>
      
      <motion.div
        {...motionProps}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0"
      >
        <button className="w-full sm:w-auto font-space-grotesk uppercase text-xs sm:text-sm font-bold bg-cyan-500 text-zinc-950 px-4 sm:px-8 py-3.5 sm:py-3.5 rounded-md hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] active:scale-95 flex items-center justify-center text-center min-h-[50px] leading-tight tracking-widest">
          Initialize Training
        </button>
        
        <button className="w-full sm:w-auto font-space-grotesk uppercase text-xs sm:text-sm font-bold border border-zinc-700 text-zinc-300 px-4 sm:px-8 py-3.5 sm:py-3.5 rounded-md hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 active:scale-95 flex items-center justify-center text-center min-h-[50px] leading-tight tracking-widest">
          View System Overview
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <ChevronDown className="w-6 h-6 text-zinc-500" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
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
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pb-20 text-center text-white overflow-hidden px-4 bg-black">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('/assets/hero-hands.png')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-screen" />
         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-0" />
      </div>

      <div className="absolute top-6 left-6 z-10 hidden md:block font-mono text-[10px] text-cyan-500/60 tracking-[0.3em] uppercase">
        [SYS.INIT] // v2.5.1
      </div>
      <div className="absolute top-6 right-6 z-10 hidden md:block font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase">
        ID: 0x88F9A
      </div>
      <div className="absolute bottom-6 left-6 z-10 hidden md:block font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase flex items-center">
        <span className="inline-block w-1.5 h-1.5 bg-cyan-500 animate-pulse mr-2 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
        System Active
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <motion.div
          {...motionProps}
          className="mb-10 flex items-center gap-3 px-5 py-2 border border-cyan-500/50 bg-cyan-950/30 backdrop-blur-md relative"
        >
          <div className="absolute -top-[1px] -left-[1px] w-2 h-[1px] bg-cyan-400"></div>
          <div className="absolute -top-[1px] -left-[1px] w-[1px] h-2 bg-cyan-400"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-[1px] bg-cyan-400"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-[1px] h-2 bg-cyan-400"></div>
          
          <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs text-cyan-400 font-bold tracking-[0.2em] uppercase">
            ONLINE • LOW LATENCY • LIVE BUILD
          </span>
        </motion.div>

        <motion.h1
          {...motionProps}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-montserrat text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none px-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          CTRLRCLUB
        </motion.h1>
        
        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 border-l-2 border-cyan-500 pl-4 text-left max-w-2xl"
        >
          <p className="font-mono text-sm sm:text-base md:text-lg text-zinc-300 uppercase tracking-[0.1em]">
            Performance architecture for elite controller execution.
          </p>
        </motion.div>
        
        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 sm:px-0"
        >
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-10 py-4 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em]">
            <span className="absolute w-2 h-2 bg-cyan-400 top-0 left-0 group-hover:bg-black transition-colors"></span>
            <span className="absolute w-2 h-2 bg-cyan-400 bottom-0 right-0 group-hover:bg-black transition-colors"></span>
            ENGAGE TRAINING
          </button>
          
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold border border-zinc-700 text-zinc-400 px-10 py-4 hover:border-zinc-400 hover:text-white bg-zinc-950/50 transition-all duration-300 active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em]">
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 top-0 left-0 group-hover:bg-zinc-400 transition-colors"></span>
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 bottom-0 right-0 group-hover:bg-zinc-400 transition-colors"></span>
            ACCESS PROTOCOL
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-10 z-10"
      >
        <ChevronDown className="w-8 h-8 text-cyan-500/50 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
      </motion.div>
    </section>
  );
};

export default HeroSection;